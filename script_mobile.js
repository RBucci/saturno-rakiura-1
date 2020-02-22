(function(){
	var script = {
 "mobileMipmappingEnabled": false,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 62.3,
  "pitch": 0.25,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -20.03
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -22.8
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.17
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 0.31
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -37.62
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -45.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B9F1B77_6A8F_06BC_4199_9EC10824C0DB",
 "initialPosition": {
  "hfov": 90,
  "yaw": 66.14,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B9F0B77_6A8F_06BC_41D7_3E7B87B3CE37",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B9F1B77_6A8F_06BC_4199_9EC10824C0DB"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4C49B3E6_6A8F_05DD_41C2_3A44B7D972A6",
 "initialPosition": {
  "hfov": 90,
  "yaw": 131.77,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4C49D3E6_6A8F_05DD_41D2_FD9820A0A2A7",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4C49B3E6_6A8F_05DD_41C2_3A44B7D972A6"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 40,
 "id": "IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D_mobile",
 "iconURL": "skin/IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D.png",
 "borderRadius": 0,
 "maxWidth": 40,
 "width": "88.889%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 40,
 "transparencyActive": true,
 "paddingBottom": 0,
 "minWidth": 40,
 "mode": "push",
 "class": "IconButton",
 "height": "75.472%",
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B_mobile, true, 0, this.effect_13185EDD_502A_7550_41C3_AE7B43D21853, 'showEffect', false)",
 "verticalAlign": "middle",
 "propagateClick": true,
 "data": {
  "name": "Ayuda"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "pitch": -1.26,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 337.39,
 "id": "audio_7D41447A_6A97_02B4_41BA_C3F2B55BD5EF",
 "yaw": -25.37,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2",
 "data": {
  "label": "Stay With Me"
 }
},
{
 "cursor": "hand",
 "backgroundOpacity": 0,
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "Image_13196006_51DA_2CB3_4191_F03898441520_mobile",
 "left": "84.04%",
 "borderRadius": 0,
 "right": "0.41%",
 "paddingRight": 0,
 "url": "skin/Image_13196006_51DA_2CB3_4191_F03898441520.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 80,
 "bottom": "10.64%",
 "minWidth": 80,
 "paddingBottom": 0,
 "class": "Image",
 "height": "8.75%",
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
 "verticalAlign": "middle",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image25151"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowBlurRadius": 25,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528_mobile",
 "left": "3%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA_mobile",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "3%",
 "paddingRight": 0,
 "gap": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "bottom": "3%",
 "contentOpaque": false,
 "minWidth": 1,
 "top": "3%",
 "paddingBottom": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadowSpread": 1,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 }
},
{
 "thumbnailUrl": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_t.jpg",
 "hfovMin": "140%",
 "hfov": 360,
 "label": "Sala de Cine - Luz Tenue",
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_5F08474E_4CFE_9B55_4162_01D050A59F50",
  "this.overlay_5829C0DD_4CF2_F576_4170_28F44FE61136",
  "this.overlay_58FADE45_4CF5_AD56_41C7_88B8A9887EBB",
  "this.overlay_752BA8F4_4DF2_F535_4196_A95C1DB42D1C",
  "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_tcap0",
  "this.overlay_4EE111E8_5CE6_FBC8_41CC_1138D545E828",
  "this.overlay_4EE6C1E9_5CE6_FBC8_41CD_2E8F28A5780B",
  "this.overlay_4EE6E1E9_5CE6_FBC8_41D2_D0DE83F0700C",
  "this.overlay_4EE711E9_5CE6_FBC8_41CC_D9605A12B936",
  "this.overlay_7005B963_60CE_BA00_419D_74989748E515"
 ],
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 90,
  "yaw": -2.02,
  "pitch": 10.18,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 17.05,
    "targetYaw": -49.87,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 19.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -79.01,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 7.6
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -120.71,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 8.1
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 154.88,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 5.09
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 90.31,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 2.32
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 36.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.2
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -2.64,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 26.19
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 3.33
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "pressedBackgroundOpacity": 1,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4_mobile",
 "width": 55,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "iconBeforeLabel": true,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "minWidth": 1,
 "mode": "push",
 "fontColor": "#FFFFFF",
 "fontSize": 12,
 "class": "Button",
 "height": 40,
 "label": "FOTOS",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "propagateClick": true,
 "click": "this.showPopupMedia(this.window_6488952A_6A77_0255_41D2_191A23035B16, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_48083A9F_6A9D_066B_41A2_7E7A799FE5B3, '90%', '90%', true, false)",
 "data": {
  "name": "Button photoalbum"
 },
 "shadow": false,
 "iconHeight": 32,
 "shadowSpread": 1,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "bold"
},
{
 "thumbnailUrl": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_t.jpg",
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Quincho - Piscinas",
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 56.4,
   "yaw": -92.35,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 56.4,
   "yaw": -92.51,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 130.71,
   "yaw": -56.59,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 130.71,
   "yaw": -56.45,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -48.23,
   "yaw": -0.69,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -48.23,
   "yaw": -0.52,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_6DA7B985_4C73_97D6_41C8_FAF959F094CC",
  "this.overlay_6FA18F6B_4C72_EB52_418D_A4752C2B79FF",
  "this.overlay_6D9129AB_4C72_97D2_41B3_BC9D00327413",
  "this.overlay_6ED1C9D5_4C7E_9776_41CD_EA10811A7BB1",
  "this.overlay_6FC82723_4C7D_BCD2_41C6_ED142E41D1F5",
  "this.overlay_630303B6_4C15_9B35_41A7_0FE1D2CE67BA",
  "this.overlay_7C2FC9D8_4C17_F77D_41C5_180CBDEF7BDE",
  "this.overlay_7E11B26A_4C16_9552_41A3_28556ECCB81C",
  "this.overlay_7D6E9EA6_4C12_EDD5_41C5_9E91663C2E02",
  "this.overlay_7D0ECB6B_4C13_EB53_41BC_4ED41580DB7D",
  "this.overlay_0D1F1C5B_4C0F_ED73_41C2_D93B0423D556",
  "this.overlay_779DF13E_56C3_3919_41A5_CE0412598D4D",
  "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_tcap0"
 ],
 "audios": [
  "this.audio_752C77BB_56FE_D91F_41CF_669E0C980F8D",
  "this.audio_728EBC24_6A95_025D_41D8_05CF0EB028D7"
 ],
 "hfovMax": 120
},
{
 "backgroundOpacity": 0,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6_mobile",
 "left": "3%",
 "width": 1557.46,
 "scrollBarColor": "#000000",
 "gap": 10,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_mobile"
 ],
 "paddingRight": 20,
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "3%",
 "bottom": "90.63%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingBottom": 10,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 10
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_mobile",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "borderRadius": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "class": "IconButton",
 "height": 58,
 "click": "this.shareSocial('tw', 'https://sr1.visitapy.com', false)",
 "verticalAlign": "middle",
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_40902BBE_4F98_F5B3_417E_215EADC2E939.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_40902BBE_4F98_F5B3_417E_215EADC2E939.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_40902BBE_4F98_F5B3_417E_215EADC2E939",
 "data": {
  "label": "Spectrum (Full)"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4F589439_6A8F_02B4_41CA_5677C1C7E65F",
 "initialPosition": {
  "hfov": 90,
  "yaw": -22.66,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4F58B439_6A8F_02B4_41C0_C672F584C9F5",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4F589439_6A8F_02B4_41CA_5677C1C7E65F"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7703348F_503A_71F2_41B8_C8F2687D9078",
 "initialPosition": {
  "hfov": 90,
  "yaw": -5.02,
  "pitch": -0.25,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_7703348F_503A_71F2_41B8_C8F2687D9078"
},
{
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B_mobile",
 "left": "0%",
 "children": [
  "this.Container_6B7B3538_502A_54D0_41D0_9A6D5FB5A723_mobile",
  "this.Container_6B7BD538_502A_54D0_41CC_674161DF5902_mobile"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "right": "0%",
 "paddingRight": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "paddingBottom": 0,
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B_mobile, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "--INSTRUCCIONES"
 },
 "paddingTop": 0
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_48E8FE7F_6A8F_1EAB_41C2_823956A03794",
 "initialPosition": {
  "hfov": 90,
  "yaw": -23.69,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_48E81E7F_6A8F_1EAB_41C0_730C456F31D1",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_48E8FE7F_6A8F_1EAB_41C2_823956A03794"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 40,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_mobile",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "borderRadius": 0,
 "maxWidth": 40,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "width": "100%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 40,
 "transparencyActive": false,
 "paddingBottom": 0,
 "minWidth": 40,
 "mode": "push",
 "class": "IconButton",
 "height": "100%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8_mobile, false, 0, null, null, false)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4DD9273A_6A8F_0EB5_419A_0ED001129C26",
 "initialPosition": {
  "hfov": 90,
  "yaw": -137.38,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4DD9573A_6A8F_0EB5_41D7_4B8BFAF022D1",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4DD9273A_6A8F_0EB5_419A_0ED001129C26"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 90,
  "yaw": 177.85,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4CA5A4E6_6A8F_03DD_41C3_47217E663B99",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 60.28,
    "targetYaw": -2.02,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 120.12,
    "path": "shortest",
    "targetPitch": 10.18
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -49.87,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 19.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -79.01,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 7.6
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -120.71,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 8.1
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 154.88,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 5.09
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 90.31,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 2.32
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 36.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.2
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -2.64,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 26.19
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 3.33
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1333
},
{
 "backgroundOpacity": 0,
 "maxHeight": 2,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A_mobile",
 "left": "0%",
 "borderRadius": 0,
 "maxWidth": 3000,
 "right": "0%",
 "paddingRight": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "bottom": 53,
 "minWidth": 1,
 "paddingBottom": 0,
 "class": "Image",
 "height": 2,
 "verticalAlign": "middle",
 "propagateClick": true,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_mobile",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "paddingBottom": 0,
 "class": "IconButton",
 "height": 58,
 "verticalAlign": "middle",
 "propagateClick": true,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "pitch": -17.08,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 104.76,
 "id": "audio_7D74C782_6A97_0E54_41C4_239F1691C7FE",
 "yaw": 55.52,
 "data": {
  "label": "water sounds"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7870010A_503E_30FD_41BC_311867DA2A0C",
 "initialPosition": {
  "hfov": 90,
  "yaw": -3.52,
  "pitch": -18.59,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_7870010A_503E_30FD_41BC_311867DA2A0C"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4FAF821F_6A8F_066C_41D0_27BBCBE4AF8B",
 "initialPosition": {
  "hfov": 90,
  "yaw": -90.13,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4FAFA21F_6A8F_066C_41B7_5D30F8464412",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4FAF821F_6A8F_066C_41D0_27BBCBE4AF8B"
},
{
 "cursor": "hand",
 "backgroundOpacity": 0,
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3_mobile",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "borderRadius": 0,
 "right": 20,
 "width": "100%",
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 40,
 "transparencyActive": false,
 "bottom": 12,
 "minWidth": 40,
 "mode": "push",
 "paddingBottom": 0,
 "class": "IconButton",
 "height": "100%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15_mobile, false, 0, null, null, false)",
 "verticalAlign": "top",
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4BE9CC9B_6A8F_026B_41BF_9A894B0C97FE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 1,
    "targetYaw": 0,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1,
    "path": "shortest",
    "targetPitch": 0
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.71
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.67
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -24.81
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -25.06
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -27.07
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2667
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8",
 "initialPosition": {
  "hfov": 90,
  "yaw": -24.62,
  "pitch": 27.13,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B_mobile",
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B.jpg",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "verticalAlign": "middle",
 "propagateClick": true,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image24645"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_49888F45_6A8F_1EDF_41CD_A4D3DDBC76B9",
 "initialPosition": {
  "hfov": 90,
  "yaw": 159.26,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4988AF45_6A8F_1EDF_4167_2F73660B4DF9",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_49888F45_6A8F_1EDF_41CD_A4D3DDBC76B9"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1000
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_40D48334_4F99_F6B7_41B6_51185E4DCB63.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_40D48334_4F99_F6B7_41B6_51185E4DCB63.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_40D48334_4F99_F6B7_41B6_51185E4DCB63",
 "data": {
  "label": "Sunday Walk (Full)"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4BE55609_6A8F_0E57_41D2_98D1CBF3690F",
 "initialPosition": {
  "hfov": 90,
  "yaw": 10.36,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4BE56609_6A8F_0E57_419F_0BDE6F598214",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4BE55609_6A8F_0E57_41D2_98D1CBF3690F"
},
{
 "thumbnailUrl": "media/video_7340C746_56DD_5968_41D3_39B2A98F9F24_t.jpg",
 "label": "cut for paste 5",
 "scaleMode": "fit_inside",
 "width": 420,
 "loop": false,
 "id": "video_7340C746_56DD_5968_41D3_39B2A98F9F24",
 "class": "Video",
 "height": 630,
 "video": {
  "width": 420,
  "mp4Url": "media/video_7340C746_56DD_5968_41D3_39B2A98F9F24.mp4",
  "height": 630,
  "class": "VideoResource"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4F63B475_6A8F_02BF_41C3_C5FDBDC57C30",
 "initialPosition": {
  "hfov": 90,
  "yaw": 173.1,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4F63A475_6A8F_02BF_41D3_17EBC2829A64",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4F63B475_6A8F_02BF_41C3_C5FDBDC57C30"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.71
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.67
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -24.81
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -25.06
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -27.07
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B5C1718_6A8F_0E75_41B1_C92E8A6AD6C4",
 "initialPosition": {
  "hfov": 90,
  "yaw": 92.55,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B5C2718_6A8F_0E75_41D3_67BC6C7B9907",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B5C1718_6A8F_0E75_41B1_C92E8A6AD6C4"
},
{
 "titleFontColor": "#000000",
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "id": "window_589E2836_5746_CE6B_41AD_BBAC5BB986BB",
 "width": 400,
 "bodyBackgroundColorRatios": [
  1
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "gap": 10,
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonRollOverBorderSize": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 20,
 "bodyPaddingRight": 0,
 "headerPaddingLeft": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPressedBorderColor": "#000000",
 "headerPaddingRight": 0,
 "modal": true,
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "closeButtonPaddingTop": 5,
 "titlePaddingTop": 5,
 "closeButtonPressedBorderSize": 0,
 "backgroundColor": [],
 "bodyPaddingTop": 0,
 "shadowHorizontalLength": 3,
 "footerBorderColor": "#000000",
 "minWidth": 20,
 "closeButtonPressedBackgroundColor": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "height": 600,
 "title": "",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "shadowOpacity": 0.5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilOpacity": 0.4,
 "titleTextDecoration": "none",
 "propagateClick": false,
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconLineWidth": 3,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 20,
 "closeButtonBackgroundOpacity": 1,
 "titleFontFamily": "Arial",
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonIconWidth": 20,
 "bodyBorderColor": "#000000",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "children": [
  "this.container_4FBEF3BD_6A8F_05AC_41B4_C638889EB557"
 ],
 "closeButtonIconHeight": 20,
 "backgroundColorRatios": [],
 "shadowColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "closeButtonRollOverBackgroundColor": [],
 "bodyBackgroundColor": [
  "#000000"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "paddingRight": 0,
 "titlePaddingLeft": 5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "closeButtonIconLineWidth": 2,
 "closeButtonRollOverIconLineWidth": 2,
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonBorderColor": "#000000",
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 1,
 "footerBorderSize": 0,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundOpacity": 1,
 "bodyBorderSize": 0,
 "titleFontStyle": "normal",
 "contentOpaque": false,
 "closeButtonPaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "paddingBottom": 0,
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "closeButtonPaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "closeButtonBorderSize": 0,
 "titlePaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window17928"
 },
 "footerBackgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C",
 "initialPosition": {
  "hfov": 90,
  "yaw": 4.27,
  "pitch": 8.04,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B0C8683_6A8F_0E5B_41A0_E13DED74C19D",
 "initialPosition": {
  "hfov": 90,
  "yaw": 30.29,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B0C9683_6A8F_0E5B_41D0_F27477F61FB6",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B0C8683_6A8F_0E5B_41A0_E13DED74C19D"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4E350102_6A8F_0254_41D3_1CC325561E1A",
 "initialPosition": {
  "hfov": 90,
  "yaw": 28.21,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4E352102_6A8F_0254_41C1_A3F69FCAF2ED",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4E350102_6A8F_0254_41D3_1CC325561E1A"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_4FBEF3BD_6A8F_05AC_41B4_C638889EB557, [this.htmltext_4FBE83BD_6A8F_05AC_41C9_9134476E35DC,this.component_4FA1D3BE_6A8F_05AC_41D6_A2E86A822736,this.component_4FA1B3BE_6A8F_05AC_41CE_40F6E80B64C5], 2000)",
 "items": [
  "this.albumitem_4FBE33BD_6A8F_05AC_41CC_32D4DC6AA9E0"
 ],
 "id": "playList_71B38395_6A9D_067F_41D0_276B009F2C1F",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_t.jpg",
 "hfov": 360,
 "label": "Cocina",
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
 "adjacentPanoramas": [
  {
   "backwardYaw": -149.48,
   "yaw": 2.39,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -149.48,
   "yaw": 2.26,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 89.87,
   "yaw": 109.03,
   "distance": 1,
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 89.87,
   "yaw": 109.1,
   "distance": 1,
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_541D6722_4C12_9CCD_41BA_EE1FE905E835",
  "this.overlay_5B17EBCA_4C1E_AB5D_41BF_C3867D88D8B8",
  "this.overlay_52FEE528_4C15_FCDE_41AE_7C61B197B5D1",
  "this.overlay_7413D737_4DF2_7B32_41CC_6C141EB3875F",
  "this.overlay_757F79E6_4DFE_B753_41AD_2FB53A3E46D9",
  "this.overlay_76E05345_4DFE_7B57_41C6_165FDFFF9CA8",
  "this.overlay_722C6DB8_4C0E_AF3D_41C6_E65D7C692713",
  "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_tcap0"
 ],
 "hfovMax": 120
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4F9181AA_6A8F_0254_41CF_3D556DF5BBED",
 "initialPosition": {
  "hfov": 90,
  "yaw": 30.52,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4F91B1AA_6A8F_0254_41D7_966C22D1FE74",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4F9181AA_6A8F_0254_41CF_3D556DF5BBED"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4E702176_6A8F_02BD_41D6_622E80D98688",
 "initialPosition": {
  "hfov": 90,
  "yaw": -44.08,
  "pitch": -11.02,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4E703176_6A8F_02BD_41B9_8D6CEEA809D4",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4E702176_6A8F_02BD_41D6_622E80D98688"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4CCE654D_6A8F_02EC_41A6_99E39D00E187",
 "initialPosition": {
  "hfov": 90,
  "yaw": -19.22,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4CCF854D_6A8F_02EC_41C3_1960D99B53B5",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4CCE654D_6A8F_02EC_41A6_99E39D00E187"
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "pitch": 2.76,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 210.77,
 "id": "audio_728EBC24_6A95_025D_41D8_05CF0EB028D7",
 "yaw": 35.17,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_424F38E2_6A8F_03D5_41C2_A5BB570A5C1A",
 "initialPosition": {
  "hfov": 90,
  "yaw": 158.4,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_424F58E2_6A8F_03D5_4168_E7961C63258E",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_424F38E2_6A8F_03D5_41C2_A5BB570A5C1A"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "initialPosition": {
  "hfov": 90,
  "yaw": 3.27,
  "pitch": 11.81,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC"
},
{
 "thumbnailUrl": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_t.jpg",
 "hfov": 360,
 "label": "Planta Alta - Habitaci\u00f3n",
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
 "adjacentPanoramas": [
  {
   "backwardYaw": 53.35,
   "yaw": 146.58,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 53.35,
   "yaw": 146.8,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_6A5E0209_4C0E_94DF_417D_46B9DFD108C3",
  "this.overlay_6261EA3E_4C3F_B535_41D0_801F1A3A3344",
  "this.overlay_7243A9E8_4C0E_775E_41A5_59C64522A4DF",
  "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_tcap0"
 ],
 "hfovMax": 120
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B38D6A4_6A8F_0E5D_419C_28A70F61AD57",
 "initialPosition": {
  "hfov": 90,
  "yaw": 30.29,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B38E6A3_6A8F_0E5B_4196_6F4085D47CBF",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B38D6A4_6A8F_0E5D_419C_28A70F61AD57"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4C09F3A8_6A8F_0654_4190_6F89BC75F6C6",
 "initialPosition": {
  "hfov": 90,
  "yaw": -49.29,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4C0903A8_6A8F_0654_41DA_572B1AA2DBB8",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4C09F3A8_6A8F_0654_4190_6F89BC75F6C6"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4BB0EBB2_6A8F_05B5_41D9_8CE4B1475217",
 "initialPosition": {
  "hfov": 90,
  "yaw": 84.12,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4BB01BB2_6A8F_05B5_41D9_6FDF683199FC",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4BB0EBB2_6A8F_05B5_41D9_8CE4B1475217"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_771E9E9F_503A_3113_41CE_5824E21E1360",
 "initialPosition": {
  "hfov": 120,
  "yaw": -2.26,
  "pitch": -4.74,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_771E9E9F_503A_3113_41CE_5824E21E1360"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 24.47,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_48947DCC_6A8F_1DEC_41D5_7E7E7559956B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 9.53,
    "targetYaw": 0,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 18.14,
    "path": "shortest",
    "targetPitch": 0
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -45.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -4.21
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 37.56,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -4.71
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -163.67,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -6.22
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -136.29,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -4.21
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -95.34,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.2
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 158.65,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -14.01
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -113.18,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -5.72
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "pressedBackgroundOpacity": 1,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52_mobile",
 "width": 83,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "iconBeforeLabel": true,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "minWidth": 1,
 "mode": "push",
 "fontColor": "#FFFFFF",
 "fontSize": 12,
 "class": "Button",
 "height": 40,
 "label": "CONTACTO",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "propagateClick": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
 "data": {
  "name": "Button realtor"
 },
 "shadow": false,
 "iconHeight": 32,
 "shadowSpread": 1,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "bold"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_mobile",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "width": 60,
 "borderRadius": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "paddingBottom": 0,
 "class": "IconButton",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE_mobile.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE_mobile, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE_mobile, false, 0, null, null, false) }",
 "verticalAlign": "middle",
 "propagateClick": true,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B480D67_6A8F_02DB_41D8_F39BE3E21862",
 "initialPosition": {
  "hfov": 90,
  "yaw": -85.76,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B483D67_6A8F_02DB_41C4_8721B12340B3",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B480D67_6A8F_02DB_41D8_F39BE3E21862"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4C2813C7_6A8F_05DB_41D7_F930A4BA68FB",
 "initialPosition": {
  "hfov": 90,
  "yaw": 131.77,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4C2843C7_6A8F_05DB_41A3_FC37966A9410",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4C2813C7_6A8F_05DB_41D7_F930A4BA68FB"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4D2954C3_6A8F_03D4_41C1_8A509A92C041",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 1,
    "targetYaw": 0,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1,
    "path": "shortest",
    "targetPitch": 0
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.71
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.67
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -24.81
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -25.06
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -27.07
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_6B7B3538_502A_54D0_41D0_9A6D5FB5A723_mobile",
 "left": "3%",
 "children": [
  "this.Container_6B7B7538_502A_54D0_41B6_8F7020C59B3D_mobile"
 ],
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "3%",
 "paddingRight": 0,
 "gap": 0,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "top": "3%",
 "shadowHorizontalLength": 0,
 "bottom": "3%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadowSpread": 1,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 17.05,
    "targetYaw": -45.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -4.21
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 37.56,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -4.71
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -163.67,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -6.22
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -136.29,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -4.21
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -95.34,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.2
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 158.65,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -14.01
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -113.18,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -5.72
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_415957D2_4F99_1DF3_41B4_57B956E9370A.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_415957D2_4F99_1DF3_41B4_57B956E9370A.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_415957D2_4F99_1DF3_41B4_57B956E9370A",
 "data": {
  "label": "5158598_summer-night-piano-dreaming_by_pablikmm"
 }
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "pitch": -0.5,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 185.65,
 "id": "audio_72B5C6DE_6A93_0FED_41D1_DDA1D6875B0B",
 "yaw": -5.02,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4D76F4F1_6A8F_03B7_41C9_D7E449D98661",
 "initialPosition": {
  "hfov": 120,
  "yaw": -1.36,
  "pitch": -6.86,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4D7604F1_6A8F_03B7_41B4_B5C610F570C1",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4D76F4F1_6A8F_03B7_41C9_D7E449D98661"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 37,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_mobile",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "borderRadius": 0,
 "maxWidth": 49,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "width": "100%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 37,
 "transparencyActive": true,
 "paddingBottom": 0,
 "minWidth": 49,
 "mode": "push",
 "class": "IconButton",
 "height": "141.51%",
 "verticalAlign": "middle",
 "propagateClick": true,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1333
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "pitch": -0.75,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 359.5,
 "id": "audio_76772C3C_56C3_6F18_41D4_7C4FB259877A",
 "yaw": -47.23,
 "data": {
  "label": "water sounds"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_770D5914_503A_D315_41C7_BD98E4CD29E4",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0.75,
  "pitch": 8.04,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_770D5914_503A_D315_41C7_BD98E4CD29E4"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4E9B2041_6A8F_02D4_41A2_E43AEC532C94",
 "initialPosition": {
  "hfov": 90,
  "yaw": -53.45,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4E9B4041_6A8F_02D4_41D1_5FAC1960E515",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4E9B2041_6A8F_02D4_41A2_E43AEC532C94"
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "pitch": 2.76,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 231.88,
 "id": "audio_7D5C5B7D_6A97_06AC_41B4_6C276E725473",
 "yaw": 22.11,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1333
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1333
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "initialPosition": {
  "hfov": 90,
  "yaw": -87.68,
  "pitch": -3.27,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_77D188BB_503E_5113_4169_313A25054DA6"
},
{
 "thumbnailUrl": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_t.jpg",
 "hfov": 360,
 "label": "Escalera - Entrepiso",
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 126.55,
   "yaw": -14.87,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 126.55,
   "yaw": 16.16,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 126.55,
   "yaw": -14.82,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -161.79,
   "yaw": 6.63,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -161.79,
   "yaw": 6.64,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -151.79,
   "yaw": -6.9,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -151.79,
   "yaw": -6.95,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_6E7D7ACC_4C72_9555_41C8_254666DCBD5A",
  "this.overlay_689FBDC5_4C76_EF56_41D0_FDE427A56FD1",
  "this.overlay_68C43EA9_4C76_6DDE_41BC_6917D875D7F0",
  "this.overlay_696D3868_4C76_955E_41D2_B78938E57E51",
  "this.overlay_68EAA62C_4C72_BCD6_41AD_F2767561D35F",
  "this.overlay_62AE8006_4C3E_94D5_4195_37AB3152888F",
  "this.overlay_63036D8E_4C3D_AFD2_41CC_31017422F0F6",
  "this.overlay_63CFCEB6_4C32_AD32_41C6_39DBCAE7E4F6",
  "this.overlay_630263E9_4C33_9B5F_41A8_0D731596BBA0",
  "this.overlay_63881641_4C35_9D4F_41BF_500F021033D3",
  "this.overlay_63647F43_4C33_AB53_41D1_F19AB5488D5A",
  "this.overlay_638525C6_4C0D_9F52_41D1_E258508E5E91",
  "this.overlay_72D70213_4C0F_94F3_41B8_F09D9513D0DA",
  "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_tcap0"
 ],
 "hfovMax": 120
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4FCFA254_6A8F_06FD_41C8_24CA5E5C4B17",
 "initialPosition": {
  "hfov": 90,
  "yaw": -90.13,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4FCFB254_6A8F_06FD_41A2_0A6A6C4F0A9C",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4FCFA254_6A8F_06FD_41C8_24CA5E5C4B17"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1000
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_4163BD09_4F99_7251_41A9_48527994202E.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_4163BD09_4F99_7251_41A9_48527994202E.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_4163BD09_4F99_7251_41A9_48527994202E",
 "data": {
  "label": "Summer Trip-Hop (2016)"
 }
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1500
},
{
 "backgroundOpacity": 1,
 "scrollEnabled": true,
 "borderRadius": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA_mobile",
 "left": "0%",
 "backgroundColorRatios": [
  0
 ],
 "right": "0%",
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.914933481306!2d-57.50898168457854!3d-25.2397899838764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzIzLjIiUyA1N8KwMzAnMjQuNSJX!5e0!3m2!1ses-419!2spy!4v1581896704972!5m2!1ses-419!2spy",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingBottom": 0,
 "class": "WebFrame",
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "paddingTop": 0,
 "insetBorder": false
},
{
 "playbackBarHeadShadowBlurRadius": 3,
 "id": "MainViewer_mobile",
 "left": 0,
 "width": "100%",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderRadius": 3,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 100,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "toolTipPaddingLeft": 6,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "progressBorderRadius": 0,
 "playbackBarOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "height": "100%",
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowBlurRadius": 3,
 "progressBarOpacity": 1,
 "propagateClick": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "toolTipFontFamily": "Arial",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipPaddingBottom": 4,
 "shadow": false,
 "progressBottom": 55,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressHeight": 6,
 "toolTipFontSize": "12px",
 "borderRadius": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarRight": 0,
 "toolTipTextShadowColor": "#000000",
 "progressOpacity": 1,
 "playbackBarHeadShadow": true,
 "paddingRight": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "toolTipOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadBorderSize": 0,
 "top": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontColor": "#606060",
 "toolTipPaddingRight": 6,
 "playbackBarBottom": 5,
 "paddingBottom": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderColor": "#767676",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipShadowOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingTop": 0,
 "transitionMode": "blending"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_43EA397A_6A8F_02B4_41B9_75AA2CEF7BB4",
 "initialPosition": {
  "hfov": 90,
  "yaw": 87.65,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_43EA597A_6A8F_02B4_41B1_E11CAD4BE5B6",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_43EA397A_6A8F_02B4_41B9_75AA2CEF7BB4"
},
{
 "thumbnailUrl": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_t.jpg",
 "hfov": 360,
 "label": "Sala - Living",
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
 "adjacentPanoramas": [
  {
   "backwardYaw": -95.88,
   "yaw": 157.34,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -95.88,
   "yaw": 157.22,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 109.03,
   "yaw": 89.87,
   "distance": 1,
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 109.03,
   "yaw": 89.64,
   "distance": 1,
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_5F9D2CB5_4CF2_6D31_41B7_5BCEF2CFED01",
  "this.overlay_5AE07B89_4CF2_EBDF_41D0_0E914D04EED6",
  "this.overlay_59A6ACB0_4C0E_6DCD_41C1_5C1B9CBD1730",
  "this.overlay_5207670B_4C12_BCD2_41C7_91CD2C8CFC49",
  "this.overlay_75752B26_4DF5_94D5_41BE_473EFED9DBD7",
  "this.overlay_721F4000_4DF7_94CE_41C5_C23548018D00",
  "this.overlay_0F886554_4DF6_BF76_41C9_78656514EDB0",
  "this.overlay_70F91094_4DF5_F5F6_41C2_500E4A3028EC",
  "this.overlay_7257A9C3_4C0D_9752_41D2_10B53BCDED80",
  "this.overlay_725DDFD6_4C0D_AB72_41BC_1ECF3EBC4A83",
  "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_tcap0"
 ],
 "hfovMax": 120
},
{
 "items": [
  {
   "media": "this.video_76BF82AE_56C2_FB39_41D0_DF287E74780C",
   "start": "this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4FCAA3DD_6A8F_05EC_41C9_2AAACE6911CE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4FCAA3DD_6A8F_05EC_41C9_2AAACE6911CE, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)",
   "player": "this.MainViewer_mobileVideoPlayer"
  }
 ],
 "id": "playList_4FCAA3DD_6A8F_05EC_41C9_2AAACE6911CE",
 "class": "PlayList"
},
{
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48_mobile",
 "left": "3%",
 "children": [
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19_mobile"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "3%",
 "paddingRight": 0,
 "gap": 0,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "bottom": "3%",
 "contentOpaque": false,
 "minWidth": 1,
 "top": "3%",
 "paddingBottom": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadowSpread": 1,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4D98B415_6A8F_027F_41D6_06C45C04EFAE",
 "initialPosition": {
  "hfov": 120,
  "yaw": -2.26,
  "pitch": -4.74,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4D98C415_6A8F_027F_41D2_3B348FB1413D",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4D98B415_6A8F_027F_41D6_06C45C04EFAE"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4D9166AB_6A8F_0E54_41A8_3B7F67C81CF0",
 "initialPosition": {
  "hfov": 90,
  "yaw": -101.26,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4C6E96AB_6A8F_0E54_41C0_300C458AFC1E",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4D9166AB_6A8F_0E54_41A8_3B7F67C81CF0"
},
{
 "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1_t.jpg",
 "hfov": 360,
 "label": "Calle - Entrada",
 "id": "panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.95,
   "yaw": -2.15,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -179.95,
   "yaw": -2.25,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "LivePanorama",
 "frameDisplayTime": 5000,
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  },
  {
   "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  },
  {
   "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "frameTransitionTime": 2000,
 "overlays": [
  "this.overlay_4722F8F2_5746_CFEB_41B6_CF6FB682FC5D",
  "this.overlay_472958F3_5746_CFE9_4190_A06C79E7A940",
  "this.overlay_472968F3_5746_CFE9_41C0_E4651E9C12EB",
  "this.overlay_472928F3_5746_CFE9_41D2_3453D059BC7B",
  "this.overlay_472938F3_5746_CFE9_41D3_199BB64C45DA",
  "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0"
 ],
 "audios": [
  "this.audio_7202A7E0_6A93_0DD5_41D8_3326699B779E"
 ],
 "hfovMax": 120
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1333
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "pitch": -0.5,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 129.25,
 "id": "audio_72AA5CA7_6A95_025B_41C5_22B66B8B256F",
 "yaw": 37.18,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_432BC9B4_6A8F_05BD_41D6_673844CF6A2F",
 "initialPosition": {
  "hfov": 90,
  "yaw": 116.63,
  "pitch": -1.84,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_432BF9B4_6A8F_05BD_4197_67CB48FCDC66",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_432BC9B4_6A8F_05BD_41D6_673844CF6A2F"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4DF26759_6A8F_0EF7_41D7_73A9BAED81CD",
 "initialPosition": {
  "hfov": 90,
  "yaw": -137.38,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4DF39759_6A8F_0EF7_41C0_B4EEE70DF4F5",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4DF26759_6A8F_0EF7_41D7_73A9BAED81CD"
},
{
 "items": [
  {
   "media": "this.video_4DC63883_564D_77EF_41D3_729FE9100318",
   "start": "this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4FCAF3DD_6A8F_05EC_4196_3DF914085B40, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4FCAF3DD_6A8F_05EC_4196_3DF914085B40, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)",
   "player": "this.MainViewer_mobileVideoPlayer"
  }
 ],
 "id": "playList_4FCAF3DD_6A8F_05EC_4196_3DF914085B40",
 "class": "PlayList"
},
{
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_48CF4E5F_6A8F_1EEB_41C0_1997D630DBAF",
 "initialPosition": {
  "hfov": 90,
  "yaw": 112.42,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_48CF7E5F_6A8F_1EEB_41AE_F76977B10D0E",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_48CF4E5F_6A8F_1EEB_41C0_1997D630DBAF"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4C791676_6A8F_0EBD_419B_811B07F240BE",
 "initialPosition": {
  "hfov": 90,
  "yaw": -101.26,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4C790676_6A8F_0EBD_41D5_5D9718CA199D",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4C791676_6A8F_0EBD_419B_811B07F240BE"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_49FFAFA1_6A8F_1E54_41C4_F9ABA70F33DF",
 "initialPosition": {
  "hfov": 90,
  "yaw": -132.28,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_49FFCFA1_6A8F_1E54_41A7_B3F8128C9451",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_49FFAFA1_6A8F_1E54_41C4_F9ABA70F33DF"
},
{
 "thumbnailUrl": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_t.jpg",
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Quincho - Parrilla",
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
 "adjacentPanoramas": [
  {
   "backwardYaw": -70.41,
   "yaw": 144.72,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -70.41,
   "yaw": 144.51,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -20.74,
   "yaw": -169.64,
   "distance": 1,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -20.74,
   "yaw": -169.76,
   "distance": 1,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 47.72,
   "yaw": 98.57,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 47.72,
   "yaw": 98.46,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -56.59,
   "yaw": 130.71,
   "distance": 1,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -56.59,
   "yaw": 130.72,
   "distance": 1,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_539238FD_4C72_9536_41C1_9735137A6A8B",
  "this.overlay_539524B3_4C72_9D33_41BF_0168CD1AF8AE",
  "this.overlay_52780C30_4C76_6CCE_41C1_B9F2E8174A50",
  "this.overlay_6F8B9EB2_4C77_ADCD_41D1_02693D57AF37",
  "this.overlay_78EBC3AE_4C17_FBD5_41CF_7454C300F3F8",
  "this.overlay_7AA7DA94_4C16_95F6_41C3_C928FF8C5DF3",
  "this.overlay_7982F986_4C12_97D2_41AF_EBA9BB403852",
  "this.overlay_74F737A5_4C13_9BD6_41C7_666E6CB897D9",
  "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_tcap0"
 ],
 "audios": [
  "this.audio_72E69B50_6A95_06F5_41B8_9CB77B66D0F6"
 ],
 "hfovMax": 120
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4F24B41B_6A8F_026B_41A4_C6B4D450767C",
 "initialPosition": {
  "hfov": 90,
  "yaw": -22.66,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4F24A41B_6A8F_026B_41D4_7B8BB4A57C84",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4F24B41B_6A8F_026B_41A4_C6B4D450767C"
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "pitch": 0,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 359,
 "id": "audio_7287F87C_6A97_02AD_41C5_6512D842BDF7",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 62.45,
  "pitch": -0.92,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4BDB8C26_6A8F_025D_41D6_8EE033D5069B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 1.47,
    "targetYaw": 62.3,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1.95,
    "path": "shortest",
    "targetPitch": 0.25
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -20.03
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -22.8
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.17
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 0.31
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -37.62
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -45.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "pitch": 0,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 359.5,
 "id": "audio_752C77BB_56FE_D91F_41CF_669E0C980F8D",
 "yaw": 0,
 "data": {
  "label": "water sounds"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4D5307BE_6A8F_0DAC_41CA_10085FAAAD4C",
 "initialPosition": {
  "hfov": 90,
  "yaw": 179.31,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4D5357BE_6A8F_0DAC_41C5_628FE4C66B27",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4D5307BE_6A8F_0DAC_41CA_10085FAAAD4C"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 95,
 "id": "Image_5EF9A31F_502E_7713_41B1_155B9E9559BD_mobile",
 "left": "0%",
 "borderRadius": 0,
 "maxWidth": 250,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_5EF9A31F_502E_7713_41B1_155B9E9559BD.png",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "minWidth": 1,
 "top": "0%",
 "paddingBottom": 0,
 "class": "Image",
 "height": "100%",
 "verticalAlign": "middle",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2705"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_40E94A63_6A8F_06D4_41D1_4F851E796D5B",
 "initialPosition": {
  "hfov": 90,
  "yaw": -59.77,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40E96A63_6A8F_06D4_41D8_A9F1A8625C16",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_40E94A63_6A8F_06D4_41D1_4F851E796D5B"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_493DBFE1_6A8F_1DD7_4198_E9C88E2B4718",
 "initialPosition": {
  "hfov": 90,
  "yaw": 123.41,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_493DAFE1_6A8F_1DD7_41D0_75D7D7F7AEB4",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_493DBFE1_6A8F_1DD7_4198_E9C88E2B4718"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "initialPosition": {
  "hfov": 90,
  "yaw": -23.11,
  "pitch": -0.75,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4"
},
{
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_48D50E3F_6A8F_1EAC_41D3_117F1C6C3DF6",
 "initialPosition": {
  "hfov": 90,
  "yaw": 112.42,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_48D55E3F_6A8F_1EAC_41AA_7FDCF7787E5D",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_48D50E3F_6A8F_1EAC_41D3_117F1C6C3DF6"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_mobile",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "paddingBottom": 0,
 "class": "IconButton",
 "height": 58,
 "verticalAlign": "middle",
 "propagateClick": true,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4D8746E3_6A8F_0FDB_41C5_4B9FBB45D292",
 "initialPosition": {
  "hfov": 90,
  "yaw": 178.36,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4D8776E3_6A8F_0FDB_41DA_57CE55C5D7F1",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4D8746E3_6A8F_0FDB_41C5_4B9FBB45D292"
},
{
 "thumbnailUrl": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_t.jpg",
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Sala de Cine - Fondo",
 "id": "panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_4F65FE35_5C93_3E28_41D3_CCEA286FD35A",
  "this.overlay_488AF362_5C92_E62A_41CD_ED6323AB55AF",
  "this.overlay_48F889FD_5C92_E219_41D5_92A0AD1ACDEC",
  "this.overlay_48EDFE9F_5C9D_1E1A_41B7_6AFA2637F974",
  "this.overlay_4861FFAC_5C9D_FE3E_41A9_C97465DF7BC8",
  "this.overlay_4B027F32_5C9F_1E2B_41A8_DEB49B78DC2A",
  "this.overlay_49E5426B_5C9F_6639_41D5_53491B41ED02",
  "this.overlay_44040F6A_5C93_3E3A_41B2_47FDF4DB86AD",
  "this.overlay_4404EF6A_5C93_3E3A_41B4_92431BFDBA6A",
  "this.overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D",
  "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_tcap0"
 ],
 "hfovMax": 120
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E_mobile",
 "width": 115.05,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A_mobile",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE_mobile"
 ],
 "paddingRight": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "height": 641,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "--SETTINGS"
 },
 "paddingTop": 0
},
{
 "items": [
  {
   "media": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "start": "this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 0, 1)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_camera"
  },
  {
   "media": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 1, 2)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera"
  },
  {
   "media": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 2, 3)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera"
  },
  {
   "media": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 3, 4)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_camera"
  },
  {
   "media": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 4, 5)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera"
  },
  {
   "media": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 5, 6)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera"
  },
  {
   "media": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 6, 7)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_camera"
  },
  {
   "media": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 7, 8)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera"
  },
  {
   "media": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 8, 9)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_camera"
  },
  {
   "media": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 9, 10)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera"
  },
  {
   "media": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 10, 11)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera"
  },
  {
   "media": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 11, 12)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera"
  },
  {
   "media": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 12, 13)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera"
  },
  {
   "media": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 13, 14)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera"
  },
  {
   "media": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 14, 15)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_camera"
  },
  {
   "media": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 15, 16)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera"
  },
  {
   "media": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 16, 17)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera"
  },
  {
   "media": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 17, 18)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera"
  },
  {
   "media": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 18, 19)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera"
  },
  {
   "media": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 19, 20)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_camera"
  },
  {
   "media": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 20, 21)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_camera"
  },
  {
   "media": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 21, 22)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera"
  },
  {
   "media": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 22, 23)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera"
  },
  {
   "media": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 23, 24)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera"
  },
  {
   "media": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 24, 25)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 25, 0)",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
   "player": "this.MainViewer_mobilePhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "class": "PlayList"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B028663_6A8F_0EDB_41B8_494DDAE20E1A",
 "initialPosition": {
  "hfov": 90,
  "yaw": -164.3,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B029662_6A8F_0ED5_41CD_A7E64AEB41D6",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B028663_6A8F_0EDB_41B8_494DDAE20E1A"
},
{
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7_mobile",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E_mobile",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B_mobile"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "right": "0%",
 "paddingRight": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "paddingBottom": 0,
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7_mobile, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "paddingTop": 0
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_49916F26_6A8F_1E5C_41D3_729D91D111C0",
 "initialPosition": {
  "hfov": 90,
  "yaw": 109.59,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_486E8F25_6A8F_1E5F_41C8_B82038CA1048",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_49916F26_6A8F_1E5C_41D3_729D91D111C0"
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "pitch": -4.52,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 166.56,
 "id": "audio_725841F7_56C7_3928_418B_5A553C889C71",
 "yaw": 47.48,
 "data": {
  "label": "water sounds"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_40C86A46_6A8F_06DD_41B9_810F94C3C102",
 "initialPosition": {
  "hfov": 90,
  "yaw": -59.77,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40C99A46_6A8F_06DD_41B4_843ABE13EA01",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_40C86A46_6A8F_06DD_41B9_810F94C3C102"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 63.37,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_408BEA0D_6A8F_066C_41D7_C74AF5568F33",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 1.44,
    "targetYaw": 62.3,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1.88,
    "path": "shortest",
    "targetPitch": 0.25
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -20.03
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -22.8
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.17
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 0.31
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -37.62
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -45.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1333
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288_mobile",
 "left": "0%",
 "width": 436.59,
 "scrollBarColor": "#000000",
 "gap": 3,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0_mobile",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448_mobile",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98_mobile",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4_mobile",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52_mobile"
 ],
 "paddingRight": 0,
 "horizontalAlign": "left",
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "height": 51,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-button set container"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54",
 "data": {
  "label": "Summer Uplifting Energetic Fun Upbeat Funky Pop (Full)"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "initialPosition": {
  "hfov": 120,
  "yaw": -1.36,
  "pitch": -6.86,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5"
},
{
 "thumbnailUrl": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_t.jpg",
 "hfov": 360,
 "label": "Planta Alta - Quincho con Parrilla",
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
 "adjacentPanoramas": [
  {
   "backwardYaw": 31.81,
   "yaw": 78.74,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 31.81,
   "yaw": 79.08,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -51.34,
   "yaw": 120.23,
   "distance": 1,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -51.34,
   "yaw": 120.77,
   "distance": 1,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_66AA9141_4C12_B74F_4182_4D5CE8470BE4",
  "this.overlay_661206E1_4C15_9D4F_41B1_D784E4DD7ED9",
  "this.overlay_63D94153_4C16_B772_41CC_320A7C1BAC6A",
  "this.overlay_639A064F_4C15_9D53_41CC_8D0F891DEB0D",
  "this.overlay_604B1A6E_4C12_B555_41B9_113B7C073FFB",
  "this.overlay_615CF70F_4C0D_BCD2_41C6_F2BE939B4F65",
  "this.overlay_0D2A0CC2_4C0E_AD4D_41B5_7C511CCA84AF",
  "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_tcap0"
 ],
 "audios": [
  "this.audio_7D41447A_6A97_02B4_41BA_C3F2B55BD5EF"
 ],
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 62.45,
  "pitch": 4.59,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_436A89F0_6A8F_05B4_41D0_39F0E1E97208",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 2.74,
    "targetYaw": 62.3,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 4.5,
    "path": "shortest",
    "targetPitch": 0.25
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -20.03
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -22.8
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.17
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 0.31
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -37.62
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -45.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_mobile",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "borderRadius": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "class": "IconButton",
 "height": 58,
 "click": "this.shareSocial('fb', 'https://sr1.visitapy.com', false)",
 "verticalAlign": "middle",
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "thumbnailUrl": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_t.jpg",
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Pasillo Acceso a Parrilla",
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
 "adjacentPanoramas": [
  {
   "backwardYaw": -93.72,
   "yaw": 88.31,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -93.72,
   "yaw": 88.14,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -169.64,
   "yaw": -20.74,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -169.64,
   "yaw": -20.84,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 15.7,
   "yaw": 42.62,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 15.7,
   "yaw": 42.63,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_55BD891B_4C12_F4F2_41BF_BD7A099FA4FB",
  "this.overlay_569D5C53_4C13_ED72_41C5_56F2E1168FED",
  "this.overlay_55344675_4C12_7D37_41CA_0C7A84DACAAA",
  "this.overlay_79858F87_4C0D_ABD3_41C2_6BD4B90B4286",
  "this.overlay_7A5E25AC_4C0D_9FD5_41A7_29C3FBE038B8",
  "this.overlay_7ABCF3A7_4DF3_FBD3_41D0_D18E2BE7D6F6",
  "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_tcap0"
 ],
 "audios": [
  "this.audio_72AA5CA7_6A95_025B_41C5_22B66B8B256F"
 ],
 "hfovMax": 120
},
{
 "thumbnailUrl": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_t.jpg",
 "hfov": 360,
 "label": "TOMA 31 BALC\u00d3N FRONTAL",
 "id": "panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -53.36,
   "yaw": -105.26,
   "distance": 1,
   "panorama": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_466CC9D9_5CFE_E219_41C6_48DA7E6ACE59",
  "this.overlay_40CC987A_5CFF_621A_41C8_873C6BA0FFB4",
  "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_tcap0"
 ],
 "audios": [
  "this.audio_72C6ADEA_6A95_1DD5_41D7_F0F2AC5858C7"
 ],
 "hfovMax": 130
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4F6A730F_6A8F_066C_41C8_DC5AE0190957",
 "initialPosition": {
  "hfov": 90,
  "yaw": 128.66,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4F6B930E_6A8F_066D_41D5_DD3565313E4F",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4F6A730F_6A8F_066C_41C8_DC5AE0190957"
},
{
 "thumbnailUrl": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_t.jpg",
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Comedor - Vista Nocturna",
 "id": "panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -17.24,
   "yaw": -155.53,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -17.24,
   "yaw": -155.51,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_4DB28054_5C8D_E26E_41D1_A2A9EFF76692",
  "this.overlay_4DB2A054_5C8D_E26E_41D6_403365217C61",
  "this.overlay_4D083693_5C8F_6EE9_4198_A5E09AE6AE49",
  "this.overlay_4D09C693_5C8F_6EE9_41CC_BA80A8AA8CB2",
  "this.overlay_4D993E39_5C8D_1E26_41B6_38A2BB475CF3",
  "this.overlay_4EA4D860_5C93_6226_41BE_05F490730C74",
  "this.overlay_4EA199DA_5C95_221B_41CA_307C2CFD92FA",
  "this.overlay_4ECCB29C_5C95_E61F_41D2_B76939FDD4C7",
  "this.overlay_4EFCB093_5C97_62E9_41C4_F24F905896A0",
  "this.overlay_4FD375BB_5C97_2219_41CE_5B46EE142C76",
  "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_tcap0"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4BF135CF_6A8F_0DEC_41CD_7E5FE69ED8BE",
 "initialPosition": {
  "hfov": 90,
  "yaw": 86.28,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4BF145CF_6A8F_0DEC_41C8_30F1B87BD719",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4BF135CF_6A8F_0DEC_41CD_7E5FE69ED8BE"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_mobile",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "borderRadius": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "class": "IconButton",
 "height": 58,
 "verticalAlign": "middle",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12_mobile",
 "left": "0%",
 "width": "86.335%",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 60,
 "paddingBottom": 0,
 "minWidth": 1,
 "top": "-2.56%",
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "height": "74.423%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.36vh;font-family:'Arimo';\">PERSPECTIVAS</SPAN></SPAN></DIV></div>"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_t.png",
 "playList": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList",
 "label": "\u00c1lbum de Fotos",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "class": "PhotoAlbum"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1333
},
{
 "thumbnailUrl": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_t.jpg",
 "hfov": 360,
 "label": "Sala - Comedor",
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
 "adjacentPanoramas": [
  {
   "backwardYaw": 94.24,
   "yaw": -127.28,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 94.24,
   "yaw": -127.19,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -155.53,
   "yaw": -17.24,
   "distance": 1,
   "panorama": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -155.53,
   "yaw": -17.24,
   "distance": 1,
   "panorama": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 6.63,
   "yaw": -161.79,
   "distance": 1,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 6.63,
   "yaw": -161.77,
   "distance": 1,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -67.58,
   "yaw": 156.31,
   "distance": 1,
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -67.58,
   "yaw": 156.28,
   "distance": 1,
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_5A02EA85_4C12_F5D7_41D2_8FCF819F522E",
  "this.overlay_59341A7B_4C15_9533_41C3_0487EA40E264",
  "this.overlay_5156665F_4C12_9D72_41B6_A38066CA80C7",
  "this.overlay_52E662BC_4C13_9535_41C3_08531DC1890E",
  "this.overlay_715392A3_4C0D_F5D1_41A3_454BAED9273F",
  "this.overlay_7131CB8C_4C12_6BD6_41B2_B7A26C46B627",
  "this.overlay_716119CF_4C17_9752_41CD_34F0DAA56395",
  "this.overlay_73B7B12B_4C16_B4D3_41BA_A0020CA60648",
  "this.overlay_7279217F_4C0D_9732_41D1_FA5340FD8914",
  "this.overlay_4CA90992_5CB7_22EA_41AD_ADA049F9006B",
  "this.overlay_530E5592_5CB5_62EB_41CF_CD34D32E693D",
  "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354_tcap0"
 ],
 "hfovMax": 120
},
{
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8_mobile",
 "left": "0%",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48_mobile",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6_mobile"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "right": "0%",
 "paddingRight": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "paddingBottom": 0,
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8_mobile, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--INFO photoalbum"
 },
 "paddingTop": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -36.73,
  "pitch": -4.59,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4B3E6D10_6A8F_0275_41D2_0032630C209C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 62.45,
  "pitch": -0.92,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4C3345E3_6A8F_0DD4_41B4_491FEAE5481F",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 1.47,
    "targetYaw": 62.3,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1.95,
    "path": "shortest",
    "targetPitch": 0.25
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -20.03
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -22.8
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.17
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 0.31
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -37.62
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -45.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B892B95_6A8F_067F_4186_B524AA1EC3DC",
 "initialPosition": {
  "hfov": 90,
  "yaw": 84.12,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B895B95_6A8F_067F_41C2_935EC0A74C01",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B892B95_6A8F_067F_4186_B524AA1EC3DC"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 24.47,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4B676DA9_6A8F_0257_41D3_A97E25D5B1FA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 9.53,
    "targetYaw": 0,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 18.14,
    "path": "shortest",
    "targetPitch": 0
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -45.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -4.21
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 37.56,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -4.71
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -163.67,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -6.22
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -136.29,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -4.21
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -95.34,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.2
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 158.65,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -14.01
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -113.18,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -5.72
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E_mobile",
 "left": "3%",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B_mobile"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "3%",
 "paddingRight": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "bottom": "3%",
 "contentOpaque": false,
 "minWidth": 1,
 "top": "3%",
 "paddingBottom": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadowSpread": 1,
 "shadow": true,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 }
},
{
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15_mobile",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528_mobile"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "right": "0%",
 "paddingRight": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "paddingBottom": 0,
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15_mobile, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "paddingTop": 0
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_mobile",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "paddingBottom": 0,
 "class": "IconButton",
 "height": 58,
 "verticalAlign": "middle",
 "propagateClick": true,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "thumbnailUrl": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_t.jpg",
 "hfov": 360,
 "label": "Escritorio",
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
 "adjacentPanoramas": [
  {
   "backwardYaw": 156.31,
   "yaw": -67.58,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 156.31,
   "yaw": -67.63,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_5AB33241_4C16_F54F_419A_1A82626E06AC",
  "this.overlay_779BAA9C_4DF2_75F6_41D3_3255A4E1C04A",
  "this.overlay_724AC826_4C0D_94D2_41C0_AB29E3F1E825",
  "this.overlay_724D3C57_4C0D_ED73_41CD_8425355074D8",
  "this.overlay_7277C163_4C0D_F752_41C2_7921673C330A",
  "this.overlay_727CA71C_4C0D_FCF6_41C8_60EF23AE255E",
  "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_tcap0"
 ],
 "hfovMax": 120
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_497B4021_6A8F_0254_41D4_BDBE479CA817",
 "initialPosition": {
  "hfov": 90,
  "yaw": 162.76,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_497B5021_6A8F_0254_41D9_0819C51B9FE8",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_497B4021_6A8F_0254_41D4_BDBE479CA817"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 40,
 "id": "IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_mobile",
 "iconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61.jpg",
 "borderRadius": 0,
 "maxWidth": 40,
 "rollOverIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_rollover.jpg",
 "width": "100%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 40,
 "transparencyActive": false,
 "paddingBottom": 0,
 "minWidth": 40,
 "mode": "push",
 "class": "IconButton",
 "height": "100%",
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B_mobile, false, 0, null, null, false)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "pressedRollOverIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_pressed_rollover.jpg",
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1500
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1333
},
{
 "thumbnailUrl": "media/video_76BF82AE_56C2_FB39_41D0_DF287E74780C_t.jpg",
 "label": "cascada toma piscinas",
 "scaleMode": "fit_inside",
 "width": 466,
 "loop": false,
 "id": "video_76BF82AE_56C2_FB39_41D0_DF287E74780C",
 "class": "Video",
 "height": 690,
 "video": {
  "width": 466,
  "mp4Url": "media/video_76BF82AE_56C2_FB39_41D0_DF287E74780C.mp4",
  "height": 690,
  "class": "VideoResource"
 }
},
{
 "items": [
  {
   "media": "this.video_7340C746_56DD_5968_41D3_39B2A98F9F24",
   "start": "this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4FCD63DE_6A8F_05EC_41D8_65BB2979067B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4FCD63DE_6A8F_05EC_41D8_65BB2979067B, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)",
   "player": "this.MainViewer_mobileVideoPlayer"
  }
 ],
 "id": "playList_4FCD63DE_6A8F_05EC_41D8_65BB2979067B",
 "class": "PlayList"
},
{
 "class": "PhotoAlbumPlayer",
 "id": "MainViewer_mobilePhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_mobile",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D_mobile",
 "viewerArea": "this.MainViewer_mobile"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4F2AA2C6_6A8F_07DD_41D1_CFB968316EA7",
 "initialPosition": {
  "hfov": 90,
  "yaw": -148.19,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4F2AC2C5_6A8F_07DF_41A4_AE8AC7BB0C7F",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4F2AA2C6_6A8F_07DD_41D1_CFB968316EA7"
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE_mobile",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_mobile",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_mobile",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_mobile",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_mobile",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_mobile",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_mobile",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_mobile"
 ],
 "scrollBarColor": "#000000",
 "right": "0%",
 "width": "91.304%",
 "paddingRight": 0,
 "gap": 3,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingBottom": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "height": "85.959%",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "scrollBarWidth": 10
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_48B81E1B_6A8F_1E74_41D6_0D5C3E5DA24C",
 "initialPosition": {
  "hfov": 90,
  "yaw": -173.37,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_48B80E1A_6A8F_1E75_41CC_04510351C628",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_48B81E1B_6A8F_1E74_41D6_0D5C3E5DA24C"
},
{
 "displayPlaybackBar": true,
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_mobile",
 "class": "VideoPlayer",
 "id": "MainViewer_mobileVideoPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D_mobile",
 "viewerArea": "this.MainViewer_mobile"
},
{
 "thumbnailUrl": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_t.jpg",
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Sala de Cine - Frente",
 "id": "panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_4B06FB75_5C8D_E629_41D0_39ACE8264920",
  "this.overlay_4B06EB75_5C8D_E629_41D0_F40FAA7834DA",
  "this.overlay_44CECBC8_5C8E_E667_41C8_45A16FBDF932",
  "this.overlay_45DA1407_5C8D_61EA_41B1_2CF401771FB5",
  "this.overlay_456ED3AF_5CF3_2639_41BE_00D2618002D8",
  "this.overlay_44EF3CAC_5CF3_623E_41D2_97DC21AC8F5F",
  "this.overlay_70131B11_60C2_7E01_4189_E40E6053CCCF",
  "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_tcap0"
 ],
 "hfovMax": 120
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4FEC2289_6A8F_0657_41D3_97F243E3EC86",
 "initialPosition": {
  "hfov": 90,
  "yaw": -168.7,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4FEC4289_6A8F_0657_41D1_49E855300F0C",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4FEC2289_6A8F_0657_41D3_97F243E3EC86"
},
{
 "thumbnailUrl": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_t.jpg",
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 32 HABITACI\u00d3N FRONTAL IZQUIERDA CON BALCON",
 "id": "panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_46D0B9A9_5CF3_2239_41D2_F30BF1260DF9",
  "this.overlay_46D089A9_5CF3_2239_41D6_82D73B977FE5",
  "this.overlay_47E4FB00_5CF3_27E7_41D5_73431470F9AA",
  "this.overlay_470540FE_5CFD_621B_41C9_CAAC9464CEEB",
  "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_tcap0"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/video_6F1B8249_60DF_EE01_41BF_FD4E601538CE_t.jpg",
 "label": "SALA DE CINE INTRO 2",
 "scaleMode": "fit_inside",
 "width": 1280,
 "loop": false,
 "id": "video_6F1B8249_60DF_EE01_41BF_FD4E601538CE",
 "class": "Video",
 "height": 720,
 "video": {
  "width": 1144,
  "mp4Url": "media/video_6F1B8249_60DF_EE01_41BF_FD4E601538CE.mp4",
  "height": 644,
  "class": "VideoResource"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4875FF06_6A8F_1E5C_41D4_83BCE9F14E5A",
 "initialPosition": {
  "hfov": 90,
  "yaw": 109.59,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_48751F06_6A8F_1E5C_41A4_5A356EFE42DE",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4875FF06_6A8F_1E5C_41D4_83BCE9F14E5A"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_49A4EF64_6A8F_1EDD_41D4_3640D473C4C8",
 "initialPosition": {
  "hfov": 90,
  "yaw": 159.26,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_49A41F64_6A8F_1EDD_41CB_E55F0E764210",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_49A4EF64_6A8F_1EDD_41D4_3640D473C4C8"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_42EF9881_6A8F_0254_41D3_C1A27D77F1C6",
 "initialPosition": {
  "hfov": 90,
  "yaw": -91.69,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_42EFB881_6A8F_0254_41C2_0A108077FA7E",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_42EF9881_6A8F_0254_41D3_C1A27D77F1C6"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4F4CD456_6A8F_02FC_41D0_DBAF7F098137",
 "initialPosition": {
  "hfov": 90,
  "yaw": 173.1,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4F4CC456_6A8F_02FC_41D3_B5E3800FBE00",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4F4CD456_6A8F_02FC_41D0_DBAF7F098137"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1126
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4FB1D1E5_6A8F_05DF_41D4_C5856C0A9763",
 "initialPosition": {
  "hfov": 90,
  "yaw": 30.52,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4FB1F1E5_6A8F_05DF_41BC_D93B6214D669",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4FB1D1E5_6A8F_05DF_41D4_C5856C0A9763"
},
{
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile",
 "itemHeight": 150,
 "width": "100%",
 "itemThumbnailBorderRadius": 10,
 "itemPaddingTop": 3,
 "scrollBarColor": "#04A3E1",
 "gap": 15,
 "itemPaddingRight": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "selectedItemThumbnailShadow": true,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "paddingLeft": 30,
 "borderSize": 0,
 "itemVerticalAlign": "top",
 "minHeight": 1,
 "itemLabelGap": 7,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "itemMinWidth": 50,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "class": "ThumbnailGrid",
 "height": "91.025%",
 "itemLabelPosition": "bottom",
 "itemLabelFontColor": "#666666",
 "propagateClick": false,
 "itemLabelFontSize": 14,
 "itemLabelFontStyle": "normal",
 "shadow": false,
 "scrollBarWidth": 10,
 "itemMode": "normal",
 "backgroundOpacity": 0.05,
 "borderRadius": 5,
 "itemOpacity": 1,
 "backgroundColorRatios": [
  0
 ],
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "paddingRight": 30,
 "itemLabelHorizontalAlign": "center",
 "itemThumbnailHeight": 110,
 "itemBackgroundColor": [],
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist",
 "itemHorizontalAlign": "center",
 "itemThumbnailWidth": 200,
 "itemMaxWidth": 1000,
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemThumbnailOpacity": 1,
 "itemWidth": 200,
 "paddingBottom": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontFamily": "Montserrat",
 "itemBorderRadius": 0,
 "itemLabelTextDecoration": "none",
 "itemMinHeight": 50,
 "selectedItemLabelFontWeight": "bold",
 "itemBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "scrollBarMargin": 2,
 "itemPaddingBottom": 3,
 "rollOverItemThumbnailShadow": true,
 "itemLabelFontWeight": "normal",
 "itemMaxHeight": 1000,
 "data": {
  "name": "ThumbnailList"
 },
 "itemPaddingLeft": 3,
 "itemBackgroundColorDirection": "vertical",
 "rollOverItemLabelFontColor": "#04A3E1"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_40090A7F_6A8F_06AB_41D1_2EAFA631E75C",
 "initialPosition": {
  "hfov": 90,
  "yaw": 163.49,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40093A7F_6A8F_06AB_41D5_14F117A5C6AC",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_40090A7F_6A8F_06AB_41D1_2EAFA631E75C"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_48875DF5_6A8F_1DBC_41DA_7CC035526F37",
 "initialPosition": {
  "hfov": 90,
  "yaw": -173.37,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_48877DF5_6A8F_1DBC_41CF_E30EF2C1465F",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_48875DF5_6A8F_1DBC_41DA_7CC035526F37"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 62.45,
  "pitch": 1.84,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4DE9B482_6A8F_0255_4168_658958CEBB28",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 1.64,
    "targetYaw": 62.3,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 2.28,
    "path": "shortest",
    "targetPitch": 0.25
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -20.03
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -22.8
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.17
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 0.31
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -37.62
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -45.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B15FCBB_6A8F_03B4_41CA_D7EFE5386946",
 "initialPosition": {
  "hfov": 90,
  "yaw": -33.42,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B151CBA_6A8F_03B4_4191_798FB27D9A5B",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B15FCBB_6A8F_03B4_41CA_D7EFE5386946"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4BFBA5EC_6A8F_0DAD_41D1_638062351C2C",
 "initialPosition": {
  "hfov": 90,
  "yaw": 86.28,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4BFBB5EC_6A8F_0DAD_41D8_0E63BD28D600",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4BFBA5EC_6A8F_0DAD_41D1_638062351C2C"
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0.64,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48_mobile",
 "left": "0%",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A_mobile",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288_mobile",
  "this.Container_402E3BC3_565F_296F_41AF_19D956287FE7_mobile"
 ],
 "scrollBarColor": "#000000",
 "right": "0%",
 "paddingRight": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "bottom": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "height": 118,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "--MENU"
 },
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_495A4000_6A8F_0255_41B2_7D414A33A920",
 "initialPosition": {
  "hfov": 90,
  "yaw": 162.76,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_495A7000_6A8F_0255_4193_928A6DDBFE00",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_495A4000_6A8F_0255_41B2_7D414A33A920"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4EB93060_6A8F_02D5_41D1_0C7F37F11CCA",
 "initialPosition": {
  "hfov": 90,
  "yaw": -53.45,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4EB94060_6A8F_02D5_41CD_0B8D3CC31A5D",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4EB93060_6A8F_02D5_41D1_0C7F37F11CCA"
},
{
 "backgroundOpacity": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B_mobile",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA_mobile"
 ],
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "width": "99.97%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 1,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "height": "100%"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B2476C6_6A8F_0FDC_41A2_A9EBB053EC15",
 "initialPosition": {
  "hfov": 90,
  "yaw": 51.49,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B2586C6_6A8F_0FDC_418A_2B13C1F23D30",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B2476C6_6A8F_0FDC_41A2_A9EBB053EC15"
},
{
 "thumbnailUrl": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_t.jpg",
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Deck - Piscina",
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38",
 "adjacentPanoramas": [
  {
   "backwardYaw": 28.54,
   "yaw": -16.51,
   "distance": 1,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 28.54,
   "yaw": -16.63,
   "distance": 1,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 78.74,
   "yaw": 31.81,
   "distance": 1,
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 78.74,
   "yaw": 31.67,
   "distance": 1,
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -1.64,
   "yaw": -21.6,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -1.64,
   "yaw": -21.76,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 42.62,
   "yaw": 15.7,
   "distance": 1,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 42.62,
   "yaw": 15.74,
   "distance": 1,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 98.57,
   "yaw": 47.72,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 98.57,
   "yaw": 47.65,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -0.69,
   "yaw": -48.23,
   "distance": 1,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -0.69,
   "yaw": -48.23,
   "distance": 1,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_53684693_4C76_9DF3_4181_EF2767F1A9C2",
  "this.overlay_6CE24BFA_4C76_EB32_41B4_9F999091A2FA",
  "this.overlay_53794FA5_4C76_6BD7_41C5_3C53F52B35DE",
  "this.overlay_535CC597_4C75_BFF2_418C_EBE38CA692F5",
  "this.overlay_6D90C5FD_4C72_9F36_41CE_AE11C1BB2BB1",
  "this.overlay_6D8DA36E_4C72_7B55_41CD_8289197836CB",
  "this.overlay_7D0CF396_4C1E_9BF2_41C7_3F8427E9D057",
  "this.overlay_781F5669_4C1F_FD5F_41D1_74EDFDF4A74D",
  "this.overlay_7FD4E63F_4C1E_BD33_41BB_EFAFFE8E89FF",
  "this.overlay_79AC6ECE_4C12_6D55_4193_56FF271E3F5E",
  "this.overlay_787DA558_4C12_9F7E_41CD_56E54DDE0451",
  "this.overlay_7FD3A82F_4C15_94D2_41D1_10DAD6C733F7",
  "this.overlay_72507ADB_4C0F_9573_41CB_7C2C12BF575F",
  "this.overlay_481258C5_563D_7768_4197_0EC12658EC25",
  "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_tcap0"
 ],
 "audios": [
  "this.audio_76772C3C_56C3_6F18_41D4_7C4FB259877A",
  "this.audio_7287F87C_6A97_02AD_41C5_6512D842BDF7"
 ],
 "hfovMax": 120
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1333
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4BEE4626_6A8F_0E5C_41C9_9E4F65BC25DD",
 "initialPosition": {
  "hfov": 90,
  "yaw": 10.36,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4BEE5626_6A8F_0E5C_41D8_9F67F9046085",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4BEE4626_6A8F_0E5C_41C9_9E4F65BC25DD"
},
{
 "backgroundOpacity": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19_mobile",
 "children": [
  "this.Image_475656B5_506E_3117_41A0_63C52AAB81EA_mobile",
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331_mobile",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203_mobile"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#0069A3",
 "gap": 0,
 "width": "99.911%",
 "paddingRight": 20,
 "horizontalAlign": "center",
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 460,
 "paddingBottom": 20,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.51,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "height": "99.95%"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4EF4C09B_6A8F_026B_41C8_4B4620BFA93C",
 "initialPosition": {
  "hfov": 90,
  "yaw": 18.21,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4EF4D09B_6A8F_026B_41A6_AFB7A3DF2B9D",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4EF4C09B_6A8F_026B_41C8_4B4620BFA93C"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4D883426_6A8F_025C_41CE_2DDB7517E69B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 1,
    "targetYaw": 0,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1,
    "path": "shortest",
    "targetPitch": 0
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.71
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.67
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -24.81
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -25.06
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -27.07
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B793D87_6A8F_025A_41DA_3B907CB3032A",
 "initialPosition": {
  "hfov": 90,
  "yaw": -85.76,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B792D87_6A8F_025B_41CD_F4089D1B9435",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B793D87_6A8F_025A_41DA_3B907CB3032A"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_7C6BA396_503E_D715_41CB_1B97B732862D"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4DA80443_6A8F_02D4_41D2_8DA5864486E8",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 1,
    "targetYaw": 0,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1,
    "path": "shortest",
    "targetPitch": 0
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.71
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.67
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -24.81
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -25.06
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -27.07
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_t.jpg",
 "hfovMin": "140%",
 "hfov": 360,
 "label": "Sala de Cine - Punto Medio",
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_5F22236E_4CFD_BB52_41D0_87962539D379",
  "this.overlay_585CAAAF_4CF2_75D3_418F_E4020A5C57BA",
  "this.overlay_58E12D38_4CF7_EF3D_41B8_194A4EED7DFE",
  "this.overlay_7593DF4E_4DF2_AB55_41C7_FA82D656CEBF",
  "this.overlay_72687B9E_4C0E_ABF2_41BB_A08C589A4291",
  "this.overlay_729624D3_4C0E_BD72_41C0_CD73173E435F",
  "this.overlay_4BDB7184_5C93_E2EE_41C6_A55CC2B4DD75",
  "this.overlay_4B4CD0DD_5C92_E21E_41D6_48F1A336E13E",
  "this.overlay_4A27221C_5C97_261E_41C2_2A76CED6B5EA",
  "this.overlay_4B892B7C_5C97_E61F_41C2_D49CE49FD165",
  "this.overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6",
  "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_tcap0"
 ],
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 61.53,
  "pitch": 2.76,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4DC91461_6A8F_02D7_4181_16054007B802",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 2.05,
    "targetYaw": 62.3,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.11,
    "path": "shortest",
    "targetPitch": 0.25
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -20.03
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -22.8
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.17
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 0.31
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -37.62
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -45.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4C978495_6A8F_027F_41D3_57A907A2C0A5",
 "initialPosition": {
  "hfov": 90,
  "yaw": 52.72,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4C97B495_6A8F_027F_41CF_37BF614DBD42",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4C978495_6A8F_027F_41D3_57A907A2C0A5"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_430AF997_6A8F_027C_41CC_32B45A9E1216",
 "initialPosition": {
  "hfov": 90,
  "yaw": 87.65,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_430A0997_6A8F_027C_41DA_48042C993735",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_430AF997_6A8F_027C_41CC_32B45A9E1216"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1372
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B03DCD7_6A8F_03FC_419B_1D9A9DD097B0",
 "initialPosition": {
  "hfov": 90,
  "yaw": 139.08,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B03CCD7_6A8F_03FC_41C3_D51BEEB8C0D3",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B03DCD7_6A8F_03FC_419B_1D9A9DD097B0"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 90,
  "yaw": 177.85,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4CD8C517_6A8F_027B_41D6_E8CE08FAF3A1",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 60.28,
    "targetYaw": -2.02,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 120.12,
    "path": "shortest",
    "targetPitch": 10.18
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -49.87,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 19.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -79.01,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 7.6
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -120.71,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 8.1
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 154.88,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 5.09
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 90.31,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 2.32
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 36.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.2
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -2.64,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 26.19
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 3.33
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4C437646_6A8F_0EDD_4177_2A8C04D8C728",
 "initialPosition": {
  "hfov": 90,
  "yaw": -151.46,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4C436646_6A8F_0EDD_41CB_2F6ACCBB951C",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4C437646_6A8F_0EDD_4177_2A8C04D8C728"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4E53913B_6A8F_02AB_41C3_943C179E8C9E",
 "initialPosition": {
  "hfov": 90,
  "yaw": 28.21,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4E53B13B_6A8F_02AB_41C2_DD8B0A36FF2F",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4E53913B_6A8F_02AB_41C3_943C179E8C9E"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4ED6807E_6A8F_02AD_417D_2960414DAB3F",
 "initialPosition": {
  "hfov": 90,
  "yaw": -53.45,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4ED6A07E_6A8F_02AD_41D3_7848A1DBC28F",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4ED6807E_6A8F_02AD_417D_2960414DAB3F"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4CEBF389_6A8F_0654_41CF_3593E74E0A44",
 "initialPosition": {
  "hfov": 90,
  "yaw": -49.29,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4CEB1389_6A8F_0654_41A7_E96129493354",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4CEBF389_6A8F_0654_41CF_3593E74E0A44"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4BC73C44_6A8F_02DC_41DA_97AF43B8F2BA",
 "initialPosition": {
  "hfov": 90,
  "yaw": 116.63,
  "pitch": -1.84,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4BC72C44_6A8F_02DC_41D9_247BB3BB507B",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4BC73C44_6A8F_02DC_41DA_97AF43B8F2BA"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "initialPosition": {
  "hfov": 90,
  "yaw": -38.25,
  "pitch": -22.96,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_7703A339_503A_371F_41CA_9B68428A5900"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 62.45,
  "pitch": 1.84,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4BC9C5B2_6A8F_0DB4_41B7_23E1BA225A97",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 1.64,
    "targetYaw": 62.3,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 2.28,
    "path": "shortest",
    "targetPitch": 0.25
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -20.03
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -22.8
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.17
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 0.31
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -37.62
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -45.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4F4D62EE_6A8F_07AD_41CB_68EC73F13B35",
 "initialPosition": {
  "hfov": 90,
  "yaw": -148.19,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4F4D72EE_6A8F_07AD_41BF_52C91F003FF7",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4F4D62EE_6A8F_07AD_41CB_68EC73F13B35"
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A_mobile",
 "width": 110,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_mobile"
 ],
 "paddingRight": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "height": 110,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarWidth": 10
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B5156F9_6A8F_0FB7_41B9_0B2C5CA95207",
 "initialPosition": {
  "hfov": 90,
  "yaw": 51.49,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B5166F9_6A8F_0FB7_41BA_495D26139A8A",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B5156F9_6A8F_0FB7_41B9_0B2C5CA95207"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4BA77BEC_6A8F_05AC_41D6_07E7B4DEFE1E",
 "initialPosition": {
  "hfov": 90,
  "yaw": -70.97,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4BA76BEC_6A8F_05AC_41D7_C4B53713E1E6",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4BA77BEC_6A8F_05AC_41D6_07E7B4DEFE1E"
},
{
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer_mobile",
 "displayPlaybackBar": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_mobile",
 "id": "MainViewer_mobilePanoramaPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_mobile",
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_mobile",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_mobile"
 ],
 "mouseControlMode": "drag_rotation",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D_mobile",
 "gyroscopeEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_mobile"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B19B644_6A8F_0EDC_41DA_3D6D53CB89F9",
 "initialPosition": {
  "hfov": 90,
  "yaw": -164.3,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B19C644_6A8F_0EDC_41D7_DD6287B8D21F",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B19B644_6A8F_0EDC_41DA_3D6D53CB89F9"
},
{
 "items": [
  {
   "media": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "start": "this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_camera"
  },
  {
   "media": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera"
  },
  {
   "media": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera"
  },
  {
   "media": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_camera"
  },
  {
   "media": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera"
  },
  {
   "media": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera"
  },
  {
   "media": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_camera"
  },
  {
   "media": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera"
  },
  {
   "media": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_camera"
  },
  {
   "media": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera"
  },
  {
   "media": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera"
  },
  {
   "media": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera"
  },
  {
   "media": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera"
  },
  {
   "media": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera"
  },
  {
   "media": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_camera"
  },
  {
   "media": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera"
  },
  {
   "media": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera"
  },
  {
   "media": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera"
  },
  {
   "media": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera"
  },
  {
   "media": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_camera"
  },
  {
   "media": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_camera"
  },
  {
   "media": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera"
  },
  {
   "media": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera"
  },
  {
   "media": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera"
  },
  {
   "media": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "camera": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera"
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 0)",
   "player": "this.MainViewer_mobilePhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4D0814A1_6A8F_0257_4184_5F16A2716C99",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 1,
    "targetYaw": 0,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1,
    "path": "shortest",
    "targetPitch": 0
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.71
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.67
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -24.81
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -25.06
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -27.07
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B487737_6A8F_0EBC_41C3_30CBF78F57AE",
 "initialPosition": {
  "hfov": 90,
  "yaw": 92.55,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B498737_6A8F_0EBC_41D1_124AE2D8F122",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B487737_6A8F_0EBC_41C3_30CBF78F57AE"
},
{
 "thumbnailUrl": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_t.jpg",
 "hfov": 360,
 "label": "Planta Alta - Habitaci\u00f3n Master",
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
 "adjacentPanoramas": [
  {
   "backwardYaw": -149.71,
   "yaw": 11.3,
   "distance": 1,
   "panorama": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -149.71,
   "yaw": 11.68,
   "distance": 1,
   "panorama": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -128.51,
   "yaw": -113.86,
   "distance": 1,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -128.51,
   "yaw": -113.66,
   "distance": 1,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -87.45,
   "yaw": -40.92,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -87.45,
   "yaw": -40.92,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_6BD98EFF_4C0D_AD32_41D3_178505AC51C0",
  "this.overlay_64978149_4C12_F75E_41C0_FA527622DCC1",
  "this.overlay_64834E7A_4C17_ED3D_41D1_C0DF7AD568DB",
  "this.overlay_7D7A7CEF_4C37_ED52_41C4_A5D88A210E28",
  "this.overlay_630C59D7_4C35_B772_41AF_C1BF4A5F8B81",
  "this.overlay_7C27B320_4C32_F4CE_41D1_558125506B6C",
  "this.overlay_72B4E25A_4C0E_9572_41CA_E94D7E32E9E4",
  "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_tcap0"
 ],
 "hfovMax": 120
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_43CD095A_6A8F_02F5_41A5_585C6C13A75A",
 "initialPosition": {
  "hfov": 90,
  "yaw": -35.28,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_43CD295A_6A8F_02F5_41C0_8FF0E73A300F",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_43CD095A_6A8F_02F5_41A5_585C6C13A75A"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -77.98,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4B27CD1E_6A8F_026D_41D4_543D4EAF167B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4290E7FE_6A8F_0DAD_41C6_F1A8FB8C3D74",
 "initialPosition": {
  "hfov": 90,
  "yaw": -126.65,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_429007FD_6A8F_0DAF_41D9_190F6CEF2794",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4290E7FE_6A8F_0DAD_41C6_F1A8FB8C3D74"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_77F1399A_503E_331D_41C0_4C44E9F003DB"
},
{
 "backgroundOpacity": 0,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B_mobile",
 "left": "3%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_mobile"
 ],
 "scrollBarColor": "#000000",
 "right": "3%",
 "paddingRight": 20,
 "gap": 10,
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "3%",
 "bottom": "90%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 10
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_42CFC861_6A8F_02D4_41D3_1CF187E348D0",
 "initialPosition": {
  "hfov": 90,
  "yaw": -177.61,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_42CFE861_6A8F_02D4_4186_AD8320EDF213",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_42CFC861_6A8F_02D4_41D3_1CF187E348D0"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "pressedBackgroundOpacity": 1,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0_mobile",
 "width": 47.85,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "iconBeforeLabel": true,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "rollOverShadow": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "minWidth": 1,
 "mode": "push",
 "fontColor": "#FFFFFF",
 "fontSize": 12,
 "class": "Button",
 "height": 40,
 "label": "INFO",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8_mobile, true, 0, null, null, false)",
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "iconHeight": 0,
 "shadowSpread": 1,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000"
 ],
 "fontWeight": "bold"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4DBEC719_6A8F_0E77_41C8_EB3F75B07802",
 "initialPosition": {
  "hfov": 90,
  "yaw": 178.36,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4DBEF719_6A8F_0E77_41D0_8E9AFCDC511C",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4DBEC719_6A8F_0E77_41C8_EB3F75B07802"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_4FBAB3B9_6A8F_05B4_4195_2DB1E5977314, [this.htmltext_4FBA93BA_6A8F_05B4_41BF_C2F16BCC509D,this.component_4FBDA3BB_6A8F_05B4_41C2_DF6ADF5D4F67,this.component_4FBD83BB_6A8F_05B4_41A1_A61E54997CC9], 2000)",
 "items": [
  "this.albumitem_4FBAE3B9_6A8F_05B4_41B6_0F43C9B1650B"
 ],
 "id": "playList_48083A9F_6A9D_066B_41A2_7E7A799FE5B3",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_t.jpg",
 "hfov": 360,
 "label": "Quincho",
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.39,
   "yaw": -149.48,
   "distance": 1,
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 2.39,
   "yaw": -149.72,
   "distance": 1,
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 88.31,
   "yaw": -93.72,
   "distance": 1,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 88.31,
   "yaw": -93.71,
   "distance": 1,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -21.6,
   "yaw": -1.64,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -21.6,
   "yaw": -1.56,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -5.58,
   "yaw": 160.78,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -5.58,
   "yaw": 160.41,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 144.72,
   "yaw": -70.41,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 144.72,
   "yaw": -70.5,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -92.35,
   "yaw": 56.4,
   "distance": 1,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -92.35,
   "yaw": 56.25,
   "distance": 1,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_5B1FF612_4C15_9CF2_41C3_BA09D573F956",
  "this.overlay_55065348_4C1F_BB5E_41C9_63BC86EB71F1",
  "this.overlay_54B5B55E_4C1E_FF72_41C3_B40A23F1359D",
  "this.overlay_542EB355_4C1D_FB76_41B1_02C2022012E4",
  "this.overlay_5587FAC0_4C15_B54E_4192_D62E10526282",
  "this.overlay_55941349_4C16_7B5E_4191_A59BB4D3BEB7",
  "this.overlay_7A7A1CE7_4DF5_AD52_4174_090BD5F8DB5D",
  "this.overlay_7584F74C_4DF6_BB56_41B3_F3BF279FF4AB",
  "this.overlay_72672788_4DF7_9BDE_41C1_6FF3D69969EA",
  "this.overlay_74CC5B0D_4DF6_94D7_41AD_35EB0E985D9B",
  "this.overlay_756A3004_4DF5_F4D5_41C1_56A034309D7B",
  "this.overlay_74524590_4DF2_BFCD_41C2_0E8EB5134142",
  "this.overlay_776FA9DA_56DD_6918_41A6_0C121383E56A",
  "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_tcap0"
 ],
 "audios": [
  "this.audio_725841F7_56C7_3928_418B_5A553C889C71",
  "this.audio_72B5C6DE_6A93_0FED_41D1_DDA1D6875B0B"
 ],
 "hfovMax": 120
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_420DB8A1_6A8F_0257_41B2_BEB879347417",
 "initialPosition": {
  "hfov": 90,
  "yaw": -91.69,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_420DD8A1_6A8F_0257_41C2_9A88D762C491",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_420DB8A1_6A8F_0257_41B2_BEB879347417"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B",
 "initialPosition": {
  "hfov": 90,
  "yaw": 92.45,
  "pitch": -1.76,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77007457_503E_7113_41B9_B797530AF0B3",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_77007457_503E_7113_41B9_B797530AF0B3"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -36.73,
  "pitch": -4.59,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_40A8BA28_6A8F_0655_41B7_DDD351C46464",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_402E3BC3_565F_296F_41AF_19D956287FE7_mobile",
 "children": [
  "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D_mobile",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_mobile"
 ],
 "scrollBarColor": "#000000",
 "right": "0%",
 "width": "19.063%",
 "paddingRight": 10,
 "gap": 0,
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingBottom": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "height": "44.915%",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container4584"
 },
 "scrollBarWidth": 10
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_422C28C2_6A8F_03D5_41C5_A6FC3B2782AB",
 "initialPosition": {
  "hfov": 90,
  "yaw": 158.4,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_422C48C2_6A8F_03D5_41BE_AAB671BB3FEF",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_422C28C2_6A8F_03D5_41C5_A6FC3B2782AB"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4C2B3613_6A8F_0E74_41CC_528BAEC6186D",
 "initialPosition": {
  "hfov": 90,
  "yaw": -151.46,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4C2B2613_6A8F_0E74_41C4_B3ACBEC84F9A",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4C2B3613_6A8F_0E74_41CC_528BAEC6186D"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_428E981E_6A8F_026D_41C0_AE4E6916BF44",
 "initialPosition": {
  "hfov": 90,
  "yaw": -126.65,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_428EB81E_6A8F_026D_41B5_D2CAF963BB18",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_428E981E_6A8F_026D_41C0_AE4E6916BF44"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_771E90F9_503A_511F_41C2_B9C904B98D71",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_771E90F9_503A_511F_41C2_B9C904B98D71"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_483FAEBD_6A8F_1FAC_41C3_B40BBF38D7DC",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0.05,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_483FCEBC_6A8F_1FAC_41D4_40B7BE592A4D",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_483FAEBD_6A8F_1FAC_41C3_B40BBF38D7DC"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77F828FC_503E_5115_41CF_04F89C2CC876",
 "initialPosition": {
  "hfov": 90,
  "yaw": 9.55,
  "pitch": -33.91,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_77F828FC_503E_5115_41CF_04F89C2CC876"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 126.64,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_40D91A37_6A8F_06BC_41CA_26D59B0B46AB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B5D6D4A_6A8F_02D5_41D2_4F7BCF497C25",
 "initialPosition": {
  "hfov": 90,
  "yaw": 165.13,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B5A9D4A_6A8F_02D5_41D6_0D7365380E21",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B5D6D4A_6A8F_02D5_41D2_4F7BCF497C25"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4BF08C61_6A8F_02D4_41C2_9EEC1BA36640",
 "initialPosition": {
  "hfov": 90,
  "yaw": 118.47,
  "pitch": -5.51,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4BF0BC61_6A8F_02D4_41D1_1568139A23CD",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4BF08C61_6A8F_02D4_41C2_9EEC1BA36640"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_49DEEF83_6A8F_1E54_41C0_314D9A2F3F1F",
 "initialPosition": {
  "hfov": 90,
  "yaw": -132.28,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_49DE0F83_6A8F_1E54_4171_11F269A4D378",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_49DEEF83_6A8F_1E54_41C0_314D9A2F3F1F"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4D10877A_6A8F_0EB5_41D2_D000C40CE893",
 "initialPosition": {
  "hfov": 90,
  "yaw": -81.43,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4D10B77A_6A8F_0EB5_4199_E7FE0096988D",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4D10877A_6A8F_0EB5_41D2_D000C40CE893"
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA_mobile",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12_mobile",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3_mobile"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "width": "100%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 60,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "height": 60,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "header"
 },
 "paddingTop": 0
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_48587EE5_6A8F_1FDC_41CD_F725C6273EF5",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0.05,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_48586EE5_6A8F_1FDC_41A8_00DC3080C7F9",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_48587EE5_6A8F_1FDC_41CD_F725C6273EF5"
},
{
 "titleFontColor": "#000000",
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "id": "window_6488952A_6A77_0255_41D2_191A23035B16",
 "width": 400,
 "bodyBackgroundColorRatios": [
  1
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "gap": 10,
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonRollOverBorderSize": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 20,
 "bodyPaddingRight": 0,
 "headerPaddingLeft": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPressedBorderColor": "#000000",
 "headerPaddingRight": 0,
 "modal": true,
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "closeButtonPaddingTop": 5,
 "titlePaddingTop": 5,
 "closeButtonPressedBorderSize": 0,
 "backgroundColor": [],
 "bodyPaddingTop": 0,
 "shadowHorizontalLength": 3,
 "footerBorderColor": "#000000",
 "minWidth": 20,
 "closeButtonPressedBackgroundColor": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "height": 600,
 "title": "\u00c1lbum de Fotos",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "shadowOpacity": 0.5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilOpacity": 0.4,
 "titleTextDecoration": "none",
 "propagateClick": false,
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconLineWidth": 3,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 20,
 "closeButtonBackgroundOpacity": 1,
 "titleFontFamily": "Arial",
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonIconWidth": 20,
 "bodyBorderColor": "#000000",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "children": [
  "this.container_4FBAB3B9_6A8F_05B4_4195_2DB1E5977314"
 ],
 "closeButtonIconHeight": 20,
 "backgroundColorRatios": [],
 "shadowColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "closeButtonRollOverBackgroundColor": [],
 "bodyBackgroundColor": [
  "#000000"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "paddingRight": 0,
 "titlePaddingLeft": 5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "closeButtonIconLineWidth": 2,
 "closeButtonRollOverIconLineWidth": 2,
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonBorderColor": "#000000",
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 1,
 "footerBorderSize": 0,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundOpacity": 1,
 "bodyBorderSize": 0,
 "titleFontStyle": "normal",
 "contentOpaque": false,
 "closeButtonPaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "paddingBottom": 0,
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "closeButtonPaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "closeButtonBorderSize": 0,
 "titlePaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window10442"
 },
 "footerBackgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "pressedBackgroundOpacity": 1,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448_mobile",
 "width": 100.85,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "iconBeforeLabel": true,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "minWidth": 1,
 "mode": "push",
 "fontColor": "#FFFFFF",
 "fontSize": 12,
 "class": "Button",
 "height": 40,
 "label": "PERSPECTIVAS",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15_mobile, true, 0, null, null, false)",
 "data": {
  "name": "Button panorama list"
 },
 "shadow": false,
 "iconHeight": 32,
 "shadowSpread": 1,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "bold"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4D7057DE_6A8F_0DED_416C_F35BE516C322",
 "initialPosition": {
  "hfov": 90,
  "yaw": 179.31,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4D7047DE_6A8F_0DED_41CA_C8BE18B310CC",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4D7057DE_6A8F_0DED_416C_F35BE516C322"
},
{
 "yaw": 76.12,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "pitch": 10.05,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 337.39,
 "id": "audio_72C6ADEA_6A95_1DD5_41D7_F0F2AC5858C7",
 "data": {
  "label": "Birds stereo 01"
 },
 "autoplay": true
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_426C2901_6A8F_0254_41D2_4767F7BE89D6",
 "initialPosition": {
  "hfov": 90,
  "yaw": 174.42,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_426C5901_6A8F_0254_41D2_D713A4F62F85",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_426C2901_6A8F_0254_41D2_4767F7BE89D6"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4D33579C_6A8F_0E6C_41CB_A8B45F16C1EB",
 "initialPosition": {
  "hfov": 90,
  "yaw": -81.43,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4D33779C_6A8F_0E6C_41C5_EEE2CF95AFBB",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4D33579C_6A8F_0E6C_41CB_A8B45F16C1EB"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4F0D82A7_6A8F_065B_41CE_FB0941124463",
 "initialPosition": {
  "hfov": 90,
  "yaw": -168.7,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4F0D92A7_6A8F_065B_41C5_712E769AD928",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4F0D82A7_6A8F_065B_41CE_FB0941124463"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 907,
 "maxWidth": 1322,
 "id": "Image_475656B5_506E_3117_41A0_63C52AAB81EA_mobile",
 "borderRadius": 0,
 "width": "98.646%",
 "paddingRight": 0,
 "url": "skin/Image_475656B5_506E_3117_41A0_63C52AAB81EA.jpg",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "minWidth": 1,
 "class": "Image",
 "height": "40%",
 "verticalAlign": "middle",
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image6016"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "pitch": 18.34,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 359.5,
 "id": "audio_7202A7E0_6A93_0DD5_41D8_3326699B779E",
 "yaw": -70.09,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_mobile",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "paddingBottom": 0,
 "class": "IconButton",
 "height": 58,
 "verticalAlign": "middle",
 "propagateClick": true,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "thumbnailUrl": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_t.jpg",
 "hfov": 360,
 "label": "Balc\u00f3n - Habitaci\u00f3n Master",
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 120.23,
   "yaw": -51.34,
   "distance": 1,
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 120.23,
   "yaw": -51.32,
   "distance": 1,
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -16.51,
   "yaw": 28.54,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -16.51,
   "yaw": 28.68,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -113.86,
   "yaw": -128.51,
   "distance": 1,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_647D9114_4C12_74F5_41CF_299D6FC64B1D",
  "this.overlay_65D5C0C2_4C13_B54D_41C1_69BF7BCE4606",
  "this.overlay_6610EADB_4C12_B572_419A_5D2ACB79AA0D",
  "this.overlay_60C4A3D0_4C0F_9B4D_4194_30763AC2589E",
  "this.overlay_6265BD1E_4C0E_6CF5_4194_D81FE8F9F4CD",
  "this.overlay_62DC11F1_4C33_F74E_41D1_2E11E02105BB",
  "this.overlay_72CD9B17_4C0E_74F3_4195_54A71D7C31BA",
  "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_tcap0"
 ],
 "audios": [
  "this.audio_7D5C5B7D_6A97_06AC_41B4_6C276E725473",
  "this.audio_7D74C782_6A97_0E54_41C4_239F1691C7FE"
 ],
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 62.45,
  "pitch": -2.76,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4BD03C09_6A8F_0257_4183_61DD906DCCF8",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 2.21,
    "targetYaw": 62.3,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.42,
    "path": "shortest",
    "targetPitch": 0.25
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -20.03
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -22.8
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.17
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 0.31
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -37.62
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -45.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "paddingTop": 5,
 "backgroundOpacity": 0,
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_6B7BD538_502A_54D0_41CC_674161DF5902_mobile",
 "left": "3%",
 "children": [
  "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_mobile"
 ],
 "scrollBarColor": "#000000",
 "right": "3%",
 "paddingRight": 20,
 "gap": 0,
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "5.33%",
 "bottom": "87.98%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingBottom": 5,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10
},
{
 "thumbnailUrl": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_t.jpg",
 "hfov": 360,
 "label": "Ba\u00f1o - Habitaci\u00f3n Master",
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
 "adjacentPanoramas": [
  {
   "backwardYaw": 11.3,
   "yaw": -149.71,
   "distance": 1,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 11.3,
   "yaw": -149.47,
   "distance": 1,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_649BC5B9_4C16_9F3F_41CE_03F1CF8B85B0",
  "this.overlay_60A2EB4F_4C35_EB53_41BB_7B4C45E778F5",
  "this.overlay_0DB44A7A_4C0E_953D_41C6_712CBBF32DAF",
  "this.overlay_0DBC62EA_4C0E_F55D_41CB_80F63DC048E7",
  "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_tcap0"
 ],
 "hfovMax": 120
},
{
 "backgroundOpacity": 0.3,
 "layout": "vertical",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203_mobile",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055_mobile",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145_mobile"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#E73B2C",
 "gap": 10,
 "width": "100%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 520,
 "contentOpaque": false,
 "minWidth": 100,
 "paddingBottom": 30,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.79,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "height": "87.625%"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_43AD093B_6A8F_02AB_41D2_5BFD236AA94D",
 "initialPosition": {
  "hfov": 90,
  "yaw": -35.28,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_43AD393B_6A8F_02AB_41CB_9B21B9F0BDCF",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_43AD093B_6A8F_02AB_41D2_5BFD236AA94D"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_438CA91E_6A8F_026D_41D8_B7AE74629BE2",
 "initialPosition": {
  "hfov": 90,
  "yaw": 174.42,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_438CC91E_6A8F_026D_41C7_9C1E3A662EAE",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_438CA91E_6A8F_026D_41D8_B7AE74629BE2"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1333
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4029DA9B_6A8F_066B_41A1_6BE2EAD7D5BB",
 "initialPosition": {
  "hfov": 90,
  "yaw": 163.49,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4029CA9B_6A8F_066B_41D2_8E606A2CF6B1",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4029DA9B_6A8F_066B_41A1_6BE2EAD7D5BB"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0.75,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "borderRadius": 10,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145_mobile",
 "width": "30.711%",
 "backgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "fontFamily": "Bebas Neue Bold",
 "iconBeforeLabel": true,
 "gap": 5,
 "height": "8.961%",
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#00CC33"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
 "paddingBottom": 0,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "fontSize": "3vh",
 "class": "Button",
 "backgroundColor": [
  "#00CC00"
 ],
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "propagateClick": false,
 "label": "WhatsApp",
 "data": {
  "name": "Button"
 },
 "shadow": false,
 "iconHeight": 32,
 "shadowSpread": 1,
 "paddingTop": 0,
 "cursor": "hand",
 "iconWidth": 32,
 "fontWeight": "normal"
},
{
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77024918_503A_F31E_41AF_34F62C64FEBB",
 "initialPosition": {
  "hfov": 90,
  "yaw": 68.83,
  "pitch": 13.57,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_77024918_503A_F31E_41AF_34F62C64FEBB"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4C684405_6A8F_025F_41AB_8125DAB77EFD",
 "initialPosition": {
  "hfov": 120,
  "yaw": -2.26,
  "pitch": -4.74,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4C686405_6A8F_025F_41D1_BB6DE434FD55",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4C684405_6A8F_025F_41AB_8125DAB77EFD"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4CAAD34C_6A8F_06ED_41C0_D5A7EDB62BC4",
 "initialPosition": {
  "hfov": 90,
  "yaw": -123.6,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4CAAF34C_6A8F_06ED_41A8_FAB83DAA3451",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4CAAD34C_6A8F_06ED_41C0_D5A7EDB62BC4"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_434B99D1_6A8F_05F7_41C8_E32268C88347",
 "initialPosition": {
  "hfov": 90,
  "yaw": 118.47,
  "pitch": -5.51,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_434B89D1_6A8F_05F7_41AC_19B986B026E9",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_434B99D1_6A8F_05F7_41C8_E32268C88347"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4C8A332D_6A8F_06AC_41BA_A2931862F721",
 "initialPosition": {
  "hfov": 90,
  "yaw": 128.66,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4C8A432D_6A8F_06AC_41D9_BB37142BD9E4",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4C8A332D_6A8F_06AC_41BA_A2931862F721"
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_6B7B7538_502A_54D0_41B6_8F7020C59B3D_mobile",
 "children": [
  "this.Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B_mobile"
 ],
 "scrollBarColor": "#0069A3",
 "gap": 0,
 "width": "99.97%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "height": "100%",
 "scrollBarOpacity": 0.51,
 "verticalAlign": "middle",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "scrollBarWidth": 10
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B2C7D2E_6A8F_02AC_41C0_6B5E8D70B2D8",
 "initialPosition": {
  "hfov": 90,
  "yaw": 165.13,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B2C6D2E_6A8F_02AC_41A7_5C86EB1F1E18",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B2C7D2E_6A8F_02AC_41C0_6B5E8D70B2D8"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1333
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055_mobile",
 "left": 22.4,
 "width": 323.55,
 "scrollBarColor": "#000000",
 "gap": 10,
 "children": [
  "this.Image_5EF9A31F_502E_7713_41B1_155B9E9559BD_mobile"
 ],
 "paddingRight": 0,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": 15,
 "contentOpaque": false,
 "minWidth": 1,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "height": 133,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "--STICKER"
 }
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_48020E9D_6A8F_1E6F_41C2_30604B8AEB10",
 "initialPosition": {
  "hfov": 90,
  "yaw": -23.69,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_48023E9D_6A8F_1E6F_41B2_D995CFEC2A59",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_48020E9D_6A8F_1E6F_41C2_30604B8AEB10"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1500
},
{
 "duration": 500,
 "id": "effect_13185EDD_502A_7550_41C3_AE7B43D21853",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4D4944E2_6A8F_03D4_41D2_56FE10CB84C6",
 "initialPosition": {
  "hfov": 120,
  "yaw": -1.36,
  "pitch": -6.86,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4D4954E2_6A8F_03D4_41D4_142B6C78D2B1",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4D4944E2_6A8F_03D4_41D2_56FE10CB84C6"
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055_mobile",
 "width": "100%",
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "height": "89.216%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.14vh;font-family:'Arimo';\">Residencia en</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.37vh;font-family:'Arimo';\">Rakiura Country</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">En el barrio privado m\u00e1s seguro y codiciado de Asunci\u00f3n. La zona del m\u00e1s alto nivel y de una comunidad excelente.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\">Superficie construida de 600m2.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\"><B>Planta alta:</B></SPAN><SPAN STYLE=\"font-size:1.79vh;\"> 4 dormitorios en suite con piso de madera de lapacho trabajado, el dormitorio matrimonial con vestidor y ba\u00f1o con hidromasaje, amplia terraza con parrilla y kichenette.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\"><B>Planta Baja: </B></SPAN><SPAN STYLE=\"font-size:1.79vh;\">Amplio living comedor social, comedor y estar diario integrado de 15x9 mts aprox, sala de cine, gimnasio, doble piscina con deck de madera, quincho equipado con vinero y visicooler, cocina equipada y amoblada, sauna a vapor, hermoso jard\u00edn, cochera para 4 veh\u00edculos, </SPAN><SPAN STYLE=\"font-size:1.79vh;\"><I>Incluye todos los beneficios del club Rakiura</I></SPAN><SPAN STYLE=\"font-size:1.79vh;\">.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_4FBCD3BB_6A8F_05B4_41CC_0B444EA2B0AB, [this.htmltext_4FBC93BC_6A8F_05AC_41CF_B6EB4E2A989B,this.component_4FBFD3BC_6A8F_05AC_41D3_F5221EC36463,this.component_4FBFB3BC_6A8F_05AC_419B_F295B7B3C8E9], 2000)",
 "items": [
  "this.albumitem_4FBC13BB_6A8F_05B4_41D8_2863D27F5C88"
 ],
 "id": "playList_71B32393_6A9D_067B_417C_2397D201B432",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_4DC63883_564D_77EF_41D3_729FE9100318_t.jpg",
 "label": "cascada 5",
 "scaleMode": "fit_inside",
 "width": 540,
 "loop": false,
 "id": "video_4DC63883_564D_77EF_41D3_729FE9100318",
 "class": "Video",
 "height": 800,
 "video": {
  "width": 540,
  "mp4Url": "media/video_4DC63883_564D_77EF_41D3_729FE9100318.mp4",
  "height": 800,
  "class": "VideoResource"
 }
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1333
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4CCB536A_6A8F_06D5_41A1_56F0515F8008",
 "initialPosition": {
  "hfov": 90,
  "yaw": -123.6,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4CCB736A_6A8F_06D5_41CB_E30F8D4A7475",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4CCB536A_6A8F_06D5_41A1_56F0515F8008"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "initialPosition": {
  "hfov": 90,
  "yaw": -20.1,
  "pitch": -3.01,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_770279F1_503A_532F_419F_EC539FDA6F44"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4",
 "width": 2000,
 "image": {
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1500
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4CE2457B_6A8F_02AB_414F_2D16B59E9EB9",
 "initialPosition": {
  "hfov": 90,
  "yaw": -19.22,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4CE2657B_6A8F_02AB_41D6_33093F259969",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4CE2457B_6A8F_02AB_414F_2D16B59E9EB9"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_42D1683F_6A8F_02AB_41D8_7CD23630888E",
 "initialPosition": {
  "hfov": 90,
  "yaw": -177.61,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_42AE983F_6A8F_02AB_41C0_31FA7B93809A",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_42D1683F_6A8F_02AB_41D8_7CD23630888E"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "pressedBackgroundOpacity": 1,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98_mobile",
 "width": 83,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "iconBeforeLabel": true,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "minWidth": 1,
 "mode": "push",
 "fontColor": "#FFFFFF",
 "fontSize": 12,
 "class": "Button",
 "height": 40,
 "label": "UBICACI\u00d3N",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7_mobile, true, 0, null, null, false)",
 "data": {
  "name": "Button location"
 },
 "shadow": false,
 "iconHeight": 32,
 "shadowSpread": 1,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "bold"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4B312CF3_6A8F_03BB_41D9_FC7B759D35DF",
 "initialPosition": {
  "hfov": 90,
  "yaw": 139.08,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4B314CF3_6A8F_03BB_41D7_04E3910A0959",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4B312CF3_6A8F_03BB_41D9_FC7B759D35DF"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4C8D24B3_6A8F_03BB_41C9_FB67758BF4AE",
 "initialPosition": {
  "hfov": 90,
  "yaw": 52.72,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4C8D44B3_6A8F_03BB_41D9_9840CBF79C84",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4C8D24B3_6A8F_03BB_41C9_FB67758BF4AE"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 61.53,
  "pitch": 2.76,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4D69B501_6A8F_0257_41D9_A087FF64CA82",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 2.05,
    "targetYaw": 62.3,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.11,
    "path": "shortest",
    "targetPitch": 0.25
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -20.03
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -22.8
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.17
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 0.31
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -37.62
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -45.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4BBD1BCE_6A8F_05ED_41D8_71D2C7CE4B0C",
 "initialPosition": {
  "hfov": 90,
  "yaw": -70.97,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4BBD0BCE_6A8F_05ED_41A8_0CB19E837982",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4BBD1BCE_6A8F_05ED_41D8_71D2C7CE4B0C"
},
{
 "thumbnailUrl": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_t.jpg",
 "hfov": 360,
 "label": "Sala - Centro",
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 157.34,
   "yaw": -95.88,
   "distance": 1,
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 157.34,
   "yaw": -95.62,
   "distance": 1,
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -6.9,
   "yaw": -151.79,
   "distance": 1,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -6.9,
   "yaw": -151.57,
   "distance": 1,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -127.28,
   "yaw": 94.24,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -127.28,
   "yaw": 94.52,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -2.15,
   "yaw": -179.95,
   "distance": 1,
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -2.15,
   "yaw": -179.95,
   "distance": 1,
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 160.78,
   "yaw": -5.58,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 160.78,
   "yaw": -5.66,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_5ED98F6B_4C0D_AB52_41BB_5E21BCD4D8B3",
  "this.overlay_5F9E895F_4C0E_9772_41B3_12204174EBAF",
  "this.overlay_5B60547E_4C16_FD32_41BE_22924F5C4F05",
  "this.overlay_566EE523_4C36_FCD2_41CC_55AFAC6306BF",
  "this.overlay_57B6F8D9_4C32_957F_41C9_13FC3BAD255B",
  "this.overlay_51280201_4C33_94CF_41D1_7D4AC88DD7AC",
  "this.overlay_7142457C_4C12_BF36_41C3_965C22106F02",
  "this.overlay_701A4566_4C1D_9F52_41CB_792274DA2F65",
  "this.overlay_70E07E84_4C1E_ADD6_41CD_C9C9E90E20AE",
  "this.overlay_7217DE3F_4C1E_AD33_41C0_6548D05F997F",
  "this.overlay_73DD519A_4C1D_97F2_41D1_2DC7FD988A66",
  "this.overlay_72CD0D72_4C13_EF32_41C8_64D446C7AB4C",
  "this.overlay_72C14259_4C15_F57E_41BB_00CEBFD195E8",
  "this.overlay_7241E1C2_4C32_974D_4185_D8EFCA60DDB0",
  "this.overlay_724C7981_4C32_97CE_41A2_274C4D75CE46",
  "this.overlay_4BDBC122_56C5_D929_41A6_F195981DDB88",
  "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0"
 ],
 "hfovMax": 120
},
{
 "titleFontColor": "#000000",
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "id": "window_58FCE818_5746_CE27_41D5_6E5EC77B8BFA",
 "width": 400,
 "bodyBackgroundColorRatios": [
  1
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "gap": 10,
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonRollOverBorderSize": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 20,
 "bodyPaddingRight": 0,
 "headerPaddingLeft": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPressedBorderColor": "#000000",
 "headerPaddingRight": 0,
 "modal": true,
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "closeButtonPaddingTop": 5,
 "titlePaddingTop": 5,
 "closeButtonPressedBorderSize": 0,
 "backgroundColor": [],
 "bodyPaddingTop": 0,
 "shadowHorizontalLength": 3,
 "footerBorderColor": "#000000",
 "minWidth": 20,
 "closeButtonPressedBackgroundColor": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "height": 600,
 "title": "",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "shadowOpacity": 0.5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilOpacity": 0.4,
 "titleTextDecoration": "none",
 "propagateClick": false,
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconLineWidth": 3,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "shadow": true,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 20,
 "closeButtonBackgroundOpacity": 1,
 "titleFontFamily": "Arial",
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonIconWidth": 20,
 "bodyBorderColor": "#000000",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "children": [
  "this.container_4FBCD3BB_6A8F_05B4_41CC_0B444EA2B0AB"
 ],
 "closeButtonIconHeight": 20,
 "backgroundColorRatios": [],
 "shadowColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "closeButtonRollOverBackgroundColor": [],
 "bodyBackgroundColor": [
  "#000000"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "paddingRight": 0,
 "titlePaddingLeft": 5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "closeButtonIconLineWidth": 2,
 "closeButtonRollOverIconLineWidth": 2,
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonBorderColor": "#000000",
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 1,
 "footerBorderSize": 0,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundOpacity": 1,
 "bodyBorderSize": 0,
 "titleFontStyle": "normal",
 "contentOpaque": false,
 "closeButtonPaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "paddingBottom": 0,
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "closeButtonPaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "closeButtonBorderSize": 0,
 "titlePaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window17067"
 },
 "footerBackgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle"
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4E1660CE_6A8F_03ED_41D9_DE772F1A7751",
 "initialPosition": {
  "hfov": 90,
  "yaw": 18.21,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4E1780CE_6A8F_03ED_41D8_4CDBD76E79E1",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_4E1660CE_6A8F_03ED_41D9_DE772F1A7751"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE",
 "data": {
  "label": "12343287"
 }
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331_mobile",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 0,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "height": 23.2,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 62.45,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4C1A55AF_6A8F_0DAB_41D8_E1BFE6E95BC4",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 1.12,
    "targetYaw": 62.3,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1.23,
    "path": "shortest",
    "targetPitch": 0.25
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -20.03
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -22.8
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.17
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 0.31
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -37.62
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -45.66
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_4BFAAC7E_6A8F_02AD_41D4_56FC6DD5B8C6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 1,
    "targetYaw": 0,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1,
    "path": "shortest",
    "targetPitch": 0
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -3.71
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": 21.67
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -24.81
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -25.06
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -27.07
   },
   {
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "path": "shortest",
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera"
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "pitch": 6.03,
 "class": "DirectionalPanoramaAudio",
 "maximumAngle": 129.25,
 "id": "audio_72E69B50_6A95_06F5_41B8_9CB77B66D0F6",
 "yaw": 106.02,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "items": [
  {
   "media": "this.video_6F1B8249_60DF_EE01_41BF_FD4E601538CE",
   "start": "this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4FCD53DE_6A8F_05EC_41BD_722F0D8449BA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4FCD53DE_6A8F_05EC_41BD_722F0D8449BA, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)",
   "player": "this.MainViewer_mobileVideoPlayer"
  }
 ],
 "id": "playList_4FCD53DE_6A8F_05EC_41BD_722F0D8449BA",
 "class": "PlayList"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 40,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_mobile",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "borderRadius": 0,
 "maxWidth": 40,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "width": "100%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 40,
 "transparencyActive": false,
 "paddingBottom": 0,
 "minWidth": 40,
 "mode": "push",
 "class": "IconButton",
 "height": "100%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7_mobile, false, 0, null, null, false)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "thumbnailUrl": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_t.jpg",
 "hfov": 360,
 "label": "Planta Alta - Estar Diario",
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
 "adjacentPanoramas": [
  {
   "backwardYaw": 146.58,
   "yaw": 53.35,
   "distance": 1,
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -40.92,
   "yaw": -87.45,
   "distance": 1,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -40.92,
   "yaw": -87.31,
   "distance": 1,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 102.02,
   "yaw": -150.21,
   "distance": 1,
   "panorama": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -14.87,
   "yaw": 126.55,
   "distance": 1,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -14.87,
   "yaw": 126.23,
   "distance": 1,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_6A014951_4C73_974F_41D3_26D53DEC980E",
  "this.overlay_64272CF1_4C72_6D4F_41CD_2DAE74C3F5A5",
  "this.overlay_64C8A2FD_4C0F_9537_41C5_B4AF39D9D9A8",
  "this.overlay_63C06466_4C0F_9D52_41C9_6732EF408B14",
  "this.overlay_639391F7_4C0E_B732_41CC_40443DBB4B79",
  "this.overlay_7E5D4DA6_4C12_6FD2_41D0_4F6C9247ADD1",
  "this.overlay_7243A042_4C0F_B552_4173_029AA7306C65",
  "this.overlay_451124A4_5CF5_222F_41D5_399BB656DFA0",
  "this.overlay_47D2F307_5CF7_27EA_41AD_74CE8DEE3970",
  "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_tcap0"
 ],
 "hfovMax": 120
},
{
 "manualZoomSpeed": 2,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_491C7FC2_6A8F_1DD5_41C5_038F53049C14",
 "initialPosition": {
  "hfov": 90,
  "yaw": 123.41,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_491D9FC2_6A8F_1DD5_41B0_74EFA466187C",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_491C7FC2_6A8F_1DD5_41C5_038F53049C14"
},
{
 "movements": [
  {
   "pitchSpeed": 26.67,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 52.59,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -22.3
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B9F1B77_6A8F_06BC_4199_9EC10824C0DB",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 45.57,
   "targetYaw": -24.62,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 90.55,
   "path": "shortest",
   "targetPitch": 27.13
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4C49B3E6_6A8F_05DD_41C2_3A44B7D972A6",
 "restartMovementDelay": 5000
},
{
 "mp3Url": "media/audio_72C6ADEA_6A95_1DD5_41D7_F0F2AC5858C7.mp3",
 "oggUrl": "media/audio_72C6ADEA_6A95_1DD5_41D7_F0F2AC5858C7.ogg",
 "class": "AudioResource",
 "id": "audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F"
},
{
 "maps": [
  {
   "yaw": 26.29,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_75FA4049_6142_AA00_41D5_115D7FA7CF98",
   "pitch": 6.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 26.29,
   "distance": 100
  }
 ],
 "id": "overlay_5F08474E_4CFE_9B55_4162_01D050A59F50",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_4D4954E2_6A8F_03D4_41D4_142B6C78D2B1, this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A); this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_4D4954E2_6A8F_03D4_41D4_142B6C78D2B1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 }
},
{
 "maps": [
  {
   "yaw": 36.58,
   "hfov": 11.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.31,
   "image": "this.AnimatedImageResource_75FD9049_6142_AA00_41C4_64FB6803FBCF",
   "pitch": -11.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 36.58,
   "distance": 100
  }
 ],
 "id": "overlay_5829C0DD_4CF2_F576_4170_28F44FE61136",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": 26.42,
   "hfov": 10.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_2_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_2_0.png",
      "width": 289,
      "height": 337,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 26.42,
   "distance": 50
  }
 ],
 "id": "overlay_58FADE45_4CF5_AD56_41C7_88B8A9887EBB",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_4D7604F1_6A8F_03B7_41B4_B5C610F570C1, this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A); this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_4D7604F1_6A8F_03B7_41B4_B5C610F570C1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Encender\u000d   Luces"
 }
},
{
 "maps": [
  {
   "yaw": 36.43,
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_3_0_map.gif",
      "width": 16,
      "height": 26,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_3_0.png",
      "width": 305,
      "height": 512,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 36.43,
   "distance": 50
  }
 ],
 "id": "overlay_752BA8F4_4DF2_F535_4196_A95C1DB42D1C",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Living"
 }
},
{
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "maps": [
  {
   "yaw": 0.1,
   "hfov": 14.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_4_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.06,
   "image": "this.AnimatedImageResource_75FD1049_6142_AA00_41D5_A835AF753E61",
   "pitch": -34.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.1,
   "distance": 100
  }
 ],
 "id": "overlay_4EE111E8_5CE6_FBC8_41CC_1138D545E828",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_4D69B501_6A8F_0257_41D9_A087FF64CA82); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01b"
 }
},
{
 "maps": [
  {
   "yaw": -179.82,
   "hfov": 22.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_5_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_5_0.png",
      "width": 642,
      "height": 694,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.82,
   "distance": 50
  }
 ],
 "id": "overlay_4EE6C1E9_5CE6_FBC8_41CD_2E8F28A5780B",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_4D0814A1_6A8F_0257_4184_5F16A2716C99); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "     Fondo"
 }
},
{
 "maps": [
  {
   "yaw": -179.9,
   "hfov": 18.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.83,
   "image": "this.AnimatedImageResource_75FD504A_6142_AA00_41AD_E670AD269EA6",
   "pitch": -12.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.9,
   "distance": 100
  }
 ],
 "id": "overlay_4EE6E1E9_5CE6_FBC8_41D2_D0DE83F0700C",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_4D2954C3_6A8F_03D4_41C1_8A509A92C041); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "maps": [
  {
   "yaw": -0.15,
   "hfov": 13.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_7_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_7_0.png",
      "width": 454,
      "height": 346,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.15,
   "distance": 50
  }
 ],
 "id": "overlay_4EE711E9_5CE6_FBC8_41CC_D9605A12B936",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_4BC9C5B2_6A8F_0DB4_41B7_23E1BA225A97); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "     Frente"
 }
},
{
 "hfov": 31.63,
 "videoVisibleOnStop": true,
 "id": "overlay_7005B963_60CE_BA00_419D_74989748E515",
 "vfov": 22.59,
 "loop": false,
 "enabledInCardboard": true,
 "pitch": -5.71,
 "class": "VideoPanoramaOverlay",
 "useHandCursor": true,
 "roll": 0.15,
 "yaw": -0.05,
 "image": {
  "levels": [
   {
    "url": "media/overlay_7005B963_60CE_BA00_419D_74989748E515_t.jpg",
    "width": 1280,
    "height": 720,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotationY": 0.2,
 "rotationX": 5.38,
 "stateChange": "if(this.overlay_7005B963_60CE_BA00_419D_74989748E515.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_7005B963_60CE_BA00_419D_74989748E515', [this.overlay_7005B963_60CE_BA00_419D_74989748E515]); } else { this.resumeGlobalAudios('overlay_7005B963_60CE_BA00_419D_74989748E515'); }",
 "click": "this.overlay_7005B963_60CE_BA00_419D_74989748E515.play()",
 "autoplay": false,
 "distance": 50,
 "blending": 0,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1144,
  "mp4Url": "media/video_6F1B8249_60DF_EE01_41BF_FD4E601538CE.mp4",
  "height": 644,
  "class": "VideoResource"
 }
},
{
 "maps": [
  {
   "yaw": -0.69,
   "hfov": 10.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.71,
   "image": "this.AnimatedImageResource_75F64057_6142_AA01_41B4_E5609EE648F3",
   "pitch": -7.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.69,
   "distance": 100
  }
 ],
 "id": "overlay_6DA7B985_4C73_97D6_41C8_FAF959F094CC",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_4C2843C7_6A8F_05DB_41A3_FC37966A9410); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -56.59,
   "hfov": 8.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.83,
   "image": "this.AnimatedImageResource_75C99057_6142_AA01_41D3_2F3D3CD80016",
   "pitch": -1.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -56.59,
   "distance": 100
  }
 ],
 "id": "overlay_6FA18F6B_4C72_EB52_418D_A4752C2B79FF",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_4CEB1389_6A8F_0654_41A7_E96129493354); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -80.64,
   "hfov": 6.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.01,
   "image": "this.AnimatedImageResource_75C9D058_6142_AA0F_41D1_34333013D054",
   "pitch": -4.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -80.64,
   "distance": 100
  }
 ],
 "id": "overlay_6D9129AB_4C72_97D2_41B3_BC9D00327413",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -92.35,
   "hfov": 13.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.65,
   "image": "this.AnimatedImageResource_75C9F058_6142_AA0F_41C8_5F4615299382",
   "pitch": -11.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.35,
   "distance": 100
  }
 ],
 "id": "overlay_6ED1C9D5_4C7E_9776_41CD_EA10811A7BB1",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_4CAAF34C_6A8F_06ED_41A8_FAB83DAA3451); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -108.67,
   "hfov": 7.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.11,
   "image": "this.AnimatedImageResource_75C93058_6142_AA0F_41C4_B289CE8B0738",
   "pitch": -2.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -108.67,
   "distance": 100
  }
 ],
 "id": "overlay_6FC82723_4C7D_BCD2_41C6_ED142E41D1F5",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -0.52,
   "hfov": 12.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_5_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_5_0.png",
      "width": 360,
      "height": 371,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.52,
   "distance": 50
  }
 ],
 "id": "overlay_630303B6_4C15_9B35_41A7_0FE1D2CE67BA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_4C49D3E6_6A8F_05DD_41D2_FD9820A0A2A7); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "     Deck"
 }
},
{
 "maps": [
  {
   "yaw": -108.74,
   "hfov": 7.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_6_0_map.gif",
      "width": 16,
      "height": 28,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_6_0.png",
      "width": 203,
      "height": 360,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -108.74,
   "distance": 50
  }
 ],
 "id": "overlay_7C2FC9D8_4C17_F77D_41C5_180CBDEF7BDE",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Cocina"
 }
},
{
 "maps": [
  {
   "yaw": -56.45,
   "hfov": 13.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_7_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_7_0.png",
      "width": 369,
      "height": 422,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -56.45,
   "distance": 50
  }
 ],
 "id": "overlay_7E11B26A_4C16_9552_41A3_28556ECCB81C",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_4C0903A8_6A8F_0654_41DA_572B1AA2DBB8); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "    Parrilla"
 }
},
{
 "maps": [
  {
   "yaw": -92.51,
   "hfov": 10.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_8_0_map.gif",
      "width": 16,
      "height": 26,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_8_0.png",
      "width": 287,
      "height": 473,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.51,
   "distance": 50
  }
 ],
 "id": "overlay_7D6E9EA6_4C12_EDD5_41C5_9E91663C2E02",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_4CCB736A_6A8F_06D5_41CB_E30F8D4A7475); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Quincho"
 }
},
{
 "maps": [
  {
   "yaw": -80.79,
   "hfov": 6.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_9_0_map.gif",
      "width": 16,
      "height": 22,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_9_0.png",
      "width": 190,
      "height": 263,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -80.79,
   "distance": 50
  }
 ],
 "id": "overlay_7D0ECB6B_4C13_EB53_41BC_4ED41580DB7D",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Pasillo"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 63.37,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_0D1F1C5B_4C0F_ED73_41C2_D93B0423D556",
 "yaw": -45.09,
 "bleaching": 0.7
},
{
 "hfov": 102.03,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.02,
 "id": "overlay_779DF13E_56C3_3919_41A5_CE0412598D4D",
 "vfov": 139.59,
 "loop": true,
 "enabledInCardboard": true,
 "pitch": 36.7,
 "class": "VideoPanoramaOverlay",
 "useHandCursor": true,
 "roll": 0.3,
 "rotationX": -36.13,
 "image": {
  "levels": [
   {
    "url": "media/overlay_779DF13E_56C3_3919_41A5_CE0412598D4D_t.jpg",
    "width": 466,
    "height": 690,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotationY": -1.01,
 "yaw": -0.9,
 "chromaSmoothing": 0.32,
 "chromaColor": "#3A9BFF",
 "autoplay": true,
 "distance": 50,
 "blending": 0,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 466,
  "mp4Url": "media/video_76BF82AE_56C2_FB39_41D0_DF287E74780C.mp4",
  "height": 690,
  "class": "VideoResource"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 5.92,
   "targetYaw": 0.75,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 10.89,
   "path": "shortest",
   "targetPitch": 8.04
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.07
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 5.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4F589439_6A8F_02B4_41CA_5677C1C7E65F",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7703348F_503A_71F2_41B8_C8F2687D9078",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 1.39,
   "targetYaw": -23.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 1.78,
   "path": "shortest",
   "targetPitch": -0.75
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -14.26
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 6.34
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_48E8FE7F_6A8F_1EAB_41C2_823956A03794",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 20.96,
   "targetYaw": -20.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 41.11,
   "path": "shortest",
   "targetPitch": -3.01
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 9.61
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4DD9273A_6A8F_0EB5_419A_0ED001129C26",
 "restartMovementDelay": 5000
},
{
 "mp3Url": "media/audio_76772C3C_56C3_6F18_41D4_7C4FB259877A.mp3",
 "oggUrl": "media/audio_76772C3C_56C3_6F18_41D4_7C4FB259877A.ogg",
 "class": "AudioResource",
 "id": "audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E"
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -33.1
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -36.36
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 12.88
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7870010A_503E_30FD_41BC_311867DA2A0C",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 19.14,
   "targetYaw": 0.75,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 37.44,
   "path": "shortest",
   "targetPitch": 8.04
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.07
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 5.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4FAF821F_6A8F_066C_41D0_27BBCBE4AF8B",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 31.52,
   "targetYaw": -20.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 62.33,
   "path": "shortest",
   "targetPitch": -3.01
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 9.61
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_49888F45_6A8F_1EDF_41CD_A4D3DDBC76B9",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 16.54,
   "targetYaw": 92.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.23,
   "path": "shortest",
   "targetPitch": -1.76
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.57
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.82
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -0.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4BE55609_6A8F_0E57_41D2_98D1CBF3690F",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 64.36,
   "targetYaw": -3.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 128.31,
   "path": "shortest",
   "targetPitch": -18.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -33.1
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -36.36
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 12.88
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4F63B475_6A8F_02BF_41C3_C5FDBDC57C30",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 83.13,
   "targetYaw": -87.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 166.03,
   "path": "shortest",
   "targetPitch": -3.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -30.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -19.78
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B5C1718_6A8F_0E75_41B1_C92E8A6AD6C4",
 "restartMovementDelay": 5000
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "container_4FBEF3BD_6A8F_05AC_41B4_C638889EB557",
 "children": [
  "this.viewer_uid4FBE53BD_6A8F_05AC_41C4_A2CE1BAFEE43",
  {
   "backgroundOpacity": 0.3,
   "layout": "vertical",
   "borderRadius": 0,
   "scrollBarWidth": 7,
   "left": 0,
   "children": [
    "this.htmltext_4FBE83BD_6A8F_05AC_41C9_9134476E35DC"
   ],
   "backgroundColorRatios": [],
   "scrollBarColor": "#FFFFFF",
   "right": 0,
   "paddingRight": 0,
   "gap": 10,
   "horizontalAlign": "left",
   "paddingLeft": 0,
   "borderSize": 0,
   "minHeight": 20,
   "backgroundColorDirection": "vertical",
   "bottom": 0,
   "contentOpaque": true,
   "minWidth": 20,
   "paddingBottom": 0,
   "class": "Container",
   "backgroundColor": [],
   "scrollBarOpacity": 0.5,
   "verticalAlign": "bottom",
   "scrollBarVisible": "rollOver",
   "propagateClick": false,
   "scrollBarMargin": 2,
   "overflow": "scroll",
   "shadow": false,
   "data": {
    "name": "Container12888"
   },
   "paddingTop": 0,
   "height": "30%"
  },
  "this.component_4FA1D3BE_6A8F_05AC_41D6_A2E86A822736",
  "this.component_4FA1B3BE_6A8F_05AC_41CE_40F6E80B64C5"
 ],
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "gap": 10,
 "width": "100%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 20,
 "contentOpaque": false,
 "minWidth": 20,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [],
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container12887"
 },
 "paddingTop": 0,
 "height": "100%"
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -164.17,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 162.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.33,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 11.03,
   "targetYaw": 9.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 21.15,
   "path": "shortest",
   "targetPitch": -33.91
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 71.97,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -21.54
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 108.4,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -20.29
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 172.97,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.82
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -97.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -10.49
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -37.81,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.57
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B0C8683_6A8F_0E5B_41A0_E13DED74C19D",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 16.22,
   "targetYaw": -38.25,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 31.59,
   "path": "shortest",
   "targetPitch": -22.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -16.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 7.85
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4E350102_6A8F_0254_41D3_1CC325561E1A",
 "restartMovementDelay": 5000
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_4FBE83BD_6A8F_05AC_41C9_9134476E35DC, this.albumitem_4FBE33BD_6A8F_05AC_41CC_32D4DC6AA9E0); this.loopAlbum(this.playList_71B38395_6A9D_067F_41D0_276B009F2C1F, 0)",
 "player": "this.viewer_uid4FBE53BD_6A8F_05AC_41C4_A2CE1BAFEE43PhotoAlbumPlayer",
 "id": "albumitem_4FBE33BD_6A8F_05AC_41CC_32D4DC6AA9E0"
},
{
 "maps": [
  {
   "yaw": 109.03,
   "hfov": 24.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.48,
   "image": "this.AnimatedImageResource_75FE904B_6142_AA00_41C1_0C272A8678FB",
   "pitch": -10.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 109.03,
   "distance": 100
  }
 ],
 "id": "overlay_541D6722_4C12_9CCD_41BA_EE1FE905E835",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_4FAFA21F_6A8F_066C_41B7_5D30F8464412); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": 2.39,
   "hfov": 20.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.28,
   "image": "this.AnimatedImageResource_75FEB04B_6142_AA00_41D6_1DF1E420CC62",
   "pitch": -10.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.39,
   "distance": 100
  }
 ],
 "id": "overlay_5B17EBCA_4C1E_AB5D_41BF_C3867D88D8B8",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_4F91B1AA_6A8F_0254_41D7_966C22D1FE74); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -66.95,
   "hfov": 5.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.89,
   "image": "this.AnimatedImageResource_75FEF04B_6142_AA00_41D7_47F8D4A39A4C",
   "pitch": -5.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -66.95,
   "distance": 100
  }
 ],
 "id": "overlay_52FEE528_4C15_FCDE_41AE_7C61B197B5D1",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": 2.26,
   "hfov": 22.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_3_0_map.gif",
      "width": 16,
      "height": 34,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_3_0.png",
      "width": 648,
      "height": 1404,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.26,
   "distance": 50
  }
 ],
 "id": "overlay_7413D737_4DF2_7B32_41CC_6C141EB3875F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_4FB1F1E5_6A8F_05DF_41BC_D93B6214D669); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "\u000d  Quincho"
 }
},
{
 "maps": [
  {
   "yaw": -66.91,
   "hfov": 7.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_4_0_map.gif",
      "width": 16,
      "height": 22,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_4_0.png",
      "width": 202,
      "height": 279,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -66.91,
   "distance": 50
  }
 ],
 "id": "overlay_757F79E6_4DFE_B753_41AD_2FB53A3E46D9",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Parrilla"
 }
},
{
 "maps": [
  {
   "yaw": 109.1,
   "hfov": 23.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_5_0_map.gif",
      "width": 16,
      "height": 34,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_5_0.png",
      "width": 648,
      "height": 1404,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 109.1,
   "distance": 50
  }
 ],
 "id": "overlay_76E05345_4DFE_7B57_41C6_165FDFFF9CA8",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_4FCFB254_6A8F_06FD_41A2_0A6A6C4F0A9C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "\u000d    Living"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 8.86,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_722C6DB8_4C0E_AF3D_41C6_E65D7C692713",
 "yaw": -37.81,
 "bleaching": 0.7
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 10.4,
   "targetYaw": -5.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 19.89,
   "path": "shortest",
   "targetPitch": -0.25
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4F9181AA_6A8F_0254_41CF_3D556DF5BBED",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 18.64,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.44,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -22.3
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4E702176_6A8F_02BD_41D6_622E80D98688",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 4.75,
   "targetYaw": -5.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 8.54,
   "path": "shortest",
   "targetPitch": -0.25
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4CCE654D_6A8F_02EC_41A6_99E39D00E187",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 52.95,
   "targetYaw": -24.62,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 105.38,
   "path": "shortest",
   "targetPitch": 27.13
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_424F38E2_6A8F_03D5_41C2_A5BB570A5C1A",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.31
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": 146.58,
   "hfov": 9.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.98,
   "image": "this.AnimatedImageResource_75C0D063_6142_AA01_41D5_D06358ED5067",
   "pitch": -3.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 146.58,
   "distance": 100
  }
 ],
 "id": "overlay_6A5E0209_4C0E_94DF_417D_46B9DFD108C3",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_429007FD_6A8F_0DAF_41D9_190F6CEF2794); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": 146.8,
   "hfov": 16.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_1_0_map.gif",
      "width": 16,
      "height": 30,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_1_0.png",
      "width": 451,
      "height": 869,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 146.8,
   "distance": 50
  }
 ],
 "id": "overlay_6261EA3E_4C3F_B535_41D0_801F1A3A3344",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_428EB81E_6A8F_026D_41B5_D2CAF963BB18); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 30.96,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7243A9E8_4C0E_775E_41A5_59C64522A4DF",
 "yaw": 34.29,
 "bleaching": 0.7
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 11.03,
   "targetYaw": 9.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 21.15,
   "path": "shortest",
   "targetPitch": -33.91
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 71.97,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -21.54
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 108.4,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -20.29
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 172.97,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.82
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -97.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -10.49
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -37.81,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.57
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B38D6A4_6A8F_0E5D_419C_28A70F61AD57",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 27.83,
   "targetYaw": 92.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 54.92,
   "path": "shortest",
   "targetPitch": -1.76
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.57
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.82
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -0.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4C09F3A8_6A8F_0654_4190_6F89BC75F6C6",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 27.96,
   "targetYaw": -38.25,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 55.17,
   "path": "shortest",
   "targetPitch": -22.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -16.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 7.85
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4BB0EBB2_6A8F_05B5_41D9_8CE4B1475217",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -82.27,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 13.88
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 10.11
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 135.79,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 5.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 57.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 3.08
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -2.39,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_771E9E9F_503A_3113_41CE_5824E21E1360",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 12.43,
   "targetYaw": -38.25,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 23.96,
   "path": "shortest",
   "targetPitch": -22.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -16.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 7.85
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B480D67_6A8F_02DB_41D8_F39BE3E21862",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 45.57,
   "targetYaw": -24.62,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 90.55,
   "path": "shortest",
   "targetPitch": 27.13
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4C2813C7_6A8F_05DB_41D7_F930A4BA68FB",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -51.88,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.06
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 3.33
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 142.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 72.48,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.07
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -1.38,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.97
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4D76F4F1_6A8F_03B7_41C9_D7E449D98661",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.07
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 5.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_770D5914_503A_D315_41C7_BD98E4CD29E4",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 16.67,
   "targetYaw": -87.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.48,
   "path": "shortest",
   "targetPitch": -3.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -30.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -19.78
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4E9B2041_6A8F_02D4_41A2_E43AEC532C94",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -30.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -19.78
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": -14.87,
   "hfov": 16.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.85,
   "image": "this.AnimatedImageResource_75CB805A_6142_AA03_41D5_156038638883",
   "pitch": 17.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -14.87,
   "distance": 100
  }
 ],
 "id": "overlay_6E7D7ACC_4C72_9555_41C8_254666DCBD5A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_4E9B4041_6A8F_02D4_41D1_5FAC1960E515); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -6.9,
   "hfov": 12.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.2,
   "image": "this.AnimatedImageResource_75CBD05A_6142_AA03_41D5_C27C76CC96C7",
   "pitch": -33.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -6.9,
   "distance": 100
  }
 ],
 "id": "overlay_689FBDC5_4C76_EF56_41D0_FDE427A56FD1",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_4E352102_6A8F_0254_41C1_A3F69FCAF2ED); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01b"
 }
},
{
 "maps": [
  {
   "yaw": 6.63,
   "hfov": 6.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.24,
   "image": "this.AnimatedImageResource_75CB105A_6142_AA03_41C2_EDC5AE617CB5",
   "pitch": -26.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 6.63,
   "distance": 100
  }
 ],
 "id": "overlay_68C43EA9_4C76_6DDE_41BC_6917D875D7F0",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_4EF4D09B_6A8F_026B_41A6_AFB7A3DF2B9D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01b"
 }
},
{
 "maps": [
  {
   "yaw": -39.42,
   "hfov": 4.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.51,
   "image": "this.AnimatedImageResource_75CB205B_6142_AA01_41D6_06424871EBA5",
   "pitch": 10.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -39.42,
   "distance": 100
  }
 ],
 "id": "overlay_696D3868_4C76_955E_41D2_B78938E57E51",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_4E703176_6A8F_02BD_41B9_8D6CEEA809D4); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": 130.88,
   "hfov": 15.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.44,
   "image": "this.AnimatedImageResource_75CB705B_6142_AA01_41D1_2C89DB2733C2",
   "pitch": -15.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 130.88,
   "distance": 100
  }
 ],
 "id": "overlay_68EAA62C_4C72_BCD6_41AD_F2767561D35F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -39.55,
   "hfov": 7.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_5_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_5_0.png",
      "width": 225,
      "height": 289,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -39.55,
   "distance": 50
  }
 ],
 "id": "overlay_62AE8006_4C3E_94D5_4195_37AB3152888F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Habitaci\u00f3n\u000d    Master"
 }
},
{
 "maps": [
  {
   "yaw": -6.95,
   "hfov": 11.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_6_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_6_0.png",
      "width": 378,
      "height": 360,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -6.95,
   "distance": 50
  }
 ],
 "id": "overlay_63036D8E_4C3D_AFD2_41CC_31017422F0F6",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_4E53B13B_6A8F_02AB_41C2_DD8B0A36FF2F); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "        Sala\u000d      Centro"
 }
},
{
 "maps": [
  {
   "yaw": 15.83,
   "hfov": 7.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.96,
   "image": "this.AnimatedImageResource_75CAC05B_6142_AA01_41B6_299C284993A7",
   "pitch": 16.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 15.83,
   "distance": 100
  }
 ],
 "id": "overlay_63CFCEB6_4C32_AD32_41C6_39DBCAE7E4F6",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": 16.16,
   "hfov": 16.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_8_0_map.gif",
      "width": 15,
      "height": 21,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_8_0.png",
      "width": 474,
      "height": 648,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 16.16,
   "distance": 50
  }
 ],
 "id": "overlay_630263E9_4C33_9B5F_41A8_0D731596BBA0",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_4EB94060_6A8F_02D5_41CD_0B8D3CC31A5D); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "\u000d Habitaci\u00f3n"
 }
},
{
 "maps": [
  {
   "yaw": -14.82,
   "hfov": 16.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_9_0_map.gif",
      "width": 16,
      "height": 33,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_9_0.png",
      "width": 473,
      "height": 998,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -14.82,
   "distance": 50
  }
 ],
 "id": "overlay_63881641_4C35_9D4F_41BF_500F021033D3",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_4ED6A07E_6A8F_02AD_41D3_7848A1DBC28F); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 }
},
{
 "maps": [
  {
   "yaw": 130.53,
   "hfov": 16.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_10_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_10_0.png",
      "width": 465,
      "height": 515,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 130.53,
   "distance": 50
  }
 ],
 "id": "overlay_63647F43_4C33_AB53_41D1_F19AB5488D5A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "      Calle"
 }
},
{
 "maps": [
  {
   "yaw": 6.64,
   "hfov": 8.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_11_0_map.gif",
      "width": 23,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_11_0.png",
      "width": 257,
      "height": 176,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 6.64,
   "distance": 50
  }
 ],
 "id": "overlay_638525C6_4C0D_9F52_41D1_E258508E5E91",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_4E1780CE_6A8F_03ED_41D8_4CDBD76E79E1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Comedor"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 63.12,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_72D70213_4C0F_94F3_41B8_F09D9513D0DA",
 "yaw": 151.61,
 "bleaching": 0.7
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 19.14,
   "targetYaw": 0.75,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 37.44,
   "path": "shortest",
   "targetPitch": 8.04
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.07
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 5.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4FCFA254_6A8F_06FD_41C8_24CA5E5C4B17",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 13.68,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 26.47,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 47.79
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_43EA397A_6A8F_02B4_41B9_75AA2CEF7BB4",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": 33.04,
   "hfov": 11.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.5,
   "image": "this.AnimatedImageResource_75E56040_6142_AA00_41D0_C20BCF80F44C",
   "pitch": -5.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 33.04,
   "distance": 100
  }
 ],
 "id": "overlay_5F9D2CB5_4CF2_6D31_41B7_5BCEF2CFED01",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_4BD03C09_6A8F_0257_4183_61DD906DCCF8); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": 157.34,
   "hfov": 17.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.15,
   "image": "this.AnimatedImageResource_75E4A040_6142_AA00_41C0_E4C3C607B6A0",
   "pitch": -14.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 157.34,
   "distance": 100
  }
 ],
 "id": "overlay_5AE07B89_4CF2_EBDF_41D0_0E914D04EED6",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_4B895B95_6A8F_067F_41C2_935EC0A74C01); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01c"
 }
},
{
 "maps": [
  {
   "yaw": 89.87,
   "hfov": 13.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.2,
   "image": "this.AnimatedImageResource_75E4F040_6142_AA00_41D8_5FB116CE22E9",
   "pitch": -5.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.87,
   "distance": 100
  }
 ],
 "id": "overlay_59A6ACB0_4C0E_6DCD_41C1_5C1B9CBD1730",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_4BBD0BCE_6A8F_05ED_41A8_0CB19E837982); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": 115.98,
   "hfov": 9.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.09,
   "image": "this.AnimatedImageResource_75E40041_6142_AA00_41D7_66A97CB88424",
   "pitch": -4.37,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 115.98,
   "distance": 100
  }
 ],
 "id": "overlay_5207670B_4C12_BCD2_41C7_91CD2C8CFC49",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": 32.9,
   "hfov": 11.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_4_0_map.gif",
      "width": 16,
      "height": 31,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_4_0.png",
      "width": 305,
      "height": 594,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 32.9,
   "distance": 50
  }
 ],
 "id": "overlay_75752B26_4DF5_94D5_41BE_473EFED9DBD7",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_4BDB8C26_6A8F_025D_41D6_8EE033D5069B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Sala de\u000d    Cine"
 }
},
{
 "maps": [
  {
   "yaw": 89.64,
   "hfov": 14.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_5_0_map.gif",
      "width": 16,
      "height": 30,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_5_0.png",
      "width": 396,
      "height": 756,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.64,
   "distance": 50
  }
 ],
 "id": "overlay_721F4000_4DF7_94CE_41C5_C23548018D00",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_4BA76BEC_6A8F_05AC_41D7_C4B53713E1E6); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  \u000d   Cocina"
 }
},
{
 "maps": [
  {
   "yaw": 115.7,
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_6_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_6_0.png",
      "width": 300,
      "height": 351,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 115.7,
   "distance": 50
  }
 ],
 "id": "overlay_0F886554_4DF6_BF76_41C9_78656514EDB0",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Piscinas"
 }
},
{
 "maps": [
  {
   "yaw": 157.22,
   "hfov": 17.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_7_0_map.gif",
      "width": 31,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_7_0.png",
      "width": 482,
      "height": 243,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 157.22,
   "distance": 50
  }
 ],
 "id": "overlay_70F91094_4DF5_F5F6_41C2_500E4A3028EC",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_4BB01BB2_6A8F_05B5_41D9_6FDF683199FC); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Sala - Centro"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 55.58,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7257A9C3_4C0D_9752_41D2_10B53BCDED80",
 "yaw": 4.4,
 "bleaching": 0.7
},
{
 "bleachingDistance": 0.4,
 "pitch": 55.83,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_725DDFD6_4C0D_AB72_41BC_1ECF3EBC4A83",
 "yaw": 128.25,
 "bleaching": 0.7
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -82.27,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 13.88
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 10.11
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 135.79,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 5.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 57.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 3.08
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -2.39,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4D98B415_6A8F_027F_41D6_06C45C04EFAE",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 11.8,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 22.71,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -150.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.21
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 115.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 74.24,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.02
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4D9166AB_6A8F_0E54_41A8_3B7F67C81CF0",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": -2.15,
   "hfov": 7.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_75EB8033_6142_AA01_41B5_64842B1ED985",
   "pitch": 1.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.15,
   "distance": 100
  }
 ],
 "id": "overlay_4722F8F2_5746_CFEB_41B6_CF6FB682FC5D",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_483FCEBC_6A8F_1FAC_41D4_40B7BE592A4D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -2.25,
   "hfov": 7.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_1_0_map.gif",
      "width": 16,
      "height": 25,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_1_0.png",
      "width": 195,
      "height": 313,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.25,
   "distance": 50
  }
 ],
 "id": "overlay_472958F3_5746_CFE9_4190_A06C79E7A940",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_48586EE5_6A8F_1FDC_41A8_00DC3080C7F9); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "   Entrada\u000d"
 }
},
{
 "maps": [
  {
   "yaw": 7.41,
   "hfov": 3.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.25,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_2_0.png",
      "width": 90,
      "height": 93,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.41
  }
 ],
 "id": "overlay_472968F3_5746_CFE9_41C0_E4651E9C12EB",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_58FCE818_5746_CE27_41D5_6E5EC77B8BFA, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_71B32393_6A9D_067B_417C_2397D201B432, '90%', '90%', true, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "yaw": 7.47,
   "hfov": 5.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_3_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_3_0.png",
      "width": 152,
      "height": 189,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.47,
   "distance": 50
  }
 ],
 "id": "overlay_472928F3_5746_CFE9_41D2_3453D059BC7B",
 "data": {
  "label": "\u00c1lbum de\u000d   Fotos"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_77F36E2E_502A_3135_41CC_6EE71EAFE57A); this.showPopupMedia(this.window_589E2836_5746_CE6B_41AD_BBAC5BB986BB, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_71B38395_6A9D_067F_41D0_276B009F2C1F, '90%', '90%', true, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "yaw": 37.61,
   "hfov": 3.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_4_1_0_map.gif",
      "width": 50,
      "height": 47,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.62,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_4_0.png",
      "width": 100,
      "height": 94,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 37.61
  }
 ],
 "id": "overlay_472938F3_5746_CFE9_41D3_199BB64C45DA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Polygon"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 24.12,
   "targetYaw": 0.75,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 47.45,
   "path": "shortest",
   "targetPitch": 8.04
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.07
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 5.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_432BC9B4_6A8F_05BD_41D6_673844CF6A2F",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 20.96,
   "targetYaw": -20.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 41.11,
   "path": "shortest",
   "targetPitch": -3.01
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 9.61
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4DF26759_6A8F_0EF7_41D7_73A9BAED81CD",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.39,
   "targetYaw": 68.83,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.93,
   "path": "shortest",
   "targetPitch": 13.57
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -19.78
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -29.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -25.81
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -153.37,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -14.51
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 133.78,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 71.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -34.35
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_48CF4E5F_6A8F_1EEB_41C0_1997D630DBAF",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 11.8,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 22.71,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -150.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.21
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 115.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 74.24,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.02
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4C791676_6A8F_0EBD_419B_811B07F240BE",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 32.17,
   "targetYaw": -24.62,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 63.64,
   "path": "shortest",
   "targetPitch": 27.13
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_49FFAFA1_6A8F_1E54_41C4_F9ABA70F33DF",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": 98.57,
   "hfov": 10.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.77,
   "image": "this.AnimatedImageResource_75F50051_6142_AA01_41CB_C86DF89DB571",
   "pitch": -3.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 98.57,
   "distance": 100
  }
 ],
 "id": "overlay_539238FD_4C72_9536_41C1_9735137A6A8B",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_49DE0F83_6A8F_1E54_4171_11F269A4D378); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": 144.72,
   "hfov": 10.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.77,
   "image": "this.AnimatedImageResource_75F55052_6142_AA03_41C1_E75FF7E2CFB7",
   "pitch": -3.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 144.72,
   "distance": 100
  }
 ],
 "id": "overlay_539524B3_4C72_9D33_41BF_0168CD1AF8AE",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_48751F06_6A8F_1E5C_41A4_5A356EFE42DE); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -169.64,
   "hfov": 16.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.42,
   "image": "this.AnimatedImageResource_75F49052_6142_AA03_41D2_EEBE6D133AAF",
   "pitch": -13.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -169.64,
   "distance": 100
  }
 ],
 "id": "overlay_52780C30_4C76_6CCE_41C1_B9F2E8174A50",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_4988AF45_6A8F_1EDF_4167_2F73660B4DF9); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01c"
 }
},
{
 "maps": [
  {
   "yaw": 130.71,
   "hfov": 7.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.35,
   "image": "this.AnimatedImageResource_75F4A052_6142_AA03_41D7_BC78C3834810",
   "pitch": -4.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 130.71,
   "distance": 100
  }
 ],
 "id": "overlay_6F8B9EB2_4C77_ADCD_41D1_02693D57AF37",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_491D9FC2_6A8F_1DD5_41B0_74EFA466187C); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": 98.46,
   "hfov": 11.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_4_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_4_0.png",
      "width": 309,
      "height": 387,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 98.46,
   "distance": 50
  }
 ],
 "id": "overlay_78EBC3AE_4C17_FBD5_41CF_7454C300F3F8",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_49FFCFA1_6A8F_1E54_41A7_B3F8128C9451); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "     Deck"
 }
},
{
 "maps": [
  {
   "yaw": 130.72,
   "hfov": 8.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_5_0_map.gif",
      "width": 16,
      "height": 22,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_5_0.png",
      "width": 244,
      "height": 337,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 130.72,
   "distance": 50
  }
 ],
 "id": "overlay_7AA7DA94_4C16_95F6_41C3_C928FF8C5DF3",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_493DAFE1_6A8F_1DD7_41D0_75D7D7F7AEB4); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Piscinas"
 }
},
{
 "maps": [
  {
   "yaw": -169.76,
   "hfov": 16.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_6_0_map.gif",
      "width": 31,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_6_0.png",
      "width": 465,
      "height": 233,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -169.76,
   "distance": 50
  }
 ],
 "id": "overlay_7982F986_4C12_97D2_41AF_EBA9BB403852",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_49A41F64_6A8F_1EDD_41CB_E55F0E764210); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "       Pasillo"
 }
},
{
 "maps": [
  {
   "yaw": 144.51,
   "hfov": 9.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_7_0_map.gif",
      "width": 16,
      "height": 22,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_7_0.png",
      "width": 259,
      "height": 361,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 144.51,
   "distance": 50
  }
 ],
 "id": "overlay_74F737A5_4C13_9BD6_41C7_666E6CB897D9",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_486E8F25_6A8F_1E5F_41C8_B82038CA1048); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Quincho"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 5.92,
   "targetYaw": 0.75,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 10.89,
   "path": "shortest",
   "targetPitch": 8.04
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.07
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 5.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4F24B41B_6A8F_026B_41A4_C6B4D450767C",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 26.93,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 53.11,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 47.79
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4D5307BE_6A8F_0DAC_41CA_10085FAAAD4C",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 7.38,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 13.81,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -150.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.21
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 115.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 74.24,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.02
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_40E94A63_6A8F_06D4_41D1_4F851E796D5B",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 18.85,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.87,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 47.79
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_493DBFE1_6A8F_1DD7_4198_E9C88E2B4718",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -14.26
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 6.34
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.39,
   "targetYaw": 68.83,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.93,
   "path": "shortest",
   "targetPitch": 13.57
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -19.78
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -29.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -25.81
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -153.37,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -14.51
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 133.78,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 71.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -34.35
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_48D50E3F_6A8F_1EAC_41D3_117F1C6C3DF6",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 49.5,
   "targetYaw": -5.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 98.46,
   "path": "shortest",
   "targetPitch": -0.25
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4D8746E3_6A8F_0FDB_41C5_4B9FBB45D292",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": 0.17,
   "hfov": 10.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.99,
   "image": "this.AnimatedImageResource_75E69042_6142_AA00_41D1_BB244C836120",
   "pitch": -21.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.17,
   "distance": 100
  }
 ],
 "id": "overlay_4F65FE35_5C93_3E28_41D3_CCEA286FD35A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_436A89F0_6A8F_05B4_41D0_39F0E1E97208); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01b"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 74.42,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_488AF362_5C92_E62A_41CD_ED6323AB55AF",
 "yaw": -7.91,
 "bleaching": 0.7
},
{
 "bleachingDistance": 0.4,
 "pitch": 56.59,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_48F889FD_5C92_E219_41D5_92A0AD1ACDEC",
 "yaw": 65.19,
 "bleaching": 0.7
},
{
 "bleachingDistance": 0.4,
 "pitch": 57.09,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_48EDFE9F_5C9D_1E1A_41B7_6AFA2637F974",
 "yaw": -64.44,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "yaw": -2.49,
   "hfov": 12.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_1_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_1_0.png",
      "width": 469,
      "height": 421,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.26,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.49,
   "distance": 50
  }
 ],
 "id": "overlay_4861FFAC_5C9D_FE3E_41A9_C97465DF7BC8",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "       Punto\u000d    Intermedio"
 }
},
{
 "maps": [
  {
   "yaw": -2.29,
   "hfov": 12.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.83,
   "image": "this.AnimatedImageResource_75E60043_6142_AA00_41C6_BB0DBCAE43B0",
   "pitch": -43.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.29,
   "distance": 100
  }
 ],
 "id": "overlay_4B027F32_5C9F_1E2B_41A8_DEB49B78DC2A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01b"
 }
},
{
 "maps": [
  {
   "yaw": 0.08,
   "hfov": 10.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_3_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_3_0.png",
      "width": 310,
      "height": 235,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.08,
   "distance": 50
  }
 ],
 "id": "overlay_49E5426B_5C9F_6639_41D5_53491B41ED02",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_408BEA0D_6A8F_066C_41D7_C74AF5568F33); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "     Frente"
 }
},
{
 "maps": [
  {
   "yaw": 24.52,
   "hfov": 6.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.63,
   "image": "this.AnimatedImageResource_75E67043_6142_AA00_41BD_FC55BB90C9E0",
   "pitch": -7.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 24.52,
   "distance": 100
  }
 ],
 "id": "overlay_44040F6A_5C93_3E3A_41B2_47FDF4DB86AD",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_432BF9B4_6A8F_05BD_4197_67CB48FCDC66); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": 24.67,
   "hfov": 8.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_5_0_map.gif",
      "width": 16,
      "height": 27,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.76,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_5_0.png",
      "width": 231,
      "height": 402,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 24.67,
   "distance": 50
  }
 ],
 "id": "overlay_4404EF6A_5C93_3E3A_41B4_92431BFDBA6A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_434B89D1_6A8F_05F7_41AC_19B986B026E9); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Living"
 }
},
{
 "hfov": 23.61,
 "videoVisibleOnStop": true,
 "id": "overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D",
 "vfov": 16.89,
 "loop": false,
 "enabledInCardboard": true,
 "pitch": -2.99,
 "class": "VideoPanoramaOverlay",
 "useHandCursor": true,
 "roll": 0.49,
 "yaw": 0.01,
 "image": {
  "levels": [
   {
    "url": "media/overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D_t.jpg",
    "width": 1280,
    "height": 720,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotationY": 0.94,
 "rotationX": 1.19,
 "stateChange": "if(this.overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D', [this.overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D]); } else { this.resumeGlobalAudios('overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D'); }",
 "click": "this.overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D.play()",
 "autoplay": false,
 "distance": 50,
 "blending": 0,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1144,
  "mp4Url": "media/video_6F1B8249_60DF_EE01_41BF_FD4E601538CE.mp4",
  "height": 644,
  "class": "VideoResource"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 40.95,
   "targetYaw": -24.62,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 81.27,
   "path": "shortest",
   "targetPitch": 27.13
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B028663_6A8F_0EDB_41B8_494DDAE20E1A",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 31.31,
   "targetYaw": -5.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 61.91,
   "path": "shortest",
   "targetPitch": -0.25
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_49916F26_6A8F_1E5C_41D3_729D91D111C0",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 7.38,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 13.81,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -150.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.21
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 115.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 74.24,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.02
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_40C86A46_6A8F_06DD_41B9_810F94C3C102",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -51.88,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.06
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 3.33
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 142.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 72.48,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.07
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -1.38,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.97
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": 120.23,
   "hfov": 12.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.09,
   "image": "this.AnimatedImageResource_75C21067_6142_AA01_41D4_B2A09A2FD180",
   "pitch": -5.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 120.23,
   "distance": 100
  }
 ],
 "id": "overlay_66AA9141_4C12_B74F_4182_4D5CE8470BE4",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_4F6B930E_6A8F_066D_41D5_DD3565313E4F); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": 78.74,
   "hfov": 9.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.75,
   "image": "this.AnimatedImageResource_75C22067_6142_AA01_41D4_58803F930106",
   "pitch": -20.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 78.74,
   "distance": 100
  }
 ],
 "id": "overlay_661206E1_4C15_9D4F_41B1_D784E4DD7ED9",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_4F2AC2C5_6A8F_07DF_41A4_AE8AC7BB0C7F); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -156.42,
   "hfov": 11.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_2_0_map.gif",
      "width": 16,
      "height": 38,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_2_0.png",
      "width": 330,
      "height": 788,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -156.42,
   "distance": 50
  }
 ],
 "id": "overlay_63D94153_4C16_B772_41CC_320A7C1BAC6A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Parrilla"
 }
},
{
 "maps": [
  {
   "yaw": 79.08,
   "hfov": 21.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_3_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_3_0.png",
      "width": 630,
      "height": 652,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 79.08,
   "distance": 50
  }
 ],
 "id": "overlay_639A064F_4C15_9D53_41CC_8D0F891DEB0D",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_4F4D72EE_6A8F_07AD_41BF_52C91F003FF7); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "      \u000d  Deck - Piscina\u000d"
 }
},
{
 "maps": [
  {
   "yaw": -179.6,
   "hfov": 31.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_4_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_4_0.png",
      "width": 887,
      "height": 818,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.6,
   "distance": 50
  }
 ],
 "id": "overlay_604B1A6E_4C12_B555_41B9_113B7C073FFB",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "      \u000d       Kitchenette\u000d"
 }
},
{
 "maps": [
  {
   "yaw": 120.77,
   "hfov": 16.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_5_0_map.gif",
      "width": 16,
      "height": 23,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_5_0.png",
      "width": 449,
      "height": 652,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 120.77,
   "distance": 50
  }
 ],
 "id": "overlay_615CF70F_4C0D_BCD2_41C6_F2BE939B4F65",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_4C8A432D_6A8F_06AC_41D9_BB37142BD9E4); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Balc\u00f3n de\u000d  Habitaci\u00f3n\u000d    Master\u000d"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 45.28,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_0D2A0CC2_4C0E_AD4D_41B5_7C511CCA84AF",
 "yaw": -59.16,
 "bleaching": 0.7
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "maps": [
  {
   "yaw": -20.74,
   "hfov": 17.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.38,
   "image": "this.AnimatedImageResource_75F28050_6142_AA00_41D6_559AAA255AA9",
   "pitch": -14.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -20.74,
   "distance": 100
  }
 ],
 "id": "overlay_55BD891B_4C12_F4F2_41BF_BD7A099FA4FB",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_4BE56609_6A8F_0E57_419F_0BDE6F598214); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01c"
 }
},
{
 "maps": [
  {
   "yaw": 42.62,
   "hfov": 10.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.74,
   "image": "this.AnimatedImageResource_75F2D050_6142_AA00_41AA_90627B8A1897",
   "pitch": -5.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 42.62,
   "distance": 100
  }
 ],
 "id": "overlay_569D5C53_4C13_ED72_41C5_56F2E1168FED",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_4B19C644_6A8F_0EDC_41D7_DD6287B8D21F); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": 88.31,
   "hfov": 10.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.76,
   "image": "this.AnimatedImageResource_75F2E050_6142_AA00_4191_8B72C048700E",
   "pitch": -4.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 88.31,
   "distance": 100
  }
 ],
 "id": "overlay_55344675_4C12_7D37_41CA_0C7A84DACAAA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_4BF145CF_6A8F_0DEC_41C8_30F1B87BD719); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": 88.14,
   "hfov": 9.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_3_0_map.gif",
      "width": 16,
      "height": 25,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_3_0.png",
      "width": 263,
      "height": 415,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 88.14,
   "distance": 50
  }
 ],
 "id": "overlay_79858F87_4C0D_ABD3_41C2_6BD4B90B4286",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_4BFBB5EC_6A8F_0DAD_41D8_0E63BD28D600); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Quincho"
 }
},
{
 "maps": [
  {
   "yaw": -20.84,
   "hfov": 16.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_4_0_map.gif",
      "width": 31,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_4_0.png",
      "width": 465,
      "height": 233,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -20.84,
   "distance": 50
  }
 ],
 "id": "overlay_7A5E25AC_4C0D_9FD5_41A7_29C3FBE038B8",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_4BEE5626_6A8F_0E5C_41D8_9F67F9046085); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "       Parrilla"
 }
},
{
 "maps": [
  {
   "yaw": 42.63,
   "hfov": 9.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_5_0_map.gif",
      "width": 16,
      "height": 23,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_5_0.png",
      "width": 255,
      "height": 375,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 42.63,
   "distance": 50
  }
 ],
 "id": "overlay_7ABCF3A7_4DF3_FBD3_41D0_D18E2BE7D6F6",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_4B029662_6A8F_0ED5_41CD_A7E64AEB41D6); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Deck"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "maps": [
  {
   "yaw": -105.15,
   "hfov": 12.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_1_HS_0_0_map.gif",
      "width": 16,
      "height": 26,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_1_HS_0_0.png",
      "width": 352,
      "height": 575,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -105.15,
   "distance": 50
  }
 ],
 "id": "overlay_466CC9D9_5CFE_E219_41C6_48DA7E6ACE59",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80, this.camera_40A8BA28_6A8F_0655_41B7_DDD351C46464); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Habitaci\u00f3n"
 }
},
{
 "maps": [
  {
   "yaw": -105.26,
   "hfov": 10,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10,
   "image": "this.AnimatedImageResource_75C13062_6142_AA03_41CE_AEBAC82D6EBB",
   "pitch": -5.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -105.26,
   "distance": 100
  }
 ],
 "id": "overlay_40CC987A_5CFF_621A_41C8_873C6BA0FFB4",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80, this.camera_40D91A37_6A8F_06BC_41CA_26D59B0B46AB); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 37.63,
   "targetYaw": 3.27,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 74.6,
   "path": "shortest",
   "targetPitch": 11.81
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.31
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4F6A730F_6A8F_066C_41C8_DC5AE0190957",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": -155.53,
   "hfov": 14.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_0_0_map.gif",
      "width": 22,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_0_0.png",
      "width": 440,
      "height": 312,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -155.53,
   "distance": 50
  }
 ],
 "id": "overlay_4DB28054_5C8D_E26E_41D1_A2A9EFF76692",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_495A7000_6A8F_0255_4193_928A6DDBFE00); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "   Comedor"
 }
},
{
 "maps": [
  {
   "yaw": -155.51,
   "hfov": 15.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.07,
   "image": "this.AnimatedImageResource_75E0103E_6142_AA03_4189_7F0EEB564FBE",
   "pitch": -20.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -155.51,
   "distance": 100
  }
 ],
 "id": "overlay_4DB2A054_5C8D_E26E_41D6_403365217C61",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_497B5021_6A8F_0254_41D9_0819C51B9FE8); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01b"
 }
},
{
 "maps": [
  {
   "yaw": -163.88,
   "hfov": 8.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.78,
   "image": "this.AnimatedImageResource_75E0203E_6142_AA03_4167_23A68A61F274",
   "pitch": -4.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -163.88,
   "distance": 100
  }
 ],
 "id": "overlay_4D083693_5C8F_6EE9_4198_A5E09AE6AE49",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -164.01,
   "hfov": 11.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_3_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_3_0.png",
      "width": 325,
      "height": 356,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -164.01,
   "distance": 50
  }
 ],
 "id": "overlay_4D09C693_5C8F_6EE9_41CC_BA80A8AA8CB2",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Escritorio"
 }
},
{
 "maps": [
  {
   "yaw": -131.04,
   "hfov": 8.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.38,
   "image": "this.AnimatedImageResource_75E3903E_6142_AA03_41C0_79F4985E1105",
   "pitch": -15.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -131.04,
   "distance": 100
  }
 ],
 "id": "overlay_4D993E39_5C8D_1E26_41B6_38A2BB475CF3",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -131,
   "hfov": 10.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_5_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_5_0.png",
      "width": 302,
      "height": 312,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -131,
   "distance": 50
  }
 ],
 "id": "overlay_4EA4D860_5C93_6226_41BE_05F490730C74",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "   Sala"
 }
},
{
 "maps": [
  {
   "yaw": -39.65,
   "hfov": 7.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.65,
   "image": "this.AnimatedImageResource_75E3F03F_6142_AA01_4178_11FC6E7B9CCC",
   "pitch": -10.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -39.65,
   "distance": 100
  }
 ],
 "id": "overlay_4EA199DA_5C95_221B_41CA_307C2CFD92FA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -0.22,
   "hfov": 7.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_7_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_7_0.png",
      "width": 220,
      "height": 232,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.22,
   "distance": 50
  }
 ],
 "id": "overlay_4ECCB29C_5C95_E61F_41D2_B76939FDD4C7",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Deck"
 }
},
{
 "maps": [
  {
   "yaw": -0.16,
   "hfov": 6.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.14,
   "image": "this.AnimatedImageResource_75E3203F_6142_AA01_41D5_EA119E648A57",
   "pitch": -4.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.16,
   "distance": 100
  }
 ],
 "id": "overlay_4EFCB093_5C97_62E9_41C4_F24F905896A0",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -39.56,
   "hfov": 13.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_9_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_9_0.png",
      "width": 370,
      "height": 312,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.31,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -39.56,
   "distance": 50
  }
 ],
 "id": "overlay_4FD375BB_5C97_2219_41CE_5B46EE142C76",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Quincho"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 25.15,
   "targetYaw": -5.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 49.52,
   "path": "shortest",
   "targetPitch": -0.25
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4BF135CF_6A8F_0DEC_41CD_7E5FE69ED8BE",
 "restartMovementDelay": 5000
},
{
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.42",
     "y": "0.52",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.59",
     "y": "0.49",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.72",
     "y": "0.61",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.50",
     "y": "0.64",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.56",
     "y": "0.69",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.61",
     "y": "0.28",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.27",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.69",
     "y": "0.46",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.63",
     "y": "0.45",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.55",
     "y": "0.56",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.58",
     "y": "0.27",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.71",
     "y": "0.55",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.27",
     "y": "0.30",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.59",
     "y": "0.33",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.70",
     "y": "0.35",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.37",
     "y": "0.59",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.31",
     "y": "0.35",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.48",
     "y": "0.60",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.74",
     "y": "0.44",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.73",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.31",
     "y": "0.42",
     "class": "PhotoCameraPosition"
    },
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "maps": [
  {
   "yaw": -127.28,
   "hfov": 23.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.6,
   "image": "this.AnimatedImageResource_75EEB03B_6142_AA01_41D8_61A7D4549873",
   "pitch": -31.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -127.28,
   "distance": 100
  }
 ],
 "id": "overlay_5A02EA85_4C12_F5D7_41D2_8FCF819F522E",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_4B483D67_6A8F_02DB_41C4_8721B12340B3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01c"
 }
},
{
 "maps": [
  {
   "yaw": 156.31,
   "hfov": 17.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.8,
   "image": "this.AnimatedImageResource_75EED03B_6142_AA01_41D3_851460DA5A82",
   "pitch": -8.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 156.31,
   "distance": 100
  }
 ],
 "id": "overlay_59341A7B_4C15_9533_41C3_0487EA40E264",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6, this.camera_48D55E3F_6A8F_1EAC_41AA_7FDCF7787E5D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -20.63,
   "hfov": 10.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.32,
   "image": "this.AnimatedImageResource_75EEE03B_6142_AA01_41D2_6D30AED34620",
   "pitch": -7.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -20.63,
   "distance": 100
  }
 ],
 "id": "overlay_5156665F_4C12_9D72_41B6_A38066CA80C7",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -161.79,
   "hfov": 16.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.2,
   "image": "this.AnimatedImageResource_75EE203C_6142_AA07_41AF_F17CF60246BD",
   "pitch": 7.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -161.79,
   "distance": 100
  }
 ],
 "id": "overlay_52E662BC_4C13_9535_41C3_08531DC1890E",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_48877DF5_6A8F_1DBC_41CF_E30EF2C1465F); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -127.19,
   "hfov": 23.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_4_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_4_0.png",
      "width": 741,
      "height": 345,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -127.19,
   "distance": 50
  }
 ],
 "id": "overlay_715392A3_4C0D_F5D1_41A3_454BAED9273F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_4B792D87_6A8F_025B_41CD_F4089D1B9435); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "      Sala - Centro"
 }
},
{
 "maps": [
  {
   "yaw": -161.77,
   "hfov": 12.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_5_0_map.gif",
      "width": 16,
      "height": 29,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_5_0.png",
      "width": 342,
      "height": 629,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -161.77,
   "distance": 50
  }
 ],
 "id": "overlay_7131CB8C_4C12_6BD6_41B2_B7A26C46B627",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_48B80E1A_6A8F_1E75_41CC_04510351C628); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Escalera\u000d Entrepiso"
 }
},
{
 "maps": [
  {
   "yaw": -20.88,
   "hfov": 10.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_6_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_6_0.png",
      "width": 284,
      "height": 323,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -20.88,
   "distance": 50
  }
 ],
 "id": "overlay_716119CF_4C17_9752_41CD_34F0DAA56395",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Piscinas"
 }
},
{
 "maps": [
  {
   "yaw": 156.28,
   "hfov": 17.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_7_0_map.gif",
      "width": 16,
      "height": 22,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_7_0.png",
      "width": 497,
      "height": 695,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 156.28,
   "distance": 50
  }
 ],
 "id": "overlay_73B7B12B_4C16_B4D3_41BA_A0020CA60648",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6, this.camera_48CF7E5F_6A8F_1EEB_41AE_F76977B10D0E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Escritorio"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 75.68,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7279217F_4C0D_9732_41D1_FA5340FD8914",
 "yaw": 46.6,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "yaw": -17.24,
   "hfov": 18.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_8_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.7,
   "image": "this.AnimatedImageResource_75E1F03D_6142_AA01_41D3_8683D49AE53F",
   "pitch": -24.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -17.24,
   "distance": 100
  }
 ],
 "id": "overlay_4CA90992_5CB7_22EA_41AD_ADA049F9006B",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC, this.camera_4B676DA9_6A8F_0257_41D3_A97E25D5B1FA); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01c"
 }
},
{
 "maps": [
  {
   "yaw": -17.24,
   "hfov": 18.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_9_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_9_0.png",
      "width": 537,
      "height": 323,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -17.24,
   "distance": 50
  }
 ],
 "id": "overlay_530E5592_5CB5_62EB_41CF_CD34D32E693D",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC, this.camera_48947DCC_6A8F_1DEC_41D5_7E7E7559956B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "       Perspectiva\u000d         Nocturna"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 27.96,
   "targetYaw": -38.25,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 55.17,
   "path": "shortest",
   "targetPitch": -22.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -16.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 7.85
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B892B95_6A8F_067F_4186_B524AA1EC3DC",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": -67.58,
   "hfov": 16.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.67,
   "image": "this.AnimatedImageResource_75E23040_6142_AA7F_41C4_D38EDE9E45A4",
   "pitch": -7.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -67.58,
   "distance": 100
  }
 ],
 "id": "overlay_5AB33241_4C16_F54F_419A_1A82626E06AC",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_48E81E7F_6A8F_1EAB_41C0_730C456F31D1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -67.63,
   "hfov": 16.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_1_0_map.gif",
      "width": 16,
      "height": 22,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_1_0.png",
      "width": 470,
      "height": 669,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -67.63,
   "distance": 50
  }
 ],
 "id": "overlay_779BAA9C_4DF2_75F6_41D3_3255A4E1C04A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_48023E9D_6A8F_1E6F_41B2_D995CFEC2A59); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "   Comedor"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 41.51,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_724AC826_4C0D_94D2_41C0_AB29E3F1E825",
 "yaw": -74.99,
 "bleaching": 0.7
},
{
 "bleachingDistance": 0.4,
 "pitch": 36.49,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_724D3C57_4C0D_ED73_41CD_8425355074D8",
 "yaw": 4.65,
 "bleaching": 0.7
},
{
 "bleachingDistance": 0.4,
 "pitch": 38,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7277C163_4C0D_F752_41C2_7921673C330A",
 "yaw": 82.27,
 "bleaching": 0.7
},
{
 "bleachingDistance": 0.4,
 "pitch": 47.04,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_727CA71C_4C0D_FCF6_41C8_60EF23AE255E",
 "yaw": 176.73,
 "bleaching": 0.7
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 76.64,
   "targetYaw": -23.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 153,
   "path": "shortest",
   "targetPitch": -0.75
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -14.26
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 6.34
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_497B4021_6A8F_0254_41D4_BDBE479CA817",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 36.52,
   "targetYaw": -24.62,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 72.37,
   "path": "shortest",
   "targetPitch": 27.13
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4F2AA2C6_6A8F_07DD_41D1_CFB968316EA7",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 61.96,
   "targetYaw": -3.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 123.49,
   "path": "shortest",
   "targetPitch": -18.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -33.1
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -36.36
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 12.88
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_48B81E1B_6A8F_1E74_41D6_0D5C3E5DA24C",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": -19.77,
   "hfov": 16.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.91,
   "image": "this.AnimatedImageResource_75FA5047_6142_AA00_41A2_2F1A9D5BE271",
   "pitch": -8.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -19.77,
   "distance": 100
  }
 ],
 "id": "overlay_4B06FB75_5C8D_E629_41D0_39ACE8264920",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_4BC72C44_6A8F_02DC_41D9_247BB3BB507B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -19.73,
   "hfov": 14.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_1_0_map.gif",
      "width": 16,
      "height": 26,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_1_0.png",
      "width": 403,
      "height": 655,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -19.73,
   "distance": 50
  }
 ],
 "id": "overlay_4B06EB75_5C8D_E629_41D0_F40FAA7834DA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_4BF0BC61_6A8F_02D4_41D1_1568139A23CD); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "   Living"
 }
},
{
 "maps": [
  {
   "yaw": 62.71,
   "hfov": 10.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.25,
   "image": "this.AnimatedImageResource_75FD8047_6142_AA00_419F_F28EB873CCBE",
   "pitch": -20.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 62.71,
   "distance": 100
  }
 ],
 "id": "overlay_44CECBC8_5C8E_E667_41C8_45A16FBDF932",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "maps": [
  {
   "yaw": 62.35,
   "hfov": 10.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_3_0_map.gif",
      "width": 16,
      "height": 21,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_3_0.png",
      "width": 321,
      "height": 441,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 62.35,
   "distance": 50
  }
 ],
 "id": "overlay_45DA1407_5C8D_61EA_41B1_2CF401771FB5",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "   Medio"
 }
},
{
 "maps": [
  {
   "yaw": 62.71,
   "hfov": 8.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.8,
   "image": "this.AnimatedImageResource_75FB5048_6142_AA00_41B1_958E9DBD2AB1",
   "pitch": 2.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 62.71,
   "distance": 100
  }
 ],
 "id": "overlay_456ED3AF_5CF3_2639_41BE_00D2618002D8",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_4BFAAC7E_6A8F_02AD_41D4_56FC6DD5B8C6); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "maps": [
  {
   "yaw": 62.78,
   "hfov": 9.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_5_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_5_0.png",
      "width": 259,
      "height": 322,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 62.78,
   "distance": 50
  }
 ],
 "id": "overlay_44EF3CAC_5CF3_623E_41D2_97DC21AC8F5F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_4BE9CC9B_6A8F_026B_41BF_9A894B0C97FE); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "   Fondo"
 }
},
{
 "hfov": 79.7,
 "videoVisibleOnStop": true,
 "id": "overlay_70131B11_60C2_7E01_4189_E40E6053CCCF",
 "vfov": 62.32,
 "loop": false,
 "enabledInCardboard": true,
 "pitch": 1.02,
 "class": "VideoPanoramaOverlay",
 "useHandCursor": true,
 "roll": -0.22,
 "yaw": -109.81,
 "image": {
  "levels": [
   {
    "url": "media/overlay_70131B11_60C2_7E01_4189_E40E6053CCCF_t.jpg",
    "width": 1280,
    "height": 720,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotationY": 6.49,
 "rotationX": -0.46,
 "stateChange": "if(this.overlay_70131B11_60C2_7E01_4189_E40E6053CCCF.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_70131B11_60C2_7E01_4189_E40E6053CCCF', [this.overlay_70131B11_60C2_7E01_4189_E40E6053CCCF]); } else { this.resumeGlobalAudios('overlay_70131B11_60C2_7E01_4189_E40E6053CCCF'); }",
 "click": "this.overlay_70131B11_60C2_7E01_4189_E40E6053CCCF.play()",
 "autoplay": false,
 "distance": 50,
 "blending": 0,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1144,
  "mp4Url": "media/video_6F1B8249_60DF_EE01_41BF_FD4E601538CE.mp4",
  "height": 644,
  "class": "VideoResource"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 66.48,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 132.58,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -22.3
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4FEC2289_6A8F_0657_41D3_97F243E3EC86",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": 102.02,
   "hfov": 12.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.75,
   "image": "this.AnimatedImageResource_75CE4061_6142_AA01_41CA_005D32128FFD",
   "pitch": -9.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 102.02,
   "distance": 100
  }
 ],
 "id": "overlay_46D0B9A9_5CF3_2239_41D2_F30BF1260DF9",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -53.36,
   "hfov": 16.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_1_0_map.gif",
      "width": 16,
      "height": 21,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_1_0.png",
      "width": 462,
      "height": 624,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -53.36,
   "distance": 50
  }
 ],
 "id": "overlay_46D089A9_5CF3_2239_41D6_82D73B977FE5",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "    Balc\u00f3n"
 }
},
{
 "maps": [
  {
   "yaw": -53.19,
   "hfov": 15.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.36,
   "image": "this.AnimatedImageResource_75C1B061_6142_AA01_41D3_FF01B680FEAD",
   "pitch": -12.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -53.19,
   "distance": 100
  }
 ],
 "id": "overlay_47E4FB00_5CF3_27E7_41D5_73431470F9AA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "maps": [
  {
   "yaw": 101.97,
   "hfov": 16.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_3_0_map.gif",
      "width": 16,
      "height": 23,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_3_0.png",
      "width": 463,
      "height": 679,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 101.97,
   "distance": 50
  }
 ],
 "id": "overlay_470540FE_5CFD_621B_41C9_CAAC9464CEEB",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "     Estar\u000d     Diario"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 31.31,
   "targetYaw": -5.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 61.91,
   "path": "shortest",
   "targetPitch": -0.25
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4875FF06_6A8F_1E5C_41D4_83BCE9F14E5A",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 31.52,
   "targetYaw": -20.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 62.33,
   "path": "shortest",
   "targetPitch": -3.01
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 9.61
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_49A4EF64_6A8F_1EDD_41D4_3640D473C4C8",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 13.19,
   "targetYaw": -20.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 25.5,
   "path": "shortest",
   "targetPitch": -3.01
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 9.61
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_42EF9881_6A8F_0254_41D3_C1A27D77F1C6",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 64.36,
   "targetYaw": -3.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 128.31,
   "path": "shortest",
   "targetPitch": -18.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -33.1
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -36.36
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 12.88
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4F4CD456_6A8F_02FC_41D0_DBAF7F098137",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 10.4,
   "targetYaw": -5.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 19.89,
   "path": "shortest",
   "targetPitch": -0.25
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4FB1D1E5_6A8F_05DF_41D4_C5856C0A9763",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 54.36,
   "targetYaw": -24.62,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 108.22,
   "path": "shortest",
   "targetPitch": 27.13
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_40090A7F_6A8F_06AB_41D1_2EAFA631E75C",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 61.96,
   "targetYaw": -3.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 123.49,
   "path": "shortest",
   "targetPitch": -18.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -33.1
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -36.36
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 12.88
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_48875DF5_6A8F_1DBC_41DA_7CC035526F37",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 4.65,
   "targetYaw": 4.27,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 8.34,
   "path": "shortest",
   "targetPitch": 8.04
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -164.17,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 162.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.33,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B15FCBB_6A8F_03B4_41CA_D7EFE5386946",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 25.15,
   "targetYaw": -5.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 49.52,
   "path": "shortest",
   "targetPitch": -0.25
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4BFBA5EC_6A8F_0DAD_41D1_638062351C2C",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 76.64,
   "targetYaw": -23.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 153,
   "path": "shortest",
   "targetPitch": -0.75
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -14.26
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 6.34
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_495A4000_6A8F_0255_41B2_7D414A33A920",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 16.67,
   "targetYaw": -87.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.48,
   "path": "shortest",
   "targetPitch": -3.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -30.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -19.78
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4EB93060_6A8F_02D5_41D1_0C7F37F11CCA",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 15.44,
   "targetYaw": 3.27,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 30.01,
   "path": "shortest",
   "targetPitch": 11.81
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.31
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B2476C6_6A8F_0FDC_41A2_A9EBB053EC15",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": -21.6,
   "hfov": 10.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.72,
   "image": "this.AnimatedImageResource_75F72054_6142_AA07_41D3_2D04632FD2B5",
   "pitch": -6.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -21.6,
   "distance": 100
  }
 ],
 "id": "overlay_53684693_4C76_9DF3_4181_EF2767F1A9C2",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_4D8776E3_6A8F_0FDB_41DA_57CE55C5D7F1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -48.23,
   "hfov": 10.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.61,
   "image": "this.AnimatedImageResource_75F76054_6142_AA07_41AF_2AD3A6F958EC",
   "pitch": -10.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -48.23,
   "distance": 100
  }
 ],
 "id": "overlay_6CE24BFA_4C76_EB32_41B4_9F999091A2FA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_4D5357BE_6A8F_0DAC_41C5_628FE4C66B27); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": 15.7,
   "hfov": 10.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.75,
   "image": "this.AnimatedImageResource_75F68054_6142_AA07_4198_EBF1094E9562",
   "pitch": -5.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 15.7,
   "distance": 100
  }
 ],
 "id": "overlay_53794FA5_4C76_6BD7_41C5_3C53F52B35DE",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_4DD9573A_6A8F_0EB5_41D7_4B8BFAF022D1); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": 47.72,
   "hfov": 10.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.77,
   "image": "this.AnimatedImageResource_75F45055_6142_AA01_41CE_DA7E49B2A8A7",
   "pitch": -4.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 47.72,
   "distance": 100
  }
 ],
 "id": "overlay_535CC597_4C75_BFF2_418C_EBE38CA692F5",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_4D10B77A_6A8F_0EB5_4199_E7FE0096988D); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": 31.81,
   "hfov": 10.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.45,
   "image": "this.AnimatedImageResource_75F47055_6142_AA01_41C4_FD95038415F1",
   "pitch": 14.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.81,
   "distance": 100
  }
 ],
 "id": "overlay_6D90C5FD_4C72_9F36_41CE_AE11C1BB2BB1",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_4C790676_6A8F_0EBD_41D5_5D9718CA199D); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -16.51,
   "hfov": 10.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.04,
   "image": "this.AnimatedImageResource_75F78055_6142_AA01_41B5_258A50734517",
   "pitch": 21.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -16.51,
   "distance": 100
  }
 ],
 "id": "overlay_6D8DA36E_4C72_7B55_41CD_8289197836CB",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_4C2B2613_6A8F_0E74_41C4_B3ACBEC84F9A); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -48.23,
   "hfov": 8.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_6_0_map.gif",
      "width": 16,
      "height": 24,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_6_0.png",
      "width": 234,
      "height": 360,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -48.23,
   "distance": 50
  }
 ],
 "id": "overlay_7D0CF396_4C1E_9BF2_41C7_3F8427E9D057",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_4D7047DE_6A8F_0DED_41CA_C8BE18B310CC); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Piscinas"
 }
},
{
 "maps": [
  {
   "yaw": 47.65,
   "hfov": 9.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_7_0_map.gif",
      "width": 16,
      "height": 23,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_7_0.png",
      "width": 250,
      "height": 360,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 47.65,
   "distance": 50
  }
 ],
 "id": "overlay_781F5669_4C1F_FD5F_41D1_74EDFDF4A74D",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_4D33779C_6A8F_0E6C_41C5_EEE2CF95AFBB); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "   Parrilla"
 }
},
{
 "maps": [
  {
   "yaw": -21.76,
   "hfov": 8.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_8_0_map.gif",
      "width": 16,
      "height": 24,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_8_0.png",
      "width": 234,
      "height": 360,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -21.76,
   "distance": 50
  }
 ],
 "id": "overlay_7FD4E63F_4C1E_BD33_41BB_EFAFFE8E89FF",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_4DBEF719_6A8F_0E77_41D0_8E9AFCDC511C); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Quincho"
 }
},
{
 "maps": [
  {
   "yaw": 15.74,
   "hfov": 8.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_9_0_map.gif",
      "width": 16,
      "height": 23,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_9_0.png",
      "width": 246,
      "height": 360,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 15.74,
   "distance": 50
  }
 ],
 "id": "overlay_79AC6ECE_4C12_6D55_4193_56FF271E3F5E",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_4DF39759_6A8F_0EF7_41C0_B4EEE70DF4F5); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "   Pasillo"
 }
},
{
 "maps": [
  {
   "yaw": -16.63,
   "hfov": 7.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_10_0_map.gif",
      "width": 16,
      "height": 26,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_10_0.png",
      "width": 232,
      "height": 387,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -16.63,
   "distance": 50
  }
 ],
 "id": "overlay_787DA558_4C12_9F7E_41CD_56E54DDE0451",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_4C436646_6A8F_0EDD_41CB_2F6ACCBB951C); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "   Balc\u00f3n\u000dPlanta Alta"
 }
},
{
 "maps": [
  {
   "yaw": 31.67,
   "hfov": 7.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_11_0_map.gif",
      "width": 16,
      "height": 25,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_11_0.png",
      "width": 232,
      "height": 372,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.67,
   "distance": 50
  }
 ],
 "id": "overlay_7FD3A82F_4C15_94D2_41D1_10DAD6C733F7",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_4C6E96AB_6A8F_0E54_41C0_300C458AFC1E); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Quincho\u000dPlanta Alta"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 62.87,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_72507ADB_4C0F_9573_41CB_7C2C12BF575F",
 "yaw": 89.06,
 "bleaching": 0.7
},
{
 "hfov": 20.7,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.01,
 "id": "overlay_481258C5_563D_7768_4197_0EC12658EC25",
 "vfov": 30.72,
 "loop": true,
 "enabledInCardboard": true,
 "pitch": 1.62,
 "class": "VideoPanoramaOverlay",
 "useHandCursor": true,
 "roll": -0.09,
 "rotationX": -1.54,
 "image": {
  "levels": [
   {
    "url": "media/overlay_481258C5_563D_7768_4197_0EC12658EC25_t.jpg",
    "width": 540,
    "height": 800,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotationY": -0.11,
 "yaw": -47.71,
 "chromaSmoothing": 0.34,
 "chromaColor": "#35A3FF",
 "autoplay": true,
 "distance": 50,
 "blending": 0,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 540,
  "mp4Url": "media/video_4DC63883_564D_77EF_41D3_729FE9100318.mp4",
  "height": 800,
  "class": "VideoResource"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 16.54,
   "targetYaw": 92.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.23,
   "path": "shortest",
   "targetPitch": -1.76
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.57
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.82
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -0.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4BEE4626_6A8F_0E5C_41C9_9E4F65BC25DD",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.82,
   "targetYaw": -23.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 34.8,
   "path": "shortest",
   "targetPitch": -0.75
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -14.26
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 6.34
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4EF4C09B_6A8F_026B_41C8_4B4620BFA93C",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 12.43,
   "targetYaw": -38.25,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 23.96,
   "path": "shortest",
   "targetPitch": -22.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -16.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 7.85
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B793D87_6A8F_025A_41DA_3B907CB3032A",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -150.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.21
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 115.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 74.24,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.02
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": 26.29,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_75F8F044_6142_AA00_41B1_1F3BCC9A8E3D",
   "pitch": 6.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 26.29,
   "distance": 100
  }
 ],
 "id": "overlay_5F22236E_4CFD_BB52_41D0_87962539D379",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_4C686405_6A8F_025F_41D1_BB6DE434FD55, this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A); this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_4C686405_6A8F_025F_41D1_BB6DE434FD55); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info 01"
 }
},
{
 "maps": [
  {
   "yaw": 36.58,
   "hfov": 11.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.31,
   "image": "this.AnimatedImageResource_75F82045_6142_AA00_41C9_294A7BC0A459",
   "pitch": -11.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 36.58,
   "distance": 100
  }
 ],
 "id": "overlay_585CAAAF_4CF2_75D3_418F_E4020A5C57BA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": 26.33,
   "hfov": 10.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_2_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_2_0.png",
      "width": 288,
      "height": 337,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 26.33,
   "distance": 50
  }
 ],
 "id": "overlay_58E12D38_4CF7_EF3D_41B8_194A4EED7DFE",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_4D98C415_6A8F_027F_41D2_3B348FB1413D, this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A); this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_4D98C415_6A8F_027F_41D2_3B348FB1413D); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "   Apagar\u000d    Luces"
 }
},
{
 "maps": [
  {
   "yaw": 36.43,
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_3_0_map.gif",
      "width": 16,
      "height": 26,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_3_0.png",
      "width": 305,
      "height": 512,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 36.43,
   "distance": 50
  }
 ],
 "id": "overlay_7593DF4E_4DF2_AB55_41C7_FA82D656CEBF",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Living"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 60.61,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_72687B9E_4C0E_ABF2_41BB_A08C589A4291",
 "yaw": 9.42,
 "bleaching": 0.7
},
{
 "bleachingDistance": 0.4,
 "pitch": 51.31,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_729624D3_4C0E_BD72_41C0_CD73173E435F",
 "yaw": 96.85,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "yaw": 0.1,
   "hfov": 14.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_4_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.06,
   "image": "this.AnimatedImageResource_75FBD045_6142_AA00_41D2_082156A78027",
   "pitch": -34.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.1,
   "distance": 100
  }
 ],
 "id": "overlay_4BDB7184_5C93_E2EE_41C6_A55CC2B4DD75",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_4DC91461_6A8F_02D7_4181_16054007B802); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01b"
 }
},
{
 "maps": [
  {
   "yaw": -179.82,
   "hfov": 22.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_5_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_5_0.png",
      "width": 642,
      "height": 694,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.82,
   "distance": 50
  }
 ],
 "id": "overlay_4B4CD0DD_5C92_E21E_41D6_48F1A336E13E",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_4D883426_6A8F_025C_41CE_2DDB7517E69B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "     Fondo"
 }
},
{
 "maps": [
  {
   "yaw": -179.9,
   "hfov": 18.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.83,
   "image": "this.AnimatedImageResource_75FB3046_6142_AA00_41CE_EF371DD26C76",
   "pitch": -12.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.9,
   "distance": 100
  }
 ],
 "id": "overlay_4A27221C_5C97_261E_41C2_2A76CED6B5EA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_4DA80443_6A8F_02D4_41D2_8DA5864486E8); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "maps": [
  {
   "yaw": -0.15,
   "hfov": 13.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_7_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_7_0.png",
      "width": 454,
      "height": 346,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.15,
   "distance": 50
  }
 ],
 "id": "overlay_4B892B7C_5C97_E61F_41C2_D49CE49FD165",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_4DE9B482_6A8F_0255_4168_658958CEBB28); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "     Frente"
 }
},
{
 "hfov": 31.63,
 "videoVisibleOnStop": true,
 "id": "overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6",
 "vfov": 22.59,
 "loop": false,
 "enabledInCardboard": true,
 "pitch": -5.71,
 "class": "VideoPanoramaOverlay",
 "useHandCursor": true,
 "roll": 0.15,
 "yaw": -0.05,
 "image": {
  "levels": [
   {
    "url": "media/overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6_t.jpg",
    "width": 1280,
    "height": 720,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotationY": 0.2,
 "rotationX": 5.38,
 "stateChange": "if(this.overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6', [this.overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6]); } else { this.resumeGlobalAudios('overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6'); }",
 "click": "this.overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6.play()",
 "autoplay": false,
 "distance": 50,
 "blending": 0,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1144,
  "mp4Url": "media/video_6F1B8249_60DF_EE01_41BF_FD4E601538CE.mp4",
  "height": 644,
  "class": "VideoResource"
 }
},
{
 "hfov": 21,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 31.86,
   "targetYaw": -23.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 63.02,
   "path": "shortest",
   "targetPitch": -0.75
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -14.26
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 6.34
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4C978495_6A8F_027F_41D3_57A907A2C0A5",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 13.68,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 26.47,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 47.79
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_430AF997_6A8F_027C_41CC_32B45A9E1216",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 54.98,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 109.47,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -22.3
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B03DCD7_6A8F_03FC_419B_1D9A9DD097B0",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 46.13,
   "targetYaw": 3.27,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 91.68,
   "path": "shortest",
   "targetPitch": 11.81
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.31
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4C437646_6A8F_0EDD_4177_2A8C04D8C728",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 16.22,
   "targetYaw": -38.25,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 31.59,
   "path": "shortest",
   "targetPitch": -22.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -16.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 7.85
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4E53913B_6A8F_02AB_41C3_943C179E8C9E",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 16.67,
   "targetYaw": -87.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.48,
   "path": "shortest",
   "targetPitch": -3.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -30.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -19.78
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4ED6807E_6A8F_02AD_417D_2960414DAB3F",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 27.83,
   "targetYaw": 92.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 54.92,
   "path": "shortest",
   "targetPitch": -1.76
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.57
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.82
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -0.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4CEBF389_6A8F_0654_41CF_3593E74E0A44",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 24.12,
   "targetYaw": 0.75,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 47.45,
   "path": "shortest",
   "targetPitch": 8.04
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.07
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 5.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4BC73C44_6A8F_02DC_41DA_97AF43B8F2BA",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -16.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 7.85
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 36.52,
   "targetYaw": -24.62,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 72.37,
   "path": "shortest",
   "targetPitch": 27.13
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4F4D62EE_6A8F_07AD_41CB_68EC73F13B35",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 15.44,
   "targetYaw": 3.27,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 30.01,
   "path": "shortest",
   "targetPitch": 11.81
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.31
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B5156F9_6A8F_0FB7_41B9_0B2C5CA95207",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 20.07,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 39.32,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -58.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -116.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -8.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -143.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 112.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.72
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 1.63,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4BA77BEC_6A8F_05AC_41D6_07E7B4DEFE1E",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 40.95,
   "targetYaw": -24.62,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 81.27,
   "path": "shortest",
   "targetPitch": 27.13
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B19B644_6A8F_0EDC_41DA_3D6D53CB89F9",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 83.13,
   "targetYaw": -87.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 166.03,
   "path": "shortest",
   "targetPitch": -3.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -30.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -19.78
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B487737_6A8F_0EBC_41C3_30CBF78F57AE",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": -40.92,
   "hfov": 12.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.83,
   "image": "this.AnimatedImageResource_75CF105F_6142_AA01_41BB_88D1493AA187",
   "pitch": -7.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -40.92,
   "distance": 100
  }
 ],
 "id": "overlay_6BD98EFF_4C0D_AD32_41D3_178505AC51C0",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_4B5C2718_6A8F_0E75_41D3_67BC6C7B9907); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": 11.3,
   "hfov": 9.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.65,
   "image": "this.AnimatedImageResource_75CF4060_6142_AA3F_41C3_09C7491790E9",
   "pitch": -8.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 11.3,
   "distance": 50
  }
 ],
 "id": "overlay_64978149_4C12_F75E_41C0_FA527622DCC1",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70, this.camera_4B0C9683_6A8F_0E5B_41D0_F27477F61FB6); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "maps": [
  {
   "yaw": -113.86,
   "hfov": 15.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.92,
   "image": "this.AnimatedImageResource_75CE9060_6142_AA3F_41C1_63219C15BFDB",
   "pitch": -4.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -113.86,
   "distance": 100
  }
 ],
 "id": "overlay_64834E7A_4C17_ED3D_41D1_C0DF7AD568DB",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_4B2586C6_6A8F_0FDC_418A_2B13C1F23D30); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -113.66,
   "hfov": 17.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_3_0_map.gif",
      "width": 16,
      "height": 34,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_3_0.png",
      "width": 475,
      "height": 1014,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -113.66,
   "distance": 50
  }
 ],
 "id": "overlay_7D7A7CEF_4C37_ED52_41C4_A5D88A210E28",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_4B5166F9_6A8F_0FB7_41BA_495D26139A8A); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "\u000d    Balc\u00f3n"
 }
},
{
 "maps": [
  {
   "yaw": -40.92,
   "hfov": 17.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_4_0_map.gif",
      "width": 16,
      "height": 33,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_4_0.png",
      "width": 475,
      "height": 999,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -40.92,
   "distance": 50
  }
 ],
 "id": "overlay_630C59D7_4C35_B772_41AF_C1BF4A5F8B81",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_4B498737_6A8F_0EBC_41D1_124AE2D8F122); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 }
},
{
 "maps": [
  {
   "yaw": 11.68,
   "hfov": 16.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_5_0_map.gif",
      "width": 16,
      "height": 31,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_5_0.png",
      "width": 475,
      "height": 934,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 11.68,
   "distance": 50
  }
 ],
 "id": "overlay_7C27B320_4C32_F4CE_41D1_558125506B6C",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70, this.camera_4B38E6A3_6A8F_0E5B_4196_6F4085D47CBF); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "\u000d\u000d     Ba\u00f1o"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 10.36,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_72B4E25A_4C0E_9572_41CA_E94D7E32E9E4",
 "yaw": -119.71,
 "bleaching": 0.7
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 25.18,
   "targetYaw": 92.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 49.59,
   "path": "shortest",
   "targetPitch": -1.76
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.57
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.82
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -0.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_43CD095A_6A8F_02F5_41A5_585C6C13A75A",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 18.82,
   "targetYaw": -87.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.81,
   "path": "shortest",
   "targetPitch": -3.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -30.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -19.78
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4290E7FE_6A8F_0DAD_41C6_F1A8FB8C3D74",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 47.79
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 48.73,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 96.9,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -58.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -116.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -8.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -143.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 112.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.72
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 1.63,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_42CFC861_6A8F_02D4_41D3_1CF187E348D0",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 49.5,
   "targetYaw": -5.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 98.46,
   "path": "shortest",
   "targetPitch": -0.25
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4DBEC719_6A8F_0E77_41C8_EB3F75B07802",
 "restartMovementDelay": 5000
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_4FBA93BA_6A8F_05B4_41BF_C2F16BCC509D, this.albumitem_4FBAE3B9_6A8F_05B4_41B6_0F43C9B1650B); this.loopAlbum(this.playList_48083A9F_6A9D_066B_41A2_7E7A799FE5B3, 0)",
 "player": "this.viewer_uid4FBA03B9_6A8F_05B4_41CD_6C5E229C530APhotoAlbumPlayer",
 "id": "albumitem_4FBAE3B9_6A8F_05B4_41B6_0F43C9B1650B"
},
{
 "maps": [
  {
   "yaw": 160.78,
   "hfov": 19.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.68,
   "image": "this.AnimatedImageResource_75F1304D_6142_AA00_41D2_DEB7CEE79732",
   "pitch": -7.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 160.78,
   "distance": 100
  }
 ],
 "id": "overlay_5B1FF612_4C15_9CF2_41C3_BA09D573F956",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_426C5901_6A8F_0254_41D2_D713A4F62F85); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -149.48,
   "hfov": 13.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.16,
   "image": "this.AnimatedImageResource_75F1504D_6142_AA00_41CA_A3895DCD153E",
   "pitch": -8.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -149.48,
   "distance": 100
  }
 ],
 "id": "overlay_55065348_4C1F_BB5E_41C9_63BC86EB71F1",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_42AE983F_6A8F_02AB_41C0_31FA7B93809A); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": 56.4,
   "hfov": 16.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.09,
   "image": "this.AnimatedImageResource_75F1604D_6142_AA00_41D4_1193F96B91E1",
   "pitch": -14.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 56.4,
   "distance": 100
  }
 ],
 "id": "overlay_54B5B55E_4C1E_FF72_41C3_B40A23F1359D",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_43EA597A_6A8F_02B4_41B1_E11CAD4BE5B6); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -1.64,
   "hfov": 11.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.39,
   "image": "this.AnimatedImageResource_75F0B04D_6142_AA00_419B_5F01C672908F",
   "pitch": -7.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.64,
   "distance": 100
  }
 ],
 "id": "overlay_542EB355_4C1D_FB76_41B1_02C2022012E4",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_422C48C2_6A8F_03D5_41BE_AAB671BB3FEF); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -93.72,
   "hfov": 9.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.75,
   "image": "this.AnimatedImageResource_75F0C04E_6142_AA00_4190_02DDBED58C43",
   "pitch": -8.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -93.72,
   "distance": 100
  }
 ],
 "id": "overlay_5587FAC0_4C15_B54E_4192_D62E10526282",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_42EFB881_6A8F_0254_41C2_0A108077FA7E); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -70.41,
   "hfov": 9.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.83,
   "image": "this.AnimatedImageResource_75F0104E_6142_AA00_41BB_FA1822BE9E71",
   "pitch": -4.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -70.41,
   "distance": 100
  }
 ],
 "id": "overlay_55941349_4C16_7B5E_4191_A59BB4D3BEB7",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_43AD393B_6A8F_02AB_41CB_9B21B9F0BDCF); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -149.72,
   "hfov": 13.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_6_0_map.gif",
      "width": 16,
      "height": 33,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_6_0.png",
      "width": 375,
      "height": 779,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -149.72,
   "distance": 50
  }
 ],
 "id": "overlay_7A7A1CE7_4DF5_AD52_4174_090BD5F8DB5D",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_42CFE861_6A8F_02D4_4186_AD8320EDF213); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " \u000d  Cocina"
 }
},
{
 "maps": [
  {
   "yaw": 160.41,
   "hfov": 17.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_7_0_map.gif",
      "width": 15,
      "height": 21,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_7_0.png",
      "width": 498,
      "height": 672,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 160.41,
   "distance": 50
  }
 ],
 "id": "overlay_7584F74C_4DF6_BB56_41B3_F3BF279FF4AB",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_438CC91E_6A8F_026D_41C7_9C1E3A662EAE); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "     Sala"
 }
},
{
 "maps": [
  {
   "yaw": -1.56,
   "hfov": 9.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_8_0_map.gif",
      "width": 16,
      "height": 25,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_8_0.png",
      "width": 266,
      "height": 419,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.56,
   "distance": 50
  }
 ],
 "id": "overlay_72672788_4DF7_9BDE_41C1_6FF3D69969EA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_424F58E2_6A8F_03D5_4168_E7961C63258E); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Deck"
 }
},
{
 "maps": [
  {
   "yaw": -70.5,
   "hfov": 9.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_9_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_9_0.png",
      "width": 266,
      "height": 348,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -70.5,
   "distance": 50
  }
 ],
 "id": "overlay_74CC5B0D_4DF6_94D7_41AD_35EB0E985D9B",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_43CD295A_6A8F_02F5_41C0_8FF0E73A300F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Parrilla"
 }
},
{
 "maps": [
  {
   "yaw": -93.71,
   "hfov": 9.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_10_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_10_0.png",
      "width": 266,
      "height": 348,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -93.71,
   "distance": 50
  }
 ],
 "id": "overlay_756A3004_4DF5_F4D5_41C1_56A034309D7B",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_420DD8A1_6A8F_0257_41C2_9A88D762C491); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Pasillo"
 }
},
{
 "maps": [
  {
   "yaw": 56.25,
   "hfov": 14.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_11_0_map.gif",
      "width": 16,
      "height": 21,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_11_0.png",
      "width": 404,
      "height": 550,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 56.25,
   "distance": 50
  }
 ],
 "id": "overlay_74524590_4DF2_BFCD_41C2_0E8EB5134142",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_430A0997_6A8F_027C_41DA_48042C993735); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Piscinas"
 }
},
{
 "hfov": 34.36,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.02,
 "id": "overlay_776FA9DA_56DD_6918_41A6_0C121383E56A",
 "vfov": 42.4,
 "loop": true,
 "enabledInCardboard": true,
 "pitch": 1.83,
 "class": "VideoPanoramaOverlay",
 "useHandCursor": false,
 "roll": 1.74,
 "rotationX": 3.22,
 "image": {
  "levels": [
   {
    "url": "media/overlay_776FA9DA_56DD_6918_41A6_0C121383E56A_t.jpg",
    "width": 420,
    "height": 630,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotationY": 76.64,
 "yaw": 49.32,
 "chromaSmoothing": 0.4,
 "chromaColor": "#2B97FF",
 "autoplay": true,
 "distance": 50,
 "blending": 0,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 420,
  "mp4Url": "media/video_7340C746_56DD_5968_41D3_39B2A98F9F24.mp4",
  "height": 630,
  "class": "VideoResource"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 13.19,
   "targetYaw": -20.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 25.5,
   "path": "shortest",
   "targetPitch": -3.01
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 9.61
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_420DB8A1_6A8F_0257_41B2_BEB879347417",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.57
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.82
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -0.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -22.3
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77007457_503E_7113_41B9_B797530AF0B3",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 52.95,
   "targetYaw": -24.62,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 105.38,
   "path": "shortest",
   "targetPitch": 27.13
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_422C28C2_6A8F_03D5_41C5_A6FC3B2782AB",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 46.13,
   "targetYaw": 3.27,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 91.68,
   "path": "shortest",
   "targetPitch": 11.81
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.31
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4C2B3613_6A8F_0E74_41CC_528BAEC6186D",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 18.82,
   "targetYaw": -87.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.81,
   "path": "shortest",
   "targetPitch": -3.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -30.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -19.78
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_428E981E_6A8F_026D_41C0_AE4E6916BF44",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -58.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -116.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -8.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -143.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 112.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.72
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 1.63,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_771E90F9_503A_511F_41C2_B9C904B98D71",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 10.67,
   "targetYaw": -38.25,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 20.43,
   "path": "shortest",
   "targetPitch": -22.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -16.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 7.85
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_483FAEBD_6A8F_1FAC_41C3_B40BBF38D7DC",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": 71.97,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -21.54
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 108.4,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -20.29
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 172.97,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.82
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -97.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -10.49
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -37.81,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.57
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77F828FC_503E_5115_41CF_04F89C2CC876",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 61.54,
   "targetYaw": -3.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 122.64,
   "path": "shortest",
   "targetPitch": -18.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -33.1
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -36.36
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 12.88
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B5D6D4A_6A8F_02D5_41D2_4F7BCF497C25",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 24.56,
   "targetYaw": 0.75,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 48.33,
   "path": "shortest",
   "targetPitch": 8.04
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.07
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 5.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4BF08C61_6A8F_02D4_41C2_9EEC1BA36640",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 32.17,
   "targetYaw": -24.62,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 63.64,
   "path": "shortest",
   "targetPitch": 27.13
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_49DEEF83_6A8F_1E54_41C0_314D9A2F3F1F",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 33.92,
   "targetYaw": 92.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 67.14,
   "path": "shortest",
   "targetPitch": -1.76
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.57
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.82
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -0.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4D10877A_6A8F_0EB5_41D2_D000C40CE893",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 10.67,
   "targetYaw": -38.25,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 20.43,
   "path": "shortest",
   "targetPitch": -22.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -16.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 7.85
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_48587EE5_6A8F_1FDC_41CD_F725C6273EF5",
 "restartMovementDelay": 5000
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "container_4FBAB3B9_6A8F_05B4_4195_2DB1E5977314",
 "children": [
  "this.viewer_uid4FBA03B9_6A8F_05B4_41CD_6C5E229C530A",
  {
   "backgroundOpacity": 0.3,
   "layout": "vertical",
   "borderRadius": 0,
   "scrollBarWidth": 7,
   "left": 0,
   "children": [
    "this.htmltext_4FBA93BA_6A8F_05B4_41BF_C2F16BCC509D"
   ],
   "backgroundColorRatios": [],
   "scrollBarColor": "#FFFFFF",
   "right": 0,
   "paddingRight": 0,
   "gap": 10,
   "horizontalAlign": "left",
   "paddingLeft": 0,
   "borderSize": 0,
   "minHeight": 20,
   "backgroundColorDirection": "vertical",
   "bottom": 0,
   "contentOpaque": true,
   "minWidth": 20,
   "paddingBottom": 0,
   "class": "Container",
   "backgroundColor": [],
   "scrollBarOpacity": 0.5,
   "verticalAlign": "bottom",
   "scrollBarVisible": "rollOver",
   "propagateClick": false,
   "scrollBarMargin": 2,
   "overflow": "scroll",
   "shadow": false,
   "data": {
    "name": "Container12876"
   },
   "paddingTop": 0,
   "height": "30%"
  },
  "this.component_4FBDA3BB_6A8F_05B4_41C2_DF6ADF5D4F67",
  "this.component_4FBD83BB_6A8F_05B4_41A1_A61E54997CC9"
 ],
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "gap": 10,
 "width": "100%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 20,
 "contentOpaque": false,
 "minWidth": 20,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [],
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container12875"
 },
 "paddingTop": 0,
 "height": "100%"
},
{
 "movements": [
  {
   "pitchSpeed": 26.93,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 53.11,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 47.79
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4D7057DE_6A8F_0DED_416C_F35BE516C322",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 47.32,
   "targetYaw": -38.25,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 94.07,
   "path": "shortest",
   "targetPitch": -22.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -16.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 7.85
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_426C2901_6A8F_0254_41D2_4767F7BE89D6",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 33.92,
   "targetYaw": 92.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 67.14,
   "path": "shortest",
   "targetPitch": -1.76
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.57
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.82
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -0.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4D33579C_6A8F_0E6C_41CB_A8B45F16C1EB",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 66.48,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 132.58,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -22.3
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4F0D82A7_6A8F_065B_41CE_FB0941124463",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": -128.85,
   "hfov": 23.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.25,
   "image": "this.AnimatedImageResource_75C05065_6142_AA01_41AB_473A28C0DBCE",
   "pitch": -8.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -128.85,
   "distance": 100
  }
 ],
 "id": "overlay_647D9114_4C12_74F5_41CF_299D6FC64B1D",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -51.34,
   "hfov": 12.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.1,
   "image": "this.AnimatedImageResource_75C06065_6142_AA01_41D6_B62C9EBDA915",
   "pitch": -5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.34,
   "distance": 100
  }
 ],
 "id": "overlay_65D5C0C2_4C13_B54D_41C1_69BF7BCE4606",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_40C99A46_6A8F_06DD_41B4_843ABE13EA01); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": 28.54,
   "hfov": 10.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.6,
   "image": "this.AnimatedImageResource_75C38065_6142_AA01_4176_BF3EBB084396",
   "pitch": -29.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 28.54,
   "distance": 100
  }
 ],
 "id": "overlay_6610EADB_4C12_B572_419A_5D2ACB79AA0D",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_40093A7F_6A8F_06AB_41D5_14F117A5C6AC); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -128.51,
   "hfov": 32.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_3_0_map.gif",
      "width": 16,
      "height": 26,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_3_0.png",
      "width": 917,
      "height": 1518,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -128.51,
   "distance": 50
  }
 ],
 "id": "overlay_60C4A3D0_4C0F_9B4D_4194_30763AC2589E",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_4B9F0B77_6A8F_06BC_41D7_3E7B87B3CE37); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Habitaci\u00f3n\u000d     Master"
 }
},
{
 "maps": [
  {
   "yaw": 28.68,
   "hfov": 15.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_4_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_4_0.png",
      "width": 471,
      "height": 526,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 28.68,
   "distance": 50
  }
 ],
 "id": "overlay_6265BD1E_4C0E_6CF5_4194_D81FE8F9F4CD",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_4029CA9B_6A8F_066B_41D2_8E606A2CF6B1); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "     Deck\u000d"
 }
},
{
 "maps": [
  {
   "yaw": -51.32,
   "hfov": 18.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_5_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_5_0.png",
      "width": 520,
      "height": 553,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.32,
   "distance": 50
  }
 ],
 "id": "overlay_62DC11F1_4C33_F74E_41D1_2E11E02105BB",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_40E96A63_6A8F_06D4_41D8_A9F1A8625C16); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "    Quincho"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 43.27,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_72CD9B17_4C0E_74F3_4195_54A71D7C31BA",
 "yaw": -57.15,
 "bleaching": 0.7
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "maps": [
  {
   "yaw": -149.71,
   "hfov": 19.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.44,
   "image": "this.AnimatedImageResource_75C12064_6142_AA07_41D5_3D1028FAAD80",
   "pitch": -13.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -149.71,
   "distance": 100
  }
 ],
 "id": "overlay_649BC5B9_4C16_9F3F_41CE_03F1CF8B85B0",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_4FEC4289_6A8F_0657_41D1_49E855300F0C); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -149.47,
   "hfov": 21.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_1_0_map.gif",
      "width": 16,
      "height": 26,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_1_0.png",
      "width": 618,
      "height": 1026,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -149.47,
   "distance": 50
  }
 ],
 "id": "overlay_60A2EB4F_4C35_EB53_41BB_7B4C45E778F5",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_4F0D92A7_6A8F_065B_41C5_712E769AD928); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Habitaci\u00f3n\u000d     Master"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 7.35,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_0DB44A7A_4C0E_953D_41C6_712CBBF32DAF",
 "yaw": 138.05,
 "bleaching": 0.7
},
{
 "bleachingDistance": 0.4,
 "pitch": 6.85,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_0DBC62EA_4C0E_F55D_41CB_80F63DC048E7",
 "yaw": 121.21,
 "bleaching": 0.7
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 25.18,
   "targetYaw": 92.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 49.59,
   "path": "shortest",
   "targetPitch": -1.76
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.57
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.82
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -0.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_43AD093B_6A8F_02AB_41D2_5BFD236AA94D",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 47.32,
   "targetYaw": -38.25,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 94.07,
   "path": "shortest",
   "targetPitch": -22.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -16.02
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 7.85
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.97
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_438CA91E_6A8F_026D_41D8_B7AE74629BE2",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 54.36,
   "targetYaw": -24.62,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 108.22,
   "path": "shortest",
   "targetPitch": 27.13
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 16.39
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -26.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -12
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4029DA9B_6A8F_066B_41A1_6BE2EAD7D5BB",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -19.78
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -29.77,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -25.81
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -153.37,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -14.51
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 133.78,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 71.47,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -34.35
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77024918_503A_F31E_41AF_34F62C64FEBB",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -82.27,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 13.88
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 10.11
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 135.79,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 5.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 57.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 3.08
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -2.39,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4C684405_6A8F_025F_41AB_8125DAB77EFD",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 32.36,
   "targetYaw": -5.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 64.01,
   "path": "shortest",
   "targetPitch": -0.25
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4CAAD34C_6A8F_06ED_41C0_D5A7EDB62BC4",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 24.56,
   "targetYaw": 0.75,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 48.33,
   "path": "shortest",
   "targetPitch": 8.04
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.07
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 5.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.44
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.46
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_434B99D1_6A8F_05F7_41C8_E32268C88347",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 37.63,
   "targetYaw": 3.27,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 74.6,
   "path": "shortest",
   "targetPitch": 11.81
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.31
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.2
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.95
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4C8A332D_6A8F_06AC_41BA_A2931862F721",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 61.54,
   "targetYaw": -3.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 122.64,
   "path": "shortest",
   "targetPitch": -18.59
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -33.1
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -36.36
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 12.88
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B2C7D2E_6A8F_02AC_41C0_6B5E8D70B2D8",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 1.39,
   "targetYaw": -23.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 1.78,
   "path": "shortest",
   "targetPitch": -0.75
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -14.26
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 6.34
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_48020E9D_6A8F_1E6F_41C2_30604B8AEB10",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -51.88,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 0.06
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 3.33
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 142.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 1.32
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 72.48,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 2.07
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -1.38,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.97
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4D4944E2_6A8F_03D4_41D2_56FE10CB84C6",
 "restartMovementDelay": 5000
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_4FBC93BC_6A8F_05AC_41CF_B6EB4E2A989B, this.albumitem_4FBC13BB_6A8F_05B4_41D8_2863D27F5C88); this.loopAlbum(this.playList_71B32393_6A9D_067B_417C_2397D201B432, 0)",
 "player": "this.viewer_uid4FBC33BB_6A8F_05B4_41D6_8B23FF170222PhotoAlbumPlayer",
 "id": "albumitem_4FBC13BB_6A8F_05B4_41D8_2863D27F5C88"
},
{
 "movements": [
  {
   "pitchSpeed": 32.36,
   "targetYaw": -5.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 64.01,
   "path": "shortest",
   "targetPitch": -0.25
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4CCB536A_6A8F_06D5_41A1_56F0515F8008",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 9.61
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 4.75,
   "targetYaw": -5.02,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 8.54,
   "path": "shortest",
   "targetPitch": -0.25
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.96
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -17.27
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4CE2457B_6A8F_02AB_414F_2D16B59E9EB9",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 48.73,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 96.9,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -58.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -116.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -8.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -143.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 112.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.72
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 1.63,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_42D1683F_6A8F_02AB_41D8_7CD23630888E",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 54.98,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 109.47,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -22.3
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4B312CF3_6A8F_03BB_41D9_FC7B759D35DF",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 31.86,
   "targetYaw": -23.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 63.02,
   "path": "shortest",
   "targetPitch": -0.75
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -14.26
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 6.34
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4C8D24B3_6A8F_03BB_41C9_FB67758BF4AE",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "pitchSpeed": 20.07,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 39.32,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -58.66,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -11.24
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -116.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -8.98
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -143.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 112.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -5.72
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 1.63,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4BBD1BCE_6A8F_05ED_41D8_71D2C7CE4B0C",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": -95.88,
   "hfov": 10.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.13,
   "image": "this.AnimatedImageResource_75EC4038_6142_AA0F_41D8_69F657ADF6B7",
   "pitch": -12.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -95.88,
   "distance": 100
  }
 ],
 "id": "overlay_5ED98F6B_4C0D_AB52_41BB_5E21BCD4D8B3",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_4F24A41B_6A8F_026B_41D4_7B8BB4A57C84); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01c"
 }
},
{
 "maps": [
  {
   "yaw": -52.28,
   "hfov": 7.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_75EF8038_6142_AA0F_41D4_6C2F6502A8D7",
   "pitch": -2.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -52.28,
   "distance": 100
  }
 ],
 "id": "overlay_5F9E895F_4C0E_9772_41B3_12204174EBAF",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -5.58,
   "hfov": 11.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.14,
   "image": "this.AnimatedImageResource_75EFD038_6142_AA0F_41A9_15391275B1B2",
   "pitch": -4.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -5.58,
   "distance": 100
  }
 ],
 "id": "overlay_5B60547E_4C16_FD32_41BE_22924F5C4F05",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_4CCF854D_6A8F_02EC_41C3_1960D99B53B5); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -70.95,
   "hfov": 5.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.71,
   "image": "this.AnimatedImageResource_75EF1039_6142_AA01_41C2_D5FBAD6C9A91",
   "pitch": -2.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -70.95,
   "distance": 100
  }
 ],
 "id": "overlay_566EE523_4C36_FCD2_41CC_55AFAC6306BF",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_4C1A55AF_6A8F_0DAB_41D8_E1BFE6E95BC4); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -179.95,
   "hfov": 12.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.13,
   "image": "this.AnimatedImageResource_75EF2039_6142_AA01_41D2_C0004C63E88F",
   "pitch": -3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.95,
   "distance": 100
  }
 ],
 "id": "overlay_57B6F8D9_4C32_957F_41C9_13FC3BAD255B",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12, this.camera_4CA5A4E6_6A8F_03DD_41C3_47217E663B99); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -151.79,
   "hfov": 15.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.43,
   "image": "this.AnimatedImageResource_75EF7039_6142_AA01_41B1_3DDF2D736D8A",
   "pitch": 10.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -151.79,
   "distance": 100
  }
 ],
 "id": "overlay_51280201_4C33_94CF_41D1_7D4AC88DD7AC",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_4F4CC456_6A8F_02FC_41D3_B5E3800FBE00); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": -52.41,
   "hfov": 8.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_7_0_map.gif",
      "width": 15,
      "height": 25,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_7_0.png",
      "width": 239,
      "height": 377,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -52.41,
   "distance": 50
  }
 ],
 "id": "overlay_7142457C_4C12_BF36_41C3_965C22106F02",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Cocina"
 }
},
{
 "maps": [
  {
   "yaw": -5.66,
   "hfov": 11.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_8_0_map.gif",
      "width": 16,
      "height": 21,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_8_0.png",
      "width": 312,
      "height": 417,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -5.66,
   "distance": 50
  }
 ],
 "id": "overlay_701A4566_4C1D_9F52_41CB_792274DA2F65",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_4CE2657B_6A8F_02AB_41D6_33093F259969); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "  Quincho"
 }
},
{
 "maps": [
  {
   "yaw": 94.24,
   "hfov": 26.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_9_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_9_0.png",
      "width": 846,
      "height": 353,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 94.24,
   "distance": 50
  }
 ],
 "id": "overlay_70E07E84_4C1E_ADD6_41CD_C9C9E90E20AE",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_4C97B495_6A8F_027F_41CF_37BF614DBD42); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "         Comedor"
 }
},
{
 "maps": [
  {
   "yaw": -70.94,
   "hfov": 6.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_10_0_map.gif",
      "width": 16,
      "height": 33,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_10_0.png",
      "width": 190,
      "height": 401,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -70.94,
   "distance": 50
  }
 ],
 "id": "overlay_7217DE3F_4C1E_AD33_41C0_6548D05F997F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_4C3345E3_6A8F_0DD4_41B4_491FEAE5481F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Sala de\u000d   Cine"
 }
},
{
 "maps": [
  {
   "yaw": -179.95,
   "hfov": 13.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_11_0_map.gif",
      "width": 16,
      "height": 22,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_11_0.png",
      "width": 368,
      "height": 516,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.95,
   "distance": 50
  }
 ],
 "id": "overlay_73DD519A_4C1D_97F2_41D1_2DC7FD988A66",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12, this.camera_4CD8C517_6A8F_027B_41D6_E8CE08FAF3A1); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "   Calle"
 }
},
{
 "maps": [
  {
   "yaw": -151.57,
   "hfov": 15.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_12_0_map.gif",
      "width": 16,
      "height": 22,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_12_0.png",
      "width": 446,
      "height": 621,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -151.57,
   "distance": 50
  }
 ],
 "id": "overlay_72CD0D72_4C13_EF32_41C8_64D446C7AB4C",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_4F63A475_6A8F_02BF_41D3_17EBC2829A64); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Escalera\u000d Entrepiso"
 }
},
{
 "maps": [
  {
   "yaw": -95.62,
   "hfov": 11.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_13_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_13_0.png",
      "width": 318,
      "height": 181,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -95.62,
   "distance": 50
  }
 ],
 "id": "overlay_72C14259_4C15_F57E_41BB_00CEBFD195E8",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_4F58B439_6A8F_02B4_41C0_C672F584C9F5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "      Living"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 59.85,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7241E1C2_4C32_974D_4185_D8EFCA60DDB0",
 "yaw": -2.39,
 "bleaching": 0.7
},
{
 "bleachingDistance": 0.4,
 "pitch": 79.2,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_724C7981_4C32_97CE_41A2_274C4D75CE46",
 "yaw": -176.73,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "yaw": 94.52,
   "hfov": 22.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_14_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.51,
   "image": "this.AnimatedImageResource_75EFE03B_6142_AA01_41D5_157EF53FFEFA",
   "pitch": -33.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 94.52,
   "distance": 100
  }
 ],
 "id": "overlay_4BDBC122_56C5_D929_41A6_F195981DDB88",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_4C8D44B3_6A8F_03BB_41D9_9840CBF79C84); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 01b"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "container_4FBCD3BB_6A8F_05B4_41CC_0B444EA2B0AB",
 "children": [
  "this.viewer_uid4FBC33BB_6A8F_05B4_41D6_8B23FF170222",
  {
   "backgroundOpacity": 0.3,
   "layout": "vertical",
   "borderRadius": 0,
   "scrollBarWidth": 7,
   "left": 0,
   "children": [
    "this.htmltext_4FBC93BC_6A8F_05AC_41CF_B6EB4E2A989B"
   ],
   "backgroundColorRatios": [],
   "scrollBarColor": "#FFFFFF",
   "right": 0,
   "paddingRight": 0,
   "gap": 10,
   "horizontalAlign": "left",
   "paddingLeft": 0,
   "borderSize": 0,
   "minHeight": 20,
   "backgroundColorDirection": "vertical",
   "bottom": 0,
   "contentOpaque": true,
   "minWidth": 20,
   "paddingBottom": 0,
   "class": "Container",
   "backgroundColor": [],
   "scrollBarOpacity": 0.5,
   "verticalAlign": "bottom",
   "scrollBarVisible": "rollOver",
   "propagateClick": false,
   "scrollBarMargin": 2,
   "overflow": "scroll",
   "shadow": false,
   "data": {
    "name": "Container12882"
   },
   "paddingTop": 0,
   "height": "30%"
  },
  "this.component_4FBFD3BC_6A8F_05AC_41D3_F5221EC36463",
  "this.component_4FBFB3BC_6A8F_05AC_419B_F295B7B3C8E9"
 ],
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "gap": 10,
 "width": "100%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 20,
 "contentOpaque": false,
 "minWidth": 20,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [],
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "data": {
  "name": "Container12881"
 },
 "paddingTop": 0,
 "height": "100%"
},
{
 "movements": [
  {
   "pitchSpeed": 17.82,
   "targetYaw": -23.11,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 34.8,
   "path": "shortest",
   "targetPitch": -0.75
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -14.26
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 6.34
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4E1660CE_6A8F_03ED_41D9_DE772F1A7751",
 "restartMovementDelay": 5000
},
{
 "maps": [
  {
   "yaw": 53.35,
   "hfov": 18.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.75,
   "image": "this.AnimatedImageResource_75CD205D_6142_AA01_41C1_E79F256A7371",
   "pitch": -5.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 53.35,
   "distance": 100
  }
 ],
 "id": "overlay_6A014951_4C73_974F_41D3_26D53DEC980E",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4, this.camera_4B151CBA_6A8F_03B4_4191_798FB27D9A5B); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": -87.45,
   "hfov": 10.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.79,
   "image": "this.AnimatedImageResource_75CD605D_6142_AA01_41C9_F5F44EE60FD8",
   "pitch": -3.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.45,
   "distance": 100
  }
 ],
 "id": "overlay_64272CF1_4C72_6D4F_41CD_2DAE74C3F5A5",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_4B03CCD7_6A8F_03FC_41C3_D51BEEB8C0D3); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "yaw": 126.55,
   "hfov": 24.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.52,
   "image": "this.AnimatedImageResource_75CC805D_6142_AA01_41D8_5C449BB71A06",
   "pitch": -28.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 126.55,
   "distance": 100
  }
 ],
 "id": "overlay_64C8A2FD_4C0F_9537_41C5_B4AF39D9D9A8",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_4B2C6D2E_6A8F_02AC_41A7_5C86EB1F1E18); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04"
 }
},
{
 "maps": [
  {
   "yaw": 53.05,
   "hfov": 15.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_3_0_map.gif",
      "width": 16,
      "height": 36,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_3_0.png",
      "width": 430,
      "height": 989,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 53.05,
   "distance": 50
  }
 ],
 "id": "overlay_63C06466_4C0F_9D52_41C9_6732EF408B14",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Habitaci\u00f3n\u000d    Frente"
 }
},
{
 "maps": [
  {
   "yaw": 126.23,
   "hfov": 20.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_4_0_map.gif",
      "width": 16,
      "height": 24,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_4_0.png",
      "width": 623,
      "height": 968,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 126.23,
   "distance": 50
  }
 ],
 "id": "overlay_639391F7_4C0E_B732_41CC_40443DBB4B79",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_4B5A9D4A_6A8F_02D5_41D6_0D7365380E21); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "    Escalera\u000d   Entrepiso"
 }
},
{
 "maps": [
  {
   "yaw": -150.28,
   "hfov": 12.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_5_0_map.gif",
      "width": 16,
      "height": 26,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_5_0.png",
      "width": 352,
      "height": 576,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -150.28,
   "distance": 50
  }
 ],
 "id": "overlay_7E5D4DA6_4C12_6FD2_41D0_4F6C9247ADD1",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80, this.camera_4B3E6D10_6A8F_0275_41D2_0032630C209C); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Habitaci\u00f3n\u000d    Frente"
 }
},
{
 "bleachingDistance": 0.4,
 "pitch": 9.86,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7243A042_4C0F_B552_4173_029AA7306C65",
 "yaw": -76.75,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "yaw": -150.21,
   "hfov": 14.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.41,
   "image": "this.AnimatedImageResource_75CC505E_6142_AA03_41C3_F99A574AA2DA",
   "pitch": -7.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -150.21,
   "distance": 50
  }
 ],
 "id": "overlay_451124A4_5CF5_222F_41D5_399BB656DFA0",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80, this.camera_4B27CD1E_6A8F_026D_41D4_543D4EAF167B); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "maps": [
  {
   "yaw": -87.31,
   "hfov": 13.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_7_0_map.gif",
      "width": 16,
      "height": 26,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_7_0.png",
      "width": 379,
      "height": 619,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.31,
   "distance": 50
  }
 ],
 "id": "overlay_47D2F307_5CF7_27EA_41AD_74CE8DEE3970",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_4B314CF3_6A8F_03BB_41D7_04E3910A0959); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": " Habitaci\u00f3n\u000d    Master"
 }
},
{
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "pitchSpeed": 18.85,
   "targetYaw": 0,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.87,
   "path": "shortest",
   "targetPitch": 0
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -3.45
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.19
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": 47.79
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -1.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -2.7
  },
  {
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "path": "shortest",
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_491C7FC2_6A8F_1DD5_41C5_038F53049C14",
 "restartMovementDelay": 5000
},
{
 "colCount": 4,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_0_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75FA4049_6142_AA00_41D5_115D7FA7CF98",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75FD9049_6142_AA00_41C4_64FB6803FBCF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_4_0.png",
   "width": 1080,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75FD1049_6142_AA00_41D5_A835AF753E61",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_6_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75FD504A_6142_AA00_41AD_E670AD269EA6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_0_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F64057_6142_AA01_41B4_E5609EE648F3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_1_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C99057_6142_AA01_41D3_2F3D3CD80016",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_2_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C9D058_6142_AA0F_41D1_34333013D054",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_3_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C9F058_6142_AA0F_41C8_5F4615299382",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C93058_6142_AA0F_41C4_B289CE8B0738",
 "frameDuration": 41
},
{
 "playbackBarHeadShadowBlurRadius": 3,
 "id": "viewer_uid4FBE53BD_6A8F_05AC_41C4_A2CE1BAFEE43",
 "toolTipShadowSpread": 0,
 "width": "100%",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBorderColor": "#000000",
 "progressBarBorderRadius": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderRadius": 3,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 100,
 "toolTipPaddingLeft": 6,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "progressBorderRadius": 0,
 "playbackBarOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "height": "100%",
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowBlurRadius": 3,
 "progressBarOpacity": 1,
 "propagateClick": false,
 "progressBorderColor": "#FFFFFF",
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "toolTipFontFamily": "Arial",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipPaddingBottom": 4,
 "shadow": false,
 "progressBottom": 2,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressHeight": 6,
 "toolTipFontSize": "1.11vmin",
 "borderRadius": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarRight": 0,
 "toolTipTextShadowColor": "#000000",
 "progressOpacity": 1,
 "playbackBarHeadShadow": true,
 "paddingRight": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "toolTipOpacity": 1,
 "progressLeft": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarBottom": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontColor": "#606060",
 "toolTipPaddingRight": 6,
 "paddingBottom": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderColor": "#767676",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "data": {
  "name": "ViewerArea12886"
 },
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipShadowOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingTop": 0,
 "transitionMode": "blending"
},
{
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "htmltext_4FBE83BD_6A8F_05AC_41C9_9134476E35DC",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "width": "100%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "minWidth": 0,
 "class": "HTMLText",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText12889"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 5,
 "html": ""
},
{
 "cursor": "hand",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "component_4FA1D3BE_6A8F_05AC_41D6_A2E86A822736",
 "left": 10,
 "iconURL": "skin/album_left.png",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingRight": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "top": "45%",
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "data": {
  "name": "IconButton12890"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "component_4FA1B3BE_6A8F_05AC_41CE_40F6E80B64C5",
 "iconURL": "skin/album_right.png",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "right": 10,
 "paddingRight": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "top": "45%",
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, 1)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "data": {
  "name": "IconButton12891"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "class": "PhotoAlbumPlayer",
 "id": "viewer_uid4FBE53BD_6A8F_05AC_41C4_A2CE1BAFEE43PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_mobile",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D_mobile",
 "viewerArea": "this.viewer_uid4FBE53BD_6A8F_05AC_41C4_A2CE1BAFEE43"
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75FE904B_6142_AA00_41C1_0C272A8678FB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75FEB04B_6142_AA00_41D6_1DF1E420CC62",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_2_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75FEF04B_6142_AA00_41D7_47F8D4A39A4C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C0D063_6142_AA01_41D5_D06358ED5067",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_0_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75CB805A_6142_AA03_41D5_156038638883",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_1_0.png",
   "width": 1080,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75CBD05A_6142_AA03_41D5_C27C76CC96C7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_2_0.png",
   "width": 1080,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75CB105A_6142_AA03_41C2_EDC5AE617CB5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75CB205B_6142_AA01_41D6_06424871EBA5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_4_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75CB705B_6142_AA01_41D1_2C89DB2733C2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_7_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75CAC05B_6142_AA01_41B6_299C284993A7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75E56040_6142_AA00_41D0_C20BCF80F44C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75E4A040_6142_AA00_41C0_E4C3C607B6A0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75E4F040_6142_AA00_41D8_5FB116CE22E9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_3_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75E40041_6142_AA00_41D7_66A97CB88424",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75EB8033_6142_AA01_41B5_64842B1ED985",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_0_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F50051_6142_AA01_41CB_C86DF89DB571",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_1_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F55052_6142_AA03_41C1_E75FF7E2CFB7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_2_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75F49052_6142_AA03_41D2_EEBE6D133AAF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_3_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F4A052_6142_AA03_41D7_BC78C3834810",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_0_0.png",
   "width": 1080,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75E69042_6142_AA00_41D1_BB244C836120",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_2_0.png",
   "width": 1080,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75E60043_6142_AA00_41C6_BB0DBCAE43B0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75E67043_6142_AA00_41BD_FC55BB90C9E0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_0_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C21067_6142_AA01_41D4_B2A09A2FD180",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_1_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C22067_6142_AA01_41D4_58803F930106",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75F28050_6142_AA00_41D6_559AAA255AA9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_1_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F2D050_6142_AA00_41AA_90627B8A1897",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_2_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F2E050_6142_AA00_4191_8B72C048700E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C13062_6142_AA03_41CE_AEBAC82D6EBB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_1_0.png",
   "width": 1080,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75E0103E_6142_AA03_4189_7F0EEB564FBE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75E0203E_6142_AA03_4167_23A68A61F274",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_4_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75E3903E_6142_AA03_41C0_79F4985E1105",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_6_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75E3F03F_6142_AA01_4178_11FC6E7B9CCC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_8_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75E3203F_6142_AA01_41D5_EA119E648A57",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75EEB03B_6142_AA01_41D8_61A7D4549873",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75EED03B_6142_AA01_41D3_851460DA5A82",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_2_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75EEE03B_6142_AA01_41D2_6D30AED34620",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_3_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75EE203C_6142_AA07_41AF_F17CF60246BD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_8_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75E1F03D_6142_AA01_41D3_8683D49AE53F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75E23040_6142_AA7F_41C4_D38EDE9E45A4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75FA5047_6142_AA00_41A2_2F1A9D5BE271",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_2_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75FD8047_6142_AA00_419F_F28EB873CCBE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_4_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75FB5048_6142_AA00_41B1_958E9DBD2AB1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75CE4061_6142_AA01_41CA_005D32128FFD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C1B061_6142_AA01_41D3_FF01B680FEAD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_0_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F72054_6142_AA07_41D3_2D04632FD2B5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_1_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F76054_6142_AA07_41AF_2AD3A6F958EC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_2_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F68054_6142_AA07_4198_EBF1094E9562",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_3_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F45055_6142_AA01_41CE_DA7E49B2A8A7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_4_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F47055_6142_AA01_41C4_FD95038415F1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_5_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F78055_6142_AA01_41B5_258A50734517",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_0_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F8F044_6142_AA00_41B1_1F3BCC9A8E3D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F82045_6142_AA00_41C9_294A7BC0A459",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_4_0.png",
   "width": 1080,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75FBD045_6142_AA00_41D2_082156A78027",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_6_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75FB3046_6142_AA00_41CE_EF371DD26C76",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75CF105F_6142_AA01_41BB_88D1493AA187",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75CF4060_6142_AA3F_41C3_09C7491790E9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75CE9060_6142_AA3F_41C1_63219C15BFDB",
 "frameDuration": 41
},
{
 "class": "PhotoAlbumPlayer",
 "id": "viewer_uid4FBA03B9_6A8F_05B4_41CD_6C5E229C530APhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_mobile",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D_mobile",
 "viewerArea": "this.viewer_uid4FBA03B9_6A8F_05B4_41CD_6C5E229C530A"
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_0_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F1304D_6142_AA00_41D2_DEB7CEE79732",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F1504D_6142_AA00_41CA_A3895DCD153E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_2_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F1604D_6142_AA00_41D4_1193F96B91E1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_3_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F0B04D_6142_AA00_419B_5F01C672908F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_4_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F0C04E_6142_AA00_4190_02DDBED58C43",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_5_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75F0104E_6142_AA00_41BB_FA1822BE9E71",
 "frameDuration": 41
},
{
 "playbackBarHeadShadowBlurRadius": 3,
 "id": "viewer_uid4FBA03B9_6A8F_05B4_41CD_6C5E229C530A",
 "toolTipShadowSpread": 0,
 "width": "100%",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBorderColor": "#000000",
 "progressBarBorderRadius": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderRadius": 3,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 100,
 "toolTipPaddingLeft": 6,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "progressBorderRadius": 0,
 "playbackBarOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "height": "100%",
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowBlurRadius": 3,
 "progressBarOpacity": 1,
 "propagateClick": false,
 "progressBorderColor": "#FFFFFF",
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "toolTipFontFamily": "Arial",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipPaddingBottom": 4,
 "shadow": false,
 "progressBottom": 2,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressHeight": 6,
 "toolTipFontSize": "1.11vmin",
 "borderRadius": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarRight": 0,
 "toolTipTextShadowColor": "#000000",
 "progressOpacity": 1,
 "playbackBarHeadShadow": true,
 "paddingRight": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "toolTipOpacity": 1,
 "progressLeft": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarBottom": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontColor": "#606060",
 "toolTipPaddingRight": 6,
 "paddingBottom": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderColor": "#767676",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "data": {
  "name": "ViewerArea12874"
 },
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipShadowOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingTop": 0,
 "transitionMode": "blending"
},
{
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "htmltext_4FBA93BA_6A8F_05B4_41BF_C2F16BCC509D",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "width": "100%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "minWidth": 0,
 "class": "HTMLText",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText12877"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 5,
 "html": ""
},
{
 "cursor": "hand",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "component_4FBDA3BB_6A8F_05B4_41C2_DF6ADF5D4F67",
 "left": 10,
 "iconURL": "skin/album_left.png",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingRight": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "top": "45%",
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "data": {
  "name": "IconButton12878"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "component_4FBD83BB_6A8F_05B4_41A1_A61E54997CC9",
 "iconURL": "skin/album_right.png",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "right": 10,
 "paddingRight": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "top": "45%",
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, 1)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "data": {
  "name": "IconButton12879"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C05065_6142_AA01_41AB_473A28C0DBCE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_1_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C06065_6142_AA01_41D6_B62C9EBDA915",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_2_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C38065_6142_AA01_4176_BF3EBB084396",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75C12064_6142_AA07_41D5_3D1028FAAD80",
 "frameDuration": 41
},
{
 "class": "PhotoAlbumPlayer",
 "id": "viewer_uid4FBC33BB_6A8F_05B4_41D6_8B23FF170222PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_mobile",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D_mobile",
 "viewerArea": "this.viewer_uid4FBC33BB_6A8F_05B4_41D6_8B23FF170222"
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75EC4038_6142_AA0F_41D8_69F657ADF6B7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75EF8038_6142_AA0F_41D4_6C2F6502A8D7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_2_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75EFD038_6142_AA0F_41A9_15391275B1B2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75EF1039_6142_AA01_41C2_D5FBAD6C9A91",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75EF2039_6142_AA01_41D2_C0004C63E88F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_5_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75EF7039_6142_AA01_41B1_3DDF2D736D8A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_14_0.png",
   "width": 1080,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_75EFE03B_6142_AA01_41D5_157EF53FFEFA",
 "frameDuration": 41
},
{
 "playbackBarHeadShadowBlurRadius": 3,
 "id": "viewer_uid4FBC33BB_6A8F_05B4_41D6_8B23FF170222",
 "toolTipShadowSpread": 0,
 "width": "100%",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBorderColor": "#000000",
 "progressBarBorderRadius": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderRadius": 3,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 100,
 "toolTipPaddingLeft": 6,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "progressBorderRadius": 0,
 "playbackBarOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "height": "100%",
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowBlurRadius": 3,
 "progressBarOpacity": 1,
 "propagateClick": false,
 "progressBorderColor": "#FFFFFF",
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "toolTipFontFamily": "Arial",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipPaddingBottom": 4,
 "shadow": false,
 "progressBottom": 2,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressHeight": 6,
 "toolTipFontSize": "1.11vmin",
 "borderRadius": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarRight": 0,
 "toolTipTextShadowColor": "#000000",
 "progressOpacity": 1,
 "playbackBarHeadShadow": true,
 "paddingRight": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "toolTipOpacity": 1,
 "progressLeft": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarBottom": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontColor": "#606060",
 "toolTipPaddingRight": 6,
 "paddingBottom": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderColor": "#767676",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "data": {
  "name": "ViewerArea12880"
 },
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipShadowOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingTop": 0,
 "transitionMode": "blending"
},
{
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "htmltext_4FBC93BC_6A8F_05AC_41CF_B6EB4E2A989B",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "width": "100%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "minWidth": 0,
 "class": "HTMLText",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText12883"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 5,
 "html": ""
},
{
 "cursor": "hand",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "component_4FBFD3BC_6A8F_05AC_41D3_F5221EC36463",
 "left": 10,
 "iconURL": "skin/album_left.png",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingRight": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "top": "45%",
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "data": {
  "name": "IconButton12884"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "component_4FBFB3BC_6A8F_05AC_419B_F295B7B3C8E9",
 "iconURL": "skin/album_right.png",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "right": 10,
 "paddingRight": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "top": "45%",
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, 1)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "data": {
  "name": "IconButton12885"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75CD205D_6142_AA01_41C1_E79F256A7371",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75CD605D_6142_AA01_41C9_F5F44EE60FD8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_2_0.png",
   "width": 400,
   "height": 600,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75CC805D_6142_AA01_41D8_5C449BB71A06",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_6_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_75CC505E_6142_AA03_41C3_F99A574AA2DA",
 "frameDuration": 41
}],
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "vrPolyfillScale": 0.6,
 "scrollBarColor": "#000000",
 "gap": 10,
 "width": "100%",
 "children": [
  "this.MainViewer_mobile",
  "this.Image_13196006_51DA_2CB3_4191_F03898441520_mobile",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E_mobile",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055_mobile",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48_mobile",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8_mobile",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15_mobile",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7_mobile",
  "this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B_mobile"
 ],
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "registerTextVariable": function(obj){  var property = (function() { switch (obj.get('class')) { case 'Label': return 'text'; case 'Button': case 'BaseButton': return 'label'; case 'HTMLText': return 'html'; } })(); if (property == undefined) return; var re = new RegExp('\\{\\{\\s*(\\w+)\\s*\\}\\}', 'g'); var text = obj.get(property); var data = obj.get('data') || {}; data[property] = text; obj.set('data', data); var updateLabel = function(vars) { var text = data[property]; for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) { var dispatcher = dispatchers[j]; var index = dispatcher.get('selectedIndex'); if (index >= 0) { var srcPropArray = info.src.split('.'); var src = dispatcher.get('items')[index]; if(src == undefined || (info.itemCondition !== undefined && !info.itemCondition.call(this, src))) continue; for (var z = 0; z < srcPropArray.length; ++z) src = 'get' in src ? src.get(srcPropArray[z]) : src[srcPropArray[z]]; text = text.replace(info.replace, src); } } } if(text != data[property]) obj.set(property, text); }; var vars = []; var addVars = function(dispatchers, eventName, src, replace, itemCondition) { vars.push({ 'dispatchers': dispatchers, 'eventName': eventName, 'src': src, 'replace': replace, 'itemCondition': itemCondition }); }; var viewerAreaItemCondition = function(item) { var player = item.get('player'); return player !== undefined && player.get('viewerArea') == this.MainViewer; }; while (null != (result = re.exec(text))) { switch (result[1]) { case 'title': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.label', result[0], viewerAreaItemCondition); break; case 'subtitle': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.data.subtitle', result[0], viewerAreaItemCondition); break; } } if (vars.length > 0) { var func = updateLabel.bind(this, vars); for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) dispatchers[j].bind(info.eventName, func, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudios": function(onlyForeground){  var audios = window.currentGlobalAudios; var self = this; if(audios){ Object.keys(audios).forEach(function(key){ var data = audios[key]; if(!onlyForeground || (onlyForeground && !data.asBackground)) { self.stopGlobalAudio(data.audio); } }); } },
  "_initItemWithComps": function(playList, index, components, eventName, visible, effectToApply, delay, restoreStateAt){  var item = playList.get('items')[index]; var registerVisibility = restoreStateAt > 0; var rootPlayer = this.rootPlayer; var cloneEffect = function(visible) { var klass = effectToApply ? effectToApply.get('class') : undefined; var effect = undefined; switch(klass) { case 'FadeInEffect': case 'FadeOutEffect': effect = rootPlayer.createInstance(visible ? 'FadeInEffect' : 'FadeOutEffect'); break; case 'SlideInEffect': case 'SlideOutEffect': effect = rootPlayer.createInstance(visible ? 'SlideInEffect' : 'SlideOutEffect'); break; } if(effect){ effect.set('duration', effectToApply.get('duration')); effect.set('easing', effectToApply.get('easing')); if(klass.indexOf('Slide') != -1) effect.set(visible ? 'from' : 'to', effectToApply.get(visible ? 'from' : 'to')); } return effect; }; var endFunc = function() { for(var i = 0, count = components.length; i<count; ++i) { var component = components[i]; if(restoreStateAt > 0){ this.setComponentVisibility(component, !visible, 0, cloneEffect(!visible)); } else { var key = 'visibility_' + component.get('id'); if(this.existsKey(key)) { if(this.getKey(key)) this.setComponentVisibility(component, true, 0, cloneEffect(true)); else this.setComponentVisibility(component, false, 0, cloneEffect(false)); this.unregisterKey(key); } } } item.unbind('end', endFunc, this); if(addMediaEndEvent) media.unbind('end', endFunc, this); }; var stopFunc = function() { item.unbind('stop', stopFunc, this, true); item.unbind('stop', stopFunc, this); item.unbind('begin', stopFunc, this, true); item.unbind('begin', stopFunc, this); for(var i = 0, count = components.length; i<count; ++i) { this.keepCompVisible(components[i], false); } }; var addEvent = function(eventName, delay, restoreStateAt){ var changeFunc = function(){ var changeVisibility = function(component, visible, effect) { rootPlayer.setComponentVisibility(component, visible, delay, effect, visible ? 'showEffect' : 'hideEffect', false); if(restoreStateAt > 0){ var time = delay + restoreStateAt + (effect != undefined ? effect.get('duration') : 0); rootPlayer.setComponentVisibility(component, !visible, time, cloneEffect(!visible), visible ? 'hideEffect' : 'showEffect', true); } }; for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; if(visible == 'toggle'){ if(!component.get('visible')) changeVisibility(component, true, cloneEffect(true)); else changeVisibility(component, false, cloneEffect(false)); } else { changeVisibility(component, visible, cloneEffect(visible)); } } item.unbind(eventName, changeFunc, this); }; item.bind(eventName, changeFunc, this) }; if(eventName == 'begin'){ for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; this.keepCompVisible(component, true); if(registerVisibility) { var key = 'visibility_' + component.get('id'); this.registerKey(key, component.get('visible')); } } item.bind('stop', stopFunc, this, true); item.bind('stop', stopFunc, this); item.bind('begin', stopFunc, this, true); item.bind('begin', stopFunc, this); if(registerVisibility){ item.bind('end', endFunc, this); var media = item.get('media'); var addMediaEndEvent = media.get('loop') != undefined && !(media.get('loop')); if(addMediaEndEvent) media.bind('end', endFunc, this); } } else if(eventName == 'end' && restoreStateAt > 0){ addEvent('begin', restoreStateAt, 0); restoreStateAt = 0; } if(eventName != undefined) addEvent(eventName, delay, restoreStateAt); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; } return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = undefined; if(mediaDispatcher){ var playListsWithMedia = this.getPlayListsWithMedia(mediaDispatcher, true); playListDispatcher = playListsWithMedia.indexOf(playList) != -1 ? playList : (playListsWithMedia.length > 0 ? playListsWithMedia[0] : undefined); } if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } item.bind('begin', onBeginFunction, self); this.executeFunctionWhenChange(playList, index, disposeCallback);  },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudio": function(audio, endCallback, asBackground){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = {'audio': audio, 'asBackground': asBackground || false}; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "_getPlayListsWithViewer": function(viewer){  var playLists = this.getByClassName('PlayList'); var containsViewer = function(playList) { var items = playList.get('items'); for(var j=items.length-1; j>=0; --j) { var item = items[j]; var player = item.get('player'); if(player !== undefined && player.get('viewerArea') == viewer) return true; } return false; }; for(var i=playLists.length-1; i>=0; --i) { if(!containsViewer(playLists[i])) playLists.splice(i, 1); } return playLists; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getFirstPlayListWithMedia": function(media, onlySelected){  var playLists = this.getPlayListsWithMedia(media, onlySelected); return playLists.length > 0 ? playLists[0] : undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios).map(function(v) { return v.audio })); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "keepCompVisible": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData) audio = audioData.audio; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareSocial": function(socialID, url, deepLink){  if(url == undefined) { url = deepLink ? location.href : location.href.split(location.search||location.hash||/[?#]/)[0]; } else if(deepLink) { url += location.hash; } url = (function(id){ switch(id){ case 'fb': return 'https://www.facebook.com/sharer/sharer.php?u='+url; case 'wa': return 'https://api.whatsapp.com/send/?text='+encodeURIComponent(url); case 'tw': return 'https://twitter.com/intent/tweet?source=webclient&url='+url; default: return undefined; } })(socialID); this.openLink(url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setOverlayBehaviour": function(overlay, media, action, preventDoubleClick){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(preventDoubleClick){ if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 1000); } }; if(preventDoubleClick && window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getFirstPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData){ audio = audioData.audio; delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "existsKey": function(key){  return key in window; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext, true); }; playNext(); },
  "getPlayListsWithMedia": function(media, onlySelected){  var result = []; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) result.push(playList); } return result; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback, stopBackgroundAudio){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } var src = this.playGlobalAudio(audio, endCallback); if(stopBackgroundAudio === true){ var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); } return src; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } }
 },
 "paddingRight": 0,
 "start": "this.playAudioList([this.audio_40902BBE_4F98_F5B3_417E_215EADC2E939, this.audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2, this.audio_415957D2_4F99_1DF3_41B4_57B956E9370A, this.audio_4163BD09_4F99_7251_41A9_48527994202E, this.audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE, this.audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54, this.audio_40D48334_4F99_F6B7_41B6_51185E4DCB63]); this['MainViewer'] = this.MainViewer_mobile; this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_mobile], 'gyroscopeAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist]); var self = this; this.autotriggerAtStart(this.mainPlayList, function(){ self.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D_mobile.trigger('click') }, true); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_mobile].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_mobile",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 20,
 "layout": "absolute",
 "desktopMipmappingEnabled": false,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_mobile",
 "contentOpaque": false,
 "minWidth": 20,
 "paddingBottom": 0,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "downloadEnabled": false,
 "overflow": "hidden",
 "shadow": false,
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "height": "100%",
 "data": {
  "name": "Player468"
 }
};


	function HistoryData(playList) {
		this.playList = playList;
		this.list = [];
		this.pointer = -1;
	}

	HistoryData.prototype.add = function(index){
		if(this.pointer < this.list.length && this.list[this.pointer] == index) {
			return;
		}
		++this.pointer;
		this.list.splice(this.pointer, this.list.length - this.pointer, index);
	};

	HistoryData.prototype.back = function(){
		if(!this.canBack()) return;
		this.playList.set('selectedIndex', this.list[--this.pointer]);
	};

	HistoryData.prototype.forward = function(){
		if(!this.canForward()) return;
		this.playList.set('selectedIndex', this.list[++this.pointer]);
	};

	HistoryData.prototype.canBack = function(){
		return this.pointer > 0;
	};

	HistoryData.prototype.canForward = function(){
		return this.pointer >= 0 && this.pointer < this.list.length-1;
	};


	if(script.data == undefined)
		script.data = {};
	script.data["history"] = {};   

	TDV.PlayerAPI.defineScript(script);
})();
