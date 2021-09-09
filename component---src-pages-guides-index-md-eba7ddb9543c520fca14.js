(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8450],{65319:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return c}});var n=a(22122),o=a(19756),i=(a(15007),a(64983)),s=a(99536),r=["components"],d={},p={_frontmatter:d},l=s.Z;function c(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.mdx)(l,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"introduction-to-adobe-io-events-webhooks"},"Introduction to Adobe I/O Events Webhooks"),(0,i.mdx)("p",null,"With Adobe I/O Events webhooks, your application can sign up to be notified whenever certain events occur.\nFor example, when a user uploads a asset, this action generates an event.\nWith the right webhook in place, your application is instantly notified that this event happened."),(0,i.mdx)("p",null,"Please refer to the Adobe Developer Console documentation on how to ",(0,i.mdx)("a",{parentName:"p",href:"/adobeio-events/apis/experienceplatform/console/docs.html#!AdobeDocs/adobeio-console/master/services-add-event.md"},"Add Events to a project")),(0,i.mdx)("p",null,"To start receiving events, you register a webhook, specifying a webhook URL and the types of events you want to receive. Each event will result in a HTTP request to the given URL, notifying your application. This guide provides an introduction to webhooks, including:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#getting-started"},"Getting started"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#webhook-example"},"Webhook example")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"runtime_webhooks.md"},"Runtime Actions As Webhook")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#your-first-webhook"},"Your first webhook"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#the-challenge-request"},"The challenge request")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#testing-with-ngrok"},"Testing with ngrok")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#create-a-project-in-the-adobe-developer-console"},"Creating a project"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#troubleshooting-a-disabled-registration-status"},"Troubleshooting")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#receiving-events"},"Receiving events"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#receiving-events-for-users"},"Receiving events for users")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#authenticating-events"},"Authenticating events")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../support/faq.md#webhook-faq"},"Webhook FAQ"))),(0,i.mdx)("h2",{id:"getting-started"},"Getting started"),(0,i.mdx)("p",null,"An ",(0,i.mdx)("strong",{parentName:"p"},"Event")," is a JSON object that describes something that happened. Events originate from ",(0,i.mdx)("strong",{parentName:"p"},"Event Providers"),". Each event provider publishes specific types of events, identified by an ",(0,i.mdx)("strong",{parentName:"p"},"Event Code"),". A ",(0,i.mdx)("strong",{parentName:"p"},"Webhook URL")," receives event JSON objects as HTTP POST requests. You start receiving events by creating a ",(0,i.mdx)("strong",{parentName:"p"},"Webhook Registration"),", providing a name, description, webhook URL, and a list of ",(0,i.mdx)("strong",{parentName:"p"},"Event Types")," you are interested in."),(0,i.mdx)("h3",{id:"webhook-example"},"Webhook example"),(0,i.mdx)("p",null,"Acme Inc. wants to be notified when a new file is uploaded to Adobe Creative Cloud Assets, so it creates the following webhook registration:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Acme Webhook",\n  "description": "Listen for newly created files",\n  "webhook_url": "https://acme.example.com/webhook",\n  "events_of_interest": [\n    {\n      "provider": "ccstorage", \n      "event_code": "asset_created"\n    }\n  ]\n}\n')),(0,i.mdx)("p",null,"Now when a file is uploaded, Adobe I/O Events performs the following HTTP request:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'POST https://acme.example.com/webhook HTTP/1.1\ncontent-type: application/json\n\n{\n  "@id": "82235bac-2b81-4e70-90b5-2bd1f04b5c7b",\n  "@type": "xdmCreated",\n  "xdmEventEnvelope:objectType": "xdmAsset",\n  "activitystreams:published": "2016-07-16T19:20:30+01:00",\n  "activitystreams:to": {\n    "xdmImsOrg:id": "08B3E5CE5822FC520A494229@AdobeOrg",\n    "@type": "xdmImsOrg"\n  },\n  "activitystreams:generator": {\n    "xdmContentRepository:root": "http://francois.corp.adobe.com:4502/",\n    "@type": "xdmContentRepository"\n  },\n  "activitystreams:actor": {\n    "xdmAemUser:id": "admin",\n    "@type": "xdmAemUser"\n  },\n  "activitystreams:object": {\n    "@type": "xdmAsset",\n    "xdmAsset:asset_id": "urn:aaid:aem:4123ba4c-93a8-4c5d-b979-ffbbe4318185",\n    "xdmAsset:asset_name": "Fx_DUKE-small.png",\n    "xdmAsset:etag": "6fc55d0389d856ae7deccebba54f110e",\n    "xdmAsset:path": "/content/dam/Fx_DUKE-small.png",\n    "xdmAsset:format": "image/png"\n  },\n  "@context": {\n    "activitystreams": "http://www.w3.org/ns/activitystreams#",\n    "xdmEventEnvelope": "https://ns.adobe.com/xdm/common/eventenvelope#",\n    "xdmAsset": "http://ns.adobe.com/xdm/assets/asset#",\n    "xdmImsOrg": "https://ns.adobe.com/xdm/ims/organization#",\n    "xdmContentRepository": "https://ns.adobe.com/xdm/content/repository",\n    "xdmAemUser": "https://ns.adobe.com/xdm/aem/user#",\n    "xdmCreated": "https://ns.adobe.com/xdm/common/event/created#"\n  }\n}\n')),(0,i.mdx)("h2",{id:"your-first-webhook"},"Your first webhook"),(0,i.mdx)("p",null,"Before you can register a webhook, the webhook needs to be online and operational. If not, then the registration will fail. So you need to take care of setting that up first. Your webhook must be hosted on a server. For development, you may use localhost along with a tool like ngrok (see below)."),(0,i.mdx)("p",null,"For production, your webhook needs to:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Be accessible from the internet (not using localhost)"),(0,i.mdx)("li",{parentName:"ul"},"Be reachable over HTTPS"),(0,i.mdx)("li",{parentName:"ul"},'Correctly respond to a "challenge" request')),(0,i.mdx)("p",null,"You may reuse/fork our ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobeio/io-event-sample-webhook"},"Sample Webhook in Node.js")),(0,i.mdx)("h3",{id:"the-challenge-request"},"The challenge request"),(0,i.mdx)("p",null,"When registering a webhook, Adobe I/O Events will first try to verify that the URL is valid. To do this, it sends an HTTP GET request, with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"challenge")," query parameter. The webhook should respond with a body containing the value of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"challenge")," query parameter."),(0,i.mdx)("h4",{id:"request"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-http"},"GET https://acme.example.com?challenge=8ec8d794-e0ab-42df-9017-e3dada8e84f7\n")),(0,i.mdx)("h4",{id:"response"},"Response"),(0,i.mdx)("p",null,"You can either respond by placing the challenge value directly in the response body:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\n\n"8ec8d794-e0ab-42df-9017-e3dada8e84f7"\n')),(0,i.mdx)("p",null,"or by responding with a JSON object, including the correct ",(0,i.mdx)("inlineCode",{parentName:"p"},"content-type")," header:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-type: application/json\n\n{"challenge":"8ec8d794-e0ab-42df-9017-e3dada8e84f7"}\n')),(0,i.mdx)("p",null,"Typically, you would build your webhook to respond to the Adobe challenge in a method to handle HTTP GET requests, and then include another method for handling the HTTP POST requests that will be coming from Adobe containing actual event payloads. For testing purposes, you can start with something as simple as this PHP script: "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n header('Content-Type: text/plain');\n echo $_GET['challenge']; \n?>\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note:")," Make sure your response is given in the correct content type. If your webhook script places the challenge value directly in the response body, make sure it's returned as plain text (",(0,i.mdx)("inlineCode",{parentName:"p"},"text/plain"),"). For a JSON response, make sure it's ",(0,i.mdx)("inlineCode",{parentName:"p"},"application/json"),". Returning a response in the incorrect content type may cause extraneous code to be returned, which will not validate with Adobe I/O Events."),(0,i.mdx)("h3",{id:"testing-with-ngrok"},"Testing with ngrok"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://ngrok.com/"},"Ngrok")," is a utility for enabling secure introspectable tunnels to your localhost. With ngrok, you can securely expose a local web server to the internet and run your own personal web services from your own machine, safely encrypted behind your local NAT or firewall. With ngrok, you can iterate quickly without redeploying your app or affecting your customers. "),(0,i.mdx)("p",null,"Among other things, ngrok is a great tool for testing webhooks. Once you've downloaded and installed ",(0,i.mdx)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok"),", you run it from a command line, specifying the protocol and port you want to monitor:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"ngrok http 80\n")),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"742px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.937500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/f9799fa826e7c26b50bf27b94e546257/cb523/ngrok.webp 320w","/adobeio-events/static/f9799fa826e7c26b50bf27b94e546257/797b9/ngrok.webp 640w","/adobeio-events/static/f9799fa826e7c26b50bf27b94e546257/9fd9e/ngrok.webp 742w"],sizes:"(max-width: 742px) 100vw, 742px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/f9799fa826e7c26b50bf27b94e546257/72799/ngrok.png 320w","/adobeio-events/static/f9799fa826e7c26b50bf27b94e546257/6af66/ngrok.png 640w","/adobeio-events/static/f9799fa826e7c26b50bf27b94e546257/0f2bc/ngrok.png 742w"],sizes:"(max-width: 742px) 100vw, 742px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobeio-events/static/f9799fa826e7c26b50bf27b94e546257/0f2bc/ngrok.png",alt:"ngrok on port 80",title:"ngrok on port 80",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,'In the ngrok UI, you can see the URL for viewing the ngrok logs, labeled "Web Interface", plus the public-facing URLs ngrok generates to forward HTTP and HTTPS traffic to your localhost. You can use either of those public-facing URLs to register your Webhook with Adobe I/O, so long as your application is configured to respond on your localhost accordingly. Once your testing phase is complete, you can replace the ngrok URL in your Adobe I/O integration with the public URL for your deployed app.'),(0,i.mdx)("h2",{id:"create-a-project-in-the-adobe-developer-console"},"Create a project in the Adobe Developer Console"),(0,i.mdx)("p",null,"Integrations are now created as part of a project within the Adobe Developer Console. This requires you to have access to the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_console_ui"},"Console")," in order to create a project, add events to your project, configure the events, and register your webhook."),(0,i.mdx)("p",null,"For detailed instructions on completing these steps, please begin by reading the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_console_getting_started"},"Adobe Developer Console Getting Started guide"),"."),(0,i.mdx)("p",null,"Once you have completed the event registration, check the ngrok log. You should see a ",(0,i.mdx)("inlineCode",{parentName:"p"},"GET")," request, including the ",(0,i.mdx)("inlineCode",{parentName:"p"},"challenge")," that was passed along in the URL.  "),(0,i.mdx)("p",null,"  ",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1009px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/cb523/ngrok_2.webp 320w","/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/797b9/ngrok_2.webp 640w","/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/e3bd1/ngrok_2.webp 1009w"],sizes:"(max-width: 1009px) 100vw, 1009px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/72799/ngrok_2.png 320w","/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/6af66/ngrok_2.png 640w","/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/f6f7a/ngrok_2.png 1009w"],sizes:"(max-width: 1009px) 100vw, 1009px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/f6f7a/ngrok_2.png",alt:"The challenge GET request received in ngrok",title:"The challenge GET request received in ngrok",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"  "),(0,i.mdx)("p",null,"In the Adobe Developer Console, you will be taken to the ",(0,i.mdx)("em",{parentName:"p"},"Registration Details")," page once the event registration is complete. "),(0,i.mdx)("p",null,"The ",(0,i.mdx)("em",{parentName:"p"},"Status")," of the registration should show as ",(0,i.mdx)("strong",{parentName:"p"},"Active"),". If the registration shows as ",(0,i.mdx)("strong",{parentName:"p"},"Disabled")," please see the ",(0,i.mdx)("a",{parentName:"p",href:"#troubleshooting-a-disabled-registration-status"},"troubleshooting")," section that follows."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"91.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/ec37f535d77440a5c293707e4ec99fa9/cb523/events-registration-details.webp 320w","/adobeio-events/static/ec37f535d77440a5c293707e4ec99fa9/797b9/events-registration-details.webp 640w","/adobeio-events/static/ec37f535d77440a5c293707e4ec99fa9/4b075/events-registration-details.webp 1280w","/adobeio-events/static/ec37f535d77440a5c293707e4ec99fa9/b6811/events-registration-details.webp 1366w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/ec37f535d77440a5c293707e4ec99fa9/72799/events-registration-details.png 320w","/adobeio-events/static/ec37f535d77440a5c293707e4ec99fa9/6af66/events-registration-details.png 640w","/adobeio-events/static/ec37f535d77440a5c293707e4ec99fa9/21b4d/events-registration-details.png 1280w","/adobeio-events/static/ec37f535d77440a5c293707e4ec99fa9/ad00e/events-registration-details.png 1366w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobeio-events/static/ec37f535d77440a5c293707e4ec99fa9/21b4d/events-registration-details.png",alt:"Event Registration Details tab in Adobe Developer Console",title:"Event Registration Details tab in Adobe Developer Console",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h3",{id:"troubleshooting-a-disabled-registration-status"},"Troubleshooting a Disabled Registration Status"),(0,i.mdx)("p",null,"If you made an error transcribing the webhook URL, Adobe Events","’"," test of your webhook would have failed, resulting a ",(0,i.mdx)("strong",{parentName:"p"},"Disabled")," status."),(0,i.mdx)("p",null,"In general, Adobe I/O Events will always confirm that your webhook received an event by means of the response code your webhook sends to each HTTP POST request. "),(0,i.mdx)("p",null,"If Adobe fails to receive a 200 OK response code within 10 seconds, it retries the request, including a special header: ",(0,i.mdx)("inlineCode",{parentName:"p"},"x-adobe-retry-count"),".\nThe value of this header begins at 1.\nIf the first retry request fails as well, Adobe waits, then retries again, incrementing the value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"x-adobe-retry-count")," with each retry until it reaches 5.\nEach wait interval is the square of the previous interval.\nOnce five retries are attempted (after 31 minutes) and the last attempt also fails,\nAdobe marks the webhook as invalid and stops sending requests. "),(0,i.mdx)("p",null,"To restart the flow of requests, once you have fixed the problem preventing your webhook from responding,\nyou must log into the Adobe Developer Console, edit your events registration,\nit will re-trigger a webhook challenge request, and eventually a webhook re-activation."),(0,i.mdx)("p",null,"While your webhook is marked ",(0,i.mdx)("inlineCode",{parentName:"p"},"Disabled"),", Adobe will continue to log events in your Journal,\nallowing you to retrieve all events for the past 7 days\n(see our ",(0,i.mdx)("a",{parentName:"p",href:"journaling_intro.md"},"Journaling")," documentation)."),(0,i.mdx)("h2",{id:"receiving-events"},"Receiving events"),(0,i.mdx)("p",null,"For development, you must first provide consent for yourself, using the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"https://ims-na1.adobelogin.com/ims/authorize/v1?response_type=code&client_id=api_key_from_console&scope=AdobeID%2Copenid%2Ccreative_sdk\n")),(0,i.mdx)("p",null,"You will replace ",(0,i.mdx)("inlineCode",{parentName:"p"},"api_key_from_console")," with the ",(0,i.mdx)("strong",{parentName:"p"},"Client ID")," value from the ",(0,i.mdx)("em",{parentName:"p"},"Credentials")," tab for the event registration details in Console."),(0,i.mdx)("p",null,"Log in to ",(0,i.mdx)("a",{parentName:"p",href:"https://assets.adobe.com"},"Creative Cloud Assets (<https://assets.adobe.com>)"),". Use the same Adobe ID as the one you used in the Adobe Developer Console. Now upload a file and check the ngrok logs again. If all went well, then an ",(0,i.mdx)("inlineCode",{parentName:"p"},"asset_created")," event was just delivered to your webhook. "),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1009px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/cb523/ngrok_2.webp 320w","/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/797b9/ngrok_2.webp 640w","/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/e3bd1/ngrok_2.webp 1009w"],sizes:"(max-width: 1009px) 100vw, 1009px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/72799/ngrok_2.png 320w","/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/6af66/ngrok_2.png 640w","/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/f6f7a/ngrok_2.png 1009w"],sizes:"(max-width: 1009px) 100vw, 1009px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobeio-events/static/ac02d04178e49965dec7cdf1c7138767/f6f7a/ngrok_2.png",alt:"The POST request received in ngrok",title:"The POST request received in ngrok",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"  "),(0,i.mdx)("h3",{id:"receiving-events-for-users"},"Receiving events for users"),(0,i.mdx)("p",null,"In a real-world application, you would use the credentials of an authenticated user to register a webhook through the API. This way you will receive events related to that user. Depending on your scenario and the Adobe service you","’","re targeting, you may have to enable different types of authentication; see the ",(0,i.mdx)("a",{parentName:"p",href:"/adobeio-events/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/AuthenticationGuide.md"},"Adobe I/O Authentication Overview")," for more information on how to set up your app for authentication with your users."),(0,i.mdx)("p",null,"For Creative Cloud Asset events, you","’","ll need to add the Creative Cloud Libraries to your integration and implement the User Auth UI; see ",(0,i.mdx)("a",{parentName:"p",href:"../using/cc-asset-event-setup.md"},"Setting Up Creative Cloud Asset Events")," for details. "),(0,i.mdx)("h2",{id:"authenticating-events"},"Authenticating events"),(0,i.mdx)("p",null,"Your webhook URL must by necessity be accessible from the open internet. This means third-party actors can send forged requests to it, tricking your application into handling fake events."),(0,i.mdx)("p",null,"To prevent this from happening, Adobe I/O Events will add a ",(0,i.mdx)("inlineCode",{parentName:"p"},"x-adobe-signature")," header to each HTTP request it sends to your webhook URL, which allows you to verify that the request was really made by Adobe I/O Events."),(0,i.mdx)("p",null,"This signature or ","“","message authentication code","”"," is computed using a cryptographic hash function and a secret key applied to the body of the HTTP request. In particular, a SHA256 ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HMAC"},"HMAC")," is computed of the JSON payload, using the ",(0,i.mdx)("strong",{parentName:"p"},"Client Secret")," provided in the Adobe Developer Console as a secret key, and then turned into a Base64 digest. You can find your client secret in the ",(0,i.mdx)("em",{parentName:"p"},"Credentials")," tab for your event registration in Console."),(0,i.mdx)("p",null,"Upon receiving a request, you should repeat this calculation and compare the result to the value in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"x-adobe-signature")," header, and reject the request unless they match. Since the client secret is known only by you and Adobe I/O Events, this is a reliable way to verify the authenticity of the request."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"HMAC check implementation in JavaScript (pseudo-code):")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"var crypto = require('crypto')\nconst hmac = crypto.createHmac('sha256', CLIENT_SECRET)\nhmac.update(raw_request_body)\n \nif (request.header('x-adobe-signature') !== hmac.digest('base64')) {\n  throw new Error('x-adobe-signature HMAC check failed')\n}\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-index-md-eba7ddb9543c520fca14.js.map