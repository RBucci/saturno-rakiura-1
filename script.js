(function(){
    var script = {
 "start": "this.playAudioList([this.audio_40902BBE_4F98_F5B3_417E_215EADC2E939, this.audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2, this.audio_415957D2_4F99_1DF3_41B4_57B956E9370A, this.audio_4163BD09_4F99_7251_41A9_48527994202E, this.audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE, this.audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54, this.audio_40D48334_4F99_F6B7_41B6_51185E4DCB63]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); var self = this; this.autotriggerAtStart(this.mainPlayList, function(){ self.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D.trigger('click') }, true); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "class": "Player",
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
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 131.77,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_0329F664_5026_7577_41D4_AA4C801405AF",
 "idleSequence": "this.sequence_0329F664_5026_7577_41D4_AA4C801405AF",
 "id": "camera_0329E663_5026_7570_41B3_48CE7F4A6910",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -87.68,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -3.27
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "idleSequence": "this.sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -173.37,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_013934A9_5026_75F1_41CD_01C2417BEE0F",
 "idleSequence": "this.sequence_013934A9_5026_75F1_41CD_01C2417BEE0F",
 "id": "camera_0139D4A9_5026_75F1_41C9_7B5A06C1C33C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 10.36,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1B51CEF6_5026_5550_4198_32D9A4A50EA3",
 "idleSequence": "this.sequence_1B51CEF6_5026_5550_4198_32D9A4A50EA3",
 "id": "camera_1B51AEF6_5026_5550_41C4_862663D1CFDC",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ba\u00f1o - Habitaci\u00f3n Master",
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
 "class": "Panorama",
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
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 128.66,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_04F2604B_5026_6CB0_41D0_F4A5FD554F5C",
 "idleSequence": "this.sequence_04F2604B_5026_6CB0_41D0_F4A5FD554F5C",
 "id": "camera_04F2104B_5026_6CB0_41D0_772F3C4746CF",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77007457_503E_7113_41B9_B797530AF0B3",
 "idleSequence": "this.sequence_77007457_503E_7113_41B9_B797530AF0B3",
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.1,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_19535C7B_5026_5550_41C3_3DB4E11FCA20",
 "idleSequence": "this.sequence_19535C7B_5026_5550_41C3_3DB4E11FCA20",
 "id": "camera_19532C7B_5026_5550_41CF_632DCDD96D38",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.36,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_0756D2AF_5026_6DF0_41D0_4F2B4DE7CBBA",
 "idleSequence": "this.sequence_0756D2AF_5026_6DF0_41D0_4F2B4DE7CBBA",
 "id": "camera_0756C2AF_5026_6DF0_41B0_F1A4714C4E11",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 123.41,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_043C0011_5026_6CD0_41D3_702DE3983900",
 "idleSequence": "this.sequence_043C0011_5026_6CD0_41D3_702DE3983900",
 "id": "camera_043C3011_5026_6CD0_41CB_5D20663334BB",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 68.83,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 13.57
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77024918_503A_F31E_41AF_34F62C64FEBB",
 "idleSequence": "this.sequence_77024918_503A_F31E_41AF_34F62C64FEBB",
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -91.69,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_18CBAB42_5026_5CB3_41A7_FC4B3285D00E",
 "idleSequence": "this.sequence_18CBAB42_5026_5CB3_41A7_FC4B3285D00E",
 "id": "camera_18CBBB42_5026_5CB3_4179_2FEA93AD796B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 163.49,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_056C20BC_5026_6DD0_41C7_77826A56B98A",
 "idleSequence": "this.sequence_056C20BC_5026_6DD0_41C7_77826A56B98A",
 "id": "camera_056CD0BC_5026_6DD0_41A3_6F6CE2755FBA",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_002F83A9_5026_73F1_41D0_55A3E613C760",
 "idleSequence": "this.sequence_002F83A9_5026_73F1_41D0_55A3E613C760",
 "id": "camera_002FA3A9_5026_73F1_41C9_38CC1CBD3548",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_40D48334_4F99_F6B7_41B6_51185E4DCB63.ogg",
  "mp3Url": "media/audio_40D48334_4F99_F6B7_41B6_51185E4DCB63.mp3",
  "class": "AudioResource"
 },
 "id": "audio_40D48334_4F99_F6B7_41B6_51185E4DCB63",
 "class": "MediaAudio",
 "data": {
  "label": "Sunday Walk (Full)"
 }
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_t.png",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "label": "\u00c1lbum de Fotos",
 "class": "PhotoAlbum",
 "playList": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.65,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_18B20BB2_5026_53D0_41C0_D9757EA12BAF",
 "idleSequence": "this.sequence_18B20BB2_5026_53D0_41C0_D9757EA12BAF",
 "id": "camera_18B21BB2_5026_53D0_41CF_A595081B5CBE",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -35.28,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_18A70B79_5026_5350_41D0_29105D6BAF93",
 "idleSequence": "this.sequence_18A70B79_5026_5350_41D0_29105D6BAF93",
 "id": "camera_18A71B79_5026_5350_41D3_FCCCC3E48C95",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 163.49,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_048940A0_5026_6DF0_41BF_F7931211E647",
 "idleSequence": "this.sequence_048940A0_5026_6DF0_41BF_F7931211E647",
 "id": "camera_048960A0_5026_6DF0_41BE_B61EBF5BADFC",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.75,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 8.04
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_770D5914_503A_D315_41C7_BD98E4CD29E4",
 "idleSequence": "this.sequence_770D5914_503A_D315_41C7_BD98E4CD29E4",
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -23.69,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_01DBA4FC_5026_7557_41D1_2EA8150C9EB5",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_01DBA4FC_5026_7557_41D1_2EA8150C9EB5",
 "id": "camera_01DC44FC_5026_7557_41C0_96EFC2EC3EC8",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -151.46,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_0693D278_5026_6D50_4199_6AA33CAD75CE",
 "idleSequence": "this.sequence_0693D278_5026_6D50_4199_6AA33CAD75CE",
 "id": "camera_0693F277_5026_6D50_4184_967EC85AF9D2",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -164.3,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1B33FF12_5026_54D0_41C7_EAED0824D501",
 "idleSequence": "this.sequence_1B33FF12_5026_54D0_41C7_EAED0824D501",
 "id": "camera_1B33AF12_5026_54D0_41D3_76EABFC6753F",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_000013C6_5026_73B3_41D3_038BFDDEDCE5",
 "idleSequence": "this.sequence_000013C6_5026_73B3_41D3_038BFDDEDCE5",
 "id": "camera_000003C6_5026_73B3_41AE_E01E92D3FCC0",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Planta Alta - Quincho con Parrilla",
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
 "class": "Panorama",
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
 "hfovMax": 120
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20",
 "class": "Photo",
 "width": 2000,
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 92.55,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_02511569_5026_7771_41CE_796DE99E1D26",
 "idleSequence": "this.sequence_02511569_5026_7771_41CE_796DE99E1D26",
 "id": "camera_02512569_5026_7771_41D2_1C136E46DA5A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 18.21,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_199B8DA7_5026_57F0_41C4_7D4A05C28D74",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_199B8DA7_5026_57F0_41C4_7D4A05C28D74",
 "id": "camera_199C6DA7_5026_57F0_41C8_EAB298D3909C",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Sala - Centro",
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
 "class": "Panorama",
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
  "this.overlay_184877BD_507A_33D1_41CE_B68B3FD43F2E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 95.21,
   "class": "AdjacentPanorama",
   "backwardYaw": -127.28,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "yaw": 95.15,
   "class": "AdjacentPanorama",
   "backwardYaw": -127.28,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
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
   "yaw": -179.95,
   "class": "AdjacentPanorama",
   "backwardYaw": -2.15,
   "panorama": "this.panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9",
   "distance": 1
  },
  {
   "yaw": -179.95,
   "class": "AdjacentPanorama",
   "backwardYaw": -2.15,
   "panorama": "this.panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9",
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
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_t.jpg",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.05,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_01FB04E0_5026_756F_41BB_D24D4D374498",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_01FB04E0_5026_756F_41BB_D24D4D374498",
 "id": "camera_01FB34E0_5026_756F_41C9_5A34878F5696",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 51.49,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_02F3A5BC_5026_77D7_41B3_FF764433A6A9",
 "idleSequence": "this.sequence_02F3A5BC_5026_77D7_41B3_FF764433A6A9",
 "id": "camera_02F455BC_5026_77D7_41C9_506DBA4F92D0",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Sala de Cine - Luz Tenue",
 "hfovMin": "120%",
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
 "class": "Panorama",
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
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_t.jpg",
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
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_0368162C_5026_74F7_41D1_5060538A5BD9",
 "idleSequence": "this.sequence_0368162C_5026_74F7_41D1_5060538A5BD9",
 "id": "camera_0368362C_5026_74F7_41B7_57A869F3F1F3",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30.29,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_019F4532_5026_74D3_41C7_084ADDE1DA2F",
 "idleSequence": "this.sequence_019F4532_5026_74D3_41C7_084ADDE1DA2F",
 "id": "camera_019F6531_5026_74D1_41B7_75A9EE4359D2",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.85,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_19033CCE_5026_55B0_41CB_45654B04B271",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_19033CCE_5026_55B0_41CB_45654B04B271",
 "id": "camera_19030CCE_5026_55B0_41CD_31D3CE45C04D",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 139.08,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_05E3C12B_5026_6CF0_41A0_631B2060FD9E",
 "idleSequence": "this.sequence_05E3C12B_5026_6CF0_41A0_631B2060FD9E",
 "id": "camera_05E3F12B_5026_6CF0_41BC_4682B64C331A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_19C34D3C_5026_54D0_41C2_97023A4FD93C",
 "idleSequence": "this.sequence_19C34D3C_5026_54D0_41C2_97023A4FD93C",
 "id": "camera_19C35D3C_5026_54D0_41A3_54B01CF3DCF5",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Quincho",
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
 "class": "Panorama",
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
  "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
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
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_t.jpg",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.31,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_07CAE31D_5026_6CD1_41B7_BFB3BACF1093",
 "idleSequence": "this.sequence_07CAE31D_5026_6CD1_41B7_BFB3BACF1093",
 "id": "camera_07CA831D_5026_6CD1_41D3_D2C6F01ADD08",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE.ogg",
  "mp3Url": "media/audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE.mp3",
  "class": "AudioResource"
 },
 "id": "audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE",
 "class": "MediaAudio",
 "data": {
  "label": "12343287"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 28.21,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1A744DC2_5026_57B0_41B8_924A6A5FA14E",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_1A744DC2_5026_57B0_41B8_924A6A5FA14E",
 "id": "camera_1A745DC2_5026_57B0_41CE_C8463B32FEA2",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7",
 "class": "Photo",
 "width": 2000,
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 28.21,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1A4D8DDD_5026_5750_4196_70508D6591AC",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_1A4D8DDD_5026_5750_4196_70508D6591AC",
 "id": "camera_1A4D9DDD_5026_5750_41CD_5B493C7B8D97",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.36,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -6.86
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_031A6690_5026_75AF_41D0_AE5F2D48DE61",
 "idleSequence": "this.sequence_031A6690_5026_75AF_41D0_AE5F2D48DE61",
 "id": "camera_031A3690_5026_75AF_41BA_62630CB3E874",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17",
 "class": "Photo",
 "width": 2000,
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
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_415957D2_4F99_1DF3_41B4_57B956E9370A.ogg",
  "mp3Url": "media/audio_415957D2_4F99_1DF3_41B4_57B956E9370A.mp3",
  "class": "AudioResource"
 },
 "id": "audio_415957D2_4F99_1DF3_41B4_57B956E9370A",
 "class": "MediaAudio",
 "data": {
  "label": "5158598_summer-night-piano-dreaming_by_pablikmm"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_771E90F9_503A_511F_41C2_B9C904B98D71",
 "idleSequence": "this.sequence_771E90F9_503A_511F_41C2_B9C904B98D71",
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -70.97,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_00C2E403_5026_74B1_41B8_D01AECCEBDCC",
 "idleSequence": "this.sequence_00C2E403_5026_74B1_41B8_D01AECCEBDCC",
 "id": "camera_00C28403_5026_74B1_41C4_7291432A57E9",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 92.55,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_0231B584_5026_77B7_41D0_7EA9C1F22012",
 "idleSequence": "this.sequence_0231B584_5026_77B7_41D0_7EA9C1F22012",
 "id": "camera_02325584_5026_77B7_418C_750EF0C6539F",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 9.55,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -33.91
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77F828FC_503E_5115_41CF_04F89C2CC876",
 "idleSequence": "this.sequence_77F828FC_503E_5115_41CF_04F89C2CC876",
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30.52,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_065BB1CE_5026_6FB0_41C3_A3CFF0F48B0C",
 "idleSequence": "this.sequence_065BB1CE_5026_6FB0_41C3_A3CFF0F48B0C",
 "id": "camera_065BA1CE_5026_6FB0_41C6_553FD153928D",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 128.66,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_041F902F_5026_6CF0_41C7_DAAF900F9F7D",
 "idleSequence": "this.sequence_041F902F_5026_6CF0_41C7_DAAF900F9F7D",
 "id": "camera_041FA02F_5026_6CF0_41C5_CFD124BE45CF",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Deck - Piscina",
 "hfovMin": "120%",
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38",
 "class": "Panorama",
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
  "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
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
  },
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
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_t.jpg",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -5.02,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -0.25
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7703348F_503A_71F2_41B8_C8F2687D9078",
 "idleSequence": "this.sequence_7703348F_503A_71F2_41B8_C8F2687D9078",
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2.ogg",
  "mp3Url": "media/audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2.mp3",
  "class": "AudioResource"
 },
 "id": "audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2",
 "class": "MediaAudio",
 "data": {
  "label": "Stay With Me"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.26,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -4.74
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_771E9E9F_503A_3113_41CE_5824E21E1360",
 "idleSequence": "this.sequence_771E9E9F_503A_3113_41CE_5824E21E1360",
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -84.79,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_01654456_5026_7553_41D0_E96C84FA5DEB",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_01654456_5026_7553_41D0_E96C84FA5DEB",
 "id": "camera_01651456_5026_7553_41C6_951100BC798B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -22.66,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1941DC5F_5026_5550_41D0_B1E3F0DB657E",
 "idleSequence": "this.sequence_1941DC5F_5026_5550_41D0_B1E3F0DB657E",
 "id": "camera_1941AC5F_5026_5550_4193_85B5010113C0",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18",
 "class": "Photo",
 "width": 2000,
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
  "yaw": 158.4,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_18FE2B09_5026_5CB1_41C8_60A8A4FC5384",
 "idleSequence": "this.sequence_18FE2B09_5026_5CB1_41C8_60A8A4FC5384",
 "id": "camera_18FE3B09_5026_5CB1_4184_DF999209FF7A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 86.28,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1A87FEA0_5026_55F0_4161_6AD810FC7448",
 "idleSequence": "this.sequence_1A87FEA0_5026_55F0_4161_6AD810FC7448",
 "id": "camera_1A87DEA0_5026_55F0_41C9_F89102573121",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_7B336867_503A_7133_41D0_C60A8E2E0AFE",
 "class": "Window",
 "titleFontColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "backgroundOpacity": 1,
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
 "shadowVerticalLength": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
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
  "this.container_07C85998_5026_5FDF_41CD_57AAD5C5A219"
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
 "titleFontSize": "1.29vmin",
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
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [],
 "gap": 10,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "shadowHorizontalLength": 3,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
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
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21",
 "class": "Photo",
 "width": 2000,
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 123.41,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_045A3FF3_5026_5350_41C8_6B7BE3054D16",
 "idleSequence": "this.sequence_045A3FF3_5026_5350_41C8_6B7BE3054D16",
 "id": "camera_045A1FF3_5026_5350_41CB_C15160063C9B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -35.28,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_18D21B5C_5026_5350_41D1_B16102919504",
 "idleSequence": "this.sequence_18D21B5C_5026_5350_41D1_B16102919504",
 "id": "camera_18D2EB5C_5026_5350_41AC_3D0B0C467EC5",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -173.37,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_0127648D_5026_75B1_41BF_B9978C61A15D",
 "idleSequence": "this.sequence_0127648D_5026_75B1_41BF_B9978C61A15D",
 "id": "camera_0127048D_5026_75B1_41C3_E20E3293971A",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6",
 "class": "Photo",
 "width": 2000,
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
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Sala - Living",
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
 "class": "Panorama",
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
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_t.jpg",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.61,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_18979BEC_5026_5370_41B7_0A3F311D8CCF",
 "idleSequence": "this.sequence_18979BEC_5026_5370_41B7_0A3F311D8CCF",
 "id": "camera_18886BEC_5026_5370_41C3_3484CBC3ACC3",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4",
 "class": "Photo",
 "width": 2000,
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -126.65,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_03E9969F_5026_75D1_4188_CD244C49C4B8",
 "idleSequence": "this.sequence_03E9969F_5026_75D1_4188_CD244C49C4B8",
 "id": "camera_03E9869E_5026_75D0_41C4_15FDA03BB7E9",
 "class": "PanoramaCamera"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_07F89994_5026_5FD7_41AF_7E542D291EA5, [this.htmltext_07C6D994_5026_5FD7_41C2_C1FD76F3222C,this.component_07C66995_5026_5FD1_41CC_7B1FEA59870E,this.component_07C59995_5026_5FD1_41B3_BE1DA35CFDD4], 2000)",
 "items": [
  "this.albumitem_07F92994_5026_5FD7_41CE_395A7965CAB3"
 ],
 "id": "playList_6CFD74F2_506A_D12D_41C5_DED592BA4B9F",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 52.72,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_196D7C26_5026_54F0_41D3_3644724FEF54",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_196D7C26_5026_54F0_41D3_3644724FEF54",
 "id": "camera_196D4C26_5026_54F0_41D3_BBFCF577FF5D",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -81.43,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_070972E7_5026_6D71_419C_61C820996CF5",
 "idleSequence": "this.sequence_070972E7_5026_6D71_419C_61C820996CF5",
 "id": "camera_070962E7_5026_6D71_41D2_56D072CAC629",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -70.97,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_00E213E3_5026_7371_41A1_B4BA039E943C",
 "idleSequence": "this.sequence_00E213E3_5026_7371_41A1_B4BA039E943C",
 "id": "camera_00E223E3_5026_7371_4197_6C0C8FE39E4B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.05,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_0119B4C4_5026_75B7_41B1_27823F214835",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_0119B4C4_5026_75B7_41B1_27823F214835",
 "id": "camera_011A44C4_5026_75B7_41D2_116A9D047C8C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.26,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1BAF4F80_5026_53B0_41CC_E3011232876C",
 "idleSequence": "this.sequence_1BAF4F80_5026_53B0_41CC_E3011232876C",
 "id": "camera_1BAF2F80_5026_53B0_41B4_27D3BF953ED8",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.49,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 7.61
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7702EE73_503A_3113_41CD_2CAA9E773119",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_7702EE73_503A_3113_41CD_2CAA9E773119",
 "id": "panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -168.7,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_19DFAD57_5026_5750_41CC_94CD8F6CC8D5",
 "idleSequence": "this.sequence_19DFAD57_5026_5750_41CC_94CD8F6CC8D5",
 "id": "camera_19DFBD57_5026_5750_41C3_65865234D547",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -137.38,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_06FFB220_5026_6CF0_41CE_DDA46A569425",
 "idleSequence": "this.sequence_06FFB220_5026_6CF0_41CE_DDA46A569425",
 "id": "camera_06F05220_5026_6CF0_41B4_036EC8D47C95",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 51.49,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_021335A0_5026_77EF_41D0_6FF162D001F9",
 "idleSequence": "this.sequence_021335A0_5026_77EF_41D0_6FF162D001F9",
 "id": "camera_0213D5A0_5026_77EF_41D4_4EF7E5CB7955",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "idleSequence": "this.sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.42,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_18EC2AD1_5026_5D51_41B1_D79F0CFA7CE0",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_18EC2AD1_5026_5D51_41B1_D79F0CFA7CE0",
 "id": "camera_18EC3AD1_5026_5D51_41D2_DA4E3E0D7E61",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.26,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -4.74
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1AB77E91_5026_55D0_41B7_2AA84DA8035F",
 "idleSequence": "this.sequence_1AB77E91_5026_55D0_41B7_2AA84DA8035F",
 "id": "camera_1AB75E91_5026_55D0_41D0_37228545A3A5",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 109.59,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1BCB1F65_5026_5370_41A0_A1129FF0F9C8",
 "idleSequence": "this.sequence_1BCB1F65_5026_5370_41A0_A1129FF0F9C8",
 "id": "camera_1BCBEF65_5026_5370_41B9_801D23E7E8FF",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5",
 "class": "Photo",
 "width": 2000,
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
  "yaw": -151.46,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_06B1E25C_5026_6D50_41D3_CBB7EB2B2F6F",
 "idleSequence": "this.sequence_06B1E25C_5026_6D50_41D3_CBB7EB2B2F6F",
 "id": "camera_06B1A25C_5026_6D50_41C2_9B08B90FE796",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -132.28,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_04476FD3_5026_5350_41B1_4C113B82F589",
 "idleSequence": "this.sequence_04476FD3_5026_5350_41B1_4C113B82F589",
 "id": "camera_04477FD3_5026_5350_41C9_5D158DE63242",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_40902BBE_4F98_F5B3_417E_215EADC2E939.ogg",
  "mp3Url": "media/audio_40902BBE_4F98_F5B3_417E_215EADC2E939.mp3",
  "class": "AudioResource"
 },
 "id": "audio_40902BBE_4F98_F5B3_417E_215EADC2E939",
 "class": "MediaAudio",
 "data": {
  "label": "Spectrum (Full)"
 }
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_7C27F859_5026_D11F_41C2_F3CB866F68EC",
 "class": "Window",
 "titleFontColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "backgroundOpacity": 1,
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
 "shadowVerticalLength": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
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
  "this.container_07D5B99A_5026_5FD3_41C2_BF7251F88BE7"
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
 "titleFontSize": "1.29vmin",
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
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [],
 "gap": 10,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "shadowHorizontalLength": 3,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
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
  "yaw": 179.31,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_07E94302_5026_6CB3_41D1_E69D7C33A979",
 "idleSequence": "this.sequence_07E94302_5026_6CB3_41D1_E69D7C33A979",
 "id": "camera_07E96302_5026_6CB3_41B2_9FEE999E420F",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0",
 "class": "Photo",
 "width": 2000,
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
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 92.45,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -1.76
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B",
 "idleSequence": "this.sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B",
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Cocina",
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
 "class": "Panorama",
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
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 4.27,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 8.04
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C",
 "idleSequence": "this.sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C",
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_4163BD09_4F99_7251_41A9_48527994202E.ogg",
  "mp3Url": "media/audio_4163BD09_4F99_7251_41A9_48527994202E.mp3",
  "class": "AudioResource"
 },
 "id": "audio_4163BD09_4F99_7251_41A9_48527994202E",
 "class": "MediaAudio",
 "data": {
  "label": "Summer Trip-Hop (2016)"
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
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_052080F4_5026_6D50_41AE_674AA3B93871",
 "idleSequence": "this.sequence_052080F4_5026_6D50_41AE_674AA3B93871",
 "id": "camera_0520B0F4_5026_6D50_41A4_5BD433980710",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -23.69,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_01BE1517_5026_74D1_41C9_D0AB01FFFF69",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_01BE1517_5026_74D1_41C9_D0AB01FFFF69",
 "id": "camera_01BE0517_5026_74D1_41D0_D5D04E95B0F4",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.1,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_19254C96_5026_55D0_41D0_EFA155442564",
 "idleSequence": "this.sequence_19254C96_5026_55D0_41D0_EFA155442564",
 "id": "camera_1923CC96_5026_55D0_41A6_CBCCE350C87A",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Escritorio",
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
 "class": "Panorama",
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
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -132.28,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_04657FB7_5026_53D0_41C2_59ACE516330D",
 "idleSequence": "this.sequence_04657FB7_5026_53D0_41C2_59ACE516330D",
 "id": "camera_04652FB7_5026_53D0_41CB_32CF7CCC3609",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12",
 "class": "Photo",
 "width": 2000,
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -3.52,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -18.59
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7870010A_503E_30FD_41BC_311867DA2A0C",
 "idleSequence": "this.sequence_7870010A_503E_30FD_41BC_311867DA2A0C",
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 84.12,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_006DB371_5026_7351_41BB_B2AE23EE62E3",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_006DB371_5026_7351_41BB_B2AE23EE62E3",
 "id": "camera_006E4371_5026_7351_41CB_C2973999B464",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Planta Alta - Estar Diario",
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
 "class": "Panorama",
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
  },
  {
   "yaw": 53.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 146.58,
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_t.jpg",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 165.13,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_05A5D161_5026_6F70_41B6_37A96A0FAB31",
 "idleSequence": "this.sequence_05A5D161_5026_6F70_41B6_37A96A0FAB31",
 "id": "camera_05A5C161_5026_6F70_41D2_9A2CC0481702",
 "class": "PanoramaCamera"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_07C85998_5026_5FDF_41CD_57AAD5C5A219, [this.htmltext_07D7A999_5026_5FD1_41CC_8B54DB2F71B0,this.component_07D7799A_5026_5FD3_41C7_11ACBDF7C0C8,this.component_07D7699A_5026_5FD3_41B7_D8B3E4D6EE3E], 2000)",
 "items": [
  "this.albumitem_07C80998_5026_5FDF_41B6_8666FEB7FD8A"
 ],
 "id": "playList_6C8294FC_506A_D115_41CF_0386F3F78B21",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -33.42,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_05988197_5026_6FD0_41D5_07F7CF4CAA3B",
 "idleSequence": "this.sequence_05988197_5026_6FD0_41D5_07F7CF4CAA3B",
 "id": "camera_0598A197_5026_6FD0_41B7_F8D391FBBEDC",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -164.3,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1B168F2E_5026_54F0_41D1_E072BBDB0F3A",
 "idleSequence": "this.sequence_1B168F2E_5026_54F0_41D1_E072BBDB0F3A",
 "id": "camera_1B169F2E_5026_54F0_41C5_D4A2D2D167AA",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30.29,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_027FD54D_5026_74B1_41CC_4F8692434C42",
 "idleSequence": "this.sequence_027FD54D_5026_74B1_41CC_4F8692434C42",
 "id": "camera_027FC54D_5026_74B1_41C6_1B4A2593C104",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -44.08,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1A264DF8_5026_5750_41BA_438A637856B9",
 "idleSequence": "this.sequence_1A264DF8_5026_5750_41BA_438A637856B9",
 "id": "camera_1A265DF8_5026_5750_41AD_0CC0D9AA0931",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 158.4,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_18F61AED_5026_5D71_41C3_F238C601F39F",
 "idleSequence": "this.sequence_18F61AED_5026_5D71_41C3_F238C601F39F",
 "id": "camera_18F6EAED_5026_5D71_419B_E71E98569AD5",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Balc\u00f3n - Habitaci\u00f3n Master",
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
 "class": "Panorama",
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
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4"
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
   "yaw": -128.51,
   "class": "AdjacentPanorama",
   "backwardYaw": -113.86,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "distance": 1
  },
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
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_t.jpg",
 "hfovMax": 120
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9",
 "class": "Photo",
 "width": 2000,
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
  "yaw": -81.43,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_073682CB_5026_6DB0_41D5_13B63CA4EC06",
 "idleSequence": "this.sequence_073682CB_5026_6DB0_41D5_13B63CA4EC06",
 "id": "camera_0736A2CB_5026_6DB0_41CC_851CAB36794F",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 139.08,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_05C4D146_5026_6CB0_41C3_F7EB267449DD",
 "idleSequence": "this.sequence_05C4D146_5026_6CB0_41C3_F7EB267449DD",
 "id": "camera_05C4E146_5026_6CB0_41C6_B5C685E943A1",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -24.62,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 27.13
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8",
 "idleSequence": "this.sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8",
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.45,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1AE0CE4B_5026_54B0_41C8_E673F4D23BC0",
 "idleSequence": "this.sequence_1AE0CE4B_5026_54B0_41C8_E673F4D23BC0",
 "id": "camera_1AE0DE4B_5026_54B0_41C6_7D911F3B3C2C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 66.14,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_054EC0D7_5026_6D50_4185_B7D25B978372",
 "idleSequence": "this.sequence_054EC0D7_5026_6D50_4185_B7D25B978372",
 "id": "camera_054EE0D7_5026_6D50_41C1_FD252D450A54",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.84,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_19F46D21_5026_54F0_41C6_B61B911C50E3",
 "idleSequence": "this.sequence_19F46D21_5026_54F0_41C6_B61B911C50E3",
 "id": "camera_19F47D21_5026_54F0_41BA_B18FFB933651",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90.13,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_063DF1EA_5026_6F70_4192_7E99D7C5F056",
 "idleSequence": "this.sequence_063DF1EA_5026_6F70_4192_7E99D7C5F056",
 "id": "camera_063D91EA_5026_6F70_41CD_A2C3FD2CD641",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16",
 "class": "Photo",
 "width": 2000,
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.36,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_07743294_5026_6DD0_4184_2FAE9EDE5375",
 "idleSequence": "this.sequence_07743294_5026_6DD0_4184_2FAE9EDE5375",
 "id": "camera_0774D294_5026_6DD0_41D3_98EE281BA12C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30.52,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_067B11B2_5026_6FD0_41C6_E5A6C42134E2",
 "idleSequence": "this.sequence_067B11B2_5026_6FD0_41C6_E5A6C42134E2",
 "id": "camera_067B21B2_5026_6FD0_41D0_B4D86F23FA34",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -49.29,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_0297B611_5026_74D1_41CC_9497EF911821",
 "idleSequence": "this.sequence_0297B611_5026_74D1_41CC_9497EF911821",
 "id": "camera_02885611_5026_74D1_41CF_C0900CFC6553",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54.ogg",
  "mp3Url": "media/audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54.mp3",
  "class": "AudioResource"
 },
 "id": "audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54",
 "class": "MediaAudio",
 "data": {
  "label": "Summer Uplifting Energetic Fun Upbeat Funky Pop (Full)"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 112.42,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_0085343B_5026_74D1_41B8_353F3327CB79",
 "idleSequence": "this.sequence_0085343B_5026_74D1_41B8_353F3327CB79",
 "id": "camera_0085243B_5026_74D1_41CC_D20D0CC65082",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8",
 "class": "Photo",
 "width": 2000,
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
  "yaw": -19.22,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_19144CEA_5026_5570_41D1_1D059C100808",
 "idleSequence": "this.sequence_19144CEA_5026_5570_41D1_1D059C100808",
 "id": "camera_19145CEA_5026_5570_41C5_61BAE333CED0",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -123.6,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_02B5A5F5_5026_7751_41A5_42673F299427",
 "idleSequence": "this.sequence_02B5A5F5_5026_7751_41A5_42673F299427",
 "id": "camera_02B655F5_5026_7751_4199_5D6BF3E85AF6",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_camera"
  },
  {
   "media": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera"
  },
  {
   "media": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera"
  },
  {
   "media": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera"
  },
  {
   "media": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera"
  },
  {
   "media": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera"
  },
  {
   "media": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera"
  },
  {
   "media": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera"
  },
  {
   "media": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera"
  },
  {
   "media": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera"
  },
  {
   "media": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera"
  },
  {
   "media": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_camera"
  },
  {
   "media": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera"
  },
  {
   "media": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera"
  },
  {
   "media": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera"
  },
  {
   "media": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera"
  },
  {
   "media": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera"
  },
  {
   "media": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera"
  },
  {
   "media": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera"
  },
  {
   "media": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 0)",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.85,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_19344CB2_5026_55D0_419E_6BB208DCC7C3",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_19344CB2_5026_55D0_419E_6BB208DCC7C3",
 "id": "camera_19342CB2_5026_55D0_41D1_6440959FC3BC",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -148.19,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_04B72083_5026_6DB0_41C0_2D952B17C580",
 "idleSequence": "this.sequence_04B72083_5026_6DB0_41C0_2D952B17C580",
 "id": "camera_04B7D083_5026_6DB0_41CA_667689C33F92",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.65,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_18AC1B95_5026_53D0_41BF_8015A6BC2A64",
 "idleSequence": "this.sequence_18AC1B95_5026_53D0_41BF_8015A6BC2A64",
 "id": "camera_18ACEB95_5026_53D0_41D1_DF180AEE6FC1",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.26,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -4.74
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1AA54E83_5026_55B0_41D2_0916BBAC006F",
 "idleSequence": "this.sequence_1AA54E83_5026_55B0_41D2_0916BBAC006F",
 "id": "camera_1AA55E83_5026_55B0_41C1_A20DE74DD3D9",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -126.65,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_03CBF6BB_5026_75D1_41B1_0020329CF72D",
 "idleSequence": "this.sequence_03CBF6BB_5026_75D1_41B1_0020329CF72D",
 "id": "camera_03CB96BB_5026_75D1_41A1_E0C13BE0760B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 18.21,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_19813D8C_5026_57B0_41AF_F64D97073614",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_19813D8C_5026_57B0_41AF_F64D97073614",
 "id": "camera_19811D8C_5026_57B0_41A4_82CCA3EE0047",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -148.19,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_04D41067_5026_6D70_41B1_5105C9949BC7",
 "idleSequence": "this.sequence_04D41067_5026_6D70_41B1_5105C9949BC7",
 "id": "camera_04D43067_5026_6D70_4183_4A69ACC31CD5",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Planta Alta - Habitaci\u00f3n",
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
 "class": "Panorama",
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
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.42,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_18E2CAB4_5026_5DD7_41BF_BDA016DF622E",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_18E2CAB4_5026_5DD7_41BF_BDA016DF622E",
 "id": "camera_18E2DAB4_5026_5DD7_41C7_7C105B6C4B41",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 109.59,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1BE96F49_5026_54B0_413C_F681AFAEAE8A",
 "idleSequence": "this.sequence_1BE96F49_5026_54B0_413C_F681AFAEAE8A",
 "id": "camera_1BE94F49_5026_54B0_4170_2D63F6D20FE5",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "idleSequence": "this.sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_camera"
  },
  {
   "media": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera"
  },
  {
   "media": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera"
  },
  {
   "media": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera"
  },
  {
   "media": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera"
  },
  {
   "media": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera"
  },
  {
   "media": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera"
  },
  {
   "media": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera"
  },
  {
   "media": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera"
  },
  {
   "media": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera"
  },
  {
   "media": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera"
  },
  {
   "media": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_camera"
  },
  {
   "media": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera"
  },
  {
   "media": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera"
  },
  {
   "media": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera"
  },
  {
   "media": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera"
  },
  {
   "media": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera"
  },
  {
   "media": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera"
  },
  {
   "media": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera"
  },
  {
   "media": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera"
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13",
 "class": "Photo",
 "width": 2000,
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.36,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -6.86
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "idleSequence": "this.sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1",
 "class": "Photo",
 "width": 2000,
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
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Calle - Entrada",
 "id": "panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9",
 "class": "Panorama",
 "overlays": [
  "this.overlay_582B08F1_4C17_954F_41C3_3E0BD7FF2176",
  "this.overlay_73F3D194_4C17_B7F5_41BC_FF4619C46748",
  "this.overlay_7224EB94_4C32_EBF6_41A9_543992A26815",
  "this.panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0",
  "this.overlay_7A44856E_503A_D335_41C2_0829AD1B3AD0",
  "this.overlay_7D21C4D9_503A_311F_41BC_F625F48682A6",
  "this.overlay_609B37FF_502A_FF13_419C_2ACEFBCB0188"
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
 "thumbnailUrl": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_t.jpg",
 "hfovMax": 120
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15",
 "class": "Photo",
 "width": 2000,
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 84.12,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_004DB38D_5026_73B1_41D3_1848B8D90B75",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_004DB38D_5026_73B1_41D3_1848B8D90B75",
 "id": "camera_004E438D_5026_73B1_41D0_E002AA5FF0F0",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -23.11,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -0.75
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -123.6,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_02D5B5D8_5026_775F_41B4_5913F2C1EB78",
 "idleSequence": "this.sequence_02D5B5D8_5026_775F_41B4_5913F2C1EB78",
 "id": "camera_02D645D8_5026_775F_41D1_B94A7066EC58",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Quincho - Parrilla",
 "hfovMin": "120%",
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
 "class": "Panorama",
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
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 112.42,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_00A4041F_5026_74D1_41D2_D7341CCC9525",
 "idleSequence": "this.sequence_00A4041F_5026_74D1_41D2_D7341CCC9525",
 "id": "camera_00A4241F_5026_74D1_41D4_E106054390D6",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -168.7,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_19A8CD72_5026_5750_41CD_49DD721EB1A2",
 "idleSequence": "this.sequence_19A8CD72_5026_5750_41CD_49DD721EB1A2",
 "id": "camera_19A8DD72_5026_5750_41B1_A0F306AD134E",
 "class": "PanoramaCamera"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_07D5B99A_5026_5FD3_41C2_BF7251F88BE7, [this.htmltext_07D5F99B_5026_5FD1_41D2_11FE2A726689,this.component_182A9A65_5026_5D71_41C7_9E07A62004C0,this.component_182A8A65_5026_5D71_41C7_A1D2D4BD7B86], 2000)",
 "items": [
  "this.albumitem_07D6099A_5026_5FD3_41A2_1B018A4DFA67"
 ],
 "id": "playList_6C8764FE_506A_D115_41D0_5F36975469BE",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1A3FAE14_5026_54D0_41CF_38A98885C78C",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_1A3FAE14_5026_54D0_41CF_38A98885C78C",
 "id": "camera_1A3FBE14_5026_54D0_4193_56C0B24667BA",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -84.79,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_01474472_5026_7553_418E_7442F6FC8E59",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_01474472_5026_7553_418E_7442F6FC8E59",
 "id": "camera_01476472_5026_7553_41BA_9357464F5EB9",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2",
 "class": "Photo",
 "width": 2000,
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
  "yaw": -101.26,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_07AB033A_5026_6CD3_41CF_4A82516A5BE8",
 "idleSequence": "this.sequence_07AB033A_5026_6CD3_41CF_4A82516A5BE8",
 "id": "camera_07AB233A_5026_6CD3_41D1_0B926814A807",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Planta Alta - Habitaci\u00f3n Master",
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
 "class": "Panorama",
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
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_t.jpg",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 10.36,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1B7DAED9_5026_5550_41D2_34D445CC15D5",
 "idleSequence": "this.sequence_1B7DAED9_5026_5550_41D2_34D445CC15D5",
 "id": "camera_1B7D8ED9_5026_5550_41B2_9AED625FDA59",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11",
 "class": "Photo",
 "width": 2000,
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
  "yaw": 52.72,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1899DC0A_5026_54B0_41BC_33470661C30E",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_1899DC0A_5026_54B0_41BC_33470661C30E",
 "id": "camera_1899AC0A_5026_54B0_41BD_87096B3BF0AA",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -91.69,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_18C64B26_5026_5CF3_41D1_82CC3F40BE54",
 "idleSequence": "this.sequence_18C64B26_5026_5CF3_41D1_82CC3F40BE54",
 "id": "camera_18C65B26_5026_5CF3_41BC_5C4567C4C67F",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.45,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1A17BE2F_5026_54F0_419C_D5557088B1C8",
 "idleSequence": "this.sequence_1A17BE2F_5026_54F0_419C_D5557088B1C8",
 "id": "camera_1A179E2F_5026_54F0_41B1_378B21590FD8",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -137.38,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_06D1423E_5026_6CD0_41A2_A12E6FD71A20",
 "idleSequence": "this.sequence_06D1423E_5026_6CD0_41A2_A12E6FD71A20",
 "id": "camera_06D1623E_5026_6CD0_41D0_7974918D5014",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -19.22,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_19E35D05_5026_54B0_41AE_B3971A881722",
 "idleSequence": "this.sequence_19E35D05_5026_54B0_41AE_B3971A881722",
 "id": "camera_19E32D05_5026_54B0_41CA_6E93B72B88FB",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -101.26,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_078BA355_5026_7351_41B8_E3A2C585D049",
 "idleSequence": "this.sequence_078BA355_5026_7351_41B8_E3A2C585D049",
 "id": "camera_078C4355_5026_7351_41C6_51686114EFDF",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -20.1,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -3.01
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "idleSequence": "this.sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 131.77,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_03483648_5026_74BF_41A5_FFB8A49BBB16",
 "idleSequence": "this.sequence_03483648_5026_74BF_41A5_FFB8A49BBB16",
 "id": "camera_0348D648_5026_74BF_41C4_6AD8E3970345",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.61,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1884CBCD_5026_53B0_41B8_04CDF2B3DB48",
 "idleSequence": "this.sequence_1884CBCD_5026_53B0_41B8_04CDF2B3DB48",
 "id": "camera_1884DBCD_5026_53B0_41C7_83D00FB9C12E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 165.13,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_0587A17C_5026_6F50_41D0_8A80C9D4F6B6",
 "idleSequence": "this.sequence_0587A17C_5026_6F50_41D0_8A80C9D4F6B6",
 "id": "camera_05B8417C_5026_6F50_419B_0AF3E5EEE6BA",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.26,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1B81EF9B_5026_53D0_41BB_7F1DB54A0BA5",
 "idleSequence": "this.sequence_1B81EF9B_5026_53D0_41BB_7F1DB54A0BA5",
 "id": "camera_1B81FF9B_5026_53D0_4190_810052C52B26",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Sala - Comedor",
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
 "class": "Panorama",
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
   "yaw": -127.28,
   "class": "AdjacentPanorama",
   "backwardYaw": 95.21,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": -127.19,
   "class": "AdjacentPanorama",
   "backwardYaw": 95.21,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
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
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_t.jpg",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.36,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -6.86
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_03091681_5026_75B1_41AC_E83D38BD7895",
 "idleSequence": "this.sequence_03091681_5026_75B1_41AC_E83D38BD7895",
 "id": "camera_03093681_5026_75B1_41C1_3570CF2D698A",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Escalera - Entrepiso",
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
 "class": "Panorama",
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
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9"
  },
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
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_t.jpg",
 "hfovMax": 120
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -22.66,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_197ECC42_5026_54B0_41D1_86F543BC889A",
 "idleSequence": "this.sequence_197ECC42_5026_54B0_41D1_86F543BC889A",
 "id": "camera_197EDC42_5026_54B0_41C4_C57B981D07AF",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3",
 "class": "Photo",
 "width": 2000,
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.45,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1AC37E67_5026_5570_41CE_550E4077782B",
 "idleSequence": "this.sequence_1AC37E67_5026_5570_41CE_550E4077782B",
 "id": "camera_1AC35E67_5026_5570_41CA_91C18056957F",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19",
 "class": "Photo",
 "width": 2000,
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
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Pasillo Acceso a Parrilla",
 "hfovMin": "120%",
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
 "class": "Panorama",
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
 "hfovMax": 120
},
{
 "duration": 500,
 "id": "effect_13185EDD_502A_7550_41C3_AE7B43D21853",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.27,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 11.81
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "idleSequence": "this.sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera",
 "class": "PanoramaCamera"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "gyroscopeEnabled": true,
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "class": "PanoramaPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -38.25,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": -22.96
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "manualZoomSpeed": 2,
 "idleSequence": "this.sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 86.28,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_1A9BEEBD_5026_55D0_41D0_21A137AC0557",
 "idleSequence": "this.sequence_1A9BEEBD_5026_55D0_41D0_21A137AC0557",
 "id": "camera_1A9BFEBD_5026_55D0_41AE_70EF4366042C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90.13,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_061D8205_5026_6CB0_41B0_4B8E2D33DFFB",
 "idleSequence": "this.sequence_061D8205_5026_6CB0_41B0_4B8E2D33DFFB",
 "id": "camera_061DB205_5026_6CB0_41C5_720451AC2F97",
 "class": "PanoramaCamera"
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Quincho - Piscinas",
 "hfovMin": "120%",
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
 "class": "Panorama",
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
  "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
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
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_t.jpg",
 "hfovMax": 120
},
{
 "duration": 5500,
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10_t.jpg",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10",
 "class": "Photo",
 "width": 2000,
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
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Sala de Cine - Luz Encendida",
 "hfovMin": "120%",
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
 "class": "Panorama",
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
 "hfovMax": 120
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_73465F18_502E_CF1D_41D3_CDAB91BFC330",
 "class": "Window",
 "titleFontColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "backgroundOpacity": 1,
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
 "shadowVerticalLength": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 0,
 "title": "\u00c1lbum de Fotos",
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
  "this.container_07F89994_5026_5FD7_41AF_7E542D291EA5"
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
 "titleFontSize": "1.29vmin",
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
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [],
 "gap": 10,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "shadowHorizontalLength": 3,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -59.77,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_05013110_5026_6CD0_41B9_880882C4BD50",
 "idleSequence": "this.sequence_05013110_5026_6CD0_41B9_880882C4BD50",
 "id": "camera_0501C110_5026_6CD0_41C5_A57C953778BC",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderSize": 6,
 "id": "MainViewer",
 "class": "ViewerArea",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "left": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "progressBarBorderRadius": 0,
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
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
 "class": "Container",
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
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
 "class": "Container",
 "width": 276,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Image_5EF9A31F_502E_7713_41B1_155B9E9559BD"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": 30,
 "minHeight": 1,
 "propagateClick": true,
 "top": 15,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 133,
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
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
 "class": "Container",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_1DBAC974_505A_7F57_41CF_185D2D632831"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.64,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderRadius": 0,
 "left": "0%",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "bottom": 0,
 "scrollBarWidth": 10,
 "height": 118,
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
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
 "class": "Image",
 "backgroundOpacity": 0,
 "right": "0.72%",
 "width": "5.308%",
 "paddingRight": 0,
 "url": "skin/Image_13196006_51DA_2CB3_4191_F03898441520.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 100,
 "propagateClick": false,
 "bottom": "7.84%",
 "height": "11.186%",
 "verticalAlign": "middle",
 "minWidth": 100,
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
 "class": "Container",
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
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
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
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "class": "Container",
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
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
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
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "class": "Container",
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
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
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
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B",
 "class": "Container",
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
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
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
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B, false, 0, null, null, false)"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
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
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
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
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 45.57,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 90.55
  },
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_0329F664_5026_7577_41D4_AA4C801405AF",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -65.44,
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -3.52,
   "path": "shortest",
   "targetPitch": -18.59,
   "pitchSpeed": 61.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 123.49
  },
  {
   "targetYaw": 39.06,
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_013934A9_5026_75F1_41CD_01C2417BEE0F",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 16.54,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.23
  },
  {
   "targetYaw": 7.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1B51CEF6_5026_5550_4198_32D9A4A50EA3",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_19DFBD57_5026_5750_41C3_65865234D547); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BF1B2EE_5026_6D73_41D2_B96EB3C2D257",
   "pitch": -13.23,
   "hfov": 19.44,
   "distance": 100,
   "yaw": -149.71
  }
 ],
 "id": "overlay_649BC5B9_4C16_9F3F_41CE_03F1CF8B85B0",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Habitaci\u00f3n\u000d     Master"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_19A8DD72_5026_5750_41B1_A0F306AD134E); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_60A2EB4F_4C35_EB53_41BB_7B4C45E778F5",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 138.05,
 "pitch": 7.35,
 "bleaching": 0.7,
 "id": "overlay_0DB44A7A_4C0E_953D_41C6_712CBBF32DAF",
 "class": "LensFlarePanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 121.21,
 "pitch": 6.85,
 "bleaching": 0.7,
 "id": "overlay_0DBC62EA_4C0E_F55D_41CB_80F63DC048E7",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 3.27,
   "path": "shortest",
   "targetPitch": 11.81,
   "pitchSpeed": 37.63,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 74.6
  },
  {
   "targetYaw": 56.9,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_04F2604B_5026_6CB0_41D0_F4A5FD554F5C",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -40.57,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77007457_503E_7113_41B9_B797530AF0B3",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -3.52,
   "path": "shortest",
   "targetPitch": -18.59,
   "pitchSpeed": 64.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 128.31
  },
  {
   "targetYaw": 39.06,
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_19535C7B_5026_5550_41C3_3DB4E11FCA20",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 49.5,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 98.46
  },
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_0756D2AF_5026_6DF0_41D0_4F2B4DE7CBBA",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 18.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.87
  },
  {
   "targetYaw": -110.91,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_043C0011_5026_6CD0_41D3_702DE3983900",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 39.06,
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -29.77,
   "path": "shortest",
   "targetPitch": -25.81,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -153.37,
   "path": "shortest",
   "targetPitch": -14.51,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 133.78,
   "path": "shortest",
   "targetPitch": 2.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 71.47,
   "path": "shortest",
   "targetPitch": -34.35,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77024918_503A_F31E_41AF_34F62C64FEBB",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -20.1,
   "path": "shortest",
   "targetPitch": -3.01,
   "pitchSpeed": 13.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 25.5
  },
  {
   "targetYaw": -114.43,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_18CBAB42_5026_5CB3_41A7_FC4B3285D00E",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 54.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 108.22
  },
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_056C20BC_5026_6DD0_41C7_77826A56B98A",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -2.26,
   "path": "shortest",
   "targetPitch": -4.74,
   "pitchSpeed": 1.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 1.89
  },
  {
   "targetYaw": -82.27,
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_002F83A9_5026_73F1_41D0_55A3E613C760",
 "class": "PanoramaCameraSequence"
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
    "targetPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "y": "0.52",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.59",
     "class": "PhotoCameraPosition",
     "y": "0.49",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "y": "0.61",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.64",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.56",
     "class": "PhotoCameraPosition",
     "y": "0.69",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.61",
     "class": "PhotoCameraPosition",
     "y": "0.28",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.27",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "y": "0.46",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.63",
     "class": "PhotoCameraPosition",
     "y": "0.45",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.55",
     "class": "PhotoCameraPosition",
     "y": "0.56",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.58",
     "class": "PhotoCameraPosition",
     "y": "0.27",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "y": "0.55",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.27",
     "class": "PhotoCameraPosition",
     "y": "0.30",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.59",
     "class": "PhotoCameraPosition",
     "y": "0.33",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "y": "0.35",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.37",
     "class": "PhotoCameraPosition",
     "y": "0.59",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "y": "0.35",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.48",
     "class": "PhotoCameraPosition",
     "y": "0.60",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "y": "0.44",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.73",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
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
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "y": "0.42",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  }
 ],
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 13.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 26.47
  },
  {
   "targetYaw": -110.91,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_18B20BB2_5026_53D0_41C0_D9757EA12BAF",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 25.18,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 49.59
  },
  {
   "targetYaw": 7.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_18A70B79_5026_5350_41D0_29105D6BAF93",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 54.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 108.22
  },
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_048940A0_5026_6DF0_41BF_F7931211E647",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -79.76,
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -113.93,
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -160.66,
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.58,
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 110.91,
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 59.67,
   "path": "shortest",
   "targetPitch": 2.83,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_770D5914_503A_D315_41C7_BD98E4CD29E4",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -23.11,
   "path": "shortest",
   "targetPitch": -0.75,
   "pitchSpeed": 1.39,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 1.78
  },
  {
   "targetYaw": 13.94,
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_01DBA4FC_5026_7557_41D1_2EA8150C9EB5",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 3.27,
   "path": "shortest",
   "targetPitch": 11.81,
   "pitchSpeed": 46.13,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 91.68
  },
  {
   "targetYaw": 56.9,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_0693D278_5026_6D50_4199_6AA33CAD75CE",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 40.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 81.27
  },
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1B33FF12_5026_54D0_41C7_EAED0824D501",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -2.26,
   "path": "shortest",
   "targetPitch": -4.74,
   "pitchSpeed": 1.49,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 1.98
  },
  {
   "targetYaw": -82.27,
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_000013C6_5026_73B3_41D3_038BFDDEDCE5",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_041FA02F_5026_6CF0_41C5_CFD124BE45CF); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BFDD2F2_5026_6D53_41D1_C3B0524EC4FB",
   "pitch": -5.48,
   "hfov": 12.09,
   "distance": 100,
   "yaw": 120.23
  }
 ],
 "id": "overlay_66AA9141_4C12_B74F_4182_4D5CE8470BE4",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_04D43067_5026_6D70_4183_4A69ACC31CD5); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BFA72F2_5026_6D53_41C2_5612C17BB79C",
   "pitch": -20.36,
   "hfov": 9.75,
   "distance": 100,
   "yaw": 78.74
  }
 ],
 "id": "overlay_661206E1_4C15_9D4F_41B1_D784E4DD7ED9",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Parrilla"
 },
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
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_63D94153_4C16_B772_41CC_320A7C1BAC6A",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "      \u000d  Deck - Piscina\u000d"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_04B7D083_5026_6DB0_41CA_667689C33F92); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_639A064F_4C15_9D53_41CC_8D0F891DEB0D",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "      \u000d       Kitchenette\u000d"
 },
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
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_604B1A6E_4C12_B555_41B9_113B7C073FFB",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Balc\u00f3n de\u000d  Habitaci\u00f3n\u000d    Master\u000d"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_04F2104B_5026_6CB0_41D0_772F3C4746CF); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_615CF70F_4C0D_BCD2_41C6_F2BE939B4F65",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -59.16,
 "pitch": 45.28,
 "bleaching": 0.7,
 "id": "overlay_0D2A0CC2_4C0E_AD4D_41B5_7C511CCA84AF",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 83.13,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 166.03
  },
  {
   "targetYaw": -65.44,
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_02511569_5026_7771_41CE_796DE99E1D26",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -23.11,
   "path": "shortest",
   "targetPitch": -0.75,
   "pitchSpeed": 17.82,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 34.8
  },
  {
   "targetYaw": 13.94,
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_199B8DA7_5026_57F0_41C4_7D4A05C28D74",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_197EDC42_5026_54B0_41C4_C57B981D07AF); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BADD2C6_5026_6DB3_41B0_EED888F2120A",
   "pitch": -12.9,
   "hfov": 10.13,
   "distance": 100,
   "yaw": -95.88
  }
 ],
 "id": "overlay_5ED98F6B_4C0D_AB52_41BB_5E21BCD4D8B3",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BAA72C6_5026_6DB3_41C9_FF85AFC8C3CE",
   "pitch": -2.15,
   "hfov": 7.19,
   "distance": 100,
   "yaw": -52.28
  }
 ],
 "id": "overlay_5F9E895F_4C0E_9772_41B3_12204174EBAF",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_19145CEA_5026_5570_41C5_61BAE333CED0); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BAAB2C7_5026_6DB1_41A8_4D43FC41A457",
   "pitch": -4.19,
   "hfov": 11.14,
   "distance": 100,
   "yaw": -5.58
  }
 ],
 "id": "overlay_5B60547E_4C16_FD32_41BE_22924F5C4F05",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_19F47D21_5026_54F0_41BA_B18FFB933651); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BAAD2C7_5026_6DB1_41B7_AF3AE633E0EE",
   "pitch": -2.5,
   "hfov": 5.71,
   "distance": 100,
   "yaw": -70.95
  }
 ],
 "id": "overlay_566EE523_4C36_FCD2_41CC_55AFAC6306BF",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9, this.camera_19342CB2_5026_55D0_41D1_6440959FC3BC); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BAB12C7_5026_6DB1_41BC_6D227BA43947",
   "pitch": -3,
   "hfov": 12.13,
   "distance": 100,
   "yaw": -179.95
  }
 ],
 "id": "overlay_57B6F8D9_4C32_957F_41C9_13FC3BAD255B",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_19532C7B_5026_5550_41CF_632DCDD96D38); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BAB42C8_5026_6DBF_41D2_5A46B0B728D6",
   "pitch": 10.51,
   "hfov": 15.43,
   "distance": 100,
   "yaw": -151.79
  }
 ],
 "id": "overlay_51280201_4C33_94CF_41D1_7D4AC88DD7AC",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Cocina"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_7_0.png",
      "width": 240,
      "class": "ImageResourceLevel",
      "height": 378
     }
    ]
   },
   "pitch": -1.73,
   "hfov": 8.68,
   "yaw": -52.41,
   "distance": 50
  }
 ],
 "id": "overlay_7142457C_4C12_BF36_41C3_965C22106F02",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Quincho"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_19E32D05_5026_54B0_41CA_6E93B72B88FB); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_8_0.png",
      "width": 314,
      "class": "ImageResourceLevel",
      "height": 418
     }
    ]
   },
   "pitch": -2.74,
   "hfov": 11.32,
   "yaw": -5.66,
   "distance": 50
  }
 ],
 "id": "overlay_701A4566_4C1D_9F52_41CB_792274DA2F65",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.92,
   "yaw": 95.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0_HS_9_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.67
  }
 ],
 "data": {
  "label": "         Comedor"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_1899AC0A_5026_54B0_41BD_87096B3BF0AA); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0_HS_9_0.png",
      "width": 837,
      "class": "ImageResourceLevel",
      "height": 519
     }
    ]
   },
   "pitch": -30.67,
   "hfov": 25.92,
   "yaw": 95.21,
   "distance": 50
  }
 ],
 "id": "overlay_70E07E84_4C1E_ADD6_41CD_C9C9E90E20AE",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Sala de\u000d   Cine"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_19C35D3C_5026_54D0_41A3_54B01CF3DCF5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_10_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 404
     }
    ]
   },
   "pitch": -1.82,
   "hfov": 8.04,
   "yaw": -70.95,
   "distance": 50
  }
 ],
 "id": "overlay_7217DE3F_4C1E_AD33_41C0_6548D05F997F",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "   Calle"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9, this.camera_19030CCE_5026_55B0_41CD_31D3CE45C04D); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_73DD519A_4C1D_97F2_41D1_2DC7FD988A66",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Escalera\u000d Entrepiso"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_1923CC96_5026_55D0_41A6_CBCCE350C87A); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_12_0.png",
      "width": 448,
      "class": "ImageResourceLevel",
      "height": 623
     }
    ]
   },
   "pitch": 14.17,
   "hfov": 15.65,
   "yaw": -151.57,
   "distance": 50
  }
 ],
 "id": "overlay_72CD0D72_4C13_EF32_41C8_64D446C7AB4C",
 "class": "HotspotPanoramaOverlay"
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
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.33
  }
 ],
 "data": {
  "label": "      Living"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_1941AC5F_5026_5550_4193_85B5010113C0); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_13_0.png",
      "width": 320,
      "class": "ImageResourceLevel",
      "height": 183
     }
    ]
   },
   "pitch": -11.33,
   "hfov": 11.33,
   "yaw": -95.62,
   "distance": 50
  }
 ],
 "id": "overlay_72C14259_4C15_F57E_41BB_00CEBFD195E8",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -2.39,
 "pitch": 60.61,
 "bleaching": 0.7,
 "id": "overlay_7241E1C2_4C32_974D_4185_D8EFCA60DDB0",
 "class": "LensFlarePanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -176.73,
 "pitch": 79.2,
 "bleaching": 0.7,
 "id": "overlay_724C7981_4C32_97CE_41A2_274C4D75CE46",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
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
   "hfov": 23.26,
   "yaw": 95.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0_HS_14_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.1
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_196D4C26_5026_54F0_41D3_BBFCF577FF5D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_06537883_507A_FDB1_41CE_01214E0D7262",
   "pitch": -33.1,
   "hfov": 23.26,
   "distance": 100,
   "yaw": 95.15
  }
 ],
 "id": "overlay_184877BD_507A_33D1_41CE_B68B3FD43F2E",
 "class": "HotspotPanoramaOverlay"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 10.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 20.43
  },
  {
   "targetYaw": 35.55,
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_01FB04E0_5026_756F_41BB_D24D4D374498",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 3.27,
   "path": "shortest",
   "targetPitch": 11.81,
   "pitchSpeed": 15.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 30.01
  },
  {
   "targetYaw": 56.9,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_02F3A5BC_5026_77D7_41B3_FF764433A6A9",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_03093681_5026_75B1_41C1_3570CF2D698A, this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A); this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_03093681_5026_75B1_41C1_3570CF2D698A); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B90C2D0_5026_6DAF_41D0_08EB2DED12E6",
   "pitch": 6.38,
   "hfov": 6.89,
   "distance": 100,
   "yaw": 26.29
  }
 ],
 "id": "overlay_5F08474E_4CFE_9B55_4162_01D050A59F50",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9102D1_5026_6D51_41C2_0FDF981FA114",
   "pitch": -11.69,
   "hfov": 11.31,
   "distance": 100,
   "yaw": 36.58
  }
 ],
 "id": "overlay_5829C0DD_4CF2_F576_4170_28F44FE61136",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Encender\u000d   Luces"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_031A3690_5026_75AF_41BA_62630CB3E874, this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A); this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_031A3690_5026_75AF_41BA_62630CB3E874); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_58FADE45_4CF5_AD56_41C7_88B8A9887EBB",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Living"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_752BA8F4_4DF2_F535_4196_A95C1DB42D1C",
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 18,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 27.83,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 54.92
  },
  {
   "targetYaw": 7.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_0368162C_5026_74F7_41D1_5060538A5BD9",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 9.55,
   "path": "shortest",
   "targetPitch": -33.91,
   "pitchSpeed": 11.03,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 21.15
  },
  {
   "targetYaw": 71.97,
   "path": "shortest",
   "targetPitch": -21.54,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 108.4,
   "path": "shortest",
   "targetPitch": -20.29,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 172.97,
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -97.85,
   "path": "shortest",
   "targetPitch": -10.49,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -37.81,
   "path": "shortest",
   "targetPitch": 1.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_019F4532_5026_74D3_41C7_084ADDE1DA2F",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -2.49,
   "path": "shortest",
   "targetPitch": 7.61,
   "pitchSpeed": 9.04,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 17.16
  },
  {
   "targetYaw": -50.12,
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 3.14,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 5.3
  },
  {
   "targetYaw": 22.48,
   "path": "shortest",
   "targetPitch": 19.16,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -130.27,
   "hfovSpeed": 33.25,
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetHfov": 60,
   "targetPitch": 1.32,
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 142.57,
   "hfovSpeed": 33.25,
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetHfov": 60,
   "targetPitch": 5.59,
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 82.02,
   "hfovSpeed": 33.25,
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetHfov": 90,
   "targetPitch": 2.83,
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 38.56,
   "path": "shortest",
   "targetPitch": -3.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.64,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_19033CCE_5026_55B0_41CB_45654B04B271",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 54.98,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 109.47
  },
  {
   "targetYaw": -40.57,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_05E3C12B_5026_6CF0_41A0_631B2060FD9E",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -2.26,
   "path": "shortest",
   "targetPitch": -4.74,
   "pitchSpeed": 1.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 1.89
  },
  {
   "targetYaw": -82.27,
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_19C34D3C_5026_54D0_41C2_97023A4FD93C",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_18E2DAB4_5026_5DD7_41C7_7C105B6C4B41); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9B72D6_5026_6D53_41D4_3A66D5EA1D7A",
   "pitch": -7.35,
   "hfov": 19.68,
   "distance": 100,
   "yaw": 160.78
  }
 ],
 "id": "overlay_5B1FF612_4C15_9CF2_41C3_BA09D573F956",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_1884DBCD_5026_53B0_41C7_83D00FB9C12E); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9BA2D7_5026_6D51_41C0_CDD8439DE9F6",
   "pitch": -8.6,
   "hfov": 13.16,
   "distance": 100,
   "yaw": -149.48
  }
 ],
 "id": "overlay_55065348_4C1F_BB5E_41C9_63BC86EB71F1",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_18ACEB95_5026_53D0_41D1_DF180AEE6FC1); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9BC2D7_5026_6D51_4150_D8CF6D808C60",
   "pitch": -14.01,
   "hfov": 16.09,
   "distance": 100,
   "yaw": 56.4
  }
 ],
 "id": "overlay_54B5B55E_4C1E_FF72_41C3_B40A23F1359D",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_18F6EAED_5026_5D71_419B_E71E98569AD5); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9862D7_5026_6D51_41D2_26AA183836CF",
   "pitch": -7.53,
   "hfov": 11.39,
   "distance": 100,
   "yaw": -1.64
  }
 ],
 "id": "overlay_542EB355_4C1D_FB76_41B1_02C2022012E4",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_18C65B26_5026_5CF3_41BC_5C4567C4C67F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9892D7_5026_6D51_41D4_0D4686D90B67",
   "pitch": -8.59,
   "hfov": 9.75,
   "distance": 100,
   "yaw": -93.72
  }
 ],
 "id": "overlay_5587FAC0_4C15_B54E_4192_D62E10526282",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_18D2EB5C_5026_5350_41AC_3D0B0C467EC5); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9922D8_5026_6D5F_41CE_63EA0D90094D",
   "pitch": -4.51,
   "hfov": 9.83,
   "distance": 100,
   "yaw": -70.41
  }
 ],
 "id": "overlay_55941349_4C16_7B5E_4191_A59BB4D3BEB7",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " \u000d  Cocina"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_18886BEC_5026_5370_41C3_3484CBC3ACC3); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7A7A1CE7_4DF5_AD52_4174_090BD5F8DB5D",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "     Sala"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_18EC3AD1_5026_5D51_41D2_DA4E3E0D7E61); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_7_0.png",
      "width": 498,
      "class": "ImageResourceLevel",
      "height": 673
     }
    ]
   },
   "pitch": -4.43,
   "hfov": 17.91,
   "yaw": 160.41,
   "distance": 50
  }
 ],
 "id": "overlay_7584F74C_4DF6_BB56_41B3_F3BF279FF4AB",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Deck"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_18FE3B09_5026_5CB1_4184_DF999209FF7A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_8_0.png",
      "width": 267,
      "class": "ImageResourceLevel",
      "height": 420
     }
    ]
   },
   "pitch": -4.87,
   "hfov": 9.59,
   "yaw": -1.56,
   "distance": 50
  }
 ],
 "id": "overlay_72672788_4DF7_9BDE_41C1_6FF3D69969EA",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Parrilla"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_18A71B79_5026_5350_41D3_FCCCC3E48C95); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_9_0.png",
      "width": 267,
      "class": "ImageResourceLevel",
      "height": 348
     }
    ]
   },
   "pitch": -2.45,
   "hfov": 9.61,
   "yaw": -70.5,
   "distance": 50
  }
 ],
 "id": "overlay_74CC5B0D_4DF6_94D7_41AD_35EB0E985D9B",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Pasillo"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_18CBBB42_5026_5CB3_4179_2FEA93AD796B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_756A3004_4DF5_F4D5_41C1_56A034309D7B",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Piscinas"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_18B21BB2_5026_53D0_41CF_A595081B5CBE); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_74524590_4DF2_BFCD_41C2_0E8EB5134142",
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 26.93,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 53.11
  },
  {
   "targetYaw": -110.91,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_07CAE31D_5026_6CD1_41B7_BFB3BACF1093",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 16.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 31.59
  },
  {
   "targetYaw": 35.55,
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1A744DC2_5026_57B0_41B8_924A6A5FA14E",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 16.22,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 31.59
  },
  {
   "targetYaw": 35.55,
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1A4D8DDD_5026_5750_4196_70508D6591AC",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -51.88,
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": 3.33,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 142.07,
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 72.48,
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -1.38,
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_031A6690_5026_75AF_41D0_AE5F2D48DE61",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -58.66,
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -116.94,
   "path": "shortest",
   "targetPitch": -8.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -143.07,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 112.92,
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 1.63,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_771E90F9_503A_511F_41C2_B9C904B98D71",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 20.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 39.32
  },
  {
   "targetYaw": -58.66,
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -116.94,
   "path": "shortest",
   "targetPitch": -8.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -143.07,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 112.92,
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 1.63,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_00C2E403_5026_74B1_41B8_D01AECCEBDCC",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 83.13,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 166.03
  },
  {
   "targetYaw": -65.44,
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_0231B584_5026_77B7_41D0_7EA9C1F22012",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 71.97,
   "path": "shortest",
   "targetPitch": -21.54,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 108.4,
   "path": "shortest",
   "targetPitch": -20.29,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 172.97,
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -97.85,
   "path": "shortest",
   "targetPitch": -10.49,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -37.81,
   "path": "shortest",
   "targetPitch": 1.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77F828FC_503E_5115_41CF_04F89C2CC876",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 10.4,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 19.89
  },
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_065BB1CE_5026_6FB0_41C3_A3CFF0F48B0C",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 3.27,
   "path": "shortest",
   "targetPitch": 11.81,
   "pitchSpeed": 37.63,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 74.6
  },
  {
   "targetYaw": 56.9,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_041F902F_5026_6CF0_41C7_DAAF900F9F7D",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_0774D294_5026_6DD0_41D3_98EE281BA12C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B83F2DF_5026_6D51_41CF_9EBC308109B5",
   "pitch": -6.62,
   "hfov": 10.72,
   "distance": 100,
   "yaw": -21.6
  }
 ],
 "id": "overlay_53684693_4C76_9DF3_4181_EF2767F1A9C2",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_07E96302_5026_6CB3_41B2_9FEE999E420F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8032DF_5026_6D51_41A1_4EC535BF873F",
   "pitch": -10.64,
   "hfov": 10.61,
   "distance": 100,
   "yaw": -48.23
  }
 ],
 "id": "overlay_6CE24BFA_4C76_EB32_41B4_9F999091A2FA",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_06F05220_5026_6CF0_41B4_036EC8D47C95); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8052DF_5026_6D51_41D2_4053B5E3FB1F",
   "pitch": -5.33,
   "hfov": 10.75,
   "distance": 100,
   "yaw": 15.7
  }
 ],
 "id": "overlay_53794FA5_4C76_6BD7_41C5_3C53F52B35DE",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_0736A2CB_5026_6DB0_41CC_851CAB36794F); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8082E0_5026_6D6F_41CF_F02D918F50F2",
   "pitch": -4.06,
   "hfov": 10.77,
   "distance": 100,
   "yaw": 47.72
  }
 ],
 "id": "overlay_535CC597_4C75_BFF2_418C_EBE38CA692F5",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_07AB233A_5026_6CD3_41D1_0B926814A807); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8112E0_5026_6D6F_41B9_11814C7844D9",
   "pitch": 14.5,
   "hfov": 10.45,
   "distance": 100,
   "yaw": 31.81
  }
 ],
 "id": "overlay_6D90C5FD_4C72_9F36_41CE_AE11C1BB2BB1",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_06B1A25C_5026_6D50_41C2_9B08B90FE796); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8152E0_5026_6D6F_41CF_F85CB64BCF1C",
   "pitch": 21.58,
   "hfov": 10.04,
   "distance": 100,
   "yaw": -16.51
  }
 ],
 "id": "overlay_6D8DA36E_4C72_7B55_41CD_8289197836CB",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Piscinas"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_07CA831D_5026_6CD1_41D3_D2C6F01ADD08); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7D0CF396_4C1E_9BF2_41C7_3F8427E9D057",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "   Parrilla"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_070962E7_5026_6D71_41D2_56D072CAC629); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_781F5669_4C1F_FD5F_41D1_74EDFDF4A74D",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Quincho"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_0756C2AF_5026_6DF0_41B0_F1A4714C4E11); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7FD4E63F_4C1E_BD33_41BB_EFAFFE8E89FF",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "   Pasillo"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_06D1623E_5026_6CD0_41D0_7974918D5014); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_79AC6ECE_4C12_6D55_4193_56FF271E3F5E",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "   Balc\u00f3n\u000dPlanta Alta"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_0693F277_5026_6D50_4184_967EC85AF9D2); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_787DA558_4C12_9F7E_41CD_56E54DDE0451",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Quincho\u000dPlanta Alta"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_078C4355_5026_7351_41C6_51686114EFDF); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7FD3A82F_4C15_94D2_41D1_10DAD6C733F7",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 89.06,
 "pitch": 62.87,
 "bleaching": 0.7,
 "id": "overlay_72507ADB_4C0F_9573_41CB_7C2C12BF575F",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_7703348F_503A_71F2_41B8_C8F2687D9078",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -82.27,
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_771E9E9F_503A_3113_41CE_5824E21E1360",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 12.24,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 23.58
  },
  {
   "targetYaw": 35.55,
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_01654456_5026_7553_41D0_E96C84FA5DEB",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0.75,
   "path": "shortest",
   "targetPitch": 8.04,
   "pitchSpeed": 5.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 10.89
  },
  {
   "targetYaw": -79.76,
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -113.93,
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -160.66,
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.58,
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 110.91,
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 59.67,
   "path": "shortest",
   "targetPitch": 2.83,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1941DC5F_5026_5550_41D0_B1E3F0DB657E",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 52.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 105.38
  },
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_18FE2B09_5026_5CB1_41C8_60A8A4FC5384",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 25.15,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 49.52
  },
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1A87FEA0_5026_55F0_4161_6AD810FC7448",
 "class": "PanoramaCameraSequence"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "container_07C85998_5026_5FDF_41CD_57AAD5C5A219",
 "class": "Container",
 "children": [
  "this.viewer_uid07C8C998_5026_5FDF_41BE_2B4202BD52E4",
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "class": "Container",
   "children": [
    "this.htmltext_07D7A999_5026_5FD1_41CC_8B54DB2F71B0"
   ],
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0.3,
   "right": 0,
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "left": 0,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "verticalAlign": "bottom",
   "bottom": 0,
   "overflow": "scroll",
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
    "name": "Container43834"
   },
   "shadow": false
  },
  "this.component_07D7799A_5026_5FD3_41C7_11ACBDF7C0C8",
  "this.component_07D7699A_5026_5FD3_41B7_D8B3E4D6EE3E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
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
  "name": "Container43833"
 },
 "shadow": false
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 18.85,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.87
  },
  {
   "targetYaw": -110.91,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_045A3FF3_5026_5350_41C8_6B7BE3054D16",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 25.18,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 49.59
  },
  {
   "targetYaw": 7.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_18D21B5C_5026_5350_41D1_B16102919504",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -3.52,
   "path": "shortest",
   "targetPitch": -18.59,
   "pitchSpeed": 61.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 123.49
  },
  {
   "targetYaw": 39.06,
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_0127648D_5026_75B1_41BF_B9978C61A15D",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_002FA3A9_5026_73F1_41C9_38CC1CBD3548); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B95F2CE_5026_6DB3_41B9_F66110709256",
   "pitch": -5.2,
   "hfov": 11.5,
   "distance": 100,
   "yaw": 33.04
  }
 ],
 "id": "overlay_5F9D2CB5_4CF2_6D31_41B7_5BCEF2CFED01",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_006E4371_5026_7351_41CB_C2973999B464); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9212CE_5026_6DB3_41C0_EC58BF6705CF",
   "pitch": -14.03,
   "hfov": 17.15,
   "distance": 100,
   "yaw": 157.34
  }
 ],
 "id": "overlay_5AE07B89_4CF2_EBDF_41D0_0E914D04EED6",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_00E223E3_5026_7371_4197_6C0C8FE39E4B); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9262CE_5026_6DB3_41CF_80ED3ECF8611",
   "pitch": -5.15,
   "hfov": 13.2,
   "distance": 100,
   "yaw": 89.87
  }
 ],
 "id": "overlay_59A6ACB0_4C0E_6DCD_41C1_5C1B9CBD1730",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9282CF_5026_6DB1_41B8_4CF3326863BD",
   "pitch": -4.37,
   "hfov": 9.09,
   "distance": 100,
   "yaw": 115.98
  }
 ],
 "id": "overlay_5207670B_4C12_BCD2_41C7_91CD2C8CFC49",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Sala de\u000d    Cine"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_000003C6_5026_73B3_41AE_E01E92D3FCC0); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_75752B26_4DF5_94D5_41BE_473EFED9DBD7",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  \u000d   Cocina"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_00C28403_5026_74B1_41C4_7291432A57E9); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_721F4000_4DF7_94CE_41C5_C23548018D00",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Piscinas"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_0F886554_4DF6_BF76_41C9_78656514EDB0",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Sala - Centro"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_004E438D_5026_73B1_41D0_E002AA5FF0F0); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_70F91094_4DF5_F5F6_41C2_500E4A3028EC",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 4.4,
 "pitch": 55.58,
 "bleaching": 0.7,
 "id": "overlay_7257A9C3_4C0D_9752_41D2_10B53BCDED80",
 "class": "LensFlarePanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 128.25,
 "pitch": 55.83,
 "bleaching": 0.7,
 "id": "overlay_725DDFD6_4C0D_AB72_41BC_1ECF3EBC4A83",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 48.73,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 96.9
  },
  {
   "targetYaw": -58.66,
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -116.94,
   "path": "shortest",
   "targetPitch": -8.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -143.07,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 112.92,
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 1.63,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_18979BEC_5026_5370_41B7_0A3F311D8CCF",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 18.82,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.81
  },
  {
   "targetYaw": -65.44,
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_03E9969F_5026_75D1_4188_CD244C49C4B8",
 "class": "PanoramaCameraSequence"
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_07C6D994_5026_5FD7_41C2_C1FD76F3222C, this.albumitem_07F92994_5026_5FD7_41CE_395A7965CAB3); this.loopAlbum(this.playList_6CFD74F2_506A_D12D_41C5_DED592BA4B9F, 0)",
 "player": "this.viewer_uid07F90993_5026_5FD0_4194_2A4A59336611PhotoAlbumPlayer",
 "id": "albumitem_07F92994_5026_5FD7_41CE_395A7965CAB3",
 "class": "PhotoAlbumPlayListItem"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -23.11,
   "path": "shortest",
   "targetPitch": -0.75,
   "pitchSpeed": 31.86,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 63.02
  },
  {
   "targetYaw": 13.94,
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_196D7C26_5026_54F0_41D3_3644724FEF54",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 33.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 67.14
  },
  {
   "targetYaw": 7.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_070972E7_5026_6D71_419C_61C820996CF5",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 20.07,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 39.32
  },
  {
   "targetYaw": -58.66,
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -116.94,
   "path": "shortest",
   "targetPitch": -8.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -143.07,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 112.92,
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 1.63,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_00E213E3_5026_7371_41A1_B4BA039E943C",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 10.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 20.43
  },
  {
   "targetYaw": 35.55,
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_0119B4C4_5026_75B7_41B1_27823F214835",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -20.1,
   "path": "shortest",
   "targetPitch": -3.01,
   "pitchSpeed": 31.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 62.33
  },
  {
   "targetYaw": -114.43,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1BAF4F80_5026_53B0_41CC_E3011232876C",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -50.12,
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 3.14,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 5.3
  },
  {
   "targetYaw": 22.48,
   "path": "shortest",
   "targetPitch": 19.16,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -130.27,
   "hfovSpeed": 33.25,
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetHfov": 60,
   "targetPitch": 1.32,
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 142.57,
   "hfovSpeed": 33.25,
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetHfov": 60,
   "targetPitch": 5.59,
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 82.02,
   "hfovSpeed": 33.25,
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetHfov": 90,
   "targetPitch": 2.83,
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 38.56,
   "path": "shortest",
   "targetPitch": -3.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.64,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_7702EE73_503A_3113_41CD_2CAA9E773119",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 66.48,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 132.58
  },
  {
   "targetYaw": -40.57,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_19DFAD57_5026_5750_41CC_94CD8F6CC8D5",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -20.1,
   "path": "shortest",
   "targetPitch": -3.01,
   "pitchSpeed": 20.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 41.11
  },
  {
   "targetYaw": -114.43,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_06FFB220_5026_6CF0_41CE_DDA46A569425",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 3.27,
   "path": "shortest",
   "targetPitch": 11.81,
   "pitchSpeed": 15.44,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 30.01
  },
  {
   "targetYaw": 56.9,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_021335A0_5026_77EF_41D0_6FF162D001F9",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -150.36,
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 115.69,
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 74.24,
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 47.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 94.07
  },
  {
   "targetYaw": 35.55,
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_18EC2AD1_5026_5D51_41B1_D79F0CFA7CE0",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -82.27,
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1AB77E91_5026_55D0_41B7_2AA84DA8035F",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 31.31,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 61.91
  },
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1BCB1F65_5026_5370_41A0_A1129FF0F9C8",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 3.27,
   "path": "shortest",
   "targetPitch": 11.81,
   "pitchSpeed": 46.13,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 91.68
  },
  {
   "targetYaw": 56.9,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_06B1E25C_5026_6D50_41D3_CBB7EB2B2F6F",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 32.17,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 63.64
  },
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_04476FD3_5026_5350_41B1_4C113B82F589",
 "class": "PanoramaCameraSequence"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "container_07D5B99A_5026_5FD3_41C2_BF7251F88BE7",
 "class": "Container",
 "children": [
  "this.viewer_uid07D6199A_5026_5FD3_41D1_26E616B73773",
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "class": "Container",
   "children": [
    "this.htmltext_07D5F99B_5026_5FD1_41D2_11FE2A726689"
   ],
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0.3,
   "right": 0,
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "left": 0,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "verticalAlign": "bottom",
   "bottom": 0,
   "overflow": "scroll",
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
    "name": "Container43840"
   },
   "shadow": false
  },
  "this.component_182A9A65_5026_5D71_41C7_9E07A62004C0",
  "this.component_182A8A65_5026_5D71_41C7_A1D2D4BD7B86"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
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
  "name": "Container43839"
 },
 "shadow": false
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 26.93,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 53.11
  },
  {
   "targetYaw": -110.91,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_07E94302_5026_6CB3_41D1_E69D7C33A979",
 "class": "PanoramaCameraSequence"
},
{
 "horizontalAlign": "center",
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 40,
 "propagateClick": true,
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
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "width": "3.291%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_rollover.jpg",
 "propagateClick": false,
 "height": "74.41%",
 "verticalAlign": "middle",
 "minWidth": 50,
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
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 7.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_063D91EA_5026_6F70_41CD_A2C3FD2CD641); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9CE2D4_5026_6D57_41A3_71AFF2E6DC4F",
   "pitch": -10.11,
   "hfov": 24.48,
   "distance": 100,
   "yaw": 109.03
  }
 ],
 "id": "overlay_541D6722_4C12_9CCD_41BA_EE1FE905E835",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_067B21B2_5026_6FD0_41D0_B4D86F23FA34); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9D32D4_5026_6D50_4195_53B07CC4BEDC",
   "pitch": -10.11,
   "hfov": 20.28,
   "distance": 100,
   "yaw": 2.39
  }
 ],
 "id": "overlay_5B17EBCA_4C1E_AB5D_41BF_C3867D88D8B8",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9D42D5_5026_6D51_41CC_0CD9223D8C99",
   "pitch": -5.46,
   "hfov": 5.89,
   "distance": 100,
   "yaw": -66.95
  }
 ],
 "id": "overlay_52FEE528_4C15_FCDE_41AE_7C61B197B5D1",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "\u000d  Quincho"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_065BA1CE_5026_6FB0_41C6_553FD153928D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7413D737_4DF2_7B32_41CC_6C141EB3875F",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Parrilla"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_757F79E6_4DFE_B753_41AD_2FB53A3E46D9",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "\u000d    Living"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_061DB205_5026_6CB0_41C5_720451AC2F97); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_76E05345_4DFE_7B57_41C6_165FDFFF9CA8",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -37.81,
 "pitch": 8.86,
 "bleaching": 0.7,
 "id": "overlay_722C6DB8_4C0E_AF3D_41C6_E65D7C692713",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -164.17,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 162.92,
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.33,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 7.38,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 13.81
  },
  {
   "targetYaw": -150.36,
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 115.69,
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 74.24,
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_052080F4_5026_6D50_41AE_674AA3B93871",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -23.11,
   "path": "shortest",
   "targetPitch": -0.75,
   "pitchSpeed": 1.39,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 1.78
  },
  {
   "targetYaw": 13.94,
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_01BE1517_5026_74D1_41C9_D0AB01FFFF69",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -3.52,
   "path": "shortest",
   "targetPitch": -18.59,
   "pitchSpeed": 64.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 128.31
  },
  {
   "targetYaw": 39.06,
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_19254C96_5026_55D0_41D0_EFA155442564",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_01DC44FC_5026_7557_41C0_96EFC2EC3EC8); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B97C2CC_5026_6DB7_41CB_4280B5B56B26",
   "pitch": -7.98,
   "hfov": 16.67,
   "distance": 100,
   "yaw": -67.58
  }
 ],
 "id": "overlay_5AB33241_4C16_F54F_419A_1A82626E06AC",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "   Comedor"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_01BE0517_5026_74D1_41D0_D5D04E95B0F4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_779BAA9C_4DF2_75F6_41D3_3255A4E1C04A",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -74.99,
 "pitch": 41.51,
 "bleaching": 0.7,
 "id": "overlay_724AC826_4C0D_94D2_41C0_AB29E3F1E825",
 "class": "LensFlarePanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 4.65,
 "pitch": 36.49,
 "bleaching": 0.7,
 "id": "overlay_724D3C57_4C0D_ED73_41CD_8425355074D8",
 "class": "LensFlarePanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 82.27,
 "pitch": 38,
 "bleaching": 0.7,
 "id": "overlay_7277C163_4C0D_F752_41C2_7921673C330A",
 "class": "LensFlarePanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 176.73,
 "pitch": 47.04,
 "bleaching": 0.7,
 "id": "overlay_727CA71C_4C0D_FCF6_41C8_60EF23AE255E",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 32.17,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 63.64
  },
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_04657FB7_5026_53D0_41C2_59ACE516330D",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 39.06,
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_7870010A_503E_30FD_41BC_311867DA2A0C",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 27.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 55.17
  },
  {
   "targetYaw": 35.55,
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_006DB371_5026_7351_41BB_B2AE23EE62E3",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4, this.camera_0598A197_5026_6FD0_41B7_F8D391FBBEDC); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BF402E9_5026_6D71_41D2_CACB4F9D4C2C",
   "pitch": -5.33,
   "hfov": 18.75,
   "distance": 100,
   "yaw": 53.35
  }
 ],
 "id": "overlay_6A014951_4C73_974F_41D3_26D53DEC980E",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_05E3F12B_5026_6CF0_41BC_4682B64C331A); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BF4A2E9_5026_6D71_41A3_DCEDE00055A2",
   "pitch": -3.71,
   "hfov": 10.79,
   "distance": 100,
   "yaw": -87.45
  }
 ],
 "id": "overlay_64272CF1_4C72_6D4F_41CD_2DAE74C3F5A5",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_05A5C161_5026_6F70_41D2_9A2CC0481702); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BF4C2E9_5026_6D70_41CD_FA89A225043D",
   "pitch": -28.45,
   "hfov": 24.52,
   "distance": 100,
   "yaw": 126.55
  }
 ],
 "id": "overlay_64C8A2FD_4C0F_9537_41C5_B4AF39D9D9A8",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "\u000d Habitaci\u00f3n"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_63C06466_4C0F_9D52_41C9_6732EF408B14",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "    Escalera\u000d   Entrepiso"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_05B8417C_5026_6F50_419B_0AF3E5EEE6BA); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_639391F7_4C0E_B732_41CC_40443DBB4B79",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Habitaci\u00f3n\u000d    Master"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_05C4E146_5026_6CB0_41C6_B5C685E943A1); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7E5D4DA6_4C12_6FD2_41D0_4F6C9247ADD1",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -76.75,
 "pitch": 9.86,
 "bleaching": 0.7,
 "id": "overlay_7243A042_4C0F_B552_4173_029AA7306C65",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -3.52,
   "path": "shortest",
   "targetPitch": -18.59,
   "pitchSpeed": 61.54,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 122.64
  },
  {
   "targetYaw": 39.06,
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_05A5D161_5026_6F70_41B6_37A96A0FAB31",
 "class": "PanoramaCameraSequence"
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_07D7A999_5026_5FD1_41CC_8B54DB2F71B0, this.albumitem_07C80998_5026_5FDF_41B6_8666FEB7FD8A); this.loopAlbum(this.playList_6C8294FC_506A_D115_41CF_0386F3F78B21, 0)",
 "player": "this.viewer_uid07C8C998_5026_5FDF_41BE_2B4202BD52E4PhotoAlbumPlayer",
 "id": "albumitem_07C80998_5026_5FDF_41B6_8666FEB7FD8A",
 "class": "PhotoAlbumPlayListItem"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 4.27,
   "path": "shortest",
   "targetPitch": 8.04,
   "pitchSpeed": 4.65,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 8.34
  },
  {
   "targetYaw": -164.17,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 162.92,
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.33,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_05988197_5026_6FD0_41D5_07F7CF4CAA3B",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 40.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 81.27
  },
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1B168F2E_5026_54F0_41D1_E072BBDB0F3A",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 9.55,
   "path": "shortest",
   "targetPitch": -33.91,
   "pitchSpeed": 11.03,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 21.15
  },
  {
   "targetYaw": 71.97,
   "path": "shortest",
   "targetPitch": -21.54,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 108.4,
   "path": "shortest",
   "targetPitch": -20.29,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 172.97,
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -97.85,
   "path": "shortest",
   "targetPitch": -10.49,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -37.81,
   "path": "shortest",
   "targetPitch": 1.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_027FD54D_5026_74B1_41CC_4F8692434C42",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 18.64,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.44
  },
  {
   "targetYaw": -40.57,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1A264DF8_5026_5750_41BA_438A637856B9",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 52.95,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 105.38
  },
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_18F61AED_5026_5D71_41C3_F238C601F39F",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BFF22F0_5026_6D6F_418C_D3A4D7B88D4D",
   "pitch": -8.08,
   "hfov": 23.25,
   "distance": 100,
   "yaw": -128.85
  }
 ],
 "id": "overlay_647D9114_4C12_74F5_41CF_299D6FC64B1D",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_0520B0F4_5026_6D50_41A4_5BD433980710); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BFFB2F0_5026_6D6F_41CD_9ACA320BF986",
   "pitch": -5,
   "hfov": 12.1,
   "distance": 100,
   "yaw": -51.34
  }
 ],
 "id": "overlay_65D5C0C2_4C13_B54D_41C1_69BF7BCE4606",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_048960A0_5026_6DF0_41BE_B61EBF5BADFC); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BFFC2F0_5026_6D6F_41C2_D7B1FBDD9F90",
   "pitch": -29.25,
   "hfov": 10.6,
   "distance": 100,
   "yaw": 28.54
  }
 ],
 "id": "overlay_6610EADB_4C12_B572_419A_5D2ACB79AA0D",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Habitaci\u00f3n\u000d     Master"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_054EE0D7_5026_6D50_41C1_FD252D450A54); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_60C4A3D0_4C0F_9B4D_4194_30763AC2589E",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "     Deck\u000d"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_056CD0BC_5026_6DD0_41A3_6F6CE2755FBA); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_6265BD1E_4C0E_6CF5_4194_D81FE8F9F4CD",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "    Quincho"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_0501C110_5026_6CD0_41C5_A57C953778BC); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_62DC11F1_4C33_F74E_41D1_2E11E02105BB",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -57.15,
 "pitch": 43.27,
 "bleaching": 0.7,
 "id": "overlay_72CD9B17_4C0E_74F3_4195_54A71D7C31BA",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 33.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 67.14
  },
  {
   "targetYaw": 7.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_073682CB_5026_6DB0_41D5_13B63CA4EC06",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 54.98,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 109.47
  },
  {
   "targetYaw": -40.57,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_05C4D146_5026_6CB0_41C3_F7EB267449DD",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 16.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.48
  },
  {
   "targetYaw": -65.44,
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1AE0CE4B_5026_54B0_41C8_E673F4D23BC0",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 26.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 52.59
  },
  {
   "targetYaw": -40.57,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_054EC0D7_5026_6D50_4185_B7D25B978372",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -2.26,
   "path": "shortest",
   "targetPitch": -4.74,
   "pitchSpeed": 1.17,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 1.34
  },
  {
   "targetYaw": -82.27,
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_19F46D21_5026_54F0_41C6_B61B911C50E3",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0.75,
   "path": "shortest",
   "targetPitch": 8.04,
   "pitchSpeed": 19.14,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 37.44
  },
  {
   "targetYaw": -79.76,
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -113.93,
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -160.66,
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.58,
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 110.91,
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 59.67,
   "path": "shortest",
   "targetPitch": 2.83,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_063DF1EA_5026_6F70_4192_7E99D7C5F056",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 49.5,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 98.46
  },
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_07743294_5026_6DD0_4184_2FAE9EDE5375",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 10.4,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 19.89
  },
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_067B11B2_5026_6FD0_41C6_E5A6C42134E2",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 27.83,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 54.92
  },
  {
   "targetYaw": 7.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_0297B611_5026_74D1_41CC_9497EF911821",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 68.83,
   "path": "shortest",
   "targetPitch": 13.57,
   "pitchSpeed": 17.39,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.93
  },
  {
   "targetYaw": 39.06,
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -29.77,
   "path": "shortest",
   "targetPitch": -25.81,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -153.37,
   "path": "shortest",
   "targetPitch": -14.51,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 133.78,
   "path": "shortest",
   "targetPitch": 2.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 71.47,
   "path": "shortest",
   "targetPitch": -34.35,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_0085343B_5026_74D1_41B8_353F3327CB79",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 4.75,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 8.54
  },
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_19144CEA_5026_5570_41D1_1D059C100808",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 32.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 64.01
  },
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_02B5A5F5_5026_7751_41A5_42673F299427",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -2.49,
   "path": "shortest",
   "targetPitch": 7.61,
   "pitchSpeed": 9.04,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 17.16
  },
  {
   "targetYaw": -50.12,
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 3.14,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 5.3
  },
  {
   "targetYaw": 22.48,
   "path": "shortest",
   "targetPitch": 19.16,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -130.27,
   "hfovSpeed": 33.25,
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetHfov": 60,
   "targetPitch": 1.32,
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 142.57,
   "hfovSpeed": 33.25,
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetHfov": 60,
   "targetPitch": 5.59,
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 82.02,
   "hfovSpeed": 33.25,
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetHfov": 90,
   "targetPitch": 2.83,
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 38.56,
   "path": "shortest",
   "targetPitch": -3.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.64,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_19344CB2_5026_55D0_419E_6BB208DCC7C3",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 36.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 72.37
  },
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_04B72083_5026_6DB0_41C0_2D952B17C580",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 13.68,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 26.47
  },
  {
   "targetYaw": -110.91,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_18AC1B95_5026_53D0_41BF_8015A6BC2A64",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -82.27,
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": 10.11,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 135.79,
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.66,
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.39,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1AA54E83_5026_55B0_41D2_0916BBAC006F",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 18.82,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.81
  },
  {
   "targetYaw": -65.44,
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_03CBF6BB_5026_75D1_41B1_0020329CF72D",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -23.11,
   "path": "shortest",
   "targetPitch": -0.75,
   "pitchSpeed": 17.82,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 34.8
  },
  {
   "targetYaw": 13.94,
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_19813D8C_5026_57B0_41AF_F64D97073614",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 36.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 72.37
  },
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_04D41067_5026_6D70_41B1_5105C9949BC7",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_03E9869E_5026_75D0_41C4_15FDA03BB7E9); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BF2F2EB_5026_6D71_41B3_E1B859AAF871",
   "pitch": -3.62,
   "hfov": 9.98,
   "distance": 100,
   "yaw": 146.58
  }
 ],
 "id": "overlay_6A5E0209_4C0E_94DF_417D_46B9DFD108C3",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_03CB96BB_5026_75D1_41A1_E0C13BE0760B); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_6261EA3E_4C3F_B535_41D0_801F1A3A3344",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 34.29,
 "pitch": 30.96,
 "bleaching": 0.7,
 "id": "overlay_7243A9E8_4C0E_775E_41A5_59C64522A4DF",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 47.32,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 94.07
  },
  {
   "targetYaw": 35.55,
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_18E2CAB4_5026_5DD7_41BF_BDA016DF622E",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 31.31,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 61.91
  },
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1BE96F49_5026_54B0_413C_F681AFAEAE8A",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -110.91,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.73,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -49.36,
   "path": "shortest",
   "targetPitch": 47.79,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 134.03,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -173.22,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -51.88,
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": 3.33,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 142.07,
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 72.48,
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -1.38,
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "class": "PanoramaCameraSequence"
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
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.85
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_011A44C4_5026_75B7_41D2_116A9D047C8C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BA022BE_5026_6DD3_41C8_1502B1C5DD4E",
   "pitch": 1.85,
   "hfov": 7.2,
   "distance": 100,
   "yaw": -2.15
  }
 ],
 "id": "overlay_582B08F1_4C17_954F_41C3_3E0BD7FF2176",
 "class": "HotspotPanoramaOverlay"
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
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_1_HS_1_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 2.48
  }
 ],
 "data": {
  "label": "   Entrada\u000d"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_01FB34E0_5026_756F_41C9_5A34878F5696); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_1_HS_1_0.png",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 314
     }
    ]
   },
   "pitch": 2.48,
   "hfov": 7.05,
   "yaw": -2.25,
   "distance": 50
  }
 ],
 "id": "overlay_73F3D194_4C17_B7F5_41BC_FF4619C46748",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -54.89,
 "pitch": 52.57,
 "bleaching": 0.7,
 "id": "overlay_7224EB94_4C32_EBF6_41A9_543992A26815",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
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
   "hfov": 3.25,
   "yaw": 7.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.92
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_7B336867_503A_7133_41D0_C60A8E2E0AFE, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_6C8294FC_506A_D115_41CF_0386F3F78B21, '90%', '90%', true, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 3.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_1_HS_2_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ]
   },
   "pitch": 2.92,
   "yaw": 7.41
  }
 ],
 "id": "overlay_7A44856E_503A_D335_41C2_0829AD1B3AD0",
 "class": "HotspotPanoramaOverlay"
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
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 4.15
  }
 ],
 "data": {
  "label": "\u00c1lbum de\u000d   Fotos"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_77F36E2E_502A_3135_41CC_6EE71EAFE57A); this.showPopupMedia(this.window_7C27F859_5026_D11F_41C2_F3CB866F68EC, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_6C8764FE_506A_D115_41D0_5F36975469BE, '90%', '90%', true, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_1_HS_3_0.png",
      "width": 153,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ]
   },
   "pitch": 4.15,
   "hfov": 5.5,
   "yaw": 7.47,
   "distance": 50
  }
 ],
 "id": "overlay_7D21C4D9_503A_311F_41BC_F625F48682A6",
 "class": "HotspotPanoramaOverlay"
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
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_1_HS_4_1_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ]
   },
   "pitch": -4.06
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.62,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_1_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ]
   },
   "pitch": -4.06,
   "yaw": 37.61
  }
 ],
 "id": "overlay_609B37FF_502A_FF13_419C_2ACEFBCB0188",
 "class": "HotspotPanoramaOverlay"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 27.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 55.17
  },
  {
   "targetYaw": 35.55,
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_004DB38D_5026_73B1_41D3_1848B8D90B75",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 13.94,
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 32.36,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 64.01
  },
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_02D5B5D8_5026_775F_41B4_5913F2C1EB78",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_04652FB7_5026_53D0_41CB_32CF7CCC3609); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8462DC_5026_6D57_41BD_3A847B3D49CD",
   "pitch": -3.63,
   "hfov": 10.77,
   "distance": 100,
   "yaw": 98.57
  }
 ],
 "id": "overlay_539238FD_4C72_9536_41C1_9735137A6A8B",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_1BE94F49_5026_54B0_4170_2D63F6D20FE5); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8482DD_5026_6D51_41CA_F17F48383CDE",
   "pitch": -3.86,
   "hfov": 10.77,
   "distance": 100,
   "yaw": 144.72
  }
 ],
 "id": "overlay_539524B3_4C72_9D33_41BF_0168CD1AF8AE",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_1BAF2F80_5026_53B0_41B4_27D3BF953ED8); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B84C2DD_5026_6D51_41CA_4E571434FB35",
   "pitch": -13.33,
   "hfov": 16.42,
   "distance": 100,
   "yaw": -169.64
  }
 ],
 "id": "overlay_52780C30_4C76_6CCE_41C1_B9F2E8174A50",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_045A1FF3_5026_5350_41CB_C15160063C9B); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8552DD_5026_6D51_4199_55CE60756558",
   "pitch": -4.25,
   "hfov": 7.35,
   "distance": 100,
   "yaw": 130.71
  }
 ],
 "id": "overlay_6F8B9EB2_4C77_ADCD_41D1_02693D57AF37",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "     Deck"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_04477FD3_5026_5350_41C9_5D158DE63242); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_78EBC3AE_4C17_FBD5_41CF_7454C300F3F8",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Piscinas"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_043C3011_5026_6CD0_41CB_5D20663334BB); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7AA7DA94_4C16_95F6_41C3_C928FF8C5DF3",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "       Pasillo"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_1B81FF9B_5026_53D0_4190_810052C52B26); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7982F986_4C12_97D2_41AF_EBA9BB403852",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Quincho"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_1BCBEF65_5026_5370_41B9_801D23E7E8FF); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_74F737A5_4C13_9BD6_41C7_666E6CB897D9",
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 68.83,
   "path": "shortest",
   "targetPitch": 13.57,
   "pitchSpeed": 17.39,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.93
  },
  {
   "targetYaw": 39.06,
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -29.77,
   "path": "shortest",
   "targetPitch": -25.81,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -153.37,
   "path": "shortest",
   "targetPitch": -14.51,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 133.78,
   "path": "shortest",
   "targetPitch": 2.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 71.47,
   "path": "shortest",
   "targetPitch": -34.35,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_00A4041F_5026_74D1_41D2_D7341CCC9525",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 66.48,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 132.58
  },
  {
   "targetYaw": -40.57,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -112.42,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 85.54,
   "path": "shortest",
   "targetPitch": -22.3,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.38,
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_19A8CD72_5026_5750_41CD_49DD721EB1A2",
 "class": "PanoramaCameraSequence"
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_07D5F99B_5026_5FD1_41D2_11FE2A726689, this.albumitem_07D6099A_5026_5FD3_41A2_1B018A4DFA67); this.loopAlbum(this.playList_6C8764FE_506A_D115_41D0_5F36975469BE, 0)",
 "player": "this.viewer_uid07D6199A_5026_5FD3_41D1_26E616B73773PhotoAlbumPlayer",
 "id": "albumitem_07D6099A_5026_5FD3_41A2_1B018A4DFA67",
 "class": "PhotoAlbumPlayListItem"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -2.49,
   "path": "shortest",
   "targetPitch": 7.61,
   "pitchSpeed": 1.28,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 1.56
  },
  {
   "targetYaw": -50.12,
   "path": "shortest",
   "targetPitch": 13.88,
   "pitchSpeed": 3.14,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 5.3
  },
  {
   "targetYaw": 22.48,
   "path": "shortest",
   "targetPitch": 19.16,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -130.27,
   "hfovSpeed": 33.25,
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetHfov": 60,
   "targetPitch": 1.32,
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 142.57,
   "hfovSpeed": 33.25,
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetHfov": 60,
   "targetPitch": 5.59,
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 82.02,
   "hfovSpeed": 33.25,
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetHfov": 90,
   "targetPitch": 2.83,
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 38.56,
   "path": "shortest",
   "targetPitch": -3.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.64,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1A3FAE14_5026_54D0_41CF_38A98885C78C",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -38.25,
   "path": "shortest",
   "targetPitch": -22.96,
   "pitchSpeed": 12.24,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 23.58
  },
  {
   "targetYaw": 35.55,
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_01474472_5026_7553_418E_7442F6FC8E59",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 11.8,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 22.71
  },
  {
   "targetYaw": -150.36,
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 115.69,
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 74.24,
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_07AB033A_5026_6CD3_41CF_4A82516A5BE8",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_02512569_5026_7771_41D2_1C136E46DA5A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BF292EC_5026_6D77_41C5_7E2E9A007BC4",
   "pitch": -7.08,
   "hfov": 12.83,
   "distance": 100,
   "yaw": -40.92
  }
 ],
 "id": "overlay_6BD98EFF_4C0D_AD32_41D3_178505AC51C0",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Arrow 02 Right"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70, this.camera_019F6531_5026_74D1_41B7_75A9EE4359D2); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BF332ED_5026_6D71_41C3_BBC599AF6788",
   "pitch": -8.28,
   "hfov": 9.65,
   "distance": 50,
   "yaw": 11.3
  }
 ],
 "id": "overlay_64978149_4C12_F75E_41C0_FA527622DCC1",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_0213D5A0_5026_77EF_41D4_4EF7E5CB7955); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BF362ED_5026_6D71_4171_C4A5BBACCA7A",
   "pitch": -4.9,
   "hfov": 15.92,
   "distance": 100,
   "yaw": -113.86
  }
 ],
 "id": "overlay_64834E7A_4C17_ED3D_41D1_C0DF7AD568DB",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "\u000d    Balc\u00f3n"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_02F455BC_5026_77D7_41C9_506DBA4F92D0); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7D7A7CEF_4C37_ED52_41C4_A5D88A210E28",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_02325584_5026_77B7_418C_750EF0C6539F); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_630C59D7_4C35_B772_41AF_C1BF4A5F8B81",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "\u000d\u000d     Ba\u00f1o"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70, this.camera_027FC54D_5026_74B1_41C6_1B4A2593C104); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7C27B320_4C32_F4CE_41D1_558125506B6C",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -119.71,
 "pitch": 10.36,
 "bleaching": 0.7,
 "id": "overlay_72B4E25A_4C0E_9572_41CA_E94D7E32E9E4",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 92.45,
   "path": "shortest",
   "targetPitch": -1.76,
   "pitchSpeed": 16.54,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.23
  },
  {
   "targetYaw": 7.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -22.23,
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.95,
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -167.44,
   "path": "shortest",
   "targetPitch": -0.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.08,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1B7DAED9_5026_5550_41D2_34D445CC15D5",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -23.11,
   "path": "shortest",
   "targetPitch": -0.75,
   "pitchSpeed": 31.86,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 63.02
  },
  {
   "targetYaw": 13.94,
   "path": "shortest",
   "targetPitch": -14.26,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -162.92,
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -94.08,
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1899DC0A_5026_54B0_41BC_33470661C30E",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -20.1,
   "path": "shortest",
   "targetPitch": -3.01,
   "pitchSpeed": 13.19,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 25.5
  },
  {
   "targetYaw": -114.43,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_18C64B26_5026_5CF3_41D1_82CC3F40BE54",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 16.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.48
  },
  {
   "targetYaw": -65.44,
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1A17BE2F_5026_54F0_419C_D5557088B1C8",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -20.1,
   "path": "shortest",
   "targetPitch": -3.01,
   "pitchSpeed": 20.96,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 41.11
  },
  {
   "targetYaw": -114.43,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_06D1423E_5026_6CD0_41A2_A12E6FD71A20",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 4.75,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 8.54
  },
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_19E35D05_5026_54B0_41AE_B3971A881722",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 11.8,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 22.71
  },
  {
   "targetYaw": -150.36,
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 115.69,
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 74.24,
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_078BA355_5026_7351_41B8_E3A2C585D049",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -114.43,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -24.62,
   "path": "shortest",
   "targetPitch": 27.13,
   "pitchSpeed": 45.57,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 90.55
  },
  {
   "targetYaw": 31.53,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 132.52,
   "path": "shortest",
   "targetPitch": 16.39,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 131.77,
   "path": "shortest",
   "targetPitch": -26.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "path": "shortest",
   "targetPitch": -12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -47.1,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -10.68,
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 29.02,
   "path": "shortest",
   "targetPitch": -2.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_03483648_5026_74BF_41A5_FFB8A49BBB16",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 48.73,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 96.9
  },
  {
   "targetYaw": -58.66,
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -116.94,
   "path": "shortest",
   "targetPitch": -8.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -143.07,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 112.92,
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 1.63,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1884CBCD_5026_53B0_41B8_04CDF2B3DB48",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -3.52,
   "path": "shortest",
   "targetPitch": -18.59,
   "pitchSpeed": 61.54,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 122.64
  },
  {
   "targetYaw": 39.06,
   "path": "shortest",
   "targetPitch": -33.1,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.95,
   "path": "shortest",
   "targetPitch": -36.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -40.07,
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 16.45,
   "path": "shortest",
   "targetPitch": 17.9,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_0587A17C_5026_6F50_41D0_8A80C9D4F6B6",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -20.1,
   "path": "shortest",
   "targetPitch": -3.01,
   "pitchSpeed": 31.52,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 62.33
  },
  {
   "targetYaw": -114.43,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 163.17,
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 100.11,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1B81EF9B_5026_53D0_41BB_7F1DB54A0BA5",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_01651456_5026_7553_41C6_951100BC798B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BA8C2CA_5026_6DB3_41C3_96DE8641FAF3",
   "pitch": -31.48,
   "hfov": 23.6,
   "distance": 100,
   "yaw": -127.28
  }
 ],
 "id": "overlay_5A02EA85_4C12_F5D7_41D2_8FCF819F522E",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6, this.camera_00A4241F_5026_74D1_41D4_E106054390D6); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BA902CA_5026_6DB3_41AA_E4825BAAF597",
   "pitch": -8.77,
   "hfov": 17.8,
   "distance": 100,
   "yaw": 156.31
  }
 ],
 "id": "overlay_59341A7B_4C15_9533_41C3_0487EA40E264",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BA9B2CB_5026_6DB1_41C9_03F0813F0FD4",
   "pitch": -7.1,
   "hfov": 16.2,
   "distance": 100,
   "yaw": -20.1
  }
 ],
 "id": "overlay_5156665F_4C12_9D72_41B6_A38066CA80C7",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_0127048D_5026_75B1_41C3_E20E3293971A); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BA9D2CB_5026_6DB1_41CA_DA498C51E176",
   "pitch": 7.22,
   "hfov": 16.2,
   "distance": 100,
   "yaw": -161.79
  }
 ],
 "id": "overlay_52E662BC_4C13_9535_41C3_08531DC1890E",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "      Sala - Centro"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_01476472_5026_7553_41BA_9357464F5EB9); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_715392A3_4C0D_F5D1_41A3_454BAED9273F",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Escalera\u000d Entrepiso"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_0139D4A9_5026_75F1_41C9_7B5A06C1C33C); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7131CB8C_4C12_6BD6_41B2_B7A26C46B627",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Piscinas"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_716119CF_4C17_9752_41CD_34F0DAA56395",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Escritorio"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6, this.camera_0085243B_5026_74D1_41CC_D20D0CC65082); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_73B7B12B_4C16_B4D3_41BA_A0020CA60648",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 46.6,
 "pitch": 75.68,
 "bleaching": 0.7,
 "id": "overlay_7279217F_4C0D_9732_41D1_FA5340FD8914",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -51.88,
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": 3.33,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 142.07,
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 72.48,
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -1.38,
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_03091681_5026_75B1_41AC_E83D38BD7895",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_1A179E2F_5026_54F0_41B1_378B21590FD8); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8832E5_5026_6D71_41C9_39AA1AD1018F",
   "pitch": 17.13,
   "hfov": 16.85,
   "distance": 100,
   "yaw": -14.87
  }
 ],
 "id": "overlay_6E7D7ACC_4C72_9555_41C8_254666DCBD5A",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_1A745DC2_5026_57B0_41CE_C8463B32FEA2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8862E6_5026_6D73_41CC_710CFEFFA55E",
   "pitch": -33.05,
   "hfov": 12.2,
   "distance": 100,
   "yaw": -6.9
  }
 ],
 "id": "overlay_689FBDC5_4C76_EF56_41D0_FDE427A56FD1",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_19811D8C_5026_57B0_41A4_82CCA3EE0047); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8892E6_5026_6D73_4194_C072FFB03857",
   "pitch": -26.36,
   "hfov": 6.24,
   "distance": 100,
   "yaw": 6.63
  }
 ],
 "id": "overlay_68C43EA9_4C76_6DDE_41BC_6917D875D7F0",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_1A265DF8_5026_5750_41AD_0CC0D9AA0931); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B88C2E6_5026_6D73_41BB_7B439DF44524",
   "pitch": 10.78,
   "hfov": 4.51,
   "distance": 100,
   "yaw": -39.42
  }
 ],
 "id": "overlay_696D3868_4C76_955E_41D2_B78938E57E51",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9, this.camera_1A3FBE14_5026_54D0_4193_56C0B24667BA); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8962E6_5026_6D73_41C2_B597C7FC4BF2",
   "pitch": -15.29,
   "hfov": 15.44,
   "distance": 100,
   "yaw": 130.88
  }
 ],
 "id": "overlay_68EAA62C_4C72_BCD6_41AD_F2767561D35F",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Habitaci\u00f3n\u000d    Master"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_62AE8006_4C3E_94D5_4195_37AB3152888F",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "        Sala\u000d      Centro"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_1A4D9DDD_5026_5750_41CD_5B493C7B8D97); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_63036D8E_4C3D_AFD2_41CC_31017422F0F6",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0BF612E7_5026_6D71_41CC_099E50781922",
   "pitch": 16.14,
   "hfov": 7.96,
   "distance": 100,
   "yaw": 15.83
  }
 ],
 "id": "overlay_63CFCEB6_4C32_AD32_41C6_39DBCAE7E4F6",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "\u000d Habitaci\u00f3n"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_1AE0DE4B_5026_54B0_41C6_7D911F3B3C2C); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_630263E9_4C33_9B5F_41A8_0D731596BBA0",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_1AC35E67_5026_5570_41CA_91C18056957F); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_63881641_4C35_9D4F_41BF_500F021033D3",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "      Calle"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_63647F43_4C33_AB53_41D1_F19AB5488D5A",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Comedor"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_199C6DA7_5026_57F0_41C8_EAB298D3909C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_638525C6_4C0D_9F52_41D1_E258508E5E91",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 151.61,
 "pitch": 63.12,
 "bleaching": 0.7,
 "id": "overlay_72D70213_4C0F_94F3_41B8_F09D9513D0DA",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0.75,
   "path": "shortest",
   "targetPitch": 8.04,
   "pitchSpeed": 5.92,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 10.89
  },
  {
   "targetYaw": -79.76,
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -113.93,
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -160.66,
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.58,
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 110.91,
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 59.67,
   "path": "shortest",
   "targetPitch": 2.83,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_197ECC42_5026_54B0_41D1_86F543BC889A",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -87.68,
   "path": "shortest",
   "targetPitch": -3.27,
   "pitchSpeed": 16.67,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.48
  },
  {
   "targetYaw": -65.44,
   "path": "shortest",
   "targetPitch": -30.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -61.67,
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 53.64,
   "path": "shortest",
   "targetPitch": -6.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.22,
   "path": "shortest",
   "targetPitch": -19.78,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -151.61,
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1AC37E67_5026_5570_41CE_550E4077782B",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_1B7D8ED9_5026_5550_41B2_9AED625FDA59); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8742DA_5026_6D53_41B7_38CE8F3B68FC",
   "pitch": -14.93,
   "hfov": 17.38,
   "distance": 100,
   "yaw": -20.74
  }
 ],
 "id": "overlay_55BD891B_4C12_F4F2_41BF_BD7A099FA4FB",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_1B33AF12_5026_54D0_41D3_76EABFC6753F); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8782DA_5026_6D50_41BE_F79F63385840",
   "pitch": -5.61,
   "hfov": 10.74,
   "distance": 100,
   "yaw": 42.62
  }
 ],
 "id": "overlay_569D5C53_4C13_ED72_41C5_56F2E1168FED",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_1A87DEA0_5026_55F0_41C9_F89102573121); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8422DB_5026_6D51_41B3_F905C0AFA766",
   "pitch": -4.45,
   "hfov": 10.76,
   "distance": 100,
   "yaw": 88.31
  }
 ],
 "id": "overlay_55344675_4C12_7D37_41CA_0C7A84DACAAA",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Quincho"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_1A9BFEBD_5026_55D0_41AE_70EF4366042C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_79858F87_4C0D_ABD3_41C2_6BD4B90B4286",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "       Parrilla"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_1B51AEF6_5026_5550_41C4_862663D1CFDC); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7A5E25AC_4C0D_9FD5_41A7_29C3FBE038B8",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "  Deck"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_1B169F2E_5026_54F0_41C5_D4A2D2D167AA); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7ABCF3A7_4DF3_FBD3_41D0_D18E2BE7D6F6",
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 56.9,
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 140.06,
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -177.49,
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.66,
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.58,
   "path": "shortest",
   "targetPitch": 0.06,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "class": "PanoramaCameraSequence"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
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
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
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
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
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
 "maxHeight": 40,
 "maxWidth": 45,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "propagateClick": true,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 45,
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
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 35.55,
   "path": "shortest",
   "targetPitch": -16.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 67.96,
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 177.99,
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -149.85,
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -121.47,
   "path": "shortest",
   "targetPitch": -5.97,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -65.19,
   "path": "shortest",
   "targetPitch": -9.23,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": -5.02,
   "path": "shortest",
   "targetPitch": -0.25,
   "pitchSpeed": 25.15,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 49.52
  },
  {
   "targetYaw": -65.69,
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -146.34,
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.65,
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 86.55,
   "path": "shortest",
   "targetPitch": -17.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "path": "shortest",
   "targetPitch": 4.84,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1A9BEEBD_5026_55D0_41D0_21A137AC0557",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0.75,
   "path": "shortest",
   "targetPitch": 8.04,
   "pitchSpeed": 19.14,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 37.44
  },
  {
   "targetYaw": -79.76,
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -113.93,
   "path": "shortest",
   "targetPitch": -11.24,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -160.66,
   "path": "shortest",
   "targetPitch": 5.59,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 145.58,
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 110.91,
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 59.67,
   "path": "shortest",
   "targetPitch": 2.83,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_061D8205_5026_6CB0_41B0_4B8E2D33DFFB",
 "class": "PanoramaCameraSequence"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_0348D648_5026_74BF_41C4_6AD8E3970345); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8C02E2_5026_6D73_41B9_9487739780C1",
   "pitch": -7.02,
   "hfov": 10.71,
   "distance": 100,
   "yaw": -0.69
  }
 ],
 "id": "overlay_6DA7B985_4C73_97D6_41C8_FAF959F094CC",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_02885611_5026_74D1_41CF_C0900CFC6553); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8C92E3_5026_6D71_418E_48779024E940",
   "pitch": -1.75,
   "hfov": 8.83,
   "distance": 100,
   "yaw": -56.59
  }
 ],
 "id": "overlay_6FA18F6B_4C72_EB52_418D_A4752C2B79FF",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8D22E3_5026_6D71_41BA_1804C1AA163A",
   "pitch": -4.51,
   "hfov": 6.01,
   "distance": 100,
   "yaw": -80.64
  }
 ],
 "id": "overlay_6D9129AB_4C72_97D2_41B3_BC9D00327413",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Arrow 04"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_02D645D8_5026_775F_41D1_B94A7066EC58); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8D42E3_5026_6D71_41BF_643751D4EB9F",
   "pitch": -11.83,
   "hfov": 13.65,
   "distance": 100,
   "yaw": -92.35
  }
 ],
 "id": "overlay_6ED1C9D5_4C7E_9776_41CD_EA10811A7BB1",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B8D82E4_5026_6D77_41CE_40BE1A785247",
   "pitch": -2.7,
   "hfov": 7.11,
   "distance": 100,
   "yaw": -108.67
  }
 ],
 "id": "overlay_6FC82723_4C7D_BCD2_41C6_ED142E41D1F5",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "     Deck"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_0329E663_5026_7570_41B3_48CE7F4A6910); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_630303B6_4C15_9B35_41A7_0FE1D2CE67BA",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Cocina"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7C2FC9D8_4C17_F77D_41C5_180CBDEF7BDE",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "    Parrilla"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_0368362C_5026_74F7_41B7_57A869F3F1F3); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7E11B26A_4C16_9552_41A3_28556ECCB81C",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Quincho"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_02B655F5_5026_7751_4199_5D6BF3E85AF6); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7D6E9EA6_4C12_EDD5_41C5_9E91663C2E02",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Pasillo"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7D0ECB6B_4C13_EB53_41BC_4ED41580DB7D",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -45.09,
 "pitch": 63.37,
 "bleaching": 0.7,
 "id": "overlay_0D1F1C5B_4C0F_ED73_41C2_D93B0423D556",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
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
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_1AA55E83_5026_55B0_41C1_A20DE74DD3D9, this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A); this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_1AA55E83_5026_55B0_41C1_A20DE74DD3D9); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9EF2D2_5026_6D53_41D0_83761639598C",
   "pitch": 6.38,
   "hfov": 6.89,
   "distance": 100,
   "yaw": 26.29
  }
 ],
 "id": "overlay_5F22236E_4CFD_BB52_41D0_87962539D379",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B9F22D3_5026_6D51_41B1_B4C742F0E906",
   "pitch": -11.69,
   "hfov": 11.31,
   "distance": 100,
   "yaw": 36.58
  }
 ],
 "id": "overlay_585CAAAF_4CF2_75D3_418F_E4020A5C57BA",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": "   Apagar\u000d    Luces"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_1AB75E91_5026_55D0_41D0_37228545A3A5, this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A); this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_1AB75E91_5026_55D0_41D0_37228545A3A5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_58E12D38_4CF7_EF3D_41B8_194A4EED7DFE",
 "class": "HotspotPanoramaOverlay"
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
 "data": {
  "label": " Living"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "distance": 50
  }
 ],
 "id": "overlay_7593DF4E_4DF2_AB55_41C7_FA82D656CEBF",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 9.42,
 "pitch": 60.61,
 "bleaching": 0.7,
 "id": "overlay_72687B9E_4C0E_ABF2_41BB_A08C589A4291",
 "class": "LensFlarePanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 96.85,
 "pitch": 51.31,
 "bleaching": 0.7,
 "id": "overlay_729624D3_4C0E_BD72_41C0_CD73173E435F",
 "class": "LensFlarePanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 18,
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "container_07F89994_5026_5FD7_41AF_7E542D291EA5",
 "class": "Container",
 "children": [
  "this.viewer_uid07F90993_5026_5FD0_4194_2A4A59336611",
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "class": "Container",
   "children": [
    "this.htmltext_07C6D994_5026_5FD7_41C2_C1FD76F3222C"
   ],
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0.3,
   "right": 0,
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "left": 0,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "verticalAlign": "bottom",
   "bottom": 0,
   "overflow": "scroll",
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
    "name": "Container43828"
   },
   "shadow": false
  },
  "this.component_07C66995_5026_5FD1_41CC_7B1FEA59870E",
  "this.component_07C59995_5026_5FD1_41B3_BE1DA35CFDD4"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
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
  "name": "Container43827"
 },
 "shadow": false
},
{
 "restartMovementOnUserInteraction": true,
 "restartMovementDelay": 5000,
 "movements": [
  {
   "targetYaw": 0,
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 7.38,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 13.81
  },
  {
   "targetYaw": -150.36,
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -178.49,
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 115.69,
   "path": "shortest",
   "targetPitch": -1.44,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 74.24,
   "path": "shortest",
   "targetPitch": -17.02,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_05013110_5026_6CD0_41B9_880882C4BD50",
 "class": "PanoramaCameraSequence"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "class": "Container",
 "width": 110,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
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
 "class": "Container",
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
 "backgroundOpacity": 0,
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
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
 "class": "Image",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_5EF9A31F_502E_7713_41B1_155B9E9559BD.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": "0%",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
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
 "class": "Image",
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "left": "0%",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
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
 "class": "Container",
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
 "left": "0%",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 51,
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1DBAC974_505A_7F57_41CF_185D2D632831",
 "class": "Container",
 "children": [
  "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "width": "12%",
 "scrollBarMargin": 2,
 "paddingRight": 35,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "2.54%",
 "height": "45%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingTop": 7,
 "paddingBottom": 7,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container36223"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "class": "Container",
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
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "left": "3%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "3%",
 "verticalAlign": "top",
 "bottom": "3%",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowHorizontalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "class": "Container",
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
 "left": "3%",
 "minHeight": 1,
 "propagateClick": false,
 "top": "3%",
 "verticalAlign": "top",
 "bottom": "90.63%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "gap": 10,
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
 "class": "Container",
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
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "left": "3%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "3%",
 "verticalAlign": "top",
 "bottom": "3%",
 "scrollBarWidth": 10,
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowHorizontalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "class": "Container",
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
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "left": "3%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "3%",
 "verticalAlign": "top",
 "bottom": "3%",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowHorizontalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "class": "Container",
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
 "left": "3%",
 "propagateClick": false,
 "minHeight": 1,
 "top": "3%",
 "verticalAlign": "top",
 "bottom": "90%",
 "scrollBarWidth": 10,
 "overflow": "visible",
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
 "class": "Container",
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
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "left": "3%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "top": "3%",
 "verticalAlign": "top",
 "bottom": "3%",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowHorizontalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_6B7BD538_502A_54D0_41CC_674161DF5902",
 "class": "Container",
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
 "left": "3%",
 "minHeight": 1,
 "propagateClick": false,
 "overflow": "visible",
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
   "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_0BF1B2EE_5026_6D73_41D2_B96EB3C2D257",
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
 "id": "AnimatedImageResource_0BFDD2F2_5026_6D53_41D1_C3B0524EC4FB",
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
 "id": "AnimatedImageResource_0BFA72F2_5026_6D53_41C2_5612C17BB79C",
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
 "id": "AnimatedImageResource_0BADD2C6_5026_6DB3_41B0_EED888F2120A",
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
 "id": "AnimatedImageResource_0BAA72C6_5026_6DB3_41C9_FF85AFC8C3CE",
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
 "id": "AnimatedImageResource_0BAAB2C7_5026_6DB1_41A8_4D43FC41A457",
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
 "id": "AnimatedImageResource_0BAAD2C7_5026_6DB1_41B7_AF3AE633E0EE",
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
 "id": "AnimatedImageResource_0BAB12C7_5026_6DB1_41BC_6D227BA43947",
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
 "id": "AnimatedImageResource_0BAB42C8_5026_6DBF_41D2_5A46B0B728D6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0_HS_14_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_06537883_507A_FDB1_41CE_01214E0D7262",
 "rowCount": 5,
 "frameCount": 20
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
 "id": "AnimatedImageResource_0B90C2D0_5026_6DAF_41D0_08EB2DED12E6",
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
 "id": "AnimatedImageResource_0B9102D1_5026_6D51_41C2_0FDF981FA114",
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
 "id": "AnimatedImageResource_0B9B72D6_5026_6D53_41D4_3A66D5EA1D7A",
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
 "id": "AnimatedImageResource_0B9BA2D7_5026_6D51_41C0_CDD8439DE9F6",
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
 "id": "AnimatedImageResource_0B9BC2D7_5026_6D51_4150_D8CF6D808C60",
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
 "id": "AnimatedImageResource_0B9862D7_5026_6D51_41D2_26AA183836CF",
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
 "id": "AnimatedImageResource_0B9892D7_5026_6D51_41D4_0D4686D90B67",
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
 "id": "AnimatedImageResource_0B9922D8_5026_6D5F_41CE_63EA0D90094D",
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
 "id": "AnimatedImageResource_0B83F2DF_5026_6D51_41CF_9EBC308109B5",
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
 "id": "AnimatedImageResource_0B8032DF_5026_6D51_41A1_4EC535BF873F",
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
 "id": "AnimatedImageResource_0B8052DF_5026_6D51_41D2_4053B5E3FB1F",
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
 "id": "AnimatedImageResource_0B8082E0_5026_6D6F_41CF_F02D918F50F2",
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
 "id": "AnimatedImageResource_0B8112E0_5026_6D6F_41B9_11814C7844D9",
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
 "id": "AnimatedImageResource_0B8152E0_5026_6D6F_41CF_F85CB64BCF1C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "progressBarBorderSize": 6,
 "id": "viewer_uid07C8C998_5026_5FDF_41BE_2B4202BD52E4",
 "class": "ViewerArea",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
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
 "data": {
  "name": "ViewerArea43832"
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
 "id": "htmltext_07D7A999_5026_5FD1_41CC_8B54DB2F71B0",
 "class": "HTMLText",
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
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
  "name": "HTMLText43835"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "id": "component_07D7799A_5026_5FD3_41C7_11ACBDF7C0C8",
 "class": "IconButton",
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": 10,
 "minHeight": 0,
 "propagateClick": false,
 "top": "45%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "iconURL": "skin/album_left.png",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton43836"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "component_07D7699A_5026_5FD3_41B7_D8B3E4D6EE3E",
 "class": "IconButton",
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0,
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
  "name": "IconButton43837"
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
 "id": "AnimatedImageResource_0B95F2CE_5026_6DB3_41B9_F66110709256",
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
 "id": "AnimatedImageResource_0B9212CE_5026_6DB3_41C0_EC58BF6705CF",
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
 "id": "AnimatedImageResource_0B9262CE_5026_6DB3_41CF_80ED3ECF8611",
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
 "id": "AnimatedImageResource_0B9282CF_5026_6DB1_41B8_4CF3326863BD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "viewerArea": "this.viewer_uid07F90993_5026_5FD0_4194_2A4A59336611",
 "id": "viewer_uid07F90993_5026_5FD0_4194_2A4A59336611PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
},
{
 "progressBarBorderSize": 6,
 "id": "viewer_uid07D6199A_5026_5FD3_41D1_26E616B73773",
 "class": "ViewerArea",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
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
 "data": {
  "name": "ViewerArea43838"
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
 "id": "htmltext_07D5F99B_5026_5FD1_41D2_11FE2A726689",
 "class": "HTMLText",
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
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
  "name": "HTMLText43841"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "id": "component_182A9A65_5026_5D71_41C7_9E07A62004C0",
 "class": "IconButton",
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": 10,
 "minHeight": 0,
 "propagateClick": false,
 "top": "45%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "iconURL": "skin/album_left.png",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton43842"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "component_182A8A65_5026_5D71_41C7_A1D2D4BD7B86",
 "class": "IconButton",
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0,
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
  "name": "IconButton43843"
 },
 "cursor": "hand"
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
 "id": "AnimatedImageResource_0B9CE2D4_5026_6D57_41A3_71AFF2E6DC4F",
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
 "id": "AnimatedImageResource_0B9D32D4_5026_6D50_4195_53B07CC4BEDC",
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
 "id": "AnimatedImageResource_0B9D42D5_5026_6D51_41CC_0CD9223D8C99",
 "rowCount": 6,
 "frameCount": 24
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
 "id": "AnimatedImageResource_0B97C2CC_5026_6DB7_41CB_4280B5B56B26",
 "rowCount": 6,
 "frameCount": 24
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
 "id": "AnimatedImageResource_0BF402E9_5026_6D71_41D2_CACB4F9D4C2C",
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
 "id": "AnimatedImageResource_0BF4A2E9_5026_6D71_41A3_DCEDE00055A2",
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
 "id": "AnimatedImageResource_0BF4C2E9_5026_6D70_41CD_FA89A225043D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "viewerArea": "this.viewer_uid07C8C998_5026_5FDF_41BE_2B4202BD52E4",
 "id": "viewer_uid07C8C998_5026_5FDF_41BE_2B4202BD52E4PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
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
 "id": "AnimatedImageResource_0BFF22F0_5026_6D6F_418C_D3A4D7B88D4D",
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
 "id": "AnimatedImageResource_0BFFB2F0_5026_6D6F_41CD_9ACA320BF986",
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
 "id": "AnimatedImageResource_0BFFC2F0_5026_6D6F_41C2_D7B1FBDD9F90",
 "rowCount": 6,
 "frameCount": 24
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
 "id": "AnimatedImageResource_0BF2F2EB_5026_6D71_41B3_E1B859AAF871",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_420C3A3B_4C7D_9532_41C4_FAF5A2DB92E9_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_0BA022BE_5026_6DD3_41C8_1502B1C5DD4E",
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
 "id": "AnimatedImageResource_0B8462DC_5026_6D57_41BD_3A847B3D49CD",
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
 "id": "AnimatedImageResource_0B8482DD_5026_6D51_41CA_F17F48383CDE",
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
 "id": "AnimatedImageResource_0B84C2DD_5026_6D51_41CA_4E571434FB35",
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
 "id": "AnimatedImageResource_0B8552DD_5026_6D51_4199_55CE60756558",
 "rowCount": 6,
 "frameCount": 24
},
{
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "viewerArea": "this.viewer_uid07D6199A_5026_5FD3_41D1_26E616B73773",
 "id": "viewer_uid07D6199A_5026_5FD3_41D1_26E616B73773PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
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
 "id": "AnimatedImageResource_0BF292EC_5026_6D77_41C5_7E2E9A007BC4",
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
 "id": "AnimatedImageResource_0BF332ED_5026_6D71_41C3_BBC599AF6788",
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
 "id": "AnimatedImageResource_0BF362ED_5026_6D71_4171_C4A5BBACCA7A",
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
 "id": "AnimatedImageResource_0BA8C2CA_5026_6DB3_41C3_96DE8641FAF3",
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
 "id": "AnimatedImageResource_0BA902CA_5026_6DB3_41AA_E4825BAAF597",
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
 "id": "AnimatedImageResource_0BA9B2CB_5026_6DB1_41C9_03F0813F0FD4",
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
 "id": "AnimatedImageResource_0BA9D2CB_5026_6DB1_41CA_DA498C51E176",
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
 "id": "AnimatedImageResource_0B8832E5_5026_6D71_41C9_39AA1AD1018F",
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
 "id": "AnimatedImageResource_0B8862E6_5026_6D73_41CC_710CFEFFA55E",
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
 "id": "AnimatedImageResource_0B8892E6_5026_6D73_4194_C072FFB03857",
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
 "id": "AnimatedImageResource_0B88C2E6_5026_6D73_41BB_7B439DF44524",
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
 "id": "AnimatedImageResource_0B8962E6_5026_6D73_41C2_B597C7FC4BF2",
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
 "id": "AnimatedImageResource_0BF612E7_5026_6D71_41CC_099E50781922",
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
 "id": "AnimatedImageResource_0B8742DA_5026_6D53_41B7_38CE8F3B68FC",
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
 "id": "AnimatedImageResource_0B8782DA_5026_6D50_41BE_F79F63385840",
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
 "id": "AnimatedImageResource_0B8422DB_5026_6D51_41B3_F905C0AFA766",
 "rowCount": 6,
 "frameCount": 24
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
 "id": "AnimatedImageResource_0B8C02E2_5026_6D73_41B9_9487739780C1",
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
 "id": "AnimatedImageResource_0B8C92E3_5026_6D71_418E_48779024E940",
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
 "id": "AnimatedImageResource_0B8D22E3_5026_6D71_41BA_1804C1AA163A",
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
 "id": "AnimatedImageResource_0B8D42E3_5026_6D71_41BF_643751D4EB9F",
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
 "id": "AnimatedImageResource_0B8D82E4_5026_6D77_41CE_40BE1A785247",
 "rowCount": 6,
 "frameCount": 24
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
 "id": "AnimatedImageResource_0B9EF2D2_5026_6D53_41D0_83761639598C",
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
 "id": "AnimatedImageResource_0B9F22D3_5026_6D51_41B1_B4C742F0E906",
 "rowCount": 6,
 "frameCount": 24
},
{
 "progressBarBorderSize": 6,
 "id": "viewer_uid07F90993_5026_5FD0_4194_2A4A59336611",
 "class": "ViewerArea",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
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
 "data": {
  "name": "ViewerArea43826"
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
 "id": "htmltext_07C6D994_5026_5FD7_41C2_C1FD76F3222C",
 "class": "HTMLText",
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
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
  "name": "HTMLText43829"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "id": "component_07C66995_5026_5FD1_41CC_7B1FEA59870E",
 "class": "IconButton",
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": 10,
 "minHeight": 0,
 "propagateClick": false,
 "top": "45%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "iconURL": "skin/album_left.png",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton43830"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "component_07C59995_5026_5FD1_41B3_BE1DA35CFDD4",
 "class": "IconButton",
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0,
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
  "name": "IconButton43831"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "class": "IconButton",
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "width": 60,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
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
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
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
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
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
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "class": "Button",
 "width": 52,
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, true, 0, null, null, false)",
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
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
 "fontSize": "15px",
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
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "class": "Button",
 "width": 133,
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
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
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
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
 "fontSize": "15px",
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
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "class": "Button",
 "width": 104,
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
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
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
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
 "fontSize": "15px",
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
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "class": "Button",
 "width": 67,
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "click": "this.showPopupMedia(this.window_73465F18_502E_CF1D_41D3_CDAB91BFC330, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_6CFD74F2_506A_D12D_41C5_DED592BA4B9F, '90%', '90%', true, false)",
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
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
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
 "fontSize": "15px",
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
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "class": "Button",
 "width": 107,
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
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
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
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
 "fontSize": "15px",
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
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "class": "Container",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Image_475656B5_506E_3117_41A0_63C52AAB81EA"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
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
 "class": "Container",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
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
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "width": "2.342%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 20,
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
 "class": "Container",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
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
 "class": "ThumbnailGrid",
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0.05,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "paddingLeft": 30,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
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
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
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
 "selectedItemThumbnailShadowVerticalLength": 0,
 "paddingBottom": 0,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 0,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailBorderRadius": 10,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontFamily": "Montserrat"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "class": "Container",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
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
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "width": "2.405%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "height": "74.928%",
 "verticalAlign": "middle",
 "minWidth": 50,
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
 "class": "Container",
 "children": [
  "this.Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
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
 "class": "ViewerArea",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "right": 0,
 "playbackBarBorderRadius": 0,
 "left": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "progressBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minHeight": 1,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
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
 "class": "Image",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_475656B5_506E_3117_41A0_63C52AAB81EA.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": "0%",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
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
 "class": "Container",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
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
 "class": "Container",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
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
 "class": "HTMLText",
 "width": "86.335%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "left": "0%",
 "minHeight": 60,
 "propagateClick": false,
 "top": "-2.56%",
 "height": "74.423%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.36vh;font-family:'Arimo';\">PERSPECTIVAS</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "2.311%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "bottom": 12,
 "height": "58.333%",
 "verticalAlign": "top",
 "minWidth": 20,
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
 "class": "WebFrame",
 "backgroundOpacity": 1,
 "right": "0%",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "left": "0%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.914933481306!2d-57.50898168457854!3d-25.2397899838764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzIzLjIiUyA1N8KwMzAnMjQuNSJX!5e0!3m2!1ses-419!2spy!4v1581896704972!5m2!1ses-419!2spy",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
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
 "class": "Image",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
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
 "class": "HTMLText",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "89.701%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.47vh;font-family:'Arimo';\">Residencia en</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.59vh;font-family:'Arimo';\">Rakiura Country</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">En el barrio privado m\u00e1s seguro y codiciado de Asunci\u00f3n. La zona del m\u00e1s alto nivel y de una comunidad excelente.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\">Superficie construida de 600m2.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\"><B>Planta alta:</B></SPAN><SPAN STYLE=\"font-size:1.79vh;\"> 4 dormitorios en suite con piso de madera de lapacho trabajado, el dormitorio matrimonial con vestidor y ba\u00f1o con hidromasaje, amplia terraza con parrilla y kichenette.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.23vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\"><B>Planta Baja: </B></SPAN><SPAN STYLE=\"font-size:1.79vh;\">Amplio living comedor social, comedor y estar diario integrado de 15x9 mts aprox, sala de cine, gimnasio, doble piscina con deck de madera, quincho equipado con vinero y visicooler, cocina equipada y amoblada, sauna a vapor, hermoso jard\u00edn, cochera para 4 veh\u00edculos, </SPAN><SPAN STYLE=\"font-size:1.79vh;\"><I>Incluye todos los beneficios del club Rakiura</I></SPAN><SPAN STYLE=\"font-size:1.79vh;\">.</SPAN></SPAN></DIV></div>",
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
 "class": "Button",
 "width": "46%",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.75,
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
 "rollOverBackgroundColor": [
  "#00CC33"
 ],
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
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "existsKey": function(key){  return key in window; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
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
