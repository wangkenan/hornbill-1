// Last time updated: 2017-03-11 6:31:41 AM UTC

!function(){"use strict";function getBrowserInfo(){var nameOffset,verOffset,ix,nAgt=(navigator.appVersion,navigator.userAgent),browserName=navigator.appName,fullVersion=""+parseFloat(navigator.appVersion),majorVersion=parseInt(navigator.appVersion,10);if(isOpera){browserName="Opera";try{fullVersion=navigator.userAgent.split("OPR/")[1].split(" ")[0],majorVersion=fullVersion.split(".")[0]}catch(e){fullVersion="0.0.0.0",majorVersion=0}}else isIE?(verOffset=nAgt.indexOf("MSIE"),browserName="IE",fullVersion=nAgt.substring(verOffset+5)):isChrome?(verOffset=nAgt.indexOf("Chrome"),browserName="Chrome",fullVersion=nAgt.substring(verOffset+7)):isSafari?(verOffset=nAgt.indexOf("Safari"),browserName="Safari",fullVersion=nAgt.substring(verOffset+7),(verOffset=nAgt.indexOf("Version"))!==-1&&(fullVersion=nAgt.substring(verOffset+8))):isFirefox?(verOffset=nAgt.indexOf("Firefox"),browserName="Firefox",fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(browserName=nAgt.substring(nameOffset,verOffset),fullVersion=nAgt.substring(verOffset+1),browserName.toLowerCase()===browserName.toUpperCase()&&(browserName=navigator.appName));return isEdge&&(browserName="Edge",fullVersion=parseInt(navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)[2],10).toString()),(ix=fullVersion.indexOf(";"))!==-1&&(fullVersion=fullVersion.substring(0,ix)),(ix=fullVersion.indexOf(" "))!==-1&&(fullVersion=fullVersion.substring(0,ix)),majorVersion=parseInt(""+fullVersion,10),isNaN(majorVersion)&&(fullVersion=""+parseFloat(navigator.appVersion),majorVersion=parseInt(navigator.appVersion,10)),{fullVersion:fullVersion,version:majorVersion,name:browserName,isPrivateBrowsing:!1}}function retry(isDone,next){var currentTrial=0,maxRetry=50,isTimeout=!1,id=window.setInterval(function(){isDone()&&(window.clearInterval(id),next(isTimeout)),currentTrial++>maxRetry&&(window.clearInterval(id),isTimeout=!0,next(isTimeout))},10)}function isIE10OrLater(userAgent){var ua=userAgent.toLowerCase();if(0===ua.indexOf("msie")&&0===ua.indexOf("trident"))return!1;var match=/(?:msie|rv:)\s?([\d\.]+)/.exec(ua);return!!(match&&parseInt(match[1],10)>=10)}function detectPrivateMode(callback){var isPrivate;try{if(window.webkitRequestFileSystem)window.webkitRequestFileSystem(window.TEMPORARY,1,function(){isPrivate=!1},function(e){isPrivate=!0});else if(window.indexedDB&&/Firefox/.test(window.navigator.userAgent)){var db;try{db=window.indexedDB.open("test"),db.onerror=function(){return!0}}catch(e){isPrivate=!0}"undefined"==typeof isPrivate&&retry(function(){return"done"===db.readyState},function(isTimeout){isTimeout||(isPrivate=!db.result)})}else if(isIE10OrLater(window.navigator.userAgent)){isPrivate=!1;try{window.indexedDB||(isPrivate=!0)}catch(e){isPrivate=!0}}else if(window.localStorage&&/Safari/.test(window.navigator.userAgent)){try{window.localStorage.setItem("test",1)}catch(e){isPrivate=!0}"undefined"==typeof isPrivate&&(isPrivate=!1,window.localStorage.removeItem("test"))}}catch(e){isPrivate=!1}retry(function(){return"undefined"!=typeof isPrivate},function(isTimeout){callback(isPrivate)})}function detectDesktopOS(){var unknown="-",nVer=navigator.appVersion,nAgt=navigator.userAgent,os=unknown,clientStrings=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var id in clientStrings){var cs=clientStrings[id];if(cs.r.test(nAgt)){os=cs.s;break}}var osVersion=unknown;switch(/Windows/.test(os)&&(/Windows (.*)/.test(os)&&(osVersion=/Windows (.*)/.exec(os)[1]),os="Windows"),os){case"Mac OS X":/Mac OS X (10[\.\_\d]+)/.test(nAgt)&&(osVersion=/Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1]);break;case"Android":/Android ([\.\_\d]+)/.test(nAgt)&&(osVersion=/Android ([\.\_\d]+)/.exec(nAgt)[1]);break;case"iOS":/OS (\d+)_(\d+)_?(\d+)?/.test(nAgt)&&(osVersion=/OS (\d+)_(\d+)_?(\d+)?/.exec(nVer),osVersion=osVersion[1]+"."+osVersion[2]+"."+(0|osVersion[3]))}return{osName:os,osVersion:osVersion}}function getAndroidVersion(ua){ua=(ua||navigator.userAgent).toLowerCase();var match=ua.match(/android\s([0-9\.]*)/);return!!match&&match[1]}function DetectLocalIPAddress(callback){DetectRTC.isWebRTCSupported&&(DetectRTC.isORTCSupported||getIPs(function(ip){callback(ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)?"Local: "+ip:"Public: "+ip)}))}function getIPs(callback){function handleCandidate(candidate){var ipRegex=/([0-9]{1,3}(\.[0-9]{1,3}){3})/,match=ipRegex.exec(candidate);if(!match)return void console.warn("Could not match IP address in",candidate);var ipAddress=match[1];void 0===ipDuplicates[ipAddress]&&callback(ipAddress),ipDuplicates[ipAddress]=!0}var ipDuplicates={},RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,useWebKit=!!window.webkitRTCPeerConnection;if(!RTCPeerConnection){var iframe=document.getElementById("iframe");if(!iframe)throw"NOTE: you need to have an iframe in the page right above the script tag.";var win=iframe.contentWindow;RTCPeerConnection=win.RTCPeerConnection||win.mozRTCPeerConnection||win.webkitRTCPeerConnection,useWebKit=!!win.webkitRTCPeerConnection}if(RTCPeerConnection){var servers,mediaConstraints={optional:[{RtpDataChannels:!0}]};useWebKit&&(servers={iceServers:[{urls:"stun:stun.services.mozilla.com"}]},"undefined"!=typeof DetectRTC&&DetectRTC.browser.isFirefox&&DetectRTC.browser.version<=38&&(servers[0]={url:servers[0].urls}));var pc=new RTCPeerConnection(servers,mediaConstraints);pc.onicecandidate=function(ice){ice.candidate&&handleCandidate(ice.candidate.candidate)},pc.createDataChannel(""),pc.createOffer(function(result){pc.setLocalDescription(result,function(){},function(){})},function(){}),setTimeout(function(){var lines=pc.localDescription.sdp.split("\n");lines.forEach(function(line){0===line.indexOf("a=candidate:")&&handleCandidate(line)})},1e3)}}function checkDeviceSupport(callback){if(!canEnumerate)return void(callback&&callback());if(!navigator.enumerateDevices&&window.MediaStreamTrack&&window.MediaStreamTrack.getSources&&(navigator.enumerateDevices=window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack)),!navigator.enumerateDevices&&navigator.enumerateDevices&&(navigator.enumerateDevices=navigator.enumerateDevices.bind(navigator)),!navigator.enumerateDevices)return void(callback&&callback());MediaDevices=[],audioInputDevices=[],audioOutputDevices=[],videoInputDevices=[],isWebsiteHasMicrophonePermissions=!1,isWebsiteHasWebcamPermissions=!1;var alreadyUsedDevices={};navigator.enumerateDevices(function(devices){devices.forEach(function(_device){var device={};for(var d in _device)try{"function"!=typeof _device[d]&&(device[d]=_device[d])}catch(e){}alreadyUsedDevices[device.deviceId+device.label]||("audio"===device.kind&&(device.kind="audioinput"),"video"===device.kind&&(device.kind="videoinput"),device.deviceId||(device.deviceId=device.id),device.id||(device.id=device.deviceId),device.label?("videoinput"!==device.kind||isWebsiteHasWebcamPermissions||(isWebsiteHasWebcamPermissions=!0),"audioinput"!==device.kind||isWebsiteHasMicrophonePermissions||(isWebsiteHasMicrophonePermissions=!0)):(device.label="Please invoke getUserMedia once.",DetectRTC.browser.isChrome&&DetectRTC.browser.version>=46&&!/^(https:|chrome-extension:)$/g.test(location.protocol||"")&&document.domain.search&&document.domain.search(/localhost|127.0./g)===-1&&(device.label="HTTPs is required to get label of this "+device.kind+" device.")),"audioinput"===device.kind&&(hasMicrophone=!0,audioInputDevices.indexOf(device)===-1&&audioInputDevices.push(device)),"audiooutput"===device.kind&&(hasSpeakers=!0,audioOutputDevices.indexOf(device)===-1&&audioOutputDevices.push(device)),"videoinput"===device.kind&&(hasWebcam=!0,videoInputDevices.indexOf(device)===-1&&videoInputDevices.push(device)),MediaDevices.push(device),alreadyUsedDevices[device.deviceId+device.label]=device)}),"undefined"!=typeof DetectRTC&&(DetectRTC.MediaDevices=MediaDevices,DetectRTC.hasMicrophone=hasMicrophone,DetectRTC.hasSpeakers=hasSpeakers,DetectRTC.hasWebcam=hasWebcam,DetectRTC.isWebsiteHasWebcamPermissions=isWebsiteHasWebcamPermissions,DetectRTC.isWebsiteHasMicrophonePermissions=isWebsiteHasMicrophonePermissions,DetectRTC.audioInputDevices=audioInputDevices,DetectRTC.audioOutputDevices=audioOutputDevices,DetectRTC.videoInputDevices=videoInputDevices),callback&&callback()})}var browserFakeUserAgent="Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45",isNodejs="object"==typeof process&&"object"==typeof process.versions&&process.versions.node;if(isNodejs){var version=process.versions.node.toString().replace("v","");browserFakeUserAgent="Nodejs/"+version+" (NodeOS) AppleWebKit/"+version+" (KHTML, like Gecko) Nodejs/"+version+" Nodejs/"+version}!function(that){"undefined"==typeof window&&("undefined"==typeof window&&"undefined"!=typeof global?(global.navigator={userAgent:browserFakeUserAgent,getUserMedia:function(){}},that.window=global):"undefined"==typeof window,"undefined"==typeof document&&(that.document={},document.createElement=document.captureStream=document.mozCaptureStream=function(){return{}}),"undefined"==typeof location&&(that.location={protocol:"file:",href:"",hash:""}),"undefined"==typeof screen&&(that.screen={width:0,height:0}))}("undefined"!=typeof global?global:window);var navigator=window.navigator;"undefined"!=typeof navigator?("undefined"!=typeof navigator.webkitGetUserMedia&&(navigator.getUserMedia=navigator.webkitGetUserMedia),"undefined"!=typeof navigator.mozGetUserMedia&&(navigator.getUserMedia=navigator.mozGetUserMedia)):navigator={getUserMedia:function(){},userAgent:browserFakeUserAgent};var isMobileDevice=!!/Android|webOS|iPhone|iPad|iPod|BB10|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent||""),isEdge=!(navigator.userAgent.indexOf("Edge")===-1||!navigator.msSaveOrOpenBlob&&!navigator.msSaveBlob),isOpera=!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,isFirefox="undefined"!=typeof window.InstallTrigger,isSafari=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0,isChrome=!!window.chrome&&!isOpera,isIE=!!document.documentMode&&!isEdge,isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry|BB10/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()},getOsName:function(){var osName="Unknown OS";return isMobile.Android()&&(osName="Android"),isMobile.BlackBerry()&&(osName="BlackBerry"),isMobile.iOS()&&(osName="iOS"),isMobile.Opera()&&(osName="Opera Mini"),isMobile.Windows()&&(osName="Windows"),osName}},osName="Unknown OS",osVersion="Unknown OS Version",osInfo=detectDesktopOS();osInfo&&osInfo.osName&&"-"!=osInfo.osName?(osName=osInfo.osName,osVersion=osInfo.osVersion):isMobile.any()&&(osName=isMobile.getOsName(),"Android"==osName&&(osVersion=getAndroidVersion()));var isNodejs="object"==typeof process&&"object"==typeof process.versions&&process.versions.node;"Unknown OS"===osName&&isNodejs&&(osName="Nodejs",osVersion=process.versions.node.toString().replace("v",""));var isCanvasSupportsStreamCapturing=!1,isVideoSupportsStreamCapturing=!1;["captureStream","mozCaptureStream","webkitCaptureStream"].forEach(function(item){!isCanvasSupportsStreamCapturing&&item in document.createElement("canvas")&&(isCanvasSupportsStreamCapturing=!0),!isVideoSupportsStreamCapturing&&item in document.createElement("video")&&(isVideoSupportsStreamCapturing=!0)});var MediaDevices=[],audioInputDevices=[],audioOutputDevices=[],videoInputDevices=[];navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(navigator.enumerateDevices=function(callback){navigator.mediaDevices.enumerateDevices().then(callback)["catch"](function(){callback([])})});var canEnumerate=!1;"undefined"!=typeof MediaStreamTrack&&"getSources"in MediaStreamTrack?canEnumerate=!0:navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(canEnumerate=!0);var hasMicrophone=!1,hasSpeakers=!1,hasWebcam=!1,isWebsiteHasMicrophonePermissions=!1,isWebsiteHasWebcamPermissions=!1;checkDeviceSupport();var DetectRTC=window.DetectRTC||{};DetectRTC.browser=getBrowserInfo(),detectPrivateMode(function(isPrivateBrowsing){DetectRTC.browser.isPrivateBrowsing=!!isPrivateBrowsing}),DetectRTC.browser["is"+DetectRTC.browser.name]=!0,DetectRTC.osName=osName,DetectRTC.osVersion=osVersion;var isWebRTCSupported=("object"==typeof process&&"object"==typeof process.versions&&process.versions["node-webkit"],!1);["RTCPeerConnection","webkitRTCPeerConnection","mozRTCPeerConnection","RTCIceGatherer"].forEach(function(item){isWebRTCSupported||item in window&&(isWebRTCSupported=!0)}),DetectRTC.isWebRTCSupported=isWebRTCSupported,DetectRTC.isORTCSupported="undefined"!=typeof RTCIceGatherer;var isScreenCapturingSupported=!1;DetectRTC.browser.isChrome&&DetectRTC.browser.version>=35?isScreenCapturingSupported=!0:DetectRTC.browser.isFirefox&&DetectRTC.browser.version>=34&&(isScreenCapturingSupported=!0),/^(https:|chrome-extension:)$/g.test(location.protocol||"")||(document.domain.search&&document.domain.search(/localhost|127.0./g)===-1&&(isScreenCapturingSupported=!1),DetectRTC.browser.isFirefox&&(isScreenCapturingSupported=!1)),DetectRTC.isScreenCapturingSupported=isScreenCapturingSupported;var webAudio={isSupported:!1,isCreateMediaStreamSourceSupported:!1};["AudioContext","webkitAudioContext","mozAudioContext","msAudioContext"].forEach(function(item){webAudio.isSupported||item in window&&(webAudio.isSupported=!0,window[item]&&"createMediaStreamSource"in window[item].prototype&&(webAudio.isCreateMediaStreamSourceSupported=!0))}),DetectRTC.isAudioContextSupported=webAudio.isSupported,DetectRTC.isCreateMediaStreamSourceSupported=webAudio.isCreateMediaStreamSourceSupported;var isRtpDataChannelsSupported=!1;DetectRTC.browser.isChrome&&DetectRTC.browser.version>31&&(isRtpDataChannelsSupported=!0),DetectRTC.isRtpDataChannelsSupported=isRtpDataChannelsSupported;var isSCTPSupportd=!1;DetectRTC.browser.isFirefox&&DetectRTC.browser.version>28?isSCTPSupportd=!0:DetectRTC.browser.isChrome&&DetectRTC.browser.version>25?isSCTPSupportd=!0:DetectRTC.browser.isOpera&&DetectRTC.browser.version>=11&&(isSCTPSupportd=!0),DetectRTC.isSctpDataChannelsSupported=isSCTPSupportd,DetectRTC.isMobileDevice=isMobileDevice;var isGetUserMediaSupported=!1;navigator.getUserMedia?isGetUserMediaSupported=!0:navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(isGetUserMediaSupported=!0),DetectRTC.browser.isChrome&&DetectRTC.browser.version>=46&&!/^(https:|chrome-extension:)$/g.test(location.protocol||"")&&document.domain.search&&document.domain.search(/localhost|127.0./g)===-1&&(isGetUserMediaSupported="Requires HTTPs"),"Nodejs"===DetectRTC.osName&&(isGetUserMediaSupported=!1),DetectRTC.isGetUserMediaSupported=isGetUserMediaSupported;var displayResolution="";if(screen.width){var width=screen.width?screen.width:"",height=screen.height?screen.height:"";displayResolution+=""+width+" x "+height}DetectRTC.displayResolution=displayResolution,DetectRTC.isCanvasSupportsStreamCapturing=isCanvasSupportsStreamCapturing,DetectRTC.isVideoSupportsStreamCapturing=isVideoSupportsStreamCapturing,"Chrome"==DetectRTC.browser.name&&DetectRTC.browser.version>=53&&(DetectRTC.isCanvasSupportsStreamCapturing||(DetectRTC.isCanvasSupportsStreamCapturing="Requires chrome flag: enable-experimental-web-platform-features"),DetectRTC.isVideoSupportsStreamCapturing||(DetectRTC.isVideoSupportsStreamCapturing="Requires chrome flag: enable-experimental-web-platform-features")),DetectRTC.DetectLocalIPAddress=DetectLocalIPAddress,DetectRTC.isWebSocketsSupported="WebSocket"in window&&2===window.WebSocket.CLOSING,DetectRTC.isWebSocketsBlocked=!DetectRTC.isWebSocketsSupported,"Nodejs"===DetectRTC.osName&&(DetectRTC.isWebSocketsSupported=!0,DetectRTC.isWebSocketsBlocked=!1),DetectRTC.checkWebSocketsSupport=function(callback){callback=callback||function(){};try{var websocket=new WebSocket("wss://echo.websocket.org:443/");websocket.onopen=function(){DetectRTC.isWebSocketsBlocked=!1,callback(),websocket.close(),websocket=null},websocket.onerror=function(){DetectRTC.isWebSocketsBlocked=!0,callback()}}catch(e){DetectRTC.isWebSocketsBlocked=!0,callback()}},DetectRTC.load=function(callback){callback=callback||function(){},checkDeviceSupport(callback)},DetectRTC.MediaDevices=MediaDevices,DetectRTC.hasMicrophone=hasMicrophone,DetectRTC.hasSpeakers=hasSpeakers,DetectRTC.hasWebcam=hasWebcam,DetectRTC.isWebsiteHasWebcamPermissions=isWebsiteHasWebcamPermissions,DetectRTC.isWebsiteHasMicrophonePermissions=isWebsiteHasMicrophonePermissions,DetectRTC.audioInputDevices=audioInputDevices,DetectRTC.audioOutputDevices=audioOutputDevices,DetectRTC.videoInputDevices=videoInputDevices;var isSetSinkIdSupported=!1;"setSinkId"in document.createElement("video")&&(isSetSinkIdSupported=!0),DetectRTC.isSetSinkIdSupported=isSetSinkIdSupported;var isRTPSenderReplaceTracksSupported=!1;DetectRTC.browser.isFirefox&&"undefined"!=typeof mozRTCPeerConnection?"getSenders"in mozRTCPeerConnection.prototype&&(isRTPSenderReplaceTracksSupported=!0):DetectRTC.browser.isChrome&&"undefined"!=typeof webkitRTCPeerConnection&&"getSenders"in webkitRTCPeerConnection.prototype&&(isRTPSenderReplaceTracksSupported=!0),DetectRTC.isRTPSenderReplaceTracksSupported=isRTPSenderReplaceTracksSupported;var isRemoteStreamProcessingSupported=!1;DetectRTC.browser.isFirefox&&DetectRTC.browser.version>38&&(isRemoteStreamProcessingSupported=!0),DetectRTC.isRemoteStreamProcessingSupported=isRemoteStreamProcessingSupported;var isApplyConstraintsSupported=!1;"undefined"!=typeof MediaStreamTrack&&"applyConstraints"in MediaStreamTrack.prototype&&(isApplyConstraintsSupported=!0),DetectRTC.isApplyConstraintsSupported=isApplyConstraintsSupported;var isMultiMonitorScreenCapturingSupported=!1;DetectRTC.browser.isFirefox&&DetectRTC.browser.version>=43&&(isMultiMonitorScreenCapturingSupported=!0),DetectRTC.isMultiMonitorScreenCapturingSupported=isMultiMonitorScreenCapturingSupported,DetectRTC.isPromisesSupported=!!("Promise"in window),"undefined"==typeof DetectRTC&&(window.DetectRTC={});var MediaStream=window.MediaStream;"undefined"==typeof MediaStream&&"undefined"!=typeof webkitMediaStream&&(MediaStream=webkitMediaStream),"undefined"!=typeof MediaStream?DetectRTC.MediaStream=Object.keys(MediaStream.prototype):DetectRTC.MediaStream=!1,"undefined"!=typeof MediaStreamTrack?DetectRTC.MediaStreamTrack=Object.keys(MediaStreamTrack.prototype):DetectRTC.MediaStreamTrack=!1;var RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;"undefined"!=typeof RTCPeerConnection?DetectRTC.RTCPeerConnection=Object.keys(RTCPeerConnection.prototype):DetectRTC.RTCPeerConnection=!1,window.DetectRTC=DetectRTC,"undefined"!=typeof module&&(module.exports=DetectRTC),"function"==typeof define&&define.amd&&define("DetectRTC",[],function(){return DetectRTC})}();