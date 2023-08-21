import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Roompage = () => {


    const {roomId} = useParams();


    const myMeeting =async(element)=>{
const appID=1811255788;
const serverSecret="0911c33e91f4511971189e72df30f9c8";
const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomId,
    Date.now().toString(),
    "Kiruthiga"
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom
    ({
        container:element,
        // sharedLinks: [
        //     {
        //       name: 'Copy link',
        //       url:`https://videocall-ddb63.firebaseapp.com/${roomId}`,
               
        //     },
        //   ],
        scenario:{
            mode:ZegoUIKitPrebuilt.GroupCall,
        },
        showScreenSharingButton:false,
        
    });
};
  return (
    <div>
     <div ref={myMeeting}/>
    </div>
  )
}

export default Roompage