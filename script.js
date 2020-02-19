(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_40902BBE_4F98_F5B3_417E_215EADC2E939, this.audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2, this.audio_415957D2_4F99_1DF3_41B4_57B956E9370A, this.audio_4163BD09_4F99_7251_41A9_48527994202E, this.audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE, this.audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54, this.audio_40D48334_4F99_F6B7_41B6_51185E4DCB63]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); var self = this; this.autotriggerAtStart(this.mainPlayList, function(){ self.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D.trigger('click') }, true); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
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
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "class": "Player",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Player468"
 },
 "overflow": "visible",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_788E7A28_5C95_2626_41D1_848E3187AD0E",
 "initialPosition": {
  "hfov": 90,
  "yaw": -49.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_788E7A28_5C95_2626_41D1_848E3187AD0E",
 "id": "camera_788F8A28_5C95_2626_41CF_A962DBC7E40C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7F8BECE9_5C95_2239_41D5_338D9FF5E795",
 "initialPosition": {
  "hfov": 90,
  "yaw": 118.47,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7F8BECE9_5C95_2239_41D5_338D9FF5E795",
 "id": "camera_7F8B1CE9_5C95_2239_41C2_BDC5E3981719",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_79208016_5C95_21EA_41C8_96980A16BEFC",
 "initialPosition": {
  "hfov": 90,
  "yaw": 112.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_79208016_5C95_21EA_41C8_96980A16BEFC",
 "id": "camera_79209016_5C95_21EA_41D0_9EF695364389",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4319B4D8_5C95_2267_41C1_D5904DF69765",
 "initialPosition": {
  "hfov": 90,
  "yaw": -53.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_4319B4D8_5C95_2267_41C1_D5904DF69765",
 "id": "camera_4319C4D8_5C95_2267_41BB_8EE88685DED0",
 "class": "PanoramaCamera"
},
{
 "gyroscopeEnabled": true,
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "displayPlaybackBar": true,
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_rotation"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8"
  },
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
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Sala de Cine - Frente",
 "id": "panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
 "thumbnailUrl": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_4B06FB75_5C8D_E629_41D0_39ACE8264920",
  "this.overlay_4B06EB75_5C8D_E629_41D0_F40FAA7834DA",
  "this.overlay_44CECBC8_5C8E_E667_41C8_45A16FBDF932",
  "this.overlay_45DA1407_5C8D_61EA_41B1_2CF401771FB5",
  "this.overlay_456ED3AF_5CF3_2639_41BE_00D2618002D8",
  "this.overlay_44EF3CAC_5CF3_623E_41D2_97DC21AC8F5F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "yawSpeed": 1,
    "easing": "cubic_in_out",
    "pitchSpeed": 1
   },
   {
    "targetYaw": 18.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.71,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 43.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.67,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 13.44,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -24.81,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -32.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -25.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -80.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -27.07,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 70.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -34.61,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7A1E9110_5C95_23E6_41C5_F74547700A5B"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8",
 "initialPosition": {
  "hfov": 90,
  "yaw": -24.62,
  "class": "PanoramaCameraPosition",
  "pitch": 27.13
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8",
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38_camera",
 "class": "PanoramaCamera"
},
{
 "label": "\u00c1lbum de Fotos",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_t.png",
 "playList": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7C72C64F_5C95_2E79_41D6_586CA35DEE97",
 "initialPosition": {
  "hfov": 90,
  "yaw": -70.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7C72C64F_5C95_2E79_41D6_586CA35DEE97",
 "id": "camera_7C72D64F_5C95_2E79_41D4_78488851BE51",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -149.48,
   "backwardYaw": 2.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "distance": 1
  },
  {
   "yaw": -149.72,
   "backwardYaw": 2.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "distance": 1
  },
  {
   "yaw": -93.72,
   "backwardYaw": 88.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "distance": 1
  },
  {
   "yaw": -93.71,
   "backwardYaw": 88.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "distance": 1
  },
  {
   "yaw": -1.64,
   "backwardYaw": -21.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": -1.56,
   "backwardYaw": -21.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": 160.78,
   "backwardYaw": -5.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": 160.41,
   "backwardYaw": -5.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": -70.41,
   "backwardYaw": 144.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": -70.5,
   "backwardYaw": 144.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": 56.4,
   "backwardYaw": -92.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "distance": 1
  },
  {
   "yaw": 56.25,
   "backwardYaw": -92.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Quincho",
 "audios": [
  "this.audio_725841F7_56C7_3928_418B_5A553C889C71"
 ],
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
 "thumbnailUrl": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_t.jpg"
  }
 ],
 "vfov": 180,
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
  "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_tcap0",
  "this.overlay_776FA9DA_56DD_6918_41A6_0C121383E56A"
 ]
},
{
 "items": [
  {
   "media": "this.video_76BF82AE_56C2_FB39_41D0_DF287E74780C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7C588A3A_5C95_261A_41C1_CD6D16720EF3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7C588A3A_5C95_261A_41C1_CD6D16720EF3, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_7C588A3A_5C95_261A_41C1_CD6D16720EF3",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7E3A8C8B_5C95_22F9_41D6_A205CF4D197C",
 "initialPosition": {
  "hfov": 120,
  "yaw": -1.36,
  "class": "PanoramaCameraPosition",
  "pitch": -6.86
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7E3A8C8B_5C95_22F9_41D6_A205CF4D197C",
 "id": "camera_7E3ABC8B_5C95_22F9_41C5_CDE4DDCA22F2",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7FB6793D_5C95_2219_41C9_DAF2BB65FEE9",
 "initialPosition": {
  "hfov": 90,
  "yaw": -19.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7FB6793D_5C95_2219_41C9_DAF2BB65FEE9",
 "id": "camera_7FB7893D_5C95_2219_41BC_D956F839DCEA",
 "class": "PanoramaCamera"
},
{
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
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8"
  },
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
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6"
  }
 ],
 "hfov": 360,
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
 "thumbnailUrl": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_t.jpg",
 "hfovMin": "140%",
 "label": "Sala de Cine - Punto Medio",
 "pitch": 0,
 "partial": false,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5F22236E_4CFD_BB52_41D0_87962539D379",
  "this.overlay_585CAAAF_4CF2_75D3_418F_E4020A5C57BA",
  "this.overlay_58E12D38_4CF7_EF3D_41B8_194A4EED7DFE",
  "this.overlay_7593DF4E_4DF2_AB55_41C7_FA82D656CEBF",
  "this.overlay_72687B9E_4C0E_ABF2_41BB_A08C589A4291",
  "this.overlay_729624D3_4C0E_BD72_41C0_CD73173E435F",
  "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_tcap0",
  "this.overlay_4BDB7184_5C93_E2EE_41C6_A55CC2B4DD75",
  "this.overlay_4B4CD0DD_5C92_E21E_41D6_48F1A336E13E",
  "this.overlay_4A27221C_5C97_261E_41C2_2A76CED6B5EA",
  "this.overlay_4B892B7C_5C97_E61F_41C2_D49CE49FD165"
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_79A3FF4B_5C95_3E7A_41C1_00F068614C6C",
 "initialPosition": {
  "hfov": 90,
  "yaw": -85.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_79A3FF4B_5C95_3E7A_41C1_00F068614C6C",
 "id": "camera_79A3EF4B_5C95_3E7A_4194_8F58189443F0",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_7340C746_56DD_5968_41D3_39B2A98F9F24",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7C589A3A_5C95_261A_41C9_69810F11EB70, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7C589A3A_5C95_261A_41C9_69810F11EB70, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_7C589A3A_5C95_261A_41C9_69810F11EB70",
 "class": "PlayList"
},
{
 "duration": 500,
 "id": "effect_13185EDD_502A_7550_41C3_AE7B43D21853",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7E979814_5C95_21EF_41CD_785ABB506DC4",
 "initialPosition": {
  "hfov": 90,
  "yaw": 30.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7E979814_5C95_21EF_41CD_785ABB506DC4",
 "id": "camera_7E97A814_5C95_21EF_41A1_3B78AC5B98F3",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7E0568A1_5C95_2229_41A4_86CC7B958BE5",
 "initialPosition": {
  "hfov": 90,
  "yaw": -22.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7E0568A1_5C95_2229_41A4_86CC7B958BE5",
 "id": "camera_7E0578A1_5C95_2229_4194_CA1445CB934F",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 24.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "yawSpeed": 18.14,
    "easing": "cubic_in_out",
    "pitchSpeed": 9.53
   },
   {
    "targetYaw": -45.85,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.21,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 37.56,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.71,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -163.67,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -6.22,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -136.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.21,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -95.34,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.2,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 158.65,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -14.01,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -113.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -5.72,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7960AFB8_5C95_3E27_41D5_350D21F17D76"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7E8E6C0E_5C95_21FB_41A0_8984CA821CAC",
 "initialPosition": {
  "hfov": 90,
  "yaw": -81.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7E8E6C0E_5C95_21FB_41A0_8984CA821CAC",
 "id": "camera_7E8F9C0E_5C95_21FB_41CD_EF001649FBA2",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_78A24DE3_5C95_2229_41BE_A0696FEC6274",
 "initialPosition": {
  "hfov": 90,
  "yaw": 158.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_78A24DE3_5C95_2229_41BE_A0696FEC6274",
 "id": "camera_78A27DE3_5C95_2229_41D0_177B8367E2CB",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1000
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7EB1D834_5C95_222E_41C2_F9D3689B657C",
 "initialPosition": {
  "hfov": 120,
  "yaw": -0.92,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7EB1D834_5C95_222E_41C2_F9D3689B657C",
 "id": "camera_7EB1F834_5C95_222E_41A8_5A0F7A1046FC",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6"
  },
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
 "partial": false,
 "id": "panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
 "thumbnailUrl": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_t.jpg",
 "label": "Sala de Cine - Fondo",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4F65FE35_5C93_3E28_41D3_CCEA286FD35A",
  "this.overlay_488AF362_5C92_E62A_41CD_ED6323AB55AF",
  "this.overlay_48F889FD_5C92_E219_41D5_92A0AD1ACDEC",
  "this.overlay_48EDFE9F_5C9D_1E1A_41B7_6AFA2637F974",
  "this.overlay_4861FFAC_5C9D_FE3E_41A9_C97465DF7BC8",
  "this.overlay_4B027F32_5C9F_1E2B_41A8_DEB49B78DC2A",
  "this.overlay_49E5426B_5C9F_6639_41D5_53491B41ED02",
  "this.overlay_44040F6A_5C93_3E3A_41B2_47FDF4DB86AD",
  "this.overlay_4404EF6A_5C93_3E3A_41B4_92431BFDBA6A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 24.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "yawSpeed": 18.14,
    "easing": "cubic_in_out",
    "pitchSpeed": 9.53
   },
   {
    "targetYaw": -45.85,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.21,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 37.56,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.71,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -163.67,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -6.22,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -136.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.21,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -95.34,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.2,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 158.65,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -14.01,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -113.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -5.72,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_79004FE7_5C95_3E2A_41B2_8802618A9F6B"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7F04BD57_5C95_226A_4177_AD72C2505F4D",
 "initialPosition": {
  "hfov": 90,
  "yaw": -168.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7F04BD57_5C95_226A_4177_AD72C2505F4D",
 "id": "camera_7F04AD57_5C95_226A_41D2_3CCB46ED56E0",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7E2378C0_5C95_2267_41CC_DF1084986EB4",
 "initialPosition": {
  "hfov": 90,
  "yaw": -22.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7E2378C0_5C95_2267_41CC_DF1084986EB4",
 "id": "camera_7E20A8C0_5C95_2267_41C0_606933BBF7AA",
 "class": "PanoramaCamera"
},
{
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
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
 "thumbnailUrl": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_t.jpg",
 "hfovMin": "140%",
 "label": "Sala de Cine - Luz Tenue",
 "pitch": 0,
 "partial": false,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5F08474E_4CFE_9B55_4162_01D050A59F50",
  "this.overlay_5829C0DD_4CF2_F576_4170_28F44FE61136",
  "this.overlay_58FADE45_4CF5_AD56_41C7_88B8A9887EBB",
  "this.overlay_752BA8F4_4DF2_F535_4196_A95C1DB42D1C",
  "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 2.39,
   "backwardYaw": -149.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": 2.26,
   "backwardYaw": -149.48,
   "class": "AdjacentPanorama",
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
   "backwardYaw": 89.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "distance": 1
  },
  {
   "yaw": 109.1,
   "backwardYaw": 89.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
 "thumbnailUrl": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_t.jpg",
 "label": "Cocina",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_t.jpg"
  }
 ],
 "vfov": 180,
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
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7AC0D045_5C95_226E_41B0_4DB93405BB55",
 "initialPosition": {
  "hfov": 90,
  "yaw": 112.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_7AC0D045_5C95_226E_41B0_4DB93405BB55",
 "id": "camera_7AC0F045_5C95_226E_41A4_BE23CF3A2ED9",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1500
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7FAB1D08_5C95_23E7_41B2_8D2EEB16C46A",
 "initialPosition": {
  "hfov": 90,
  "yaw": -23.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7FAB1D08_5C95_23E7_41B2_8D2EEB16C46A",
 "id": "camera_7FAB0D08_5C95_23E7_41C1_A98886B66D4F",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 157.34,
   "backwardYaw": -95.88,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": 157.22,
   "backwardYaw": -95.88,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": 89.87,
   "backwardYaw": 109.03,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "distance": 1
  },
  {
   "yaw": 89.64,
   "backwardYaw": 109.03,
   "class": "AdjacentPanorama",
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
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
 "thumbnailUrl": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_t.jpg",
 "label": "Sala - Living",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_t.jpg"
  }
 ],
 "vfov": 180,
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
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 126.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7BEC817D_5C95_2219_41B2_58D0DA9E9DBD"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7A5160D1_5C95_2269_41D1_2DDA51B95611",
 "initialPosition": {
  "hfov": 120,
  "yaw": -2.26,
  "class": "PanoramaCameraPosition",
  "pitch": -4.74
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7A5160D1_5C95_2269_41D1_2DDA51B95611",
 "id": "camera_7AAE80D1_5C95_2269_41D4_D67A2C715E58",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -127.28,
   "backwardYaw": 94.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": -127.19,
   "backwardYaw": 94.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": -17.24,
   "backwardYaw": -155.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
   "distance": 1
  },
  {
   "yaw": -17.24,
   "backwardYaw": -155.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
   "distance": 1
  },
  {
   "yaw": 156.31,
   "backwardYaw": -67.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "distance": 1
  },
  {
   "yaw": 156.28,
   "backwardYaw": -67.58,
   "class": "AdjacentPanorama",
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
   "yaw": -161.79,
   "backwardYaw": 6.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "distance": 1
  },
  {
   "yaw": -161.77,
   "backwardYaw": 6.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
 "thumbnailUrl": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_t.jpg",
 "label": "Sala - Comedor",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_t.jpg"
  }
 ],
 "vfov": 180,
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
  "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354_tcap0",
  "this.overlay_4CA90992_5CB7_22EA_41AD_ADA049F9006B",
  "this.overlay_530E5592_5CB5_62EB_41CF_CD34D32E693D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7CAB2611_5C95_21E6_41AD_D12A3BF379ED",
 "initialPosition": {
  "hfov": 90,
  "yaw": 84.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7CAB2611_5C95_21E6_41AD_D12A3BF379ED",
 "id": "camera_7CAB3611_5C95_21E6_41B7_A5CA7D58536B",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -14.87,
   "backwardYaw": 126.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  },
  {
   "yaw": 16.16,
   "backwardYaw": 126.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  },
  {
   "yaw": -14.82,
   "backwardYaw": 126.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
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
   "yaw": -6.9,
   "backwardYaw": -151.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": -6.95,
   "backwardYaw": -151.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": 6.63,
   "backwardYaw": -161.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "yaw": 6.64,
   "backwardYaw": -161.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
 "thumbnailUrl": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_t.jpg",
 "label": "Escalera - Entrepiso",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_t.jpg"
  }
 ],
 "vfov": 180,
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
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 90,
  "yaw": -2.02,
  "class": "PanoramaCameraPosition",
  "pitch": 10.18
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -49.87,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -79.01,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -120.71,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.1,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 154.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 90.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 36.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.2,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -2.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 26.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_camera",
 "manualZoomSpeed": 2
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7D27F7C6_5C95_2E6B_41B7_C5E38F1949D0",
 "initialPosition": {
  "hfov": 90,
  "yaw": 92.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7D27F7C6_5C95_2E6B_41B7_C5E38F1949D0",
 "id": "camera_7D2707C6_5C95_2E6B_41C0_8E4657A33820",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 31.81,
   "backwardYaw": 78.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "distance": 1
  },
  {
   "yaw": 31.67,
   "backwardYaw": 78.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "distance": 1
  },
  {
   "yaw": 15.7,
   "backwardYaw": 42.62,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "distance": 1
  },
  {
   "yaw": 15.74,
   "backwardYaw": 42.62,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "distance": 1
  },
  {
   "yaw": -16.51,
   "backwardYaw": 28.54,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "distance": 1
  },
  {
   "yaw": -16.63,
   "backwardYaw": 28.54,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "distance": 1
  },
  {
   "yaw": -21.6,
   "backwardYaw": -1.64,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": -21.76,
   "backwardYaw": -1.64,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": 47.72,
   "backwardYaw": 98.57,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": 47.65,
   "backwardYaw": 98.57,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": -48.23,
   "backwardYaw": -0.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "distance": 1
  },
  {
   "yaw": -48.23,
   "backwardYaw": -0.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_76772C3C_56C3_6F18_41D4_7C4FB259877A"
 ],
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38",
 "thumbnailUrl": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_t.jpg",
 "hfovMin": "120%",
 "label": "Deck - Piscina",
 "pitch": 0,
 "partial": false,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_t.jpg"
  }
 ],
 "vfov": 180,
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
  "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_tcap0",
  "this.overlay_481258C5_563D_7768_4197_0EC12658EC25"
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77F828FC_503E_5115_41CF_04F89C2CC876",
 "initialPosition": {
  "hfov": 90,
  "yaw": 9.55,
  "class": "PanoramaCameraPosition",
  "pitch": -33.91
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_77F828FC_503E_5115_41CF_04F89C2CC876",
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_4DC63883_564D_77EF_41D3_729FE9100318",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7C58CA3A_5C95_261A_41BF_67D46D6E92C1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7C58CA3A_5C95_261A_41BF_67D46D6E92C1, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_7C58CA3A_5C95_261A_41BF_67D46D6E92C1",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "initialPosition": {
  "hfov": 90,
  "yaw": -20.1,
  "class": "PanoramaCameraPosition",
  "pitch": -3.01
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7D576B43_5C95_2669_41D5_7096C31610A6",
 "initialPosition": {
  "hfov": 90,
  "yaw": -101.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7D576B43_5C95_2669_41D5_7096C31610A6",
 "id": "camera_7D549B43_5C95_2669_41D2_0928DC4A931E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7FEAFCCA_5C95_227B_41D4_813F64B7B581",
 "initialPosition": {
  "hfov": 90,
  "yaw": 116.63,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7FEAFCCA_5C95_227B_41D4_813F64B7B581",
 "id": "camera_7FEA1CCA_5C95_227B_419F_365EA39C8918",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 62.45,
  "class": "PanoramaCameraPosition",
  "pitch": 4.59
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 62.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.25,
    "yawSpeed": 4.5,
    "easing": "cubic_in_out",
    "pitchSpeed": 2.74
   },
   {
    "targetYaw": 96.85,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -20.03,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 44.09,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -22.8,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 26.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.17,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -112.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -67.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -37.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -152.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -45.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -18.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.98,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7E2C3C9B_5C95_2219_41D0_99B279DDA074"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7EAFCC1E_5C95_221B_41AA_C1DD497ADBFE",
 "initialPosition": {
  "hfov": 90,
  "yaw": -81.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7EAFCC1E_5C95_221B_41AA_C1DD497ADBFE",
 "id": "camera_7EAF1C1E_5C95_221B_41C1_17F83D5C1BAC",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 120.23,
   "backwardYaw": -51.34,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "distance": 1
  },
  {
   "yaw": 120.77,
   "backwardYaw": -51.34,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "distance": 1
  },
  {
   "yaw": 78.74,
   "backwardYaw": 31.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": 79.08,
   "backwardYaw": 31.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
 "thumbnailUrl": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_t.jpg",
 "label": "Planta Alta - Quincho con Parrilla",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_t.jpg"
  }
 ],
 "vfov": 180,
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
 ]
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_75FAD342_5C95_266B_41C8_F75EB1158A56",
 "initialPosition": {
  "hfov": 90,
  "yaw": 123.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_75FAD342_5C95_266B_41C8_F75EB1158A56",
 "id": "camera_75FAE342_5C95_266B_41D0_FDD4E3A9167E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7B5E41CB_5C95_2279_41BA_5735FBA411EE",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7B5E41CB_5C95_2279_41BA_5735FBA411EE",
 "id": "camera_7B5E51CB_5C95_2279_41CE_9C0A37C4B341",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "yaw": -155.53,
   "backwardYaw": -17.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "yaw": -155.51,
   "backwardYaw": -17.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Comedor - Vista Nocturna",
 "id": "panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
 "thumbnailUrl": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_t.jpg",
 "class": "Panorama",
 "pitch": 0,
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
  "this.overlay_4FD375BB_5C97_2219_41CE_5B46EE142C76"
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_78856DC4_5C95_226F_41D0_8C588EE16990",
 "initialPosition": {
  "hfov": 90,
  "yaw": -91.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_78856DC4_5C95_226F_41D0_8C588EE16990",
 "id": "camera_78829DC4_5C95_226F_41D4_B570A5753F1E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7A8120A2_5C95_222B_41CA_3EF8497CCDEF",
 "initialPosition": {
  "hfov": 90,
  "yaw": -173.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7A8120A2_5C95_222B_41CA_3EF8497CCDEF",
 "id": "camera_7A8140A2_5C95_222B_41BA_F366C1EEFF3B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7870010A_503E_30FD_41BC_311867DA2A0C",
 "initialPosition": {
  "hfov": 90,
  "yaw": -3.52,
  "class": "PanoramaCameraPosition",
  "pitch": -18.59
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7870010A_503E_30FD_41BC_311867DA2A0C",
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7F493D18_5C95_23E7_4168_DEBDC72C085E",
 "initialPosition": {
  "hfov": 90,
  "yaw": -23.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7F493D18_5C95_23E7_4168_DEBDC72C085E",
 "id": "camera_7F492D18_5C95_23E7_41D7_100ED8A65209",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -149.71,
   "backwardYaw": 11.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "distance": 1
  },
  {
   "yaw": -149.47,
   "backwardYaw": 11.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
 "thumbnailUrl": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_t.jpg",
 "label": "Ba\u00f1o - Habitaci\u00f3n Master",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_649BC5B9_4C16_9F3F_41CE_03F1CF8B85B0",
  "this.overlay_60A2EB4F_4C35_EB53_41BB_7B4C45E778F5",
  "this.overlay_0DB44A7A_4C0E_953D_41C6_712CBBF32DAF",
  "this.overlay_0DBC62EA_4C0E_F55D_41CB_80F63DC048E7",
  "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7823EE7F_5C95_3E19_41CB_3544135131CF",
 "initialPosition": {
  "hfov": 90,
  "yaw": -35.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7823EE7F_5C95_3E19_41CB_3544135131CF",
 "id": "camera_78233E7F_5C95_3E19_41B9_717810945643",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1000
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "initialPosition": {
  "hfov": 90,
  "yaw": -38.25,
  "class": "PanoramaCameraPosition",
  "pitch": -22.96
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7D13BB82_5C95_26EA_41CC_C5BAA82414CC",
 "initialPosition": {
  "hfov": 90,
  "yaw": -137.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7D13BB82_5C95_26EA_41CC_C5BAA82414CC",
 "id": "camera_7D13AB82_5C95_26EA_41D6_69E254258E30",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F"
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "TOMA 32 HABITACI\u00d3N FRONTAL IZQUIERDA CON BALCON",
 "id": "panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
 "thumbnailUrl": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_46D0B9A9_5CF3_2239_41D2_F30BF1260DF9",
  "this.overlay_46D089A9_5CF3_2239_41D6_82D73B977FE5",
  "this.overlay_47E4FB00_5CF3_27E7_41D5_73431470F9AA",
  "this.overlay_470540FE_5CFD_621B_41C9_CAAC9464CEEB"
 ]
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1500
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_camera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7C5EE630_5C95_2E27_41D6_C9EEF656E1AA",
 "initialPosition": {
  "hfov": 90,
  "yaw": 84.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7C5EE630_5C95_2E27_41D6_C9EEF656E1AA",
 "id": "camera_7C5EF630_5C95_2E27_41C1_248397462C45",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_771E9E9F_503A_3113_41CE_5824E21E1360",
 "initialPosition": {
  "hfov": 120,
  "yaw": -2.26,
  "class": "PanoramaCameraPosition",
  "pitch": -4.74
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_771E9E9F_503A_3113_41CE_5824E21E1360",
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera",
 "class": "PanoramaCamera"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_7C95FA0B_5C95_21F9_41A1_48C8A317A992, [this.htmltext_7C95BA0B_5C95_21F9_418A_94FEB3C18F8C,this.component_7C940A0B_5C95_21F9_41B9_83066F122FF5,this.component_7C941A0B_5C95_21F9_419E_CD614435EB27], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_7C952A0B_5C95_21F9_41D3_70183B12DA52"
 ],
 "id": "playList_7C957A0B_5C95_21F9_41CF_BFBF1F2656F9"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_4163BD09_4F99_7251_41A9_48527994202E.mp3",
  "oggUrl": "media/audio_4163BD09_4F99_7251_41A9_48527994202E.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_4163BD09_4F99_7251_41A9_48527994202E",
 "data": {
  "label": "Summer Trip-Hop (2016)"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4365949A_5C95_221A_41C1_4794800F054F",
 "initialPosition": {
  "hfov": 90,
  "yaw": 165.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_4365949A_5C95_221A_41C1_4794800F054F",
 "id": "camera_4365A49A_5C95_221A_41C4_0E6CFB3A20B6",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_78C75D85_5C95_22E9_41CD_AF1783E19CD0",
 "initialPosition": {
  "hfov": 90,
  "yaw": -177.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_78C75D85_5C95_22E9_41CD_AF1783E19CD0",
 "id": "camera_78C74D85_5C95_22E9_41CB_3865A58D15C2",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7940FF89_5C95_3EF9_41C8_516F0D44037F",
 "initialPosition": {
  "hfov": 90,
  "yaw": -85.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7940FF89_5C95_3EF9_41C8_516F0D44037F",
 "id": "camera_7940EF89_5C95_3EF9_41D3_0929BC25F1DE",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -45.85,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.21,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 37.56,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.71,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -163.67,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -6.22,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -136.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.21,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -95.34,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.2,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 158.65,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -14.01,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -113.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -5.72,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_camera"
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "class": "DirectionalPanoramaAudio",
 "pitch": 0,
 "id": "audio_752C77BB_56FE_D91F_41CF_669E0C980F8D",
 "data": {
  "label": "water sounds"
 },
 "maximumAngle": 359.5
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7ED06BC0_5C95_2667_41CA_700B0909F652",
 "initialPosition": {
  "hfov": 90,
  "yaw": -151.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7ED06BC0_5C95_2667_41CA_700B0909F652",
 "id": "camera_7ED1BBC0_5C95_2667_41D6_4F8C926CA42C",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 47.48,
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "class": "DirectionalPanoramaAudio",
 "pitch": -4.52,
 "id": "audio_725841F7_56C7_3928_418B_5A553C889C71",
 "data": {
  "label": "water sounds"
 },
 "maximumAngle": 166.56
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7980CF1C_5C95_3E1E_41D6_4EF30EB6A928",
 "initialPosition": {
  "hfov": 90,
  "yaw": 87.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7980CF1C_5C95_3E1E_41D6_4EF30EB6A928",
 "id": "camera_7980FF1C_5C95_3E1E_41D5_DDFC90D0A343",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 62.45,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 62.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.25,
    "yawSpeed": 2.28,
    "easing": "cubic_in_out",
    "pitchSpeed": 1.64
   },
   {
    "targetYaw": 96.85,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -20.03,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 44.09,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -22.8,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 26.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.17,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -112.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -67.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -37.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -152.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -45.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -18.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.98,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7BC1014E_5C95_227B_41C4_D369AE9ADCD2"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7D745B63_5C95_262A_41D1_8A5892C4975F",
 "initialPosition": {
  "hfov": 90,
  "yaw": -137.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7D745B63_5C95_262A_41D1_8A5892C4975F",
 "id": "camera_7D744B63_5C95_262A_41D6_B57477FAA78B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 90,
  "yaw": 177.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -2.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.18,
    "yawSpeed": 120.12,
    "easing": "cubic_in_out",
    "pitchSpeed": 60.28
   },
   {
    "targetYaw": -49.87,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -79.01,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -120.71,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.1,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 154.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 90.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 36.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.2,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -2.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 26.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7F72896C_5C95_223F_41CA_17B36B3E12CB",
 "manualZoomSpeed": 2
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_743A8304_5C95_27EE_41C6_FABAD53F8BC8",
 "initialPosition": {
  "hfov": 90,
  "yaw": -132.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_743A8304_5C95_27EE_41C6_FABAD53F8BC8",
 "id": "camera_743A9304_5C95_27EE_41AA_8A67E3205E02",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_430574E8_5C95_2227_41C3_719990113EB4",
 "initialPosition": {
  "hfov": 90,
  "yaw": -53.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_430574E8_5C95_2227_41C3_719990113EB4",
 "id": "camera_430284E8_5C95_2227_41D3_A8ED5AE14605",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7C1D867E_5C95_2E1B_41D0_F58E874B3716",
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": -6.43
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7C1D867E_5C95_2E1B_41D0_F58E874B3716",
 "id": "camera_7C1DA67E_5C95_2E1B_41C8_3616C2457930",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7DED170B_5C95_2FFA_41B2_53126CF76809",
 "initialPosition": {
  "hfov": 90,
  "yaw": 10.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7DED170B_5C95_2FFA_41B2_53126CF76809",
 "id": "camera_7DED270B_5C95_2FFA_41C6_D9AA76218F3B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_79C35EAE_5C95_3E3B_41D6_B8D8FD239143",
 "initialPosition": {
  "hfov": 90,
  "yaw": -35.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_79C35EAE_5C95_3E3B_41D6_B8D8FD239143",
 "id": "camera_79C37EAE_5C95_3E3B_41D5_8ACDB972326A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7CB595F2_5C95_222A_41D6_A554FB4EF14D",
 "initialPosition": {
  "hfov": 90,
  "yaw": -148.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7CB595F2_5C95_222A_41D6_A554FB4EF14D",
 "id": "camera_7CB5A5F2_5C95_222A_41B2_E9CB5EB5CA05",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7CD3E555_5C95_2269_41CB_E58DD9985C4D",
 "initialPosition": {
  "hfov": 90,
  "yaw": 28.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7CD3E555_5C95_2269_41CB_E58DD9985C4D",
 "id": "camera_7CD3F555_5C95_2269_41BD_4B32D1A9B00A",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -51.34,
   "backwardYaw": 120.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "distance": 1
  },
  {
   "yaw": -51.32,
   "backwardYaw": 120.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "distance": 1
  },
  {
   "yaw": 28.54,
   "backwardYaw": -16.51,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": 28.68,
   "backwardYaw": -16.51,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4"
  },
  {
   "yaw": -128.51,
   "backwardYaw": -113.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
 "thumbnailUrl": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_t.jpg",
 "label": "Balc\u00f3n - Habitaci\u00f3n Master",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_t.jpg"
  }
 ],
 "vfov": 180,
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
 ]
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window17067"
 },
 "bodyPaddingRight": 0,
 "id": "window_58FCE818_5746_CE27_41D5_6E5EC77B8BFA",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "paddingLeft": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBackgroundOpacity": 1,
 "width": 400,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "footerBorderSize": 0,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "modal": true,
 "height": 600,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "title": "",
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "titleFontWeight": "normal",
 "closeButtonRollOverIconLineWidth": 2,
 "backgroundOpacity": 1,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadow": true,
 "footerHeight": 5,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [],
 "closeButtonPressedIconLineWidth": 3,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "layout": "vertical",
 "headerPaddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "headerBorderSize": 0,
 "propagateClick": false,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.container_7C952A0B_5C95_21F9_41C1_77911EF00EE6"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "shadowHorizontalLength": 3,
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "bodyBorderSize": 0,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 1,
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "class": "Window",
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 20,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "titleTextDecoration": "none",
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "closeButtonRollOverBackgroundColor": [],
 "footerBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 0,
 "headerBackgroundOpacity": 0,
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBackgroundOpacity": 1,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  1
 ],
 "closeButtonPressedBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7E66E891_5C95_22E9_41D3_53E2FEB8F388",
 "initialPosition": {
  "hfov": 90,
  "yaw": 52.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7E66E891_5C95_22E9_41D3_53E2FEB8F388",
 "id": "camera_7E66F891_5C95_22E9_41B2_0EB98CA9B94F",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_78627E12_5C95_21EB_41D4_46617ED85D2F",
 "initialPosition": {
  "hfov": 90,
  "yaw": 174.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_78627E12_5C95_21EB_41D4_46617ED85D2F",
 "id": "camera_78638E12_5C95_21EB_41C9_FFD4EDE0C8C3",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7DB9DB34_5C95_262E_41CC_4DF0FA38EE04",
 "initialPosition": {
  "hfov": 90,
  "yaw": -101.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7DB9DB34_5C95_262E_41CC_4DF0FA38EE04",
 "id": "camera_7DB9EB34_5C95_262E_41D7_1508EAFFE6CE",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7703348F_503A_71F2_41B8_C8F2687D9078",
 "initialPosition": {
  "hfov": 90,
  "yaw": -5.02,
  "class": "PanoramaCameraPosition",
  "pitch": -0.25
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7703348F_503A_71F2_41B8_C8F2687D9078",
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_784CFA66_5C95_262B_41BE_7EC9B533DEE4",
 "initialPosition": {
  "hfov": 90,
  "yaw": 131.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_784CFA66_5C95_262B_41BE_7EC9B533DEE4",
 "id": "camera_784C1A66_5C95_262B_41CD_38E11AA11E91",
 "class": "PanoramaCamera"
},
{
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
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  },
  {
   "yaw": 94.24,
   "backwardYaw": -127.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "yaw": 94.52,
   "backwardYaw": -127.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "yaw": -95.88,
   "backwardYaw": 157.34,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "distance": 1
  },
  {
   "yaw": -95.62,
   "backwardYaw": 157.34,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "distance": 1
  },
  {
   "yaw": -151.79,
   "backwardYaw": -6.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "distance": 1
  },
  {
   "yaw": -151.57,
   "backwardYaw": -6.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "distance": 1
  },
  {
   "yaw": -5.58,
   "backwardYaw": 160.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": -5.66,
   "backwardYaw": 160.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": -179.95,
   "backwardYaw": -2.15,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "distance": 1
  },
  {
   "yaw": -179.95,
   "backwardYaw": -2.15,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
 "thumbnailUrl": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_t.jpg",
 "label": "Sala - Centro",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_t.jpg"
  }
 ],
 "vfov": 180,
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
  "this.overlay_4BDBC122_56C5_D929_41A6_F195981DDB88"
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7E911BEF_5C95_2639_41C1_C14EEE851898",
 "initialPosition": {
  "hfov": 90,
  "yaw": 178.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7E911BEF_5C95_2639_41C1_C14EEE851898",
 "id": "camera_7E910BEF_5C95_2639_41C1_19DE72C7196E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_78EE4A08_5C95_21E7_41A9_AA9FD9D91058",
 "initialPosition": {
  "hfov": 90,
  "yaw": -49.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_78EE4A08_5C95_21E7_41A9_AA9FD9D91058",
 "id": "camera_78EE5A08_5C95_21E7_41C9_B04E32C6987A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7BBF11AC_5C95_223E_41D5_D28454CC1059",
 "initialPosition": {
  "hfov": 90,
  "yaw": 118.47,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7BBF11AC_5C95_223E_41D5_D28454CC1059",
 "id": "camera_7BBF21AC_5C95_223E_41D3_5E9B0BE5EB87",
 "class": "PanoramaCamera"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_7CE739FB_5C95_2219_41A5_AA1A9AC5A857, [this.htmltext_7CE629FB_5C95_2219_4127_4F37BB047D88,this.component_7CE829FB_5C95_2219_41CD_4AE0C961C6FB,this.component_7CE839FB_5C95_2219_417D_5B4BDAB43BDE], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_7CE729FB_5C95_2219_41AB_C82C816971D1"
 ],
 "id": "playList_7CE269FB_5C95_2219_41D4_921A38FB78DC"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7FDFD8DF_5C95_2219_41D0_8D8BB35AA606",
 "initialPosition": {
  "hfov": 90,
  "yaw": 173.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7FDFD8DF_5C95_2219_41D0_8D8BB35AA606",
 "id": "camera_7FDFE8DF_5C95_2219_41D6_B7C3BCBEFC45",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_78AC6A47_5C95_266A_41CC_891D428F5985",
 "initialPosition": {
  "hfov": 90,
  "yaw": 131.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_78AC6A47_5C95_266A_41CC_891D428F5985",
 "id": "camera_78AC7A47_5C95_266A_41C9_942DF2E24CFF",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_40902BBE_4F98_F5B3_417E_215EADC2E939.mp3",
  "oggUrl": "media/audio_40902BBE_4F98_F5B3_417E_215EADC2E939.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_40902BBE_4F98_F5B3_417E_215EADC2E939",
 "data": {
  "label": "Spectrum (Full)"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7C68765F_5C95_2E19_41A3_D54EECBE9411",
 "initialPosition": {
  "hfov": 90,
  "yaw": -70.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7C68765F_5C95_2E19_41A3_D54EECBE9411",
 "id": "camera_7C69965F_5C95_2E19_4171_9FCFA06ED8E5",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80"
  },
  {
   "yaw": -150.21,
   "backwardYaw": 102.02,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
   "distance": 1
  },
  {
   "yaw": 53.35,
   "backwardYaw": 146.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "distance": 1
  },
  {
   "yaw": -87.45,
   "backwardYaw": -40.92,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "distance": 1
  },
  {
   "yaw": -87.31,
   "backwardYaw": -40.92,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "distance": 1
  },
  {
   "yaw": 126.55,
   "backwardYaw": -14.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "distance": 1
  },
  {
   "yaw": 126.23,
   "backwardYaw": -14.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
 "thumbnailUrl": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_t.jpg",
 "label": "Planta Alta - Estar Diario",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_6A014951_4C73_974F_41D3_26D53DEC980E",
  "this.overlay_64272CF1_4C72_6D4F_41CD_2DAE74C3F5A5",
  "this.overlay_64C8A2FD_4C0F_9537_41C5_B4AF39D9D9A8",
  "this.overlay_63C06466_4C0F_9D52_41C9_6732EF408B14",
  "this.overlay_639391F7_4C0E_B732_41CC_40443DBB4B79",
  "this.overlay_7E5D4DA6_4C12_6FD2_41D0_4F6C9247ADD1",
  "this.overlay_7243A042_4C0F_B552_4173_029AA7306C65",
  "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_tcap0",
  "this.overlay_451124A4_5CF5_222F_41D5_399BB656DFA0",
  "this.overlay_47D2F307_5CF7_27EA_41AD_74CE8DEE3970"
 ]
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2.mp3",
  "oggUrl": "media/audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2",
 "data": {
  "label": "Stay With Me"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 88.31,
   "backwardYaw": -93.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": 88.14,
   "backwardYaw": -93.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": -20.74,
   "backwardYaw": -169.64,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": -20.84,
   "backwardYaw": -169.64,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": 42.62,
   "backwardYaw": 15.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": 42.63,
   "backwardYaw": 15.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  }
 ],
 "hfov": 360,
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
 "thumbnailUrl": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_t.jpg",
 "hfovMin": "120%",
 "label": "Pasillo Acceso a Parrilla",
 "pitch": 0,
 "partial": false,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_55BD891B_4C12_F4F2_41BF_BD7A099FA4FB",
  "this.overlay_569D5C53_4C13_ED72_41C5_56F2E1168FED",
  "this.overlay_55344675_4C12_7D37_41CA_0C7A84DACAAA",
  "this.overlay_79858F87_4C0D_ABD3_41C2_6BD4B90B4286",
  "this.overlay_7A5E25AC_4C0D_9FD5_41A7_29C3FBE038B8",
  "this.overlay_7ABCF3A7_4DF3_FBD3_41D0_D18E2BE7D6F6",
  "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_tcap0"
 ]
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
   "media": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_camera"
  },
  {
   "media": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera"
  },
  {
   "media": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera"
  },
  {
   "media": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_camera"
  },
  {
   "media": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera"
  },
  {
   "media": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_camera"
  },
  {
   "media": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera"
  },
  {
   "media": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera"
  },
  {
   "media": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera"
  },
  {
   "media": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera"
  },
  {
   "media": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera"
  },
  {
   "media": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_camera"
  },
  {
   "media": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera"
  },
  {
   "media": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera"
  },
  {
   "media": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera"
  },
  {
   "media": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera"
  },
  {
   "media": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_camera"
  },
  {
   "media": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_camera"
  },
  {
   "media": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera"
  },
  {
   "media": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera"
  },
  {
   "media": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera"
  },
  {
   "media": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera"
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1333
},
{
 "viewerArea": "this.MainViewer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7B7F61EA_5C95_223B_41D2_BE4C02A6CAC4",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7B7F61EA_5C95_223B_41D2_BE4C02A6CAC4",
 "id": "camera_7B7C81EA_5C95_223B_41CB_BC0CA343180E",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -67.58,
   "backwardYaw": 156.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  },
  {
   "yaw": -67.63,
   "backwardYaw": 156.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
 "thumbnailUrl": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_t.jpg",
 "label": "Escritorio",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5AB33241_4C16_F54F_419A_1A82626E06AC",
  "this.overlay_779BAA9C_4DF2_75F6_41D3_3255A4E1C04A",
  "this.overlay_724AC826_4C0D_94D2_41C0_AB29E3F1E825",
  "this.overlay_724D3C57_4C0D_ED73_41CD_8425355074D8",
  "this.overlay_7277C163_4C0D_F752_41C2_7921673C330A",
  "this.overlay_727CA71C_4C0D_FCF6_41C8_60EF23AE255E",
  "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7E0AFC7C_5C95_221E_41D1_DE17D88F29E8",
 "initialPosition": {
  "hfov": 120,
  "yaw": -1.36,
  "class": "PanoramaCameraPosition",
  "pitch": -6.86
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7E0AFC7C_5C95_221E_41D1_DE17D88F29E8",
 "id": "camera_7E0A1C7C_5C95_221E_41C3_4A36B3E7C39D",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_78024E51_5C95_3E66_41D6_4C7602C491B1",
 "initialPosition": {
  "hfov": 90,
  "yaw": 174.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_78024E51_5C95_3E66_41D6_4C7602C491B1",
 "id": "camera_78027E51_5C95_3E66_41BB_F6687603562B",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -2.15,
   "backwardYaw": -179.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  },
  {
   "yaw": -2.25,
   "backwardYaw": -179.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Calle - Entrada",
 "id": "panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
 "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1_t.jpg",
 "pitch": 0,
 "frameDisplayTime": 10000,
 "hfovMax": 120,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0_t.jpg"
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
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
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 3000,
 "overlays": [
  "this.overlay_4722F8F2_5746_CFEB_41B6_CF6FB682FC5D",
  "this.overlay_472958F3_5746_CFE9_4190_A06C79E7A940",
  "this.overlay_472968F3_5746_CFE9_41C0_E4651E9C12EB",
  "this.overlay_472928F3_5746_CFE9_41D2_3453D059BC7B",
  "this.overlay_472938F3_5746_CFE9_41D3_199BB64C45DA"
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_74DCE238_5C95_2627_41D1_EDE0C4BEC9A3",
 "initialPosition": {
  "hfov": 90,
  "yaw": -90.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_74DCE238_5C95_2627_41D1_EDE0C4BEC9A3",
 "id": "camera_74DCF238_5C95_2627_41C7_AAAAD45ADB84",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54.mp3",
  "oggUrl": "media/audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54",
 "data": {
  "label": "Summer Uplifting Energetic Fun Upbeat Funky Pop (Full)"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7F24FD76_5C95_222A_41D0_BC77B6776919",
 "initialPosition": {
  "hfov": 90,
  "yaw": -177.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7F24FD76_5C95_222A_41D0_BC77B6776919",
 "id": "camera_7F24ED76_5C95_222A_41D1_B0BF74FD9154",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_415957D2_4F99_1DF3_41B4_57B956E9370A.mp3",
  "oggUrl": "media/audio_415957D2_4F99_1DF3_41B4_57B956E9370A.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_415957D2_4F99_1DF3_41B4_57B956E9370A",
 "data": {
  "label": "5158598_summer-night-piano-dreaming_by_pablikmm"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7ABE70C2_5C95_226A_41B8_B19D6DFE2DBA",
 "initialPosition": {
  "hfov": 120,
  "yaw": -2.26,
  "class": "PanoramaCameraPosition",
  "pitch": -4.74
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7ABE70C2_5C95_226A_41B8_B19D6DFE2DBA",
 "id": "camera_7ABF80C2_5C95_226A_4190_03C30801C473",
 "class": "PanoramaCamera"
},
{
 "label": "cascada 5",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_4DC63883_564D_77EF_41D3_729FE9100318_t.jpg",
 "width": 540,
 "loop": false,
 "id": "video_4DC63883_564D_77EF_41D3_729FE9100318",
 "class": "Video",
 "height": 800,
 "video": {
  "width": 540,
  "class": "VideoResource",
  "height": 800,
  "mp4Url": "media/video_4DC63883_564D_77EF_41D3_729FE9100318.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_741A22F4_5C95_262F_41BC_2E4F741E514B",
 "initialPosition": {
  "hfov": 90,
  "yaw": -132.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_741A22F4_5C95_262F_41BC_2E4F741E514B",
 "id": "camera_741A42F4_5C95_262F_41D5_ECD6615A4324",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -77.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_75889371_5C95_2629_41D6_F0D01EF32302"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C",
 "initialPosition": {
  "hfov": 90,
  "yaw": 4.27,
  "class": "PanoramaCameraPosition",
  "pitch": 8.04
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C",
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "yawSpeed": 1,
    "easing": "cubic_in_out",
    "pitchSpeed": 1
   },
   {
    "targetYaw": 18.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.71,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 43.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.67,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 13.44,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -24.81,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -32.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -25.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -80.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -27.07,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 70.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -34.61,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7A617100_5C95_23E7_41A9_914BE3EA7118"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7E4C7C3D_5C95_2219_41BB_4602116EDE52",
 "initialPosition": {
  "hfov": 90,
  "yaw": 179.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7E4C7C3D_5C95_2219_41BB_4602116EDE52",
 "id": "camera_7E4D9C3D_5C95_2219_41D1_D1BCDBC859E7",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B",
 "initialPosition": {
  "hfov": 90,
  "yaw": 92.45,
  "class": "PanoramaCameraPosition",
  "pitch": -1.76
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B",
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "initialPosition": {
  "hfov": 120,
  "yaw": -1.36,
  "class": "PanoramaCameraPosition",
  "pitch": -6.86
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 146.58,
   "backwardYaw": 53.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  },
  {
   "yaw": 146.8,
   "backwardYaw": 53.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
 "thumbnailUrl": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_t.jpg",
 "label": "Planta Alta - Habitaci\u00f3n",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_6A5E0209_4C0E_94DF_417D_46B9DFD108C3",
  "this.overlay_6261EA3E_4C3F_B535_41D0_801F1A3A3344",
  "this.overlay_7243A9E8_4C0E_775E_41A5_59C64522A4DF",
  "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 63.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 62.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.25,
    "yawSpeed": 1.88,
    "easing": "cubic_in_out",
    "pitchSpeed": 1.44
   },
   {
    "targetYaw": 96.85,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -20.03,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 44.09,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -22.8,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 26.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.17,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -112.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -67.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -37.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -152.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -45.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -18.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.98,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7FCAFCAB_5C95_223A_41C9_2C5246D55EA1"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2667
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7DC6FAD6_5C95_266B_41D3_113B70F31891",
 "initialPosition": {
  "hfov": 90,
  "yaw": 163.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7DC6FAD6_5C95_266B_41D3_113B70F31891",
 "id": "camera_7DC6EAD6_5C95_266B_41D3_1950773E7C24",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7DE18AF5_5C95_2629_41D5_DC39C28EEC92",
 "initialPosition": {
  "hfov": 90,
  "yaw": 163.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7DE18AF5_5C95_2629_41D5_DC39C28EEC92",
 "id": "camera_7DE1AAF5_5C95_2629_41C1_96F6B48E55BC",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7CCE0584_5C95_22EF_41AA_6B8664D30B46",
 "initialPosition": {
  "hfov": 90,
  "yaw": 18.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7CCE0584_5C95_22EF_41AA_6B8664D30B46",
 "id": "camera_7CCE1584_5C95_22EF_41CE_3B2B76074D10",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7CFFB5A3_5C95_2229_41D5_7D6DFC4519E8",
 "initialPosition": {
  "hfov": 90,
  "yaw": 128.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7CFFB5A3_5C95_2229_41D5_7D6DFC4519E8",
 "id": "camera_7CFFC5A3_5C95_2229_41C6_9B80FEEBE6B9",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_78E52DA5_5C95_222E_41C8_9DA765D6AEBD",
 "initialPosition": {
  "hfov": 90,
  "yaw": -91.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_78E52DA5_5C95_222E_41C8_9DA765D6AEBD",
 "id": "camera_78E55DA5_5C95_222E_41D2_476CDC28DB57",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "initialPosition": {
  "hfov": 90,
  "yaw": -87.68,
  "class": "PanoramaCameraPosition",
  "pitch": -3.27
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera",
 "class": "PanoramaCamera"
},
{
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
   "backwardYaw": 56.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": -92.51,
   "backwardYaw": 56.4,
   "class": "AdjacentPanorama",
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
   "backwardYaw": 130.71,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": -56.45,
   "backwardYaw": 130.71,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "distance": 1
  },
  {
   "yaw": -0.69,
   "backwardYaw": -48.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": -0.52,
   "backwardYaw": -48.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_752C77BB_56FE_D91F_41CF_669E0C980F8D"
 ],
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
 "thumbnailUrl": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_t.jpg",
 "hfovMin": "120%",
 "label": "Quincho - Piscinas",
 "pitch": 0,
 "partial": false,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_t.jpg"
  }
 ],
 "vfov": 180,
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
  "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_tcap0",
  "this.overlay_779DF13E_56C3_3919_41A5_CE0412598D4D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7C33769D_5C95_2E19_41D4_B2356B5CF8C4",
 "initialPosition": {
  "hfov": 120,
  "yaw": -0.92,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7C33769D_5C95_2E19_41D4_B2356B5CF8C4",
 "id": "camera_7C30869D_5C95_2E19_41A8_5AB73814E5D4",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7F9B491E_5C95_221B_41BE_BA7B68DF2DE0",
 "initialPosition": {
  "hfov": 90,
  "yaw": -19.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7F9B491E_5C95_221B_41BE_BA7B68DF2DE0",
 "id": "camera_7F9B691E_5C95_221B_41BA_69D86DEA79CE",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 18.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.71,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 43.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.67,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 13.44,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -24.81,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -32.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -25.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -80.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -27.07,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 70.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -34.61,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_camera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -113.86,
   "backwardYaw": -128.51,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "distance": 1
  },
  {
   "yaw": -113.66,
   "backwardYaw": -128.51,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "distance": 1
  },
  {
   "yaw": -40.92,
   "backwardYaw": -87.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  },
  {
   "yaw": -40.92,
   "backwardYaw": -87.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "distance": 1
  },
  {
   "yaw": 11.3,
   "backwardYaw": -149.71,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "distance": 1
  },
  {
   "yaw": 11.68,
   "backwardYaw": -149.71,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
 "thumbnailUrl": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_t.jpg",
 "label": "Planta Alta - Habitaci\u00f3n Master",
 "pitch": 0,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_t.jpg"
  }
 ],
 "vfov": 180,
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
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "yawSpeed": 1,
    "easing": "cubic_in_out",
    "pitchSpeed": 1
   },
   {
    "targetYaw": 18.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.71,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 43.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.67,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 13.44,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -24.81,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -32.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -25.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -80.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -27.07,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 70.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -34.61,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7A5EF0E1_5C95_2226_41C1_39958110478A"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7FFD68FF_5C95_221A_41CB_54943846DE13",
 "initialPosition": {
  "hfov": 90,
  "yaw": 173.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7FFD68FF_5C95_221A_41CB_54943846DE13",
 "id": "camera_7FFD78FF_5C95_221A_41C8_2D469FB01F8D",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1372
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77007457_503E_7113_41B9_B797530AF0B3",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_77007457_503E_7113_41B9_B797530AF0B3",
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_75BB6381_5C95_26E6_41AE_841B7D0B2A14",
 "initialPosition": {
  "hfov": 90,
  "yaw": -33.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_75BB6381_5C95_26E6_41AE_841B7D0B2A14",
 "id": "camera_75BB7381_5C95_26E6_4192_3FD95A4FE7FE",
 "class": "PanoramaCamera"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_7C952A0B_5C95_21F9_41C1_77911EF00EE6, [this.htmltext_7C951A0B_5C95_21F9_41D4_2C52689FBACE,this.component_7C92EA0B_5C95_21F9_41D5_1925D6096A33,this.component_7C92FA0B_5C95_21F9_41D3_159B5982CBA9], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_7C956A0B_5C95_21F9_41C5_2B136D5DC4C2"
 ],
 "id": "playList_7C92DA0B_5C95_21F9_41B6_9ABDAF6EFD33"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7C2EAAB7_5C95_262A_41C2_4718DFF5E645",
 "initialPosition": {
  "hfov": 90,
  "yaw": -59.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7C2EAAB7_5C95_262A_41C2_4718DFF5E645",
 "id": "camera_7C2ECAB7_5C95_262A_41CB_E36113258127",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1333
},
{
 "adjacentPanoramas": [
  {
   "yaw": 144.72,
   "backwardYaw": -70.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": 144.51,
   "backwardYaw": -70.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "distance": 1
  },
  {
   "yaw": -169.64,
   "backwardYaw": -20.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "distance": 1
  },
  {
   "yaw": -169.76,
   "backwardYaw": -20.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "distance": 1
  },
  {
   "yaw": 98.57,
   "backwardYaw": 47.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": 98.46,
   "backwardYaw": 47.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "distance": 1
  },
  {
   "yaw": 130.71,
   "backwardYaw": -56.59,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "distance": 1
  },
  {
   "yaw": 130.72,
   "backwardYaw": -56.59,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
 "thumbnailUrl": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_t.jpg",
 "hfovMin": "120%",
 "label": "Quincho - Parrilla",
 "pitch": 0,
 "partial": false,
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_t.jpg"
  }
 ],
 "vfov": 180,
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
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7D33FBA1_5C95_2629_41C4_F23CFDF135FB",
 "initialPosition": {
  "hfov": 90,
  "yaw": -151.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7D33FBA1_5C95_2629_41C4_F23CFDF135FB",
 "id": "camera_7D33EBA1_5C95_2629_41BE_9E3DCB882777",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_75DA6323_5C95_262A_41A4_9CDAC95D44EF",
 "initialPosition": {
  "hfov": 90,
  "yaw": 123.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_75DA6323_5C95_262A_41A4_9CDAC95D44EF",
 "id": "camera_75DA7323_5C95_262A_41CB_EEB12587DD86",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_74BCD296_5C95_26EB_4190_E5B4CB7FA06D",
 "initialPosition": {
  "hfov": 90,
  "yaw": 109.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_74BCD296_5C95_26EB_4190_E5B4CB7FA06D",
 "id": "camera_74BCF296_5C95_26EB_41C0_DC243F4E9D05",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_430CD507_5C95_23E9_41D1_A05F8C4E0660",
 "initialPosition": {
  "hfov": 90,
  "yaw": -53.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_430CD507_5C95_23E9_41D1_A05F8C4E0660",
 "id": "camera_430CE507_5C95_23E9_41BA_A08636AA0B27",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7D98CB15_5C95_27EE_41D6_DF43B345AB60",
 "initialPosition": {
  "hfov": 90,
  "yaw": 66.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7D98CB15_5C95_27EE_41D6_DF43B345AB60",
 "id": "camera_7D98EB15_5C95_27EE_41C9_475B12BF6368",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1500
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7DF026EB_5C95_2E39_41D1_F29988276A93",
 "initialPosition": {
  "hfov": 90,
  "yaw": 10.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7DF026EB_5C95_2E39_41D1_F29988276A93",
 "id": "camera_7DF036EB_5C95_2E39_41AC_62FE41D284D1",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7D771768_5C95_2E27_41C4_9E02F5B2DA00",
 "initialPosition": {
  "hfov": 90,
  "yaw": 162.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7D771768_5C95_2E27_41C4_9E02F5B2DA00",
 "id": "camera_7D772768_5C95_2E27_41C3_401F7D76080C",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7EC1D7E5_5C95_2E29_419D_B6D70C0FD522",
 "initialPosition": {
  "hfov": 90,
  "yaw": 92.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7EC1D7E5_5C95_2E29_419D_B6D70C0FD522",
 "id": "camera_7EC1E7E5_5C95_2E29_41A8_2F675B422BE5",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_79E3BEED_5C95_3E3E_41C4_50B13E0B75AF",
 "initialPosition": {
  "hfov": 90,
  "yaw": 87.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_79E3BEED_5C95_3E3E_41C4_50B13E0B75AF",
 "id": "camera_79E3AEED_5C95_3E3E_41D0_2820DA031389",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7AE10083_5C95_22E9_41AE_898BB4A497AC",
 "initialPosition": {
  "hfov": 90,
  "yaw": -173.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7AE10083_5C95_22E9_41AE_898BB4A497AC",
 "id": "camera_7AE12083_5C95_22E9_41CD_FC5C7EAAFA12",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1500
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4338F526_5C95_222B_41D4_2DE5C1AE0A89",
 "initialPosition": {
  "hfov": 90,
  "yaw": -44.08,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_4338F526_5C95_222B_41D4_2DE5C1AE0A89",
 "id": "camera_43380526_5C95_222B_41B1_6F173FFFD499",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_437C648A_5C95_22FB_41D3_AA38865A1E28",
 "initialPosition": {
  "hfov": 90,
  "yaw": 139.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_437C648A_5C95_22FB_41D3_AA38865A1E28",
 "id": "camera_437C748A_5C95_22FB_41D2_35667D22EA17",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "initialPosition": {
  "hfov": 90,
  "yaw": -23.11,
  "class": "PanoramaCameraPosition",
  "pitch": -0.75
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE.mp3",
  "oggUrl": "media/audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE",
 "data": {
  "label": "12343287"
 }
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1126
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_745A82B5_5C95_2629_41C5_DF374382E561",
 "initialPosition": {
  "hfov": 90,
  "yaw": 159.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_745A82B5_5C95_2629_41C5_DF374382E561",
 "id": "camera_745AA2B5_5C95_2629_41C0_BFBD1E1B48B4",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 61.53,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 62.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.25,
    "yawSpeed": 3.11,
    "easing": "cubic_in_out",
    "pitchSpeed": 2.05
   },
   {
    "targetYaw": 96.85,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -20.03,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 44.09,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -22.8,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 26.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.17,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -112.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -67.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -37.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -152.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -45.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -18.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.98,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7A3E412F_5C95_2239_41BC_D43A1BF90322"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_771E90F9_503A_511F_41C2_B9C904B98D71",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_771E90F9_503A_511F_41C2_B9C904B98D71",
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7D5C6759_5C95_2E19_41BF_BA41B6697DFD",
 "initialPosition": {
  "hfov": 90,
  "yaw": 162.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7D5C6759_5C95_2E19_41BF_BA41B6697DFD",
 "id": "camera_7D5C7759_5C95_2E19_41CD_E3F3BD98894D",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_4327C536_5C95_222B_41D2_6476A602BB4A",
 "initialPosition": {
  "hfov": 90,
  "yaw": 28.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_4327C536_5C95_222B_41D2_6476A602BB4A",
 "id": "camera_4327D536_5C95_222B_41C4_F172E7AF9296",
 "class": "PanoramaCamera"
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
   "media": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_camera"
  },
  {
   "media": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera"
  },
  {
   "media": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera"
  },
  {
   "media": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_camera"
  },
  {
   "media": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera"
  },
  {
   "media": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_camera"
  },
  {
   "media": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera"
  },
  {
   "media": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera"
  },
  {
   "media": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera"
  },
  {
   "media": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera"
  },
  {
   "media": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera"
  },
  {
   "media": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_camera"
  },
  {
   "media": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera"
  },
  {
   "media": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera"
  },
  {
   "media": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera"
  },
  {
   "media": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera"
  },
  {
   "media": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_camera"
  },
  {
   "media": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_camera"
  },
  {
   "media": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera"
  },
  {
   "media": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera"
  },
  {
   "media": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera"
  },
  {
   "media": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 0)",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77024918_503A_F31E_41AF_34F62C64FEBB",
 "initialPosition": {
  "hfov": 90,
  "yaw": 68.83,
  "class": "PanoramaCameraPosition",
  "pitch": 13.57
 },
 "initialSequence": "this.sequence_77024918_503A_F31E_41AF_34F62C64FEBB",
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -36.73,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7598B361_5C95_2629_41B0_B3C65BBA0DB3"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7B9EE18D_5C95_22FE_41D4_B9F1F613F0FD",
 "initialPosition": {
  "hfov": 90,
  "yaw": 116.63,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7B9EE18D_5C95_22FE_41D4_B9F1F613F0FD",
 "id": "camera_7B9E018D_5C95_22FE_41A2_2D15376E1564",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7B3C5219_5C95_2619_41BE_0A5CB689A5A8",
 "initialPosition": {
  "hfov": 90,
  "yaw": 30.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7B3C5219_5C95_2619_41BE_0A5CB689A5A8",
 "id": "camera_7B3C6219_5C95_2619_41CB_51AE76F3EA00",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7CEDE5C3_5C95_226A_41C9_64C7DD99CB3C",
 "initialPosition": {
  "hfov": 90,
  "yaw": 128.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7CEDE5C3_5C95_226A_41C9_64C7DD99CB3C",
 "id": "camera_7CEDF5C3_5C95_226A_41B4_31878A948CC0",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7CC09575_5C95_222E_41B2_549907823CB5",
 "initialPosition": {
  "hfov": 90,
  "yaw": 18.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7CC09575_5C95_222E_41B2_549907823CB5",
 "id": "camera_7CC0B575_5C95_222E_41C7_620C64BEC45A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7EFAA7F5_5C95_2E29_41C2_2F36C7F5EDB7",
 "initialPosition": {
  "hfov": 90,
  "yaw": 30.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7EFAA7F5_5C95_2E29_41C2_2F36C7F5EDB7",
 "id": "camera_7EFAB7F5_5C95_2E29_41CE_3B24918E5570",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7DA0C73A_5C95_2E1A_41C9_AE4E535B0FE1",
 "initialPosition": {
  "hfov": 90,
  "yaw": -164.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7DA0C73A_5C95_2E1A_41C9_AE4E535B0FE1",
 "id": "camera_7DA0D73A_5C95_2E1A_41D5_5BD4771B7346",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 90,
  "yaw": 177.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -2.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.18,
    "yawSpeed": 120.12,
    "easing": "cubic_in_out",
    "pitchSpeed": 60.28
   },
   {
    "targetYaw": -49.87,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -79.01,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -120.71,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.1,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 154.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 90.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 36.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.2,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -2.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 26.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7F57694D_5C95_227E_41CE_7F0B36427C34",
 "manualZoomSpeed": 2
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 62.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0.25
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 96.85,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -20.03,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 44.09,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -22.8,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 26.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.17,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -112.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -67.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -37.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -152.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -45.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -18.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.98,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_camera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7EAF3853_5C95_226A_41D5_811DD97B2D1F",
 "initialPosition": {
  "hfov": 120,
  "yaw": -0.92,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7EAF3853_5C95_226A_41D5_811DD97B2D1F",
 "id": "camera_7EAF4853_5C95_226A_41D6_C3FC57EAC011",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_436E24B9_5C95_2219_41C7_970F9013468D",
 "initialPosition": {
  "hfov": 90,
  "yaw": 165.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_436E24B9_5C95_2219_41C7_970F9013468D",
 "id": "camera_436E34B9_5C95_2219_41D5_4AA2004A6DD8",
 "class": "PanoramaCamera"
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window10442"
 },
 "bodyPaddingRight": 0,
 "id": "window_73465F18_502E_CF1D_41D3_CDAB91BFC330",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "paddingLeft": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBackgroundOpacity": 1,
 "width": 400,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "footerBorderSize": 0,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "modal": true,
 "height": 600,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "title": "\u00c1lbum de Fotos",
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "titleFontWeight": "normal",
 "closeButtonRollOverIconLineWidth": 2,
 "backgroundOpacity": 1,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadow": true,
 "footerHeight": 5,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [],
 "closeButtonPressedIconLineWidth": 3,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "layout": "vertical",
 "headerPaddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "headerBorderSize": 0,
 "propagateClick": false,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.container_7CE739FB_5C95_2219_41A5_AA1A9AC5A857"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "shadowHorizontalLength": 3,
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "bodyBorderSize": 0,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 1,
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "class": "Window",
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 20,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "titleTextDecoration": "none",
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "closeButtonRollOverBackgroundColor": [],
 "footerBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 0,
 "headerBackgroundOpacity": 0,
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBackgroundOpacity": 1,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  1
 ],
 "closeButtonPressedBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7C8075D2_5C95_226B_41C0_1B34BE7EDFFF",
 "initialPosition": {
  "hfov": 90,
  "yaw": -148.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7C8075D2_5C95_226B_41C0_1B34BE7EDFFF",
 "id": "camera_7C8185D2_5C95_226B_41B3_5530DE3D776A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7F12D98B_5C95_22F9_41CD_AEC0ECFB9409",
 "initialPosition": {
  "hfov": 90,
  "yaw": -126.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7F12D98B_5C95_22F9_41CD_AEC0ECFB9409",
 "id": "camera_7F12E98B_5C95_22F9_41BF_1ADF96C31F01",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7F66DD37_5C95_2229_41D0_3CE27EA2F9C1",
 "initialPosition": {
  "hfov": 90,
  "yaw": -168.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7F66DD37_5C95_2229_41D0_3CE27EA2F9C1",
 "id": "camera_7F66FD37_5C95_2229_41D4_642570742EEB",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_40D48334_4F99_F6B7_41B6_51185E4DCB63.mp3",
  "oggUrl": "media/audio_40D48334_4F99_F6B7_41B6_51185E4DCB63.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_40D48334_4F99_F6B7_41B6_51185E4DCB63",
 "data": {
  "label": "Sunday Walk (Full)"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7D86871A_5C95_2E1B_41C6_B337E16A05AC",
 "initialPosition": {
  "hfov": 90,
  "yaw": -164.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7D86871A_5C95_2E1B_41C6_B337E16A05AC",
 "id": "camera_7D86971A_5C95_2E1B_41CF_9D95380EBEB0",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_camera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7D0AD7A7_5C95_2E29_41D5_72A5331B3FBC",
 "initialPosition": {
  "hfov": 90,
  "yaw": 51.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7D0AD7A7_5C95_2E29_41D5_72A5331B3FBC",
 "id": "camera_7D0AF7A7_5C95_2E29_41D6_57A97ED28C86",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80"
  },
  {
   "yaw": -105.26,
   "backwardYaw": -53.36,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "TOMA 31 BALC\u00d3N FRONTAL",
 "id": "panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F",
 "thumbnailUrl": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_466CC9D9_5CFE_E219_41C6_48DA7E6ACE59",
  "this.overlay_40CC987A_5CFF_621A_41C8_873C6BA0FFB4"
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7C3F2A97_5C95_26E9_41C5_C91D751BB984",
 "initialPosition": {
  "hfov": 90,
  "yaw": -59.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7C3F2A97_5C95_26E9_41C5_C91D751BB984",
 "id": "camera_7C3F5A97_5C95_26E9_41BF_91B212B79AA4",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_78F069E9_5C95_2239_41D1_02A5836F95D1",
 "initialPosition": {
  "hfov": 90,
  "yaw": -123.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_78F069E9_5C95_2239_41D1_02A5836F95D1",
 "id": "camera_78F189E9_5C95_2239_41B4_A17AE9E0211C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7D109788_5C95_2EE6_41D4_4039C56B2252",
 "initialPosition": {
  "hfov": 90,
  "yaw": 51.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7D109788_5C95_2EE6_41D4_4039C56B2252",
 "id": "camera_7D10A788_5C95_2EE6_41D0_1576C5562889",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7EF1FBD0_5C95_2667_41C3_909C502C3DF3",
 "initialPosition": {
  "hfov": 90,
  "yaw": 178.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7EF1FBD0_5C95_2667_41C3_909C502C3DF3",
 "id": "camera_7EF1EBD0_5C95_2667_41CE_F9371803C5FB",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "loop": true,
 "yaw": -47.23,
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "class": "DirectionalPanoramaAudio",
 "pitch": -0.75,
 "id": "audio_76772C3C_56C3_6F18_41D4_7C4FB259877A",
 "data": {
  "label": "water sounds"
 },
 "maximumAngle": 359.5
},
{
 "label": "cut for paste 5",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_7340C746_56DD_5968_41D3_39B2A98F9F24_t.jpg",
 "width": 420,
 "loop": false,
 "id": "video_7340C746_56DD_5968_41D3_39B2A98F9F24",
 "class": "Video",
 "height": 630,
 "video": {
  "width": 420,
  "class": "VideoResource",
  "height": 630,
  "mp4Url": "media/video_7340C746_56DD_5968_41D3_39B2A98F9F24.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_78454DF3_5C95_222A_41CC_667970CBB158",
 "initialPosition": {
  "hfov": 90,
  "yaw": 158.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_78454DF3_5C95_222A_41CC_667970CBB158",
 "id": "camera_78457DF3_5C95_222A_4193_C86B249C4E6C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7B1F41FA_5C95_221B_41C7_25F16FA9BE6F",
 "initialPosition": {
  "hfov": 90,
  "yaw": 30.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7B1F41FA_5C95_221B_41C7_25F16FA9BE6F",
 "id": "camera_7B1F71FA_5C95_221B_41C4_CA4EBF9C0433",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -36.73,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7BFF716D_5C95_2239_41C6_8DBB00A6A242"
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window17928"
 },
 "bodyPaddingRight": 0,
 "id": "window_589E2836_5746_CE6B_41AD_BBAC5BB986BB",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "paddingLeft": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBackgroundOpacity": 1,
 "width": 400,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "footerBorderSize": 0,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "modal": true,
 "height": 600,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "title": "",
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "titleFontWeight": "normal",
 "closeButtonRollOverIconLineWidth": 2,
 "backgroundOpacity": 1,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadow": true,
 "footerHeight": 5,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [],
 "closeButtonPressedIconLineWidth": 3,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "layout": "vertical",
 "headerPaddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "headerBorderSize": 0,
 "propagateClick": false,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.container_7C95FA0B_5C95_21F9_41A1_48C8A317A992"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "shadowHorizontalLength": 3,
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "bodyBorderSize": 0,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 1,
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "class": "Window",
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 20,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "titleTextDecoration": "none",
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "closeButtonRollOverBackgroundColor": [],
 "footerBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bodyBorderColor": "#000000",
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 0,
 "headerBackgroundOpacity": 0,
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "closeButtonRollOverBackgroundOpacity": 1,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20,
 "bodyBackgroundColorRatios": [
  1
 ],
 "closeButtonPressedBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7C2756BD_5C95_2E1E_41BD_9422DCAB3637",
 "initialPosition": {
  "hfov": 90,
  "yaw": 86.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7C2756BD_5C95_2E1E_41BD_9422DCAB3637",
 "id": "camera_7C2766BD_5C95_2E1E_4181_86BB8EE3DA2D",
 "class": "PanoramaCamera"
},
{
 "duration": 5500,
 "class": "Photo",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10",
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10_t.jpg",
 "width": 2000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_749DA277_5C95_2629_41D6_3DA80B99E937",
 "initialPosition": {
  "hfov": 90,
  "yaw": 109.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_749DA277_5C95_2629_41D6_3DA80B99E937",
 "id": "camera_749DB277_5C95_2629_41C1_1CCFB8B2ACFA",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_747A92D5_5C95_266E_41BD_17A032456CE2",
 "initialPosition": {
  "hfov": 90,
  "yaw": 159.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_747A92D5_5C95_266E_41BD_17A032456CE2",
 "id": "camera_747AA2D5_5C95_266E_41CE_57843E33BFF5",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_74FD9258_5C95_2666_41AD_66D4948CACC6",
 "initialPosition": {
  "hfov": 90,
  "yaw": -90.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_74FD9258_5C95_2666_41AD_66D4948CACC6",
 "id": "camera_74FDA258_5C95_2666_41D0_9474DE75F37B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7DDA16CC_5C95_2E7F_41D0_1E9B3BAC1AE3",
 "initialPosition": {
  "hfov": 90,
  "yaw": 86.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7DDA16CC_5C95_2E7F_41D0_1E9B3BAC1AE3",
 "id": "camera_7DDA26CC_5C95_2E7F_41C9_B09D386B4421",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7559E3A0_5C95_2626_41D1_E7100C6206C5",
 "initialPosition": {
  "hfov": 90,
  "yaw": 139.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7559E3A0_5C95_2626_41D1_E7100C6206C5",
 "id": "camera_7559F3A0_5C95_2626_41A9_B97BF56ED678",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7F30A9AB_5C95_223A_41CA_E532E3115D5D",
 "initialPosition": {
  "hfov": 90,
  "yaw": -126.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7F30A9AB_5C95_223A_41CA_E532E3115D5D",
 "id": "camera_7F30B9AB_5C95_223A_41B3_345462BFD2BE",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "initialPosition": {
  "hfov": 90,
  "yaw": 3.27,
  "class": "PanoramaCameraPosition",
  "pitch": 11.81
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7E4B2872_5C95_222B_41CE_B8417C000EE5",
 "initialPosition": {
  "hfov": 90,
  "yaw": 52.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7E4B2872_5C95_222B_41CE_B8417C000EE5",
 "id": "camera_7E4B4872_5C95_222B_41BC_1962EF6EDF6E",
 "class": "PanoramaCamera"
},
{
 "label": "cascada toma piscinas",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_76BF82AE_56C2_FB39_41D0_DF287E74780C_t.jpg",
 "width": 466,
 "loop": false,
 "id": "video_76BF82AE_56C2_FB39_41D0_DF287E74780C",
 "class": "Video",
 "height": 690,
 "video": {
  "width": 466,
  "class": "VideoResource",
  "height": 690,
  "mp4Url": "media/video_76BF82AE_56C2_FB39_41D0_DF287E74780C.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_78D039CA_5C95_227A_41A1_DACE3A4A9029",
 "initialPosition": {
  "hfov": 90,
  "yaw": -123.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_78D039CA_5C95_227A_41A1_DACE3A4A9029",
 "id": "camera_78D059CA_5C95_227A_41C1_5E83EC201429",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_770D5914_503A_D315_41C7_BD98E4CD29E4",
 "initialPosition": {
  "hfov": 90,
  "yaw": 0.75,
  "class": "PanoramaCameraPosition",
  "pitch": 8.04
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_770D5914_503A_D315_41C7_BD98E4CD29E4",
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_7E6C2C5D_5C95_221E_41C1_BA7937FDCF37",
 "initialPosition": {
  "hfov": 90,
  "yaw": 179.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "initialSequence": "this.sequence_7E6C2C5D_5C95_221E_41C1_BA7937FDCF37",
 "id": "camera_7E6C5C5D_5C95_221E_4192_9E54A38BCFEA",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "12px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "propagateClick": true,
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "width": 115.05,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 641,
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "propagateClick": true,
 "data": {
  "name": "--STICKER"
 },
 "scrollBarWidth": 10,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": 573,
 "children": [
  "this.Image_5EF9A31F_502E_7713_41B1_155B9E9559BD"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 133,
 "scrollBarOpacity": 0.5,
 "top": 15,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "layout": "absolute"
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_402E3BC3_565F_296F_41AF_19D956287FE7"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 118,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.64,
 "borderRadius": 0,
 "data": {
  "name": "--MENU"
 },
 "overflow": "visible",
 "layout": "absolute"
},
{
 "maxHeight": 100,
 "propagateClick": false,
 "id": "Image_13196006_51DA_2CB3_4191_F03898441520",
 "paddingRight": 0,
 "right": "1.08%",
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_13196006_51DA_2CB3_4191_F03898441520.png",
 "minHeight": 80,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "width": "6.031%",
 "bottom": "7.73%",
 "minWidth": 80,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
 "height": "11.186%",
 "class": "Image",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "Image25151"
 },
 "cursor": "hand",
 "maxWidth": 100
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "top": "0%",
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--INFO photoalbum"
 },
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "top": "0%",
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "top": "0%",
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_6B7B3538_502A_54D0_41D0_9A6D5FB5A723",
  "this.Container_6B7BD538_502A_54D0_41CC_674161DF5902"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "top": "0%",
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "data": {
  "name": "--INSTRUCCIONES"
 },
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "yawSpeed": 54.92,
   "easing": "cubic_in_out",
   "pitchSpeed": 27.83
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_788E7A28_5C95_2626_41D1_848E3187AD0E"
},
{
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "yawSpeed": 48.33,
   "easing": "cubic_in_out",
   "pitchSpeed": 24.56
  },
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7F8BECE9_5C95_2239_41D5_338D9FF5E795"
},
{
 "movements": [
  {
   "targetYaw": 68.83,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.57,
   "yawSpeed": 33.93,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.39
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -29.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -25.81,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -153.37,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.51,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 133.78,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 71.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -34.35,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79208016_5C95_21EA_41C8_96980A16BEFC"
},
{
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "yawSpeed": 32.48,
   "easing": "cubic_in_out",
   "pitchSpeed": 16.67
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4319B4D8_5C95_2267_41C1_D5904DF69765"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 37,
 "propagateClick": true,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 37,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "mode": "push",
 "minWidth": 49,
 "height": "141.51%",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand",
 "maxWidth": 49
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "transparencyActive": false,
 "maxHeight": 40,
 "propagateClick": false,
 "id": "IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 40,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61.jpg",
 "pressedRollOverIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_pressed_rollover.jpg",
 "mode": "push",
 "minWidth": 40,
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B, false, 0, null, null, false)",
 "height": "100%",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_rollover.jpg",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_pressed.jpg",
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 40
},
{
 "transparencyActive": true,
 "maxHeight": 40,
 "propagateClick": true,
 "id": "IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 40,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D.png",
 "mode": "push",
 "minWidth": 40,
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B, true, 0, this.effect_13185EDD_502A_7550_41C3_AE7B43D21853, 'showEffect', false)",
 "height": "100%",
 "width": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "Ayuda"
 },
 "cursor": "hand",
 "maxWidth": 40
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.91,
   "image": "this.AnimatedImageResource_7C8D3A1B_5C95_261A_41D3_2693A91F5994",
   "pitch": -8.7,
   "yaw": -19.77,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_7B9E018D_5C95_22FE_41A2_2D15376E1564); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4B06FB75_5C8D_E629_41D0_39ACE8264920",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.91,
   "yaw": -19.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 14.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_1_0.png",
      "width": 403,
      "class": "ImageResourceLevel",
      "height": 655
     }
    ]
   },
   "pitch": -7.16,
   "yaw": -19.73,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_7BBF21AC_5C95_223E_41D3_5E9B0BE5EB87); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4B06EB75_5C8D_E629_41D0_F40FAA7834DA",
 "data": {
  "label": "   Living"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.42,
   "yaw": -19.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.25,
   "image": "this.AnimatedImageResource_7C8D8A1B_5C95_261A_41D3_1719D5AA5806",
   "pitch": -20.48,
   "yaw": 62.71,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_44CECBC8_5C8E_E667_41C8_45A16FBDF932",
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.25,
   "yaw": 62.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 10.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_3_0.png",
      "width": 321,
      "class": "ImageResourceLevel",
      "height": 441
     }
    ]
   },
   "pitch": -19.19,
   "yaw": 62.35,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_45DA1407_5C8D_61EA_41B1_2CF401771FB5",
 "data": {
  "label": "   Medio"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.94,
   "yaw": 62.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.8,
   "image": "this.AnimatedImageResource_7C8CFA1B_5C95_261A_4199_AA330CAB1C2B",
   "pitch": 2.33,
   "yaw": 62.71,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_456ED3AF_5CF3_2639_41BE_00D2618002D8",
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.8,
   "yaw": 62.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 9.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_5_0.png",
      "width": 259,
      "class": "ImageResourceLevel",
      "height": 322
     }
    ]
   },
   "pitch": 3.32,
   "yaw": 62.78,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_44EF3CAC_5CF3_623E_41D2_97DC21AC8F5F",
 "data": {
  "label": "   Fondo"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.32,
   "yaw": 62.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   }
  }
 ]
},
{
 "movements": [
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8"
},
{
 "items": [
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.42",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.52"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.59",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.49"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.72",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.61"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.50",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.64"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.56",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.69"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.61",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.28"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.27",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.69",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.46"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.63",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.45"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.55",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.56"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.58",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.27"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.71",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.55"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.27",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.30"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.59",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.33"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.70",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.35"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.37",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.59"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.31",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.35"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.48",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.60"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.74",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.44"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.73",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5500,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.31",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.42"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside"
   },
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 39.32,
   "easing": "cubic_in_out",
   "pitchSpeed": 20.07
  },
  {
   "targetYaw": -58.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -116.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -8.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -143.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 112.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 1.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7C72C64F_5C95_2E79_41D6_586CA35DEE97"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.68,
   "image": "this.AnimatedImageResource_7CB27A1B_5C95_261A_41CA_A405FBA7F509",
   "pitch": -7.35,
   "yaw": 160.78,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_78638E12_5C95_21EB_41C9_FFD4EDE0C8C3); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5B1FF612_4C15_9CF2_41C3_BA09D573F956",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.68,
   "yaw": 160.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.35,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.16,
   "image": "this.AnimatedImageResource_7CB21A1B_5C95_261A_41C5_E0C5F365B67B",
   "pitch": -8.6,
   "yaw": -149.48,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_7F24ED76_5C95_222A_41D1_B0BF74FD9154); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_55065348_4C1F_BB5E_41C9_63BC86EB71F1",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.16,
   "yaw": -149.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.6,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.09,
   "image": "this.AnimatedImageResource_7CB32A1B_5C95_261A_41B5_ECBD81A7219D",
   "pitch": -14.01,
   "yaw": 56.4,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_79E3AEED_5C95_3E3E_41D0_2820DA031389); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_54B5B55E_4C1E_FF72_41C3_B40A23F1359D",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.09,
   "yaw": 56.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.01,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.39,
   "image": "this.AnimatedImageResource_7CB3EA1B_5C95_261A_41C8_D7785E8E6E9F",
   "pitch": -7.53,
   "yaw": -1.64,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_78A27DE3_5C95_2229_41D0_177B8367E2CB); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_542EB355_4C1D_FB76_41B1_02C2022012E4",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.39,
   "yaw": -1.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.53,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.75,
   "image": "this.AnimatedImageResource_7CB38A1B_5C95_261A_41D3_F4E787AD6151",
   "pitch": -8.59,
   "yaw": -93.72,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_78E55DA5_5C95_222E_41D2_476CDC28DB57); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5587FAC0_4C15_B54E_4192_D62E10526282",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.75,
   "yaw": -93.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.59,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.83,
   "image": "this.AnimatedImageResource_7CB22A1B_5C95_261A_41D0_57573C1B07E1",
   "pitch": -4.51,
   "yaw": -70.41,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_78233E7F_5C95_3E19_41B9_717810945643); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_55941349_4C16_7B5E_4191_A59BB4D3BEB7",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.83,
   "yaw": -70.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.51,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 13.41,
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
   "yaw": -149.72,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_78C74D85_5C95_22E9_41CB_3865A58D15C2); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7A7A1CE7_4DF5_AD52_4174_090BD5F8DB5D",
 "data": {
  "label": " \u000d  Cocina"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.41,
   "yaw": -149.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.22,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 17.91,
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
   "yaw": 160.41,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_78027E51_5C95_3E66_41BB_F6687603562B); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7584F74C_4DF6_BB56_41B3_F3BF279FF4AB",
 "data": {
  "label": "     Sala"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.91,
   "yaw": 160.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.43,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 9.59,
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
   "yaw": -1.56,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_78457DF3_5C95_222A_4193_C86B249C4E6C); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72672788_4DF7_9BDE_41C1_6FF3D69969EA",
 "data": {
  "label": "  Deck"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.59,
   "yaw": -1.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.87,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 9.61,
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
   "yaw": -70.5,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_79C37EAE_5C95_3E3B_41D5_8ACDB972326A); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_74CC5B0D_4DF6_94D7_41AD_35EB0E985D9B",
 "data": {
  "label": " Parrilla"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.61,
   "yaw": -70.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.45,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 9.58,
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
   "yaw": -93.71,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_78829DC4_5C95_226F_41D4_B570A5753F1E); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_756A3004_4DF5_F4D5_41C1_56A034309D7B",
 "data": {
  "label": " Pasillo"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.58,
   "yaw": -93.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.49,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 14.29,
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
   "yaw": 56.25,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_7980FF1C_5C95_3E1E_41D5_DDFC90D0A343); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_74524590_4DF2_BFCD_41C2_0E8EB5134142",
 "data": {
  "label": "  Piscinas"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.29,
   "yaw": 56.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.12,
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
   }
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "blending": 0,
 "video": {
  "width": 420,
  "class": "VideoResource",
  "height": 630,
  "mp4Url": "media/video_7340C746_56DD_5968_41D3_39B2A98F9F24.mp4"
 },
 "hfov": 34.36,
 "autoplay": true,
 "id": "overlay_776FA9DA_56DD_6918_41A6_0C121383E56A",
 "enabledInCardboard": true,
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
 "useHandCursor": false,
 "roll": 1.74,
 "yaw": 49.32,
 "chromaThreshold": 0.02,
 "rotationY": 76.64,
 "rotationX": 3.22,
 "videoVisibleOnStop": false,
 "data": {
  "label": "Video"
 },
 "chromaColor": "#2B97FF",
 "vfov": 42.4,
 "chromaSmoothing": 0.4,
 "distance": 50,
 "class": "VideoPanoramaOverlay"
},
{
 "movements": [
  {
   "targetYaw": -51.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.33,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 142.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 72.48,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -1.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7E3A8C8B_5C95_22F9_41D6_A205CF4D197C"
},
{
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "yawSpeed": 8.54,
   "easing": "cubic_in_out",
   "pitchSpeed": 4.75
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7FB6793D_5C95_2219_41C9_DAF2BB65FEE9"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_7C89BA1B_5C95_261A_41D4_EBF89F2E1996",
   "pitch": 6.38,
   "yaw": 26.29,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_7ABF80C2_5C95_226A_4190_03C30801C473, this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A); this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_7ABF80C2_5C95_226A_4190_03C30801C473); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5F22236E_4CFD_BB52_41D0_87962539D379",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 26.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.38,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.31,
   "image": "this.AnimatedImageResource_7C884A1B_5C95_261A_41C6_FDDE75AAFB97",
   "pitch": -11.69,
   "yaw": 36.58,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_585CAAAF_4CF2_75D3_418F_E4020A5C57BA",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.31,
   "yaw": 36.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.69,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 10.31,
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
   "yaw": 26.33,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_7AAE80D1_5C95_2269_41D4_D67A2C715E58, this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A); this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_7AAE80D1_5C95_2269_41D4_D67A2C715E58); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_58E12D38_4CF7_EF3D_41B8_194A4EED7DFE",
 "data": {
  "label": "   Apagar\u000d    Luces"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.31,
   "yaw": 26.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.6,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 10.84,
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
   "yaw": 36.43,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7593DF4E_4DF2_AB55_41C7_FA82D656CEBF",
 "data": {
  "label": " Living"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.84,
   "yaw": 36.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.94,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 60.61,
 "yaw": 9.42,
 "id": "overlay_72687B9E_4C0E_ABF2_41BB_A08C589A4291",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 51.31,
 "yaw": 96.85,
 "id": "overlay_729624D3_4C0E_BD72_41C0_CD73173E435F",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.06,
   "image": "this.AnimatedImageResource_7C8B2A1B_5C95_261A_41CB_A5021C01A7EF",
   "pitch": -34.02,
   "yaw": 0.1,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_7A3E412F_5C95_2239_41BC_D43A1BF90322); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4BDB7184_5C93_E2EE_41C6_A55CC2B4DD75",
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.06,
   "yaw": 0.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 22.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_5_0.png",
      "width": 642,
      "class": "ImageResourceLevel",
      "height": 694
     }
    ]
   },
   "pitch": -10.75,
   "yaw": -179.82,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_7A5EF0E1_5C95_2226_41C1_39958110478A); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4B4CD0DD_5C92_E21E_41D6_48F1A336E13E",
 "data": {
  "label": "     Fondo"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.74,
   "yaw": -179.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.83,
   "image": "this.AnimatedImageResource_7C8B9A1B_5C95_261A_41C2_6868CC8A4872",
   "pitch": -12.64,
   "yaw": -179.9,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_7A1E9110_5C95_23E6_41C5_F74547700A5B); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4A27221C_5C97_261E_41C2_2A76CED6B5EA",
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.83,
   "yaw": -179.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 13.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_7_0.png",
      "width": 454,
      "class": "ImageResourceLevel",
      "height": 346
     }
    ]
   },
   "pitch": -32.21,
   "yaw": -0.15,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_7BC1014E_5C95_227B_41C4_D369AE9ADCD2); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4B892B7C_5C97_E61F_41C2_D49CE49FD165",
 "data": {
  "label": "     Frente"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.84,
   "yaw": -0.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_7_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "yawSpeed": 23.96,
   "easing": "cubic_in_out",
   "pitchSpeed": 12.43
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79A3FF4B_5C95_3E7A_41C1_00F068614C6C"
},
{
 "movements": [
  {
   "targetYaw": 9.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.91,
   "yawSpeed": 21.15,
   "easing": "cubic_in_out",
   "pitchSpeed": 11.03
  },
  {
   "targetYaw": 71.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -21.54,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 108.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -20.29,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 172.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -97.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -10.49,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -37.81,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.57,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7E979814_5C95_21EF_41CD_785ABB506DC4"
},
{
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "yawSpeed": 10.89,
   "easing": "cubic_in_out",
   "pitchSpeed": 5.92
  },
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7E0568A1_5C95_2229_41A4_86CC7B958BE5"
},
{
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "yawSpeed": 67.14,
   "easing": "cubic_in_out",
   "pitchSpeed": 33.92
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7E8E6C0E_5C95_21FB_41A0_8984CA821CAC"
},
{
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "yawSpeed": 105.38,
   "easing": "cubic_in_out",
   "pitchSpeed": 52.95
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78A24DE3_5C95_2229_41BE_A0696FEC6274"
},
{
 "movements": [
  {
   "targetYaw": -1.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.86,
   "yawSpeed": 1.9,
   "easing": "cubic_in_out",
   "pitchSpeed": 1.45
  },
  {
   "targetYaw": -51.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.33,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 142.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 72.48,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -1.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7EB1D834_5C95_222E_41C2_F9D3689B657C"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.99,
   "image": "this.AnimatedImageResource_7C872A1B_5C95_261A_41D3_217A5E9F9068",
   "pitch": -21.55,
   "yaw": 0.17,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_7E2C3C9B_5C95_2219_41D0_99B279DDA074); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4F65FE35_5C93_3E28_41D3_CCEA286FD35A",
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.99,
   "yaw": 0.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 74.42,
 "yaw": -7.91,
 "id": "overlay_488AF362_5C92_E62A_41CD_ED6323AB55AF",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 56.59,
 "yaw": 65.19,
 "id": "overlay_48F889FD_5C92_E219_41D5_92A0AD1ACDEC",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 57.09,
 "yaw": -64.44,
 "id": "overlay_48EDFE9F_5C9D_1E1A_41B7_6AFA2637F974",
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 12.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_1_0.png",
      "width": 469,
      "class": "ImageResourceLevel",
      "height": 421
     }
    ]
   },
   "pitch": -40.26,
   "yaw": -2.49,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4861FFAC_5C9D_FE3E_41A9_C97465DF7BC8",
 "data": {
  "label": "       Punto\u000d    Intermedio"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.89,
   "yaw": -2.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_1_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.83,
   "image": "this.AnimatedImageResource_7C862A1B_5C95_261A_41B0_DA845531731F",
   "pitch": -43.15,
   "yaw": -2.29,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4B027F32_5C9F_1E2B_41A8_DEB49B78DC2A",
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.83,
   "yaw": -2.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 10.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_3_0.png",
      "width": 310,
      "class": "ImageResourceLevel",
      "height": 235
     }
    ]
   },
   "pitch": -20.02,
   "yaw": 0.08,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_7FCAFCAB_5C95_223A_41C9_2C5246D55EA1); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_49E5426B_5C9F_6639_41D5_53491B41ED02",
 "data": {
  "label": "     Frente"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.49,
   "yaw": 0.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_3_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.63,
   "image": "this.AnimatedImageResource_7C86DA1B_5C95_261A_41CF_E95086130DE9",
   "pitch": -7.66,
   "yaw": 24.52,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_7FEA1CCA_5C95_227B_419F_365EA39C8918); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_44040F6A_5C93_3E3A_41B2_47FDF4DB86AD",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.63,
   "yaw": 24.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 8.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_5_0.png",
      "width": 231,
      "class": "ImageResourceLevel",
      "height": 402
     }
    ]
   },
   "pitch": -7.76,
   "yaw": 24.67,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_7F8B1CE9_5C95_2239_41C2_BDC5E3981719); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4404EF6A_5C93_3E3A_41B4_92431BFDBA6A",
 "data": {
  "label": " Living"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.25,
   "yaw": 24.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 27
     }
    ]
   }
  }
 ]
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 132.58,
   "easing": "cubic_in_out",
   "pitchSpeed": 66.48
  },
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7F04BD57_5C95_226A_4177_AD72C2505F4D"
},
{
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "yawSpeed": 10.89,
   "easing": "cubic_in_out",
   "pitchSpeed": 5.92
  },
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7E2378C0_5C95_2267_41CC_DF1084986EB4"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_7C8FCA1B_5C95_261A_41D6_9C05AC1F71A5",
   "pitch": 6.38,
   "yaw": 26.29,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_7E0A1C7C_5C95_221E_41C3_4A36B3E7C39D, this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A); this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_7E0A1C7C_5C95_221E_41C3_4A36B3E7C39D); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5F08474E_4CFE_9B55_4162_01D050A59F50",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 26.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.38,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.31,
   "image": "this.AnimatedImageResource_7C8E7A1B_5C95_261A_41C2_DD6AB53841ED",
   "pitch": -11.69,
   "yaw": 36.58,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5829C0DD_4CF2_F576_4170_28F44FE61136",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.31,
   "yaw": 36.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.69,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 10.31,
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
   "yaw": 26.42,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_7E3ABC8B_5C95_22F9_41C5_CDE4DDCA22F2, this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A); this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_7E3ABC8B_5C95_22F9_41C5_CDE4DDCA22F2); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_58FADE45_4CF5_AD56_41C7_88B8A9887EBB",
 "data": {
  "label": " Encender\u000d   Luces"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.31,
   "yaw": 26.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.59,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 10.84,
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
   "yaw": 36.43,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_752BA8F4_4DF2_F535_4196_A95C1DB42D1C",
 "data": {
  "label": " Living"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.84,
   "yaw": 36.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.94,
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
   }
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.48,
   "image": "this.AnimatedImageResource_7CB1EA1B_5C95_261A_41C3_9340C3080A5E",
   "pitch": -10.11,
   "yaw": 109.03,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_74DCF238_5C95_2627_41C7_AAAAD45ADB84); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_541D6722_4C12_9CCD_41BA_EE1FE905E835",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 24.48,
   "yaw": 109.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.11,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.28,
   "image": "this.AnimatedImageResource_7CB18A1B_5C95_261A_41D0_B3D3688C5C51",
   "pitch": -10.11,
   "yaw": 2.39,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7B1F71FA_5C95_221B_41C4_CA4EBF9C0433); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5B17EBCA_4C1E_AB5D_41BF_C3867D88D8B8",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.28,
   "yaw": 2.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.11,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.89,
   "image": "this.AnimatedImageResource_7CB05A1B_5C95_261A_41BE_05962FFA4CAF",
   "pitch": -5.46,
   "yaw": -66.95,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_52FEE528_4C15_FCDE_41AE_7C61B197B5D1",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.89,
   "yaw": -66.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.46,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 22.84,
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
   "yaw": 2.26,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7B3C6219_5C95_2619_41CB_51AE76F3EA00); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7413D737_4DF2_7B32_41CC_6C141EB3875F",
 "data": {
  "label": "\u000d  Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.84,
   "yaw": 2.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.23,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 7.28,
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
   "yaw": -66.91,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_757F79E6_4DFE_B753_41AD_2FB53A3E46D9",
 "data": {
  "label": "Parrilla"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.28,
   "yaw": -66.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.89,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 23.05,
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
   "yaw": 109.1,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_74FDA258_5C95_2666_41D0_9474DE75F37B); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_76E05345_4DFE_7B57_41C6_165FDFFF9CA8",
 "data": {
  "label": "\u000d    Living"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 23.05,
   "yaw": 109.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.99,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 8.86,
 "yaw": -37.81,
 "id": "overlay_722C6DB8_4C0E_AF3D_41C6_E65D7C692713",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "movements": [
  {
   "targetYaw": 68.83,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.57,
   "yawSpeed": 33.93,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.39
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -29.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -25.81,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -153.37,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.51,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 133.78,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 71.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -34.35,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AC0D045_5C95_226E_41B0_4DB93405BB55"
},
{
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "yawSpeed": 1.78,
   "easing": "cubic_in_out",
   "pitchSpeed": 1.39
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7FAB1D08_5C95_23E7_41B2_8D2EEB16C46A"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.5,
   "image": "this.AnimatedImageResource_7C838A1B_5C95_261A_41D6_413CD51F74B7",
   "pitch": -5.2,
   "yaw": 33.04,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_7C1DA67E_5C95_2E1B_41C8_3616C2457930); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5F9D2CB5_4CF2_6D31_41B7_5BCEF2CFED01",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.5,
   "yaw": 33.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.2,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.15,
   "image": "this.AnimatedImageResource_7C822A1B_5C95_261A_41AD_C7E30E84B0E3",
   "pitch": -14.03,
   "yaw": 157.34,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_7CAB3611_5C95_21E6_41B7_A5CA7D58536B); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5AE07B89_4CF2_EBDF_41D0_0E914D04EED6",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.15,
   "yaw": 157.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.03,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.2,
   "image": "this.AnimatedImageResource_7C82EA1B_5C95_261A_41AD_06377D8E5D09",
   "pitch": -5.15,
   "yaw": 89.87,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_7C72D64F_5C95_2E79_41D4_78488851BE51); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_59A6ACB0_4C0E_6DCD_41C1_5C1B9CBD1730",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.2,
   "yaw": 89.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.15,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.09,
   "image": "this.AnimatedImageResource_7C828A1B_5C95_261A_41C2_991EAF3F1F3F",
   "pitch": -4.37,
   "yaw": 115.98,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5207670B_4C12_BCD2_41C7_91CD2C8CFC49",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.09,
   "yaw": 115.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.37,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 11.01,
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
   "yaw": 32.9,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_7C30869D_5C95_2E19_41A8_5AB73814E5D4); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_75752B26_4DF5_94D5_41BE_473EFED9DBD7",
 "data": {
  "label": "  Sala de\u000d    Cine"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.01,
   "yaw": 32.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.19,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 14.25,
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
   "yaw": 89.64,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_7C69965F_5C95_2E19_4171_9FCFA06ED8E5); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_721F4000_4DF7_94CE_41C5_C23548018D00",
 "data": {
  "label": "  \u000d   Cocina"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.25,
   "yaw": 89.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.44,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 10.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_6_0.png",
      "width": 301,
      "class": "ImageResourceLevel",
      "height": 351
     }
    ]
   },
   "pitch": -2.81,
   "yaw": 115.7,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_0F886554_4DF6_BF76_41C9_78656514EDB0",
 "data": {
  "label": " Piscinas"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.84,
   "yaw": 115.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.81,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 17.02,
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
   "yaw": 157.22,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_7C5EF630_5C95_2E27_41C1_248397462C45); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_70F91094_4DF5_F5F6_41C2_500E4A3028EC",
 "data": {
  "label": "  Sala - Centro"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.02,
   "yaw": 157.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.27,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 55.58,
 "yaw": 4.4,
 "id": "overlay_7257A9C3_4C0D_9752_41D2_10B53BCDED80",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 55.83,
 "yaw": 128.25,
 "id": "overlay_725DDFD6_4C0D_AB72_41BC_1ECF3EBC4A83",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "movements": [
  {
   "targetYaw": -82.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.88,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.11,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 135.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 57.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -2.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A5160D1_5C95_2269_41D1_2DDA51B95611"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.6,
   "image": "this.AnimatedImageResource_7C9AEA0B_5C95_21F9_41BF_DDECA21497F4",
   "pitch": -31.48,
   "yaw": -127.28,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_79A3EF4B_5C95_3E7A_4194_8F58189443F0); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5A02EA85_4C12_F5D7_41D2_8FCF819F522E",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 23.6,
   "yaw": -127.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.48,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.8,
   "image": "this.AnimatedImageResource_7C9AAA0B_5C95_21F9_41D3_772072E2D186",
   "pitch": -8.77,
   "yaw": 156.31,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6, this.camera_79209016_5C95_21EA_41D0_9EF695364389); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_59341A7B_4C15_9533_41C3_0487EA40E264",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.8,
   "yaw": 156.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.77,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.32,
   "image": "this.AnimatedImageResource_7C9D4A0B_5C95_21F9_41C2_71908AD19F00",
   "pitch": -7.13,
   "yaw": -20.63,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5156665F_4C12_9D72_41B6_A38066CA80C7",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.32,
   "yaw": -20.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.13,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.2,
   "image": "this.AnimatedImageResource_7C9D0A0B_5C95_21F9_41C4_76EEBD255350",
   "pitch": 7.22,
   "yaw": -161.79,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_7AE12083_5C95_22E9_41CD_FC5C7EAAFA12); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_52E662BC_4C13_9535_41C3_08531DC1890E",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.2,
   "yaw": -161.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.22,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 23.4,
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
   "yaw": -127.19,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_7940EF89_5C95_3EF9_41D3_0929BC25F1DE); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_715392A3_4C0D_F5D1_41A3_454BAED9273F",
 "data": {
  "label": "      Sala - Centro"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 23.4,
   "yaw": -127.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.86,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 12.11,
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
   "yaw": -161.77,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_7A8140A2_5C95_222B_41BA_F366C1EEFF3B); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7131CB8C_4C12_6BD6_41B2_B7A26C46B627",
 "data": {
  "label": "  Escalera\u000d Entrepiso"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.11,
   "yaw": -161.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.33,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 10.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_6_0.png",
      "width": 284,
      "class": "ImageResourceLevel",
      "height": 323
     }
    ]
   },
   "pitch": -5.15,
   "yaw": -20.88,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_716119CF_4C17_9752_41CD_34F0DAA56395",
 "data": {
  "label": "  Piscinas"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.2,
   "yaw": -20.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 17.81,
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
   "yaw": 156.28,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6, this.camera_7AC0F045_5C95_226E_41A4_BE23CF3A2ED9); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73B7B12B_4C16_B4D3_41BA_A0020CA60648",
 "data": {
  "label": "  Escritorio"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.81,
   "yaw": 156.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.22,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 75.68,
 "yaw": 46.6,
 "id": "overlay_7279217F_4C0D_9732_41D1_FA5340FD8914",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.7,
   "image": "this.AnimatedImageResource_7C9F6A0B_5C95_21F9_41CD_C733C9A5C99B",
   "pitch": -24.29,
   "yaw": -17.24,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC, this.camera_7960AFB8_5C95_3E27_41D5_350D21F17D76); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4CA90992_5CB7_22EA_41AD_ADA049F9006B",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.7,
   "yaw": -17.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_8_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 18.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_9_0.png",
      "width": 537,
      "class": "ImageResourceLevel",
      "height": 323
     }
    ]
   },
   "pitch": -21.35,
   "yaw": -17.24,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC, this.camera_79004FE7_5C95_3E2A_41B2_8802618A9F6B); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_530E5592_5CB5_62EB_41CF_CD34D32E693D",
 "data": {
  "label": "       Perspectiva\u000d         Nocturna"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.03,
   "yaw": -17.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_9_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "yawSpeed": 55.17,
   "easing": "cubic_in_out",
   "pitchSpeed": 27.96
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7CAB2611_5C95_21E6_41AD_D12A3BF379ED"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.85,
   "image": "this.AnimatedImageResource_7CA47A2A_5C95_263B_41AF_7FB23F5C5BC7",
   "pitch": 17.13,
   "yaw": -14.87,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_4319C4D8_5C95_2267_41BB_8EE88685DED0); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6E7D7ACC_4C72_9555_41C8_254666DCBD5A",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.85,
   "yaw": -14.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 17.13,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.2,
   "image": "this.AnimatedImageResource_7CA40A2A_5C95_263B_41D3_9A2B1C24ABEA",
   "pitch": -33.05,
   "yaw": -6.9,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_4327D536_5C95_222B_41C4_F172E7AF9296); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_689FBDC5_4C76_EF56_41D0_FDE427A56FD1",
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.2,
   "yaw": -6.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.05,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.24,
   "image": "this.AnimatedImageResource_7CA4AA2A_5C95_263B_419C_8D4C8E2F9E1A",
   "pitch": -26.36,
   "yaw": 6.63,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7CC0B575_5C95_222E_41C7_620C64BEC45A); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_68C43EA9_4C76_6DDE_41BC_6917D875D7F0",
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.24,
   "yaw": 6.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.36,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.51,
   "image": "this.AnimatedImageResource_7CA77A2A_5C95_263B_41D3_AF41C433C9D4",
   "pitch": 10.78,
   "yaw": -39.42,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_43380526_5C95_222B_41B1_6F173FFFD499); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_696D3868_4C76_955E_41D2_B78938E57E51",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.51,
   "yaw": -39.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.78,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.44,
   "image": "this.AnimatedImageResource_7CA70A2A_5C95_263B_41A3_FC36C402A91A",
   "pitch": -15.29,
   "yaw": 130.88,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_68EAA62C_4C72_BCD6_41AD_F2767561D35F",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.44,
   "yaw": 130.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.29,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 7.96,
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
   "yaw": -39.55,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_62AE8006_4C3E_94D5_4195_37AB3152888F",
 "data": {
  "label": " Habitaci\u00f3n\u000d    Master"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.96,
   "yaw": -39.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.82,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 11.69,
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
   "yaw": -6.95,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_7CD3F555_5C95_2269_41BD_4B32D1A9B00A); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_63036D8E_4C3D_AFD2_41CC_31017422F0F6",
 "data": {
  "label": "        Sala\u000d      Centro"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.69,
   "yaw": -6.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.96,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.96,
   "image": "this.AnimatedImageResource_7CA62A2A_5C95_263B_41CF_B79364749420",
   "pitch": 16.14,
   "yaw": 15.83,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_63CFCEB6_4C32_AD32_41C6_39DBCAE7E4F6",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.96,
   "yaw": 15.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 16.14,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 16.29,
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
   "yaw": 16.16,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_430284E8_5C95_2227_41D3_A8ED5AE14605); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_630263E9_4C33_9B5F_41A8_0D731596BBA0",
 "data": {
  "label": "\u000d Habitaci\u00f3n"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.29,
   "yaw": 16.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 17.52,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 16.14,
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
   "yaw": -14.82,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_430CE507_5C95_23E9_41BA_A08636AA0B27); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_63881641_4C35_9D4F_41BF_500F021033D3",
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.14,
   "yaw": -14.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 19.29,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 16.34,
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
   "yaw": 130.53,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_63647F43_4C33_AB53_41D1_F19AB5488D5A",
 "data": {
  "label": "      Calle"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.34,
   "yaw": 130.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.08,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 8.4,
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
   "yaw": 6.64,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7CCE1584_5C95_22EF_41CE_3B2B76074D10); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_638525C6_4C0D_9F52_41D1_E258508E5E91",
 "data": {
  "label": " Comedor"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.4,
   "yaw": 6.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.06,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 63.12,
 "yaw": 151.61,
 "id": "overlay_72D70213_4C0F_94F3_41B8_F09D9513D0DA",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "yawSpeed": 166.03,
   "easing": "cubic_in_out",
   "pitchSpeed": 83.13
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7D27F7C6_5C95_2E6B_41B7_C5E38F1949D0"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.72,
   "image": "this.AnimatedImageResource_7CBD4A2A_5C95_263B_41D4_FFB4D33370AD",
   "pitch": -6.62,
   "yaw": -21.6,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7EF1EBD0_5C95_2667_41CE_F9371803C5FB); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_53684693_4C76_9DF3_4181_EF2767F1A9C2",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.72,
   "yaw": -21.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.62,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.61,
   "image": "this.AnimatedImageResource_7CBD1A2A_5C95_263B_41CD_53ABFB060B84",
   "pitch": -10.64,
   "yaw": -48.23,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_7E4D9C3D_5C95_2219_41D1_D1BCDBC859E7); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6CE24BFA_4C76_EB32_41B4_9F999091A2FA",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.61,
   "yaw": -48.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.64,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.75,
   "image": "this.AnimatedImageResource_7CBDBA2A_5C95_263B_4190_7BC1B9C86E6C",
   "pitch": -5.33,
   "yaw": 15.7,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_7D744B63_5C95_262A_41D6_B57477FAA78B); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_53794FA5_4C76_6BD7_41C5_3C53F52B35DE",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.75,
   "yaw": 15.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.33,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.77,
   "image": "this.AnimatedImageResource_7CBC4A2A_5C95_263B_41CC_5065A6FA9885",
   "pitch": -4.06,
   "yaw": 47.72,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_7E8F9C0E_5C95_21FB_41CD_EF001649FBA2); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_535CC597_4C75_BFF2_418C_EBE38CA692F5",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.77,
   "yaw": 47.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.06,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.45,
   "image": "this.AnimatedImageResource_7CBCEA2A_5C95_263B_41C9_5EFD82F8FE1D",
   "pitch": 14.5,
   "yaw": 31.81,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_7DB9EB34_5C95_262E_41D7_1508EAFFE6CE); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6D90C5FD_4C72_9F36_41CE_AE11C1BB2BB1",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.45,
   "yaw": 31.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 14.5,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.04,
   "image": "this.AnimatedImageResource_7CBF7A2A_5C95_263B_41CE_629C6914A170",
   "pitch": 21.58,
   "yaw": -16.51,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_7D33EBA1_5C95_2629_41BE_9E3DCB882777); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6D8DA36E_4C72_7B55_41CD_8289197836CB",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.04,
   "yaw": -16.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 21.58,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 8.33,
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
   "yaw": -48.23,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_7E6C5C5D_5C95_221E_4192_9E54A38BCFEA); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7D0CF396_4C1E_9BF2_41C7_3F8427E9D057",
 "data": {
  "label": " Piscinas"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.33,
   "yaw": -48.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.94,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 9.01,
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
   "yaw": 47.65,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_7EAF1C1E_5C95_221B_41C1_17F83D5C1BAC); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_781F5669_4C1F_FD5F_41D1_74EDFDF4A74D",
 "data": {
  "label": "   Parrilla"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.01,
   "yaw": 47.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.9,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 8.4,
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
   "yaw": -21.76,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7E910BEF_5C95_2639_41C1_19DE72C7196E); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7FD4E63F_4C1E_BD33_41BB_EFAFFE8E89FF",
 "data": {
  "label": " Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.4,
   "yaw": -21.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.48,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 8.86,
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
   "yaw": 15.74,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_7D13AB82_5C95_26EA_41D6_69E254258E30); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_79AC6ECE_4C12_6D55_4193_56FF271E3F5E",
 "data": {
  "label": "   Pasillo"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.86,
   "yaw": 15.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.46,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 7.65,
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
   "yaw": -16.63,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_7ED1BBC0_5C95_2667_41D6_4F8C926CA42C); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_787DA558_4C12_9F7E_41CD_56E54DDE0451",
 "data": {
  "label": "   Balc\u00f3n\u000dPlanta Alta"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.65,
   "yaw": -16.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 23.75,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 7.98,
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
   "yaw": 31.67,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_7D549B43_5C95_2669_41D2_0928DC4A931E); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7FD3A82F_4C15_94D2_41D1_10DAD6C733F7",
 "data": {
  "label": "  Quincho\u000dPlanta Alta"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.98,
   "yaw": 31.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 17.29,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 62.87,
 "yaw": 89.06,
 "id": "overlay_72507ADB_4C0F_9573_41CB_7C2C12BF575F",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "blending": 0,
 "video": {
  "width": 540,
  "class": "VideoResource",
  "height": 800,
  "mp4Url": "media/video_4DC63883_564D_77EF_41D3_729FE9100318.mp4"
 },
 "hfov": 20.7,
 "autoplay": true,
 "id": "overlay_481258C5_563D_7768_4197_0EC12658EC25",
 "enabledInCardboard": true,
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
 "useHandCursor": true,
 "roll": -0.09,
 "yaw": -47.71,
 "chromaThreshold": 0.01,
 "rotationY": -0.11,
 "rotationX": -1.54,
 "videoVisibleOnStop": false,
 "data": {
  "label": "Video"
 },
 "chromaColor": "#35A3FF",
 "vfov": 30.72,
 "chromaSmoothing": 0.34,
 "distance": 50,
 "class": "VideoPanoramaOverlay"
},
{
 "movements": [
  {
   "targetYaw": 71.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -21.54,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 108.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -20.29,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 172.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -97.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -10.49,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -37.81,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.57,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77F828FC_503E_5115_41CF_04F89C2CC876"
},
{
 "movements": [
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_770279F1_503A_532F_419F_EC539FDA6F44"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 22.71,
   "easing": "cubic_in_out",
   "pitchSpeed": 11.8
  },
  {
   "targetYaw": -150.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 115.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 74.24,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7D576B43_5C95_2669_41D5_7096C31610A6"
},
{
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "yawSpeed": 47.45,
   "easing": "cubic_in_out",
   "pitchSpeed": 24.12
  },
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7FEAFCCA_5C95_227B_41D4_813F64B7B581"
},
{
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "yawSpeed": 67.14,
   "easing": "cubic_in_out",
   "pitchSpeed": 33.92
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7EAFCC1E_5C95_221B_41AA_C1DD497ADBFE"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.09,
   "image": "this.AnimatedImageResource_7C573A3A_5C95_261A_41D1_E72866A020D9",
   "pitch": -5.48,
   "yaw": 120.23,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_7CFFC5A3_5C95_2229_41C6_9B80FEEBE6B9); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_66AA9141_4C12_B74F_4182_4D5CE8470BE4",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.09,
   "yaw": 120.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.48,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.75,
   "image": "this.AnimatedImageResource_7C57DA3A_5C95_261A_41B7_5D96E85DA390",
   "pitch": -20.36,
   "yaw": 78.74,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_7C8185D2_5C95_226B_41B3_5530DE3D776A); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_661206E1_4C15_9D4F_41B1_D784E4DD7ED9",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.75,
   "yaw": 78.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.36,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "Parrilla"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.85,
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
   "yaw": -156.42,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63D94153_4C16_B772_41CC_320A7C1BAC6A",
 "maps": [
  {
   "hfov": 11.85,
   "yaw": -156.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.32,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 21.56,
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
   "yaw": 79.08,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_7CB5A5F2_5C95_222A_41B2_E9CB5EB5CA05); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_639A064F_4C15_9D53_41CC_8D0F891DEB0D",
 "data": {
  "label": "      \u000d  Deck - Piscina\u000d"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.56,
   "yaw": 79.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.22,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "      \u000d       Kitchenette\u000d"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.85,
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
   "yaw": -179.6,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_604B1A6E_4C12_B555_41B9_113B7C073FFB",
 "maps": [
  {
   "hfov": 31.85,
   "yaw": -179.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.4,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 16.19,
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
   "yaw": 120.77,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_7CEDF5C3_5C95_226A_41B4_31878A948CC0); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_615CF70F_4C0D_BCD2_41C6_F2BE939B4F65",
 "data": {
  "label": "  Balc\u00f3n de\u000d  Habitaci\u00f3n\u000d    Master\u000d"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.19,
   "yaw": 120.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.95,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 45.28,
 "yaw": -59.16,
 "id": "overlay_0D2A0CC2_4C0E_AD4D_41B5_7C511CCA84AF",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 36.87,
   "easing": "cubic_in_out",
   "pitchSpeed": 18.85
  },
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_75FAD342_5C95_266B_41C8_F75EB1158A56"
},
{
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "yawSpeed": 20.43,
   "easing": "cubic_in_out",
   "pitchSpeed": 10.67
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B5E41CB_5C95_2279_41BA_5735FBA411EE"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 14.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_0_0.png",
      "width": 440,
      "class": "ImageResourceLevel",
      "height": 312
     }
    ]
   },
   "pitch": -19.13,
   "yaw": -155.53,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7D5C7759_5C95_2E19_41CD_E3F3BD98894D); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4DB28054_5C8D_E26E_41D1_A2A9EFF76692",
 "data": {
  "label": "   Comedor"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.99,
   "yaw": -155.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.07,
   "image": "this.AnimatedImageResource_7C9EEA1B_5C95_261A_41BD_41888AE908A2",
   "pitch": -20.73,
   "yaw": -155.51,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7D772768_5C95_2E27_41C3_401F7D76080C); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4DB2A054_5C8D_E26E_41D6_403365217C61",
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.07,
   "yaw": -155.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.78,
   "image": "this.AnimatedImageResource_7C9F3A1B_5C95_261A_41B8_F370CBE6CB92",
   "pitch": -4.15,
   "yaw": -163.88,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4D083693_5C8F_6EE9_4198_A5E09AE6AE49",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.78,
   "yaw": -163.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 11.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_3_0.png",
      "width": 325,
      "class": "ImageResourceLevel",
      "height": 356
     }
    ]
   },
   "pitch": -2.62,
   "yaw": -164.01,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4D09C693_5C8F_6EE9_41CC_BA80A8AA8CB2",
 "data": {
  "label": "  Escritorio"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.72,
   "yaw": -164.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.38,
   "image": "this.AnimatedImageResource_7C9F8A1B_5C95_261A_41B8_62E4B0BB5DB2",
   "pitch": -15.88,
   "yaw": -131.04,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4D993E39_5C8D_1E26_41B6_38A2BB475CF3",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.38,
   "yaw": -131.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 10.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_5_0.png",
      "width": 302,
      "class": "ImageResourceLevel",
      "height": 312
     }
    ]
   },
   "pitch": -14.42,
   "yaw": -131,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4EA4D860_5C93_6226_41BE_05F490730C74",
 "data": {
  "label": "   Sala"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.56,
   "yaw": -131,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.65,
   "image": "this.AnimatedImageResource_7C9E5A1B_5C95_261A_41D5_3D6EA3DCBDB5",
   "pitch": -10.87,
   "yaw": -39.65,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4EA199DA_5C95_221B_41CA_307C2CFD92FA",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.65,
   "yaw": -39.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 7.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_7_0.png",
      "width": 220,
      "class": "ImageResourceLevel",
      "height": 233
     }
    ]
   },
   "pitch": -3.07,
   "yaw": -0.22,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4ECCB29C_5C95_E61F_41D2_B76939FDD4C7",
 "data": {
  "label": "  Deck"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.94,
   "yaw": -0.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.14,
   "image": "this.AnimatedImageResource_7C9E8A1B_5C95_261A_41D2_748051A5B6DA",
   "pitch": -4.58,
   "yaw": -0.16,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4EFCB093_5C97_62E9_41C4_F24F905896A0",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.14,
   "yaw": -0.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 13.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_9_0.png",
      "width": 370,
      "class": "ImageResourceLevel",
      "height": 312
     }
    ]
   },
   "pitch": -9.31,
   "yaw": -39.56,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4FD375BB_5C97_2219_41CE_5B46EE142C76",
 "data": {
  "label": "  Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.18,
   "yaw": -39.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_9_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "movements": [
  {
   "targetYaw": -20.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.01,
   "yawSpeed": 25.5,
   "easing": "cubic_in_out",
   "pitchSpeed": 13.19
  },
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78856DC4_5C95_226F_41D0_8C588EE16990"
},
{
 "movements": [
  {
   "targetYaw": -3.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.59,
   "yawSpeed": 123.49,
   "easing": "cubic_in_out",
   "pitchSpeed": 61.96
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A8120A2_5C95_222B_41CA_3EF8497CCDEF"
},
{
 "movements": [
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7870010A_503E_30FD_41BC_311867DA2A0C"
},
{
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "yawSpeed": 1.78,
   "easing": "cubic_in_out",
   "pitchSpeed": 1.39
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7F493D18_5C95_23E7_4168_DEBDC72C085E"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.44,
   "image": "this.AnimatedImageResource_7C50FA3A_5C95_261A_41BE_FC00F1C6BA6E",
   "pitch": -13.23,
   "yaw": -149.71,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_7F66FD37_5C95_2229_41D4_642570742EEB); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_649BC5B9_4C16_9F3F_41CE_03F1CF8B85B0",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.44,
   "yaw": -149.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.23,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 21.68,
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
   "yaw": -149.47,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_7F04AD57_5C95_226A_41D2_3CCB46ED56E0); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_60A2EB4F_4C35_EB53_41BB_7B4C45E778F5",
 "data": {
  "label": "  Habitaci\u00f3n\u000d     Master"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.68,
   "yaw": -149.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.12,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 7.35,
 "yaw": 138.05,
 "id": "overlay_0DB44A7A_4C0E_953D_41C6_712CBBF32DAF",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 6.85,
 "yaw": 121.21,
 "id": "overlay_0DBC62EA_4C0E_F55D_41CB_80F63DC048E7",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "yawSpeed": 49.59,
   "easing": "cubic_in_out",
   "pitchSpeed": 25.18
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7823EE7F_5C95_3E19_41CB_3544135131CF"
},
{
 "movements": [
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7703A339_503A_371F_41CA_9B68428A5900"
},
{
 "movements": [
  {
   "targetYaw": -20.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.01,
   "yawSpeed": 41.11,
   "easing": "cubic_in_out",
   "pitchSpeed": 20.96
  },
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7D13BB82_5C95_26EA_41CC_C5BAA82414CC"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.75,
   "image": "this.AnimatedImageResource_7CACDA3A_5C95_261A_41D5_DBF38171CD3B",
   "pitch": -9.71,
   "yaw": 102.02,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_46D0B9A9_5CF3_2239_41D2_F30BF1260DF9",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.75,
   "yaw": 102.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 16.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_1_0.png",
      "width": 462,
      "class": "ImageResourceLevel",
      "height": 624
     }
    ]
   },
   "pitch": -11.01,
   "yaw": -53.36,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_46D089A9_5CF3_2239_41D6_82D73B977FE5",
 "data": {
  "label": "    Balc\u00f3n"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.35,
   "yaw": -53.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.36,
   "image": "this.AnimatedImageResource_7CAF3A3A_5C95_261A_41BE_5761E16EA265",
   "pitch": -12.78,
   "yaw": -53.19,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_47E4FB00_5CF3_27E7_41D5_73431470F9AA",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.36,
   "yaw": -53.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 16.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_3_0.png",
      "width": 463,
      "class": "ImageResourceLevel",
      "height": 679
     }
    ]
   },
   "pitch": -7.6,
   "yaw": 101.97,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_470540FE_5CFD_621B_41C9_CAAC9464CEEB",
 "data": {
  "label": "     Estar\u000d     Diario"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.55,
   "yaw": 101.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   }
  }
 ]
},
{
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "yawSpeed": 55.17,
   "easing": "cubic_in_out",
   "pitchSpeed": 27.96
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7C5EE630_5C95_2E27_41D6_C9EEF656E1AA"
},
{
 "movements": [
  {
   "targetYaw": -82.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.88,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.11,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 135.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 57.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -2.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_771E9E9F_503A_3113_41CE_5824E21E1360"
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_7C95BA0B_5C95_21F9_418A_94FEB3C18F8C, this.albumitem_7C952A0B_5C95_21F9_41D3_70183B12DA52); this.loopAlbum(this.playList_7C957A0B_5C95_21F9_41CF_BFBF1F2656F9, 0)",
 "player": "this.viewer_uid7C955A0B_5C95_21F9_41A6_0C60AA7ADB30PhotoAlbumPlayer",
 "id": "albumitem_7C952A0B_5C95_21F9_41D3_70183B12DA52"
},
{
 "movements": [
  {
   "targetYaw": -3.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.59,
   "yawSpeed": 122.64,
   "easing": "cubic_in_out",
   "pitchSpeed": 61.54
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4365949A_5C95_221A_41C1_4794800F054F"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 96.9,
   "easing": "cubic_in_out",
   "pitchSpeed": 48.73
  },
  {
   "targetYaw": -58.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -116.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -8.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -143.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 112.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 1.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78C75D85_5C95_22E9_41CD_AF1783E19CD0"
},
{
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "yawSpeed": 23.96,
   "easing": "cubic_in_out",
   "pitchSpeed": 12.43
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7940FF89_5C95_3EF9_41C8_516F0D44037F"
},
{
 "mp3Url": "media/audio_76772C3C_56C3_6F18_41D4_7C4FB259877A.mp3",
 "id": "audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "oggUrl": "media/audio_76772C3C_56C3_6F18_41D4_7C4FB259877A.ogg",
 "class": "AudioResource"
},
{
 "movements": [
  {
   "targetYaw": 3.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 11.81,
   "yawSpeed": 91.68,
   "easing": "cubic_in_out",
   "pitchSpeed": 46.13
  },
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7ED06BC0_5C95_2667_41CA_700B0909F652"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 26.47,
   "easing": "cubic_in_out",
   "pitchSpeed": 13.68
  },
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7980CF1C_5C95_3E1E_41D6_4EF30EB6A928"
},
{
 "movements": [
  {
   "targetYaw": -20.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.01,
   "yawSpeed": 41.11,
   "easing": "cubic_in_out",
   "pitchSpeed": 20.96
  },
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7D745B63_5C95_262A_41D1_8A5892C4975F"
},
{
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "yawSpeed": 63.64,
   "easing": "cubic_in_out",
   "pitchSpeed": 32.17
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_743A8304_5C95_27EE_41C6_FABAD53F8BC8"
},
{
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "yawSpeed": 32.48,
   "easing": "cubic_in_out",
   "pitchSpeed": 16.67
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_430574E8_5C95_2227_41C3_719990113EB4"
},
{
 "movements": [
  {
   "targetYaw": -1.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.86,
   "yawSpeed": 1.9,
   "easing": "cubic_in_out",
   "pitchSpeed": 1.45
  },
  {
   "targetYaw": -51.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.33,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 142.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 72.48,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -1.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7C1D867E_5C95_2E1B_41D0_F58E874B3716"
},
{
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "yawSpeed": 32.23,
   "easing": "cubic_in_out",
   "pitchSpeed": 16.54
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7DED170B_5C95_2FFA_41B2_53126CF76809"
},
{
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "yawSpeed": 49.59,
   "easing": "cubic_in_out",
   "pitchSpeed": 25.18
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79C35EAE_5C95_3E3B_41D6_B8D8FD239143"
},
{
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "yawSpeed": 72.37,
   "easing": "cubic_in_out",
   "pitchSpeed": 36.52
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7CB595F2_5C95_222A_41D6_A554FB4EF14D"
},
{
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "yawSpeed": 31.59,
   "easing": "cubic_in_out",
   "pitchSpeed": 16.22
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7CD3E555_5C95_2269_41CB_E58DD9985C4D"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.25,
   "image": "this.AnimatedImageResource_7C523A3A_5C95_261A_4191_A0ED64EBD532",
   "pitch": -8.08,
   "yaw": -128.85,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_647D9114_4C12_74F5_41CF_299D6FC64B1D",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 23.25,
   "yaw": -128.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.08,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.1,
   "image": "this.AnimatedImageResource_7C52AA3A_5C95_261A_41D1_094C98943C37",
   "pitch": -5,
   "yaw": -51.34,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_7C3F5A97_5C95_26E9_41BF_91B212B79AA4); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_65D5C0C2_4C13_B54D_41C1_69BF7BCE4606",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.1,
   "yaw": -51.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.6,
   "image": "this.AnimatedImageResource_7C555A3A_5C95_261A_41D0_DBB2D3B7A271",
   "pitch": -29.25,
   "yaw": 28.54,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_7DC6EAD6_5C95_266B_41D3_1950773E7C24); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6610EADB_4C12_B572_419A_5D2ACB79AA0D",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.6,
   "yaw": 28.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.25,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 32.68,
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
   "yaw": -128.51,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_7D98EB15_5C95_27EE_41C9_475B12BF6368); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_60C4A3D0_4C0F_9B4D_4194_30763AC2589E",
 "data": {
  "label": "  Habitaci\u00f3n\u000d     Master"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 32.68,
   "yaw": -128.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.41,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 15.01,
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
   "yaw": 28.68,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_7DE1AAF5_5C95_2629_41C1_96F6B48E55BC); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6265BD1E_4C0E_6CF5_4194_D81FE8F9F4CD",
 "data": {
  "label": "     Deck\u000d"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.01,
   "yaw": 28.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.88,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 18.67,
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
   "yaw": -51.32,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_7C2ECAB7_5C95_262A_41CB_E36113258127); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_62DC11F1_4C33_F74E_41D1_2E11E02105BB",
 "data": {
  "label": "    Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.67,
   "yaw": -51.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.51,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 43.27,
 "yaw": -57.15,
 "id": "overlay_72CD9B17_4C0E_74F3_4195_54A71D7C31BA",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "backgroundColorRatios": [],
 "scrollBarWidth": 10,
 "id": "container_7C952A0B_5C95_21F9_41C1_77911EF00EE6",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.viewer_uid7C92BA0B_5C95_21F9_41CB_9573A6C37211",
  {
   "backgroundColorRatios": [],
   "scrollBarWidth": 7,
   "horizontalAlign": "left",
   "left": 0,
   "propagateClick": false,
   "paddingLeft": 0,
   "scrollBarColor": "#FFFFFF",
   "paddingRight": 0,
   "right": 0,
   "children": [
    "this.htmltext_7C951A0B_5C95_21F9_41D4_2C52689FBACE"
   ],
   "borderSize": 0,
   "scrollBarVisible": "rollOver",
   "minHeight": 20,
   "backgroundColorDirection": "vertical",
   "verticalAlign": "bottom",
   "scrollBarOpacity": 0.5,
   "bottom": 0,
   "contentOpaque": true,
   "minWidth": 20,
   "scrollBarMargin": 2,
   "backgroundColor": [],
   "class": "Container",
   "gap": 10,
   "height": "30%",
   "paddingTop": 0,
   "shadow": false,
   "paddingBottom": 0,
   "backgroundOpacity": 0.3,
   "borderRadius": 0,
   "data": {
    "name": "Container30159"
   },
   "overflow": "scroll",
   "layout": "vertical"
  },
  "this.component_7C92EA0B_5C95_21F9_41D5_1925D6096A33",
  "this.component_7C92FA0B_5C95_21F9_41D3_159B5982CBA9"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "horizontalAlign": "left",
 "backgroundColor": [],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container30158"
 },
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "yawSpeed": 63.02,
   "easing": "cubic_in_out",
   "pitchSpeed": 31.86
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7E66E891_5C95_22E9_41D3_53E2FEB8F388"
},
{
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "yawSpeed": 94.07,
   "easing": "cubic_in_out",
   "pitchSpeed": 47.32
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78627E12_5C95_21EB_41D4_46617ED85D2F"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 22.71,
   "easing": "cubic_in_out",
   "pitchSpeed": 11.8
  },
  {
   "targetYaw": -150.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 115.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 74.24,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7DB9DB34_5C95_262E_41CC_4DF0FA38EE04"
},
{
 "movements": [
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7703348F_503A_71F2_41B8_C8F2687D9078"
},
{
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "yawSpeed": 90.55,
   "easing": "cubic_in_out",
   "pitchSpeed": 45.57
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_784CFA66_5C95_262B_41BE_7EC9B533DEE4"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.13,
   "image": "this.AnimatedImageResource_7C97CA0B_5C95_21F9_41B9_013FE463EBC4",
   "pitch": -12.9,
   "yaw": -95.88,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_7E0578A1_5C95_2229_4194_CA1445CB934F); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5ED98F6B_4C0D_AB52_41BB_5E21BCD4D8B3",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.13,
   "yaw": -95.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.9,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_7C966A0B_5C95_21F9_41C5_0E512967F154",
   "pitch": -2.15,
   "yaw": -52.28,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5F9E895F_4C0E_9772_41B3_12204174EBAF",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.19,
   "yaw": -52.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.15,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.14,
   "image": "this.AnimatedImageResource_7C962A0B_5C95_21F9_41D1_2911CABEDF1F",
   "pitch": -4.19,
   "yaw": -5.58,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7F9B691E_5C95_221B_41BA_69D86DEA79CE); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5B60547E_4C16_FD32_41BE_22924F5C4F05",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.14,
   "yaw": -5.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.19,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.71,
   "image": "this.AnimatedImageResource_7C96DA0B_5C95_21F9_41CA_9B90053D27FE",
   "pitch": -2.5,
   "yaw": -70.95,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_7EB1F834_5C95_222E_41A8_5A0F7A1046FC); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_566EE523_4C36_FCD2_41CC_55AFAC6306BF",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.71,
   "yaw": -70.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.5,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.13,
   "image": "this.AnimatedImageResource_7C996A0B_5C95_21F9_41D3_C87E46A1270F",
   "pitch": -3,
   "yaw": -179.95,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12, this.camera_7F57694D_5C95_227E_41CE_7F0B36427C34); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_57B6F8D9_4C32_957F_41C9_13FC3BAD255B",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.13,
   "yaw": -179.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.43,
   "image": "this.AnimatedImageResource_7C993A0B_5C95_21F9_41BB_C03C0AD5FC4D",
   "pitch": 10.51,
   "yaw": -151.79,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_7FDFE8DF_5C95_2219_41D6_B7C3BCBEFC45); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_51280201_4C33_94CF_41D1_7D4AC88DD7AC",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.43,
   "yaw": -151.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.51,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 8.68,
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
   "yaw": -52.41,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7142457C_4C12_BF36_41C3_965C22106F02",
 "data": {
  "label": " Cocina"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.68,
   "yaw": -52.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.73,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 11.32,
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
   "yaw": -5.66,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7FB7893D_5C95_2219_41BC_D956F839DCEA); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_701A4566_4C1D_9F52_41CB_792274DA2F65",
 "data": {
  "label": "  Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.32,
   "yaw": -5.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.74,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 26.83,
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
   "yaw": 94.24,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7E4B4872_5C95_222B_41BC_1962EF6EDF6E); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_70E07E84_4C1E_ADD6_41CD_C9C9E90E20AE",
 "data": {
  "label": "         Comedor"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 26.83,
   "yaw": 94.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.47,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 6.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_10_0.png",
      "width": 190,
      "class": "ImageResourceLevel",
      "height": 401
     }
    ]
   },
   "pitch": -2.78,
   "yaw": -70.94,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_7EAF4853_5C95_226A_41D6_C3FC57EAC011); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7217DE3F_4C1E_AD33_41C0_6548D05F997F",
 "data": {
  "label": " Sala de\u000d   Cine"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.86,
   "yaw": -70.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_10_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 33
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 13.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_11_0.png",
      "width": 368,
      "class": "ImageResourceLevel",
      "height": 517
     }
    ]
   },
   "pitch": -1.54,
   "yaw": -179.95,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12, this.camera_7F72896C_5C95_223F_41CA_17B36B3E12CB); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73DD519A_4C1D_97F2_41D1_2DC7FD988A66",
 "data": {
  "label": "   Calle"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.31,
   "yaw": -179.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.54,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 15.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_12_0.png",
      "width": 446,
      "class": "ImageResourceLevel",
      "height": 622
     }
    ]
   },
   "pitch": 14.17,
   "yaw": -151.57,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_7FFD78FF_5C95_221A_41C8_2D469FB01F8D); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72CD0D72_4C13_EF32_41C8_64D446C7AB4C",
 "data": {
  "label": " Escalera\u000d Entrepiso"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.65,
   "yaw": -151.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 14.17,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 11.33,
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
   "yaw": -95.62,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_7E20A8C0_5C95_2267_41C0_606933BBF7AA); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72C14259_4C15_F57E_41BB_00CEBFD195E8",
 "data": {
  "label": "      Living"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.33,
   "yaw": -95.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.33,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 60.61,
 "yaw": -2.39,
 "id": "overlay_7241E1C2_4C32_974D_4185_D8EFCA60DDB0",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 79.2,
 "yaw": -176.73,
 "id": "overlay_724C7981_4C32_97CE_41A2_274C4D75CE46",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.51,
   "image": "this.AnimatedImageResource_7C9BAA0B_5C95_21F9_41BE_A736CA3823F2",
   "pitch": -33.27,
   "yaw": 94.52,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7E66F891_5C95_22E9_41B2_0EB98CA9B94F); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4BDBC122_56C5_D929_41A6_F195981DDB88",
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.51,
   "yaw": 94.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.27,
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
   }
  }
 ]
},
{
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "yawSpeed": 98.46,
   "easing": "cubic_in_out",
   "pitchSpeed": 49.5
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7E911BEF_5C95_2639_41C1_C14EEE851898"
},
{
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "yawSpeed": 54.92,
   "easing": "cubic_in_out",
   "pitchSpeed": 27.83
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78EE4A08_5C95_21E7_41A9_AA9FD9D91058"
},
{
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "yawSpeed": 48.33,
   "easing": "cubic_in_out",
   "pitchSpeed": 24.56
  },
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BBF11AC_5C95_223E_41D5_D28454CC1059"
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_7CE629FB_5C95_2219_4127_4F37BB047D88, this.albumitem_7CE729FB_5C95_2219_41AB_C82C816971D1); this.loopAlbum(this.playList_7CE269FB_5C95_2219_41D4_921A38FB78DC, 0)",
 "player": "this.viewer_uid7CE559FB_5C95_2219_41CB_8C913C5C584FPhotoAlbumPlayer",
 "id": "albumitem_7CE729FB_5C95_2219_41AB_C82C816971D1"
},
{
 "movements": [
  {
   "targetYaw": -3.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.59,
   "yawSpeed": 128.31,
   "easing": "cubic_in_out",
   "pitchSpeed": 64.36
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7FDFD8DF_5C95_2219_41D0_8D8BB35AA606"
},
{
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "yawSpeed": 90.55,
   "easing": "cubic_in_out",
   "pitchSpeed": 45.57
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78AC6A47_5C95_266A_41CC_891D428F5985"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 39.32,
   "easing": "cubic_in_out",
   "pitchSpeed": 20.07
  },
  {
   "targetYaw": -58.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -116.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -8.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -143.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 112.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 1.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7C68765F_5C95_2E19_41A3_D54EECBE9411"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.75,
   "image": "this.AnimatedImageResource_7CA96A2A_5C95_263B_41C3_B680F8D1F823",
   "pitch": -5.33,
   "yaw": 53.35,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4, this.camera_75BB7381_5C95_26E6_4192_3FD95A4FE7FE); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6A014951_4C73_974F_41D3_26D53DEC980E",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.75,
   "yaw": 53.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.33,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.79,
   "image": "this.AnimatedImageResource_7CA92A2A_5C95_263B_41B6_314119664132",
   "pitch": -3.71,
   "yaw": -87.45,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_7559F3A0_5C95_2626_41A9_B97BF56ED678); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_64272CF1_4C72_6D4F_41CD_2DAE74C3F5A5",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.79,
   "yaw": -87.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.71,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.52,
   "image": "this.AnimatedImageResource_7CA9DA2A_5C95_263B_41C1_2CFC97352DC7",
   "pitch": -28.45,
   "yaw": 126.55,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_4365A49A_5C95_221A_41C4_0E6CFB3A20B6); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_64C8A2FD_4C0F_9537_41C5_B4AF39D9D9A8",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 24.52,
   "yaw": 126.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.45,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 15.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_3_0.png",
      "width": 431,
      "class": "ImageResourceLevel",
      "height": 989
     }
    ]
   },
   "pitch": -6.01,
   "yaw": 53.05,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_63C06466_4C0F_9D52_41C9_6732EF408B14",
 "data": {
  "label": " Habitaci\u00f3n\u000d    Frente"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.44,
   "yaw": 53.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 36
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 20.51,
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
   "yaw": 126.23,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_436E34B9_5C95_2219_41D5_4AA2004A6DD8); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_639391F7_4C0E_B732_41CC_40443DBB4B79",
 "data": {
  "label": "    Escalera\u000d   Entrepiso"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.51,
   "yaw": 126.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.02,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 12.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_5_0.png",
      "width": 352,
      "class": "ImageResourceLevel",
      "height": 576
     }
    ]
   },
   "pitch": -5.53,
   "yaw": -150.28,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80, this.camera_7598B361_5C95_2629_41B0_B3C65BBA0DB3); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7E5D4DA6_4C12_6FD2_41D0_4F6C9247ADD1",
 "data": {
  "label": " Habitaci\u00f3n\u000d    Frente"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.64,
   "yaw": -150.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.53,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 9.86,
 "yaw": -76.75,
 "id": "overlay_7243A042_4C0F_B552_4173_029AA7306C65",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.41,
   "image": "this.AnimatedImageResource_7CAB4A3A_5C95_261A_41D3_06833FA122B0",
   "pitch": -7.88,
   "yaw": -150.21,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80, this.camera_75889371_5C95_2629_41D6_F0D01EF32302); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_451124A4_5CF5_222F_41D5_399BB656DFA0",
 "data": {
  "label": "Circle Arrow 02 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.41,
   "yaw": -150.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 13.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_7_0.png",
      "width": 379,
      "class": "ImageResourceLevel",
      "height": 620
     }
    ]
   },
   "pitch": -3.05,
   "yaw": -87.31,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_437C748A_5C95_22FB_41D2_35667D22EA17); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_47D2F307_5CF7_27EA_41AD_74CE8DEE3970",
 "data": {
  "label": " Habitaci\u00f3n\u000d    Master"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.64,
   "yaw": -87.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.38,
   "image": "this.AnimatedImageResource_7CB49A2A_5C95_263B_41B6_E701D4D40A12",
   "pitch": -14.93,
   "yaw": -20.74,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_7DF036EB_5C95_2E39_41AC_62FE41D284D1); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_55BD891B_4C12_F4F2_41BF_BD7A099FA4FB",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.38,
   "yaw": -20.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.93,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.74,
   "image": "this.AnimatedImageResource_7CB72A2A_5C95_263B_41D1_848C54E6303A",
   "pitch": -5.61,
   "yaw": 42.62,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_7D86971A_5C95_2E1B_41CF_9D95380EBEB0); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_569D5C53_4C13_ED72_41C5_56F2E1168FED",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.74,
   "yaw": 42.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.61,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.76,
   "image": "this.AnimatedImageResource_7CB7DA2A_5C95_263B_41AD_AA92C4C8AA76",
   "pitch": -4.45,
   "yaw": 88.31,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7C2766BD_5C95_2E1E_4181_86BB8EE3DA2D); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_55344675_4C12_7D37_41CA_0C7A84DACAAA",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.76,
   "yaw": 88.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.45,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 9.47,
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
   "yaw": 88.14,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7DDA26CC_5C95_2E7F_41C9_B09D386B4421); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_79858F87_4C0D_ABD3_41C2_6BD4B90B4286",
 "data": {
  "label": "  Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.47,
   "yaw": 88.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.08,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 16.32,
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
   "yaw": -20.84,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_7DED270B_5C95_2FFA_41C6_D9AA76218F3B); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7A5E25AC_4C0D_9FD5_41A7_29C3FBE038B8",
 "data": {
  "label": "       Parrilla"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.32,
   "yaw": -20.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.12,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 9.17,
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
   "yaw": 42.63,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_7DA0D73A_5C95_2E1A_41D5_5BD4771B7346); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7ABCF3A7_4DF3_FBD3_41D0_D18E2BE7D6F6",
 "data": {
  "label": "  Deck"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.17,
   "yaw": 42.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.17,
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
   }
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "yawSpeed": 20.43,
   "easing": "cubic_in_out",
   "pitchSpeed": 10.67
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B7F61EA_5C95_223B_41D2_BE4C02A6CAC4"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.67,
   "image": "this.AnimatedImageResource_7C804A1B_5C95_261A_41D0_3331DF6F3FF1",
   "pitch": -7.98,
   "yaw": -67.58,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7FAB0D08_5C95_23E7_41C1_A98886B66D4F); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5AB33241_4C16_F54F_419A_1A82626E06AC",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.67,
   "yaw": -67.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.98,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 16.84,
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
   "yaw": -67.63,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7F492D18_5C95_23E7_41D7_100ED8A65209); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_779BAA9C_4DF2_75F6_41D3_3255A4E1C04A",
 "data": {
  "label": "   Comedor"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.84,
   "yaw": -67.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.81,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 41.51,
 "yaw": -74.99,
 "id": "overlay_724AC826_4C0D_94D2_41C0_AB29E3F1E825",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 36.49,
 "yaw": 4.65,
 "id": "overlay_724D3C57_4C0D_ED73_41CD_8425355074D8",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 38,
 "yaw": 82.27,
 "id": "overlay_7277C163_4C0D_F752_41C2_7921673C330A",
 "bleachingDistance": 0.4
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 47.04,
 "yaw": 176.73,
 "id": "overlay_727CA71C_4C0D_FCF6_41C8_60EF23AE255E",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "movements": [
  {
   "targetYaw": -51.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.33,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 142.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 72.48,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -1.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7E0AFC7C_5C95_221E_41D1_DE17D88F29E8"
},
{
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "yawSpeed": 94.07,
   "easing": "cubic_in_out",
   "pitchSpeed": 47.32
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78024E51_5C95_3E66_41D6_4C7602C491B1"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_7C93BA0B_5C95_21F9_41C1_E407B79D2AA3",
   "pitch": 1.85,
   "yaw": -2.15,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_7B5E51CB_5C95_2279_41CE_9C0A37C4B341); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4722F8F2_5746_CFEB_41B6_CF6FB682FC5D",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.2,
   "yaw": -2.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.85,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 7.05,
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
   "yaw": -2.25,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_7B7C81EA_5C95_223B_41CB_BC0CA343180E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_472958F3_5746_CFE9_4190_A06C79E7A940",
 "data": {
  "label": "   Entrada\u000d"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.05,
   "yaw": -2.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.48,
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
   }
  }
 ]
},
{
 "rollOverDisplay": false,
 "items": [
  {
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
   "hfov": 3.25,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.92,
   "yaw": 7.41
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_58FCE818_5746_CE27_41D5_6E5EC77B8BFA, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_7C92DA0B_5C95_21F9_41B6_9ABDAF6EFD33, '90%', '90%', true, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_472968F3_5746_CFE9_41C0_E4651E9C12EB",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.25,
   "yaw": 7.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.92,
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
   }
  }
 ]
},
{
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 5.5,
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
   "yaw": 7.47,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_77F36E2E_502A_3135_41CC_6EE71EAFE57A); this.showPopupMedia(this.window_589E2836_5746_CE6B_41AD_BBAC5BB986BB, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_7C957A0B_5C95_21F9_41CF_BFBF1F2656F9, '90%', '90%', true, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_472928F3_5746_CFE9_41D2_3453D059BC7B",
 "data": {
  "label": "\u00c1lbum de\u000d   Fotos"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.5,
   "yaw": 7.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.15,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
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
   "hfov": 3.62,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.06,
   "roll": 0,
   "yaw": 37.61
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_472938F3_5746_CFE9_41D3_199BB64C45DA",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.62,
   "yaw": 37.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.06,
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
   }
  }
 ]
},
{
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "yawSpeed": 37.44,
   "easing": "cubic_in_out",
   "pitchSpeed": 19.14
  },
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_74DCE238_5C95_2627_41D1_EDE0C4BEC9A3"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 96.9,
   "easing": "cubic_in_out",
   "pitchSpeed": 48.73
  },
  {
   "targetYaw": -58.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -116.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -8.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -143.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 112.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 1.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7F24FD76_5C95_222A_41D0_BC77B6776919"
},
{
 "movements": [
  {
   "targetYaw": -82.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.88,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.11,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 135.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 57.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -2.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7ABE70C2_5C95_226A_41B8_B19D6DFE2DBA"
},
{
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "yawSpeed": 63.64,
   "easing": "cubic_in_out",
   "pitchSpeed": 32.17
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_741A22F4_5C95_262F_41BC_2E4F741E514B"
},
{
 "movements": [
  {
   "targetYaw": -164.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.33,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 53.11,
   "easing": "cubic_in_out",
   "pitchSpeed": 26.93
  },
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7E4C7C3D_5C95_2219_41BB_4602116EDE52"
},
{
 "movements": [
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B"
},
{
 "movements": [
  {
   "targetYaw": -51.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.33,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 142.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 72.48,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -1.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.98,
   "image": "this.AnimatedImageResource_7C515A3A_5C95_261A_41B5_5FCC92775E26",
   "pitch": -3.62,
   "yaw": 146.58,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_7F12E98B_5C95_22F9_41BF_1ADF96C31F01); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6A5E0209_4C0E_94DF_417D_46B9DFD108C3",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.98,
   "yaw": 146.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.62,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 16.23,
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
   "yaw": 146.8,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_7F30B9AB_5C95_223A_41B3_345462BFD2BE); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6261EA3E_4C3F_B535_41D0_801F1A3A3344",
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.23,
   "yaw": 146.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.42,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 30.96,
 "yaw": 34.29,
 "id": "overlay_7243A9E8_4C0E_775E_41A5_59C64522A4DF",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "yawSpeed": 108.22,
   "easing": "cubic_in_out",
   "pitchSpeed": 54.36
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7DC6FAD6_5C95_266B_41D3_113B70F31891"
},
{
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "yawSpeed": 108.22,
   "easing": "cubic_in_out",
   "pitchSpeed": 54.36
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7DE18AF5_5C95_2629_41D5_DC39C28EEC92"
},
{
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "yawSpeed": 34.8,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.82
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7CCE0584_5C95_22EF_41AA_6B8664D30B46"
},
{
 "movements": [
  {
   "targetYaw": 3.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 11.81,
   "yawSpeed": 74.6,
   "easing": "cubic_in_out",
   "pitchSpeed": 37.63
  },
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7CFFB5A3_5C95_2229_41D5_7D6DFC4519E8"
},
{
 "movements": [
  {
   "targetYaw": -20.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.01,
   "yawSpeed": 25.5,
   "easing": "cubic_in_out",
   "pitchSpeed": 13.19
  },
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78E52DA5_5C95_222E_41C8_9DA765D6AEBD"
},
{
 "movements": [
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77D188BB_503E_5113_4169_313A25054DA6"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.71,
   "image": "this.AnimatedImageResource_7CA04A2A_5C95_263B_41A4_C3695EFF561B",
   "pitch": -7.02,
   "yaw": -0.69,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_78AC7A47_5C95_266A_41C9_942DF2E24CFF); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6DA7B985_4C73_97D6_41C8_FAF959F094CC",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.71,
   "yaw": -0.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.02,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.83,
   "image": "this.AnimatedImageResource_7CA0EA2A_5C95_263B_41CE_09EAC33828FE",
   "pitch": -1.75,
   "yaw": -56.59,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_78EE5A08_5C95_21E7_41C9_B04E32C6987A); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6FA18F6B_4C72_EB52_418D_A4752C2B79FF",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.83,
   "yaw": -56.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.75,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.01,
   "image": "this.AnimatedImageResource_7CA0AA2A_5C95_263B_41D5_BC98709084A0",
   "pitch": -4.51,
   "yaw": -80.64,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6D9129AB_4C72_97D2_41B3_BC9D00327413",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.01,
   "yaw": -80.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.51,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.65,
   "image": "this.AnimatedImageResource_7CA32A2A_5C95_263B_41B0_1EF935494596",
   "pitch": -11.83,
   "yaw": -92.35,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_78D059CA_5C95_227A_41C1_5E83EC201429); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6ED1C9D5_4C7E_9776_41CD_EA10811A7BB1",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.65,
   "yaw": -92.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.83,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.11,
   "image": "this.AnimatedImageResource_7CA31A2A_5C95_263B_41D6_91E989E3242B",
   "pitch": -2.7,
   "yaw": -108.67,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6FC82723_4C7D_BCD2_41C6_ED142E41D1F5",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.11,
   "yaw": -108.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.7,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 12.95,
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
   "yaw": -0.52,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_784C1A66_5C95_262B_41CD_38E11AA11E91); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_630303B6_4C15_9B35_41A7_0FE1D2CE67BA",
 "data": {
  "label": "     Deck"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.95,
   "yaw": -0.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.23,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 7.32,
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
   "yaw": -108.74,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7C2FC9D8_4C17_F77D_41C5_180CBDEF7BDE",
 "data": {
  "label": " Cocina"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.32,
   "yaw": -108.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.38,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 13.29,
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
   "yaw": -56.45,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_788F8A28_5C95_2626_41CF_A962DBC7E40C); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7E11B26A_4C16_9552_41A3_28556ECCB81C",
 "data": {
  "label": "    Parrilla"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.29,
   "yaw": -56.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.21,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 10.22,
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
   "yaw": -92.51,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_78F189E9_5C95_2239_41B4_A17AE9E0211C); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7D6E9EA6_4C12_EDD5_41C5_9E91663C2E02",
 "data": {
  "label": " Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.22,
   "yaw": -92.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.75,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 6.84,
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
   "yaw": -80.79,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7D0ECB6B_4C13_EB53_41BC_4ED41580DB7D",
 "data": {
  "label": " Pasillo"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.84,
   "yaw": -80.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.96,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 63.37,
 "yaw": -45.09,
 "id": "overlay_0D1F1C5B_4C0F_ED73_41C2_D93B0423D556",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "blending": 0,
 "video": {
  "width": 466,
  "class": "VideoResource",
  "height": 690,
  "mp4Url": "media/video_76BF82AE_56C2_FB39_41D0_DF287E74780C.mp4"
 },
 "hfov": 102.03,
 "autoplay": true,
 "id": "overlay_779DF13E_56C3_3919_41A5_CE0412598D4D",
 "enabledInCardboard": true,
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
 "useHandCursor": true,
 "roll": 0.3,
 "yaw": -0.9,
 "chromaThreshold": 0.02,
 "rotationY": -1.01,
 "rotationX": -36.13,
 "videoVisibleOnStop": false,
 "data": {
  "label": "Video"
 },
 "chromaColor": "#3A9BFF",
 "vfov": 139.59,
 "chromaSmoothing": 0.32,
 "distance": 50,
 "class": "VideoPanoramaOverlay"
},
{
 "movements": [
  {
   "targetYaw": -1.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.86,
   "yawSpeed": 1.9,
   "easing": "cubic_in_out",
   "pitchSpeed": 1.45
  },
  {
   "targetYaw": -51.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.33,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 142.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 72.48,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -1.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7C33769D_5C95_2E19_41D4_B2356B5CF8C4"
},
{
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "yawSpeed": 8.54,
   "easing": "cubic_in_out",
   "pitchSpeed": 4.75
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7F9B491E_5C95_221B_41BE_BA7B68DF2DE0"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.83,
   "image": "this.AnimatedImageResource_7CAA3A3A_5C95_261A_41D1_C784B342F5D6",
   "pitch": -7.08,
   "yaw": -40.92,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_7D2707C6_5C95_2E6B_41C0_8E4657A33820); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6BD98EFF_4C0D_AD32_41D3_178505AC51C0",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.83,
   "yaw": -40.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.08,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.65,
   "image": "this.AnimatedImageResource_7CAADA3A_5C95_261A_41C0_162220CB1DA8",
   "pitch": -8.28,
   "yaw": 11.3,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70, this.camera_7EFAB7F5_5C95_2E29_41CE_3B24918E5570); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_64978149_4C12_F75E_41C0_FA527622DCC1",
 "data": {
  "label": "Circle Arrow 02 Right"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.65,
   "yaw": 11.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.28,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.92,
   "image": "this.AnimatedImageResource_7CAD7A3A_5C95_261A_41A4_AF7841F29DFA",
   "pitch": -4.9,
   "yaw": -113.86,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_7D10A788_5C95_2EE6_41D0_1576C5562889); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_64834E7A_4C17_ED3D_41D1_C0DF7AD568DB",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.92,
   "yaw": -113.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.9,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 17.04,
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
   "yaw": -113.66,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_7D0AF7A7_5C95_2E29_41D6_57A97ED28C86); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7D7A7CEF_4C37_ED52_41C4_A5D88A210E28",
 "data": {
  "label": "\u000d    Balc\u00f3n"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.04,
   "yaw": -113.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.61,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 17.01,
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
   "yaw": -40.92,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_7EC1E7E5_5C95_2E29_41A8_2F675B422BE5); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_630C59D7_4C35_B772_41AF_C1BF4A5F8B81",
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.01,
   "yaw": -40.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.36,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 16.95,
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
   "yaw": 11.68,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70, this.camera_7E97A814_5C95_21EF_41A1_3B78AC5B98F3); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7C27B320_4C32_F4CE_41D1_558125506B6C",
 "data": {
  "label": "\u000d\u000d     Ba\u00f1o"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.95,
   "yaw": 11.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.77,
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
   }
  }
 ]
},
{
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 10.36,
 "yaw": -119.71,
 "id": "overlay_72B4E25A_4C0E_9572_41CA_E94D7E32E9E4",
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "movements": [
  {
   "targetYaw": -150.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 115.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 74.24,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7C6BA396_503E_D715_41CB_1B97B732862D"
},
{
 "movements": [
  {
   "targetYaw": -3.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.59,
   "yawSpeed": 128.31,
   "easing": "cubic_in_out",
   "pitchSpeed": 64.36
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7FFD68FF_5C95_221A_41CB_54943846DE13"
},
{
 "movements": [
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77007457_503E_7113_41B9_B797530AF0B3"
},
{
 "movements": [
  {
   "targetYaw": 4.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "yawSpeed": 8.34,
   "easing": "cubic_in_out",
   "pitchSpeed": 4.65
  },
  {
   "targetYaw": -164.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.33,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_75BB6381_5C95_26E6_41AE_841B7D0B2A14"
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_7C951A0B_5C95_21F9_41D4_2C52689FBACE, this.albumitem_7C956A0B_5C95_21F9_41C5_2B136D5DC4C2); this.loopAlbum(this.playList_7C92DA0B_5C95_21F9_41B6_9ABDAF6EFD33, 0)",
 "player": "this.viewer_uid7C92BA0B_5C95_21F9_41CB_9573A6C37211PhotoAlbumPlayer",
 "id": "albumitem_7C956A0B_5C95_21F9_41C5_2B136D5DC4C2"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 13.81,
   "easing": "cubic_in_out",
   "pitchSpeed": 7.38
  },
  {
   "targetYaw": -150.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 115.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 74.24,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7C2EAAB7_5C95_262A_41C2_4718DFF5E645"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.77,
   "image": "this.AnimatedImageResource_7CB9CA2A_5C95_263B_41D3_8B66166A6323",
   "pitch": -3.63,
   "yaw": 98.57,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_741A42F4_5C95_262F_41D5_ECD6615A4324); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_539238FD_4C72_9536_41C1_9735137A6A8B",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.77,
   "yaw": 98.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.63,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.77,
   "image": "this.AnimatedImageResource_7CB99A2A_5C95_263B_419A_82658D84CF02",
   "pitch": -3.86,
   "yaw": 144.72,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_749DB277_5C95_2629_41C1_1CCFB8B2ACFA); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_539524B3_4C72_9D33_41BF_0168CD1AF8AE",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.77,
   "yaw": 144.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.86,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.42,
   "image": "this.AnimatedImageResource_7CB83A2A_5C95_263B_41C8_B393E9673AB8",
   "pitch": -13.33,
   "yaw": -169.64,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_745AA2B5_5C95_2629_41C0_BFBD1E1B48B4); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_52780C30_4C76_6CCE_41C1_B9F2E8174A50",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.42,
   "yaw": -169.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.33,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.35,
   "image": "this.AnimatedImageResource_7CB8DA2A_5C95_263B_41D0_81BCE8D0F210",
   "pitch": -4.25,
   "yaw": 130.71,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_75DA7323_5C95_262A_41CB_EEB12587DD86); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6F8B9EB2_4C77_ADCD_41D1_02693D57AF37",
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.35,
   "yaw": 130.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.25,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 11.15,
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
   "yaw": 98.46,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_743A9304_5C95_27EE_41AA_8A67E3205E02); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_78EBC3AE_4C17_FBD5_41CF_7454C300F3F8",
 "data": {
  "label": "     Deck"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.15,
   "yaw": 98.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.08,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 8.79,
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
   "yaw": 130.72,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_75FAE342_5C95_266B_41D0_FDD4E3A9167E); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7AA7DA94_4C16_95F6_41C3_C928FF8C5DF3",
 "data": {
  "label": " Piscinas"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.79,
   "yaw": 130.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.17,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 16.43,
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
   "yaw": -169.76,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_747AA2D5_5C95_266E_41CE_57843E33BFF5); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7982F986_4C12_97D2_41AF_EBA9BB403852",
 "data": {
  "label": "       Pasillo"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.43,
   "yaw": -169.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.6,
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
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 9.33,
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
   "yaw": 144.51,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_74BCF296_5C95_26EB_41C0_DC243F4E9D05); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_74F737A5_4C13_9BD6_41C7_666E6CB897D9",
 "data": {
  "label": " Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.33,
   "yaw": 144.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.87,
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
   }
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5,
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_tcap0",
 "distance": 50,
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
 },
 "inertia": false
},
{
 "movements": [
  {
   "targetYaw": 3.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 11.81,
   "yawSpeed": 91.68,
   "easing": "cubic_in_out",
   "pitchSpeed": 46.13
  },
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7D33FBA1_5C95_2629_41C4_F23CFDF135FB"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 36.87,
   "easing": "cubic_in_out",
   "pitchSpeed": 18.85
  },
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_75DA6323_5C95_262A_41A4_9CDAC95D44EF"
},
{
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "yawSpeed": 61.91,
   "easing": "cubic_in_out",
   "pitchSpeed": 31.31
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_74BCD296_5C95_26EB_4190_E5B4CB7FA06D"
},
{
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "yawSpeed": 32.48,
   "easing": "cubic_in_out",
   "pitchSpeed": 16.67
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_430CD507_5C95_23E9_41D1_A05F8C4E0660"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 52.59,
   "easing": "cubic_in_out",
   "pitchSpeed": 26.67
  },
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7D98CB15_5C95_27EE_41D6_DF43B345AB60"
},
{
 "movements": [
  {
   "targetYaw": 92.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.76,
   "yawSpeed": 32.23,
   "easing": "cubic_in_out",
   "pitchSpeed": 16.54
  },
  {
   "targetYaw": 7.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -22.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -66.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -167.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7DF026EB_5C95_2E39_41D1_F29988276A93"
},
{
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "yawSpeed": 153,
   "easing": "cubic_in_out",
   "pitchSpeed": 76.64
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7D771768_5C95_2E27_41C4_9E02F5B2DA00"
},
{
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "yawSpeed": 166.03,
   "easing": "cubic_in_out",
   "pitchSpeed": 83.13
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7EC1D7E5_5C95_2E29_419D_B6D70C0FD522"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 26.47,
   "easing": "cubic_in_out",
   "pitchSpeed": 13.68
  },
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79E3BEED_5C95_3E3E_41C4_50B13E0B75AF"
},
{
 "movements": [
  {
   "targetYaw": -3.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.59,
   "yawSpeed": 123.49,
   "easing": "cubic_in_out",
   "pitchSpeed": 61.96
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AE10083_5C95_22E9_41AE_898BB4A497AC"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 36.44,
   "easing": "cubic_in_out",
   "pitchSpeed": 18.64
  },
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4338F526_5C95_222B_41D4_2DE5C1AE0A89"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 109.47,
   "easing": "cubic_in_out",
   "pitchSpeed": 54.98
  },
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_437C648A_5C95_22FB_41D3_AA38865A1E28"
},
{
 "movements": [
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4"
},
{
 "movements": [
  {
   "targetYaw": -20.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.01,
   "yawSpeed": 62.33,
   "easing": "cubic_in_out",
   "pitchSpeed": 31.52
  },
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_745A82B5_5C95_2629_41C5_DF374382E561"
},
{
 "movements": [
  {
   "targetYaw": -58.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -116.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -8.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -143.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 112.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 1.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_771E90F9_503A_511F_41C2_B9C904B98D71"
},
{
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "yawSpeed": 153,
   "easing": "cubic_in_out",
   "pitchSpeed": 76.64
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7D5C6759_5C95_2E19_41BF_BA41B6697DFD"
},
{
 "movements": [
  {
   "targetYaw": -38.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.96,
   "yawSpeed": 31.59,
   "easing": "cubic_in_out",
   "pitchSpeed": 16.22
  },
  {
   "targetYaw": 35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 67.96,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 177.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -149.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -65.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -9.23,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_4327C536_5C95_222B_41D2_6476A602BB4A"
},
{
 "movements": [
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -29.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -25.81,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -153.37,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.51,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 133.78,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 71.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -34.35,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77024918_503A_F31E_41AF_34F62C64FEBB"
},
{
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "yawSpeed": 47.45,
   "easing": "cubic_in_out",
   "pitchSpeed": 24.12
  },
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B9EE18D_5C95_22FE_41D4_B9F1F613F0FD"
},
{
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "yawSpeed": 19.89,
   "easing": "cubic_in_out",
   "pitchSpeed": 10.4
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B3C5219_5C95_2619_41BE_0A5CB689A5A8"
},
{
 "movements": [
  {
   "targetYaw": 3.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 11.81,
   "yawSpeed": 74.6,
   "easing": "cubic_in_out",
   "pitchSpeed": 37.63
  },
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7CEDE5C3_5C95_226A_41C9_64C7DD99CB3C"
},
{
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "yawSpeed": 34.8,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.82
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7CC09575_5C95_222E_41B2_549907823CB5"
},
{
 "movements": [
  {
   "targetYaw": 9.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.91,
   "yawSpeed": 21.15,
   "easing": "cubic_in_out",
   "pitchSpeed": 11.03
  },
  {
   "targetYaw": 71.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -21.54,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 108.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -20.29,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 172.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -97.85,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -10.49,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -37.81,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.57,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7EFAA7F5_5C95_2E29_41C2_2F36C7F5EDB7"
},
{
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "yawSpeed": 81.27,
   "easing": "cubic_in_out",
   "pitchSpeed": 40.95
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7DA0C73A_5C95_2E1A_41C9_AE4E535B0FE1"
},
{
 "movements": [
  {
   "targetYaw": -1.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.86,
   "yawSpeed": 1.9,
   "easing": "cubic_in_out",
   "pitchSpeed": 1.45
  },
  {
   "targetYaw": -51.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.33,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 142.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 72.48,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -1.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7EAF3853_5C95_226A_41D5_811DD97B2D1F"
},
{
 "movements": [
  {
   "targetYaw": -3.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.59,
   "yawSpeed": 122.64,
   "easing": "cubic_in_out",
   "pitchSpeed": 61.54
  },
  {
   "targetYaw": 39.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -33.1,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -117.95,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.36,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -40.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 16.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 17.9,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_436E24B9_5C95_2219_41C7_970F9013468D"
},
{
 "backgroundColorRatios": [],
 "scrollBarWidth": 10,
 "id": "container_7CE739FB_5C95_2219_41A5_AA1A9AC5A857",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.viewer_uid7CE559FB_5C95_2219_41CB_8C913C5C584F",
  {
   "backgroundColorRatios": [],
   "scrollBarWidth": 7,
   "horizontalAlign": "left",
   "left": 0,
   "propagateClick": false,
   "paddingLeft": 0,
   "scrollBarColor": "#FFFFFF",
   "paddingRight": 0,
   "right": 0,
   "children": [
    "this.htmltext_7CE629FB_5C95_2219_4127_4F37BB047D88"
   ],
   "borderSize": 0,
   "scrollBarVisible": "rollOver",
   "minHeight": 20,
   "backgroundColorDirection": "vertical",
   "verticalAlign": "bottom",
   "scrollBarOpacity": 0.5,
   "bottom": 0,
   "contentOpaque": true,
   "minWidth": 20,
   "scrollBarMargin": 2,
   "backgroundColor": [],
   "class": "Container",
   "gap": 10,
   "height": "30%",
   "paddingTop": 0,
   "shadow": false,
   "paddingBottom": 0,
   "backgroundOpacity": 0.3,
   "borderRadius": 0,
   "data": {
    "name": "Container30153"
   },
   "overflow": "scroll",
   "layout": "vertical"
  },
  "this.component_7CE829FB_5C95_2219_41CD_4AE0C961C6FB",
  "this.component_7CE839FB_5C95_2219_417D_5B4BDAB43BDE"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "horizontalAlign": "left",
 "backgroundColor": [],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container30152"
 },
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "yawSpeed": 72.37,
   "easing": "cubic_in_out",
   "pitchSpeed": 36.52
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7C8075D2_5C95_226B_41C0_1B34BE7EDFFF"
},
{
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "yawSpeed": 36.81,
   "easing": "cubic_in_out",
   "pitchSpeed": 18.82
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7F12D98B_5C95_22F9_41CD_AEC0ECFB9409"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 132.58,
   "easing": "cubic_in_out",
   "pitchSpeed": 66.48
  },
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7F66DD37_5C95_2229_41D0_3CE27EA2F9C1"
},
{
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "yawSpeed": 81.27,
   "easing": "cubic_in_out",
   "pitchSpeed": 40.95
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7D86871A_5C95_2E1B_41C6_B337E16A05AC"
},
{
 "movements": [
  {
   "targetYaw": 3.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 11.81,
   "yawSpeed": 30.01,
   "easing": "cubic_in_out",
   "pitchSpeed": 15.44
  },
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7D0AD7A7_5C95_2E29_41D5_72A5331B3FBC"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 12.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_1_HS_0_0.png",
      "width": 352,
      "class": "ImageResourceLevel",
      "height": 575
     }
    ]
   },
   "pitch": -7.39,
   "yaw": -105.15,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80, this.camera_7BFF716D_5C95_2239_41C6_8DBB00A6A242); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_466CC9D9_5CFE_E219_41C6_48DA7E6ACE59",
 "data": {
  "label": " Habitaci\u00f3n"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.58,
   "yaw": -105.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_1_HS_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10,
   "image": "this.AnimatedImageResource_7CAE0A3A_5C95_261A_41D2_BAFA326579F2",
   "pitch": -5.78,
   "yaw": -105.26,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80, this.camera_7BEC817D_5C95_2219_41B2_58D0DA9E9DBD); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_40CC987A_5CFF_621A_41C8_873C6BA0FFB4",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10,
   "yaw": -105.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 13.81,
   "easing": "cubic_in_out",
   "pitchSpeed": 7.38
  },
  {
   "targetYaw": -150.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -178.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 115.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 74.24,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.02,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7C3F2A97_5C95_26E9_41C5_C91D751BB984"
},
{
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "yawSpeed": 64.01,
   "easing": "cubic_in_out",
   "pitchSpeed": 32.36
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78F069E9_5C95_2239_41D1_02A5836F95D1"
},
{
 "movements": [
  {
   "targetYaw": 3.27,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 11.81,
   "yawSpeed": 30.01,
   "easing": "cubic_in_out",
   "pitchSpeed": 15.44
  },
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7D109788_5C95_2EE6_41D4_4039C56B2252"
},
{
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "yawSpeed": 98.46,
   "easing": "cubic_in_out",
   "pitchSpeed": 49.5
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7EF1FBD0_5C95_2667_41C3_909C502C3DF3"
},
{
 "movements": [
  {
   "targetYaw": -24.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 27.13,
   "yawSpeed": 105.38,
   "easing": "cubic_in_out",
   "pitchSpeed": 52.95
  },
  {
   "targetYaw": 31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 132.52,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 16.39,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -26.32,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -47.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -10.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 29.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78454DF3_5C95_222A_41CC_667970CBB158"
},
{
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "yawSpeed": 19.89,
   "easing": "cubic_in_out",
   "pitchSpeed": 10.4
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B1F41FA_5C95_221B_41C7_25F16FA9BE6F"
},
{
 "backgroundColorRatios": [],
 "scrollBarWidth": 10,
 "id": "container_7C95FA0B_5C95_21F9_41A1_48C8A317A992",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.viewer_uid7C955A0B_5C95_21F9_41A6_0C60AA7ADB30",
  {
   "backgroundColorRatios": [],
   "scrollBarWidth": 7,
   "horizontalAlign": "left",
   "left": 0,
   "propagateClick": false,
   "paddingLeft": 0,
   "scrollBarColor": "#FFFFFF",
   "paddingRight": 0,
   "right": 0,
   "children": [
    "this.htmltext_7C95BA0B_5C95_21F9_418A_94FEB3C18F8C"
   ],
   "borderSize": 0,
   "scrollBarVisible": "rollOver",
   "minHeight": 20,
   "backgroundColorDirection": "vertical",
   "verticalAlign": "bottom",
   "scrollBarOpacity": 0.5,
   "bottom": 0,
   "contentOpaque": true,
   "minWidth": 20,
   "scrollBarMargin": 2,
   "backgroundColor": [],
   "class": "Container",
   "gap": 10,
   "height": "30%",
   "paddingTop": 0,
   "shadow": false,
   "paddingBottom": 0,
   "backgroundOpacity": 0.3,
   "borderRadius": 0,
   "data": {
    "name": "Container30165"
   },
   "overflow": "scroll",
   "layout": "vertical"
  },
  "this.component_7C940A0B_5C95_21F9_41B9_83066F122FF5",
  "this.component_7C941A0B_5C95_21F9_419E_CD614435EB27"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "horizontalAlign": "left",
 "backgroundColor": [],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container30164"
 },
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "yawSpeed": 49.52,
   "easing": "cubic_in_out",
   "pitchSpeed": 25.15
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7C2756BD_5C95_2E1E_41BD_9422DCAB3637"
},
{
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "yawSpeed": 61.91,
   "easing": "cubic_in_out",
   "pitchSpeed": 31.31
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_749DA277_5C95_2629_41D6_3DA80B99E937"
},
{
 "movements": [
  {
   "targetYaw": -20.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.01,
   "yawSpeed": 62.33,
   "easing": "cubic_in_out",
   "pitchSpeed": 31.52
  },
  {
   "targetYaw": -114.43,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 163.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 100.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_747A92D5_5C95_266E_41BD_17A032456CE2"
},
{
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.04,
   "yawSpeed": 37.44,
   "easing": "cubic_in_out",
   "pitchSpeed": 19.14
  },
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_74FD9258_5C95_2666_41AD_66D4948CACC6"
},
{
 "movements": [
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77F1399A_503E_331D_41C0_4C44E9F003DB"
},
{
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "yawSpeed": 49.52,
   "easing": "cubic_in_out",
   "pitchSpeed": 25.15
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7DDA16CC_5C95_2E7F_41D0_1E9B3BAC1AE3"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 109.47,
   "easing": "cubic_in_out",
   "pitchSpeed": 54.98
  },
  {
   "targetYaw": -40.57,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -112.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 85.54,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -22.3,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 0.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7559E3A0_5C95_2626_41D1_E7100C6206C5"
},
{
 "movements": [
  {
   "targetYaw": -87.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.27,
   "yawSpeed": 36.81,
   "easing": "cubic_in_out",
   "pitchSpeed": 18.82
  },
  {
   "targetYaw": -65.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -61.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.97,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 123.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -19.78,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -151.61,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7F30A9AB_5C95_223A_41CA_E532E3115D5D"
},
{
 "movements": [
  {
   "targetYaw": 56.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 140.06,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -177.49,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -110.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -41.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.06,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC"
},
{
 "movements": [
  {
   "targetYaw": -23.11,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.75,
   "yawSpeed": 63.02,
   "easing": "cubic_in_out",
   "pitchSpeed": 31.86
  },
  {
   "targetYaw": 13.94,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -14.26,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -162.92,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -94.08,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7E4B2872_5C95_222B_41CE_B8417C000EE5"
},
{
 "movements": [
  {
   "targetYaw": -5.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -0.25,
   "yawSpeed": 64.01,
   "easing": "cubic_in_out",
   "pitchSpeed": 32.36
  },
  {
   "targetYaw": -65.69,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -146.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 158.65,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 86.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -17.27,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.84,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78D039CA_5C95_227A_41A1_DACE3A4A9029"
},
{
 "movements": [
  {
   "targetYaw": -79.76,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -113.93,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -11.24,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -160.66,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 5.59,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 145.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.44,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 59.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.83,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_770D5914_503A_D315_41C7_BD98E4CD29E4"
},
{
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "yawSpeed": 53.11,
   "easing": "cubic_in_out",
   "pitchSpeed": 26.93
  },
  {
   "targetYaw": -110.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -72.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -49.36,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 47.79,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 53.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": 134.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  },
  {
   "targetYaw": -173.22,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "yawSpeed": 33.25,
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 5000,
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7E6C2C5D_5C95_221E_41C1_BA7937FDCF37"
},
{
 "propagateClick": true,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "width": 110,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 110,
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "layout": "horizontal"
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "width": "91.304%",
 "class": "Container",
 "gap": 3,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "overflow": "scroll",
 "layout": "vertical"
},
{
 "maxHeight": 95,
 "propagateClick": false,
 "id": "Image_5EF9A31F_502E_7713_41B1_155B9E9559BD",
 "left": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_5EF9A31F_502E_7713_41B1_155B9E9559BD.png",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "class": "Image",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "Image2705"
 },
 "maxWidth": 250
},
{
 "maxHeight": 2,
 "propagateClick": true,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "bottom": 53,
 "minWidth": 1,
 "height": 2,
 "class": "Image",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "data": {
  "name": "white line"
 },
 "maxWidth": 3000
},
{
 "propagateClick": true,
 "data": {
  "name": "-button set container"
 },
 "scrollBarWidth": 10,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 20,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": 1199,
 "horizontalAlign": "left",
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 51,
 "gap": 3,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "layout": "horizontal"
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_402E3BC3_565F_296F_41AF_19D956287FE7",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": "44.915%",
 "width": "8.685%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container4584"
 },
 "overflow": "scroll",
 "layout": "horizontal"
},
{
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "3%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "right": "3%",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "top": "3%",
 "scrollBarOpacity": 0.5,
 "bottom": "3%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 0,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "propagateClick": false
},
{
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "3%",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "paddingLeft": 0,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": 1557.46,
 "horizontalAlign": "right",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "3%",
 "scrollBarOpacity": 0.5,
 "bottom": "90.63%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 10,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "layout": "vertical"
},
{
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "3%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "right": "3%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "top": "3%",
 "scrollBarOpacity": 0.5,
 "bottom": "3%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 0,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "overflow": "visible",
 "layout": "vertical",
 "propagateClick": false
},
{
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "3%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "right": "3%",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "top": "3%",
 "scrollBarOpacity": 0.5,
 "bottom": "3%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "propagateClick": false
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "3%",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "right": "3%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "3%",
 "scrollBarOpacity": 0.5,
 "bottom": "90%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 10,
 "paddingTop": 10,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "layout": "vertical"
},
{
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_6B7B3538_502A_54D0_41D0_9A6D5FB5A723",
 "left": "3%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "right": "3%",
 "children": [
  "this.Container_6B7B7538_502A_54D0_41B6_8F7020C59B3D"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "top": "3%",
 "scrollBarOpacity": 0.5,
 "bottom": "3%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 0,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "propagateClick": true
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_6B7BD538_502A_54D0_41CC_674161DF5902",
 "left": "3%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "right": "3%",
 "children": [
  "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "bottom": "90%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "3%",
 "gap": 0,
 "class": "Container",
 "paddingTop": 5,
 "shadow": false,
 "paddingBottom": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "layout": "vertical"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C8D3A1B_5C95_261A_41D3_2693A91F5994",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C8D8A1B_5C95_261A_41D3_1719D5AA5806",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C8CFA1B_5C95_261A_4199_AA330CAB1C2B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB27A1B_5C95_261A_41CA_A405FBA7F509",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB21A1B_5C95_261A_41C5_E0C5F365B67B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB32A1B_5C95_261A_41B5_ECBD81A7219D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB3EA1B_5C95_261A_41C8_D7785E8E6E9F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB38A1B_5C95_261A_41D3_F4E787AD6151",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB22A1B_5C95_261A_41D0_57573C1B07E1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C89BA1B_5C95_261A_41D4_EBF89F2E1996",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C884A1B_5C95_261A_41C6_FDDE75AAFB97",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C8B2A1B_5C95_261A_41CB_A5021C01A7EF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C8B9A1B_5C95_261A_41C2_6868CC8A4872",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C872A1B_5C95_261A_41D3_217A5E9F9068",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C862A1B_5C95_261A_41B0_DA845531731F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C86DA1B_5C95_261A_41CF_E95086130DE9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C8FCA1B_5C95_261A_41D6_9C05AC1F71A5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C8E7A1B_5C95_261A_41C2_DD6AB53841ED",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB1EA1B_5C95_261A_41C3_9340C3080A5E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB18A1B_5C95_261A_41D0_B3D3688C5C51",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB05A1B_5C95_261A_41BE_05962FFA4CAF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C838A1B_5C95_261A_41D6_413CD51F74B7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C822A1B_5C95_261A_41AD_C7E30E84B0E3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C82EA1B_5C95_261A_41AD_06377D8E5D09",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C828A1B_5C95_261A_41C2_991EAF3F1F3F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C9AEA0B_5C95_21F9_41BF_DDECA21497F4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C9AAA0B_5C95_21F9_41D3_772072E2D186",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C9D4A0B_5C95_21F9_41C2_71908AD19F00",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C9D0A0B_5C95_21F9_41C4_76EEBD255350",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C9F6A0B_5C95_21F9_41CD_C733C9A5C99B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA47A2A_5C95_263B_41AF_7FB23F5C5BC7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA40A2A_5C95_263B_41D3_9A2B1C24ABEA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA4AA2A_5C95_263B_419C_8D4C8E2F9E1A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA77A2A_5C95_263B_41D3_AF41C433C9D4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA70A2A_5C95_263B_41A3_FC36C402A91A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA62A2A_5C95_263B_41CF_B79364749420",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CBD4A2A_5C95_263B_41D4_FFB4D33370AD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CBD1A2A_5C95_263B_41CD_53ABFB060B84",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CBDBA2A_5C95_263B_4190_7BC1B9C86E6C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CBC4A2A_5C95_263B_41CC_5065A6FA9885",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CBCEA2A_5C95_263B_41C9_5EFD82F8FE1D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CBF7A2A_5C95_263B_41CE_629C6914A170",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C573A3A_5C95_261A_41D1_E72866A020D9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C57DA3A_5C95_261A_41B7_5D96E85DA390",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C9EEA1B_5C95_261A_41BD_41888AE908A2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C9F3A1B_5C95_261A_41B8_F370CBE6CB92",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C9F8A1B_5C95_261A_41B8_62E4B0BB5DB2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C9E5A1B_5C95_261A_41D5_3D6EA3DCBDB5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_6_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C9E8A1B_5C95_261A_41D2_748051A5B6DA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_8_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C50FA3A_5C95_261A_41BE_FC00F1C6BA6E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CACDA3A_5C95_261A_41D5_DBF38171CD3B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CAF3A3A_5C95_261A_41BE_5761E16EA265",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "viewerArea": "this.viewer_uid7C955A0B_5C95_21F9_41A6_0C60AA7ADB30",
 "id": "viewer_uid7C955A0B_5C95_21F9_41A6_0C60AA7ADB30PhotoAlbumPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C523A3A_5C95_261A_4191_A0ED64EBD532",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C52AA3A_5C95_261A_41D1_094C98943C37",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C555A3A_5C95_261A_41D0_DBB2D3B7A271",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid7C92BA0B_5C95_21F9_41CB_9573A6C37211",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "class": "ViewerArea",
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea30157"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "htmltext_7C951A0B_5C95_21F9_41D4_2C52689FBACE",
 "propagateClick": false,
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "borderSize": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "width": "100%",
 "class": "HTMLText",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingTop": 5,
 "shadow": false,
 "paddingBottom": 5,
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "visible": false,
 "html": "",
 "data": {
  "name": "HTMLText30160"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "component_7C92EA0B_5C95_21F9_41D5_1925D6096A33",
 "left": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "horizontalAlign": "center",
 "minHeight": 0,
 "verticalAlign": "middle",
 "top": "45%",
 "iconURL": "skin/album_left.png",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "class": "IconButton",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "IconButton30161"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "component_7C92FA0B_5C95_21F9_41D3_159B5982CBA9",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/album_right.png",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, 1)",
 "top": "45%",
 "class": "IconButton",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "IconButton30162"
 },
 "cursor": "hand"
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C97CA0B_5C95_21F9_41B9_013FE463EBC4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C966A0B_5C95_21F9_41C5_0E512967F154",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C962A0B_5C95_21F9_41D1_2911CABEDF1F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C96DA0B_5C95_21F9_41CA_9B90053D27FE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C996A0B_5C95_21F9_41D3_C87E46A1270F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C993A0B_5C95_21F9_41BB_C03C0AD5FC4D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C9BAA0B_5C95_21F9_41BE_A736CA3823F2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_14_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "viewerArea": "this.viewer_uid7CE559FB_5C95_2219_41CB_8C913C5C584F",
 "id": "viewer_uid7CE559FB_5C95_2219_41CB_8C913C5C584FPhotoAlbumPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA96A2A_5C95_263B_41C3_B680F8D1F823",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA92A2A_5C95_263B_41B6_314119664132",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA9DA2A_5C95_263B_41C1_2CFC97352DC7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CAB4A3A_5C95_261A_41D3_06833FA122B0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB49A2A_5C95_263B_41B6_E701D4D40A12",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB72A2A_5C95_263B_41D1_848C54E6303A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB7DA2A_5C95_263B_41AD_AA92C4C8AA76",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C804A1B_5C95_261A_41D0_3331DF6F3FF1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C93BA0B_5C95_21F9_41C1_E407B79D2AA3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7C515A3A_5C95_261A_41B5_5FCC92775E26",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA04A2A_5C95_263B_41A4_C3695EFF561B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA0EA2A_5C95_263B_41CE_09EAC33828FE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA0AA2A_5C95_263B_41D5_BC98709084A0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA32A2A_5C95_263B_41B0_1EF935494596",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA31A2A_5C95_263B_41D6_91E989E3242B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CAA3A3A_5C95_261A_41D1_C784B342F5D6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CAADA3A_5C95_261A_41C0_162220CB1DA8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CAD7A3A_5C95_261A_41A4_AF7841F29DFA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "viewerArea": "this.viewer_uid7C92BA0B_5C95_21F9_41CB_9573A6C37211",
 "id": "viewer_uid7C92BA0B_5C95_21F9_41CB_9573A6C37211PhotoAlbumPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB9CA2A_5C95_263B_41D3_8B66166A6323",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB99A2A_5C95_263B_419A_82658D84CF02",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB83A2A_5C95_263B_41C8_B393E9673AB8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CB8DA2A_5C95_263B_41D0_81BCE8D0F210",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid7CE559FB_5C95_2219_41CB_8C913C5C584F",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "class": "ViewerArea",
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea30151"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "htmltext_7CE629FB_5C95_2219_4127_4F37BB047D88",
 "propagateClick": false,
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "borderSize": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "width": "100%",
 "class": "HTMLText",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingTop": 5,
 "shadow": false,
 "paddingBottom": 5,
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "visible": false,
 "html": "",
 "data": {
  "name": "HTMLText30154"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "component_7CE829FB_5C95_2219_41CD_4AE0C961C6FB",
 "left": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "horizontalAlign": "center",
 "minHeight": 0,
 "verticalAlign": "middle",
 "top": "45%",
 "iconURL": "skin/album_left.png",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "class": "IconButton",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "IconButton30155"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "component_7CE839FB_5C95_2219_417D_5B4BDAB43BDE",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/album_right.png",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, 1)",
 "top": "45%",
 "class": "IconButton",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "IconButton30156"
 },
 "cursor": "hand"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CAE0A3A_5C95_261A_41D2_BAFA326579F2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid7C955A0B_5C95_21F9_41A6_0C60AA7ADB30",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "class": "ViewerArea",
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea30163"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "htmltext_7C95BA0B_5C95_21F9_418A_94FEB3C18F8C",
 "propagateClick": false,
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "borderSize": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "width": "100%",
 "class": "HTMLText",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingTop": 5,
 "shadow": false,
 "paddingBottom": 5,
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "visible": false,
 "html": "",
 "data": {
  "name": "HTMLText30166"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "component_7C940A0B_5C95_21F9_41B9_83066F122FF5",
 "left": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "horizontalAlign": "center",
 "minHeight": 0,
 "verticalAlign": "middle",
 "top": "45%",
 "iconURL": "skin/album_left.png",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "class": "IconButton",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "IconButton30167"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "id": "component_7C941A0B_5C95_21F9_419E_CD614435EB27",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/album_right.png",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, 1)",
 "top": "45%",
 "class": "IconButton",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "IconButton30168"
 },
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 60,
 "horizontalAlign": "center",
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "height": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "image button menu"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareTwitter('https://sr1.visitapy.com')",
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareFacebook('https://sr1.visitapy.com')",
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button house info"
 },
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": 54,
 "iconHeight": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "INFO",
 "height": 40,
 "shadowBlurRadius": 15,
 "class": "Button",
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, true, 0, null, null, false)",
 "fontStyle": "normal",
 "backgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "iconWidth": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button panorama list"
 },
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": 107,
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "PERSPECTIVAS",
 "height": 40,
 "shadowBlurRadius": 15,
 "class": "Button",
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "fontStyle": "normal",
 "backgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button location"
 },
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": 83,
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "UBICACI\u00d3N",
 "height": 40,
 "shadowBlurRadius": 15,
 "class": "Button",
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "fontStyle": "normal",
 "backgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button photoalbum"
 },
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": 55,
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "FOTOS",
 "height": 40,
 "shadowBlurRadius": 15,
 "class": "Button",
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.showPopupMedia(this.window_73465F18_502E_CF1D_41D3_CDAB91BFC330, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_7CE269FB_5C95_2219_41D4_921A38FB78DC, '90%', '90%', true, false)",
 "fontStyle": "normal",
 "backgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button realtor"
 },
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": 83,
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "CONTACTO",
 "height": 40,
 "shadowBlurRadius": 15,
 "class": "Button",
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
 "fontStyle": "normal",
 "backgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "bold"
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Image_475656B5_506E_3117_41A0_63C52AAB81EA"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "width": "85%",
 "class": "Container",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "propagateClick": false,
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.51,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "50%",
 "class": "Container",
 "gap": 0,
 "height": "100%",
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "layout": "vertical"
},
{
 "transparencyActive": false,
 "maxHeight": 40,
 "propagateClick": false,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 40,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "mode": "push",
 "minWidth": 40,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "height": "100%",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 40
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 60,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "height": 60,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailWidth": 220,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 30,
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "center",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "itemThumbnailOpacity": 1,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "minWidth": 1,
 "itemLabelFontFamily": "Montserrat",
 "itemPaddingLeft": 3,
 "itemMaxWidth": 1000,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "backgroundColor": [
  "#000000"
 ],
 "itemOpacity": 1,
 "selectedItemLabelFontColor": "#04A3E1",
 "height": "91.025%",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "backgroundOpacity": 0.05,
 "shadow": false,
 "itemThumbnailBorderRadius": 10,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 30,
 "itemMinHeight": 50,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "class": "ThumbnailGrid",
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemVerticalAlign": "top",
 "itemLabelFontColor": "#666666",
 "itemHeight": 156,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "gap": 26,
 "itemBackgroundColorDirection": "vertical",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailHeight": 125,
 "paddingTop": 0,
 "itemThumbnailShadow": false,
 "paddingBottom": 0,
 "borderRadius": 5,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelGap": 7,
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "width": "99.97%",
 "class": "Container",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "transparencyActive": false,
 "maxHeight": 40,
 "propagateClick": false,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 40,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "mode": "push",
 "minWidth": 40,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "height": "100%",
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 40
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_6B7B7538_502A_54D0_41B6_8F7020C59B3D",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#0069A3",
 "paddingRight": 0,
 "children": [
  "this.Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.51,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "99.97%",
 "class": "Container",
 "gap": 0,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "layout": "vertical"
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "right": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "12px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 1,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "bottom": 0,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "maxHeight": 907,
 "propagateClick": false,
 "id": "Image_475656B5_506E_3117_41A0_63C52AAB81EA",
 "left": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_475656B5_506E_3117_41A0_63C52AAB81EA.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "class": "Image",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "data": {
  "name": "Image6016"
 },
 "maxWidth": 1322
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "horizontalAlign": "right",
 "width": "100%",
 "class": "Container",
 "gap": 0,
 "height": 60,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "layout": "horizontal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.79,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "height": "87.625%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "layout": "vertical"
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 20,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 60,
 "top": "-2.56%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "74.423%",
 "width": "86.335%",
 "class": "HTMLText",
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.36vh;font-family:'Arimo';\">PERSPECTIVAS</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 40,
 "propagateClick": false,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 40,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "bottom": 12,
 "mode": "push",
 "minWidth": 40,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "height": "100%",
 "width": "100%",
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 40
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "propagateClick": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderSize": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.914933481306!2d-57.50898168457854!3d-25.2397899838764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzIzLjIiUyA1N8KwMzAnMjQuNSJX!5e0!3m2!1ses-419!2spy!4v1581896704972!5m2!1ses-419!2spy",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "insetBorder": false,
 "top": "0%",
 "class": "WebFrame",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "propagateClick": true,
 "id": "Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "Image24645"
 }
},
{
 "propagateClick": false,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "89.701%",
 "width": "100%",
 "class": "HTMLText",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.14vh;font-family:'Arimo';\">Residencia en</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.37vh;font-family:'Arimo';\">Rakiura Country</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">En el barrio privado m\u00e1s seguro y codiciado de Asunci\u00f3n. La zona del m\u00e1s alto nivel y de una comunidad excelente.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\">Superficie construida de 600m2.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\"><B>Planta alta:</B></SPAN><SPAN STYLE=\"font-size:1.79vh;\"> 4 dormitorios en suite con piso de madera de lapacho trabajado, el dormitorio matrimonial con vestidor y ba\u00f1o con hidromasaje, amplia terraza con parrilla y kichenette.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\"><B>Planta Baja: </B></SPAN><SPAN STYLE=\"font-size:1.79vh;\">Amplio living comedor social, comedor y estar diario integrado de 15x9 mts aprox, sala de cine, gimnasio, doble piscina con deck de madera, quincho equipado con vinero y visicooler, cocina equipada y amoblada, sauna a vapor, hermoso jard\u00edn, cochera para 4 veh\u00edculos, </SPAN><SPAN STYLE=\"font-size:1.79vh;\"><I>Incluye todos los beneficios del club Rakiura</I></SPAN><SPAN STYLE=\"font-size:1.79vh;\">.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "data": {
  "name": "Button"
 },
 "paddingRight": 0,
 "fontFamily": "Bebas Neue Bold",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "fontSize": "3vh",
 "label": "WhatsApp",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#00CC00"
 ],
 "shadowBlurRadius": 6,
 "class": "Button",
 "gap": 5,
 "iconBeforeLabel": true,
 "height": "9%",
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
 "fontStyle": "normal",
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#00CC33"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.75,
 "borderRadius": 10,
 "rollOverBackgroundOpacity": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "46%",
 "fontWeight": "normal"
}],
 "width": "100%",
 "layout": "absolute"
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
