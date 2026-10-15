--- a/Refactoring-Model/index.html
+++ b/Refactoring-Model/index.html
@@
-      for(const m of s.matchAll(/\son[a-z]+\s*=\s*(["'])/gi))addFinding("warning",path,`Inline event handler ${m[0].trim().split("=")[0]} found.`,"high");
+      const handlerCounts=new Map();
+      for(const m of s.matchAll(/\son([a-z]+)\s*=\s*(["'])/gi)){const n=m[1].toLowerCase();handlerCounts.set(n,(handlerCounts.get(n)||0)+1)}
+      for(const [n,c] of handlerCounts)addFinding("info",path,"Inline "+n+" handler: "+c+" occurrence(s); review context before treating this as a defect.","low");
@@
-        if(!knownPaths.has(resolved) && !ref.startsWith("/"))addFinding("warning",path,`Referenced local file not loaded: ${ref}`,"low");
+        if(!knownPaths.has(resolved) && !ref.startsWith("/"))addFinding("info",path,`Local reference not included in uploaded files: ${ref}. This does not prove it is missing from the deployed site.`,"low");
@@
-  const rows=findings.map(f=>`<tr><td class="${f.level==="error"?"bad":f.level==="warning"?"warn":"muted"}">${safeText(f.level.toUpperCase())}</td><td>${safeText(f.path)}</td><td>${safeText(f.message)}</td><td>${safeText(f.confidence)}</td></tr>`).join("");
+  auditMatchedCss(entries);
+  const rows=findings.map(f=>`<tr><td class="${f.level==="error"?"bad":f.level==="warning"?"warn":"muted"}">${safeText(f.level.toUpperCase())}</td><td>${safeText(f.path)}</td><td>${safeText(f.message)}</td><td>${safeText(f.confidence)}</td></tr>`).join("");
@@
-function escapeRegExp(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}
+function auditMatchedCss(entries){
+  const htmlEntries=entries.filter(([p])=>kind(p)==="html");
+  const cssFiles=new Map(entries.filter(([p])=>kind(p)==="css").map(([p,f])=>[p.replace(/\\/g,"/"),f.content]));
+  let reported=0;
+  for(const [htmlPath,file] of htmlEntries){
+    let doc;try{doc=new DOMParser().parseFromString(file.content,"text/html")}catch(e){continue}
+    const sources=[];
+    for(const node of [...doc.querySelectorAll("link[rel~='stylesheet'][href],style")]){
+      if(node.tagName.toLowerCase()==="style"){sources.push({name:htmlPath+" inline <style>",text:node.textContent||""});continue}
+      const href=(node.getAttribute("href")||"").split(/[?#]/)[0];
+      if(/^(https?:|\/\/|data:)/i.test(href))continue;
+      const resolved=resolvePath(htmlPath,href);
+      if(cssFiles.has(resolved))sources.push({name:resolved,text:cssFiles.get(resolved)});
+    }
+    if(!sources.length)continue;
+    const candidates=new Map();let order=0;
+    for(const source of sources){
+      const style=doc.createElement("style");style.textContent=source.text;doc.head.appendChild(style);
+      let rules=[];try{rules=[...style.sheet.cssRules]}catch(e){}
+      function walk(list,condition){
+        for(const rule of list){
+          if(rule.type===1){
+            let nodes=[];try{nodes=[...doc.querySelectorAll(rule.selectorText)]}catch(e){order++;continue}
+            for(const el of nodes){
+              const label=el.tagName.toLowerCase()+(el.id?"#"+el.id:"")+[...el.classList].map(c=>"."+c).join("");
+              for(let i=0;i<rule.style.length;i++){
+                const prop=rule.style[i],value=rule.style.getPropertyValue(prop).trim(),important=rule.style.getPropertyPriority(prop)==="important";
+                const key=label+"|"+prop,arr=candidates.get(key)||[];
+                arr.push({selector:rule.selectorText,prop,value,important,source:source.name,order:order,condition:condition});candidates.set(key,arr);
+              }
+            }
+          }else if(rule.cssRules)walk([...rule.cssRules],condition?condition+"; "+(rule.conditionText||rule.name):(rule.conditionText||rule.name||"group rule"));
+          order++;
+        }
+      }
+      walk(rules,"");style.remove();
+    }
+    for(const [key,arr] of candidates){
+      if(reported>=60)break;
+      if([...new Set(arr.map(x=>x.value+(x.important?" !important":"")))].length<2)continue;
+      const important=arr.filter(x=>x.important),pool=important.length?important:arr,last=pool[pool.length-1],split=key.split("|");
+      addFinding("info",htmlPath,"Matched CSS for "+split[0]+" → "+split[1]+": "+arr.map(x=>x.selector+" { "+x.prop+": "+x.value+(x.important?" !important":"")+" } ["+x.source+(x.condition?" / "+x.condition:"")+"]").join(" | ")+". Likely source-order candidate: "+last.value+" from "+last.selector+". This is not a computed-style guarantee: specificity, cascade layers, media state, inline styles and runtime changes may alter the winner.","medium");
+      reported++;
+    }
+  }
+  if(reported)addFinding("info","CSS audit","Reported "+reported+" matched element/property conflicts. Use browser DevTools → Computed to confirm the winning declaration for the visible element.","medium");
+}
+function escapeRegExp(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}
*** End Patch
