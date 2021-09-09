(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2576],{5310:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var a=n(22122),r=n(19756),d=(n(15007),n(64983)),o=n(99536),i=["components"],l={},m={_frontmatter:l},s=o.Z;function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,d.mdx)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"signature-verification-for-events"},"Signature Verification for Events"),(0,d.mdx)("p",null,"Your webhook URL must be accessible from the open internet, however this means third-party actors can send forged requests, tricking your application into handling fake events."),(0,d.mdx)("p",null,"To prevent this from happening, Adobe I/O Events adds an ",(0,d.mdx)("inlineCode",{parentName:"p"},"x-adobe-signature")," header to each POST request it does to your webhook URL, which allows you to verify that the request was really made by Adobe I/O Events."),(0,d.mdx)("p",null,"This signature or “message authentication code” is computed using a cryptographic hash function and a secret key applied to the body of the HTTP request. In particular, a SHA256 ",(0,d.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HMAC"},"HMAC")," is computed of the JSON payload, using your Client Secret as a secret key, and then turned into a Base64 digest. "),(0,d.mdx)("p",null,"This SDK method allows you to pass the ",(0,d.mdx)("inlineCode",{parentName:"p"},"x-adobe-signature")," header received and the JSON payload delivered to the webhook to check its authenticity. The method returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"true")," if the calculated signature matches that of the header, otherwise it returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"false"),". "),(0,d.mdx)("p",null,"This can be incorporated as part of any webhook implementation in order to verify the signature for each event received at the webhook endpoint. "),(0,d.mdx)("p",null,"For information on installing and using the SDK, please begin by reading the ",(0,d.mdx)("a",{parentName:"p",href:"sdk_getting_started.md"},"getting started guide"),"."),(0,d.mdx)("h2",{id:"method"},"Method"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"verifySignatureForEvent(event, clientSecret, signatureHeaderValue) ⇒ boolean\n")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"event")),(0,d.mdx)("td",{parentName:"tr",align:null},"object"),(0,d.mdx)("td",{parentName:"tr",align:null},"JSON payload delivered to the registered webhook URL.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"clientSecret")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Client Secret can be retrieved from the ",(0,d.mdx)("a",{parentName:"td",href:"https://www.adobe.com/go/devs_console_ui"},"Adobe Developer Console"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"signatureHeaderValue")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"Value of ",(0,d.mdx)("inlineCode",{parentName:"td"},"x-adobe-signature")," header in each POST request to the registered webhook URL.")))),(0,d.mdx)("h2",{id:"sample-headers"},"Sample Headers"),(0,d.mdx)("p",null,"Headers received as part of POST to webhook URL:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-http"},"Request URL: <webhook_url>\nRequest method: POST\nContent-Type: application/json; charset=utf-8\naccept-encoding: deflate,compress,identity\nuser-agent: Adobe/1.0\nx-adobe-delivery-id: <id>\nx-adobe-event-code: <event_code>\nx-adobe-event-id: <event_id>\nx-adobe-provider: <provider_name>\nx-adobe-signature: <signature>\n")),(0,d.mdx)("h2",{id:"response"},"Response"),(0,d.mdx)("p",null,"If signature matches, returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"true")," otherwise returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"false"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-sdk-sdk-signature-verification-md-debe3ac22a81ffa230ff.js.map