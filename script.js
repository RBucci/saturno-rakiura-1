(function(){
    var script = {
 "start": "this.playAudioList([this.audio_40902BBE_4F98_F5B3_417E_215EADC2E939, this.audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2, this.audio_415957D2_4F99_1DF3_41B4_57B956E9370A, this.audio_4163BD09_4F99_7251_41A9_48527994202E, this.audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE, this.audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54, this.audio_40D48334_4F99_F6B7_41B6_51185E4DCB63]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); var self = this; this.autotriggerAtStart(this.mainPlayList, function(){ self.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D.trigger('click') }, true); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Image_13196006_51DA_2CB3_4191_F03898441520",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Sala de Cine - Luz Encendida",
 "hfovMin": "120%",
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
 "overlays": [
  "this.overlay_5F22236E_4CFD_BB52_41D0_87962539D379",
  "this.overlay_585CAAAF_4CF2_75D3_418F_E4020A5C57BA",
  "this.overlay_58E12D38_4CF7_EF3D_41B8_194A4EED7DFE",
  "this.overlay_7593DF4E_4DF2_AB55_41C7_FA82D656CEBF",
  "this.overlay_72687B9E_4C0E_ABF2_41BB_A08C589A4291",
  "this.overlay_729624D3_4C0E_BD72_41C0_CD73173E435F",
  "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "idleSequence": "this.sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -132.28,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4456D08A_578A_CCE1_41CC_2C55CF4270F6",
 "idleSequence": "this.sequence_4456D08A_578A_CCE1_41CC_2C55CF4270F6",
 "id": "camera_4456E089_578A_CCE3_41C8_E035C409EC0D",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 139.08,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45784FA7_578A_D42F_41D1_77597AE57525",
 "idleSequence": "this.sequence_45784FA7_578A_D42F_41D1_77597AE57525",
 "id": "camera_45787FA6_578A_D421_41B4_10D51BE10D31",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 18.21,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_43488204_578A_CFE1_41C3_05DDB394C889",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_43488204_578A_CFE1_41C3_05DDB394C889",
 "id": "camera_4348C204_578A_CFE1_41B8_F19D58173423",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.45,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_43E3819D_578A_CCE3_41C3_3974447473F9",
 "idleSequence": "this.sequence_43E3819D_578A_CCE3_41C3_3974447473F9",
 "id": "camera_43E3A19D_578A_CCE3_41C3_803C7099E225",
 "timeToIdle": 5000
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5.jpeg"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -3.52,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -18.59
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7870010A_503E_30FD_41BC_311867DA2A0C",
 "idleSequence": "this.sequence_7870010A_503E_30FD_41BC_311867DA2A0C",
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 10.36,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_42E22D3D_578A_D420_41B0_DB23335BCF4D",
 "idleSequence": "this.sequence_42E22D3D_578A_D420_41B0_DB23335BCF4D",
 "id": "camera_42E25D3D_578A_D420_41D5_DCF9D476735E",
 "timeToIdle": 5000
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 47.48,
 "class": "DirectionalPanoramaAudio",
 "pitch": -4.52,
 "maximumAngle": 166.56,
 "id": "audio_725841F7_56C7_3928_418B_5A553C889C71",
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "data": {
  "label": "water sounds"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -33.42,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45533F8B_578A_D4E7_418C_165E1AF4F4A8",
 "idleSequence": "this.sequence_45533F8B_578A_D4E7_418C_165E1AF4F4A8",
 "id": "camera_45535F8B_578A_D4E7_41AF_4C5CDEC6E880",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -49.29,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45F90EFA_578A_D420_41D2_F7615AE4E2AE",
 "idleSequence": "this.sequence_45F90EFA_578A_D420_41D2_F7615AE4E2AE",
 "id": "camera_45F92EFA_578A_D420_419E_8677FD2EDDCE",
 "timeToIdle": 5000
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_73465F18_502E_CF1D_41D3_CDAB91BFC330",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "titleFontSize": "1.29vmin",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 2,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 600,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "\u00c1lbum de Fotos",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 0,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#000000"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.container_46135390_578A_CCE1_41B5_D1DC85B48129"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [],
 "gap": 10,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "data": {
  "name": "Window10442"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "frameDisplayTime": 10000,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Calle - Entrada",
 "id": "panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
 "overlays": [
  "this.overlay_4722F8F2_5746_CFEB_41B6_CF6FB682FC5D",
  "this.overlay_472958F3_5746_CFE9_4190_A06C79E7A940",
  "this.overlay_472968F3_5746_CFE9_41C0_E4651E9C12EB",
  "this.overlay_472928F3_5746_CFE9_41D2_3453D059BC7B",
  "this.overlay_472938F3_5746_CFE9_41D3_199BB64C45DA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -2.15,
   "class": "AdjacentPanorama",
   "backwardYaw": -179.95,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": -2.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -179.95,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1_t.jpg",
 "frameTransitionTime": 3000,
 "class": "LivePanorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 68.83,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 13.57
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77024918_503A_F31E_41AF_34F62C64FEBB",
 "idleSequence": "this.sequence_77024918_503A_F31E_41AF_34F62C64FEBB",
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 123.41,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_43BD0110_578A_CDE1_418D_703F257D7842",
 "idleSequence": "this.sequence_43BD0110_578A_CDE1_418D_703F257D7842",
 "id": "camera_43BD2110_578A_CDE1_41C5_7AB1F843DE60",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -164.3,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_42210D7A_578A_D420_41D1_E16C80ABADB9",
 "idleSequence": "this.sequence_42210D7A_578A_D420_41D1_E16C80ABADB9",
 "id": "camera_42213D7A_578A_D420_418C_D6C1A86A4212",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Sala - Centro",
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
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
  "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0",
  "this.overlay_4BDBC122_56C5_D929_41A6_F195981DDB88"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  },
  {
   "yaw": 94.24,
   "class": "AdjacentPanorama",
   "backwardYaw": -127.28,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "yaw": 94.52,
   "class": "AdjacentPanorama",
   "backwardYaw": -127.28,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "yaw": -179.95,
   "class": "AdjacentPanorama",
   "backwardYaw": -2.15,
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "distance": 1
  },
  {
   "yaw": -179.95,
   "class": "AdjacentPanorama",
   "backwardYaw": -2.15,
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "distance": 1
  },
  {
   "yaw": -151.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.9,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "distance": 1
  },
  {
   "yaw": -151.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.9,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "distance": 1
  },
  {
   "yaw": -5.58,
   "class": "AdjacentPanorama",
   "backwardYaw": 160.78,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": -5.66,
   "class": "AdjacentPanorama",
   "backwardYaw": 160.78,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": -95.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 157.34,
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "distance": 1
  },
  {
   "yaw": -95.62,
   "class": "AdjacentPanorama",
   "backwardYaw": 157.34,
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 109.59,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44CAA017_578A_CBEF_41C8_CCADD8862FFF",
 "idleSequence": "this.sequence_44CAA017_578A_CBEF_41C8_CCADD8862FFF",
 "id": "camera_44CAC017_578A_CBEF_41CC_073EBA5D60EC",
 "timeToIdle": 5000
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0.jpeg"
   }
  ]
 },
 "height": 1000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Planta Alta - Estar Diario",
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
 "overlays": [
  "this.overlay_6A014951_4C73_974F_41D3_26D53DEC980E",
  "this.overlay_64272CF1_4C72_6D4F_41CD_2DAE74C3F5A5",
  "this.overlay_64C8A2FD_4C0F_9537_41C5_B4AF39D9D9A8",
  "this.overlay_63C06466_4C0F_9D52_41C9_6732EF408B14",
  "this.overlay_639391F7_4C0E_B732_41CC_40443DBB4B79",
  "this.overlay_7E5D4DA6_4C12_6FD2_41D0_4F6C9247ADD1",
  "this.overlay_7243A042_4C0F_B552_4173_029AA7306C65",
  "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 53.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 146.58,
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "distance": 1
  },
  {
   "yaw": -87.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -40.92,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "distance": 1
  },
  {
   "yaw": -87.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -40.92,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "distance": 1
  },
  {
   "yaw": 126.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -14.87,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "distance": 1
  },
  {
   "yaw": 126.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -14.87,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.36,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44DE7599_578A_D4E0_41BE_1D2FFE9AD365",
 "idleSequence": "this.sequence_44DE7599_578A_D4E0_41BE_1D2FFE9AD365",
 "id": "camera_44DE6599_578A_D4E0_41AD_FE422367522B",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Quincho",
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
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
  "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_tcap0",
  "this.overlay_776FA9DA_56DD_6918_41A6_0C121383E56A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -149.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.39,
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "distance": 1
  },
  {
   "yaw": -149.72,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.39,
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "distance": 1
  },
  {
   "yaw": -93.72,
   "class": "AdjacentPanorama",
   "backwardYaw": 88.31,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "distance": 1
  },
  {
   "yaw": -93.71,
   "class": "AdjacentPanorama",
   "backwardYaw": 88.31,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "distance": 1
  },
  {
   "yaw": -1.64,
   "class": "AdjacentPanorama",
   "backwardYaw": -21.6,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": -1.56,
   "class": "AdjacentPanorama",
   "backwardYaw": -21.6,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": -70.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 144.72,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": -70.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 144.72,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": 56.4,
   "class": "AdjacentPanorama",
   "backwardYaw": -92.35,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "distance": 1
  },
  {
   "yaw": 56.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -92.35,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "distance": 1
  },
  {
   "yaw": 160.78,
   "class": "AdjacentPanorama",
   "backwardYaw": -5.58,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": 160.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -5.58,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_725841F7_56C7_3928_418B_5A553C889C71"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_t.jpg",
 "class": "Panorama",
 "hfovMax": 120,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 92.45,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -1.76
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B",
 "idleSequence": "this.sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B",
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera",
 "timeToIdle": 5000
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19.jpeg"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 165.13,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4483CFDF_578A_D41F_41C7_84A917BC3F1C",
 "idleSequence": "this.sequence_4483CFDF_578A_D41F_41C7_84A917BC3F1C",
 "id": "camera_4483FFDF_578A_D41F_41A9_51DBA4ECDB5C",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Quincho - Parrilla",
 "hfovMin": "120%",
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
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
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 144.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -70.41,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": 144.51,
   "class": "AdjacentPanorama",
   "backwardYaw": -70.41,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": -169.64,
   "class": "AdjacentPanorama",
   "backwardYaw": -20.74,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "distance": 1
  },
  {
   "yaw": -169.76,
   "class": "AdjacentPanorama",
   "backwardYaw": -20.74,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "distance": 1
  },
  {
   "yaw": 98.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 47.72,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": 98.46,
   "class": "AdjacentPanorama",
   "backwardYaw": 47.72,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": 130.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -56.59,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "distance": 1
  },
  {
   "yaw": 130.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -56.59,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3.jpeg"
   }
  ]
 },
 "height": 1333
},
{
 "initialPosition": {
  "yaw": -2.02,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 10.18
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -49.87,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -79.01,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.71,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.1,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 154.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 90.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 26.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_camera"
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_46055394_578A_CCE1_41C7_DB44CED3E02C"
 ],
 "id": "playList_43E112E2_579B_4C20_41B0_A67A0311B817",
 "change": "this.showComponentsWhileMouseOver(this.container_46053394_578A_CCE1_41C5_FE93633D7854, [this.htmltext_4604E394_578A_CCE1_4198_5698060EF25B,this.component_4604D395_578A_CCE3_41CC_6BB65A8071C9,this.component_4604A395_578A_CCE3_41C5_76E2BD4AB8EC], 2000)"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -101.26,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_452E94FD_578A_D420_41A1_2C53275539E6",
 "idleSequence": "this.sequence_452E94FD_578A_D420_41A1_2C53275539E6",
 "id": "camera_452E84FD_578A_D420_41C5_00065BD72491",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -91.69,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_464EF897_578A_DCE0_41C8_3D5F861F7256",
 "idleSequence": "this.sequence_464EF897_578A_DCE0_41C8_3D5F861F7256",
 "id": "camera_464EE897_578A_DCE0_41CF_74B2D1B798A7",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -151.46,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44988559_578A_D460_41C2_CDD0672B6451",
 "idleSequence": "this.sequence_44988559_578A_D460_41C2_CDD0672B6451",
 "id": "camera_4498B559_578A_D460_419A_B212996445C0",
 "timeToIdle": 5000
},
{
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "class": "VideoPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -168.7,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_464623F4_578A_CC21_41D0_9750A862809E",
 "idleSequence": "this.sequence_464623F4_578A_CC21_41D0_9750A862809E",
 "id": "camera_464653F4_578A_CC21_41AF_9009710C5A4E",
 "timeToIdle": 5000
},
{
 "gyroscopeEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "class": "PanoramaPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -19.22,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_446F1B68_578A_DC21_41BC_D6A15BA6ED3F",
 "idleSequence": "this.sequence_446F1B68_578A_DC21_41BC_D6A15BA6ED3F",
 "id": "camera_446F0B68_578A_DC21_41C0_FF6664AC0092",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_13185EDD_502A_7550_41C3_AE7B43D21853",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4.jpeg"
   }
  ]
 },
 "height": 1500
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Escritorio",
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
 "overlays": [
  "this.overlay_5AB33241_4C16_F54F_419A_1A82626E06AC",
  "this.overlay_779BAA9C_4DF2_75F6_41D3_3255A4E1C04A",
  "this.overlay_724AC826_4C0D_94D2_41C0_AB29E3F1E825",
  "this.overlay_724D3C57_4C0D_ED73_41CD_8425355074D8",
  "this.overlay_7277C163_4C0D_F752_41C2_7921673C330A",
  "this.overlay_727CA71C_4C0D_FCF6_41C8_60EF23AE255E",
  "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -67.58,
   "class": "AdjacentPanorama",
   "backwardYaw": 156.31,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "yaw": -67.63,
   "class": "AdjacentPanorama",
   "backwardYaw": 156.31,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30.29,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45529A2D_578A_DC23_41CD_72CB9283E28C",
 "idleSequence": "this.sequence_45529A2D_578A_DC23_41CD_72CB9283E28C",
 "id": "camera_45528A2D_578A_DC23_4199_52378F480D57",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.1,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_444CFB31_578A_DC23_41CB_542297BBF91F",
 "idleSequence": "this.sequence_444CFB31_578A_DC23_41CB_542297BBF91F",
 "id": "camera_444CEB31_578A_DC23_41CD_29968B533882",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.61,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4657587A_578A_DC20_41CF_09DD2B33D06D",
 "idleSequence": "this.sequence_4657587A_578A_DC20_41CF_09DD2B33D06D",
 "id": "camera_4657487A_578A_DC20_41D4_795B9B3223B2",
 "timeToIdle": 5000
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_4613738F_578A_CCFF_41AD_3818F0B63EF5"
 ],
 "id": "playList_43F2D2D2_579B_4C61_41D5_D81D8AC00F2E",
 "change": "this.showComponentsWhileMouseOver(this.container_46135390_578A_CCE1_41B5_D1DC85B48129, [this.htmltext_46116390_578A_CCE1_41C6_1E9C9F5B3320,this.component_46113390_578A_CCE1_419F_01DE25364369,this.component_46110390_578A_CCE1_41C3_B368AB2105D7], 2000)"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -81.43,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44E3E5D4_578A_D460_41C8_7C1FEBB67B4E",
 "idleSequence": "this.sequence_44E3E5D4_578A_D460_41C8_7C1FEBB67B4E",
 "id": "camera_44E405D4_578A_D460_41D3_DB0DD35DF0A8",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 128.66,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_435C1C8A_578A_D4E0_41C7_D23876498261",
 "idleSequence": "this.sequence_435C1C8A_578A_D4E0_41C7_D23876498261",
 "id": "camera_435C3C8A_578A_D4E0_41D4_3A515D9B4A25",
 "timeToIdle": 5000
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18.jpeg"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 131.77,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_451D0F34_578A_D420_4183_343717811439",
 "idleSequence": "this.sequence_451D0F34_578A_D420_4183_343717811439",
 "id": "camera_451D2F34_578A_D420_41BB_C686636EB16E",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.36,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -6.86
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "idleSequence": "this.sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera",
 "timeToIdle": 5000
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2.ogg",
  "mp3Url": "media/audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2.mp3"
 },
 "data": {
  "label": "Stay With Me"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Planta Alta - Habitaci\u00f3n",
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
 "overlays": [
  "this.overlay_6A5E0209_4C0E_94DF_417D_46B9DFD108C3",
  "this.overlay_6261EA3E_4C3F_B535_41D0_801F1A3A3344",
  "this.overlay_7243A9E8_4C0E_775E_41A5_59C64522A4DF",
  "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 146.58,
   "class": "AdjacentPanorama",
   "backwardYaw": 53.35,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  },
  {
   "yaw": 146.8,
   "class": "AdjacentPanorama",
   "backwardYaw": 53.35,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -23.11,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -0.75
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.75,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 8.04
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_770D5914_503A_D315_41C7_BD98E4CD29E4",
 "idleSequence": "this.sequence_770D5914_503A_D315_41C7_BD98E4CD29E4",
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera",
 "timeToIdle": 5000
},
{
 "items": [
  {
   "media": "this.video_7340C746_56DD_5968_41D3_39B2A98F9F24",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4629A3BC_578A_CC21_41CD_1287CFE37676, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4629A3BC_578A_CC21_41CD_1287CFE37676, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4629A3BC_578A_CC21_41CD_1287CFE37676",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77007457_503E_7113_41B9_B797530AF0B3",
 "idleSequence": "this.sequence_77007457_503E_7113_41B9_B797530AF0B3",
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -151.46,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44BAA579_578A_D420_41BE_ED26FF8D3662",
 "idleSequence": "this.sequence_44BAA579_578A_D420_41BE_ED26FF8D3662",
 "id": "camera_44BAC579_578A_D420_41C7_3E643EC7471F",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Deck - Piscina",
 "hfovMin": "120%",
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38",
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
  "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_tcap0",
  "this.overlay_481258C5_563D_7768_4197_0EC12658EC25"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 31.81,
   "class": "AdjacentPanorama",
   "backwardYaw": 78.74,
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "distance": 1
  },
  {
   "yaw": 31.67,
   "class": "AdjacentPanorama",
   "backwardYaw": 78.74,
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "distance": 1
  },
  {
   "yaw": 15.7,
   "class": "AdjacentPanorama",
   "backwardYaw": 42.62,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "distance": 1
  },
  {
   "yaw": 15.74,
   "class": "AdjacentPanorama",
   "backwardYaw": 42.62,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "distance": 1
  },
  {
   "yaw": -16.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 28.54,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "distance": 1
  },
  {
   "yaw": -16.63,
   "class": "AdjacentPanorama",
   "backwardYaw": 28.54,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "distance": 1
  },
  {
   "yaw": -21.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.64,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": -21.76,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.64,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": 47.72,
   "class": "AdjacentPanorama",
   "backwardYaw": 98.57,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": 47.65,
   "class": "AdjacentPanorama",
   "backwardYaw": 98.57,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": -48.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.69,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "distance": 1
  },
  {
   "yaw": -48.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.69,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_76772C3C_56C3_6F18_41D4_7C4FB259877A"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_t.jpg",
 "class": "Panorama",
 "hfovMax": 120,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -148.19,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_429DACC6_578A_D460_41D5_5C65553F23F7",
 "idleSequence": "this.sequence_429DACC6_578A_D460_41D5_5C65553F23F7",
 "id": "camera_429DDCC6_578A_D460_41D0_5045CAC42953",
 "timeToIdle": 5000
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_camera"
  },
  {
   "media": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera"
  },
  {
   "media": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera"
  },
  {
   "media": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera"
  },
  {
   "media": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera"
  },
  {
   "media": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera"
  },
  {
   "media": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera"
  },
  {
   "media": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera"
  },
  {
   "media": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera"
  },
  {
   "media": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera"
  },
  {
   "media": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera"
  },
  {
   "media": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_camera"
  },
  {
   "media": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera"
  },
  {
   "media": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera"
  },
  {
   "media": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera"
  },
  {
   "media": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera"
  },
  {
   "media": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera"
  },
  {
   "media": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera"
  },
  {
   "media": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera"
  },
  {
   "media": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera"
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 0)",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10.jpeg"
   }
  ]
 },
 "height": 1333
},
{
 "autoplay": true,
 "loop": true,
 "yaw": -47.23,
 "class": "DirectionalPanoramaAudio",
 "pitch": -0.75,
 "maximumAngle": 359.5,
 "id": "audio_76772C3C_56C3_6F18_41D4_7C4FB259877A",
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "data": {
  "label": "water sounds"
 }
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20.jpeg"
   }
  ]
 },
 "height": 1000
},
{
 "playList": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_t.png",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "label": "\u00c1lbum de Fotos",
 "class": "PhotoAlbum"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -85.76,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45A99E87_578A_D4E0_41A4_0254D4EE2AE0",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_45A99E87_578A_D4E0_41A4_0254D4EE2AE0",
 "id": "camera_45A9BE87_578A_D4E0_41CF_794C1ECEC824",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -132.28,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_447640B2_578A_CC21_41C1_C880B3CD3019",
 "idleSequence": "this.sequence_447640B2_578A_CC21_41C1_C880B3CD3019",
 "id": "camera_447650B2_578A_CC21_41C2_8DDE05E3D9F0",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 112.42,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45BF3E49_578A_D460_41D2_F88D10CF113C",
 "idleSequence": "this.sequence_45BF3E49_578A_D460_41D2_F88D10CF113C",
 "id": "camera_45BF5E49_578A_D460_41B1_39E6922DFDB5",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 158.4,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_467A88CF_578A_DC60_41BB_A98984B7962B",
 "idleSequence": "this.sequence_467A88CF_578A_DC60_41BB_A98984B7962B",
 "id": "camera_467AB8CF_578A_DC60_41C1_C85EB6919533",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 92.55,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_450779F1_578A_DC23_41B7_AFFCC9145A31",
 "idleSequence": "this.sequence_450779F1_578A_DC23_41B7_AFFCC9145A31",
 "id": "camera_450769F1_578A_DC23_41B5_9712C87BF467",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -168.7,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_467A6411_578A_CBE3_41C2_AC1F2F8CE535",
 "idleSequence": "this.sequence_467A6411_578A_CBE3_41C2_AC1F2F8CE535",
 "id": "camera_467A9411_578A_CBE3_41C7_A93438425303",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 123.41,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_439A20E3_578A_CC27_41D5_D3E700FD1E44",
 "idleSequence": "this.sequence_439A20E3_578A_CC27_41D5_D3E700FD1E44",
 "id": "camera_4399F0DE_578A_CC61_41D0_A32792904ADA",
 "timeToIdle": 5000
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_58FCE818_5746_CE27_41D5_6E5EC77B8BFA",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "titleFontSize": "1.29vmin",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 2,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 600,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 0,
 "title": "",
 "bodyBackgroundColor": [
  "#000000"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.container_46053394_578A_CCE1_41C5_FE93633D7854"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [],
 "gap": 10,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "data": {
  "name": "Window17067"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Sala - Living",
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
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
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A"
  },
  {
   "yaw": 89.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 109.03,
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "distance": 1
  },
  {
   "yaw": 89.64,
   "class": "AdjacentPanorama",
   "backwardYaw": 109.03,
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC"
  },
  {
   "yaw": 157.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -95.88,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": 157.22,
   "class": "AdjacentPanorama",
   "backwardYaw": -95.88,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.26,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -4.74
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_455FDF7D_578A_D420_41D1_AC05B656F5C1",
 "idleSequence": "this.sequence_455FDF7D_578A_D420_41D1_AC05B656F5C1",
 "id": "camera_455FFF7D_578A_D420_41BE_0B20D5B44A02",
 "timeToIdle": 5000
},
{
 "initialPosition": {
  "yaw": 177.85,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -2.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.18,
    "pitchSpeed": 60.28,
    "easing": "cubic_in_out",
    "yawSpeed": 120.12
   },
   {
    "targetYaw": -49.87,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -79.01,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.71,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.1,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 154.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 90.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 26.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_4406EAF8_578A_DC21_41CA_5A0755C17877"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Cocina",
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
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
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 2.39,
   "class": "AdjacentPanorama",
   "backwardYaw": -149.48,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": 2.26,
   "class": "AdjacentPanorama",
   "backwardYaw": -149.48,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4"
  },
  {
   "yaw": 109.03,
   "class": "AdjacentPanorama",
   "backwardYaw": 89.87,
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "distance": 1
  },
  {
   "yaw": 109.1,
   "class": "AdjacentPanorama",
   "backwardYaw": 89.87,
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -49.29,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45C4EEDD_578A_D460_41D5_363B8F20B8A4",
 "idleSequence": "this.sequence_45C4EEDD_578A_D460_41D5_363B8F20B8A4",
 "id": "camera_45C51EDD_578A_D460_41C5_9845AA91CC95",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -59.77,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_432E477B_578A_D420_41C2_EDD00147EBD5",
 "idleSequence": "this.sequence_432E477B_578A_D420_41C2_EDD00147EBD5",
 "id": "camera_432E777B_578A_D420_41C2_2955F2BD4ED4",
 "timeToIdle": 5000
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13.jpeg"
   }
  ]
 },
 "height": 1333
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Planta Alta - Habitaci\u00f3n Master",
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
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
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -113.86,
   "class": "AdjacentPanorama",
   "backwardYaw": -128.51,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "distance": 1
  },
  {
   "yaw": -113.66,
   "class": "AdjacentPanorama",
   "backwardYaw": -128.51,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "distance": 1
  },
  {
   "yaw": -40.92,
   "class": "AdjacentPanorama",
   "backwardYaw": -87.45,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  },
  {
   "yaw": -40.92,
   "class": "AdjacentPanorama",
   "backwardYaw": -87.45,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  },
  {
   "yaw": 11.3,
   "class": "AdjacentPanorama",
   "backwardYaw": -149.71,
   "panorama": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "distance": 1
  },
  {
   "yaw": 11.68,
   "class": "AdjacentPanorama",
   "backwardYaw": -149.71,
   "panorama": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17.jpeg"
   }
  ]
 },
 "height": 1500
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.1,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_442A8B15_578A_DDE3_41B2_80FD98536D8F",
 "idleSequence": "this.sequence_442A8B15_578A_DDE3_41B2_80FD98536D8F",
 "id": "camera_442ABB15_578A_DDE3_41C3_B0EE92CC2FC8",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/video_4DC63883_564D_77EF_41D3_729FE9100318_t.jpg",
 "scaleMode": "fit_inside",
 "width": 540,
 "label": "cascada 5",
 "loop": false,
 "id": "video_4DC63883_564D_77EF_41D3_729FE9100318",
 "class": "Video",
 "height": 800,
 "video": {
  "width": 540,
  "mp4Url": "media/video_4DC63883_564D_77EF_41D3_729FE9100318.mp4",
  "class": "VideoResource",
  "height": 800
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -59.77,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_434EF799_578A_D4E0_4193_C7B35413E7AA",
 "idleSequence": "this.sequence_434EF799_578A_D4E0_4193_C7B35413E7AA",
 "id": "camera_434EE799_578A_D4E0_41A7_F66599098660",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.61,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_42D2A811_578A_DBE0_41CF_C0690B8F4FED",
 "idleSequence": "this.sequence_42D2A811_578A_DBE0_41CF_C0690B8F4FED",
 "id": "camera_42D2D811_578A_DBE0_41C4_8C78C7FDCB78",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 163.49,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_437097B8_578A_D420_41BC_1918EFC72864",
 "idleSequence": "this.sequence_437097B8_578A_D420_41BC_1918EFC72864",
 "id": "camera_4370A7B8_578A_D420_41BC_609D0A2CE29E",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Sala de Cine - Luz Tenue",
 "hfovMin": "120%",
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
 "overlays": [
  "this.overlay_5F08474E_4CFE_9B55_4162_01D050A59F50",
  "this.overlay_5829C0DD_4CF2_F576_4170_28F44FE61136",
  "this.overlay_58FADE45_4CF5_AD56_41C7_88B8A9887EBB",
  "this.overlay_752BA8F4_4DF2_F535_4196_A95C1DB42D1C",
  "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4389C6C7_578A_D460_41B6_9956DBE6EB6A",
 "idleSequence": "this.sequence_4389C6C7_578A_D460_41B6_9956DBE6EB6A",
 "id": "camera_4389F6C7_578A_D460_41B3_33B3EB0B5B9B",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44679699_578A_D4E0_41D3_E27C5303110E",
 "idleSequence": "this.sequence_44679699_578A_D4E0_41D3_E27C5303110E",
 "id": "camera_44678699_578A_D4E0_41CA_9B32FD543070",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 84.12,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_430E075E_578A_D460_41AF_BAE6A7BAB90E",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_430E075E_578A_D460_41AF_BAE6A7BAB90E",
 "id": "camera_430E375E_578A_D460_41A7_3F3516137B92",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -123.6,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45D1CEC1_578A_D460_41B9_2C820B79AEC2",
 "idleSequence": "this.sequence_45D1CEC1_578A_D460_41B9_2C820B79AEC2",
 "id": "camera_45D1EEC1_578A_D460_41CD_B093C2122595",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 128.66,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_433A0C6E_578A_D420_41A2_A4C70F4E4C9D",
 "idleSequence": "this.sequence_433A0C6E_578A_D420_41A2_A4C70F4E4C9D",
 "id": "camera_433A2C6E_578A_D420_41BF_77188A29971A",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -91.69,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4645B8B3_578A_DC20_41C7_5A1E1D9F04E0",
 "idleSequence": "this.sequence_4645B8B3_578A_DC20_41C7_5A1E1D9F04E0",
 "id": "camera_4645A8B3_578A_DC20_41C0_6A5E4978704C",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Planta Alta - Quincho con Parrilla",
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
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
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 120.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -51.34,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "distance": 1
  },
  {
   "yaw": 120.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -51.34,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "distance": 1
  },
  {
   "yaw": 78.74,
   "class": "AdjacentPanorama",
   "backwardYaw": 31.81,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": 79.08,
   "class": "AdjacentPanorama",
   "backwardYaw": 31.81,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 158.4,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_466E08EC_578A_DC20_41C7_5A65C257D150",
 "idleSequence": "this.sequence_466E08EC_578A_DC20_41C7_5A65C257D150",
 "id": "camera_466E38EC_578A_DC20_41D3_D7E0BA9CD014",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -123.6,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45DECEA4_578A_D420_41C0_6F188F6685F5",
 "idleSequence": "this.sequence_45DECEA4_578A_D420_41C0_6F188F6685F5",
 "id": "camera_45DEFEA4_578A_D420_417F_5B8C840CA34A",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -35.28,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_46628908_578A_DDE0_41D1_F6CB3AD58C1B",
 "idleSequence": "this.sequence_46628908_578A_DDE0_41D1_F6CB3AD58C1B",
 "id": "camera_4662B908_578A_DDE0_41D3_30E1C94069F5",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -85.76,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45B55E6A_578A_D420_4161_FDFD11B0A6A6",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_45B55E6A_578A_D420_4161_FDFD11B0A6A6",
 "id": "camera_45B54E6A_578A_D420_41B1_4501A49672AB",
 "timeToIdle": 5000
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21.jpeg"
   }
  ]
 },
 "height": 1333
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "class": "DirectionalPanoramaAudio",
 "pitch": 0,
 "maximumAngle": 359.5,
 "id": "audio_752C77BB_56FE_D91F_41CF_669E0C980F8D",
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "data": {
  "label": "water sounds"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 52.72,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44C41ABE_578A_DC21_41C3_BB9CB057FFF2",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_44C41ABE_578A_DC21_41C3_BB9CB057FFF2",
 "id": "camera_44C40ABE_578A_DC21_41D5_6DD296AA9265",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -137.38,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4552D51C_578A_D5E0_41CC_0B92701B0EAB",
 "idleSequence": "this.sequence_4552D51C_578A_D5E0_41CC_0B92701B0EAB",
 "id": "camera_4552C51C_578A_D5E0_41D0_3A46470391B0",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.36,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -6.86
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45062F50_578A_D460_41C9_0BB76E4D34CD",
 "idleSequence": "this.sequence_45062F50_578A_D460_41C9_0BB76E4D34CD",
 "id": "camera_45065F50_578A_D460_41A2_1BA004FB3DE9",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 86.28,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_42BE5CE3_578A_D420_41AC_9A7F4780B996",
 "idleSequence": "this.sequence_42BE5CE3_578A_D420_41AC_9A7F4780B996",
 "id": "camera_42BE4CE3_578A_D420_41AB_49E8F3C564F9",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.42,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45CA999C_578A_DCE1_4192_2C13E3B2964A",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_45CA999C_578A_DCE1_4192_2C13E3B2964A",
 "id": "camera_45CA899C_578A_DCE1_41D0_AF705A6117E4",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Balc\u00f3n - Habitaci\u00f3n Master",
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
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
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -51.34,
   "class": "AdjacentPanorama",
   "backwardYaw": 120.23,
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "distance": 1
  },
  {
   "yaw": -51.32,
   "class": "AdjacentPanorama",
   "backwardYaw": 120.23,
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "distance": 1
  },
  {
   "yaw": 28.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -16.51,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": 28.68,
   "class": "AdjacentPanorama",
   "backwardYaw": -16.51,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4"
  },
  {
   "yaw": -128.51,
   "class": "AdjacentPanorama",
   "backwardYaw": -113.86,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.45,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_432671E7_578A_CC2F_41B7_EE6285D0BA57",
 "idleSequence": "this.sequence_432671E7_578A_CC2F_41B7_EE6285D0BA57",
 "id": "camera_432681E7_578A_CC2F_41D2_43E105A0BDF3",
 "timeToIdle": 5000
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_415957D2_4F99_1DF3_41B4_57B956E9370A",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_415957D2_4F99_1DF3_41B4_57B956E9370A.ogg",
  "mp3Url": "media/audio_415957D2_4F99_1DF3_41B4_57B956E9370A.mp3"
 },
 "data": {
  "label": "5158598_summer-night-piano-dreaming_by_pablikmm"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.27,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 11.81
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "idleSequence": "this.sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -44.08,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_428C6243_578A_CC67_41C9_3CCE43631C93",
 "idleSequence": "this.sequence_428C6243_578A_CC67_41C9_3CCE43631C93",
 "id": "camera_428C8243_578A_CC67_41C4_15F72CE3750D",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.26,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44110051_578A_CC63_41CB_2B2ACE3A350A",
 "idleSequence": "this.sequence_44110051_578A_CC63_41CB_2B2ACE3A350A",
 "id": "camera_44111051_578A_CC63_41C5_5EA09B2243C4",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 92.55,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_452DBA0E_578A_DFE1_41BC_431F1C5EC214",
 "idleSequence": "this.sequence_452DBA0E_578A_DFE1_41BC_431F1C5EC214",
 "id": "camera_452DAA0E_578A_DFE1_41A6_4AF09C232870",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -19.22,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4391FB94_578A_DCE1_41C6_691447DC7C49",
 "idleSequence": "this.sequence_4391FB94_578A_DCE1_41C6_691447DC7C49",
 "id": "camera_43921B94_578A_DCE1_41C0_689CAB0A5361",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Sala - Comedor",
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
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
  "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -161.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 6.63,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "distance": 1
  },
  {
   "yaw": -161.77,
   "class": "AdjacentPanorama",
   "backwardYaw": 6.63,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "distance": 1
  },
  {
   "yaw": 156.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -67.58,
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "distance": 1
  },
  {
   "yaw": 156.28,
   "class": "AdjacentPanorama",
   "backwardYaw": -67.58,
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC"
  },
  {
   "yaw": -127.28,
   "class": "AdjacentPanorama",
   "backwardYaw": 94.24,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": -127.19,
   "class": "AdjacentPanorama",
   "backwardYaw": 94.24,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9.jpeg"
   }
  ]
 },
 "height": 1500
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 165.13,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44A87FFB_578A_D427_41BF_D34E12A8DDE1",
 "idleSequence": "this.sequence_44A87FFB_578A_D427_41BF_D34E12A8DDE1",
 "id": "camera_44A86FFB_578A_D427_41D0_E42C063CD8F2",
 "timeToIdle": 5000
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2.jpeg"
   }
  ]
 },
 "height": 1500
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.26,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -4.74
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_771E9E9F_503A_3113_41CE_5824E21E1360",
 "idleSequence": "this.sequence_771E9E9F_503A_3113_41CE_5824E21E1360",
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -22.66,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_43B61BC1_578A_DC60_41C7_CB29DABBB665",
 "idleSequence": "this.sequence_43B61BC1_578A_DC60_41C7_CB29DABBB665",
 "id": "camera_43B62BC1_578A_DC60_41B5_284148B1CB99",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Escalera - Entrepiso",
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
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
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -14.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 126.55,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  },
  {
   "yaw": 16.16,
   "class": "AdjacentPanorama",
   "backwardYaw": 126.55,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  },
  {
   "yaw": -14.82,
   "class": "AdjacentPanorama",
   "backwardYaw": 126.55,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12"
  },
  {
   "yaw": 6.63,
   "class": "AdjacentPanorama",
   "backwardYaw": -161.79,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "yaw": 6.64,
   "class": "AdjacentPanorama",
   "backwardYaw": -161.79,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383"
  },
  {
   "yaw": -6.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -151.79,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": -6.95,
   "class": "AdjacentPanorama",
   "backwardYaw": -151.79,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30.52,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_466A942E_578A_D420_41CB_9AE09759B560",
 "idleSequence": "this.sequence_466A942E_578A_D420_41CB_9AE09759B560",
 "id": "camera_466A842E_578A_D420_41D0_0BE34DA3212A",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -126.65,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45E984C0_578A_D460_41D1_7D63369BBB7E",
 "idleSequence": "this.sequence_45E984C0_578A_D460_41D1_7D63369BBB7E",
 "id": "camera_45E9A4C0_578A_D460_41D3_887E3945B162",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -81.43,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4403D607_578A_D7E0_41B8_FC37F728E434",
 "idleSequence": "this.sequence_4403D607_578A_D7E0_41B8_FC37F728E434",
 "id": "camera_4403C607_578A_D7E0_4183_B2C95E98C249",
 "timeToIdle": 5000
},
{
 "items": [
  {
   "media": "this.video_4DC63883_564D_77EF_41D3_729FE9100318",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4629C3BC_578A_CC21_41D4_7FEA3F9152B6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4629C3BC_578A_CC21_41D4_7FEA3F9152B6, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4629C3BC_578A_CC21_41D4_7FEA3F9152B6",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 131.77,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45EBCF16_578A_D5E0_41BA_6F2543E83241",
 "idleSequence": "this.sequence_45EBCF16_578A_D5E0_41BA_6F2543E83241",
 "id": "camera_45EBFF16_578A_D5E0_41CD_5797C2414326",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -126.65,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45C634A4_578A_D420_41C4_873B0F8C8308",
 "idleSequence": "this.sequence_45C634A4_578A_D420_41C4_873B0F8C8308",
 "id": "camera_45C624A4_578A_D420_41C6_2027EFC6D53F",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/video_7340C746_56DD_5968_41D3_39B2A98F9F24_t.jpg",
 "scaleMode": "fit_inside",
 "width": 420,
 "label": "cut for paste 5",
 "loop": false,
 "id": "video_7340C746_56DD_5968_41D3_39B2A98F9F24",
 "class": "Video",
 "height": 630,
 "video": {
  "width": 420,
  "mp4Url": "media/video_7340C746_56DD_5968_41D3_39B2A98F9F24.mp4",
  "class": "VideoResource",
  "height": 630
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90.13,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45BEC468_578A_D420_41CB_CBAD5F2490A6",
 "idleSequence": "this.sequence_45BEC468_578A_D420_41CB_CBAD5F2490A6",
 "id": "camera_45BEF468_578A_D420_41D3_EA72EF273011",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.36,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -6.86
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_453BAF5F_578A_D460_41CE_E9FFA8CEECD2",
 "idleSequence": "this.sequence_453BAF5F_578A_D460_41CE_E9FFA8CEECD2",
 "id": "camera_453BDF5F_578A_D460_41D5_88A7AA9747C2",
 "timeToIdle": 5000
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11.jpeg"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30.29,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45777A4A_578A_DC61_41D0_179DDF86C098",
 "idleSequence": "this.sequence_45777A4A_578A_DC61_41D0_179DDF86C098",
 "id": "camera_45776A4A_578A_DC61_41D1_CBBDB7FC0B77",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "idleSequence": "this.sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 139.08,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_449EDFC3_578A_D467_41AB_2872141DFE3E",
 "idleSequence": "this.sequence_449EDFC3_578A_D467_41AB_2872141DFE3E",
 "id": "camera_449ECFC3_578A_D467_41D5_3E6EA2C4E426",
 "timeToIdle": 5000
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8.jpeg"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.84,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_43F8DC20_578A_D420_41D5_5EF037670877",
 "idleSequence": "this.sequence_43F8DC20_578A_D420_41D5_5EF037670877",
 "id": "camera_43F8CC20_578A_D420_41D0_8BF4EEADB0C2",
 "timeToIdle": 5000
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54.ogg",
  "mp3Url": "media/audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54.mp3"
 },
 "data": {
  "label": "Summer Uplifting Energetic Fun Upbeat Funky Pop (Full)"
 }
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1.jpeg"
   }
  ]
 },
 "height": 2667
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16.jpeg"
   }
  ]
 },
 "height": 1126
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6.jpeg"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 9.55,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -33.91
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77F828FC_503E_5115_41CF_04F89C2CC876",
 "idleSequence": "this.sequence_77F828FC_503E_5115_41CF_04F89C2CC876",
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera",
 "timeToIdle": 5000
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7.jpeg"
   }
  ]
 },
 "height": 1333
},
{
 "thumbnailUrl": "media/video_76BF82AE_56C2_FB39_41D0_DF287E74780C_t.jpg",
 "scaleMode": "fit_inside",
 "width": 466,
 "label": "cascada toma piscinas",
 "loop": false,
 "id": "video_76BF82AE_56C2_FB39_41D0_DF287E74780C",
 "class": "Video",
 "height": 690,
 "video": {
  "width": 466,
  "mp4Url": "media/video_76BF82AE_56C2_FB39_41D0_DF287E74780C.mp4",
  "class": "VideoResource",
  "height": 690
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.45,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4305A1CA_578A_CC61_41C8_0D0C74184EE1",
 "idleSequence": "this.sequence_4305A1CA_578A_CC61_41C8_0D0C74184EE1",
 "id": "camera_4305B1CA_578A_CC61_41C2_814D7F56D9E9",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.26,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -4.74
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_452E1F6E_578A_D420_41A7_FD35DBEB7A80",
 "idleSequence": "this.sequence_452E1F6E_578A_D420_41A7_FD35DBEB7A80",
 "id": "camera_452E3F6E_578A_D420_41C2_C7A7F5C38689",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.65,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45B3995F_578A_DC1F_41D0_3B0597D1D5DE",
 "idleSequence": "this.sequence_45B3995F_578A_DC1F_41D0_3B0597D1D5DE",
 "id": "camera_45B3895F_578A_DC1F_41CE_25379369983A",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -137.38,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4574E53B_578A_D420_41CB_B0BBC3D60ECF",
 "idleSequence": "this.sequence_4574E53B_578A_D420_41CB_B0BBC3D60ECF",
 "id": "camera_4575053B_578A_D420_41BE_EBC1D76BE84F",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.65,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4588C941_578A_DC63_41C3_C2E2043D1FAC",
 "idleSequence": "this.sequence_4588C941_578A_DC63_41C3_C2E2043D1FAC",
 "id": "camera_4588F941_578A_DC63_41D4_72C055117B2A",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_771E90F9_503A_511F_41C2_B9C904B98D71",
 "idleSequence": "this.sequence_771E90F9_503A_511F_41C2_B9C904B98D71",
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.31,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4447066A_578A_D420_41C7_F05BA9612247",
 "idleSequence": "this.sequence_4447066A_578A_D420_41C7_F05BA9612247",
 "id": "camera_4447266A_578A_D420_41C6_04A0D3728710",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 28.21,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_42CE327F_578A_CC1F_41CF_36716D515C8D",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_42CE327F_578A_CC1F_41CF_36716D515C8D",
 "id": "camera_42CE427F_578A_CC1F_41CA_34CDAC0F9FCB",
 "timeToIdle": 5000
},
{
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 52.72,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44DFBAA2_578A_DC21_41D0_1AB02F0A4A11",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_44DFBAA2_578A_DC21_41D0_1AB02F0A4A11",
 "id": "camera_44DFAAA2_578A_DC21_41A7_83AF912B1235",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 66.14,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_42B1E7F3_578A_D420_41C5_2E0C4D376159",
 "idleSequence": "this.sequence_42B1E7F3_578A_D420_41C5_2E0C4D376159",
 "id": "camera_42B207F3_578A_D420_41D3_DAE7A390ADDE",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.05,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44998A68_578A_DC21_41AF_5774349BCF55",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_44998A68_578A_DC21_41AF_5774349BCF55",
 "id": "camera_4499AA68_578A_DC21_41B2_8A8D32FAD677",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 163.49,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_429067D6_578A_D460_41D1_91B1B372F3A3",
 "idleSequence": "this.sequence_429067D6_578A_D460_41D1_91B1B372F3A3",
 "id": "camera_429087D5_578A_D460_41C5_ABF50A8DF60D",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 86.28,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_42DFBD00_578A_D5E0_41C6_861BE5DE6D40",
 "idleSequence": "this.sequence_42DFBD00_578A_D5E0_41C6_861BE5DE6D40",
 "id": "camera_42DFAD00_578A_D5E0_41B0_168A044B620A",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -148.19,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_437C3CA8_578A_D420_41D4_3F85443D0A7D",
 "idleSequence": "this.sequence_437C3CA8_578A_D420_41D4_3F85443D0A7D",
 "id": "camera_437C2CA8_578A_D420_41CD_DAA76409E715",
 "timeToIdle": 5000
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_4163BD09_4F99_7251_41A9_48527994202E",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_4163BD09_4F99_7251_41A9_48527994202E.ogg",
  "mp3Url": "media/audio_4163BD09_4F99_7251_41A9_48527994202E.mp3"
 },
 "data": {
  "label": "Summer Trip-Hop (2016)"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_camera"
  },
  {
   "media": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera"
  },
  {
   "media": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera"
  },
  {
   "media": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera"
  },
  {
   "media": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera"
  },
  {
   "media": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera"
  },
  {
   "media": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera"
  },
  {
   "media": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera"
  },
  {
   "media": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera"
  },
  {
   "media": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera"
  },
  {
   "media": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera"
  },
  {
   "media": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_camera"
  },
  {
   "media": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera"
  },
  {
   "media": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera"
  },
  {
   "media": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera"
  },
  {
   "media": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera"
  },
  {
   "media": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera"
  },
  {
   "media": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera"
  },
  {
   "media": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera"
  },
  {
   "media": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera"
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 109.59,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44ECF035_578A_CC23_4195_5282767BC37D",
 "idleSequence": "this.sequence_44ECF035_578A_CC23_4195_5282767BC37D",
 "id": "camera_44ED0035_578A_CC23_41B0_5860FA2710EC",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.05,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44BD2A86_578A_DCE1_41C8_BF2D5AC40948",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_44BD2A86_578A_DCE1_41C8_BF2D5AC40948",
 "id": "camera_44BD5A86_578A_DCE1_41D4_EDA7A6353F52",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.26,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4433606D_578A_CC23_4193_91E1CAE52D63",
 "idleSequence": "this.sequence_4433606D_578A_CC23_4193_91E1CAE52D63",
 "id": "camera_4433706D_578A_CC23_41B3_B09117043EC9",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ba\u00f1o - Habitaci\u00f3n Master",
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
 "overlays": [
  "this.overlay_649BC5B9_4C16_9F3F_41CE_03F1CF8B85B0",
  "this.overlay_60A2EB4F_4C35_EB53_41BB_7B4C45E778F5",
  "this.overlay_0DB44A7A_4C0E_953D_41C6_712CBBF32DAF",
  "this.overlay_0DBC62EA_4C0E_F55D_41CB_80F63DC048E7",
  "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -149.71,
   "class": "AdjacentPanorama",
   "backwardYaw": 11.3,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "distance": 1
  },
  {
   "yaw": -149.47,
   "class": "AdjacentPanorama",
   "backwardYaw": 11.3,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE.ogg",
  "mp3Url": "media/audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE.mp3"
 },
 "data": {
  "label": "12343287"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 84.12,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_43EC4740_578A_D460_41A9_E9B1BE6DE4CC",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_43EC4740_578A_D460_41A9_E9B1BE6DE4CC",
 "id": "camera_43EC7740_578A_D460_41A1_D84848B21DAF",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -87.68,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -3.27
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "idleSequence": "this.sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera",
 "timeToIdle": 5000
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15.jpg"
   }
  ]
 },
 "height": 1372
},
{
 "initialPosition": {
  "yaw": 177.85,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -2.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.18,
    "pitchSpeed": 60.28,
    "easing": "cubic_in_out",
    "yawSpeed": 120.12
   },
   {
    "targetYaw": -49.87,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -79.01,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.71,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.1,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 154.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 90.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 26.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_44E59ADB_578A_DC67_41AE_8C31F37F3C45"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 51.49,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45F609B8_578A_DC21_418E_A223F7A95A53",
 "idleSequence": "this.sequence_45F609B8_578A_DC21_418E_A223F7A95A53",
 "id": "camera_45F639B8_578A_DC21_41B4_56F6524978FD",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -70.97,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_43CC7722_578A_D420_41AA_8514885A4C2A",
 "idleSequence": "this.sequence_43CC7722_578A_D420_41AA_8514885A4C2A",
 "id": "camera_43CC9722_578A_D420_4171_55A8D72C6C54",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 112.42,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_458A5E2A_578A_D420_41D0_F7D89EE239E2",
 "idleSequence": "this.sequence_458A5E2A_578A_D420_41D0_F7D89EE239E2",
 "id": "camera_458A4E2A_578A_D420_41D5_A0E9CC383219",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -173.37,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4593DE0B_578A_D7E0_41D5_B5841E71A5CC",
 "idleSequence": "this.sequence_4593DE0B_578A_D7E0_41D5_B5841E71A5CC",
 "id": "camera_4593CE0B_578A_D7E0_41B2_D050459611D5",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30.52,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4597944B_578A_D460_41CD_97778AFA5045",
 "idleSequence": "this.sequence_4597944B_578A_D460_41CD_97778AFA5045",
 "id": "camera_4597844B_578A_D460_41D0_4792E2684E75",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -23.69,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_43C2D16F_578A_CC3F_41A8_71EBB539924E",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_43C2D16F_578A_CC3F_41A8_71EBB539924E",
 "id": "camera_43C2E16F_578A_CC3F_41D4_31C3832D7D77",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -164.3,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4201ED5A_578A_D460_41D3_85249648CF2A",
 "idleSequence": "this.sequence_4201ED5A_578A_D460_41D3_85249648CF2A",
 "id": "camera_42021D5A_578A_D460_41C2_4F634E337D0A",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 18.21,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4369C220_578A_CC21_41B1_94D3AC7B98D0",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_4369C220_578A_CC21_41B1_94D3AC7B98D0",
 "id": "camera_4369E220_578A_CC21_41C3_1AE6627088BA",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 4.27,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 8.04
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C",
 "idleSequence": "this.sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C",
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.42,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45DFC97F_578A_DC1F_41CF_D477AAAB81CE",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_45DFC97F_578A_DC1F_41CF_D477AAAB81CE",
 "id": "camera_45DFF97F_578A_DC1F_4182_44B3999A038E",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -23.69,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_43A1813E_578A_CC21_41BD_D29842246872",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_43A1813E_578A_CC21_41BD_D29842246872",
 "id": "camera_43A1913E_578A_CC21_41D4_00DDC90C17AE",
 "timeToIdle": 5000
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_589E2836_5746_CE6B_41AD_BBAC5BB986BB",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "titleFontSize": "1.29vmin",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 2,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 600,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 0,
 "title": "",
 "bodyBackgroundColor": [
  "#000000"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 20,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.container_46045395_578A_CCE3_41C9_92F7F2A7E658"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [],
 "gap": 10,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "data": {
  "name": "Window17928"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -24.62,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 27.13
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8",
 "idleSequence": "this.sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8",
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 28.21,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_42AC7262_578A_CC21_4168_ADA865C6F81D",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_42AC7262_578A_CC21_4168_ADA865C6F81D",
 "id": "camera_42AC8262_578A_CC21_41B1_42BF2F08975C",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -101.26,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_450C04DC_578A_D460_41C9_C86F1119A674",
 "idleSequence": "this.sequence_450C04DC_578A_D460_41C9_C86F1119A674",
 "id": "camera_450C34DC_578A_D460_41BC_D2F068FBA742",
 "timeToIdle": 5000
},
{
 "items": [
  {
   "media": "this.video_76BF82AE_56C2_FB39_41D0_DF287E74780C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4629D3BC_578A_CC21_419A_3C8CBA4326CA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4629D3BC_578A_CC21_419A_3C8CBA4326CA, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4629D3BC_578A_CC21_419A_3C8CBA4326CA",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -20.1,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -3.01
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "idleSequence": "this.sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera",
 "timeToIdle": 5000
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_40D48334_4F99_F6B7_41B6_51185E4DCB63",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_40D48334_4F99_F6B7_41B6_51185E4DCB63.ogg",
  "mp3Url": "media/audio_40D48334_4F99_F6B7_41B6_51185E4DCB63.mp3"
 },
 "data": {
  "label": "Sunday Walk (Full)"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90.13,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_45A38486_578A_D4E0_41C8_C15A7DCA8580",
 "idleSequence": "this.sequence_45A38486_578A_D4E0_41C8_C15A7DCA8580",
 "id": "camera_45A3B486_578A_D4E0_41C6_8A93AF2B1A76",
 "timeToIdle": 5000
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12",
 "width": 2000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12.jpeg"
   }
  ]
 },
 "height": 1333
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_46046395_578A_CCE3_41CA_8920B223FE26"
 ],
 "id": "playList_43E0A2E2_579B_4C20_41CD_71EE4266106A",
 "change": "this.showComponentsWhileMouseOver(this.container_46045395_578A_CCE3_41C9_92F7F2A7E658, [this.htmltext_46040396_578A_CCE1_41B2_5781C90FF532,this.component_4603C396_578A_CCE1_41CA_725A0E005936,this.component_4603D396_578A_CCE1_41BB_3765BF97F247], 2000)"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -5.02,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -0.25
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7703348F_503A_71F2_41B8_C8F2687D9078",
 "idleSequence": "this.sequence_7703348F_503A_71F2_41B8_C8F2687D9078",
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.36,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_44C095B6_578A_D420_41CC_94699FD4CA9D",
 "idleSequence": "this.sequence_44C095B6_578A_D420_41CC_94699FD4CA9D",
 "id": "camera_44C085B6_578A_D420_41C7_9E25B1424A93",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -22.66,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_43D6BBF4_578A_DC20_41C3_C3E1BC3245AC",
 "idleSequence": "this.sequence_43D6BBF4_578A_DC20_41C3_C3E1BC3245AC",
 "id": "camera_43D6DBF4_578A_DC20_41BF_870D0660F9EC",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -35.28,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4595B925_578A_DC20_4192_FA84C902F5C0",
 "idleSequence": "this.sequence_4595B925_578A_DC20_4192_FA84C902F5C0",
 "id": "camera_4595A925_578A_DC20_41D4_B2895DC642CB",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 51.49,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_451EF9D5_578A_DC63_41D0_409396700B71",
 "idleSequence": "this.sequence_451EF9D5_578A_DC63_41D0_409396700B71",
 "id": "camera_451EE9D5_578A_DC63_41D3_56F6DC67EE4F",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Quincho - Piscinas",
 "hfovMin": "120%",
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
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
  "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_tcap0",
  "this.overlay_779DF13E_56C3_3919_41A5_CE0412598D4D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  },
  {
   "yaw": -92.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 56.4,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": -92.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 56.4,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7"
  },
  {
   "yaw": -56.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 130.71,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": -56.45,
   "class": "AdjacentPanorama",
   "backwardYaw": 130.71,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": -0.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -48.23,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": -0.52,
   "class": "AdjacentPanorama",
   "backwardYaw": -48.23,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_752C77BB_56FE_D91F_41CF_669E0C980F8D"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_t.jpg",
 "class": "Panorama",
 "hfovMax": 120,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -38.25,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -22.96
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Pasillo Acceso a Parrilla",
 "hfovMin": "120%",
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
 "overlays": [
  "this.overlay_55BD891B_4C12_F4F2_41BF_BD7A099FA4FB",
  "this.overlay_569D5C53_4C13_ED72_41C5_56F2E1168FED",
  "this.overlay_55344675_4C12_7D37_41CA_0C7A84DACAAA",
  "this.overlay_79858F87_4C0D_ABD3_41C2_6BD4B90B4286",
  "this.overlay_7A5E25AC_4C0D_9FD5_41A7_29C3FBE038B8",
  "this.overlay_7ABCF3A7_4DF3_FBD3_41D0_D18E2BE7D6F6",
  "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 88.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -93.72,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": 88.14,
   "class": "AdjacentPanorama",
   "backwardYaw": -93.72,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": -20.74,
   "class": "AdjacentPanorama",
   "backwardYaw": -169.64,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": -20.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -169.64,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": 42.62,
   "class": "AdjacentPanorama",
   "backwardYaw": 15.7,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": 42.63,
   "class": "AdjacentPanorama",
   "backwardYaw": 15.7,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4319CC52_578A_D460_41D1_8CF3AEB83067",
 "idleSequence": "this.sequence_4319CC52_578A_D460_41D1_8CF3AEB83067",
 "id": "camera_4319EC52_578A_D460_41D4_EAE191AE7425",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -70.97,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_43AA56FB_578A_D420_41CF_75013B97A553",
 "idleSequence": "this.sequence_43AA56FB_578A_D420_41CF_75013B97A553",
 "id": "camera_43AA46FB_578A_D420_41D1_14CF7B519FD4",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.31,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_4424B636_578A_D420_41D5_56EA130DF46A",
 "idleSequence": "this.sequence_4424B636_578A_D420_41D5_56EA130DF46A",
 "id": "camera_4424D636_578A_D420_41C6_23EF9BA12767",
 "timeToIdle": 5000
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_40902BBE_4F98_F5B3_417E_215EADC2E939",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_40902BBE_4F98_F5B3_417E_215EADC2E939.ogg",
  "mp3Url": "media/audio_40902BBE_4F98_F5B3_417E_215EADC2E939.mp3"
 },
 "data": {
  "label": "Spectrum (Full)"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 10.36,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_42C02D1E_578A_D5E0_41CE_31308181E40D",
 "idleSequence": "this.sequence_42C02D1E_578A_D5E0_41CE_31308181E40D",
 "id": "camera_42C05D1E_578A_D5E0_41AC_92A2EC1D533B",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -173.37,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_459E7DEE_578A_D420_41D2_72B6F22E9890",
 "idleSequence": "this.sequence_459E7DEE_578A_D420_41D2_72B6F22E9890",
 "id": "camera_459E6DEE_578A_D420_41C0_CDF49B997DF5",
 "timeToIdle": 5000
},
{
 "progressBarBorderSize": 6,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 55,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 573,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Image_5EF9A31F_502E_7713_41B1_155B9E9559BD"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": 15,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 133,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_402E3BC3_565F_296F_41AF_19D956287FE7"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.64,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "bottom": 0,
 "scrollBarWidth": 10,
 "height": 118,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--MENU"
 },
 "shadow": false,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png"
},
{
 "horizontalAlign": "center",
 "maxHeight": 100,
 "maxWidth": 100,
 "id": "Image_13196006_51DA_2CB3_4191_F03898441520",
 "backgroundOpacity": 0,
 "right": "1.08%",
 "width": "6.031%",
 "paddingRight": 0,
 "url": "skin/Image_13196006_51DA_2CB3_4191_F03898441520.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 80,
 "propagateClick": false,
 "class": "Image",
 "bottom": "7.73%",
 "height": "11.186%",
 "verticalAlign": "middle",
 "minWidth": 80,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image25151"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photoalbum"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B",
 "left": "0%",
 "children": [
  "this.Container_6B7B3538_502A_54D0_41D0_9A6D5FB5A723",
  "this.Container_6B7BD538_502A_54D0_41CC_674161DF5902"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INSTRUCCIONES"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 26.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_452E3F6E_578A_D420_41C2_C7A7F5C38689, this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A); this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_452E3F6E_578A_D420_41C2_C7A7F5C38689); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463C43A1_578A_CC23_41D0_B0F59FE8E900",
   "pitch": 6.38,
   "hfov": 6.89,
   "yaw": 26.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5F22236E_4CFD_BB52_41D0_87962539D379",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.31,
   "yaw": 36.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463C33A1_578A_CC23_41CF_75D7A27E0D15",
   "pitch": -11.69,
   "hfov": 11.31,
   "yaw": 36.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_585CAAAF_4CF2_75D3_418F_E4020A5C57BA",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.31,
   "yaw": 26.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_2_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": 8.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_455FFF7D_578A_D420_41BE_0B20D5B44A02, this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A); this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_455FFF7D_578A_D420_41BE_0B20D5B44A02); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_2_0.png",
      "width": 289,
      "class": "ImageResourceLevel",
      "height": 338
     }
    ]
   },
   "pitch": 8.6,
   "hfov": 10.31,
   "yaw": 26.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_58E12D38_4CF7_EF3D_41B8_194A4EED7DFE",
 "data": {
  "label": "   Apagar\u000d    Luces"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.84,
   "yaw": 36.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": -9.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_3_0.png",
      "width": 305,
      "class": "ImageResourceLevel",
      "height": 512
     }
    ]
   },
   "pitch": -9.94,
   "hfov": 10.84,
   "yaw": 36.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7593DF4E_4DF2_AB55_41C7_FA82D656CEBF",
 "data": {
  "label": " Living"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 9.42,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 60.61,
 "bleaching": 0.7,
 "id": "overlay_72687B9E_4C0E_ABF2_41BB_A08C589A4291"
},
{
 "bleachingDistance": 0.4,
 "yaw": 96.85,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 51.31,
 "bleaching": 0.7,
 "id": "overlay_729624D3_4C0E_BD72_41C0_CD73173E435F"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -150.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 115.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 74.24,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 32.17,
   "easing": "cubic_in_out",
   "yawSpeed": 63.64
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4456D08A_578A_CCE1_41CC_2C55CF4270F6",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 54.98,
   "easing": "cubic_in_out",
   "yawSpeed": 109.47
  },
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45784FA7_578A_D42F_41D1_77597AE57525",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "pitchSpeed": 17.82,
   "easing": "cubic_in_out",
   "yawSpeed": 34.8
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_43488204_578A_CFE1_41C3_05DDB394C889",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 16.67,
   "easing": "cubic_in_out",
   "yawSpeed": 32.48
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_43E3819D_578A_CCE3_41C3_3974447473F9",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_7870010A_503E_30FD_41BC_311867DA2A0C",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 16.54,
   "easing": "cubic_in_out",
   "yawSpeed": 32.23
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_42E22D3D_578A_D420_41B0_DB23335BCF4D",
 "restartMovementOnUserInteraction": true
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_76772C3C_56C3_6F18_41D4_7C4FB259877A.ogg",
 "mp3Url": "media/audio_76772C3C_56C3_6F18_41D4_7C4FB259877A.mp3",
 "id": "audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E"
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 4.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "pitchSpeed": 4.65,
   "easing": "cubic_in_out",
   "yawSpeed": 8.34
  },
  {
   "targetYaw": -164.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.33,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45533F8B_578A_D4E7_418C_165E1AF4F4A8",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 27.83,
   "easing": "cubic_in_out",
   "yawSpeed": 54.92
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45F90EFA_578A_D420_41D2_F7615AE4E2AE",
 "restartMovementOnUserInteraction": true
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "container_46135390_578A_CCE1_41B5_D1DC85B48129",
 "backgroundOpacity": 0.3,
 "children": [
  "this.viewer_uid4613638F_578A_CCFF_4195_39F80B8F7AD5",
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "left": 0,
   "children": [
    "this.htmltext_46116390_578A_CCE1_41C6_1E9C9F5B3320"
   ],
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0.3,
   "right": 0,
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "overflow": "scroll",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "class": "Container",
   "verticalAlign": "bottom",
   "bottom": 0,
   "backgroundColor": [],
   "minWidth": 20,
   "layout": "vertical",
   "height": "30%",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "contentOpaque": true,
   "scrollBarColor": "#FFFFFF",
   "data": {
    "name": "Container2673"
   },
   "shadow": false
  },
  "this.component_46113390_578A_CCE1_419F_01DE25364369",
  "this.component_46110390_578A_CCE1_41C3_B368AB2105D7"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container2672"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.2,
   "yaw": -2.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_4499AA68_578A_DC21_41B2_8A8D32FAD677); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4605F393_578A_CCE7_41A8_2E5CABA0FEA5",
   "pitch": 1.85,
   "hfov": 7.2,
   "yaw": -2.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4722F8F2_5746_CFEB_41B6_CF6FB682FC5D",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.05,
   "yaw": -2.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 2.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_44BD5A86_578A_DCE1_41D4_EDA7A6353F52); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_1_0.png",
      "width": 195,
      "class": "ImageResourceLevel",
      "height": 313
     }
    ]
   },
   "pitch": 2.48,
   "hfov": 7.05,
   "yaw": -2.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_472958F3_5746_CFE9_4190_A06C79E7A940",
 "data": {
  "label": "   Entrada\u000d"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.25,
   "yaw": 7.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_58FCE818_5746_CE27_41D5_6E5EC77B8BFA, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_43E112E2_579B_4C20_41B0_A67A0311B817, '90%', '90%', true, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 3.25,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_2_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ]
   },
   "pitch": 2.92,
   "yaw": 7.41,
   "distance": 50
  }
 ],
 "id": "overlay_472968F3_5746_CFE9_41C0_E4651E9C12EB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.5,
   "yaw": 7.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 4.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_77F36E2E_502A_3135_41CC_6EE71EAFE57A); this.showPopupMedia(this.window_589E2836_5746_CE6B_41AD_BBAC5BB986BB, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_43E0A2E2_579B_4C20_41CD_71EE4266106A, '90%', '90%', true, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_3_0.png",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ]
   },
   "pitch": 4.15,
   "hfov": 5.5,
   "yaw": 7.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_472928F3_5746_CFE9_41D2_3453D059BC7B",
 "data": {
  "label": "\u00c1lbum de\u000d   Fotos"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.62,
   "yaw": 37.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_4_1_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ]
   },
   "pitch": -4.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.62,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ]
   },
   "pitch": -4.06,
   "yaw": 37.61,
   "distance": 50
  }
 ],
 "id": "overlay_472938F3_5746_CFE9_41D3_199BB64C45DA",
 "data": {
  "label": "Polygon"
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -29.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -25.81,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -153.37,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.51,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 133.78,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 71.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -34.35,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77024918_503A_F31E_41AF_34F62C64FEBB",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 18.85,
   "easing": "cubic_in_out",
   "yawSpeed": 36.87
  },
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_43BD0110_578A_CDE1_418D_703F257D7842",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 40.95,
   "easing": "cubic_in_out",
   "yawSpeed": 81.27
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_42210D7A_578A_D420_41D1_E16C80ABADB9",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.13,
   "yaw": -95.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_43B62BC1_578A_DC60_41B5_284148B1CB99); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_46031397_578A_CCEF_418A_2E6963C1846A",
   "pitch": -12.9,
   "hfov": 10.13,
   "yaw": -95.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5ED98F6B_4C0D_AB52_41BB_5E21BCD4D8B3",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.19,
   "yaw": -52.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4602C397_578A_CCEF_41BA_640961170C0F",
   "pitch": -2.15,
   "hfov": 7.19,
   "yaw": -52.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5F9E895F_4C0E_9772_41B3_12204174EBAF",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.14,
   "yaw": -5.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_446F0B68_578A_DC21_41C0_FF6664AC0092); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4602A397_578A_CCEF_41BD_37BE2C62D9C7",
   "pitch": -4.19,
   "hfov": 11.14,
   "yaw": -5.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5B60547E_4C16_FD32_41BE_22924F5C4F05",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.71,
   "yaw": -70.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_43F8CC20_578A_D420_41D0_8BF4EEADB0C2); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_46029398_578A_CCE1_41C3_6DD46AA3818D",
   "pitch": -2.5,
   "hfov": 5.71,
   "yaw": -70.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_566EE523_4C36_FCD2_41CC_55AFAC6306BF",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.13,
   "yaw": -179.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12, this.camera_44E59ADB_578A_DC67_41AE_8C31F37F3C45); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_46027398_578A_CCE1_41B3_90A472CB243E",
   "pitch": -3,
   "hfov": 12.13,
   "yaw": -179.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_57B6F8D9_4C32_957F_41C9_13FC3BAD255B",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.43,
   "yaw": -151.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_442ABB15_578A_DDE3_41C3_B0EE92CC2FC8); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_46025398_578A_CCE1_419E_99040256B3F6",
   "pitch": 10.51,
   "hfov": 15.43,
   "yaw": -151.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_51280201_4C33_94CF_41D1_7D4AC88DD7AC",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.68,
   "yaw": -52.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": -1.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_7_0.png",
      "width": 240,
      "class": "ImageResourceLevel",
      "height": 377
     }
    ]
   },
   "pitch": -1.73,
   "hfov": 8.68,
   "yaw": -52.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7142457C_4C12_BF36_41C3_965C22106F02",
 "data": {
  "label": " Cocina"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.32,
   "yaw": -5.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_8_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -2.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_43921B94_578A_DCE1_41C0_689CAB0A5361); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_8_0.png",
      "width": 313,
      "class": "ImageResourceLevel",
      "height": 418
     }
    ]
   },
   "pitch": -2.74,
   "hfov": 11.32,
   "yaw": -5.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_701A4566_4C1D_9F52_41CB_792274DA2F65",
 "data": {
  "label": "  Quincho"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.83,
   "yaw": 94.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_9_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_44DFAAA2_578A_DC21_41A7_83AF912B1235); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_9_0.png",
      "width": 846,
      "class": "ImageResourceLevel",
      "height": 354
     }
    ]
   },
   "pitch": -28.47,
   "hfov": 26.83,
   "yaw": 94.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_70E07E84_4C1E_ADD6_41CD_C9C9E90E20AE",
 "data": {
  "label": "         Comedor"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.04,
   "yaw": -70.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_10_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 29
     }
    ]
   },
   "pitch": -1.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_4319EC52_578A_D460_41D4_EAE191AE7425); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_10_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 403
     }
    ]
   },
   "pitch": -1.82,
   "hfov": 8.04,
   "yaw": -70.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7217DE3F_4C1E_AD33_41C0_6548D05F997F",
 "data": {
  "label": " Sala de\u000d   Cine"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.31,
   "yaw": -179.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_11_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -1.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12, this.camera_4406EAF8_578A_DC21_41CA_5A0755C17877); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_11_0.png",
      "width": 369,
      "class": "ImageResourceLevel",
      "height": 517
     }
    ]
   },
   "pitch": -1.54,
   "hfov": 13.31,
   "yaw": -179.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_73DD519A_4C1D_97F2_41D1_2DC7FD988A66",
 "data": {
  "label": "   Calle"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.65,
   "yaw": -151.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_12_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": 14.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_444CEB31_578A_DC23_41CD_29968B533882); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_12_0.png",
      "width": 447,
      "class": "ImageResourceLevel",
      "height": 622
     }
    ]
   },
   "pitch": 14.17,
   "hfov": 15.65,
   "yaw": -151.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_72CD0D72_4C13_EF32_41C8_64D446C7AB4C",
 "data": {
  "label": " Escalera\u000d Entrepiso"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.33,
   "yaw": -95.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_13_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_43D6DBF4_578A_DC20_41BF_870D0660F9EC); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_13_0.png",
      "width": 319,
      "class": "ImageResourceLevel",
      "height": 182
     }
    ]
   },
   "pitch": -11.33,
   "hfov": 11.33,
   "yaw": -95.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_72C14259_4C15_F57E_41BB_00CEBFD195E8",
 "data": {
  "label": "      Living"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -2.39,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 60.61,
 "bleaching": 0.7,
 "id": "overlay_7241E1C2_4C32_974D_4185_D8EFCA60DDB0"
},
{
 "bleachingDistance": 0.4,
 "yaw": -176.73,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 79.2,
 "bleaching": 0.7,
 "id": "overlay_724C7981_4C32_97CE_41A2_274C4D75CE46"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.51,
   "yaw": 94.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_14_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_44C40ABE_578A_DC21_41D5_6DD296AA9265); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4602839A_578A_CCE1_4188_DC1D2176C09E",
   "pitch": -33.27,
   "hfov": 22.51,
   "yaw": 94.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4BDBC122_56C5_D929_41A6_F195981DDB88",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 31.31,
   "easing": "cubic_in_out",
   "yawSpeed": 61.91
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44CAA017_578A_CBEF_41C8_CCADD8862FFF",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.75,
   "yaw": 53.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4, this.camera_45535F8B_578A_D4E7_41AF_4C5CDEC6E880); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_462F03B4_578A_CC21_41B3_A1AA53B8154D",
   "pitch": -5.33,
   "hfov": 18.75,
   "yaw": 53.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6A014951_4C73_974F_41D3_26D53DEC980E",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.79,
   "yaw": -87.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_45787FA6_578A_D421_41B4_10D51BE10D31); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_462EF3B4_578A_CC21_41C8_2328D2E355F3",
   "pitch": -3.71,
   "hfov": 10.79,
   "yaw": -87.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64272CF1_4C72_6D4F_41CD_2DAE74C3F5A5",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.52,
   "yaw": 126.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_4483FFDF_578A_D41F_41A9_51DBA4ECDB5C); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_462ED3B4_578A_CC21_41C0_AAC886440727",
   "pitch": -28.45,
   "hfov": 24.52,
   "yaw": 126.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64C8A2FD_4C0F_9537_41C5_B4AF39D9D9A8",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.99,
   "yaw": 53.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_3_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 36
     }
    ]
   },
   "pitch": -5.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_3_0.png",
      "width": 474,
      "class": "ImageResourceLevel",
      "height": 1087
     }
    ]
   },
   "pitch": -5.97,
   "hfov": 16.99,
   "yaw": 53.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63C06466_4C0F_9D52_41C9_6732EF408B14",
 "data": {
  "label": "\u000d Habitaci\u00f3n"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.51,
   "yaw": 126.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": -24.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_44A86FFB_578A_D427_41D0_E42C063CD8F2); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_4_0.png",
      "width": 623,
      "class": "ImageResourceLevel",
      "height": 968
     }
    ]
   },
   "pitch": -24.02,
   "hfov": 20.51,
   "yaw": 126.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_639391F7_4C0E_B732_41CC_40443DBB4B79",
 "data": {
  "label": "    Escalera\u000d   Entrepiso"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.64,
   "yaw": -87.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": -3.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_449ECFC3_578A_D467_41D5_3E6EA2C4E426); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_5_0.png",
      "width": 379,
      "class": "ImageResourceLevel",
      "height": 620
     }
    ]
   },
   "pitch": -3.05,
   "hfov": 13.64,
   "yaw": -87.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7E5D4DA6_4C12_6FD2_41D0_4F6C9247ADD1",
 "data": {
  "label": " Habitaci\u00f3n\u000d    Master"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -76.75,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 9.86,
 "bleaching": 0.7,
 "id": "overlay_7243A042_4C0F_B552_4173_029AA7306C65"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 49.5,
   "easing": "cubic_in_out",
   "yawSpeed": 98.46
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44DE7599_578A_D4E0_41BE_1D2FFE9AD365",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.68,
   "yaw": 160.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_45DFF97F_578A_DC1F_4182_44B3999A038E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4639A3A3_578A_CC27_41D3_45CB3EBDF74A",
   "pitch": -7.35,
   "hfov": 19.68,
   "yaw": 160.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5B1FF612_4C15_9CF2_41C3_BA09D573F956",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.16,
   "yaw": -149.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_42D2D811_578A_DBE0_41C4_8C78C7FDCB78); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463963A4_578A_CC21_41D3_FD4E4B497C31",
   "pitch": -8.6,
   "hfov": 13.16,
   "yaw": -149.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_55065348_4C1F_BB5E_41C9_63BC86EB71F1",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.09,
   "yaw": 56.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_4588F941_578A_DC63_41D4_72C055117B2A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463933A4_578A_CC21_41B3_EE93824752DA",
   "pitch": -14.01,
   "hfov": 16.09,
   "yaw": 56.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_54B5B55E_4C1E_FF72_41C3_B40A23F1359D",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.39,
   "yaw": -1.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_467AB8CF_578A_DC60_41C1_C85EB6919533); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463913A5_578A_CC23_419C_62E443FDB271",
   "pitch": -7.53,
   "hfov": 11.39,
   "yaw": -1.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_542EB355_4C1D_FB76_41B1_02C2022012E4",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.75,
   "yaw": -93.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_464EE897_578A_DCE0_41CF_74B2D1B798A7); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4638F3A5_578A_CC23_41C7_4D4CECF1922C",
   "pitch": -8.59,
   "hfov": 9.75,
   "yaw": -93.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5587FAC0_4C15_B54E_4192_D62E10526282",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.83,
   "yaw": -70.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_4662B908_578A_DDE0_41D3_30E1C94069F5); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4638A3A5_578A_CC23_41C1_26A4542089A9",
   "pitch": -4.51,
   "hfov": 9.83,
   "yaw": -70.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_55941349_4C16_7B5E_4191_A59BB4D3BEB7",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.41,
   "yaw": -149.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 33
     }
    ]
   },
   "pitch": -7.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_4657487A_578A_DC20_41D4_795B9B3223B2); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_6_0.png",
      "width": 375,
      "class": "ImageResourceLevel",
      "height": 779
     }
    ]
   },
   "pitch": -7.22,
   "hfov": 13.41,
   "yaw": -149.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7A7A1CE7_4DF5_AD52_4174_090BD5F8DB5D",
 "data": {
  "label": " \u000d  Cocina"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.91,
   "yaw": 160.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_7_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -4.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_45CA899C_578A_DCE1_41D0_AF705A6117E4); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_7_0.png",
      "width": 498,
      "class": "ImageResourceLevel",
      "height": 672
     }
    ]
   },
   "pitch": -4.43,
   "hfov": 17.91,
   "yaw": 160.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7584F74C_4DF6_BB56_41B3_F3BF279FF4AB",
 "data": {
  "label": "     Sala"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.59,
   "yaw": -1.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_8_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": -4.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_466E38EC_578A_DC20_41D3_D7E0BA9CD014); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_8_0.png",
      "width": 266,
      "class": "ImageResourceLevel",
      "height": 419
     }
    ]
   },
   "pitch": -4.87,
   "hfov": 9.59,
   "yaw": -1.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_72672788_4DF7_9BDE_41C1_6FF3D69969EA",
 "data": {
  "label": "  Deck"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.61,
   "yaw": -70.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_9_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -2.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_4595A925_578A_DC20_41D4_B2895DC642CB); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_9_0.png",
      "width": 266,
      "class": "ImageResourceLevel",
      "height": 348
     }
    ]
   },
   "pitch": -2.45,
   "hfov": 9.61,
   "yaw": -70.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_74CC5B0D_4DF6_94D7_41AD_35EB0E985D9B",
 "data": {
  "label": " Parrilla"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.58,
   "yaw": -93.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_10_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -5.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_4645A8B3_578A_DC20_41C0_6A5E4978704C); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_10_0.png",
      "width": 266,
      "class": "ImageResourceLevel",
      "height": 348
     }
    ]
   },
   "pitch": -5.49,
   "hfov": 9.58,
   "yaw": -93.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_756A3004_4DF5_F4D5_41C1_56A034309D7B",
 "data": {
  "label": " Pasillo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.29,
   "yaw": 56.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_11_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -11.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_45B3895F_578A_DC1F_41CE_25379369983A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_11_0.png",
      "width": 404,
      "class": "ImageResourceLevel",
      "height": 550
     }
    ]
   },
   "pitch": -11.12,
   "hfov": 14.29,
   "yaw": 56.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_74524590_4DF2_BFCD_41C2_0E8EB5134142",
 "data": {
  "label": "  Piscinas"
 }
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "rotationX": 3.22,
 "blending": 0,
 "id": "overlay_776FA9DA_56DD_6918_41A6_0C121383E56A",
 "roll": 1.74,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_776FA9DA_56DD_6918_41A6_0C121383E56A_t.jpg",
    "width": 420,
    "class": "ImageResourceLevel",
    "height": 630
   }
  ]
 },
 "pitch": 1.83,
 "chromaSmoothing": 0.4,
 "yaw": 49.32,
 "chromaColor": "#2B97FF",
 "autoplay": true,
 "vfov": 42.4,
 "rotationY": 76.64,
 "useHandCursor": false,
 "hfov": 34.36,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.02,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 420,
  "mp4Url": "media/video_7340C746_56DD_5968_41D3_39B2A98F9F24.mp4",
  "class": "VideoResource",
  "height": 630
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -3.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.59,
   "pitchSpeed": 61.54,
   "easing": "cubic_in_out",
   "yawSpeed": 122.64
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4483CFDF_578A_D41F_41C7_84A917BC3F1C",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.77,
   "yaw": 98.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_4456E089_578A_CCE3_41C8_E035C409EC0D); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463753A8_578A_CC21_415E_F99B87A66EE8",
   "pitch": -3.63,
   "hfov": 10.77,
   "yaw": 98.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_539238FD_4C72_9536_41C1_9735137A6A8B",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.77,
   "yaw": 144.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_44CAC017_578A_CBEF_41CC_073EBA5D60EC); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463703A9_578A_CC23_4196_305047996703",
   "pitch": -3.86,
   "hfov": 10.77,
   "yaw": 144.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_539524B3_4C72_9D33_41BF_0168CD1AF8AE",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.42,
   "yaw": -169.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_44111051_578A_CC63_41C5_5EA09B2243C4); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4636E3A9_578A_CC23_41D2_3869D0FFBCD7",
   "pitch": -13.33,
   "hfov": 16.42,
   "yaw": -169.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_52780C30_4C76_6CCE_41C1_B9F2E8174A50",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.35,
   "yaw": 130.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_4399F0DE_578A_CC61_41D0_A32792904ADA); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4636C3A9_578A_CC23_41A0_8A6A075DB08B",
   "pitch": -4.25,
   "hfov": 7.35,
   "yaw": 130.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6F8B9EB2_4C77_ADCD_41D1_02693D57AF37",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.15,
   "yaw": 98.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -2.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_447650B2_578A_CC21_41C2_8DDE05E3D9F0); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_4_0.png",
      "width": 309,
      "class": "ImageResourceLevel",
      "height": 387
     }
    ]
   },
   "pitch": -2.08,
   "hfov": 11.15,
   "yaw": 98.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_78EBC3AE_4C17_FBD5_41CF_7454C300F3F8",
 "data": {
  "label": "     Deck"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.79,
   "yaw": 130.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -3.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_43BD2110_578A_CDE1_41C5_7AB1F843DE60); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_5_0.png",
      "width": 244,
      "class": "ImageResourceLevel",
      "height": 337
     }
    ]
   },
   "pitch": -3.17,
   "hfov": 8.79,
   "yaw": 130.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7AA7DA94_4C16_95F6_41C3_C928FF8C5DF3",
 "data": {
  "label": " Piscinas"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.43,
   "yaw": -169.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_6_0_map.gif",
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_4433706D_578A_CC23_41B3_B09117043EC9); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_6_0.png",
      "width": 465,
      "class": "ImageResourceLevel",
      "height": 233
     }
    ]
   },
   "pitch": -11.6,
   "hfov": 16.43,
   "yaw": -169.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7982F986_4C12_97D2_41AF_EBA9BB403852",
 "data": {
  "label": "       Pasillo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.33,
   "yaw": 144.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -1.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_44ED0035_578A_CC23_41B0_5860FA2710EC); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_7_0.png",
      "width": 259,
      "class": "ImageResourceLevel",
      "height": 361
     }
    ]
   },
   "pitch": -1.87,
   "hfov": 9.33,
   "yaw": 144.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_74F737A5_4C13_9BD6_41C7_666E6CB897D9",
 "data": {
  "label": " Quincho"
 }
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_4604E394_578A_CCE1_4198_5698060EF25B, this.albumitem_46055394_578A_CCE1_41C7_DB44CED3E02C); this.loopAlbum(this.playList_43E112E2_579B_4C20_41B0_A67A0311B817, 0)",
 "player": "this.viewer_uid46054394_578A_CCE1_41D3_788A58239514PhotoAlbumPlayer",
 "id": "albumitem_46055394_578A_CCE1_41C7_DB44CED3E02C"
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 11.8,
   "easing": "cubic_in_out",
   "yawSpeed": 22.71
  },
  {
   "targetYaw": -150.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 115.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 74.24,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_452E94FD_578A_D420_41A1_2C53275539E6",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -20.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.01,
   "pitchSpeed": 13.19,
   "easing": "cubic_in_out",
   "yawSpeed": 25.5
  },
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_464EF897_578A_DCE0_41C8_3D5F861F7256",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 3.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 11.81,
   "pitchSpeed": 46.13,
   "easing": "cubic_in_out",
   "yawSpeed": 91.68
  },
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44988559_578A_D460_41C2_CDD0672B6451",
 "restartMovementOnUserInteraction": true
},
{
 "horizontalAlign": "center",
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 40,
 "propagateClick": true,
 "class": "IconButton",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B, true, 0, this.effect_13185EDD_502A_7550_41C3_AE7B43D21853, 'showEffect', false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Ayuda"
 },
 "cursor": "hand"
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 66.48,
   "easing": "cubic_in_out",
   "yawSpeed": 132.58
  },
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_464623F4_578A_CC21_41D0_9750A862809E",
 "restartMovementOnUserInteraction": true
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 37,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": "141.51%",
 "verticalAlign": "middle",
 "minWidth": 49,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 4.75,
   "easing": "cubic_in_out",
   "yawSpeed": 8.54
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_446F1B68_578A_DC21_41BC_D6A15BA6ED3F",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.67,
   "yaw": -67.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_43A1913E_578A_CC21_41D4_00DDC90C17AE); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4600739C_578A_CCE1_41D2_DB7C7D76CC12",
   "pitch": -7.98,
   "hfov": 16.67,
   "yaw": -67.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5AB33241_4C16_F54F_419A_1A82626E06AC",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.84,
   "yaw": -67.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -6.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_43C2E16F_578A_CC3F_41D4_31C3832D7D77); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_1_0.png",
      "width": 470,
      "class": "ImageResourceLevel",
      "height": 669
     }
    ]
   },
   "pitch": -6.81,
   "hfov": 16.84,
   "yaw": -67.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_779BAA9C_4DF2_75F6_41D3_3255A4E1C04A",
 "data": {
  "label": "   Comedor"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -74.99,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 41.51,
 "bleaching": 0.7,
 "id": "overlay_724AC826_4C0D_94D2_41C0_AB29E3F1E825"
},
{
 "bleachingDistance": 0.4,
 "yaw": 4.65,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 36.49,
 "bleaching": 0.7,
 "id": "overlay_724D3C57_4C0D_ED73_41CD_8425355074D8"
},
{
 "bleachingDistance": 0.4,
 "yaw": 82.27,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 38,
 "bleaching": 0.7,
 "id": "overlay_7277C163_4C0D_F752_41C2_7921673C330A"
},
{
 "bleachingDistance": 0.4,
 "yaw": 176.73,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 47.04,
 "bleaching": 0.7,
 "id": "overlay_727CA71C_4C0D_FCF6_41C8_60EF23AE255E"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 9.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.91,
   "pitchSpeed": 11.03,
   "easing": "cubic_in_out",
   "yawSpeed": 21.15
  },
  {
   "targetYaw": 71.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -21.54,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 108.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -20.29,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 172.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -97.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -10.49,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -37.81,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45529A2D_578A_DC23_41CD_72CB9283E28C",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -3.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.59,
   "pitchSpeed": 64.36,
   "easing": "cubic_in_out",
   "yawSpeed": 128.31
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_444CFB31_578A_DC23_41CB_542297BBF91F",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 48.73,
   "easing": "cubic_in_out",
   "yawSpeed": 96.9
  },
  {
   "targetYaw": -58.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -116.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -8.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -143.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 112.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 1.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4657587A_578A_DC20_41CF_09DD2B33D06D",
 "restartMovementOnUserInteraction": true
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_46116390_578A_CCE1_41C6_1E9C9F5B3320, this.albumitem_4613738F_578A_CCFF_41AD_3818F0B63EF5); this.loopAlbum(this.playList_43F2D2D2_579B_4C61_41D5_D81D8AC00F2E, 0)",
 "player": "this.viewer_uid4613638F_578A_CCFF_4195_39F80B8F7AD5PhotoAlbumPlayer",
 "id": "albumitem_4613738F_578A_CCFF_41AD_3818F0B63EF5"
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 33.92,
   "easing": "cubic_in_out",
   "yawSpeed": 67.14
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44E3E5D4_578A_D460_41C8_7C1FEBB67B4E",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 3.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 11.81,
   "pitchSpeed": 37.63,
   "easing": "cubic_in_out",
   "yawSpeed": 74.6
  },
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_435C1C8A_578A_D4E0_41C7_D23876498261",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 45.57,
   "easing": "cubic_in_out",
   "yawSpeed": 90.55
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_451D0F34_578A_D420_4183_343717811439",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -51.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.33,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 142.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 72.48,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -1.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.98,
   "yaw": 146.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_45C624A4_578A_D420_41C6_2027EFC6D53F); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_462F73B5_578A_CC23_41C7_CAC321B2990E",
   "pitch": -3.62,
   "hfov": 9.98,
   "yaw": 146.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6A5E0209_4C0E_94DF_417D_46B9DFD108C3",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.23,
   "yaw": 146.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ]
   },
   "pitch": -3.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_45E9A4C0_578A_D460_41D3_887E3945B162); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_1_0.png",
      "width": 451,
      "class": "ImageResourceLevel",
      "height": 869
     }
    ]
   },
   "pitch": -3.42,
   "hfov": 16.23,
   "yaw": 146.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6261EA3E_4C3F_B535_41D0_801F1A3A3344",
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 34.29,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 30.96,
 "bleaching": 0.7,
 "id": "overlay_7243A9E8_4C0E_775E_41A5_59C64522A4DF"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_770D5914_503A_D315_41C7_BD98E4CD29E4",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77007457_503E_7113_41B9_B797530AF0B3",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 3.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 11.81,
   "pitchSpeed": 46.13,
   "easing": "cubic_in_out",
   "yawSpeed": 91.68
  },
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44BAA579_578A_D420_41BE_ED26FF8D3662",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.72,
   "yaw": -21.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_44DE6599_578A_D4E0_41AD_FE422367522B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463583AB_578A_CC27_41B1_3F4AD8ABA6D9",
   "pitch": -6.62,
   "hfov": 10.72,
   "yaw": -21.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_53684693_4C76_9DF3_4181_EF2767F1A9C2",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.61,
   "yaw": -48.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_4424D636_578A_D420_41C6_23EF9BA12767); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463573AB_578A_CC27_41AB_51ADF921096C",
   "pitch": -10.64,
   "hfov": 10.61,
   "yaw": -48.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6CE24BFA_4C76_EB32_41B4_9F999091A2FA",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.75,
   "yaw": 15.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_4552C51C_578A_D5E0_41D0_3A46470391B0); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463523AB_578A_CC27_41D5_7BA6F399ACC7",
   "pitch": -5.33,
   "hfov": 10.75,
   "yaw": 15.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_53794FA5_4C76_6BD7_41C5_3C53F52B35DE",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.77,
   "yaw": 47.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_44E405D4_578A_D460_41D3_DB0DD35DF0A8); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463503AC_578A_CC21_41B3_E317889E65DA",
   "pitch": -4.06,
   "hfov": 10.77,
   "yaw": 47.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_535CC597_4C75_BFF2_418C_EBE38CA692F5",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.45,
   "yaw": 31.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_450C34DC_578A_D460_41BC_D2F068FBA742); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4634C3AC_578A_CC21_41D3_EC663B26A8A0",
   "pitch": 14.5,
   "hfov": 10.45,
   "yaw": 31.81,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6D90C5FD_4C72_9F36_41CE_AE11C1BB2BB1",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.04,
   "yaw": -16.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 21.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_4498B559_578A_D460_419A_B212996445C0); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4634B3AC_578A_CC21_4176_0FD0111AB83C",
   "pitch": 21.58,
   "hfov": 10.04,
   "yaw": -16.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6D8DA36E_4C72_7B55_41CD_8289197836CB",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.33,
   "yaw": -48.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": -8.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_4447266A_578A_D420_41C6_04A0D3728710); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_6_0.png",
      "width": 234,
      "class": "ImageResourceLevel",
      "height": 360
     }
    ]
   },
   "pitch": -8.94,
   "hfov": 8.33,
   "yaw": -48.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7D0CF396_4C1E_9BF2_41C7_3F8427E9D057",
 "data": {
  "label": " Piscinas"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.01,
   "yaw": 47.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": -1.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_4403C607_578A_D7E0_4183_B2C95E98C249); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_7_0.png",
      "width": 250,
      "class": "ImageResourceLevel",
      "height": 360
     }
    ]
   },
   "pitch": -1.9,
   "hfov": 9.01,
   "yaw": 47.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_781F5669_4C1F_FD5F_41D1_74EDFDF4A74D",
 "data": {
  "label": "   Parrilla"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.4,
   "yaw": -21.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_8_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": -4.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_44C085B6_578A_D420_41C7_9E25B1424A93); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_8_0.png",
      "width": 234,
      "class": "ImageResourceLevel",
      "height": 360
     }
    ]
   },
   "pitch": -4.48,
   "hfov": 8.4,
   "yaw": -21.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7FD4E63F_4C1E_BD33_41BB_EFAFFE8E89FF",
 "data": {
  "label": " Quincho"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.86,
   "yaw": 15.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_9_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": -3.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_4575053B_578A_D420_41BE_EBC1D76BE84F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_9_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 360
     }
    ]
   },
   "pitch": -3.46,
   "hfov": 8.86,
   "yaw": 15.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_79AC6ECE_4C12_6D55_4193_56FF271E3F5E",
 "data": {
  "label": "   Pasillo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.65,
   "yaw": -16.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_10_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": 23.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_44BAC579_578A_D420_41C7_3E643EC7471F); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_10_0.png",
      "width": 232,
      "class": "ImageResourceLevel",
      "height": 387
     }
    ]
   },
   "pitch": 23.75,
   "hfov": 7.65,
   "yaw": -16.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_787DA558_4C12_9F7E_41CD_56E54DDE0451",
 "data": {
  "label": "   Balc\u00f3n\u000dPlanta Alta"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.98,
   "yaw": 31.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_11_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 17.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_452E84FD_578A_D420_41C5_00065BD72491); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_11_0.png",
      "width": 232,
      "class": "ImageResourceLevel",
      "height": 372
     }
    ]
   },
   "pitch": 17.29,
   "hfov": 7.98,
   "yaw": 31.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7FD3A82F_4C15_94D2_41D1_10DAD6C733F7",
 "data": {
  "label": "  Quincho\u000dPlanta Alta"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 89.06,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 62.87,
 "bleaching": 0.7,
 "id": "overlay_72507ADB_4C0F_9573_41CB_7C2C12BF575F"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "rotationX": -1.54,
 "blending": 0,
 "id": "overlay_481258C5_563D_7768_4197_0EC12658EC25",
 "roll": -0.09,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_481258C5_563D_7768_4197_0EC12658EC25_t.jpg",
    "width": 540,
    "class": "ImageResourceLevel",
    "height": 800
   }
  ]
 },
 "pitch": 1.62,
 "chromaSmoothing": 0.34,
 "yaw": -47.71,
 "chromaColor": "#35A3FF",
 "autoplay": true,
 "vfov": 30.72,
 "rotationY": -0.11,
 "useHandCursor": true,
 "hfov": 20.7,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.01,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 540,
  "mp4Url": "media/video_4DC63883_564D_77EF_41D3_729FE9100318.mp4",
  "class": "VideoResource",
  "height": 800
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 36.52,
   "easing": "cubic_in_out",
   "yawSpeed": 72.37
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_429DACC6_578A_D460_41D5_5C65553F23F7",
 "restartMovementOnUserInteraction": true
},
{
 "items": [
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "y": "0.52",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.59",
     "class": "PhotoCameraPosition",
     "y": "0.49",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "y": "0.61",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.64",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.56",
     "class": "PhotoCameraPosition",
     "y": "0.69",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.61",
     "class": "PhotoCameraPosition",
     "y": "0.28",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.27",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "y": "0.46",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.63",
     "class": "PhotoCameraPosition",
     "y": "0.45",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.55",
     "class": "PhotoCameraPosition",
     "y": "0.56",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.58",
     "class": "PhotoCameraPosition",
     "y": "0.27",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "y": "0.55",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.27",
     "class": "PhotoCameraPosition",
     "y": "0.30",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.59",
     "class": "PhotoCameraPosition",
     "y": "0.33",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "y": "0.35",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.37",
     "class": "PhotoCameraPosition",
     "y": "0.59",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "y": "0.35",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.48",
     "class": "PhotoCameraPosition",
     "y": "0.60",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "y": "0.44",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.73",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5500,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "y": "0.42",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 12.43,
   "easing": "cubic_in_out",
   "yawSpeed": 23.96
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45A99E87_578A_D4E0_41A4_0254D4EE2AE0",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 32.17,
   "easing": "cubic_in_out",
   "yawSpeed": 63.64
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_447640B2_578A_CC21_41C1_C880B3CD3019",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 68.83,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.57,
   "pitchSpeed": 17.39,
   "easing": "cubic_in_out",
   "yawSpeed": 33.93
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -29.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -25.81,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -153.37,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.51,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 133.78,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 71.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -34.35,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45BF3E49_578A_D460_41D2_F88D10CF113C",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 52.95,
   "easing": "cubic_in_out",
   "yawSpeed": 105.38
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_467A88CF_578A_DC60_41BB_A98984B7962B",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 83.13,
   "easing": "cubic_in_out",
   "yawSpeed": 166.03
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_450779F1_578A_DC23_41B7_AFFCC9145A31",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 66.48,
   "easing": "cubic_in_out",
   "yawSpeed": 132.58
  },
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_467A6411_578A_CBE3_41C2_AC1F2F8CE535",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 18.85,
   "easing": "cubic_in_out",
   "yawSpeed": 36.87
  },
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_439A20E3_578A_CC27_41D5_D3E700FD1E44",
 "restartMovementOnUserInteraction": true
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "container_46053394_578A_CCE1_41C5_FE93633D7854",
 "backgroundOpacity": 0.3,
 "children": [
  "this.viewer_uid46054394_578A_CCE1_41D3_788A58239514",
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "left": 0,
   "children": [
    "this.htmltext_4604E394_578A_CCE1_4198_5698060EF25B"
   ],
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0.3,
   "right": 0,
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "overflow": "scroll",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "class": "Container",
   "verticalAlign": "bottom",
   "bottom": 0,
   "backgroundColor": [],
   "minWidth": 20,
   "layout": "vertical",
   "height": "30%",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "contentOpaque": true,
   "scrollBarColor": "#FFFFFF",
   "data": {
    "name": "Container2679"
   },
   "shadow": false
  },
  "this.component_4604D395_578A_CCE3_41CC_6BB65A8071C9",
  "this.component_4604A395_578A_CCE3_41C5_76E2BD4AB8EC"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container2678"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.5,
   "yaw": 33.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_44678699_578A_D4E0_41CA_9B32FD543070); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463F339D_578A_CCE3_41D1_3631FF6C27ED",
   "pitch": -5.2,
   "hfov": 11.5,
   "yaw": 33.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5F9D2CB5_4CF2_6D31_41B7_5BCEF2CFED01",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.15,
   "yaw": 157.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_43EC7740_578A_D460_41A1_D84848B21DAF); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463EF39D_578A_CCE3_41CF_D1E18690F2CB",
   "pitch": -14.03,
   "hfov": 17.15,
   "yaw": 157.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5AE07B89_4CF2_EBDF_41D0_0E914D04EED6",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.2,
   "yaw": 89.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_43AA46FB_578A_D420_41D1_14CF7B519FD4); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463ED39E_578A_CCE1_41D0_610BAEF0DA27",
   "pitch": -5.15,
   "hfov": 13.2,
   "yaw": 89.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_59A6ACB0_4C0E_6DCD_41C1_5C1B9CBD1730",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.09,
   "yaw": 115.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463EB39E_578A_CCE1_41C3_7AD45D703DEA",
   "pitch": -4.37,
   "hfov": 9.09,
   "yaw": 115.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5207670B_4C12_BCD2_41C7_91CD2C8CFC49",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.01,
   "yaw": 32.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ]
   },
   "pitch": -3.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_4389F6C7_578A_D460_41B3_33B3EB0B5B9B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_4_0.png",
      "width": 306,
      "class": "ImageResourceLevel",
      "height": 595
     }
    ]
   },
   "pitch": -3.19,
   "hfov": 11.01,
   "yaw": 32.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_75752B26_4DF5_94D5_41BE_473EFED9DBD7",
 "data": {
  "label": "  Sala de\u000d    Cine"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.25,
   "yaw": 89.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ]
   },
   "pitch": -4.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_43CC9722_578A_D420_4171_55A8D72C6C54); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_5_0.png",
      "width": 396,
      "class": "ImageResourceLevel",
      "height": 757
     }
    ]
   },
   "pitch": -4.44,
   "hfov": 14.25,
   "yaw": 89.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_721F4000_4DF7_94CE_41C5_C23548018D00",
 "data": {
  "label": "  \u000d   Cocina"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.84,
   "yaw": 115.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -2.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_6_0.png",
      "width": 301,
      "class": "ImageResourceLevel",
      "height": 352
     }
    ]
   },
   "pitch": -2.81,
   "hfov": 10.84,
   "yaw": 115.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0F886554_4DF6_BF76_41C9_78656514EDB0",
 "data": {
  "label": " Piscinas"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.02,
   "yaw": 157.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_7_0_map.gif",
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_430E375E_578A_D460_41A7_3F3516137B92); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_7_0.png",
      "width": 483,
      "class": "ImageResourceLevel",
      "height": 244
     }
    ]
   },
   "pitch": -12.27,
   "hfov": 17.02,
   "yaw": 157.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_70F91094_4DF5_F5F6_41C2_500E4A3028EC",
 "data": {
  "label": "  Sala - Centro"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 4.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 55.58,
 "bleaching": 0.7,
 "id": "overlay_7257A9C3_4C0D_9752_41D2_10B53BCDED80"
},
{
 "bleachingDistance": 0.4,
 "yaw": 128.25,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 55.83,
 "bleaching": 0.7,
 "id": "overlay_725DDFD6_4C0D_AB72_41BC_1ECF3EBC4A83"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -82.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_455FDF7D_578A_D420_41D1_AC05B656F5C1",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.48,
   "yaw": 109.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_45BEF468_578A_D420_41D3_EA72EF273011); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463B03A2_578A_CC21_41B1_F67455931B49",
   "pitch": -10.11,
   "hfov": 24.48,
   "yaw": 109.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_541D6722_4C12_9CCD_41BA_EE1FE905E835",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.28,
   "yaw": 2.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_466A842E_578A_D420_41D0_0BE34DA3212A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463AE3A2_578A_CC21_41D0_287AF8446F3A",
   "pitch": -10.11,
   "hfov": 20.28,
   "yaw": 2.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5B17EBCA_4C1E_AB5D_41BF_C3867D88D8B8",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.89,
   "yaw": -66.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463AD3A2_578A_CC21_41D3_B17EAECA0E19",
   "pitch": -5.46,
   "hfov": 5.89,
   "yaw": -66.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_52FEE528_4C15_FCDE_41AE_7C61B197B5D1",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.84,
   "yaw": 2.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 34
     }
    ]
   },
   "pitch": -12.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_4597844B_578A_D460_41D0_4792E2684E75); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_3_0.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 1404
     }
    ]
   },
   "pitch": -12.23,
   "hfov": 22.84,
   "yaw": 2.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7413D737_4DF2_7B32_41CC_6C141EB3875F",
 "data": {
  "label": "\u000d  Quincho"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.28,
   "yaw": -66.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -3.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_4_0.png",
      "width": 202,
      "class": "ImageResourceLevel",
      "height": 279
     }
    ]
   },
   "pitch": -3.89,
   "hfov": 7.28,
   "yaw": -66.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_757F79E6_4DFE_B753_41AD_2FB53A3E46D9",
 "data": {
  "label": "Parrilla"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.05,
   "yaw": 109.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 34
     }
    ]
   },
   "pitch": -8.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_45A3B486_578A_D4E0_41C6_8A93AF2B1A76); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_5_0.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 1404
     }
    ]
   },
   "pitch": -8.99,
   "hfov": 23.05,
   "yaw": 109.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_76E05345_4DFE_7B57_41C6_165FDFFF9CA8",
 "data": {
  "label": "\u000d    Living"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -37.81,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 8.86,
 "bleaching": 0.7,
 "id": "overlay_722C6DB8_4C0E_AF3D_41C6_E65D7C692713"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 27.83,
   "easing": "cubic_in_out",
   "yawSpeed": 54.92
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45C4EEDD_578A_D460_41D5_363B8F20B8A4",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 7.38,
   "easing": "cubic_in_out",
   "yawSpeed": 13.81
  },
  {
   "targetYaw": -150.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 115.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 74.24,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_432E477B_578A_D420_41C2_EDD00147EBD5",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.83,
   "yaw": -40.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_450769F1_578A_DC23_41B5_9712C87BF467); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_462E93B6_578A_CC21_41AD_4DB329DA9C23",
   "pitch": -7.08,
   "hfov": 12.83,
   "yaw": -40.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6BD98EFF_4C0D_AD32_41D3_178505AC51C0",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.65,
   "yaw": 11.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70, this.camera_45528A2D_578A_DC23_4199_52378F480D57); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_462E43B7_578A_CC2F_41D3_FF306DE816E1",
   "pitch": -8.28,
   "hfov": 9.65,
   "yaw": 11.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64978149_4C12_F75E_41C0_FA527622DCC1",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.92,
   "yaw": -113.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_45F639B8_578A_DC21_41B4_56F6524978FD); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_462E23B7_578A_CC2F_41D4_3FB2A66D9F25",
   "pitch": -4.9,
   "hfov": 15.92,
   "yaw": -113.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64834E7A_4C17_ED3D_41D1_C0DF7AD568DB",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.04,
   "yaw": -113.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 34
     }
    ]
   },
   "pitch": -6.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_451EE9D5_578A_DC63_41D3_56F6DC67EE4F); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_3_0.png",
      "width": 476,
      "class": "ImageResourceLevel",
      "height": 1015
     }
    ]
   },
   "pitch": -6.61,
   "hfov": 17.04,
   "yaw": -113.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7D7A7CEF_4C37_ED52_41C4_A5D88A210E28",
 "data": {
  "label": "\u000d    Balc\u00f3n"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.01,
   "yaw": -40.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 33
     }
    ]
   },
   "pitch": -7.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_452DAA0E_578A_DFE1_41A6_4AF09C232870); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_4_0.png",
      "width": 475,
      "class": "ImageResourceLevel",
      "height": 999
     }
    ]
   },
   "pitch": -7.36,
   "hfov": 17.01,
   "yaw": -40.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_630C59D7_4C35_B772_41AF_C1BF4A5F8B81",
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.95,
   "yaw": 11.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ]
   },
   "pitch": -8.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70, this.camera_45776A4A_578A_DC61_41D1_CBBDB7FC0B77); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_5_0.png",
      "width": 475,
      "class": "ImageResourceLevel",
      "height": 934
     }
    ]
   },
   "pitch": -8.77,
   "hfov": 16.95,
   "yaw": 11.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7C27B320_4C32_F4CE_41D1_558125506B6C",
 "data": {
  "label": "\u000d\u000d     Ba\u00f1o"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -119.71,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 10.36,
 "bleaching": 0.7,
 "id": "overlay_72B4E25A_4C0E_9572_41CA_E94D7E32E9E4"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -3.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.59,
   "pitchSpeed": 64.36,
   "easing": "cubic_in_out",
   "yawSpeed": 128.31
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_442A8B15_578A_DDE3_41B2_80FD98536D8F",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 7.38,
   "easing": "cubic_in_out",
   "yawSpeed": 13.81
  },
  {
   "targetYaw": -150.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 115.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 74.24,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_434EF799_578A_D4E0_4193_C7B35413E7AA",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 48.73,
   "easing": "cubic_in_out",
   "yawSpeed": 96.9
  },
  {
   "targetYaw": -58.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -116.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -8.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -143.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 112.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 1.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_42D2A811_578A_DBE0_41CF_C0690B8F4FED",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 54.36,
   "easing": "cubic_in_out",
   "yawSpeed": 108.22
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_437097B8_578A_D420_41BC_1918EFC72864",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 26.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_45065F50_578A_D460_41A2_1BA004FB3DE9, this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A); this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_45065F50_578A_D460_41A2_1BA004FB3DE9); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463D439F_578A_CC1F_41CD_0D7FCCF28FF5",
   "pitch": 6.38,
   "hfov": 6.89,
   "yaw": 26.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5F08474E_4CFE_9B55_4162_01D050A59F50",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.31,
   "yaw": 36.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463D33A0_578A_CC21_41CC_45BACEE648B0",
   "pitch": -11.69,
   "hfov": 11.31,
   "yaw": 36.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5829C0DD_4CF2_F576_4170_28F44FE61136",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.31,
   "yaw": 26.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_2_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": 8.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_453BDF5F_578A_D460_41D5_88A7AA9747C2, this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A); this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_453BDF5F_578A_D460_41D5_88A7AA9747C2); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_2_0.png",
      "width": 289,
      "class": "ImageResourceLevel",
      "height": 337
     }
    ]
   },
   "pitch": 8.59,
   "hfov": 10.31,
   "yaw": 26.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_58FADE45_4CF5_AD56_41C7_88B8A9887EBB",
 "data": {
  "label": " Encender\u000d   Luces"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.84,
   "yaw": 36.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": -9.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_3_0.png",
      "width": 305,
      "class": "ImageResourceLevel",
      "height": 512
     }
    ]
   },
   "pitch": -9.94,
   "hfov": 10.84,
   "yaw": 36.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_752BA8F4_4DF2_F535_4196_A95C1DB42D1C",
 "data": {
  "label": " Living"
 }
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -2.26,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.74,
   "pitchSpeed": 1.49,
   "easing": "cubic_in_out",
   "yawSpeed": 1.98
  },
  {
   "targetYaw": -82.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4389C6C7_578A_D460_41B6_9956DBE6EB6A",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -2.26,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.74,
   "pitchSpeed": 1.44,
   "easing": "cubic_in_out",
   "yawSpeed": 1.89
  },
  {
   "targetYaw": -82.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44679699_578A_D4E0_41D3_E27C5303110E",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 27.96,
   "easing": "cubic_in_out",
   "yawSpeed": 55.17
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_430E075E_578A_D460_41AF_BAE6A7BAB90E",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 32.36,
   "easing": "cubic_in_out",
   "yawSpeed": 64.01
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45D1CEC1_578A_D460_41B9_2C820B79AEC2",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 3.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 11.81,
   "pitchSpeed": 37.63,
   "easing": "cubic_in_out",
   "yawSpeed": 74.6
  },
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_433A0C6E_578A_D420_41A2_A4C70F4E4C9D",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -20.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.01,
   "pitchSpeed": 13.19,
   "easing": "cubic_in_out",
   "yawSpeed": 25.5
  },
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4645B8B3_578A_DC20_41C7_5A1E1D9F04E0",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.09,
   "yaw": 120.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_433A2C6E_578A_D420_41BF_77188A29971A); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_462A83BB_578A_CC27_41BD_294F6EEE1F36",
   "pitch": -5.48,
   "hfov": 12.09,
   "yaw": 120.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66AA9141_4C12_B74F_4182_4D5CE8470BE4",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.75,
   "yaw": 78.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_437C2CA8_578A_D420_41CD_DAA76409E715); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_462A63BB_578A_CC27_41AF_BCC197F953F9",
   "pitch": -20.36,
   "hfov": 9.75,
   "yaw": 78.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_661206E1_4C15_9D4F_41B1_D784E4DD7ED9",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.85,
   "yaw": -156.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_2_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 38
     }
    ]
   },
   "pitch": -5.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_2_0.png",
      "width": 330,
      "class": "ImageResourceLevel",
      "height": 788
     }
    ]
   },
   "pitch": -5.32,
   "hfov": 11.85,
   "yaw": -156.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63D94153_4C16_B772_41CC_320A7C1BAC6A",
 "data": {
  "label": "Parrilla"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.56,
   "yaw": 79.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_429DDCC6_578A_D460_41D0_5045CAC42953); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_3_0.png",
      "width": 630,
      "class": "ImageResourceLevel",
      "height": 652
     }
    ]
   },
   "pitch": -18.22,
   "hfov": 21.56,
   "yaw": 79.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_639A064F_4C15_9D53_41CC_8D0F891DEB0D",
 "data": {
  "label": "      \u000d  Deck - Piscina\u000d"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.85,
   "yaw": -179.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_4_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_4_0.png",
      "width": 887,
      "class": "ImageResourceLevel",
      "height": 818
     }
    ]
   },
   "pitch": -4.4,
   "hfov": 31.85,
   "yaw": -179.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_604B1A6E_4C12_B555_41B9_113B7C073FFB",
 "data": {
  "label": "      \u000d       Kitchenette\u000d"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.19,
   "yaw": 120.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": -0.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_435C3C8A_578A_D4E0_41D4_3A515D9B4A25); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_5_0.png",
      "width": 449,
      "class": "ImageResourceLevel",
      "height": 652
     }
    ]
   },
   "pitch": -0.95,
   "hfov": 16.19,
   "yaw": 120.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_615CF70F_4C0D_BCD2_41C6_F2BE939B4F65",
 "data": {
  "label": "  Balc\u00f3n de\u000d  Habitaci\u00f3n\u000d    Master\u000d"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -59.16,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 45.28,
 "bleaching": 0.7,
 "id": "overlay_0D2A0CC2_4C0E_AD4D_41B5_7C511CCA84AF"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 52.95,
   "easing": "cubic_in_out",
   "yawSpeed": 105.38
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_466E08EC_578A_DC20_41C7_5A65C257D150",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 32.36,
   "easing": "cubic_in_out",
   "yawSpeed": 64.01
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45DECEA4_578A_D420_41C0_6F188F6685F5",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 25.18,
   "easing": "cubic_in_out",
   "yawSpeed": 49.59
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_46628908_578A_DDE0_41D1_F6CB3AD58C1B",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 12.43,
   "easing": "cubic_in_out",
   "yawSpeed": 23.96
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45B55E6A_578A_D420_4161_FDFD11B0A6A6",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "pitchSpeed": 31.86,
   "easing": "cubic_in_out",
   "yawSpeed": 63.02
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44C41ABE_578A_DC21_41C3_BB9CB057FFF2",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -20.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.01,
   "pitchSpeed": 20.96,
   "easing": "cubic_in_out",
   "yawSpeed": 41.11
  },
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4552D51C_578A_D5E0_41CC_0B92701B0EAB",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -51.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.33,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 142.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 72.48,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -1.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45062F50_578A_D460_41C9_0BB76E4D34CD",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 25.15,
   "easing": "cubic_in_out",
   "yawSpeed": 49.52
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_42BE5CE3_578A_D420_41AC_9A7F4780B996",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 47.32,
   "easing": "cubic_in_out",
   "yawSpeed": 94.07
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45CA999C_578A_DCE1_4192_2C13E3B2964A",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.25,
   "yaw": -128.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_462C13B9_578A_CC23_41C7_6326852466C7",
   "pitch": -8.08,
   "hfov": 23.25,
   "yaw": -128.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_647D9114_4C12_74F5_41CF_299D6FC64B1D",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.1,
   "yaw": -51.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_432E777B_578A_D420_41C2_2955F2BD4ED4); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_462BC3B9_578A_CC23_41D0_41D1CBD9E512",
   "pitch": -5,
   "hfov": 12.1,
   "yaw": -51.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_65D5C0C2_4C13_B54D_41C1_69BF7BCE4606",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.6,
   "yaw": 28.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_4370A7B8_578A_D420_41BC_609D0A2CE29E); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_462BA3BA_578A_CC21_41C8_6DDC1CE2A55E",
   "pitch": -29.25,
   "hfov": 10.6,
   "yaw": 28.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6610EADB_4C12_B572_419A_5D2ACB79AA0D",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.68,
   "yaw": -128.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": -8.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_42B207F3_578A_D420_41D3_DAE7A390ADDE); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_3_0.png",
      "width": 917,
      "class": "ImageResourceLevel",
      "height": 1518
     }
    ]
   },
   "pitch": -8.41,
   "hfov": 32.68,
   "yaw": -128.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_60C4A3D0_4C0F_9B4D_4194_30763AC2589E",
 "data": {
  "label": "  Habitaci\u00f3n\u000d     Master"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.01,
   "yaw": 28.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -27.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_429087D5_578A_D460_41C5_ABF50A8DF60D); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_4_0.png",
      "width": 471,
      "class": "ImageResourceLevel",
      "height": 526
     }
    ]
   },
   "pitch": -27.88,
   "hfov": 15.01,
   "yaw": 28.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6265BD1E_4C0E_6CF5_4194_D81FE8F9F4CD",
 "data": {
  "label": "     Deck\u000d"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.67,
   "yaw": -51.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -4.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_434EE799_578A_D4E0_41A7_F66599098660); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_5_0.png",
      "width": 520,
      "class": "ImageResourceLevel",
      "height": 553
     }
    ]
   },
   "pitch": -4.51,
   "hfov": 18.67,
   "yaw": -51.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_62DC11F1_4C33_F74E_41D1_2E11E02105BB",
 "data": {
  "label": "    Quincho"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -57.15,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 43.27,
 "bleaching": 0.7,
 "id": "overlay_72CD9B17_4C0E_74F3_4195_54A71D7C31BA"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 16.67,
   "easing": "cubic_in_out",
   "yawSpeed": 32.48
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_432671E7_578A_CC2F_41B7_EE6285D0BA57",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 18.64,
   "easing": "cubic_in_out",
   "yawSpeed": 36.44
  },
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_428C6243_578A_CC67_41C9_3CCE43631C93",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -20.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.01,
   "pitchSpeed": 31.52,
   "easing": "cubic_in_out",
   "yawSpeed": 62.33
  },
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44110051_578A_CC63_41CB_2B2ACE3A350A",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 83.13,
   "easing": "cubic_in_out",
   "yawSpeed": 166.03
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_452DBA0E_578A_DFE1_41BC_431F1C5EC214",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 4.75,
   "easing": "cubic_in_out",
   "yawSpeed": 8.54
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4391FB94_578A_DCE1_41C6_691447DC7C49",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.6,
   "yaw": -127.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_45B54E6A_578A_D420_41B1_4501A49672AB); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4602139A_578A_CCE1_41CA_89C5A888E895",
   "pitch": -31.48,
   "hfov": 23.6,
   "yaw": -127.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5A02EA85_4C12_F5D7_41D2_8FCF819F522E",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.8,
   "yaw": 156.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6, this.camera_458A4E2A_578A_D420_41D5_A0E9CC383219); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4601C39A_578A_CCE1_41D3_750F26D35948",
   "pitch": -8.77,
   "hfov": 17.8,
   "yaw": 156.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_59341A7B_4C15_9533_41C3_0487EA40E264",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.2,
   "yaw": -20.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4601A39A_578A_CCE1_41D3_D8474551FE5B",
   "pitch": -7.1,
   "hfov": 16.2,
   "yaw": -20.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5156665F_4C12_9D72_41B6_A38066CA80C7",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.2,
   "yaw": -161.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_459E6DEE_578A_D420_41C0_CDF49B997DF5); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4601639B_578A_CCE7_41CB_4E0B6D916B90",
   "pitch": 7.22,
   "hfov": 16.2,
   "yaw": -161.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_52E662BC_4C13_9535_41C3_08531DC1890E",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.4,
   "yaw": -127.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_4_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_45A9BE87_578A_D4E0_41CF_794C1ECEC824); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_4_0.png",
      "width": 741,
      "class": "ImageResourceLevel",
      "height": 345
     }
    ]
   },
   "pitch": -28.86,
   "hfov": 23.4,
   "yaw": -127.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_715392A3_4C0D_F5D1_41A3_454BAED9273F",
 "data": {
  "label": "      Sala - Centro"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.11,
   "yaw": -161.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 29
     }
    ]
   },
   "pitch": 11.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_4593CE0B_578A_D7E0_41B2_D050459611D5); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_5_0.png",
      "width": 342,
      "class": "ImageResourceLevel",
      "height": 629
     }
    ]
   },
   "pitch": 11.33,
   "hfov": 12.11,
   "yaw": -161.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7131CB8C_4C12_6BD6_41B2_B7A26C46B627",
 "data": {
  "label": "  Escalera\u000d Entrepiso"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.21,
   "yaw": -20.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": -4.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_6_0.png",
      "width": 368,
      "class": "ImageResourceLevel",
      "height": 557
     }
    ]
   },
   "pitch": -4.73,
   "hfov": 13.21,
   "yaw": -20.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_716119CF_4C17_9752_41CD_34F0DAA56395",
 "data": {
  "label": "  Piscinas"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.81,
   "yaw": 156.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_7_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -7.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6, this.camera_45BF5E49_578A_D460_41B1_39E6922DFDB5); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_7_0.png",
      "width": 498,
      "class": "ImageResourceLevel",
      "height": 696
     }
    ]
   },
   "pitch": -7.22,
   "hfov": 17.81,
   "yaw": 156.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_73B7B12B_4C16_B4D3_41BA_A0020CA60648",
 "data": {
  "label": "  Escritorio"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 46.6,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 75.68,
 "bleaching": 0.7,
 "id": "overlay_7279217F_4C0D_9732_41D1_FA5340FD8914"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -3.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.59,
   "pitchSpeed": 61.54,
   "easing": "cubic_in_out",
   "yawSpeed": 122.64
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44A87FFB_578A_D427_41BF_D34E12A8DDE1",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -82.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_771E9E9F_503A_3113_41CE_5824E21E1360",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "pitchSpeed": 5.92,
   "easing": "cubic_in_out",
   "yawSpeed": 10.89
  },
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_43B61BC1_578A_DC60_41C7_CB29DABBB665",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.85,
   "yaw": -14.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 17.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_43E3A19D_578A_CCE3_41C3_803C7099E225); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463123B1_578A_CC23_41CD_5564EE1D4EAC",
   "pitch": 17.13,
   "hfov": 16.85,
   "yaw": -14.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6E7D7ACC_4C72_9555_41C8_254666DCBD5A",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.2,
   "yaw": -6.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_42AC8262_578A_CC21_41B1_42BF2F08975C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463103B1_578A_CC23_41D2_7F7B0768785C",
   "pitch": -33.05,
   "hfov": 12.2,
   "yaw": -6.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_689FBDC5_4C76_EF56_41D0_FDE427A56FD1",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.24,
   "yaw": 6.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_4348C204_578A_CFE1_41B8_F19D58173423); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4630F3B1_578A_CC23_41CF_690C2774DDD8",
   "pitch": -26.36,
   "hfov": 6.24,
   "yaw": 6.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_68C43EA9_4C76_6DDE_41BC_6917D875D7F0",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.51,
   "yaw": -39.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_428C8243_578A_CC67_41C4_15F72CE3750D); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4630D3B1_578A_CC23_41CA_C79E3D73F011",
   "pitch": 10.78,
   "hfov": 4.51,
   "yaw": -39.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_696D3868_4C76_955E_41D2_B78938E57E51",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.44,
   "yaw": 130.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463083B2_578A_CC21_41CF_6E6E7FBC65E2",
   "pitch": -15.29,
   "hfov": 15.44,
   "yaw": 130.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_68EAA62C_4C72_BCD6_41AD_F2767561D35F",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.96,
   "yaw": -39.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 11.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_5_0.png",
      "width": 225,
      "class": "ImageResourceLevel",
      "height": 289
     }
    ]
   },
   "pitch": 11.82,
   "hfov": 7.96,
   "yaw": -39.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_62AE8006_4C3E_94D5_4195_37AB3152888F",
 "data": {
  "label": " Habitaci\u00f3n\u000d    Master"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.69,
   "yaw": -6.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_42CE427F_578A_CC1F_41CA_34CDAC0F9FCB); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_6_0.png",
      "width": 378,
      "class": "ImageResourceLevel",
      "height": 360
     }
    ]
   },
   "pitch": -30.96,
   "hfov": 11.69,
   "yaw": -6.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63036D8E_4C3D_AFD2_41CC_31017422F0F6",
 "data": {
  "label": "        Sala\u000d      Centro"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.96,
   "yaw": 15.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463023B2_578A_CC21_41CD_4486EEE7B10B",
   "pitch": 16.14,
   "hfov": 7.96,
   "yaw": 15.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63CFCEB6_4C32_AD32_41C6_39DBCAE7E4F6",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.29,
   "yaw": 16.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_8_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 17.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_4305B1CA_578A_CC61_41C2_814D7F56D9E9); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_8_0.png",
      "width": 474,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 17.52,
   "hfov": 16.29,
   "yaw": 16.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_630263E9_4C33_9B5F_41A8_0D731596BBA0",
 "data": {
  "label": "\u000d Habitaci\u00f3n"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.14,
   "yaw": -14.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_9_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 33
     }
    ]
   },
   "pitch": 19.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_432681E7_578A_CC2F_41D2_43E105A0BDF3); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_9_0.png",
      "width": 473,
      "class": "ImageResourceLevel",
      "height": 998
     }
    ]
   },
   "pitch": 19.29,
   "hfov": 16.14,
   "yaw": -14.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63881641_4C35_9D4F_41BF_500F021033D3",
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.34,
   "yaw": 130.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_10_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -13.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_10_0.png",
      "width": 465,
      "class": "ImageResourceLevel",
      "height": 515
     }
    ]
   },
   "pitch": -13.08,
   "hfov": 16.34,
   "yaw": 130.53,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63647F43_4C33_AB53_41D1_F19AB5488D5A",
 "data": {
  "label": "      Calle"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.4,
   "yaw": 6.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_11_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_4369E220_578A_CC21_41C3_1AE6627088BA); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_11_0.png",
      "width": 257,
      "class": "ImageResourceLevel",
      "height": 176
     }
    ]
   },
   "pitch": -25.06,
   "hfov": 8.4,
   "yaw": 6.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_638525C6_4C0D_9F52_41D1_E258508E5E91",
 "data": {
  "label": " Comedor"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 151.61,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 63.12,
 "bleaching": 0.7,
 "id": "overlay_72D70213_4C0F_94F3_41B8_F09D9513D0DA"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 10.4,
   "easing": "cubic_in_out",
   "yawSpeed": 19.89
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_466A942E_578A_D420_41CB_9AE09759B560",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 18.82,
   "easing": "cubic_in_out",
   "yawSpeed": 36.81
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45E984C0_578A_D460_41D1_7D63369BBB7E",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 33.92,
   "easing": "cubic_in_out",
   "yawSpeed": 67.14
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4403D607_578A_D7E0_41B8_FC37F728E434",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 45.57,
   "easing": "cubic_in_out",
   "yawSpeed": 90.55
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45EBCF16_578A_D5E0_41BA_6F2543E83241",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 18.82,
   "easing": "cubic_in_out",
   "yawSpeed": 36.81
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45C634A4_578A_D420_41C4_873B0F8C8308",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "pitchSpeed": 19.14,
   "easing": "cubic_in_out",
   "yawSpeed": 37.44
  },
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45BEC468_578A_D420_41CB_CBAD5F2490A6",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -51.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.33,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 142.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 72.48,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -1.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_453BAF5F_578A_D460_41CE_E9FFA8CEECD2",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 9.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.91,
   "pitchSpeed": 11.03,
   "easing": "cubic_in_out",
   "yawSpeed": 21.15
  },
  {
   "targetYaw": 71.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -21.54,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 108.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -20.29,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 172.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -97.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -10.49,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -37.81,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45777A4A_578A_DC61_41D0_179DDF86C098",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 54.98,
   "easing": "cubic_in_out",
   "yawSpeed": 109.47
  },
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_449EDFC3_578A_D467_41AB_2872141DFE3E",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -2.26,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.74,
   "pitchSpeed": 1.17,
   "easing": "cubic_in_out",
   "yawSpeed": 1.34
  },
  {
   "targetYaw": -82.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_43F8DC20_578A_D420_41D5_5EF037670877",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 71.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -21.54,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 108.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -20.29,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 172.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -97.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -10.49,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -37.81,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77F828FC_503E_5115_41CF_04F89C2CC876",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 16.67,
   "easing": "cubic_in_out",
   "yawSpeed": 32.48
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4305A1CA_578A_CC61_41C8_0D0C74184EE1",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -82.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_452E1F6E_578A_D420_41A7_FD35DBEB7A80",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 13.68,
   "easing": "cubic_in_out",
   "yawSpeed": 26.47
  },
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45B3995F_578A_DC1F_41D0_3B0597D1D5DE",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -20.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.01,
   "pitchSpeed": 20.96,
   "easing": "cubic_in_out",
   "yawSpeed": 41.11
  },
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4574E53B_578A_D420_41CB_B0BBC3D60ECF",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 13.68,
   "easing": "cubic_in_out",
   "yawSpeed": 26.47
  },
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4588C941_578A_DC63_41C3_C2E2043D1FAC",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -58.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -116.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -8.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -143.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 112.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 1.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_771E90F9_503A_511F_41C2_B9C904B98D71",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 26.93,
   "easing": "cubic_in_out",
   "yawSpeed": 53.11
  },
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4447066A_578A_D420_41C7_F05BA9612247",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 16.22,
   "easing": "cubic_in_out",
   "yawSpeed": 31.59
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_42CE327F_578A_CC1F_41CF_36716D515C8D",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "pitchSpeed": 31.86,
   "easing": "cubic_in_out",
   "yawSpeed": 63.02
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44DFBAA2_578A_DC21_41D0_1AB02F0A4A11",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 26.67,
   "easing": "cubic_in_out",
   "yawSpeed": 52.59
  },
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_42B1E7F3_578A_D420_41C5_2E0C4D376159",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 10.67,
   "easing": "cubic_in_out",
   "yawSpeed": 20.43
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44998A68_578A_DC21_41AF_5774349BCF55",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 54.36,
   "easing": "cubic_in_out",
   "yawSpeed": 108.22
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_429067D6_578A_D460_41D1_91B1B372F3A3",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 25.15,
   "easing": "cubic_in_out",
   "yawSpeed": 49.52
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_42DFBD00_578A_D5E0_41C6_861BE5DE6D40",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 36.52,
   "easing": "cubic_in_out",
   "yawSpeed": 72.37
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_437C3CA8_578A_D420_41D4_3F85443D0A7D",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 31.31,
   "easing": "cubic_in_out",
   "yawSpeed": 61.91
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44ECF035_578A_CC23_4195_5282767BC37D",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 10.67,
   "easing": "cubic_in_out",
   "yawSpeed": 20.43
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44BD2A86_578A_DCE1_41C8_BF2D5AC40948",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -20.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.01,
   "pitchSpeed": 31.52,
   "easing": "cubic_in_out",
   "yawSpeed": 62.33
  },
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4433606D_578A_CC23_4193_91E1CAE52D63",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.44,
   "yaw": -149.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_464653F4_578A_CC21_41AF_9009710C5A4E); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_462D33B8_578A_CC21_4198_5C81FE431E58",
   "pitch": -13.23,
   "hfov": 19.44,
   "yaw": -149.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_649BC5B9_4C16_9F3F_41CE_03F1CF8B85B0",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.68,
   "yaw": -149.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": -13.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_467A9411_578A_CBE3_41C7_A93438425303); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_1_0.png",
      "width": 618,
      "class": "ImageResourceLevel",
      "height": 1026
     }
    ]
   },
   "pitch": -13.12,
   "hfov": 21.68,
   "yaw": -149.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_60A2EB4F_4C35_EB53_41BB_7B4C45E778F5",
 "data": {
  "label": "  Habitaci\u00f3n\u000d     Master"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 138.05,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 7.35,
 "bleaching": 0.7,
 "id": "overlay_0DB44A7A_4C0E_953D_41C6_712CBBF32DAF"
},
{
 "bleachingDistance": 0.4,
 "yaw": 121.21,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 6.85,
 "bleaching": 0.7,
 "id": "overlay_0DBC62EA_4C0E_F55D_41CB_80F63DC048E7"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 27.96,
   "easing": "cubic_in_out",
   "yawSpeed": 55.17
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_43EC4740_578A_D460_41A9_E9B1BE6DE4CC",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 3.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 11.81,
   "pitchSpeed": 15.44,
   "easing": "cubic_in_out",
   "yawSpeed": 30.01
  },
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45F609B8_578A_DC21_418E_A223F7A95A53",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 20.07,
   "easing": "cubic_in_out",
   "yawSpeed": 39.32
  },
  {
   "targetYaw": -58.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -116.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -8.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -143.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 112.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 1.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_43CC7722_578A_D420_41AA_8514885A4C2A",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 68.83,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.57,
   "pitchSpeed": 17.39,
   "easing": "cubic_in_out",
   "yawSpeed": 33.93
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -29.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -25.81,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -153.37,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.51,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 133.78,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 71.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -34.35,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_458A5E2A_578A_D420_41D0_F7D89EE239E2",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -3.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.59,
   "pitchSpeed": 61.96,
   "easing": "cubic_in_out",
   "yawSpeed": 123.49
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4593DE0B_578A_D7E0_41D5_B5841E71A5CC",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 10.4,
   "easing": "cubic_in_out",
   "yawSpeed": 19.89
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4597944B_578A_D460_41CD_97778AFA5045",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "pitchSpeed": 1.39,
   "easing": "cubic_in_out",
   "yawSpeed": 1.78
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_43C2D16F_578A_CC3F_41A8_71EBB539924E",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 40.95,
   "easing": "cubic_in_out",
   "yawSpeed": 81.27
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4201ED5A_578A_D460_41D3_85249648CF2A",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "pitchSpeed": 17.82,
   "easing": "cubic_in_out",
   "yawSpeed": 34.8
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4369C220_578A_CC21_41B1_94D3AC7B98D0",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -164.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.33,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 47.32,
   "easing": "cubic_in_out",
   "yawSpeed": 94.07
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45DFC97F_578A_DC1F_41CF_D477AAAB81CE",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "pitchSpeed": 1.39,
   "easing": "cubic_in_out",
   "yawSpeed": 1.78
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_43A1813E_578A_CC21_41BD_D29842246872",
 "restartMovementOnUserInteraction": true
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "container_46045395_578A_CCE3_41C9_92F7F2A7E658",
 "backgroundOpacity": 0.3,
 "children": [
  "this.viewer_uid46049395_578A_CCE3_41B8_354CC4A205E2",
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "left": 0,
   "children": [
    "this.htmltext_46040396_578A_CCE1_41B2_5781C90FF532"
   ],
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0.3,
   "right": 0,
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "overflow": "scroll",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "class": "Container",
   "verticalAlign": "bottom",
   "bottom": 0,
   "backgroundColor": [],
   "minWidth": 20,
   "layout": "vertical",
   "height": "30%",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "contentOpaque": true,
   "scrollBarColor": "#FFFFFF",
   "data": {
    "name": "Container2685"
   },
   "shadow": false
  },
  "this.component_4603C396_578A_CCE1_41CA_725A0E005936",
  "this.component_4603D396_578A_CCE1_41BB_3765BF97F247"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container2684"
 },
 "shadow": false
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 16.22,
   "easing": "cubic_in_out",
   "yawSpeed": 31.59
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_42AC7262_578A_CC21_4168_ADA865C6F81D",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 11.8,
   "easing": "cubic_in_out",
   "yawSpeed": 22.71
  },
  {
   "targetYaw": -150.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 115.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 74.24,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_450C04DC_578A_D460_41C9_C86F1119A674",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "pitchSpeed": 19.14,
   "easing": "cubic_in_out",
   "yawSpeed": 37.44
  },
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_45A38486_578A_D4E0_41C8_C15A7DCA8580",
 "restartMovementOnUserInteraction": true
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_46040396_578A_CCE1_41B2_5781C90FF532, this.albumitem_46046395_578A_CCE3_41CA_8920B223FE26); this.loopAlbum(this.playList_43E0A2E2_579B_4C20_41CD_71EE4266106A, 0)",
 "player": "this.viewer_uid46049395_578A_CCE3_41B8_354CC4A205E2PhotoAlbumPlayer",
 "id": "albumitem_46046395_578A_CCE3_41CA_8920B223FE26"
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_7703348F_503A_71F2_41B8_C8F2687D9078",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 49.5,
   "easing": "cubic_in_out",
   "yawSpeed": 98.46
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_44C095B6_578A_D420_41CC_94699FD4CA9D",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "pitchSpeed": 5.92,
   "easing": "cubic_in_out",
   "yawSpeed": 10.89
  },
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_43D6BBF4_578A_DC20_41C3_C3E1BC3245AC",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 25.18,
   "easing": "cubic_in_out",
   "yawSpeed": 49.59
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4595B925_578A_DC20_4192_FA84C902F5C0",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 3.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 11.81,
   "pitchSpeed": 15.44,
   "easing": "cubic_in_out",
   "yawSpeed": 30.01
  },
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_451EF9D5_578A_DC63_41D0_409396700B71",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.71,
   "yaw": -0.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_45EBFF16_578A_D5E0_41CD_5797C2414326); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463323AE_578A_CC21_41CF_F59D0C20B9A5",
   "pitch": -7.02,
   "hfov": 10.71,
   "yaw": -0.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6DA7B985_4C73_97D6_41C8_FAF959F094CC",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.83,
   "yaw": -56.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_45C51EDD_578A_D460_41C5_9845AA91CC95); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463313AF_578A_CC3F_41CC_F0CD83A421D4",
   "pitch": -1.75,
   "hfov": 8.83,
   "yaw": -56.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6FA18F6B_4C72_EB52_418D_A4752C2B79FF",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.01,
   "yaw": -80.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4632F3AF_578A_CC3F_41C6_C66C457E5F00",
   "pitch": -4.51,
   "hfov": 6.01,
   "yaw": -80.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6D9129AB_4C72_97D2_41B3_BC9D00327413",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.65,
   "yaw": -92.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_45DEFEA4_578A_D420_417F_5B8C840CA34A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4632D3AF_578A_CC3F_41D0_6C873A97AA45",
   "pitch": -11.83,
   "hfov": 13.65,
   "yaw": -92.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6ED1C9D5_4C7E_9776_41CD_EA10811A7BB1",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.11,
   "yaw": -108.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463283AF_578A_CC3F_41D1_FF4615219B93",
   "pitch": -2.7,
   "hfov": 7.11,
   "yaw": -108.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6FC82723_4C7D_BCD2_41C6_ED142E41D1F5",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.95,
   "yaw": -0.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_451D2F34_578A_D420_41BB_C686636EB16E); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_5_0.png",
      "width": 360,
      "class": "ImageResourceLevel",
      "height": 371
     }
    ]
   },
   "pitch": -5.23,
   "hfov": 12.95,
   "yaw": -0.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_630303B6_4C15_9B35_41A7_0FE1D2CE67BA",
 "data": {
  "label": "     Deck"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.32,
   "yaw": -108.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 28
     }
    ]
   },
   "pitch": -2.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_6_0.png",
      "width": 203,
      "class": "ImageResourceLevel",
      "height": 360
     }
    ]
   },
   "pitch": -2.38,
   "hfov": 7.32,
   "yaw": -108.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7C2FC9D8_4C17_F77D_41C5_180CBDEF7BDE",
 "data": {
  "label": " Cocina"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.29,
   "yaw": -56.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -1.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_45F92EFA_578A_D420_419E_8677FD2EDDCE); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_7_0.png",
      "width": 369,
      "class": "ImageResourceLevel",
      "height": 422
     }
    ]
   },
   "pitch": -1.21,
   "hfov": 13.29,
   "yaw": -56.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7E11B26A_4C16_9552_41A3_28556ECCB81C",
 "data": {
  "label": "    Parrilla"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.22,
   "yaw": -92.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_8_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": -9.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_45D1EEC1_578A_D460_41CD_B093C2122595); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_8_0.png",
      "width": 287,
      "class": "ImageResourceLevel",
      "height": 473
     }
    ]
   },
   "pitch": -9.75,
   "hfov": 10.22,
   "yaw": -92.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7D6E9EA6_4C12_EDD5_41C5_9E91663C2E02",
 "data": {
  "label": " Quincho"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.84,
   "yaw": -80.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_9_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -2.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_9_0.png",
      "width": 190,
      "class": "ImageResourceLevel",
      "height": 263
     }
    ]
   },
   "pitch": -2.96,
   "hfov": 6.84,
   "yaw": -80.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7D0ECB6B_4C13_EB53_41BC_4ED41580DB7D",
 "data": {
  "label": " Pasillo"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -45.09,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 63.37,
 "bleaching": 0.7,
 "id": "overlay_0D1F1C5B_4C0F_ED73_41C2_D93B0423D556"
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "rotationX": -36.13,
 "blending": 0,
 "id": "overlay_779DF13E_56C3_3919_41A5_CE0412598D4D",
 "roll": 0.3,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_779DF13E_56C3_3919_41A5_CE0412598D4D_t.jpg",
    "width": 466,
    "class": "ImageResourceLevel",
    "height": 690
   }
  ]
 },
 "pitch": 36.7,
 "chromaSmoothing": 0.32,
 "yaw": -0.9,
 "chromaColor": "#3A9BFF",
 "autoplay": true,
 "vfov": 139.59,
 "rotationY": -1.01,
 "useHandCursor": true,
 "hfov": 102.03,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.02,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 466,
  "mp4Url": "media/video_76BF82AE_56C2_FB39_41D0_DF287E74780C.mp4",
  "class": "VideoResource",
  "height": 690
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.38,
   "yaw": -20.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_42C05D1E_578A_D5E0_41AC_92A2EC1D533B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463893A7_578A_CC2F_41CA_3B7596EE8497",
   "pitch": -14.93,
   "hfov": 17.38,
   "yaw": -20.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_55BD891B_4C12_F4F2_41BF_BD7A099FA4FB",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.74,
   "yaw": 42.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_42021D5A_578A_D460_41C2_4F634E337D0A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463873A7_578A_CC2F_4177_CA0CABF2BC10",
   "pitch": -5.61,
   "hfov": 10.74,
   "yaw": 42.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_569D5C53_4C13_ED72_41C5_56F2E1168FED",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.76,
   "yaw": 88.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_42BE4CE3_578A_D420_41AB_49E8F3C564F9); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_463853A7_578A_CC2F_41BB_8ECCA8FB60A2",
   "pitch": -4.45,
   "hfov": 10.76,
   "yaw": 88.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_55344675_4C12_7D37_41CA_0C7A84DACAAA",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.47,
   "yaw": 88.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": -3.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_42DFAD00_578A_D5E0_41B0_168A044B620A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_3_0.png",
      "width": 263,
      "class": "ImageResourceLevel",
      "height": 415
     }
    ]
   },
   "pitch": -3.08,
   "hfov": 9.47,
   "yaw": 88.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_79858F87_4C0D_ABD3_41C2_6BD4B90B4286",
 "data": {
  "label": "  Quincho"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.32,
   "yaw": -20.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_4_0_map.gif",
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_42E25D3D_578A_D420_41D5_DCF9D476735E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_4_0.png",
      "width": 465,
      "class": "ImageResourceLevel",
      "height": 233
     }
    ]
   },
   "pitch": -13.12,
   "hfov": 16.32,
   "yaw": -20.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7A5E25AC_4C0D_9FD5_41A7_29C3FBE038B8",
 "data": {
  "label": "       Parrilla"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.17,
   "yaw": 42.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": -3.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_42213D7A_578A_D420_418C_D6C1A86A4212); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_5_0.png",
      "width": 255,
      "class": "ImageResourceLevel",
      "height": 375
     }
    ]
   },
   "pitch": -3.17,
   "hfov": 9.17,
   "yaw": 42.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7ABCF3A7_4DF3_FBD3_41D0_D18E2BE7D6F6",
 "data": {
  "label": "  Deck"
 }
},
{
 "inertia": false,
 "hfov": 37.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -2.26,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.74,
   "pitchSpeed": 1.44,
   "easing": "cubic_in_out",
   "yawSpeed": 1.89
  },
  {
   "targetYaw": -82.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4319CC52_578A_D460_41D1_8CF3AEB83067",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 20.07,
   "easing": "cubic_in_out",
   "yawSpeed": 39.32
  },
  {
   "targetYaw": -58.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -116.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -8.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -143.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 112.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 1.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_43AA56FB_578A_D420_41CF_75013B97A553",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 26.93,
   "easing": "cubic_in_out",
   "yawSpeed": 53.11
  },
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_4424B636_578A_D420_41D5_56EA130DF46A",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 16.54,
   "easing": "cubic_in_out",
   "yawSpeed": 32.23
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_42C02D1E_578A_D5E0_41CE_31308181E40D",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -3.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.59,
   "pitchSpeed": 61.96,
   "easing": "cubic_in_out",
   "yawSpeed": 123.49
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_459E7DEE_578A_D420_41D2_72B6F22E9890",
 "restartMovementOnUserInteraction": true
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "maxHeight": 95,
 "maxWidth": 250,
 "id": "Image_5EF9A31F_502E_7713_41B1_155B9E9559BD",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_5EF9A31F_502E_7713_41B1_155B9E9559BD.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2705"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Image",
 "verticalAlign": "middle",
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 20,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "middle",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 51,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingBottom": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_402E3BC3_565F_296F_41AF_19D956287FE7",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "8.685%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "bottom": "0%",
 "height": "44.915%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container4584"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "3%",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "3%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "3%",
 "verticalAlign": "top",
 "bottom": "3%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "3%",
 "width": 1557.46,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "3%",
 "verticalAlign": "top",
 "bottom": "90.63%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 10,
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "3%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "3%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "3%",
 "verticalAlign": "top",
 "bottom": "3%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "3%",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "3%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "3%",
 "verticalAlign": "top",
 "bottom": "3%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "3%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "3%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "3%",
 "verticalAlign": "top",
 "bottom": "90%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 10,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6B7B3538_502A_54D0_41D0_9A6D5FB5A723",
 "left": "3%",
 "children": [
  "this.Container_6B7B7538_502A_54D0_41B6_8F7020C59B3D"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "3%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "class": "Container",
 "top": "3%",
 "verticalAlign": "top",
 "bottom": "3%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_6B7BD538_502A_54D0_41CC_674161DF5902",
 "left": "3%",
 "children": [
  "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "3%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "3%",
 "verticalAlign": "middle",
 "bottom": "90%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 5,
 "paddingBottom": 5,
 "gap": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_463C43A1_578A_CC23_41D0_B0F59FE8E900",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_463C33A1_578A_CC23_41CF_75D7A27E0D15",
 "rowCount": 6,
 "frameCount": 24
},
{
 "progressBarBorderSize": 6,
 "id": "viewer_uid4613638F_578A_CCFF_4195_39F80B8F7AD5",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "ViewerArea2671"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmltext_46116390_578A_CCE1_41C6_1E9C9F5B3320",
 "backgroundOpacity": 0.7,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "borderSize": 0,
 "html": "",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText2674"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "id": "component_46113390_578A_CCE1_419F_01DE25364369",
 "left": 10,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": "45%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "borderSize": 0,
 "iconURL": "skin/album_left.png",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton2675"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "component_46110390_578A_CCE1_41C3_B368AB2105D7",
 "backgroundOpacity": 0,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "right": 10,
 "borderRadius": 0,
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": "45%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, 1)",
 "borderSize": 0,
 "iconURL": "skin/album_right.png",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton2676"
 },
 "cursor": "hand"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4605F393_578A_CCE7_41A8_2E5CABA0FEA5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_46031397_578A_CCEF_418A_2E6963C1846A",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4602C397_578A_CCEF_41BA_640961170C0F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4602A397_578A_CCEF_41BD_37BE2C62D9C7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_46029398_578A_CCE1_41C3_6DD46AA3818D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_46027398_578A_CCE1_41B3_90A472CB243E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_46025398_578A_CCE1_419E_99040256B3F6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_14_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4602839A_578A_CCE1_4188_DC1D2176C09E",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_462F03B4_578A_CC21_41B3_A1AA53B8154D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_462EF3B4_578A_CC21_41C8_2328D2E355F3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_462ED3B4_578A_CC21_41C0_AAC886440727",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4639A3A3_578A_CC27_41D3_45CB3EBDF74A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_463963A4_578A_CC21_41D3_FD4E4B497C31",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463933A4_578A_CC21_41B3_EE93824752DA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463913A5_578A_CC23_419C_62E443FDB271",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4638F3A5_578A_CC23_41C7_4D4CECF1922C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4638A3A5_578A_CC23_41C1_26A4542089A9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463753A8_578A_CC21_415E_F99B87A66EE8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463703A9_578A_CC23_4196_305047996703",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_4636E3A9_578A_CC23_41D2_3869D0FFBCD7",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4636C3A9_578A_CC23_41A0_8A6A075DB08B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "viewerArea": "this.viewer_uid46054394_578A_CCE1_41D3_788A58239514",
 "id": "viewer_uid46054394_578A_CCE1_41D3_788A58239514PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4600739C_578A_CCE1_41D2_DB7C7D76CC12",
 "rowCount": 6,
 "frameCount": 24
},
{
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "viewerArea": "this.viewer_uid4613638F_578A_CCFF_4195_39F80B8F7AD5",
 "id": "viewer_uid4613638F_578A_CCFF_4195_39F80B8F7AD5PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_462F73B5_578A_CC23_41C7_CAC321B2990E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463583AB_578A_CC27_41B1_3F4AD8ABA6D9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463573AB_578A_CC27_41AB_51ADF921096C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463523AB_578A_CC27_41D5_7BA6F399ACC7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463503AC_578A_CC21_41B3_E317889E65DA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4634C3AC_578A_CC21_41D3_EC663B26A8A0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4634B3AC_578A_CC21_4176_0FD0111AB83C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "progressBarBorderSize": 6,
 "id": "viewer_uid46054394_578A_CCE1_41D3_788A58239514",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "ViewerArea2677"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmltext_4604E394_578A_CCE1_4198_5698060EF25B",
 "backgroundOpacity": 0.7,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "borderSize": 0,
 "html": "",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText2680"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "id": "component_4604D395_578A_CCE3_41CC_6BB65A8071C9",
 "left": 10,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": "45%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "borderSize": 0,
 "iconURL": "skin/album_left.png",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton2681"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "component_4604A395_578A_CCE3_41C5_76E2BD4AB8EC",
 "backgroundOpacity": 0,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "right": 10,
 "borderRadius": 0,
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": "45%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, 1)",
 "borderSize": 0,
 "iconURL": "skin/album_right.png",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton2682"
 },
 "cursor": "hand"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_463F339D_578A_CCE3_41D1_3631FF6C27ED",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_463EF39D_578A_CCE3_41CF_D1E18690F2CB",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_463ED39E_578A_CCE1_41D0_610BAEF0DA27",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463EB39E_578A_CCE1_41C3_7AD45D703DEA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_463B03A2_578A_CC21_41B1_F67455931B49",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_463AE3A2_578A_CC21_41D0_287AF8446F3A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463AD3A2_578A_CC21_41D3_B17EAECA0E19",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_462E93B6_578A_CC21_41AD_4DB329DA9C23",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_462E43B7_578A_CC2F_41D3_FF306DE816E1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_462E23B7_578A_CC2F_41D4_3FB2A66D9F25",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_463D439F_578A_CC1F_41CD_0D7FCCF28FF5",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_463D33A0_578A_CC21_41CC_45BACEE648B0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_462A83BB_578A_CC27_41BD_294F6EEE1F36",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_462A63BB_578A_CC27_41AF_BCC197F953F9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_462C13B9_578A_CC23_41C7_6326852466C7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_462BC3B9_578A_CC23_41D0_41D1CBD9E512",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_462BA3BA_578A_CC21_41C8_6DDC1CE2A55E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_4602139A_578A_CCE1_41CA_89C5A888E895",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4601C39A_578A_CCE1_41D3_750F26D35948",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4601A39A_578A_CCE1_41D3_D8474551FE5B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4601639B_578A_CCE7_41CB_4E0B6D916B90",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463123B1_578A_CC23_41CD_5564EE1D4EAC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463103B1_578A_CC23_41D2_7F7B0768785C",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4630F3B1_578A_CC23_41CF_690C2774DDD8",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4630D3B1_578A_CC23_41CA_C79E3D73F011",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463083B2_578A_CC21_41CF_6E6E7FBC65E2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_463023B2_578A_CC21_41CD_4486EEE7B10B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_462D33B8_578A_CC21_4198_5C81FE431E58",
 "rowCount": 6,
 "frameCount": 24
},
{
 "progressBarBorderSize": 6,
 "id": "viewer_uid46049395_578A_CCE3_41B8_354CC4A205E2",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "ViewerArea2683"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmltext_46040396_578A_CCE1_41B2_5781C90FF532",
 "backgroundOpacity": 0.7,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "borderSize": 0,
 "html": "",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText2686"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "id": "component_4603C396_578A_CCE1_41CA_725A0E005936",
 "left": 10,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": "45%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "borderSize": 0,
 "iconURL": "skin/album_left.png",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton2687"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "component_4603D396_578A_CCE1_41BB_3765BF97F247",
 "backgroundOpacity": 0,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "right": 10,
 "borderRadius": 0,
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": "45%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, 1)",
 "borderSize": 0,
 "iconURL": "skin/album_right.png",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton2688"
 },
 "cursor": "hand"
},
{
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "viewerArea": "this.viewer_uid46049395_578A_CCE3_41B8_354CC4A205E2",
 "id": "viewer_uid46049395_578A_CCE3_41B8_354CC4A205E2PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463323AE_578A_CC21_41CF_F59D0C20B9A5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463313AF_578A_CC3F_41CC_F0CD83A421D4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4632F3AF_578A_CC3F_41C6_C66C457E5F00",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_4632D3AF_578A_CC3F_41D0_6C873A97AA45",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_463283AF_578A_CC3F_41D1_FF4615219B93",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_463893A7_578A_CC2F_41CA_3B7596EE8497",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463873A7_578A_CC2F_4177_CA0CABF2BC10",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_463853A7_578A_CC2F_41BB_8ECCA8FB60A2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "width": 60,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter('https://sr1.visitapy.com')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook('https://sr1.visitapy.com')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "backgroundOpacity": 0,
 "width": 54,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, true, 0, null, null, false)",
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "INFO",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "backgroundOpacity": 0,
 "width": 107,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "PERSPECTIVAS",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button panorama list"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "backgroundOpacity": 0,
 "width": 83,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "UBICACI\u00d3N",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button location"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "backgroundOpacity": 0,
 "width": 55,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.showPopupMedia(this.window_73465F18_502E_CF1D_41D3_CDAB91BFC330, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_43F2D2D2_579B_4C61_41D5_D81D8AC00F2E, '90%', '90%', true, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "FOTOS",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button photoalbum"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "backgroundOpacity": 0,
 "width": 83,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "CONTACTO",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button realtor"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "backgroundOpacity": 1,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Image_475656B5_506E_3117_41A0_63C52AAB81EA"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 60,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "backgroundOpacity": 0.05,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "paddingLeft": 30,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "ThumbnailGrid",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "height": "91.025%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 156,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingRight": 30,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 0,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 0,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 10,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Montserrat"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "99.97%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.51,
 "id": "Container_6B7B7538_502A_54D0_41B6_8F7020C59B3D",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "99.97%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "right": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minHeight": 1,
 "class": "ViewerArea",
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "bottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 907,
 "maxWidth": 1322,
 "id": "Image_475656B5_506E_3117_41A0_63C52AAB81EA",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_475656B5_506E_3117_41A0_63C52AAB81EA.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image6016"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "87.625%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "86.335%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 20,
 "borderRadius": 0,
 "minHeight": 60,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "-2.56%",
 "height": "74.423%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.36vh;font-family:'Arimo';\">PERSPECTIVAS</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "bottom": 12,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 40,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "right": "0%",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.914933481306!2d-57.50898168457854!3d-25.2397899838764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzIzLjIiUyA1N8KwMzAnMjQuNSJX!5e0!3m2!1ses-419!2spy!4v1581896704972!5m2!1ses-419!2spy",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "WebFrame",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "Image",
 "propagateClick": true,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image24645"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "89.701%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.14vh;font-family:'Arimo';\">Residencia en</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.37vh;font-family:'Arimo';\">Rakiura Country</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">En el barrio privado m\u00e1s seguro y codiciado de Asunci\u00f3n. La zona del m\u00e1s alto nivel y de una comunidad excelente.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\">Superficie construida de 600m2.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\"><B>Planta alta:</B></SPAN><SPAN STYLE=\"font-size:1.79vh;\"> 4 dormitorios en suite con piso de madera de lapacho trabajado, el dormitorio matrimonial con vestidor y ba\u00f1o con hidromasaje, amplia terraza con parrilla y kichenette.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\"><B>Planta Baja: </B></SPAN><SPAN STYLE=\"font-size:1.79vh;\">Amplio living comedor social, comedor y estar diario integrado de 15x9 mts aprox, sala de cine, gimnasio, doble piscina con deck de madera, quincho equipado con vinero y visicooler, cocina equipada y amoblada, sauna a vapor, hermoso jard\u00edn, cochera para 4 veh\u00edculos, </SPAN><SPAN STYLE=\"font-size:1.79vh;\"><I>Incluye todos los beneficios del club Rakiura</I></SPAN><SPAN STYLE=\"font-size:1.79vh;\">.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "backgroundOpacity": 0.75,
 "width": "46%",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CC33"
 ],
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
 "iconHeight": 32,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColor": [
  "#00CC00"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "9%",
 "fontSize": "3vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "WhatsApp",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontWeight": "normal"
}],
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getKey": function(key){  return window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
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
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
