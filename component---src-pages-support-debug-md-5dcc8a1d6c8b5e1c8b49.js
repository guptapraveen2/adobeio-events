(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9258],{57927:function(e,t,o){"use strict";o.r(t),o.d(t,{_frontmatter:function(){return u},default:function(){return g}});var n=o(22122),a=o(19756),r=(o(15007),o(64983)),i=o(99536),s=["components"],u={},d={_frontmatter:u},l=i.Z;function g(e){var t=e.components,o=(0,a.Z)(e,s);return(0,r.mdx)(l,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"debugging-adobe-io-events"},"Debugging Adobe I/O Events"),(0,r.mdx)("p",null,"This page captures the most common troubleshooting scenarios when working with Adobe Events. "),(0,r.mdx)("h2",{id:"analytics-triggers-events"},"Analytics Triggers Events"),(0,r.mdx)("p",null,"If your Analytics Triggers events aren't coming through to your integration, a breakdown in communication may have occurred at any step in the events process. You'll need to check each step in order to verify where the breakdown has occurred and then fix your configuration accordingly."),(0,r.mdx)("p",null,"The process of communicating Analytics Triggers via I/O Events consists of the following steps:"),(0,r.mdx)("p",null,"(1) Web page > (2) Analytics call > (3) Analytics Triggers > (4) Adobe I/O Events > (5) Webhook"),(0,r.mdx)("h3",{id:"debug-1--2"},"Debug 1 > 2"),(0,r.mdx)("p",null,"If 1 > 2 is working, it means that Analytics code has been embedded in your webpage, and analytics calls (",(0,r.mdx)("strong",{parentName:"p"},"Note:")," not necessarily Trigger calls) are firing and going through.\nYou can verify your Adobe Analytics connection via the Debugger:"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/debugger-for-adobe-analyt/bdingoflfadhnjohjaplginnpjeclmof"},"https://chrome.google.com/webstore/detail/debugger-for-adobe-analyt/bdingoflfadhnjohjaplginnpjeclmof"),"\n",(0,r.mdx)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/adobe-experience-cloud-de/ocdmogmohccmeicdhlhhgepeaijenapj"},"https://chrome.google.com/webstore/detail/adobe-experience-cloud-de/ocdmogmohccmeicdhlhhgepeaijenapj")),(0,r.mdx)("h3",{id:"debug-2--3"},"Debug 2 > 3"),(0,r.mdx)("p",null,"If 2 > 3 is working, it means that your Triggers pattern is valid and reflects the customer behavioral pattern that you are trying to mirror. If you verified that the Analytics connection is going through, but no Trigger has been fired, you can try the following methods:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Make sure you have outlasted the ","“","inactivity time","”"," that you've set: for example, if you set it to be 10 minutes, then make sure there are absolutely no actions on your page for 10 minutes so that Triggers can identify this pattern and fire."),(0,r.mdx)("li",{parentName:"ul"},"Compare your Triggers setting to your Analytics live output."),(0,r.mdx)("li",{parentName:"ul"},"Make sure you are talking to the correct reporting suite."),(0,r.mdx)("li",{parentName:"ul"},"Make sure you are using the correct eVar/prop to set up rules in Triggers."),(0,r.mdx)("li",{parentName:"ul"},"If you have a URL, try removing the prefix (use 'localhost' instead of 'http://localhost').")),(0,r.mdx)("h3",{id:"debug-3--4"},"Debug 3 > 4"),(0,r.mdx)("p",null,"If 3 > 4 is working, it means that your Triggers payload is arriving at the Adobe I/O Event Gateway. If you can see your Trigger fired, but it's not arriving at your webhook, you should first debug 4 > 5 to make sure your webhook is valid and ready to receive events. If 4 > 5 works and you are still not receiving events, it could be that something went wrong in the Triggers-Pipeline-Event Gateway process. Unfortunately, there's no way to easily debug this step at the moment. Please open an issue on the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobeio/adobeio-documentation"},"Events GitHub project"),". "),(0,r.mdx)("h3",{id:"debug-4--5"},"Debug 4 > 5"),(0,r.mdx)("p",null,"If 4 > 5 is working, it means that your webhook is valid and ready to receive events. You can verify your connection by selecting ",(0,r.mdx)("strong",{parentName:"p"},"Retry")," for your webhook on the Adobe Developer Console UI. You should receive a challenge. Your webhook needs to be able to return the challenge to be marked as a valid webhook. If it is marked as failed on the console UI, visit the topic ",(0,r.mdx)("a",{parentName:"p",href:"../using/aem-event-setup.md#settingupawebhookexample"},"Set up Webhook: Example")," for sample webhook code."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-support-debug-md-5dcc8a1d6c8b5e1c8b49.js.map