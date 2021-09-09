(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2585],{376:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return l}});var n=a(22122),i=a(19756),o=(a(15007),a(64983)),s=a(99536),d=["components"],p={},m={_frontmatter:p},r=s.Z;function l(e){var t=e.components,a=(0,i.Z)(e,d);return(0,o.mdx)(r,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"aem---adobe-io-events---advanced-configurations"},"AEM - Adobe I/O Events - advanced configurations"),(0,o.mdx)("h2",{id:"adobe-io-events-osgi-to-xdm-event-mapping-configurations"},"Adobe I/O Events OSGI to XDM event mapping configurations:"),(0,o.mdx)("p",null,"For all Adobe I/O event types defined by the Adobe I/O Event Model, there is an ",(0,o.mdx)("strong",{parentName:"p"},"Adobe I/O Events OSGI to XDM event mapping configuration"),"."),(0,o.mdx)("p",null,"For each of these you can edit:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The OSGI Topic you want to observe: ",(0,o.mdx)("inlineCode",{parentName:"li"},"osgiTopic")),(0,o.mdx)("li",{parentName:"ul"},"The OSGI Filter you want to apply in your OSGI event observation. If left empty no osgi filtering is done: ",(0,o.mdx)("inlineCode",{parentName:"li"},"osgiFilter")),(0,o.mdx)("li",{parentName:"ul"},"The JCR ",(0,o.mdx)("inlineCode",{parentName:"li"},"osgiJcrPathFilter")," to filter the OSGI events further. If left empty, no resource path filtering is done: ",(0,o.mdx)("inlineCode",{parentName:"li"},"osgiJcrPathFilter")),(0,o.mdx)("li",{parentName:"ul"},"The OSGI Event Handler Type (use the default ",(0,o.mdx)("inlineCode",{parentName:"li"},"com.day.cq.dam.eventproxy.service.impl.listener.AdobeIoEventHandler")," to map any custom OSGI event): ",(0,o.mdx)("inlineCode",{parentName:"li"},"osgiEventHandlerClassName")),(0,o.mdx)("li",{parentName:"ul"},"The Adobe I/O XDM Event Type to map to the OSGI event: again, use the default (",(0,o.mdx)("inlineCode",{parentName:"li"},"com.adobe.xdm.event.OsgiEmittedEvent"),") to map your custom OSGI events: ",(0,o.mdx)("inlineCode",{parentName:"li"},"adobeIoXdmEventClassName")),(0,o.mdx)("li",{parentName:"ul"},"The Adobe I/O Event Code (unique to your event provider; in other words, unique to your AEM instance/cluster): ",(0,o.mdx)("inlineCode",{parentName:"li"},"adobeIoEventCode")),(0,o.mdx)("li",{parentName:"ul"},"The Adobe I/O Event Label as it will appear on the Adobe Developer Console: ",(0,o.mdx)("inlineCode",{parentName:"li"},"adobeIoEventLabel"))),(0,o.mdx)("p",null,"The various OSGI event handlers will intercept the events according to these values and then map these OSGI events to the Adobe I/O Event Model before forwarding them to Adobe I/O."),(0,o.mdx)("p",null,"The solution leverages the OSGI configuration factory pattern; hence you can not only edit these configurations, but you can also remove and add such configurations."),(0,o.mdx)("p",null,"To configure using the panel:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Select ",(0,o.mdx)("strong",{parentName:"p"},"Tools")," in AEM and then select ",(0,o.mdx)("strong",{parentName:"p"},"Operations")," and ",(0,o.mdx)("strong",{parentName:"p"},"Web Console"),"."),(0,o.mdx)("p",{parentName:"li"},"  ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"900px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/26a6876c415ceeb546ef6d9d874d9f61/cb523/events_aem_31.webp 320w","/adobeio-events/static/26a6876c415ceeb546ef6d9d874d9f61/797b9/events_aem_31.webp 640w","/adobeio-events/static/26a6876c415ceeb546ef6d9d874d9f61/90807/events_aem_31.webp 900w"],sizes:"(max-width: 900px) 100vw, 900px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/26a6876c415ceeb546ef6d9d874d9f61/72799/events_aem_31.png 320w","/adobeio-events/static/26a6876c415ceeb546ef6d9d874d9f61/6af66/events_aem_31.png 640w","/adobeio-events/static/26a6876c415ceeb546ef6d9d874d9f61/1cfc2/events_aem_31.png 900w"],sizes:"(max-width: 900px) 100vw, 900px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobeio-events/static/26a6876c415ceeb546ef6d9d874d9f61/1cfc2/events_aem_31.png",alt:"Web Console navigation UI",title:"Web Console navigation UI",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In the ",(0,o.mdx)("strong",{parentName:"p"},"OSGI")," menu, select ",(0,o.mdx)("strong",{parentName:"p"},"Configuration"),"."),(0,o.mdx)("p",{parentName:"li"},"  ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"684px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.00000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/ef5efde60d26ee82a2f831f7ea6e6d2d/cb523/events_aem_32.webp 320w","/adobeio-events/static/ef5efde60d26ee82a2f831f7ea6e6d2d/797b9/events_aem_32.webp 640w","/adobeio-events/static/ef5efde60d26ee82a2f831f7ea6e6d2d/67fe0/events_aem_32.webp 684w"],sizes:"(max-width: 684px) 100vw, 684px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/ef5efde60d26ee82a2f831f7ea6e6d2d/72799/events_aem_32.png 320w","/adobeio-events/static/ef5efde60d26ee82a2f831f7ea6e6d2d/6af66/events_aem_32.png 640w","/adobeio-events/static/ef5efde60d26ee82a2f831f7ea6e6d2d/2c288/events_aem_32.png 684w"],sizes:"(max-width: 684px) 100vw, 684px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobeio-events/static/ef5efde60d26ee82a2f831f7ea6e6d2d/2c288/events_aem_32.png",alt:"OSGI configuration",title:"OSGI configuration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),(0,o.mdx)("br",{parentName:"p"}),"\n","and search for: ",(0,o.mdx)("strong",{parentName:"p"},"Adobe I/O Events CSM Registration"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"For ",(0,o.mdx)("strong",{parentName:"p"},"Adobe I/O Events OSGI to XDM Event Mapping Configuration"),", select ",(0,o.mdx)("strong",{parentName:"p"},"+"),", ",(0,o.mdx)("strong",{parentName:"p"},"Edit"),", or ",(0,o.mdx)("strong",{parentName:"p"},"Delete"),"."))),(0,o.mdx)("h2",{id:"adobe-io-events-queuing-and-retries"},"Adobe I/O Events queuing and retries"),(0,o.mdx)("p",null,"When an OSGI event of interest is triggered (i.e an OSGI events that matches one of your ",(0,o.mdx)("inlineCode",{parentName:"p"},"OSGI to XDM event mapping configurations"),"), it makes it to a job queue handled by ",(0,o.mdx)("inlineCode",{parentName:"p"},"Sling Job Handler"),"."),(0,o.mdx)("p",null,"This job is persisted in the resource tree (for failover etc.), then the job is distributed to an instance responsible for processing the job; and on that instance the job is put into a processing queue, where eventually a Sling Job Consumer will execute it."),(0,o.mdx)("p",null,"Adobe I/O Events Sling Job Consumer's job is to send this event to Adobe I/O."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"JobResult.OK")," should be returned. If the job has not been processed completely,"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"JobResult.FAILED")," should be returned if Adobe I/O fails either to receive or to process it (due to network failure or Adobe I/O failure).\nIn that case the job will be rescheduled/retried   "),(0,o.mdx)("li",{parentName:"ul"},"if the max number of retries is met, the process will not be rescheduled and treated like the method would have returned ",(0,o.mdx)("inlineCode",{parentName:"li"},"JobResult.CANCEL"),".")),(0,o.mdx)("p",null,"Note that"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Adobe I/O Events Sling Job Consumer topic is ",(0,o.mdx)("inlineCode",{parentName:"li"},"com/adobe/eventproxy/events")),(0,o.mdx)("li",{parentName:"ul"},"Adobe I/O Events ",(0,o.mdx)("inlineCode",{parentName:"li"},"Sling Job Queue configuration")," is the default ",(0,o.mdx)("inlineCode",{parentName:"li"},"Apache Sling Job Default Queue")," with",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"a Normal job priority"),(0,o.mdx)("li",{parentName:"ul"},"10 maximum retries"),(0,o.mdx)("li",{parentName:"ul"},"2 seconds retry delay"),(0,o.mdx)("li",{parentName:"ul"},"15 maximum parallel jobs")))),(0,o.mdx)("p",null,"You can tune this configuration according to your needs: using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"OSGI > configuration")," menu of AEM's ",(0,o.mdx)("inlineCode",{parentName:"p"},"system console"),"\nand create there a new ",(0,o.mdx)("inlineCode",{parentName:"p"},"Apache Sling Job Queue Configuration")),(0,o.mdx)("p",null,"  ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"82.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/0cd86f8b266fd52b324be3c8aa33a13c/cb523/events_aem_job-config.webp 320w","/adobeio-events/static/0cd86f8b266fd52b324be3c8aa33a13c/797b9/events_aem_job-config.webp 640w","/adobeio-events/static/0cd86f8b266fd52b324be3c8aa33a13c/4b075/events_aem_job-config.webp 1280w","/adobeio-events/static/0cd86f8b266fd52b324be3c8aa33a13c/96b55/events_aem_job-config.webp 1364w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/0cd86f8b266fd52b324be3c8aa33a13c/72799/events_aem_job-config.png 320w","/adobeio-events/static/0cd86f8b266fd52b324be3c8aa33a13c/6af66/events_aem_job-config.png 640w","/adobeio-events/static/0cd86f8b266fd52b324be3c8aa33a13c/21b4d/events_aem_job-config.png 1280w","/adobeio-events/static/0cd86f8b266fd52b324be3c8aa33a13c/4352a/events_aem_job-config.png 1364w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobeio-events/static/0cd86f8b266fd52b324be3c8aa33a13c/21b4d/events_aem_job-config.png",alt:"Apache Sling Job Queue Configuration UI",title:"Apache Sling Job Queue Configuration UI",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"Note that you can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Sling > Jobs"),"  menu of AEM ",(0,o.mdx)("inlineCode",{parentName:"p"},"system console"),",\nto look up the statistics and health of your queues"),(0,o.mdx)("p",null," ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.00000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/2635d900f1533f970434d6d9e77553fa/cb523/events_aem_job-stat.webp 320w","/adobeio-events/static/2635d900f1533f970434d6d9e77553fa/797b9/events_aem_job-stat.webp 640w","/adobeio-events/static/2635d900f1533f970434d6d9e77553fa/4b075/events_aem_job-stat.webp 1280w","/adobeio-events/static/2635d900f1533f970434d6d9e77553fa/fd254/events_aem_job-stat.webp 1906w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/2635d900f1533f970434d6d9e77553fa/72799/events_aem_job-stat.png 320w","/adobeio-events/static/2635d900f1533f970434d6d9e77553fa/6af66/events_aem_job-stat.png 640w","/adobeio-events/static/2635d900f1533f970434d6d9e77553fa/21b4d/events_aem_job-stat.png 1280w","/adobeio-events/static/2635d900f1533f970434d6d9e77553fa/df88b/events_aem_job-stat.png 1906w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobeio-events/static/2635d900f1533f970434d6d9e77553fa/21b4d/events_aem_job-stat.png",alt:"Apache Sling Job UI",title:"Apache Sling Job UI",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"Please refer to the Sling documentation:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://sling.apache.org/apidocs/sling7/org/apache/sling/event/jobs/consumer/JobConsumer.html"},"https://sling.apache.org/apidocs/sling7/org/apache/sling/event/jobs/consumer/JobConsumer.html")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://sling.apache.org/documentation/bundles/apache-sling-eventing-and-job-handling.html"},"https://sling.apache.org/documentation/bundles/apache-sling-eventing-and-job-handling.html"))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-aem-aem-advanced-configurations-md-5a3189af10435ed842f7.js.map