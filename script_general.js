(function(){
	var script = {
 "mouseWheelEnabled": true,
 "borderRadius": 0,
 "defaultVRPointer": "laser",
 "scripts": {
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = undefined; if(mediaDispatcher){ var playListsWithMedia = this.getPlayListsWithMedia(mediaDispatcher, true); playListDispatcher = playListsWithMedia.indexOf(playList) != -1 ? playList : (playListsWithMedia.length > 0 ? playListsWithMedia[0] : undefined); } if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } item.bind('begin', onBeginFunction, self); this.executeFunctionWhenChange(playList, index, disposeCallback);  },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback, asBackground){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = {'audio': audio, 'asBackground': asBackground || false}; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareSocial": function(socialID, url, deepLink){  if(url == undefined) { url = deepLink ? location.href : location.href.split(location.search||location.hash||/[?#]/)[0]; } else if(deepLink) { url += location.hash; } url = (function(id){ switch(id){ case 'fb': return 'https://www.facebook.com/sharer/sharer.php?u='+url; case 'wa': return 'https://api.whatsapp.com/send/?text='+encodeURIComponent(url); case 'tw': return 'https://twitter.com/intent/tweet?source=webclient&url='+url; default: return undefined; } })(socialID); this.openLink(url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData) audio = audioData.audio; } if(audio.get('state') == 'playing') audio.pause(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios).map(function(v) { return v.audio })); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setOverlayBehaviour": function(overlay, media, action, preventDoubleClick){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(preventDoubleClick){ if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 1000); } }; if(preventDoubleClick && window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getFirstPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData){ audio = audioData.audio; delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "registerTextVariable": function(obj){  var property = (function() { switch (obj.get('class')) { case 'Label': return 'text'; case 'Button': case 'BaseButton': return 'label'; case 'HTMLText': return 'html'; } })(); if (property == undefined) return; var re = new RegExp('\\{\\{\\s*(\\w+)\\s*\\}\\}', 'g'); var text = obj.get(property); var data = obj.get('data') || {}; data[property] = text; obj.set('data', data); var updateLabel = function(vars) { var text = data[property]; for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) { var dispatcher = dispatchers[j]; var index = dispatcher.get('selectedIndex'); if (index >= 0) { var srcPropArray = info.src.split('.'); var src = dispatcher.get('items')[index]; if(src == undefined || (info.itemCondition !== undefined && !info.itemCondition.call(this, src))) continue; for (var z = 0; z < srcPropArray.length; ++z) src = 'get' in src ? src.get(srcPropArray[z]) : src[srcPropArray[z]]; text = text.replace(info.replace, src); } } } if(text != data[property]) obj.set(property, text); }; var vars = []; var addVars = function(dispatchers, eventName, src, replace, itemCondition) { vars.push({ 'dispatchers': dispatchers, 'eventName': eventName, 'src': src, 'replace': replace, 'itemCondition': itemCondition }); }; var viewerAreaItemCondition = function(item) { var player = item.get('player'); return player !== undefined && player.get('viewerArea') == this.MainViewer; }; while (null != (result = re.exec(text))) { switch (result[1]) { case 'title': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.label', result[0], viewerAreaItemCondition); break; case 'subtitle': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.data.subtitle', result[0], viewerAreaItemCondition); break; } } if (vars.length > 0) { var func = updateLabel.bind(this, vars); for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) dispatchers[j].bind(info.eventName, func, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext, true); }; playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "registerKey": function(key, value){  window[key] = value; },
  "stopGlobalAudios": function(onlyForeground){  var audios = window.currentGlobalAudios; var self = this; if(audios){ Object.keys(audios).forEach(function(key){ var data = audios[key]; if(!onlyForeground || (onlyForeground && !data.asBackground)) { self.stopGlobalAudio(data.audio); } }); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; } return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "keepCompVisible": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getFirstPlayListWithMedia": function(media, onlySelected){  var playLists = this.getPlayListsWithMedia(media, onlySelected); return playLists.length > 0 ? playLists[0] : undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback, stopBackgroundAudio){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } var src = this.playGlobalAudio(audio, endCallback); if(stopBackgroundAudio === true){ var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); } return src; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListsWithMedia": function(media, onlySelected){  var result = []; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) result.push(playList); } return result; },
  "_initItemWithComps": function(playList, index, components, eventName, visible, effectToApply, delay, restoreStateAt){  var item = playList.get('items')[index]; var registerVisibility = restoreStateAt > 0; var rootPlayer = this.rootPlayer; var cloneEffect = function(visible) { var klass = effectToApply ? effectToApply.get('class') : undefined; var effect = undefined; switch(klass) { case 'FadeInEffect': case 'FadeOutEffect': effect = rootPlayer.createInstance(visible ? 'FadeInEffect' : 'FadeOutEffect'); break; case 'SlideInEffect': case 'SlideOutEffect': effect = rootPlayer.createInstance(visible ? 'SlideInEffect' : 'SlideOutEffect'); break; } if(effect){ effect.set('duration', effectToApply.get('duration')); effect.set('easing', effectToApply.get('easing')); if(klass.indexOf('Slide') != -1) effect.set(visible ? 'from' : 'to', effectToApply.get(visible ? 'from' : 'to')); } return effect; }; var endFunc = function() { for(var i = 0, count = components.length; i<count; ++i) { var component = components[i]; if(restoreStateAt > 0){ this.setComponentVisibility(component, !visible, 0, cloneEffect(!visible)); } else { var key = 'visibility_' + component.get('id'); if(this.existsKey(key)) { if(this.getKey(key)) this.setComponentVisibility(component, true, 0, cloneEffect(true)); else this.setComponentVisibility(component, false, 0, cloneEffect(false)); this.unregisterKey(key); } } } item.unbind('end', endFunc, this); if(addMediaEndEvent) media.unbind('end', endFunc, this); }; var stopFunc = function() { item.unbind('stop', stopFunc, this, true); item.unbind('stop', stopFunc, this); item.unbind('begin', stopFunc, this, true); item.unbind('begin', stopFunc, this); for(var i = 0, count = components.length; i<count; ++i) { this.keepCompVisible(components[i], false); } }; var addEvent = function(eventName, delay, restoreStateAt){ var changeFunc = function(){ var changeVisibility = function(component, visible, effect) { rootPlayer.setComponentVisibility(component, visible, delay, effect, visible ? 'showEffect' : 'hideEffect', false); if(restoreStateAt > 0){ var time = delay + restoreStateAt + (effect != undefined ? effect.get('duration') : 0); rootPlayer.setComponentVisibility(component, !visible, time, cloneEffect(!visible), visible ? 'hideEffect' : 'showEffect', true); } }; for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; if(visible == 'toggle'){ if(!component.get('visible')) changeVisibility(component, true, cloneEffect(true)); else changeVisibility(component, false, cloneEffect(false)); } else { changeVisibility(component, visible, cloneEffect(visible)); } } item.unbind(eventName, changeFunc, this); }; item.bind(eventName, changeFunc, this) }; if(eventName == 'begin'){ for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; this.keepCompVisible(component, true); if(registerVisibility) { var key = 'visibility_' + component.get('id'); this.registerKey(key, component.get('visible')); } } item.bind('stop', stopFunc, this, true); item.bind('stop', stopFunc, this); item.bind('begin', stopFunc, this, true); item.bind('begin', stopFunc, this); if(registerVisibility){ item.bind('end', endFunc, this); var media = item.get('media'); var addMediaEndEvent = media.get('loop') != undefined && !(media.get('loop')); if(addMediaEndEvent) media.bind('end', endFunc, this); } } else if(eventName == 'end' && restoreStateAt > 0){ addEvent('begin', restoreStateAt, 0); restoreStateAt = 0; } if(eventName != undefined) addEvent(eventName, delay, restoreStateAt); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getKey": function(key){  return window[key]; },
  "_getPlayListsWithViewer": function(viewer){  var playLists = this.getByClassName('PlayList'); var containsViewer = function(playList) { var items = playList.get('items'); for(var j=items.length-1; j>=0; --j) { var item = items[j]; var player = item.get('player'); if(player !== undefined && player.get('viewerArea') == viewer) return true; } return false; }; for(var i=playLists.length-1; i>=0; --i) { if(!containsViewer(playLists[i])) playLists.splice(i, 1); } return playLists; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "existsKey": function(key){  return key in window; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "vrPolyfillScale": 0.6,
 "width": "100%",
 "left": 577.55,
 "gap": 10,
 "children": [
  "this.MainViewer",
  "this.Image_13196006_51DA_2CB3_4191_F03898441520",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B"
 ],
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "layout": "absolute",
 "desktopMipmappingEnabled": false,
 "start": "this.playAudioList([this.audio_40902BBE_4F98_F5B3_417E_215EADC2E939, this.audio_41072FBA_4F99_2DB3_41A8_8B142830B0D2, this.audio_415957D2_4F99_1DF3_41B4_57B956E9370A, this.audio_4163BD09_4F99_7251_41A9_48527994202E, this.audio_40850CBA_4F99_13B3_41C9_B1DC0184F0CE, this.audio_40A5CE2D_4F99_2E51_41CF_F805BC23EB54, this.audio_40D48334_4F99_F6B7_41B6_51185E4DCB63]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist]); var self = this; this.autotriggerAtStart(this.mainPlayList, function(){ self.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D.trigger('click') }, true); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 20,
 "downloadEnabled": false,
 "paddingBottom": 0,
 "class": "Player",
 "definitions": [{
 "idleSequence": "this.sequence_7853176B_6BC5_6DAC_41CE_A6B2835488C2",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -22.66,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7853176B_6BC5_6DAC_41CE_A6B2835488C2",
 "id": "camera_7853076B_6BC5_6DAC_41C6_AEE360E5653E",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_78913225_6BC5_67A4_41D3_9AEDEDBC15BB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 131.77,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_78913225_6BC5_67A4_41D3_9AEDEDBC15BB",
 "id": "camera_7890D225_6BC5_67A4_41A7_F2FA6961BF7C",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_79DE95C7_6BC5_6CE5_41DA_6090B68132E0",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -168.7,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79DE95C7_6BC5_6CE5_41DA_6090B68132E0",
 "id": "camera_79DE85C6_6BC5_6CE7_41B2_9D9A140D83D9",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7A3C459A_6BC5_6D6F_41CF_08CD42F3B787",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -168.7,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A3C459A_6BC5_6D6F_41CF_08CD42F3B787",
 "id": "camera_7A3C759A_6BC5_6D6F_41AA_89AE70437100",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7B5FF40D_6BC5_6365_41D0_C377A41CFA7C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -137.38,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B5FF40D_6BC5_6365_41D0_C377A41CFA7C",
 "id": "camera_7B5FE40D_6BC5_6365_4196_5162375618B1",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_793296D7_6BC5_6CE5_41BD_FB04D06A5E38",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -132.28,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_793296D7_6BC5_6CE5_41BD_FB04D06A5E38",
 "id": "camera_7932B6D7_6BC5_6CE5_41B1_45D34DF0A7B5",
 "timeToIdle": 5000
},
{
 "hfov": 360,
 "label": "Planta Alta - Habitaci\u00f3n Master",
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -149.71,
   "yaw": 11.3,
   "distance": 1,
   "panorama": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -149.71,
   "yaw": 11.68,
   "distance": 1,
   "panorama": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -128.51,
   "yaw": -113.86,
   "distance": 1,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -128.51,
   "yaw": -113.66,
   "distance": 1,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -87.45,
   "yaw": -40.92,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -87.45,
   "yaw": -40.92,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "maximumAngle": 359.5,
 "pitch": -0.75,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_76772C3C_56C3_6F18_41D4_7C4FB259877A",
 "yaw": -47.23,
 "data": {
  "label": "water sounds"
 }
},
{
 "idleSequence": "this.sequence_78F5D712_6BC5_6D7F_41B9_3C55BC814A4A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 52.72,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_78F5D712_6BC5_6D7F_41B9_3C55BC814A4A",
 "id": "camera_78F5F712_6BC5_6D7F_41D9_6BD7B93287FA",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0",
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
 "class": "Photo",
 "height": 1000
},
{
 "idleSequence": "this.sequence_7B49790B_6BC5_656D_41D2_55CCBDE50DDD",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -90.13,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B49790B_6BC5_656D_41D2_55CCBDE50DDD",
 "id": "camera_7B49690B_6BC5_656D_41C8_F5246433B699",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7A5DC016_6BC5_6367_41B0_3CB25D589C7C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 87.65,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A5DC016_6BC5_6367_41B0_3CB25D589C7C",
 "id": "camera_7A5DF016_6BC5_6367_41D3_A9E893D34989",
 "timeToIdle": 5000
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
 "idleSequence": "this.sequence_79B1B650_6BC5_6FFB_41BD_53725666BE2E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 109.59,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79B1B650_6BC5_6FFB_41BD_53725666BE2E",
 "id": "camera_79B1A650_6BC5_6FFB_41D7_3D6A0DBDDA1C",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7BC7AE68_6BC5_5FAB_41D4_009D91FD9302",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0.05,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BC7AE68_6BC5_5FAB_41D4_009D91FD9302",
 "id": "camera_7BC7BE68_6BC5_5FAB_41C2_E8E9E5833FC3",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 60.28,
    "targetYaw": -2.02,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 120.12,
    "targetPitch": 10.18
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -49.87,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 19.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -79.01,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 7.6
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -120.71,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 8.1
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 154.88,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 5.09
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 90.31,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 2.32
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 36.05,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.2
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -2.64,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 26.19
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 3.33
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7BDA37DE_6BC5_6CE4_41CF_8B79529EAFD2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 177.85,
  "pitch": 0
 }
},
{
 "idleSequence": "this.sequence_7A1D356D_6BC5_6DA5_41D1_A197C521AA0D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 139.08,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A1D356D_6BC5_6DA5_41D1_A197C521AA0D",
 "id": "camera_7A1D256D_6BC5_6DA5_41D3_9702E117A935",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7971C196_6BC5_6567_41A7_D190BC96A04E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -123.6,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7971C196_6BC5_6567_41A7_D190BC96A04E",
 "id": "camera_7971E196_6BC5_6567_41C3_ED603B56221F",
 "timeToIdle": 5000
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "maximumAngle": 337.39,
 "pitch": 10.05,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_72C6ADEA_6A95_1DD5_41D7_F0F2AC5858C7",
 "yaw": 76.12,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "class": "IconButton",
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
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
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17",
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
 "class": "Photo",
 "height": 1500
},
{
 "idleSequence": "this.sequence_7BFCB838_6BC5_63AB_41D8_3B4B3E4229F4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -19.22,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BFCB838_6BC5_63AB_41D8_3B4B3E4229F4",
 "id": "camera_7BFCA838_6BC5_63AB_41D9_A789EAB64216",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_79FEC5F3_6BC5_6CBD_41D9_D0C775D059E7",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 123.41,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79FEC5F3_6BC5_6CBD_41D9_D0C775D059E7",
 "id": "camera_79FEF5F3_6BC5_6CBD_41CC_34B573CCC95A",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_7A8754BC_6BC5_6CAB_41C4_00970392614A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.73,
  "pitch": -4.59
 }
},
{
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "label": "FOTOS",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "pressedBackgroundOpacity": 1,
 "width": 55,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "gap": 5,
 "layout": "horizontal",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "click": "this.showPopupMedia(this.window_73465F18_502E_CF1D_41D3_CDAB91BFC330, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_79FA57FA_6BC5_2CAF_41D7_F2AB90F619D7, '90%', '90%', true, false)",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "paddingBottom": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "propagateClick": true,
 "iconHeight": 32,
 "data": {
  "name": "Button photoalbum"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "backgroundOpacity": 0
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
 "hfov": 360,
 "label": "Sala de Cine - Frente",
 "id": "panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
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
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMin": "120%",
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
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "maximumAngle": 337.39,
 "pitch": -1.26,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_7D41447A_6A97_02B4_41BA_C3F2B55BD5EF",
 "yaw": -25.37,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "maximumAngle": 129.25,
 "pitch": -0.5,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_72AA5CA7_6A95_025B_41C5_22B66B8B256F",
 "yaw": 37.18,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "idleSequence": "this.sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -23.11,
  "pitch": -0.75
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera",
 "timeToIdle": 5000
},
{
 "hfov": 360,
 "label": "Sala - Comedor",
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 6.63,
   "yaw": -161.79,
   "distance": 1,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 6.63,
   "yaw": -161.77,
   "distance": 1,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756"
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
   "backwardYaw": -67.58,
   "yaw": 156.31,
   "distance": 1,
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -67.58,
   "yaw": 156.28,
   "distance": 1,
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 94.24,
   "yaw": -127.28,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 94.24,
   "yaw": -127.19,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -155.53,
   "yaw": -17.24,
   "distance": 1,
   "panorama": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -155.53,
   "yaw": -17.24,
   "distance": 1,
   "panorama": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "idleSequence": "this.sequence_7B21497F_6BC5_65A5_41B0_FD1D667F7EAD",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 28.21,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B21497F_6BC5_65A5_41B0_FD1D667F7EAD",
 "id": "camera_7B21797F_6BC5_65A5_41C2_66EE4ADC52EC",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera",
 "timeToIdle": 5000
},
{
 "hfov": 360,
 "label": "Deck - Piscina",
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -1.64,
   "yaw": -21.6,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -1.64,
   "yaw": -21.76,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 78.74,
   "yaw": 31.81,
   "distance": 1,
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 78.74,
   "yaw": 31.67,
   "distance": 1,
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 28.54,
   "yaw": -16.51,
   "distance": 1,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 28.54,
   "yaw": -16.63,
   "distance": 1,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 42.62,
   "yaw": 15.7,
   "distance": 1,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 42.62,
   "yaw": 15.74,
   "distance": 1,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 98.57,
   "yaw": 47.72,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 98.57,
   "yaw": 47.65,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -0.69,
   "yaw": -48.23,
   "distance": 1,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -0.69,
   "yaw": -48.23,
   "distance": 1,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMin": "120%",
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
 "hfovMax": 120,
 "class": "Panorama",
 "audios": [
  "this.audio_76772C3C_56C3_6F18_41D4_7C4FB259877A",
  "this.audio_7287F87C_6A97_02AD_41C5_6512D842BDF7"
 ]
},
{
 "idleSequence": "this.sequence_7B644927_6BC5_65A5_41D4_BEB959B8C193",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -90.13,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B644927_6BC5_65A5_41D4_BEB959B8C193",
 "id": "camera_7B646927_6BC5_65A5_41D8_7923CDCBE455",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8",
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
 "class": "Photo",
 "height": 1333
},
{
 "idleSequence": "this.sequence_6444190F_6BC5_2565_41D6_2C7EB04C95F2",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "yaw": -2.26,
  "pitch": -4.74
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6444190F_6BC5_2565_41D6_2C7EB04C95F2",
 "id": "camera_6447E90F_6BC5_2565_41A0_D87A6E597496",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7930F1D0_6BC5_64FB_41C5_5CBAE1D527B6",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -49.29,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7930F1D0_6BC5_64FB_41C5_5CBAE1D527B6",
 "id": "camera_7930E1D0_6BC5_64FB_41C9_67DFDD88E42F",
 "timeToIdle": 5000
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "maximumAngle": 185.65,
 "pitch": -0.5,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_72B5C6DE_6A93_0FED_41D1_DDA1D6875B0B",
 "yaw": -5.02,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "maximumAngle": 359.5,
 "pitch": 18.34,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_7202A7E0_6A93_0DD5_41D8_3326699B779E",
 "yaw": -70.09,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "idleSequence": "this.sequence_7A1C706B_6BC5_63AD_41CA_ADF96350917A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -91.69,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A1C706B_6BC5_63AD_41CA_ADF96350917A",
 "id": "camera_7A1C606B_6BC5_63AD_41D2_09AE5BE2EE4D",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "maxHeight": 100,
 "maxWidth": 100,
 "id": "Image_13196006_51DA_2CB3_4191_F03898441520",
 "width": "6.031%",
 "right": "1.08%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "url": "skin/Image_13196006_51DA_2CB3_4191_F03898441520.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 80,
 "minWidth": 80,
 "bottom": "7.73%",
 "height": "11.186%",
 "paddingBottom": 0,
 "class": "Image",
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
 "propagateClick": false,
 "verticalAlign": "middle",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image25151"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "maximumAngle": 231.88,
 "pitch": 2.76,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_7D5C5B7D_6A97_06AC_41B4_6C276E725473",
 "yaw": 22.11,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "maximumAngle": 359.5,
 "pitch": 0,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_752C77BB_56FE_D91F_41CF_669E0C980F8D",
 "yaw": 0,
 "data": {
  "label": "water sounds"
 }
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarWidth": 10,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "idleSequence": "this.sequence_7B961875_6BC5_63A5_41D7_19586EBEBECE",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 173.1,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B961875_6BC5_63A5_41D7_19586EBEBECE",
 "id": "camera_7B960875_6BC5_63A5_41C4_A0DAE0C50B05",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 1.47,
    "targetYaw": 62.3,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1.95,
    "targetPitch": 0.25
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -20.03
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -22.8
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -37.62
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -45.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7BD67323_6BC5_655D_41C5_C91E4E97C49C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 62.45,
  "pitch": -0.92
 }
},
{
 "idleSequence": "this.sequence_64714DBC_6BC5_5CAB_41D1_FD02AB43F2EB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 118.47,
  "pitch": -5.51
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_64714DBC_6BC5_5CAB_41D1_FD02AB43F2EB",
 "id": "camera_64715DBC_6BC5_5CAB_41B8_B91E53EDF7C4",
 "timeToIdle": 5000
},
{
 "hfov": 360,
 "label": "Calle - Entrada",
 "id": "panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -179.95,
   "yaw": -2.15,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -179.95,
   "yaw": -2.25,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "frameDisplayTime": 5000,
 "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_1/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "thumbnailUrl": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_2/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "frameTransitionTime": 2000,
 "overlays": [
  "this.overlay_4722F8F2_5746_CFEB_41B6_CF6FB682FC5D",
  "this.overlay_472958F3_5746_CFE9_4190_A06C79E7A940",
  "this.overlay_472968F3_5746_CFE9_41C0_E4651E9C12EB",
  "this.overlay_472928F3_5746_CFE9_41D2_3453D059BC7B",
  "this.overlay_472938F3_5746_CFE9_41D3_199BB64C45DA",
  "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0"
 ],
 "partial": false,
 "hfovMax": 120,
 "class": "LivePanorama",
 "audios": [
  "this.audio_7202A7E0_6A93_0DD5_41D8_3326699B779E"
 ]
},
{
 "idleSequence": "this.sequence_6406EDD8_6BC5_5CEB_4193_416064D6A417",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 66.14,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6406EDD8_6BC5_5CEB_4193_416064D6A417",
 "id": "camera_6406FDD8_6BC5_5CEB_41C0_6CB4BBC80407",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "86.335%",
 "paddingRight": 0,
 "paddingLeft": 20,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minHeight": 60,
 "top": "-2.56%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "class": "HTMLText",
 "height": "74.423%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.36vh;font-family:'Arimo';\">PERSPECTIVAS</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_7AC17483_6BC5_635D_41C2_7699DFFC1824",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 179.31,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7AC17483_6BC5_635D_41C2_7699DFFC1824",
 "id": "camera_7AC16483_6BC5_635D_41BB_381A90F0AF79",
 "timeToIdle": 5000
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "maximumAngle": 129.25,
 "pitch": 6.03,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_72E69B50_6A95_06F5_41B8_9CB77B66D0F6",
 "yaw": 106.02,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13",
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
 "class": "Photo",
 "height": 1333
},
{
 "idleSequence": "this.sequence_7B85B397_6BC5_6565_41D5_3813315DBBB8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -101.26,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B85B397_6BC5_6565_41D5_3813315DBBB8",
 "id": "camera_7B85A397_6BC5_6565_41D3_36C24D9DC410",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 1.47,
    "targetYaw": 62.3,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1.95,
    "targetPitch": 0.25
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -20.03
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -22.8
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -37.62
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -45.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7BA1F8AF_6BC5_64A5_41BF_F10ADD9A4A41",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 62.45,
  "pitch": -0.92
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 9.53,
    "targetYaw": 0,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 18.14,
    "targetPitch": 0
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -45.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -4.21
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 37.56,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -4.71
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -163.67,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -6.22
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -136.29,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -4.21
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -95.34,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.2
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 158.65,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -14.01
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -113.18,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -5.72
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_79B01C84_6BC5_235B_41D3_23B9074C6C7A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.47,
  "pitch": 0
 }
},
{
 "idleSequence": "this.sequence_7AB20A0C_6BC5_6764_41C0_6D4B163C371D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -44.08,
  "pitch": -11.02
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7AB20A0C_6BC5_6764_41C0_6D4B163C371D",
 "id": "camera_7AB5DA0C_6BC5_6764_41D7_EC4C3079B547",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7A7AF53B_6BC5_6DAD_41D5_F98BA4819601",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 139.08,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A7AF53B_6BC5_6DAD_41D5_F98BA4819601",
 "id": "camera_7A7AE53B_6BC5_6DAD_41CB_96833DBA5E30",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7A3C4097_6BC5_6365_41BD_EE90DB7557E2",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 174.42,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A3C4097_6BC5_6365_41BD_EE90DB7557E2",
 "id": "camera_7A3C6097_6BC5_6365_41D2_D61809A58F72",
 "timeToIdle": 5000
},
{
 "hfov": 360,
 "label": "Cocina",
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -149.48,
   "yaw": 2.39,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -149.48,
   "yaw": 2.26,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 89.87,
   "yaw": 109.03,
   "distance": 1,
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 89.87,
   "yaw": 109.1,
   "distance": 1,
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "maximumAngle": 104.76,
 "pitch": -17.08,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_7D74C782_6A97_0E54_41C4_239F1691C7FE",
 "yaw": 55.52,
 "data": {
  "label": "water sounds"
 }
},
{
 "idleSequence": "this.sequence_791E21B3_6BC5_64BC_41D4_6A472AD60779",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -123.6,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_791E21B3_6BC5_64BC_41D4_6A472AD60779",
 "id": "camera_7911C1B3_6BC5_64BC_41D2_D2B53FAB7A34",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "yaw": -1.36,
  "pitch": -6.86
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_642122B0_6BC5_64BB_41C2_E87F6FA8A10E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -70.97,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_642122B0_6BC5_64BB_41C2_E87F6FA8A10E",
 "id": "camera_6420D2B0_6BC5_64BB_41CA_59439626E27E",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "3%",
 "right": "3%",
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "minHeight": 1,
 "top": "3%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "90%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "label": "CONTACTO",
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "pressedBackgroundOpacity": 1,
 "width": 83,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "gap": 5,
 "layout": "horizontal",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "paddingBottom": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "propagateClick": true,
 "iconHeight": 32,
 "data": {
  "name": "Button realtor"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_7A9E59F0_6BC5_64BB_41AF_8E138DD37087",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -53.45,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A9E59F0_6BC5_64BB_41AF_8E138DD37087",
 "id": "camera_7A9E49F0_6BC5_64BB_41CF_8DDD1B2F82AA",
 "timeToIdle": 5000
},
{
 "hfov": 360,
 "label": "Balc\u00f3n - Habitaci\u00f3n Master",
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -113.86,
   "yaw": -128.51,
   "distance": 1,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 120.23,
   "yaw": -51.34,
   "distance": 1,
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 120.23,
   "yaw": -51.32,
   "distance": 1,
   "panorama": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -16.51,
   "yaw": 28.54,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -16.51,
   "yaw": 28.68,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMax": 120,
 "class": "Panorama",
 "audios": [
  "this.audio_7D5C5B7D_6A97_06AC_41B4_6C276E725473",
  "this.audio_7D74C782_6A97_0E54_41C4_239F1691C7FE"
 ]
},
{
 "hfov": 360,
 "label": "Planta Alta - Estar Diario",
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 102.02,
   "yaw": -150.21,
   "distance": 1,
   "panorama": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 146.58,
   "yaw": 53.35,
   "distance": 1,
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -14.87,
   "yaw": 126.55,
   "distance": 1,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -14.87,
   "yaw": 126.23,
   "distance": 1,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -40.92,
   "yaw": -87.45,
   "distance": 1,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -40.92,
   "yaw": -87.31,
   "distance": 1,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 1.12,
    "targetYaw": 62.3,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1.23,
    "targetPitch": 0.25
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -20.03
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -22.8
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -37.62
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -45.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7B9D8892_6BC5_637F_41D1_C81760220ACD",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 62.45,
  "pitch": 0
 }
},
{
 "touchControlMode": "drag_rotation",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "displayPlaybackBar": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "mouseControlMode": "drag_rotation",
 "gyroscopeEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "hfov": 360,
 "label": "Sala de Cine - Fondo",
 "id": "panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
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
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMin": "120%",
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
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--INFO photoalbum"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "idleSequence": "this.sequence_7B0B6961_6BC5_65DD_41D9_077FDDD7CE4E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 18.21,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B0B6961_6BC5_65DD_41D9_077FDDD7CE4E",
 "id": "camera_7B0B0961_6BC5_65DD_41D7_01D3931ECDE4",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "layout": "horizontal",
 "width": 110,
 "right": "0%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "gap": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "height": 110,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "verticalAlign": "middle",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarWidth": 10,
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "layout": "absolute",
 "width": "99.97%",
 "backgroundColorRatios": [
  0
 ],
 "gap": 10,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "backgroundOpacity": 1
},
{
 "idleSequence": "this.sequence_7A93BB0A_6BC5_256C_41D3_A034CF9B2929",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -23.69,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A93BB0A_6BC5_256C_41D3_A034CF9B2929",
 "id": "camera_7A939B0A_6BC5_256C_41CB_4810F8893A5A",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7AD3EAD3_6BC5_24FD_41D5_01644E7D33B9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -148.19,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7AD3EAD3_6BC5_24FD_41D5_01644E7D33B9",
 "id": "camera_7AD3CAD3_6BC5_24FD_41D3_FAC0801FDB35",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "3%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "3%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "gap": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "top": "3%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingBottom": 0,
 "bottom": "3%",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11",
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
 "class": "Photo",
 "height": 1333
},
{
 "borderRadius": 0,
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "width": "100%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 40,
 "transparencyActive": true,
 "minWidth": 40,
 "mode": "push",
 "height": "100%",
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B, true, 0, this.effect_13185EDD_502A_7550_41C3_AE7B43D21853, 'showEffect', false)",
 "propagateClick": true,
 "verticalAlign": "middle",
 "data": {
  "name": "Ayuda"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_643702CD_6BC5_64E5_41CE_A027ADDAFF90",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 84.12,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_643702CD_6BC5_64E5_41CE_A027ADDAFF90",
 "id": "camera_643732CD_6BC5_64E5_41AF_CD294E22359F",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7",
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
 "class": "Photo",
 "height": 1333
},
{
 "idleSequence": "this.sequence_7BD3BE85_6BC5_5F65_41C7_26EDFF88AB68",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0.05,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BD3BE85_6BC5_5F65_41C7_26EDFF88AB68",
 "id": "camera_7BD38E85_6BC5_5F65_4196_4410CCCC2A2B",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_64B0C900_6BC5_255B_41D5_F1529F722E1B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "yaw": -2.26,
  "pitch": -4.74
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_64B0C900_6BC5_255B_41D5_F1529F722E1B",
 "id": "camera_64B0D900_6BC5_255B_41C0_CC2BECF25658",
 "timeToIdle": 5000
},
{
 "visible": false,
 "borderRadius": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "layout": "vertical",
 "width": "91.304%",
 "right": "0%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "gap": 3,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "class": "Container",
 "height": "85.959%",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -38.25,
  "pitch": -22.96
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera",
 "timeToIdle": 5000
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "id": "window_589E2836_5746_CE6B_41AD_BBAC5BB986BB",
 "width": 400,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBorderColor": "#000000",
 "scrollBarColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "borderSize": 0,
 "headerBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "bodyPaddingRight": 0,
 "closeButtonPaddingLeft": 5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingTop": 0,
 "headerPaddingRight": 0,
 "minHeight": 20,
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "bodyBackgroundColor": [
  "#000000"
 ],
 "bodyBorderSize": 0,
 "class": "Window",
 "minWidth": 20,
 "modal": true,
 "height": 600,
 "closeButtonPaddingTop": 5,
 "title": "",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "closeButtonPressedBackgroundColor": [],
 "headerPaddingLeft": 10,
 "veilOpacity": 0.4,
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconLineWidth": 3,
 "bodyPaddingLeft": 0,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "shadowBlurRadius": 6,
 "closeButtonBackgroundOpacity": 1,
 "propagateClick": false,
 "shadow": true,
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 20,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconWidth": 20,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBorderColor": "#000000",
 "borderRadius": 5,
 "backgroundOpacity": 1,
 "children": [
  "this.container_79829802_6BC5_235F_41C0_E2E4C835C2D3"
 ],
 "closeButtonIconHeight": 20,
 "headerBorderSize": 0,
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "shadowColor": "#000000",
 "closeButtonRollOverBackgroundColor": [],
 "closeButtonRollOverIconLineWidth": 2,
 "paddingRight": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingBottom": 5,
 "footerBorderSize": 0,
 "titlePaddingTop": 5,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "titleFontStyle": "normal",
 "contentOpaque": false,
 "closeButtonPressedBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "paddingBottom": 0,
 "footerBackgroundOpacity": 0,
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "closeButtonPaddingRight": 5,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "titleFontSize": "1.29vmin",
 "footerBorderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "titleFontColor": "#000000",
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "titlePaddingRight": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonBorderSize": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColorRatios": [
  1
 ],
 "data": {
  "name": "Window17928"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowSpread": 1,
 "closeButtonRollOverBackgroundColorDirection": "vertical"
},
{
 "idleSequence": "this.sequence_7B332AB5_6BC5_24A5_41D6_7A9B286059B8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 128.66,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B332AB5_6BC5_24A5_41D6_7A9B286059B8",
 "id": "camera_7B331AB5_6BC5_24A5_419B_91A6D66D1CFC",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "children": [
  "this.Image_5EF9A31F_502E_7713_41B1_155B9E9559BD"
 ],
 "scrollBarWidth": 10,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 573,
 "gap": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "layout": "absolute",
 "top": 15,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 133,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--STICKER"
 },
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarWidth": 10,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "idleSequence": "this.sequence_7AB27B27_6BC5_25A5_41D0_84AB84976812",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -23.69,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7AB27B27_6BC5_25A5_41D0_84AB84976812",
 "id": "camera_7AB22B27_6BC5_25A5_41D7_29E8090073B4",
 "timeToIdle": 5000
},
{
 "hfov": 360,
 "label": "Escritorio",
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 156.31,
   "yaw": -67.58,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 156.31,
   "yaw": -67.63,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_5AB33241_4C16_F54F_419A_1A82626E06AC",
  "this.overlay_779BAA9C_4DF2_75F6_41D3_3255A4E1C04A",
  "this.overlay_724AC826_4C0D_94D2_41C0_AB29E3F1E825",
  "this.overlay_724D3C57_4C0D_ED73_41CD_8425355074D8",
  "this.overlay_7277C163_4C0D_F752_41C2_7921673C330A",
  "this.overlay_727CA71C_4C0D_FCF6_41C8_60EF23AE255E",
  "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_tcap0"
 ],
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "toolTipShadowSpread": 0,
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarBottom": 5,
 "playbackBarHeadShadow": true,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingLeft": 6,
 "vrPointerSelectionTime": 2000,
 "progressBorderColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "minWidth": 100,
 "playbackBarHeadWidth": 6,
 "toolTipFontStyle": "normal",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderSize": 0,
 "height": "100%",
 "playbackBarHeadOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "propagateClick": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontWeight": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipPaddingTop": 4,
 "shadow": false,
 "transitionDuration": 500,
 "toolTipFontSize": "12px",
 "progressHeight": 6,
 "playbackBarBorderRadius": 0,
 "progressRight": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundOpacity": 1,
 "progressOpacity": 1,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipOpacity": 1,
 "playbackBarHeadShadowBlurRadius": 3,
 "top": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarRight": 0,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBorderColor": "#000000",
 "progressBarBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarProgressBorderSize": 0,
 "progressBorderRadius": 0,
 "vrPointerSelectionColor": "#FF6600",
 "paddingBottom": 0,
 "playbackBarBackgroundOpacity": 1,
 "progressBarBorderSize": 6,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipShadowOpacity": 1,
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeight": 10,
 "transitionMode": "blending"
},
{
 "borderRadius": 0,
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "width": "100%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 40,
 "transparencyActive": false,
 "minWidth": 40,
 "mode": "push",
 "height": "100%",
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "propagateClick": false,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_79847800_6BC5_235B_41CB_A6A43A2CC938, [this.htmltext_7984D801_6BC5_235D_41DA_2512E9DC589D,this.component_7985A801_6BC5_235D_41D3_5F47899A425C,this.component_7985D801_6BC5_235D_41C1_3E2AAE214924], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_79842800_6BC5_235B_41C4_9046525D1530"
 ],
 "id": "playList_7987F800_6BC5_235B_41D8_0C5D72EDDC20"
},
{
 "thumbnailUrl": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_t.jpg",
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_46D0B9A9_5CF3_2239_41D2_F30BF1260DF9",
  "this.overlay_46D089A9_5CF3_2239_41D6_82D73B977FE5",
  "this.overlay_47E4FB00_5CF3_27E7_41D5_73431470F9AA",
  "this.overlay_470540FE_5CFD_621B_41C9_CAAC9464CEEB",
  "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_tcap0"
 ],
 "class": "Panorama",
 "id": "panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80"
  }
 ],
 "partial": false,
 "vfov": 180,
 "label": "TOMA 32 HABITACI\u00d3N FRONTAL IZQUIERDA CON BALCON",
 "hfovMax": 130,
 "pitch": 0
},
{
 "idleSequence": "this.sequence_7AF33AEF_6BC5_24A5_41D8_9D1B515EE36C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -148.19,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7AF33AEF_6BC5_24A5_41D8_9D1B515EE36C",
 "id": "camera_7AF31AEF_6BC5_24A5_4198_AE893C65A297",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15",
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
 "class": "Photo",
 "height": 1372
},
{
 "hfov": 360,
 "label": "Quincho - Piscinas",
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
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
   "class": "AdjacentPanorama",
   "backwardYaw": 56.4,
   "yaw": -92.35,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 56.4,
   "yaw": -92.51,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
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
   "class": "AdjacentPanorama",
   "backwardYaw": 130.71,
   "yaw": -56.59,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 130.71,
   "yaw": -56.45,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -48.23,
   "yaw": -0.69,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -48.23,
   "yaw": -0.52,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMin": "120%",
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
 "hfovMax": 120,
 "class": "Panorama",
 "audios": [
  "this.audio_752C77BB_56FE_D91F_41CF_669E0C980F8D",
  "this.audio_728EBC24_6A95_025D_41D8_05CF0EB028D7"
 ]
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 1,
    "targetYaw": 0,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1,
    "targetPitch": 0
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.71
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.67
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -24.81
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -25.06
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -27.07
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7B9CAA24_6BC5_275B_41C8_62E2B7C6CCF1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_6B7B7538_502A_54D0_41B6_8F7020C59B3D"
 ],
 "scrollBarWidth": 10,
 "id": "Container_6B7B3538_502A_54D0_41D0_9A6D5FB5A723",
 "left": "3%",
 "shadowColor": "#000000",
 "right": "3%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minHeight": 1,
 "top": "3%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "3%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "class": "Container",
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "propagateClick": true,
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_79702CC1_6BC5_5CDD_4198_BB96B8CEACA5",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -126.65,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79702CC1_6BC5_5CDD_4198_BB96B8CEACA5",
 "id": "camera_79703CC1_6BC5_5CDD_41A1_4352C61D5130",
 "timeToIdle": 5000
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
 "borderRadius": 0,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203"
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "layout": "vertical",
 "width": "50%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "horizontalAlign": "left",
 "paddingLeft": 50,
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "gap": 0,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minHeight": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "height": 60,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3
},
{
 "idleSequence": "this.sequence_79F36C2A_6BC5_23AF_41C8_B548BBAA5E49",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -85.76,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79F36C2A_6BC5_23AF_41C8_B548BBAA5E49",
 "id": "camera_79F34C2A_6BC5_23AF_41B8_7B6D47E4BFFC",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7B2DF467_6BC5_63A5_41D8_4EE931790224",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 179.31,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B2DF467_6BC5_63A5_41D8_4EE931790224",
 "id": "camera_7B2D9467_6BC5_63A5_419B_4C208196421C",
 "timeToIdle": 5000
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "maximumAngle": 359,
 "pitch": 0,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_7287F87C_6A97_02AD_41C5_6512D842BDF7",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F",
 "maximumAngle": 210.77,
 "pitch": 2.76,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_728EBC24_6A95_025D_41D8_05CF0EB028D7",
 "yaw": 35.17,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "id": "window_58FCE818_5746_CE27_41D5_6E5EC77B8BFA",
 "width": 400,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBorderColor": "#000000",
 "scrollBarColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "borderSize": 0,
 "headerBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "bodyPaddingRight": 0,
 "closeButtonPaddingLeft": 5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingTop": 0,
 "headerPaddingRight": 0,
 "minHeight": 20,
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "bodyBackgroundColor": [
  "#000000"
 ],
 "bodyBorderSize": 0,
 "class": "Window",
 "minWidth": 20,
 "modal": true,
 "height": 600,
 "closeButtonPaddingTop": 5,
 "title": "",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "closeButtonPressedBackgroundColor": [],
 "headerPaddingLeft": 10,
 "veilOpacity": 0.4,
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconLineWidth": 3,
 "bodyPaddingLeft": 0,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "shadowBlurRadius": 6,
 "closeButtonBackgroundOpacity": 1,
 "propagateClick": false,
 "shadow": true,
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 20,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconWidth": 20,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBorderColor": "#000000",
 "borderRadius": 5,
 "backgroundOpacity": 1,
 "children": [
  "this.container_79847800_6BC5_235B_41CB_A6A43A2CC938"
 ],
 "closeButtonIconHeight": 20,
 "headerBorderSize": 0,
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "shadowColor": "#000000",
 "closeButtonRollOverBackgroundColor": [],
 "closeButtonRollOverIconLineWidth": 2,
 "paddingRight": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingBottom": 5,
 "footerBorderSize": 0,
 "titlePaddingTop": 5,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "titleFontStyle": "normal",
 "contentOpaque": false,
 "closeButtonPressedBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "paddingBottom": 0,
 "footerBackgroundOpacity": 0,
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "closeButtonPaddingRight": 5,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "titleFontSize": "1.29vmin",
 "footerBorderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "titleFontColor": "#000000",
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "titlePaddingRight": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonBorderSize": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColorRatios": [
  1
 ],
 "data": {
  "name": "Window17067"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowSpread": 1,
 "closeButtonRollOverBackgroundColorDirection": "vertical"
},
{
 "idleSequence": "this.sequence_7B706943_6BC5_65DC_41CF_36109056BE78",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 18.21,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B706943_6BC5_65DC_41CF_36109056BE78",
 "id": "camera_7B700943_6BC5_65DC_41D6_7B7B3DA5DF42",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundColorRatios": [
  0
 ],
 "right": "0%",
 "scrollEnabled": true,
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.914933481306!2d-57.50898168457854!3d-25.2397899838764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzIzLjIiUyA1N8KwMzAnMjQuNSJX!5e0!3m2!1ses-419!2spy!4v1581896704972!5m2!1ses-419!2spy",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "class": "WebFrame",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "paddingTop": 0,
 "insetBorder": false,
 "backgroundOpacity": 1
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
  "class": "VideoResource",
  "width": 420,
  "mp4Url": "media/video_7340C746_56DD_5968_41D3_39B2A98F9F24.mp4",
  "height": 630
 }
},
{
 "borderRadius": 10,
 "rollOverBackgroundOpacity": 1,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')",
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "pressedBackgroundOpacity": 1,
 "width": "46%",
 "shadowColor": "#000000",
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "rollOverBackgroundColor": [
  "#00CC33"
 ],
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#00CC00"
 ],
 "paddingBottom": 0,
 "class": "Button",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontSize": "3vh",
 "backgroundColorDirection": "vertical",
 "label": "WhatsApp",
 "propagateClick": false,
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "iconHeight": 32,
 "data": {
  "name": "Button"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "backgroundOpacity": 0.75
},
{
 "idleSequence": "this.sequence_799C4128_6BC5_65AB_41CF_AD5609CEC124",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 158.4,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_799C4128_6BC5_65AB_41CF_AD5609CEC124",
 "id": "camera_799C7128_6BC5_65AB_41D9_C4EB93A54143",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5",
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
 "class": "Photo",
 "height": 1333
},
{
 "borderRadius": 0,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_402E3BC3_565F_296F_41AF_19D956287FE7"
 ],
 "scrollBarWidth": 10,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": 0,
 "height": 118,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--MENU"
 },
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "backgroundOpacity": 0.64
},
{
 "idleSequence": "this.sequence_7BF91A07_6BC5_2765_41D3_5560BD4F515E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "yaw": -1.36,
  "pitch": -6.86
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BF91A07_6BC5_2765_41D3_5560BD4F515E",
 "id": "camera_7BF8FA07_6BC5_2765_41CB_C1BBEDB4005F",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 1.64,
    "targetYaw": 62.3,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 2.28,
    "targetPitch": 0.25
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -20.03
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -22.8
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -37.62
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -45.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7B73DA7A_6BC5_27AF_41D4_3F934CC5F0F5",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 62.45,
  "pitch": 1.84
 }
},
{
 "idleSequence": "this.sequence_640A2DF5_6BC5_5CA5_41D2_082D7DEF707C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -59.77,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_640A2DF5_6BC5_5CA5_41D2_082D7DEF707C",
 "id": "camera_640A3DF5_6BC5_5CA5_41D5_2D2AE197428D",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1",
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
 "class": "Photo",
 "height": 2667
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3",
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
 "class": "Photo",
 "height": 1333
},
{
 "idleSequence": "this.sequence_77024918_503A_F31E_41AF_34F62C64FEBB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 68.83,
  "pitch": 13.57
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77024918_503A_F31E_41AF_34F62C64FEBB",
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "width": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.shareSocial('fb', 'https://sr1.visitapy.com', false)",
 "propagateClick": true,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 9.53,
    "targetYaw": 0,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 18.14,
    "targetPitch": 0
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -45.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -4.21
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 37.56,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -4.71
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -163.67,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -6.22
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -136.29,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -4.21
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -95.34,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.2
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 158.65,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -14.01
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -113.18,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -5.72
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7992FC58_6BC5_23EB_41BC_572FF7BE51E3",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.47,
  "pitch": 0
 }
},
{
 "idleSequence": "this.sequence_7BE0F9EA_6BC5_24AF_41CB_19B2975EACD1",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -164.3,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BE0F9EA_6BC5_24AF_41CB_19B2975EACD1",
 "id": "camera_7BE0D9EA_6BC5_24AF_41D3_E1CFDD7EDC32",
 "timeToIdle": 5000
},
{
 "hfov": 360,
 "label": "TOMA 31 BALC\u00d3N FRONTAL",
 "id": "panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -53.36,
   "yaw": -105.26,
   "distance": 1,
   "panorama": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_466CC9D9_5CFE_E219_41C6_48DA7E6ACE59",
  "this.overlay_40CC987A_5CFF_621A_41C8_873C6BA0FFB4",
  "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_tcap0"
 ],
 "hfovMax": 130,
 "class": "Panorama",
 "audios": [
  "this.audio_72C6ADEA_6A95_1DD5_41D7_F0F2AC5858C7"
 ]
},
{
 "idleSequence": "this.sequence_78915D56_6BC5_5DE7_41D2_EF853339B118",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 116.63,
  "pitch": -1.84
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_78915D56_6BC5_5DE7_41D2_EF853339B118",
 "id": "camera_78913D55_6BC5_5DE4_41D1_C1D2D3F5E9F8",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12",
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
 "class": "Photo",
 "height": 1333
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "class": "IconButton",
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "layout": "absolute",
 "width": 115.05,
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "height": 641,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "backgroundOpacity": 0
},
{
 "hfov": 360,
 "label": "Planta Alta - Quincho con Parrilla",
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -51.34,
   "yaw": 120.23,
   "distance": 1,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -51.34,
   "yaw": 120.77,
   "distance": 1,
   "panorama": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 31.81,
   "yaw": 78.74,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 31.81,
   "yaw": 79.08,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMax": 120,
 "class": "Panorama",
 "audios": [
  "this.audio_7D41447A_6A97_02B4_41BA_C3F2B55BD5EF"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.video_7340C746_56DD_5968_41D3_39B2A98F9F24",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_79A9A824_6BC5_235B_41CF_2566AF14622F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_79A9A824_6BC5_235B_41CF_2566AF14622F, 0)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"
  }
 ],
 "id": "playList_79A9A824_6BC5_235B_41CF_2566AF14622F"
},
{
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D"
},
{
 "hfov": 360,
 "label": "Quincho",
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 2.39,
   "yaw": -149.48,
   "distance": 1,
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 2.39,
   "yaw": -149.72,
   "distance": 1,
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -92.35,
   "yaw": 56.4,
   "distance": 1,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -92.35,
   "yaw": 56.25,
   "distance": 1,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 88.31,
   "yaw": -93.72,
   "distance": 1,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 88.31,
   "yaw": -93.71,
   "distance": 1,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -5.58,
   "yaw": 160.78,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -5.58,
   "yaw": 160.41,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -21.6,
   "yaw": -1.64,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -21.6,
   "yaw": -1.56,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 144.72,
   "yaw": -70.41,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 144.72,
   "yaw": -70.5,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMax": 120,
 "class": "Panorama",
 "audios": [
  "this.audio_725841F7_56C7_3928_418B_5A553C889C71",
  "this.audio_72B5C6DE_6A93_0FED_41D1_DDA1D6875B0B"
 ]
},
{
 "idleSequence": "this.sequence_7B865EC0_6BC5_5CDC_41D8_0CC21DAF59AC",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 30.29,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B865EC0_6BC5_5CDC_41D8_0CC21DAF59AC",
 "id": "camera_7B862EC0_6BC5_5CDC_41DA_56EFDD136BA3",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7A735B7B_6BC5_25AD_41CF_F57EFE0C08EF",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -173.37,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A735B7B_6BC5_25AD_41CF_F57EFE0C08EF",
 "id": "camera_7A730B7B_6BC5_25AD_41DA_502DEC3CE9FF",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6",
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
 "class": "Photo",
 "height": 1333
},
{
 "idleSequence": "this.sequence_79116CE3_6BC5_5CDD_41C8_01DFAFB626E6",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 162.76,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79116CE3_6BC5_5CDD_41C8_01DFAFB626E6",
 "id": "camera_79114CE3_6BC5_5CDD_41D6_8747478C7870",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_6431B9B0_6BC5_24BB_41D9_1A72C162E33A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 10.36,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6431B9B0_6BC5_24BB_41D9_1A72C162E33A",
 "id": "camera_643189B0_6BC5_24BB_41CA_060A3A14C146",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7BB4D8CC_6BC5_64E4_41C2_65CE12A27375",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 30.52,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BB4D8CC_6BC5_64E4_41C2_65CE12A27375",
 "id": "camera_7BB4F8CC_6BC5_64E4_41D4_5A577C3AB55C",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_t.png",
 "playList": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "label": "\u00c1lbum de Fotos"
},
{
 "idleSequence": "this.sequence_771E9E9F_503A_3113_41CE_5824E21E1360",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "yaw": -2.26,
  "pitch": -4.74
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_771E9E9F_503A_3113_41CE_5824E21E1360",
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera",
 "timeToIdle": 5000
},
{
 "paddingTop": 0,
 "borderRadius": 0,
 "children": [
  "this.Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B"
 ],
 "id": "Container_6B7B7538_502A_54D0_41B6_8F7020C59B3D",
 "width": "99.97%",
 "gap": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "layout": "vertical",
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.51,
 "height": "100%",
 "verticalAlign": "middle",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_6B7B3538_502A_54D0_41D0_9A6D5FB5A723",
  "this.Container_6B7BD538_502A_54D0_41CC_674161DF5902"
 ],
 "scrollBarWidth": 10,
 "id": "Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--INSTRUCCIONES"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "idleSequence": "this.sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -20.1,
  "pitch": -3.01
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18",
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
 "class": "Photo",
 "height": 1333
},
{
 "hfov": 360,
 "label": "Sala de Cine - Punto Medio",
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
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
   "panorama": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A"
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
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMin": "140%",
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
 "hfovMax": 120,
 "class": "Panorama"
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
  "class": "VideoResource",
  "width": 466,
  "mp4Url": "media/video_76BF82AE_56C2_FB39_41D0_DF287E74780C.mp4",
  "height": 690
 }
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -49.87,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 19.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -79.01,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 7.6
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -120.71,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 8.1
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 154.88,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 5.09
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 90.31,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 2.32
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 36.05,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.2
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -2.64,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 26.19
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 3.33
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -2.02,
  "pitch": 10.18
 }
},
{
 "idleSequence": "this.sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 4.27,
  "pitch": 8.04
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77AA8E05_503E_70F7_41C0_3ED464C6285C",
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "width": "100%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 37,
 "transparencyActive": true,
 "minWidth": 49,
 "mode": "push",
 "height": "141.51%",
 "paddingBottom": 0,
 "class": "IconButton",
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "layout": "vertical",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "minHeight": 520,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "height": "87.625%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "backgroundOpacity": 0.3
},
{
 "idleSequence": "this.sequence_7BDA9341_6BC5_65DD_41BE_DFAC33952D79",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 178.36,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BDA9341_6BC5_65DD_41BE_DFAC33952D79",
 "id": "camera_7BDA8341_6BC5_65DD_41B7_2E8CAB47D774",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21",
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
 "class": "Photo",
 "height": 1333
},
{
 "idleSequence": "this.sequence_7BC8F9CC_6BC5_24E4_41D2_86E582C941B7",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -164.3,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BC8F9CC_6BC5_24E4_41D2_86E582C941B7",
 "id": "camera_7BC8D9CC_6BC5_24E4_41D7_5089ADE4D492",
 "timeToIdle": 5000
},
{
 "toolTipShadowSpread": 0,
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarBottom": 0,
 "right": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "toolTipBorderRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "progressBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingLeft": 6,
 "vrPointerSelectionTime": 2000,
 "toolTipDisplayTime": 600,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "minWidth": 1,
 "playbackBarHeadWidth": 6,
 "toolTipFontStyle": "normal",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderSize": 0,
 "playbackBarHeadOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "propagateClick": false,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontWeight": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipPaddingTop": 4,
 "shadow": false,
 "transitionDuration": 500,
 "toolTipFontSize": "12px",
 "progressHeight": 6,
 "playbackBarBorderRadius": 0,
 "progressRight": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundOpacity": 1,
 "progressOpacity": 1,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipOpacity": 1,
 "playbackBarHeadShadowBlurRadius": 3,
 "top": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarRight": 0,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBorderColor": "#000000",
 "progressBarBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarProgressBorderSize": 0,
 "bottom": 0,
 "vrPointerSelectionColor": "#FF6600",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "progressBarBorderSize": 6,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "data": {
  "name": "Viewer info 1"
 },
 "toolTipShadowOpacity": 1,
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeight": 10,
 "transitionMode": "blending"
},
{
 "idleSequence": "this.sequence_7AB984FF_6BC5_6CA5_41D0_0ACBD3CD09FA",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 165.13,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7AB984FF_6BC5_6CA5_41D0_0ACBD3CD09FA",
 "id": "camera_7AB9B4FF_6BC5_6CA5_41CB_76BA6458FA33",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9",
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
 "class": "Photo",
 "height": 1500
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 2.05,
    "targetYaw": 62.3,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.11,
    "targetPitch": 0.25
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -20.03
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -22.8
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -37.62
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -45.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_644B9920_6BC5_255B_41BF_7C5C4AF2F265",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 61.53,
  "pitch": 2.76
 }
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16",
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
 "class": "Photo",
 "height": 1126
},
{
 "idleSequence": "this.sequence_79BF3156_6BC5_65E7_41C0_4564F8E9CB13",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -35.28,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79BF3156_6BC5_65E7_41C0_4564F8E9CB13",
 "id": "camera_79BF2156_6BC5_65E7_41D0_1EEA4BD0FC97",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 2.05,
    "targetYaw": 62.3,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.11,
    "targetPitch": 0.25
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -20.03
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -22.8
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -37.62
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -45.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7B532A5D_6BC5_27E5_41C2_67FDF7D59A07",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 61.53,
  "pitch": 2.76
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 2.74,
    "targetYaw": 62.3,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 4.5,
    "targetPitch": 0.25
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -20.03
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -22.8
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -37.62
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -45.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7B399F86_6BC5_5D64_41C9_CF04CBBE55C4",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 62.45,
  "pitch": 4.59
 }
},
{
 "idleSequence": "this.sequence_7BED5EA3_6BC5_5F5D_41BC_312F3D459A83",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 30.29,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BED5EA3_6BC5_5F5D_41BC_312F3D459A83",
 "id": "camera_7BED2EA3_6BC5_5F5D_413F_6A976B3D3DFE",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "right": "0%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "minWidth": 1,
 "bottom": 53,
 "height": 2,
 "paddingBottom": 0,
 "class": "Image",
 "propagateClick": true,
 "verticalAlign": "middle",
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_791386B9_6BC5_6CAD_41D3_33C6E8340EF4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 159.26,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_791386B9_6BC5_6CAD_41D3_33C6E8340EF4",
 "id": "camera_7913A6B9_6BC5_6CAD_41C3_EE76B081E6A8",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 60.28,
    "targetYaw": -2.02,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 120.12,
    "targetPitch": 10.18
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -49.87,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 19.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -79.01,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 7.6
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -120.71,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 8.1
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 154.88,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 5.09
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 90.31,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 2.32
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 36.05,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.2
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -2.64,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 26.19
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 3.33
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7BE377FD_6BC5_6CA5_417E_59F3ECBFE32A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 177.85,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarWidth": 10,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "3%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "3%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "gap": 0,
 "layout": "vertical",
 "minHeight": 1,
 "top": "3%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingBottom": 0,
 "bottom": "3%",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "overflow": "visible",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "idleSequence": "this.sequence_7AA604DE_6BC5_6CE7_41D4_98B86AA61F75",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -33.42,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7AA604DE_6BC5_6CE7_41D4_98B86AA61F75",
 "id": "camera_7AA634DE_6BC5_6CE7_41A9_5E24BF5C16FA",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7703348F_503A_71F2_41B8_C8F2687D9078",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -5.02,
  "pitch": -0.25
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7703348F_503A_71F2_41B8_C8F2687D9078",
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "label": "INFO",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "pressedBackgroundOpacity": 1,
 "width": 54,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "gap": 5,
 "layout": "horizontal",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, true, 0, null, null, false)",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverShadow": false,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "paddingBottom": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "propagateClick": true,
 "iconHeight": 0,
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 0,
 "iconWidth": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "backgroundOpacity": 0
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 1.64,
    "targetYaw": 62.3,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 2.28,
    "targetPitch": 0.25
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -20.03
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -22.8
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -37.62
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -45.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_6467D93E_6BC5_25A7_41C0_884E49229BF6",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 62.45,
  "pitch": 1.84
 }
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 1,
    "targetYaw": 0,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1,
    "targetPitch": 0
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.71
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.67
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -24.81
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -25.06
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -27.07
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_64AFF8E3_6BC5_24DC_4198_B664A8BAE877",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "width": "100%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 40,
 "transparencyActive": false,
 "minWidth": 40,
 "mode": "push",
 "height": "100%",
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "propagateClick": false,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_77F828FC_503E_5115_41CF_04F89C2CC876",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 9.55,
  "pitch": -33.91
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77F828FC_503E_5115_41CF_04F89C2CC876",
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera",
 "timeToIdle": 5000
},
{
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerVideoPlayer"
},
{
 "borderRadius": 0,
 "maxHeight": 95,
 "maxWidth": 250,
 "id": "Image_5EF9A31F_502E_7713_41B1_155B9E9559BD",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "url": "skin/Image_5EF9A31F_502E_7713_41B1_155B9E9559BD.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "class": "Image",
 "propagateClick": false,
 "verticalAlign": "middle",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2705"
 },
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_7B8B8A16_6BC5_2767_41CC_64490FCE6250",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "yaw": -1.36,
  "pitch": -6.86
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B8B8A16_6BC5_2767_41CC_64490FCE6250",
 "id": "camera_7B8B6A16_6BC5_2767_41D9_3314D352F525",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_79D2BBFC_6BC5_24AB_41CC_F73E3713458D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -85.76,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79D2BBFC_6BC5_24AB_41CC_F73E3713458D",
 "id": "camera_79D29BFC_6BC5_24AB_419C_2783A919DD32",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "maxHeight": 907,
 "maxWidth": 1322,
 "id": "Image_475656B5_506E_3117_41A0_63C52AAB81EA",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "url": "skin/Image_475656B5_506E_3117_41A0_63C52AAB81EA.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "class": "Image",
 "propagateClick": false,
 "verticalAlign": "middle",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image6016"
 },
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_64369E4A_6BC5_5FEC_41CC_F1E058EA279F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 163.49,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_64369E4A_6BC5_5FEC_41CC_F1E058EA279F",
 "id": "camera_64366E4A_6BC5_5FEC_41B0_807454A8A683",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -20.03
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -22.8
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -37.62
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -45.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 62.3,
  "pitch": 0.25
 }
},
{
 "borderRadius": 0,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarWidth": 10,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "gap": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minHeight": 60,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "height": 60,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "backgroundOpacity": 0.3
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 1.44,
    "targetYaw": 62.3,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1.88,
    "targetPitch": 0.25
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -20.03
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -22.8
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -37.62
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -45.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7AD9FFA3_6BC5_5D5D_41D2_8C83178DA6E8",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 63.37,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.71
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.67
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -24.81
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -25.06
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -27.07
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "idleSequence": "this.sequence_7A32EBCE_6BC5_24E4_41BA_0C7AAF6C0AD9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 112.42,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A32EBCE_6BC5_24E4_41BA_0C7AAF6C0AD9",
 "id": "camera_7A32DBCE_6BC5_24E4_41D3_89EFE64AFC59",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "scrollBarWidth": 10,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "gap": 3,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 20,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "height": 51,
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 },
 "backgroundOpacity": 0
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4",
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
 "class": "Photo",
 "height": 1500
},
{
 "idleSequence": "this.sequence_7A5B451D_6BC5_6D65_41B1_C6C7CC885825",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 165.13,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A5B451D_6BC5_6D65_41B1_C6C7CC885825",
 "id": "camera_7A5B751D_6BC5_6D65_41A5_FAAC71E19B52",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7BF6E81B_6BC5_636D_41C5_F1BCEEFB60BA",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -19.22,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BF6E81B_6BC5_636D_41C5_F1BCEEFB60BA",
 "id": "camera_7BF6981B_6BC5_636D_41D0_876F07304411",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7AC5399B_6BC5_656D_41D5_6EDC1BBE48D9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 28.21,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7AC5399B_6BC5_656D_41D5_6EDC1BBE48D9",
 "id": "camera_7AC4D99B_6BC5_656D_41CF_331B03DB4C85",
 "timeToIdle": 5000
},
{
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemPaddingTop": 3,
 "itemHeight": 156,
 "width": "100%",
 "itemThumbnailBorderRadius": 10,
 "itemPaddingRight": 3,
 "gap": 26,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "scrollBarColor": "#04A3E1",
 "selectedItemThumbnailShadow": true,
 "paddingLeft": 30,
 "borderSize": 0,
 "itemVerticalAlign": "top",
 "minHeight": 1,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "class": "ThumbnailGrid",
 "minWidth": 1,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemMinWidth": 50,
 "height": "91.025%",
 "itemLabelPosition": "bottom",
 "propagateClick": false,
 "itemLabelFontStyle": "normal",
 "itemLabelFontSize": 14,
 "shadow": false,
 "itemMode": "normal",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "scrollBarWidth": 10,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "backgroundOpacity": 0.05,
 "borderRadius": 5,
 "itemBackgroundColor": [],
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 30,
 "itemOpacity": 1,
 "itemThumbnailHeight": 125,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist",
 "itemHorizontalAlign": "center",
 "itemThumbnailWidth": 220,
 "itemLabelHorizontalAlign": "center",
 "itemThumbnailShadow": false,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemMaxWidth": 1000,
 "itemWidth": 220,
 "itemBorderRadius": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemLabelFontFamily": "Montserrat",
 "itemThumbnailOpacity": 1,
 "itemLabelTextDecoration": "none",
 "itemMinHeight": 50,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "itemBackgroundColorRatios": [],
 "backgroundColorDirection": "vertical",
 "selectedItemLabelFontWeight": "bold",
 "verticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "scrollBarMargin": 2,
 "itemPaddingBottom": 3,
 "itemLabelFontWeight": "normal",
 "itemMaxHeight": 1000,
 "data": {
  "name": "ThumbnailList"
 },
 "rollOverItemThumbnailShadow": true,
 "itemPaddingLeft": 3,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemBackgroundColorDirection": "vertical"
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.video_4DC63883_564D_77EF_41D3_729FE9100318",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_79A97824_6BC5_235B_41D2_DEFC00F3F197, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_79A97824_6BC5_235B_41D2_DEFC00F3F197, 0)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"
  }
 ],
 "id": "playList_79A97824_6BC5_235B_41D2_DEFC00F3F197"
},
{
 "idleSequence": "this.sequence_79DF70C3_6BC5_64DC_41C8_2F27D3DE6F83",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 174.42,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79DF70C3_6BC5_64DC_41C8_2F27D3DE6F83",
 "id": "camera_79DF60C3_6BC5_64DC_41C5_78269E14B9CC",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7B051F4F_6BC5_5DE5_41B5_441974A113D1",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 116.63,
  "pitch": -1.84
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B051F4F_6BC5_5DE5_41B5_441974A113D1",
 "id": "camera_7B04EF4F_6BC5_5DE5_41CB_A743C02BAF22",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7B4798EF_6BC5_64A5_41D8_0DBEDEE6B2E6",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 30.52,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B4798EF_6BC5_64A5_41D8_0DBEDEE6B2E6",
 "id": "camera_7B47B8EF_6BC5_64A5_41B0_D28B5EBF8106",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_771E90F9_503A_511F_41C2_B9C904B98D71",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_771E90F9_503A_511F_41C2_B9C904B98D71",
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "idleSequence": "this.sequence_7A122BA2_6BC5_255F_416D_A4A602EBF1C6",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 112.42,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A122BA2_6BC5_255F_416D_A4A602EBF1C6",
 "id": "camera_7A120BA2_6BC5_255F_41BB_F6A68FDD10BB",
 "timeToIdle": 5000
},
{
 "hfov": 360,
 "label": "Sala de Cine - Luz Tenue",
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
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
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMin": "140%",
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
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "borderRadius": 0,
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "rollOverIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_rollover.jpg",
 "width": "100%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 40,
 "transparencyActive": false,
 "minWidth": 40,
 "mode": "push",
 "height": "100%",
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_6B7BF538_502A_54D0_41C1_B6C36764FA2B, false, 0, null, null, false)",
 "propagateClick": false,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61_pressed_rollover.jpg",
 "cursor": "hand",
 "backgroundOpacity": 0
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
 "borderRadius": 0,
 "children": [
  "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_402E3BC3_565F_296F_41AF_19D956287FE7",
 "layout": "horizontal",
 "width": "8.685%",
 "right": "0%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "gap": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "class": "Container",
 "height": "44.915%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Container4584"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "thumbnailUrl": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_t.jpg",
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "class": "Panorama",
 "id": "panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
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
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6"
  },
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
   "backwardYaw": -17.24,
   "yaw": -155.53,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -17.24,
   "yaw": -155.51,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354"
  }
 ],
 "partial": false,
 "vfov": 180,
 "label": "Comedor - Vista Nocturna",
 "hfovMax": 130,
 "pitch": 0
},
{
 "paddingTop": 0,
 "borderRadius": 0,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "minHeight": 1,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "height": "89.701%",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.14vh;font-family:'Arimo';\">Residencia en</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.37vh;font-family:'Arimo';\">Rakiura Country</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">En el barrio privado m\u00e1s seguro y codiciado de Asunci\u00f3n. La zona del m\u00e1s alto nivel y de una comunidad excelente.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\">Superficie construida de 600m2.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\"><B>Planta alta:</B></SPAN><SPAN STYLE=\"font-size:1.79vh;\"> 4 dormitorios en suite con piso de madera de lapacho trabajado, el dormitorio matrimonial con vestidor y ba\u00f1o con hidromasaje, amplia terraza con parrilla y kichenette.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;\"><B>Planta Baja: </B></SPAN><SPAN STYLE=\"font-size:1.79vh;\">Amplio living comedor social, comedor y estar diario integrado de 15x9 mts aprox, sala de cine, gimnasio, doble piscina con deck de madera, quincho equipado con vinero y visicooler, cocina equipada y amoblada, sauna a vapor, hermoso jard\u00edn, cochera para 4 veh\u00edculos, </SPAN><SPAN STYLE=\"font-size:1.79vh;\"><I>Incluye todos los beneficios del club Rakiura</I></SPAN><SPAN STYLE=\"font-size:1.79vh;\">.</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_64259E2C_6BC5_5FAB_41D4_0E95A03B1EBD",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 163.49,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_64259E2C_6BC5_5FAB_41D4_0E95A03B1EBD",
 "id": "camera_64257E2C_6BC5_5FAB_41B2_F9D168C50971",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -45.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -4.21
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 37.56,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -4.71
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -163.67,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -6.22
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -136.29,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -4.21
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -95.34,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.2
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 158.65,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -14.01
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -113.18,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -5.72
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "idleSequence": "this.sequence_7A525B4F_6BC5_25E5_41CA_4C776F48E25D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -173.37,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A525B4F_6BC5_25E5_41CA_4C776F48E25D",
 "id": "camera_7A521B4E_6BC5_25E7_41C7_255F8D7E6B2B",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_7A89C4CA_6BC5_6CEC_419C_30EF241B1D4C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.98,
  "pitch": 0
 }
},
{
 "idleSequence": "this.sequence_7B914EDD_6BC5_5CE5_41C5_420DFE1DEC05",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 51.49,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B914EDD_6BC5_5CE5_41C5_420DFE1DEC05",
 "id": "camera_7B915EDD_6BC5_5CE5_41D0_1CF13A1BC896",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_6471A95A_6BC5_25EF_41B3_A5DFCA25E0C9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 86.28,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6471A95A_6BC5_25EF_41B3_A5DFCA25E0C9",
 "id": "camera_6471895A_6BC5_25EF_41C9_D73C7B2035C5",
 "timeToIdle": 5000
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.video_6F1B8249_60DF_EE01_41BF_FD4E601538CE",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_79B60825_6BC5_23A5_41D4_2F34E5CEF0D3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_79B60825_6BC5_23A5_41D4_2F34E5CEF0D3, 0)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"
  }
 ],
 "id": "playList_79B60825_6BC5_23A5_41D4_2F34E5CEF0D3"
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10",
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
 "class": "Photo",
 "height": 1333
},
{
 "idleSequence": "this.sequence_7A7DC043_6BC5_63DD_41D4_AD990B5524DE",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -91.69,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A7DC043_6BC5_63DD_41D4_AD990B5524DE",
 "id": "camera_7A7DF043_6BC5_63DD_41D2_88C04C1DEA2C",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7AF96FBF_6BC5_5CA5_41D1_F759C0DD63BB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -177.61,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7AF96FBF_6BC5_5CA5_41D1_F759C0DD63BB",
 "id": "camera_7AF97FBF_6BC5_5CA5_41BD_8F613E911D29",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_770D5914_503A_D315_41C7_BD98E4CD29E4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0.75,
  "pitch": 8.04
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_770D5914_503A_D315_41C7_BD98E4CD29E4",
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7B75D42C_6BC5_63A4_41D9_10C4259A4DE8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -81.43,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B75D42C_6BC5_63A4_41D9_10C4259A4DE8",
 "id": "camera_7B75C42C_6BC5_63A4_41D0_5A524F98B8DA",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7ABB9FF9_6BC5_5CAD_41CE_67EDA5622126",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 87.65,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7ABB9FF9_6BC5_5CAD_41CE_67EDA5622126",
 "id": "camera_7ABB6FF9_6BC5_5CAD_41C1_6B229CA80EEF",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 1,
    "targetYaw": 0,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1,
    "targetPitch": 0
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.71
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.67
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -24.81
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -25.06
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -27.07
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7925B87F_6BC5_23A5_41D3_2E5BD8B50265",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "idleSequence": "this.sequence_7970269D_6BC5_6F65_41D2_CE226337E7D2",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 159.26,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7970269D_6BC5_6F65_41D2_CE226337E7D2",
 "id": "camera_7973D69C_6BC5_6F6B_41C0_E8E464FF7FF5",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7B6E7F33_6BC5_5DBD_41A3_5A9DF2563614",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 92.55,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B6E7F33_6BC5_5DBD_41A3_5A9DF2563614",
 "id": "camera_7B6E4F33_6BC5_5DBD_41C2_D3C0537A584D",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 3.27,
  "pitch": 11.81
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7BB8A3F0_6BC5_64BB_41C3_EF388D7EEAE9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -137.38,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BB8A3F0_6BC5_64BB_41C3_EF388D7EEAE9",
 "id": "camera_7BB853F0_6BC5_64BB_41A4_B6262179B333",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7B09444B_6BC5_63ED_41B5_953C271C302D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -81.43,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B09444B_6BC5_63ED_41B5_953C271C302D",
 "id": "camera_7B09744B_6BC5_63ED_41A8_79AC2C264771",
 "timeToIdle": 5000
},
{
 "hfov": 360,
 "label": "Sala - Centro",
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -127.28,
   "yaw": 94.24,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -127.28,
   "yaw": 94.52,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354"
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
   "class": "AdjacentPanorama",
   "backwardYaw": 157.34,
   "yaw": -95.88,
   "distance": 1,
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 157.34,
   "yaw": -95.62,
   "distance": 1,
   "panorama": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -2.15,
   "yaw": -179.95,
   "distance": 1,
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -2.15,
   "yaw": -179.95,
   "distance": 1,
   "panorama": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 160.78,
   "yaw": -5.58,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 160.78,
   "yaw": -5.66,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -6.9,
   "yaw": -151.79,
   "distance": 1,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -6.9,
   "yaw": -151.57,
   "distance": 1,
   "panorama": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756"
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
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "idleSequence": "this.sequence_7A9BAFDC_6BC5_5CEB_41C3_AB233BEF57FE",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -177.61,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A9BAFDC_6BC5_5CEB_41C3_AB233BEF57FE",
 "id": "camera_7A9BBFDC_6BC5_5CEB_41C9_29FE3DD7745E",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7BB4FEF9_6BC5_5CAD_41B8_4124AB43F214",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 51.49,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BB4FEF9_6BC5_5CAD_41B8_4124AB43F214",
 "id": "camera_7BB4CEF9_6BC5_5CAD_41CD_D6806FFEC47D",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7BEFB35F_6BC5_65E5_41D5_7373DFA73CCB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 178.36,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BEFB35F_6BC5_65E5_41D5_7373DFA73CCB",
 "id": "camera_7BEFA35F_6BC5_65E5_41DA_4E3B665F5C77",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_78B14242_6BC5_67DF_41D8_596EFCE3B4F0",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -70.97,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_78B14242_6BC5_67DF_41D8_596EFCE3B4F0",
 "id": "camera_78B11242_6BC5_67DF_41D7_9A4834C16D35",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "width": "100%",
 "right": 20,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 40,
 "transparencyActive": false,
 "minWidth": 40,
 "mode": "push",
 "bottom": 12,
 "height": "100%",
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "propagateClick": false,
 "verticalAlign": "top",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_795F717A_6BC5_65AF_41B0_68D69D345264",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -35.28,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_795F717A_6BC5_65AF_41B0_68D69D345264",
 "id": "camera_795F117A_6BC5_65AF_41D0_7D2E677787F3",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7BA003D2_6BC5_64FF_41C9_CC37AB7A96EF",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -151.46,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BA003D2_6BC5_64FF_41C9_CC37AB7A96EF",
 "id": "camera_7BA033D2_6BC5_64FF_41A3_B9AE5B9BA3FD",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_77007457_503E_7113_41B9_B797530AF0B3",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77007457_503E_7113_41B9_B797530AF0B3",
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7BF3637B_6BC5_65AD_41D1_33A1171DB677",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -101.26,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7BF3637B_6BC5_65AD_41D1_33A1171DB677",
 "id": "camera_7BF3137B_6BC5_65AD_41C9_C462CBCF3808",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7B4B1F15_6BC5_5D65_41CB_4075B8A7C71D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 92.55,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B4B1F15_6BC5_5D65_41CB_4075B8A7C71D",
 "id": "camera_7B4AEF15_6BC5_5D65_41AF_2376544F10BA",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 1,
    "targetYaw": 0,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1,
    "targetPitch": 0
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.71
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.67
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -24.81
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -25.06
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -27.07
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_78F00D38_6BC5_5DAB_41C9_CDD09A450AD1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "idleSequence": "this.sequence_7AD9F9B8_6BC5_64AB_41A3_B81E80535E48",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -53.45,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7AD9F9B8_6BC5_64AB_41A3_B81E80535E48",
 "id": "camera_7AD9E9B8_6BC5_64AB_41B4_7D3914B11B36",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20",
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
 "class": "Photo",
 "height": 1000
},
{
 "idleSequence": "this.sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -24.62,
  "pitch": 27.13
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77F552D9_503D_D11F_41CE_D1B12F1879C8",
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7B94F3B4_6BC5_64A4_41B4_BB5813520EFB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -151.46,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B94F3B4_6BC5_64A4_41B4_BB5813520EFB",
 "id": "camera_7B94E3B4_6BC5_64A4_41D0_C5B47BB70EE8",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_64106E10_6BC5_5F7B_41C5_A248F115AB5F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -59.77,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_64106E10_6BC5_5F7B_41C5_A248F115AB5F",
 "id": "camera_64107E10_6BC5_5F7B_41A2_DEB08D3B8395",
 "timeToIdle": 5000
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_79F827FD_6BC5_2CA5_41B2_D7095D6F757E, [this.htmltext_79F917FE_6BC5_2CA7_41C7_A730169485AD,this.component_798747FF_6BC5_2CA5_4186_40F8F99F6A39,this.component_798777FF_6BC5_2CA5_419F_2A848693F9C4], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_79FBE7FD_6BC5_2CA5_41D8_5D6CCD38823F"
 ],
 "id": "playList_79FA57FA_6BC5_2CAF_41D7_F2AB90F619D7"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_79829802_6BC5_235F_41C0_E2E4C835C2D3, [this.htmltext_79831802_6BC5_235F_41C1_CFD1AC863DE2,this.component_79822803_6BC5_235D_41BA_814E6AA7F1D6,this.component_79825803_6BC5_235D_41D1_44FDFF84A1A6], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_79826802_6BC5_235F_41B3_F2A3F3507792"
 ],
 "id": "playList_7985E801_6BC5_235D_41A5_27CD8A7A6E87"
},
{
 "idleSequence": "this.sequence_79510CA2_6BC5_235F_41A4_0C311710FF26",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -126.65,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79510CA2_6BC5_235F_41A4_0C311710FF26",
 "id": "camera_7950ECA2_6BC5_235F_41C8_B1DE2145A3D0",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7991B620_6BC5_6F5B_41C7_EB0B68182172",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 123.41,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7991B620_6BC5_6F5B_41C7_EB0B68182172",
 "id": "camera_7991A620_6BC5_6F5B_41D2_3900ABF1BDFD",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_78D3A6F5_6BC5_6CA5_41D1_E13AE7EE59B7",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -132.28,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_78D3A6F5_6BC5_6CA5_41D1_E13AE7EE59B7",
 "id": "camera_78D346F5_6BC5_6CA5_414C_0D1B20AC4CBA",
 "timeToIdle": 5000
},
{
 "hfov": 360,
 "label": "Ba\u00f1o - Habitaci\u00f3n Master",
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 11.3,
   "yaw": -149.71,
   "distance": 1,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 11.3,
   "yaw": -149.47,
   "distance": 1,
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_649BC5B9_4C16_9F3F_41CE_03F1CF8B85B0",
  "this.overlay_60A2EB4F_4C35_EB53_41BB_7B4C45E778F5",
  "this.overlay_0DB44A7A_4C0E_953D_41C6_712CBBF32DAF",
  "this.overlay_0DBC62EA_4C0E_F55D_41CB_80F63DC048E7",
  "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_tcap0"
 ],
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "idleSequence": "this.sequence_7951E67C_6BC5_6FA4_41D4_B5539EBA3177",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 109.59,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7951E67C_6BC5_6FA4_41D4_B5539EBA3177",
 "id": "camera_7951967C_6BC5_6FA4_41D1_87383B1FF184",
 "timeToIdle": 5000
},
{
 "hfov": 360,
 "label": "Quincho - Parrilla",
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -56.59,
   "yaw": 130.71,
   "distance": 1,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -56.59,
   "yaw": 130.72,
   "distance": 1,
   "panorama": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -70.41,
   "yaw": 144.72,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -70.41,
   "yaw": 144.51,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -20.74,
   "yaw": -169.64,
   "distance": 1,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -20.74,
   "yaw": -169.76,
   "distance": 1,
   "panorama": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 47.72,
   "yaw": 98.57,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 47.72,
   "yaw": 98.46,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMin": "120%",
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
 "hfovMax": 120,
 "class": "Panorama",
 "audios": [
  "this.audio_72E69B50_6A95_06F5_41B8_9CB77B66D0F6"
 ]
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "class": "IconButton",
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_7895B72F_6BC5_6DA5_418F_02068FA0539A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 52.72,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7895B72F_6BC5_6DA5_418F_02068FA0539A",
 "id": "camera_7895572F_6BC5_6DA5_4192_081C72052D5F",
 "timeToIdle": 5000
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
  "class": "VideoResource",
  "width": 1144,
  "mp4Url": "media/video_6F1B8249_60DF_EE01_41BF_FD4E601538CE.mp4",
  "height": 644
 }
},
{
 "hfov": 360,
 "label": "Pasillo Acceso a Parrilla",
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -93.72,
   "yaw": 88.31,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -93.72,
   "yaw": 88.14,
   "distance": 1,
   "panorama": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -169.64,
   "yaw": -20.74,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -169.64,
   "yaw": -20.84,
   "distance": 1,
   "panorama": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 15.7,
   "yaw": 42.62,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 15.7,
   "yaw": 42.63,
   "distance": 1,
   "panorama": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_55BD891B_4C12_F4F2_41BF_BD7A099FA4FB",
  "this.overlay_569D5C53_4C13_ED72_41C5_56F2E1168FED",
  "this.overlay_55344675_4C12_7D37_41CA_0C7A84DACAAA",
  "this.overlay_79858F87_4C0D_ABD3_41C2_6BD4B90B4286",
  "this.overlay_7A5E25AC_4C0D_9FD5_41A7_29C3FBE038B8",
  "this.overlay_7ABCF3A7_4DF3_FBD3_41D0_D18E2BE7D6F6",
  "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_tcap0"
 ],
 "hfovMax": 120,
 "class": "Panorama",
 "audios": [
  "this.audio_72AA5CA7_6A95_025B_41C5_22B66B8B256F"
 ]
},
{
 "hfov": 360,
 "label": "Planta Alta - Habitaci\u00f3n",
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 53.35,
   "yaw": 146.58,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 53.35,
   "yaw": 146.8,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_6A5E0209_4C0E_94DF_417D_46B9DFD108C3",
  "this.overlay_6261EA3E_4C3F_B535_41D0_801F1A3A3344",
  "this.overlay_7243A9E8_4C0E_775E_41A5_59C64522A4DF",
  "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_tcap0"
 ],
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "width": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingBottom": 0,
 "class": "IconButton",
 "propagateClick": true,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "backgroundOpacity": 0
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
  "class": "VideoResource",
  "width": 540,
  "mp4Url": "media/video_4DC63883_564D_77EF_41D3_729FE9100318.mp4",
  "height": 800
 }
},
{
 "class": "FadeInEffect",
 "duration": 500,
 "easing": "linear",
 "id": "effect_13185EDD_502A_7550_41C3_AE7B43D21853"
},
{
 "hfov": 360,
 "label": "Escalera - Entrepiso",
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -161.79,
   "yaw": 6.63,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -161.79,
   "yaw": 6.64,
   "distance": 1,
   "panorama": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -151.79,
   "yaw": -6.9,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -151.79,
   "yaw": -6.95,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223"
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
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 126.55,
   "yaw": -14.87,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 126.55,
   "yaw": 16.16,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 126.55,
   "yaw": -14.82,
   "distance": 1,
   "panorama": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "3%",
 "width": 1557.46,
 "gap": 10,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "minHeight": 1,
 "top": "3%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "90.63%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 10,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19",
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
 "class": "Photo",
 "height": 1333
},
{
 "idleSequence": "this.sequence_640AB978_6BC5_25AB_41D7_79CE455DEC85",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 86.28,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_640AB978_6BC5_25AB_41D7_79CE455DEC85",
 "id": "camera_640A8977_6BC5_25A4_41B6_4F02FCA2D9E1",
 "timeToIdle": 5000
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.video_76BF82AE_56C2_FB39_41D0_DF287E74780C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_79A98824_6BC5_235B_41C7_263173E87B75, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_79A98824_6BC5_235B_41C7_263173E87B75, 0)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"
  }
 ],
 "id": "playList_79A98824_6BC5_235B_41C7_263173E87B75"
},
{
 "idleSequence": "this.sequence_79FF80F6_6BC5_64A7_41D3_934478DFC340",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 158.4,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79FF80F6_6BC5_64A7_41D3_934478DFC340",
 "id": "camera_79FFA0F6_6BC5_64A7_41A6_A9CA5DEEB9A6",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "label": "UBICACI\u00d3N",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "pressedBackgroundOpacity": 1,
 "width": 83,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "gap": 5,
 "layout": "horizontal",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "paddingBottom": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "propagateClick": true,
 "iconHeight": 32,
 "data": {
  "name": "Button location"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "backgroundOpacity": 0
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 1,
    "targetYaw": 0,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1,
    "targetPitch": 0
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.71
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.67
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -24.81
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -25.06
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -27.07
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7BB10A41_6BC5_27DD_41C4_90BFECCC7922",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "id": "window_73465F18_502E_CF1D_41D3_CDAB91BFC330",
 "width": 400,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "gap": 10,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBorderColor": "#000000",
 "scrollBarColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "borderSize": 0,
 "headerBorderColor": "#000000",
 "titlePaddingLeft": 5,
 "bodyPaddingRight": 0,
 "closeButtonPaddingLeft": 5,
 "closeButtonPressedBorderColor": "#000000",
 "bodyPaddingTop": 0,
 "headerPaddingRight": 0,
 "minHeight": 20,
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "bodyBackgroundColor": [
  "#000000"
 ],
 "bodyBorderSize": 0,
 "class": "Window",
 "minWidth": 20,
 "modal": true,
 "height": 600,
 "closeButtonPaddingTop": 5,
 "title": "\u00c1lbum de Fotos",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "closeButtonPressedBackgroundColor": [],
 "headerPaddingLeft": 10,
 "veilOpacity": 0.4,
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconLineWidth": 3,
 "bodyPaddingLeft": 0,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "shadowBlurRadius": 6,
 "closeButtonBackgroundOpacity": 1,
 "propagateClick": false,
 "shadow": true,
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 20,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconWidth": 20,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBorderColor": "#000000",
 "borderRadius": 5,
 "backgroundOpacity": 1,
 "children": [
  "this.container_79F827FD_6BC5_2CA5_41B2_D7095D6F757E"
 ],
 "closeButtonIconHeight": 20,
 "headerBorderSize": 0,
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "shadowColor": "#000000",
 "closeButtonRollOverBackgroundColor": [],
 "closeButtonRollOverIconLineWidth": 2,
 "paddingRight": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0.19
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingBottom": 5,
 "footerBorderSize": 0,
 "titlePaddingTop": 5,
 "bodyBackgroundOpacity": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerHeight": 5,
 "titleFontStyle": "normal",
 "contentOpaque": false,
 "closeButtonPressedBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "paddingBottom": 0,
 "footerBackgroundOpacity": 0,
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "closeButtonPaddingRight": 5,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "titleFontSize": "1.29vmin",
 "footerBorderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "titleFontColor": "#000000",
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "titlePaddingRight": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonBorderSize": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColorRatios": [
  1
 ],
 "data": {
  "name": "Window10442"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowSpread": 1,
 "closeButtonRollOverBackgroundColorDirection": "vertical"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 1,
    "targetYaw": 0,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1,
    "targetPitch": 0
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 18.21,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -3.71
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 43.59,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.67
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 13.44,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -24.81
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -32.53,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -25.06
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -80.27,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -27.07
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -34.61
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_78D0AD1C_6BC5_5D6B_41D7_0BFDAA3ACD81",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "idleSequence": "this.sequence_78F03208_6BC5_676B_41D6_DEA8E91FCE32",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 131.77,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_78F03208_6BC5_676B_41D6_DEA8E91FCE32",
 "id": "camera_78F02208_6BC5_676B_41D5_61EEBB369E34",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "id": "Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B",
 "width": "100%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "url": "skin/Image_6C9FC208_5026_2CB0_41C9_819EFCEBEA6B.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "propagateClick": true,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image24645"
 },
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "label": "PERSPECTIVAS",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "pressedBackgroundOpacity": 1,
 "width": 107,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "gap": 5,
 "layout": "horizontal",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "paddingBottom": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "propagateClick": true,
 "iconHeight": 32,
 "data": {
  "name": "Button panorama list"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_643D32EA_6BC5_64AF_41DA_D4F7D86F7EF0",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 84.12,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_643D32EA_6BC5_64AF_41DA_D4F7D86F7EF0",
 "id": "camera_643D22EA_6BC5_64AF_41D5_9198E5049BE3",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_7AF7C4AD_6BC5_6CA5_41D2_04962E49843F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 126.64,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B"
 ],
 "scrollBarWidth": 10,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "3%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "3%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "top": "3%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingBottom": 0,
 "bottom": "3%",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "idleSequence": "this.sequence_7B803856_6BC5_63E4_41CD_D4B626657FF3",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 173.1,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B803856_6BC5_63E4_41CD_D4B626657FF3",
 "id": "camera_7B802856_6BC5_63E4_41CA_7C9A1967F8A4",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Image_475656B5_506E_3117_41A0_63C52AAB81EA"
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "layout": "absolute",
 "width": "85%",
 "backgroundColorRatios": [
  0
 ],
 "gap": 10,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "backgroundOpacity": 1
},
{
 "idleSequence": "this.sequence_64252994_6BC5_257B_41B1_BECD6D14985B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 10.36,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_64252994_6BC5_257B_41B1_BECD6D14985B",
 "id": "camera_64250994_6BC5_257B_41BD_4CDF73A51EB5",
 "timeToIdle": 5000
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
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "camera": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_camera"
  },
  {
   "media": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera"
  },
  {
   "media": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera"
  },
  {
   "media": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_camera"
  },
  {
   "media": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera"
  },
  {
   "media": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera"
  },
  {
   "media": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_camera"
  },
  {
   "media": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera"
  },
  {
   "media": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_camera"
  },
  {
   "media": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera"
  },
  {
   "media": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera"
  },
  {
   "media": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera"
  },
  {
   "media": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera"
  },
  {
   "media": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera"
  },
  {
   "media": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_camera"
  },
  {
   "media": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera"
  },
  {
   "media": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera"
  },
  {
   "media": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera"
  },
  {
   "media": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera"
  },
  {
   "media": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_camera"
  },
  {
   "media": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_camera"
  },
  {
   "media": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera"
  },
  {
   "media": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera"
  },
  {
   "media": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera"
  },
  {
   "media": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera"
  },
  {
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 0)",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)"
},
{
 "hfov": 360,
 "label": "Sala - Living",
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 109.03,
   "yaw": 89.87,
   "distance": 1,
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 109.03,
   "yaw": 89.64,
   "distance": 1,
   "panorama": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64"
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
   "backwardYaw": -95.88,
   "yaw": 157.34,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -95.88,
   "yaw": 157.22,
   "distance": 1,
   "panorama": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223"
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
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
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
 "hfovMax": 120,
 "class": "Panorama"
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61"
 ],
 "id": "Container_6B7BD538_502A_54D0_41CC_674161DF5902",
 "left": "3%",
 "right": "3%",
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "minHeight": 1,
 "top": "3%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "90%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 5,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "middle",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 5,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_7AE2649E_6BC5_6364_41B6_18494653A6D9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.73,
  "pitch": -4.59
 }
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "width": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.shareSocial('tw', 'https://sr1.visitapy.com', false)",
 "propagateClick": true,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_78B2A74C_6BC5_6DEB_41A5_D56CDC7CFE57",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -22.66,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_78B2A74C_6BC5_6DEB_41A5_D56CDC7CFE57",
 "id": "camera_78B2574C_6BC5_6DEB_41D1_56745CCF8D25",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 92.45,
  "pitch": -1.76
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_770A8A0C_503A_30F6_4185_035D5EC16F6B",
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7870010A_503E_30FD_41BC_311867DA2A0C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -3.52,
  "pitch": -18.59
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7870010A_503E_30FD_41BC_311867DA2A0C",
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7B275F6B_6BC5_5DAD_41CF_864E7DAE9204",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 118.47,
  "pitch": -5.51
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B275F6B_6BC5_5DAD_41CF_864E7DAE9204",
 "id": "camera_7B272F6B_6BC5_5DAD_41C9_3D228A29EE57",
 "timeToIdle": 5000
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "camera": "this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_camera"
  },
  {
   "media": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_camera"
  },
  {
   "media": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354_camera"
  },
  {
   "media": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_camera"
  },
  {
   "media": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_camera"
  },
  {
   "media": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_camera"
  },
  {
   "media": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_camera"
  },
  {
   "media": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_camera"
  },
  {
   "media": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_camera"
  },
  {
   "media": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_camera"
  },
  {
   "media": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_camera"
  },
  {
   "media": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_camera"
  },
  {
   "media": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_camera"
  },
  {
   "media": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_camera"
  },
  {
   "media": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475DC811_4C15_94CF_41AB_229107954A38_camera"
  },
  {
   "media": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 15, 16)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_camera"
  },
  {
   "media": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_camera"
  },
  {
   "media": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 17, 18)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera"
  },
  {
   "media": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 18, 19)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_camera"
  },
  {
   "media": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 19, 20)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_camera"
  },
  {
   "media": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 20, 21)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_camera"
  },
  {
   "media": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 21, 22)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_camera"
  },
  {
   "media": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 22, 23)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_camera"
  },
  {
   "media": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 23, 24)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_camera"
  },
  {
   "media": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 24, 25)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_camera"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 25, 0)"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)"
},
{
 "idleSequence": "this.sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -87.68,
  "pitch": -3.27
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_7B106A96_6BC5_2764_41C6_770F473238B7",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 128.66,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B106A96_6BC5_2764_41C6_770F473238B7",
 "id": "camera_7B104A96_6BC5_2764_41B9_6A859EF0D0DB",
 "timeToIdle": 5000
},
{
 "thumbnailUrl": "media/album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2_t.jpg",
 "duration": 5500,
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2",
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
 "class": "Photo",
 "height": 1500
},
{
 "idleSequence": "this.sequence_7933FCFF_6BC5_5CA5_41B1_652601D4C0B2",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 162.76,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7933FCFF_6BC5_5CA5_41B1_652601D4C0B2",
 "id": "camera_7933CCFF_6BC5_5CA5_41D2_FDDA9FCF458F",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_78D131EB_6BC5_64AD_41C6_BB187C78E144",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -49.29,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_78D131EB_6BC5_64AD_41C6_BB187C78E144",
 "id": "camera_78D0D1EB_6BC5_64AD_41D3_598AC9106035",
 "timeToIdle": 5000
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "class": "IconButton",
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "idleSequence": "this.sequence_7AFD89D5_6BC5_64E5_41D0_B518EDBDFF1D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -53.45,
  "pitch": 0
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7AFD89D5_6BC5_64E5_41D0_B518EDBDFF1D",
 "id": "camera_7AFDA9D5_6BC5_64E5_41C2_7634A143321A",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 2.21,
    "targetYaw": 62.3,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.42,
    "targetPitch": 0.25
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 96.85,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -20.03
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 44.09,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -22.8
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": 26.5,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -112.42,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -67.96,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -37.62
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -152.11,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -45.66
   },
   {
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetYaw": -18.72,
    "path": "shortest",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25,
    "targetPitch": -7.98
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_7BC0A306_6BC5_6567_41D3_E0249164831B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 62.45,
  "pitch": -2.76
 }
},
{
 "loop": true,
 "autoplay": true,
 "audio": "this.audioresource_752C97BB_56FE_D91F_41D4_9790BBDAC21E",
 "maximumAngle": 166.56,
 "pitch": -4.52,
 "class": "DirectionalPanoramaAudio",
 "id": "audio_725841F7_56C7_3928_418B_5A553C889C71",
 "yaw": 47.48,
 "data": {
  "label": "water sounds"
 }
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 5.92,
   "targetYaw": 0.75,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 10.89,
   "targetPitch": 8.04
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.07
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 5.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7853176B_6BC5_6DAC_41CE_A6B2835488C2",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 45.57,
   "targetYaw": -24.62,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 90.55,
   "targetPitch": 27.13
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78913225_6BC5_67A4_41D3_9AEDEDBC15BB",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 66.48,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 132.58,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -22.3
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79DE95C7_6BC5_6CE5_41DA_6090B68132E0",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 66.48,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 132.58,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -22.3
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A3C459A_6BC5_6D6F_41CF_08CD42F3B787",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 20.96,
   "targetYaw": -20.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 41.11,
   "targetPitch": -3.01
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 9.61
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B5FF40D_6BC5_6365_41D0_C377A41CFA7C",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 32.17,
   "targetYaw": -24.62,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 63.64,
   "targetPitch": 27.13
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_793296D7_6BC5_6CE5_41BD_FB04D06A5E38",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.92,
   "hfov": 12.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.08
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.83,
   "image": "this.AnimatedImageResource_75CF105F_6142_AA01_41BB_88D1493AA187",
   "pitch": -7.08,
   "yaw": -40.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6BD98EFF_4C0D_AD32_41D3_178505AC51C0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_7B4AEF15_6BC5_5D65_41AF_2376544F10BA); this.mainPlayList.set('selectedIndex', 17)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.3,
   "hfov": 9.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.28
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02 Right"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.65,
   "image": "this.AnimatedImageResource_75CF4060_6142_AA3F_41C3_09C7491790E9",
   "pitch": -8.28,
   "yaw": 11.3,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64978149_4C12_F75E_41C0_FA527622DCC1",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70, this.camera_7BED2EA3_6BC5_5F5D_413F_6A976B3D3DFE); this.mainPlayList.set('selectedIndex', 22)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.86,
   "hfov": 15.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.9
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.92,
   "image": "this.AnimatedImageResource_75CE9060_6142_AA3F_41C1_63219C15BFDB",
   "pitch": -4.9,
   "yaw": -113.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64834E7A_4C17_ED3D_41D1_C0DF7AD568DB",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_7B915EDD_6BC5_5CE5_41D0_1CF13A1BC896); this.mainPlayList.set('selectedIndex', 23)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.66,
   "hfov": 17.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_3_0_map.gif",
      "width": 16,
      "height": 34
     }
    ]
   },
   "pitch": -6.61
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "\u000d    Balc\u00f3n"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_3_0.png",
      "width": 475,
      "height": 1014
     }
    ]
   },
   "pitch": -6.61,
   "yaw": -113.66,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7D7A7CEF_4C37_ED52_41C4_A5D88A210E28",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_7BB4CEF9_6BC5_5CAD_41CD_D6806FFEC47D); this.mainPlayList.set('selectedIndex', 23)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.92,
   "hfov": 17.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_4_0_map.gif",
      "width": 16,
      "height": 33
     }
    ]
   },
   "pitch": -7.36
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_4_0.png",
      "width": 475,
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
 "id": "overlay_630C59D7_4C35_B772_41AF_C1BF4A5F8B81",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_7B6E4F33_6BC5_5DBD_41C2_D3C0537A584D); this.mainPlayList.set('selectedIndex', 17)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.68,
   "hfov": 16.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_5_0_map.gif",
      "width": 16,
      "height": 31
     }
    ]
   },
   "pitch": -8.77
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "\u000d\u000d     Ba\u00f1o"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_5_0.png",
      "width": 475,
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
 "id": "overlay_7C27B320_4C32_F4CE_41D1_558125506B6C",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70, this.camera_7B862EC0_6BC5_5CDC_41DA_56EFDD136BA3); this.mainPlayList.set('selectedIndex', 22)"
  }
 ]
},
{
 "yaw": -119.71,
 "bleachingDistance": 0.4,
 "pitch": 10.36,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_72B4E25A_4C0E_9572_41CA_E94D7E32E9E4"
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_tcap0",
 "distance": 50,
 "inertia": false
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
   "easing": "cubic_in_out",
   "pitchSpeed": 31.86,
   "targetYaw": -23.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 63.02,
   "targetPitch": -0.75
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -14.26
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 6.34
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78F5D712_6BC5_6D7F_41B9_3C55BC814A4A",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 19.14,
   "targetYaw": 0.75,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 37.44,
   "targetPitch": 8.04
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.07
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 5.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B49790B_6BC5_656D_41D2_55CCBDE50DDD",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 13.68,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 26.47,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 47.79
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A5DC016_6BC5_6367_41B0_3CB25D589C7C",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 31.31,
   "targetYaw": -5.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 61.91,
   "targetPitch": -0.25
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79B1B650_6BC5_6FFB_41BD_53725666BE2E",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 10.67,
   "targetYaw": -38.25,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 20.43,
   "targetPitch": -22.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -16.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 7.85
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BC7AE68_6BC5_5FAB_41D4_009D91FD9302",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 54.98,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 109.47,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -22.3
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A1D356D_6BC5_6DA5_41D1_A197C521AA0D",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 32.36,
   "targetYaw": -5.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 64.01,
   "targetPitch": -0.25
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7971C196_6BC5_6567_41A7_D190BC96A04E",
 "restartMovementDelay": 5000
},
{
 "mp3Url": "media/audio_72C6ADEA_6A95_1DD5_41D7_F0F2AC5858C7.mp3",
 "oggUrl": "media/audio_72C6ADEA_6A95_1DD5_41D7_F0F2AC5858C7.ogg",
 "class": "AudioResource",
 "id": "audioresource_7D41B47A_6A97_02B4_41CE_CF73D720F47F"
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 4.75,
   "targetYaw": -5.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 8.54,
   "targetPitch": -0.25
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BFCB838_6BC5_63AB_41D8_3B4B3E4229F4",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 18.85,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.87,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 47.79
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79FEC5F3_6BC5_6CBD_41D9_D0C775D059E7",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.77,
   "hfov": 16.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.7
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.91,
   "image": "this.AnimatedImageResource_75FA5047_6142_AA00_41A2_2F1A9D5BE271",
   "pitch": -8.7,
   "yaw": -19.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4B06FB75_5C8D_E629_41D0_39ACE8264920",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_78913D55_6BC5_5DE4_41D1_C1D2D3F5E9F8); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.73,
   "hfov": 14.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_1_0_map.gif",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": -7.16
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "   Living"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_1_0.png",
      "width": 403,
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
 "id": "overlay_4B06EB75_5C8D_E629_41D0_F40FAA7834DA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_64715DBC_6BC5_5CAB_41B8_B91E53EDF7C4); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.71,
   "hfov": 10.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -20.48
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.25,
   "image": "this.AnimatedImageResource_75FD8047_6142_AA00_419F_F28EB873CCBE",
   "pitch": -20.48,
   "yaw": 62.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_44CECBC8_5C8E_E667_41C8_45A16FBDF932",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.35,
   "hfov": 10.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_3_0_map.gif",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": -19.19
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "   Medio"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_3_0.png",
      "width": 321,
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
 "id": "overlay_45DA1407_5C8D_61EA_41B1_2CF401771FB5",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.71,
   "hfov": 8.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.33
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.8,
   "image": "this.AnimatedImageResource_75FB5048_6142_AA00_41B1_958E9DBD2AB1",
   "pitch": 2.33,
   "yaw": 62.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_456ED3AF_5CF3_2639_41BE_00D2618002D8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_78D0AD1C_6BC5_5D6B_41D7_0BFDAA3ACD81); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.78,
   "hfov": 9.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_5_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 3.32
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "   Fondo"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_5_0.png",
      "width": 259,
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
 "id": "overlay_44EF3CAC_5CF3_623E_41D2_97DC21AC8F5F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_78F00D38_6BC5_5DAB_41C9_CDD09A450AD1); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "hfov": 79.7,
 "videoVisibleOnStop": true,
 "video": {
  "class": "VideoResource",
  "width": 1144,
  "mp4Url": "media/video_6F1B8249_60DF_EE01_41BF_FD4E601538CE.mp4",
  "height": 644
 },
 "id": "overlay_70131B11_60C2_7E01_4189_E40E6053CCCF",
 "enabledInCardboard": true,
 "vfov": 62.32,
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/overlay_70131B11_60C2_7E01_4189_E40E6053CCCF_t.jpg",
    "width": 1280,
    "height": 720
   }
  ]
 },
 "useHandCursor": true,
 "roll": -0.22,
 "yaw": -109.81,
 "blending": 0,
 "rotationY": 6.49,
 "rotationX": -0.46,
 "pitch": 1.02,
 "click": "this.overlay_70131B11_60C2_7E01_4189_E40E6053CCCF.play()",
 "stateChange": "if(this.overlay_70131B11_60C2_7E01_4189_E40E6053CCCF.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_70131B11_60C2_7E01_4189_E40E6053CCCF', [this.overlay_70131B11_60C2_7E01_4189_E40E6053CCCF]); } else { this.resumeGlobalAudios('overlay_70131B11_60C2_7E01_4189_E40E6053CCCF'); }",
 "autoplay": false,
 "distance": 50,
 "class": "VideoPanoramaOverlay",
 "data": {
  "label": "Video"
 }
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -14.26
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 6.34
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7701E20A_503A_D0FD_41C2_B1D6188468D4",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.28,
   "hfov": 23.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -31.48
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 23.6,
   "image": "this.AnimatedImageResource_75EEB03B_6142_AA01_41D8_61A7D4549873",
   "pitch": -31.48,
   "yaw": -127.28,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5A02EA85_4C12_F5D7_41D2_8FCF819F522E",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_79D29BFC_6BC5_24AB_419C_2783A919DD32); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.31,
   "hfov": 17.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.77
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.8,
   "image": "this.AnimatedImageResource_75EED03B_6142_AA01_41D3_851460DA5A82",
   "pitch": -8.77,
   "yaw": 156.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_59341A7B_4C15_9533_41C3_0487EA40E264",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6, this.camera_7A120BA2_6BC5_255F_41BB_F6A68FDD10BB); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.63,
   "hfov": 10.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.13
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.32,
   "image": "this.AnimatedImageResource_75EEE03B_6142_AA01_41D2_6D30AED34620",
   "pitch": -7.13,
   "yaw": -20.63,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5156665F_4C12_9D72_41B6_A38066CA80C7",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.79,
   "hfov": 16.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.22
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.2,
   "image": "this.AnimatedImageResource_75EE203C_6142_AA07_41AF_F17CF60246BD",
   "pitch": 7.22,
   "yaw": -161.79,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_52E662BC_4C13_9535_41C3_08531DC1890E",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_7A521B4E_6BC5_25E7_41C7_255F8D7E6B2B); this.mainPlayList.set('selectedIndex', 16)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.19,
   "hfov": 23.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_4_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -28.86
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "      Sala - Centro"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 23.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_4_0.png",
      "width": 741,
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
 "id": "overlay_715392A3_4C0D_F5D1_41A3_454BAED9273F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_79F34C2A_6BC5_23AF_41B8_7B6D47E4BFFC); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.77,
   "hfov": 12.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_5_0_map.gif",
      "width": 16,
      "height": 29
     }
    ]
   },
   "pitch": 11.33
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Escalera\u000d Entrepiso"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_5_0.png",
      "width": 342,
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
 "id": "overlay_7131CB8C_4C12_6BD6_41B2_B7A26C46B627",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_7A730B7B_6BC5_25AD_41DA_502DEC3CE9FF); this.mainPlayList.set('selectedIndex', 16)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.88,
   "hfov": 10.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_6_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -5.15
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Piscinas"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_6_0.png",
      "width": 284,
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
 "id": "overlay_716119CF_4C17_9752_41CD_34F0DAA56395",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.28,
   "hfov": 17.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_7_0_map.gif",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": -7.22
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Escritorio"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_7_0.png",
      "width": 497,
      "height": 695
     }
    ]
   },
   "pitch": -7.22,
   "yaw": 156.28,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_73B7B12B_4C16_B4D3_41BA_A0020CA60648",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6, this.camera_7A32DBCE_6BC5_24E4_41D3_89EFE64AFC59); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "yaw": 46.6,
 "bleachingDistance": 0.4,
 "pitch": 75.68,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_7279217F_4C0D_9732_41D1_FA5340FD8914"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.24,
   "hfov": 18.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_8_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -24.29
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 18.7,
   "image": "this.AnimatedImageResource_75E1F03D_6142_AA01_41D3_8683D49AE53F",
   "pitch": -24.29,
   "yaw": -17.24,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4CA90992_5CB7_22EA_41AD_ADA049F9006B",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC, this.camera_7992FC58_6BC5_23EB_41BC_572FF7BE51E3); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.24,
   "hfov": 18.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_9_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -21.35
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "       Perspectiva\u000d         Nocturna"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 18.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_9_0.png",
      "width": 537,
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
 "id": "overlay_530E5592_5CB5_62EB_41CF_CD34D32E693D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC, this.camera_79B01C84_6BC5_235B_41D3_23B9074C6C7A); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5E43600B_4C16_74D3_41C9_0835704A9354_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 16.22,
   "targetYaw": -38.25,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 31.59,
   "targetPitch": -22.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -16.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 7.85
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B21497F_6BC5_65A5_41B0_FD1D667F7EAD",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -150.36,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.21
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 115.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 74.24,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.02
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7C6BA396_503E_D715_41CB_1B97B732862D",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.6,
   "hfov": 10.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.62
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.72,
   "image": "this.AnimatedImageResource_75F72054_6142_AA07_41D3_2D04632FD2B5",
   "pitch": -6.62,
   "yaw": -21.6,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_53684693_4C76_9DF3_4181_EF2767F1A9C2",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7BDA8341_6BC5_65DD_41B7_2E8CAB47D774); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.23,
   "hfov": 10.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.64
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.61,
   "image": "this.AnimatedImageResource_75F76054_6142_AA07_41AF_2AD3A6F958EC",
   "pitch": -10.64,
   "yaw": -48.23,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6CE24BFA_4C76_EB32_41B4_9F999091A2FA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_7B2D9467_6BC5_63A5_419B_4C208196421C); this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.7,
   "hfov": 10.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.33
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.75,
   "image": "this.AnimatedImageResource_75F68054_6142_AA07_4198_EBF1094E9562",
   "pitch": -5.33,
   "yaw": 15.7,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_53794FA5_4C76_6BD7_41C5_3C53F52B35DE",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_7BB853F0_6BC5_64BB_41A4_B6262179B333); this.mainPlayList.set('selectedIndex', 12)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.72,
   "hfov": 10.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.06
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.77,
   "image": "this.AnimatedImageResource_75F45055_6142_AA01_41CE_DA7E49B2A8A7",
   "pitch": -4.06,
   "yaw": 47.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_535CC597_4C75_BFF2_418C_EBE38CA692F5",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_7B75C42C_6BC5_63A4_41D0_5A524F98B8DA); this.mainPlayList.set('selectedIndex', 13)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.81,
   "hfov": 10.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 14.5
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.45,
   "image": "this.AnimatedImageResource_75F47055_6142_AA01_41C4_FD95038415F1",
   "pitch": 14.5,
   "yaw": 31.81,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6D90C5FD_4C72_9F36_41CE_AE11C1BB2BB1",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_7BF3137B_6BC5_65AD_41C9_C462CBCF3808); this.mainPlayList.set('selectedIndex', 24)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.51,
   "hfov": 10.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 21.58
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.04,
   "image": "this.AnimatedImageResource_75F78055_6142_AA01_41B5_258A50734517",
   "pitch": 21.58,
   "yaw": -16.51,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6D8DA36E_4C72_7B55_41CD_8289197836CB",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_7B94E3B4_6BC5_64A4_41D0_C5B47BB70EE8); this.mainPlayList.set('selectedIndex', 23)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.23,
   "hfov": 8.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_6_0_map.gif",
      "width": 16,
      "height": 24
     }
    ]
   },
   "pitch": -8.94
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Piscinas"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_6_0.png",
      "width": 234,
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
 "id": "overlay_7D0CF396_4C1E_9BF2_41C7_3F8427E9D057",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_7AC16483_6BC5_635D_41BB_381A90F0AF79); this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.65,
   "hfov": 9.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_7_0_map.gif",
      "width": 16,
      "height": 23
     }
    ]
   },
   "pitch": -1.9
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "   Parrilla"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_7_0.png",
      "width": 250,
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
 "id": "overlay_781F5669_4C1F_FD5F_41D1_74EDFDF4A74D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_7B09744B_6BC5_63ED_41A8_79AC2C264771); this.mainPlayList.set('selectedIndex', 13)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.76,
   "hfov": 8.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_8_0_map.gif",
      "width": 16,
      "height": 24
     }
    ]
   },
   "pitch": -4.48
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_8_0.png",
      "width": 234,
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
 "id": "overlay_7FD4E63F_4C1E_BD33_41BB_EFAFFE8E89FF",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7BEFA35F_6BC5_65E5_41DA_4E3B665F5C77); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.74,
   "hfov": 8.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_9_0_map.gif",
      "width": 16,
      "height": 23
     }
    ]
   },
   "pitch": -3.46
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "   Pasillo"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_9_0.png",
      "width": 246,
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
 "id": "overlay_79AC6ECE_4C12_6D55_4193_56FF271E3F5E",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_7B5FE40D_6BC5_6365_4196_5162375618B1); this.mainPlayList.set('selectedIndex', 12)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.63,
   "hfov": 7.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_10_0_map.gif",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": 23.75
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "   Balc\u00f3n\u000dPlanta Alta"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_10_0.png",
      "width": 232,
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
 "id": "overlay_787DA558_4C12_9F7E_41CD_56E54DDE0451",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_7BA033D2_6BC5_64FF_41A3_B9AE5B9BA3FD); this.mainPlayList.set('selectedIndex', 23)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.67,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_11_0_map.gif",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 17.29
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Quincho\u000dPlanta Alta"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_11_0.png",
      "width": 232,
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
 "id": "overlay_7FD3A82F_4C15_94D2_41D1_10DAD6C733F7",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_7B85A397_6BC5_6565_41D3_36C24D9DC410); this.mainPlayList.set('selectedIndex', 24)"
  }
 ]
},
{
 "yaw": 89.06,
 "bleachingDistance": 0.4,
 "pitch": 62.87,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_72507ADB_4C0F_9573_41CB_7C2C12BF575F"
},
{
 "hfov": 20.7,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.01,
 "video": {
  "class": "VideoResource",
  "width": 540,
  "mp4Url": "media/video_4DC63883_564D_77EF_41D3_729FE9100318.mp4",
  "height": 800
 },
 "id": "overlay_481258C5_563D_7768_4197_0EC12658EC25",
 "enabledInCardboard": true,
 "vfov": 30.72,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/overlay_481258C5_563D_7768_4197_0EC12658EC25_t.jpg",
    "width": 540,
    "height": 800
   }
  ]
 },
 "useHandCursor": true,
 "roll": -0.09,
 "rotationX": -1.54,
 "blending": 0,
 "rotationY": -0.11,
 "yaw": -47.71,
 "chromaSmoothing": 0.34,
 "pitch": 1.62,
 "chromaColor": "#35A3FF",
 "autoplay": true,
 "distance": 50,
 "class": "VideoPanoramaOverlay",
 "data": {
  "label": "Video"
 }
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_475DC811_4C15_94CF_41AB_229107954A38_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 19.14,
   "targetYaw": 0.75,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 37.44,
   "targetPitch": 8.04
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.07
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 5.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B644927_6BC5_65A5_41D4_BEB959B8C193",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -82.27,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 13.88
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 10.11
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 135.79,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 5.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 57.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 3.08
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -2.39,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_6444190F_6BC5_2565_41D6_2C7EB04C95F2",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 27.83,
   "targetYaw": 92.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 54.92,
   "targetPitch": -1.76
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.57
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.82
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -0.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7930F1D0_6BC5_64FB_41C5_5CBAE1D527B6",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 13.19,
   "targetYaw": -20.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 25.5,
   "targetPitch": -3.01
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 9.61
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A1C706B_6BC5_63AD_41CA_ADF96350917A",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 64.36,
   "targetYaw": -3.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 128.31,
   "targetPitch": -18.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -33.1
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -36.36
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 12.88
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B961875_6BC5_63A5_41D7_19586EBEBECE",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 24.56,
   "targetYaw": 0.75,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 48.33,
   "targetPitch": 8.04
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.07
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 5.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_64714DBC_6BC5_5CAB_41D1_FD02AB43F2EB",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.15,
   "hfov": 7.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.85
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_75EB8033_6142_AA01_41B5_64842B1ED985",
   "pitch": 1.85,
   "yaw": -2.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4722F8F2_5746_CFEB_41B6_CF6FB682FC5D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_7BC7BE68_6BC5_5FAB_41C2_E8E9E5833FC3); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.25,
   "hfov": 7.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_1_0_map.gif",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 2.48
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "   Entrada\u000d"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_1_0.png",
      "width": 195,
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
 "id": "overlay_472958F3_5746_CFE9_4190_A06C79E7A940",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_7BD38E85_6BC5_5F65_4196_4410CCCC2A2B); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.41,
   "hfov": 3.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.92
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 3.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_2_0.png",
      "width": 90,
      "height": 93
     }
    ]
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
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_58FCE818_5746_CE27_41D5_6E5EC77B8BFA, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_7987F800_6BC5_235B_41D8_0C5D72EDDC20, '90%', '90%', true, false)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.47,
   "hfov": 5.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_3_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 4.15
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_3_0.png",
      "width": 152,
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
 "id": "overlay_472928F3_5746_CFE9_41D2_3453D059BC7B",
 "data": {
  "label": "\u00c1lbum de\u000d   Fotos"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_77F36E2E_502A_3135_41CC_6EE71EAFE57A); this.showPopupMedia(this.window_589E2836_5746_CE6B_41AD_BBAC5BB986BB, this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8, this.playList_7985E801_6BC5_235D_41A5_27CD8A7A6E87, '90%', '90%', true, false)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.61,
   "hfov": 3.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_4_1_0_map.gif",
      "width": 50,
      "height": 47
     }
    ]
   },
   "pitch": -4.06
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 3.62,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_4_0.png",
      "width": 100,
      "height": 94
     }
    ]
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
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.openLink('https://api.whatsapp.com/send?phone=595981439393&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20residencia%20en%20Rakiura.%20Me%20gust%C3%B3%20el%20recorrido%20y%20quisiera%20conocerlo%20en%20persona.', '_blank')"
  }
 ]
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 26.67,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 52.59,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -22.3
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_6406EDD8_6BC5_5CEB_4193_416064D6A417",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 26.93,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 53.11,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 47.79
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AC17483_6BC5_635D_41C2_7699DFFC1824",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 11.8,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 22.71,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -150.36,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.21
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 115.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 74.24,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.02
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B85B397_6BC5_6565_41D5_3813315DBBB8",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 18.64,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.44,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -22.3
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AB20A0C_6BC5_6764_41C0_6D4B163C371D",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 54.98,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 109.47,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -22.3
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A7AF53B_6BC5_6DAD_41D5_F98BA4819601",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 47.32,
   "targetYaw": -38.25,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 94.07,
   "targetPitch": -22.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -16.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 7.85
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A3C4097_6BC5_6365_41BD_EE90DB7557E2",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.03,
   "hfov": 24.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.11
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 24.48,
   "image": "this.AnimatedImageResource_75FE904B_6142_AA00_41C1_0C272A8678FB",
   "pitch": -10.11,
   "yaw": 109.03,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_541D6722_4C12_9CCD_41BA_EE1FE905E835",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_7B49690B_6BC5_656D_41C8_F5246433B699); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.39,
   "hfov": 20.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.11
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 20.28,
   "image": "this.AnimatedImageResource_75FEB04B_6142_AA00_41D6_1DF1E420CC62",
   "pitch": -10.11,
   "yaw": 2.39,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5B17EBCA_4C1E_AB5D_41BF_C3867D88D8B8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7BB4F8CC_6BC5_64E4_41D4_5A577C3AB55C); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.95,
   "hfov": 5.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.46
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.89,
   "image": "this.AnimatedImageResource_75FEF04B_6142_AA00_41D7_47F8D4A39A4C",
   "pitch": -5.46,
   "yaw": -66.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_52FEE528_4C15_FCDE_41AE_7C61B197B5D1",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.26,
   "hfov": 22.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_3_0_map.gif",
      "width": 16,
      "height": 34
     }
    ]
   },
   "pitch": -12.23
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "\u000d  Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 22.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_3_0.png",
      "width": 648,
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
 "id": "overlay_7413D737_4DF2_7B32_41CC_6C141EB3875F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7B47B8EF_6BC5_64A5_41B0_D28B5EBF8106); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.91,
   "hfov": 7.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_4_0_map.gif",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": -3.89
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "Parrilla"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_4_0.png",
      "width": 202,
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
 "id": "overlay_757F79E6_4DFE_B753_41AD_2FB53A3E46D9",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.1,
   "hfov": 23.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_5_0_map.gif",
      "width": 16,
      "height": 34
     }
    ]
   },
   "pitch": -8.99
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "\u000d    Living"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 23.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_5_0.png",
      "width": 648,
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
 "id": "overlay_76E05345_4DFE_7B57_41C6_165FDFFF9CA8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_7B646927_6BC5_65A5_41D8_7923CDCBE455); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "yaw": -37.81,
 "bleachingDistance": 0.4,
 "pitch": 8.86,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_722C6DB8_4C0E_AF3D_41C6_E65D7C692713"
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 32.36,
   "targetYaw": -5.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 64.01,
   "targetPitch": -0.25
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_791E21B3_6BC5_64BC_41D4_6A472AD60779",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -51.88,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.06
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 3.33
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 142.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 72.48,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.07
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -1.38,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.97
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77EED2FB_503A_3113_41D3_6A07AD741FE5",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 20.07,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 39.32,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -58.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -116.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -8.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -143.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 112.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.72
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 1.63,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_642122B0_6BC5_64BB_41C2_E87F6FA8A10E",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 16.67,
   "targetYaw": -87.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.48,
   "targetPitch": -3.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -30.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -19.78
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A9E59F0_6BC5_64BB_41AF_8E138DD37087",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.85,
   "hfov": 23.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.08
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 23.25,
   "image": "this.AnimatedImageResource_75C05065_6142_AA01_41AB_473A28C0DBCE",
   "pitch": -8.08,
   "yaw": -128.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_647D9114_4C12_74F5_41CF_299D6FC64B1D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.34,
   "hfov": 12.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.1,
   "image": "this.AnimatedImageResource_75C06065_6142_AA01_41D6_B62C9EBDA915",
   "pitch": -5,
   "yaw": -51.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_65D5C0C2_4C13_B54D_41C1_69BF7BCE4606",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_640A3DF5_6BC5_5CA5_41D5_2D2AE197428D); this.mainPlayList.set('selectedIndex', 24)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.54,
   "hfov": 10.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -29.25
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.6,
   "image": "this.AnimatedImageResource_75C38065_6142_AA01_4176_BF3EBB084396",
   "pitch": -29.25,
   "yaw": 28.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6610EADB_4C12_B572_419A_5D2ACB79AA0D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_64257E2C_6BC5_5FAB_41B2_F9D168C50971); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.51,
   "hfov": 32.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_3_0_map.gif",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": -8.41
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Habitaci\u00f3n\u000d     Master"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 32.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_3_0.png",
      "width": 917,
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
 "id": "overlay_60C4A3D0_4C0F_9B4D_4194_30763AC2589E",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_6406FDD8_6BC5_5CEB_41C0_6CB4BBC80407); this.mainPlayList.set('selectedIndex', 18)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.68,
   "hfov": 15.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_4_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -27.88
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "     Deck\u000d"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_4_0.png",
      "width": 471,
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
 "id": "overlay_6265BD1E_4C0E_6CF5_4194_D81FE8F9F4CD",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_64366E4A_6BC5_5FEC_41B0_807454A8A683); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.32,
   "hfov": 18.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_5_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -4.51
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "    Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 18.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_5_0.png",
      "width": 520,
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
 "id": "overlay_62DC11F1_4C33_F74E_41D1_2E11E02105BB",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5, this.camera_64107E10_6BC5_5F7B_41A2_DEB08D3B8395); this.mainPlayList.set('selectedIndex', 24)"
  }
 ]
},
{
 "yaw": -57.15,
 "bleachingDistance": 0.4,
 "pitch": 43.27,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_72CD9B17_4C0E_74F3_4195_54A71D7C31BA"
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.35,
   "hfov": 18.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.33
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 18.75,
   "image": "this.AnimatedImageResource_75CD205D_6142_AA01_41C1_E79F256A7371",
   "pitch": -5.33,
   "yaw": 53.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6A014951_4C73_974F_41D3_26D53DEC980E",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4, this.camera_7AA634DE_6BC5_6CE7_41A9_5E24BF5C16FA); this.mainPlayList.set('selectedIndex', 21)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.45,
   "hfov": 10.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.71
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.79,
   "image": "this.AnimatedImageResource_75CD605D_6142_AA01_41C9_F5F44EE60FD8",
   "pitch": -3.71,
   "yaw": -87.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64272CF1_4C72_6D4F_41CD_2DAE74C3F5A5",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_7A7AE53B_6BC5_6DAD_41CB_96833DBA5E30); this.mainPlayList.set('selectedIndex', 18)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.55,
   "hfov": 24.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -28.45
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 24.52,
   "image": "this.AnimatedImageResource_75CC805D_6142_AA01_41D8_5C449BB71A06",
   "pitch": -28.45,
   "yaw": 126.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64C8A2FD_4C0F_9537_41C5_B4AF39D9D9A8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_7AB9B4FF_6BC5_6CA5_41CB_76BA6458FA33); this.mainPlayList.set('selectedIndex', 16)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.05,
   "hfov": 15.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_3_0_map.gif",
      "width": 16,
      "height": 36
     }
    ]
   },
   "pitch": -6.01
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Habitaci\u00f3n\u000d    Frente"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_3_0.png",
      "width": 430,
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
 "id": "overlay_63C06466_4C0F_9D52_41C9_6732EF408B14",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.23,
   "hfov": 20.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_4_0_map.gif",
      "width": 16,
      "height": 24
     }
    ]
   },
   "pitch": -24.02
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "    Escalera\u000d   Entrepiso"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 20.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_4_0.png",
      "width": 623,
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
 "id": "overlay_639391F7_4C0E_B732_41CC_40443DBB4B79",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_7A5B751D_6BC5_6D65_41A5_FAAC71E19B52); this.mainPlayList.set('selectedIndex', 16)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -150.28,
   "hfov": 12.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_5_0_map.gif",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": -5.53
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Habitaci\u00f3n\u000d    Frente"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_5_0.png",
      "width": 352,
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
 "id": "overlay_7E5D4DA6_4C12_6FD2_41D0_4F6C9247ADD1",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80, this.camera_7A8754BC_6BC5_6CAB_41C4_00970392614A); this.mainPlayList.set('selectedIndex', 19)"
  }
 ]
},
{
 "yaw": -76.75,
 "bleachingDistance": 0.4,
 "pitch": 9.86,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_7243A042_4C0F_B552_4173_029AA7306C65"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -150.21,
   "hfov": 14.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.88
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.41,
   "image": "this.AnimatedImageResource_75CC505E_6142_AA03_41C3_F99A574AA2DA",
   "pitch": -7.88,
   "yaw": -150.21,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_451124A4_5CF5_222F_41D5_399BB656DFA0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80, this.camera_7A89C4CA_6BC5_6CEC_419C_30EF241B1D4C); this.mainPlayList.set('selectedIndex', 19)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.31,
   "hfov": 13.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_7_0_map.gif",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": -3.05
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Habitaci\u00f3n\u000d    Master"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_7_0.png",
      "width": 379,
      "height": 619
     }
    ]
   },
   "pitch": -3.05,
   "yaw": -87.31,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_47D2F307_5CF7_27EA_41AD_74CE8DEE3970",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_7A1D256D_6BC5_6DA5_41D3_9702E117A935); this.mainPlayList.set('selectedIndex', 18)"
  }
 ]
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.17,
   "hfov": 10.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -21.55
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.99,
   "image": "this.AnimatedImageResource_75E69042_6142_AA00_41D1_BB244C836120",
   "pitch": -21.55,
   "yaw": 0.17,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4F65FE35_5C93_3E28_41D3_CCEA286FD35A",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_7B399F86_6BC5_5D64_41C9_CF04CBBE55C4); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "yaw": -7.91,
 "bleachingDistance": 0.4,
 "pitch": 74.42,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_488AF362_5C92_E62A_41CD_ED6323AB55AF"
},
{
 "yaw": 65.19,
 "bleachingDistance": 0.4,
 "pitch": 56.59,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_48F889FD_5C92_E219_41D5_92A0AD1ACDEC"
},
{
 "yaw": -64.44,
 "bleachingDistance": 0.4,
 "pitch": 57.09,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_48EDFE9F_5C9D_1E1A_41B7_6AFA2637F974"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.49,
   "hfov": 12.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_1_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -40.26
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "       Punto\u000d    Intermedio"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_1_0.png",
      "width": 469,
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
 "id": "overlay_4861FFAC_5C9D_FE3E_41A9_C97465DF7BC8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.29,
   "hfov": 12.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -43.15
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.83,
   "image": "this.AnimatedImageResource_75E60043_6142_AA00_41C6_BB0DBCAE43B0",
   "pitch": -43.15,
   "yaw": -2.29,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4B027F32_5C9F_1E2B_41A8_DEB49B78DC2A",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.08,
   "hfov": 10.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_3_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -20.02
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "     Frente"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_3_0.png",
      "width": 310,
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
 "id": "overlay_49E5426B_5C9F_6639_41D5_53491B41ED02",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_7AD9FFA3_6BC5_5D5D_41D2_8C83178DA6E8); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.52,
   "hfov": 6.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.66
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.63,
   "image": "this.AnimatedImageResource_75E67043_6142_AA00_41BD_FC55BB90C9E0",
   "pitch": -7.66,
   "yaw": 24.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_44040F6A_5C93_3E3A_41B2_47FDF4DB86AD",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_7B04EF4F_6BC5_5DE5_41CB_A743C02BAF22); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.67,
   "hfov": 8.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_5_0_map.gif",
      "width": 16,
      "height": 27
     }
    ]
   },
   "pitch": -7.76
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Living"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_5_0.png",
      "width": 231,
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
 "id": "overlay_4404EF6A_5C93_3E3A_41B4_92431BFDBA6A",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_7B272F6B_6BC5_5DAD_41C9_3D228A29EE57); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "hfov": 23.61,
 "videoVisibleOnStop": true,
 "video": {
  "class": "VideoResource",
  "width": 1144,
  "mp4Url": "media/video_6F1B8249_60DF_EE01_41BF_FD4E601538CE.mp4",
  "height": 644
 },
 "id": "overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D",
 "enabledInCardboard": true,
 "vfov": 16.89,
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D_t.jpg",
    "width": 1280,
    "height": 720
   }
  ]
 },
 "useHandCursor": true,
 "roll": 0.49,
 "yaw": 0.01,
 "blending": 0,
 "rotationY": 0.94,
 "rotationX": 1.19,
 "pitch": -2.99,
 "click": "this.overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D.play()",
 "stateChange": "if(this.overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D', [this.overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D]); } else { this.resumeGlobalAudios('overlay_6FBB499D_60DE_BA00_41D4_169C83C0419D'); }",
 "autoplay": false,
 "distance": 50,
 "class": "VideoPanoramaOverlay",
 "data": {
  "label": "Video"
 }
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.82,
   "targetYaw": -23.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 34.8,
   "targetPitch": -0.75
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -14.26
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 6.34
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B0B6961_6BC5_65DD_41D9_077FDDD7CE4E",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 1.39,
   "targetYaw": -23.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 1.78,
   "targetPitch": -0.75
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -14.26
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 6.34
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A93BB0A_6BC5_256C_41D3_A034CF9B2929",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 36.52,
   "targetYaw": -24.62,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 72.37,
   "targetPitch": 27.13
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AD3EAD3_6BC5_24FD_41D5_01644E7D33B9",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 27.96,
   "targetYaw": -38.25,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 55.17,
   "targetPitch": -22.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -16.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 7.85
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_643702CD_6BC5_64E5_41CE_A027ADDAFF90",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 10.67,
   "targetYaw": -38.25,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 20.43,
   "targetPitch": -22.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -16.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 7.85
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BD3BE85_6BC5_5F65_41C7_26EDFF88AB68",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -82.27,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 13.88
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 10.11
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 135.79,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 5.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 57.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 3.08
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -2.39,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_64B0C900_6BC5_255B_41D5_F1529F722E1B",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -16.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 7.85
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7703A339_503A_371F_41CA_9B68428A5900",
 "restartMovementDelay": 5000
},
{
 "borderRadius": 0,
 "children": [
  "this.viewer_uid79824802_6BC5_235F_41D0_9F0243E741D7",
  {
   "borderRadius": 0,
   "children": [
    "this.htmltext_79831802_6BC5_235F_41C1_CFD1AC863DE2"
   ],
   "scrollBarWidth": 7,
   "left": 0,
   "backgroundColorRatios": [],
   "right": 0,
   "horizontalAlign": "left",
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "scrollBarColor": "#FFFFFF",
   "gap": 10,
   "layout": "vertical",
   "minHeight": 20,
   "contentOpaque": true,
   "minWidth": 20,
   "bottom": 0,
   "backgroundColor": [],
   "paddingBottom": 0,
   "class": "Container",
   "scrollBarVisible": "rollOver",
   "height": "30%",
   "backgroundColorDirection": "vertical",
   "scrollBarOpacity": 0.5,
   "propagateClick": false,
   "verticalAlign": "bottom",
   "overflow": "scroll",
   "shadow": false,
   "scrollBarMargin": 2,
   "paddingTop": 0,
   "data": {
    "name": "Container3378"
   },
   "backgroundOpacity": 0.3
  },
  "this.component_79822803_6BC5_235D_41BA_814E6AA7F1D6",
  "this.component_79825803_6BC5_235D_41D1_44FDFF84A1A6"
 ],
 "scrollBarWidth": 10,
 "id": "container_79829802_6BC5_235F_41C0_E2E4C835C2D3",
 "layout": "absolute",
 "width": "100%",
 "backgroundColorRatios": [],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 20,
 "backgroundColor": [],
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Container3377"
 },
 "backgroundOpacity": 0.3
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 37.63,
   "targetYaw": 3.27,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 74.6,
   "targetPitch": 11.81
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.31
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B332AB5_6BC5_24A5_41D6_7A9B286059B8",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 1.39,
   "targetYaw": -23.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 1.78,
   "targetPitch": -0.75
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -14.26
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 6.34
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AB27B27_6BC5_25A5_41D0_84AB84976812",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.58,
   "hfov": 16.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.98
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.67,
   "image": "this.AnimatedImageResource_75E23040_6142_AA7F_41C4_D38EDE9E45A4",
   "pitch": -7.98,
   "yaw": -67.58,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5AB33241_4C16_F54F_419A_1A82626E06AC",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7A939B0A_6BC5_256C_41CB_4810F8893A5A); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.63,
   "hfov": 16.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_1_0_map.gif",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": -6.81
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "   Comedor"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_1_0.png",
      "width": 470,
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
 "id": "overlay_779BAA9C_4DF2_75F6_41D3_3255A4E1C04A",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7AB22B27_6BC5_25A5_41D7_29E8090073B4); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "yaw": -74.99,
 "bleachingDistance": 0.4,
 "pitch": 41.51,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_724AC826_4C0D_94D2_41C0_AB29E3F1E825"
},
{
 "yaw": 4.65,
 "bleachingDistance": 0.4,
 "pitch": 36.49,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_724D3C57_4C0D_ED73_41CD_8425355074D8"
},
{
 "yaw": 82.27,
 "bleachingDistance": 0.4,
 "pitch": 38,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_7277C163_4C0D_F752_41C2_7921673C330A"
},
{
 "yaw": 176.73,
 "bleachingDistance": 0.4,
 "pitch": 47.04,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_727CA71C_4C0D_FCF6_41C8_60EF23AE255E"
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_7984D801_6BC5_235D_41DA_2512E9DC589D, this.albumitem_79842800_6BC5_235B_41C4_9046525D1530); this.loopAlbum(this.playList_7987F800_6BC5_235B_41D8_0C5D72EDDC20, 0)",
 "class": "PhotoAlbumPlayListItem",
 "player": "this.viewer_uid79840800_6BC5_235B_41D2_BD30CF2FA000PhotoAlbumPlayer",
 "id": "albumitem_79842800_6BC5_235B_41C4_9046525D1530"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.02,
   "hfov": 12.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.71
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.75,
   "image": "this.AnimatedImageResource_75CE4061_6142_AA01_41CA_005D32128FFD",
   "pitch": -9.71,
   "yaw": 102.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_46D0B9A9_5CF3_2239_41D2_F30BF1260DF9",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.36,
   "hfov": 16.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_1_0_map.gif",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": -11.01
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "    Balc\u00f3n"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_1_0.png",
      "width": 462,
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
 "id": "overlay_46D089A9_5CF3_2239_41D6_82D73B977FE5",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.19,
   "hfov": 15.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.78
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.36,
   "image": "this.AnimatedImageResource_75C1B061_6142_AA01_41D3_FF01B680FEAD",
   "pitch": -12.78,
   "yaw": -53.19,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_47E4FB00_5CF3_27E7_41D5_73431470F9AA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.97,
   "hfov": 16.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_3_0_map.gif",
      "width": 16,
      "height": 23
     }
    ]
   },
   "pitch": -7.6
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "     Estar\u000d     Diario"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_3_0.png",
      "width": 463,
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
 "id": "overlay_470540FE_5CFD_621B_41C9_CAAC9464CEEB",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ]
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 36.52,
   "targetYaw": -24.62,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 72.37,
   "targetPitch": 27.13
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AF33AEF_6BC5_24A5_41D8_9D1B515EE36C",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.69,
   "hfov": 10.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.02
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.71,
   "image": "this.AnimatedImageResource_75F64057_6142_AA01_41B4_E5609EE648F3",
   "pitch": -7.02,
   "yaw": -0.69,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6DA7B985_4C73_97D6_41C8_FAF959F094CC",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_78F02208_6BC5_676B_41D5_61EEBB369E34); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.59,
   "hfov": 8.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.75
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.83,
   "image": "this.AnimatedImageResource_75C99057_6142_AA01_41D3_2F3D3CD80016",
   "pitch": -1.75,
   "yaw": -56.59,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6FA18F6B_4C72_EB52_418D_A4752C2B79FF",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_7930E1D0_6BC5_64FB_41C9_67DFDD88E42F); this.mainPlayList.set('selectedIndex', 13)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.64,
   "hfov": 6.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.51
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.01,
   "image": "this.AnimatedImageResource_75C9D058_6142_AA0F_41D1_34333013D054",
   "pitch": -4.51,
   "yaw": -80.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6D9129AB_4C72_97D2_41B3_BC9D00327413",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.35,
   "hfov": 13.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.83
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.65,
   "image": "this.AnimatedImageResource_75C9F058_6142_AA0F_41C8_5F4615299382",
   "pitch": -11.83,
   "yaw": -92.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6ED1C9D5_4C7E_9776_41CD_EA10811A7BB1",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7971E196_6BC5_6567_41C3_ED603B56221F); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.67,
   "hfov": 7.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.7
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.11,
   "image": "this.AnimatedImageResource_75C93058_6142_AA0F_41C4_B289CE8B0738",
   "pitch": -2.7,
   "yaw": -108.67,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6FC82723_4C7D_BCD2_41C6_ED142E41D1F5",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.52,
   "hfov": 12.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_5_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.23
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "     Deck"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_5_0.png",
      "width": 360,
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
 "id": "overlay_630303B6_4C15_9B35_41A7_0FE1D2CE67BA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_7890D225_6BC5_67A4_41A7_F2FA6961BF7C); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.74,
   "hfov": 7.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_6_0_map.gif",
      "width": 16,
      "height": 28
     }
    ]
   },
   "pitch": -2.38
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Cocina"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_6_0.png",
      "width": 203,
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
 "id": "overlay_7C2FC9D8_4C17_F77D_41C5_180CBDEF7BDE",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.45,
   "hfov": 13.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_7_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -1.21
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "    Parrilla"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_7_0.png",
      "width": 369,
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
 "id": "overlay_7E11B26A_4C16_9552_41A3_28556ECCB81C",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_78D0D1EB_6BC5_64AD_41D3_598AC9106035); this.mainPlayList.set('selectedIndex', 13)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.51,
   "hfov": 10.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_8_0_map.gif",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": -9.75
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_8_0.png",
      "width": 287,
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
 "id": "overlay_7D6E9EA6_4C12_EDD5_41C5_9E91663C2E02",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7911C1B3_6BC5_64BC_41D2_D2B53FAB7A34); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.79,
   "hfov": 6.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_9_0_map.gif",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": -2.96
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Pasillo"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_9_0.png",
      "width": 190,
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
 "id": "overlay_7D0ECB6B_4C13_EB53_41BC_4ED41580DB7D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ]
},
{
 "yaw": -45.09,
 "bleachingDistance": 0.4,
 "pitch": 63.37,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_0D1F1C5B_4C0F_ED73_41C2_D93B0423D556"
},
{
 "hfov": 102.03,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.02,
 "video": {
  "class": "VideoResource",
  "width": 466,
  "mp4Url": "media/video_76BF82AE_56C2_FB39_41D0_DF287E74780C.mp4",
  "height": 690
 },
 "id": "overlay_779DF13E_56C3_3919_41A5_CE0412598D4D",
 "enabledInCardboard": true,
 "vfov": 139.59,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/overlay_779DF13E_56C3_3919_41A5_CE0412598D4D_t.jpg",
    "width": 466,
    "height": 690
   }
  ]
 },
 "useHandCursor": true,
 "roll": 0.3,
 "rotationX": -36.13,
 "blending": 0,
 "rotationY": -1.01,
 "yaw": -0.9,
 "chromaSmoothing": 0.32,
 "pitch": 36.7,
 "chromaColor": "#3A9BFF",
 "autoplay": true,
 "distance": 50,
 "class": "VideoPanoramaOverlay",
 "data": {
  "label": "Video"
 }
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 18.82,
   "targetYaw": -87.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.81,
   "targetPitch": -3.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -30.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -19.78
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79702CC1_6BC5_5CDD_4198_BB96B8CEACA5",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 12.43,
   "targetYaw": -38.25,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 23.96,
   "targetPitch": -22.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -16.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 7.85
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79F36C2A_6BC5_23AF_41C8_B548BBAA5E49",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 26.93,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 53.11,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 47.79
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B2DF467_6BC5_63A5_41D8_4EE931790224",
 "restartMovementDelay": 5000
},
{
 "borderRadius": 0,
 "children": [
  "this.viewer_uid79840800_6BC5_235B_41D2_BD30CF2FA000",
  {
   "borderRadius": 0,
   "children": [
    "this.htmltext_7984D801_6BC5_235D_41DA_2512E9DC589D"
   ],
   "scrollBarWidth": 7,
   "left": 0,
   "backgroundColorRatios": [],
   "right": 0,
   "horizontalAlign": "left",
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "scrollBarColor": "#FFFFFF",
   "gap": 10,
   "layout": "vertical",
   "minHeight": 20,
   "contentOpaque": true,
   "minWidth": 20,
   "bottom": 0,
   "backgroundColor": [],
   "paddingBottom": 0,
   "class": "Container",
   "scrollBarVisible": "rollOver",
   "height": "30%",
   "backgroundColorDirection": "vertical",
   "scrollBarOpacity": 0.5,
   "propagateClick": false,
   "verticalAlign": "bottom",
   "overflow": "scroll",
   "shadow": false,
   "scrollBarMargin": 2,
   "paddingTop": 0,
   "data": {
    "name": "Container3372"
   },
   "backgroundOpacity": 0.3
  },
  "this.component_7985A801_6BC5_235D_41D3_5F47899A425C",
  "this.component_7985D801_6BC5_235D_41C1_3E2AAE214924"
 ],
 "scrollBarWidth": 10,
 "id": "container_79847800_6BC5_235B_41CB_A6A43A2CC938",
 "layout": "absolute",
 "width": "100%",
 "backgroundColorRatios": [],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 20,
 "backgroundColor": [],
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Container3371"
 },
 "backgroundOpacity": 0.3
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.82,
   "targetYaw": -23.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 34.8,
   "targetPitch": -0.75
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -14.26
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 6.34
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B706943_6BC5_65DC_41CF_36109056BE78",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 52.95,
   "targetYaw": -24.62,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 105.38,
   "targetPitch": 27.13
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_799C4128_6BC5_65AB_41CF_AD5609CEC124",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -51.88,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.06
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 3.33
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 142.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 72.48,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.07
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -1.38,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.97
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BF91A07_6BC5_2765_41D3_5560BD4F515E",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 7.38,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 13.81,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -150.36,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.21
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 115.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 74.24,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.02
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_640A2DF5_6BC5_5CA5_41D2_082D7DEF707C",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -19.78
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -29.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -25.81
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -153.37,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -14.51
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 133.78,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 71.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
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
   "easing": "cubic_in_out",
   "pitchSpeed": 40.95,
   "targetYaw": -24.62,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 81.27,
   "targetPitch": 27.13
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BE0F9EA_6BC5_24AF_41CB_19B2975EACD1",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.15,
   "hfov": 12.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_1_HS_0_0_map.gif",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": -7.39
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Habitaci\u00f3n"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_1_HS_0_0.png",
      "width": 352,
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
 "id": "overlay_466CC9D9_5CFE_E219_41C6_48DA7E6ACE59",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80, this.camera_7AE2649E_6BC5_6364_41B6_18494653A6D9); this.mainPlayList.set('selectedIndex', 19)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.26,
   "hfov": 10,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.78
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10,
   "image": "this.AnimatedImageResource_75C13062_6142_AA03_41CE_AEBAC82D6EBB",
   "pitch": -5.78,
   "yaw": -105.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40CC987A_5CFF_621A_41C8_873C6BA0FFB4",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80, this.camera_7AF7C4AD_6BC5_6CA5_41D2_04962E49843F); this.mainPlayList.set('selectedIndex', 19)"
  }
 ]
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 24.12,
   "targetYaw": 0.75,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 47.45,
   "targetPitch": 8.04
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.07
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 5.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78915D56_6BC5_5DE7_41D2_EF853339B118",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.23,
   "hfov": 12.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.48
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.09,
   "image": "this.AnimatedImageResource_75C21067_6142_AA01_41D4_B2A09A2FD180",
   "pitch": -5.48,
   "yaw": 120.23,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66AA9141_4C12_B74F_4182_4D5CE8470BE4",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_7B104A96_6BC5_2764_41B9_6A859EF0D0DB); this.mainPlayList.set('selectedIndex', 23)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.74,
   "hfov": 9.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -20.36
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.75,
   "image": "this.AnimatedImageResource_75C22067_6142_AA01_41D4_58803F930106",
   "pitch": -20.36,
   "yaw": 78.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_661206E1_4C15_9D4F_41B1_D784E4DD7ED9",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_7AD3CAD3_6BC5_24FD_41D3_FAC0801FDB35); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -156.42,
   "hfov": 11.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_2_0_map.gif",
      "width": 16,
      "height": 38
     }
    ]
   },
   "pitch": -5.32
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "Parrilla"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_2_0.png",
      "width": 330,
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
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.08,
   "hfov": 21.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_3_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -18.22
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "      \u000d  Deck - Piscina\u000d"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 21.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_3_0.png",
      "width": 630,
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
 "id": "overlay_639A064F_4C15_9D53_41CC_8D0F891DEB0D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_7AF31AEF_6BC5_24A5_4198_AE893C65A297); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.6,
   "hfov": 31.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_4_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -4.4
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "      \u000d       Kitchenette\u000d"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 31.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_4_0.png",
      "width": 887,
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
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.77,
   "hfov": 16.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_5_0_map.gif",
      "width": 16,
      "height": 23
     }
    ]
   },
   "pitch": -0.95
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Balc\u00f3n de\u000d  Habitaci\u00f3n\u000d    Master\u000d"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_5_0.png",
      "width": 449,
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
 "id": "overlay_615CF70F_4C0D_BCD2_41C6_F2BE939B4F65",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA, this.camera_7B331AB5_6BC5_24A5_419B_91A6D66D1CFC); this.mainPlayList.set('selectedIndex', 23)"
  }
 ]
},
{
 "yaw": -59.16,
 "bleachingDistance": 0.4,
 "pitch": 45.28,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_0D2A0CC2_4C0E_AD4D_41B5_7C511CCA84AF"
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.78,
   "hfov": 19.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.35
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 19.68,
   "image": "this.AnimatedImageResource_75F1304D_6142_AA00_41D2_DEB7CEE79732",
   "pitch": -7.35,
   "yaw": 160.78,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5B1FF612_4C15_9CF2_41C3_BA09D573F956",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_7A3C6097_6BC5_6365_41D2_D61809A58F72); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.48,
   "hfov": 13.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.6
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.16,
   "image": "this.AnimatedImageResource_75F1504D_6142_AA00_41CA_A3895DCD153E",
   "pitch": -8.6,
   "yaw": -149.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_55065348_4C1F_BB5E_41C9_63BC86EB71F1",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_7AF97FBF_6BC5_5CA5_41BD_8F613E911D29); this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 56.4,
   "hfov": 16.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.01
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.09,
   "image": "this.AnimatedImageResource_75F1604D_6142_AA00_41D4_1193F96B91E1",
   "pitch": -14.01,
   "yaw": 56.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_54B5B55E_4C1E_FF72_41C3_B40A23F1359D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_7ABB6FF9_6BC5_5CAD_41C1_6B229CA80EEF); this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.64,
   "hfov": 11.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.53
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.39,
   "image": "this.AnimatedImageResource_75F0B04D_6142_AA00_419B_5F01C672908F",
   "pitch": -7.53,
   "yaw": -1.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_542EB355_4C1D_FB76_41B1_02C2022012E4",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_79FFA0F6_6BC5_64A7_41A6_A9CA5DEEB9A6); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.72,
   "hfov": 9.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.59
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.75,
   "image": "this.AnimatedImageResource_75F0C04E_6142_AA00_4190_02DDBED58C43",
   "pitch": -8.59,
   "yaw": -93.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5587FAC0_4C15_B54E_4192_D62E10526282",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_7A7DF043_6BC5_63DD_41D2_88C04C1DEA2C); this.mainPlayList.set('selectedIndex', 12)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.41,
   "hfov": 9.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.51
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.83,
   "image": "this.AnimatedImageResource_75F0104E_6142_AA00_41BB_FA1822BE9E71",
   "pitch": -4.51,
   "yaw": -70.41,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_55941349_4C16_7B5E_4191_A59BB4D3BEB7",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_79BF2156_6BC5_65E7_41D0_1EEA4BD0FC97); this.mainPlayList.set('selectedIndex', 13)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.72,
   "hfov": 13.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_6_0_map.gif",
      "width": 16,
      "height": 33
     }
    ]
   },
   "pitch": -7.22
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " \u000d  Cocina"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_6_0.png",
      "width": 375,
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
 "id": "overlay_7A7A1CE7_4DF5_AD52_4174_090BD5F8DB5D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_7A9BBFDC_6BC5_5CEB_41C9_29FE3DD7745E); this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.41,
   "hfov": 17.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_7_0_map.gif",
      "width": 15,
      "height": 21
     }
    ]
   },
   "pitch": -4.43
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "     Sala"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_7_0.png",
      "width": 498,
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
 "id": "overlay_7584F74C_4DF6_BB56_41B3_F3BF279FF4AB",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_79DF60C3_6BC5_64DC_41C5_78269E14B9CC); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.56,
   "hfov": 9.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_8_0_map.gif",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": -4.87
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Deck"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_8_0.png",
      "width": 266,
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
 "id": "overlay_72672788_4DF7_9BDE_41C1_6FF3D69969EA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_799C7128_6BC5_65AB_41D9_C4EB93A54143); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.5,
   "hfov": 9.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_9_0_map.gif",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": -2.45
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Parrilla"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_9_0.png",
      "width": 266,
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
 "id": "overlay_74CC5B0D_4DF6_94D7_41AD_35EB0E985D9B",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_795F117A_6BC5_65AF_41D0_7D2E677787F3); this.mainPlayList.set('selectedIndex', 13)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.71,
   "hfov": 9.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_10_0_map.gif",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": -5.49
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Pasillo"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_10_0.png",
      "width": 266,
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
 "id": "overlay_756A3004_4DF5_F4D5_41C1_56A034309D7B",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_7A1C606B_6BC5_63AD_41D2_09AE5BE2EE4D); this.mainPlayList.set('selectedIndex', 12)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 56.25,
   "hfov": 14.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_11_0_map.gif",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": -11.12
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Piscinas"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_11_0.png",
      "width": 404,
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
 "id": "overlay_74524590_4DF2_BFCD_41C2_0E8EB5134142",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_7A5DF016_6BC5_6367_41D3_A9E893D34989); this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "hfov": 34.36,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.02,
 "video": {
  "class": "VideoResource",
  "width": 420,
  "mp4Url": "media/video_7340C746_56DD_5968_41D3_39B2A98F9F24.mp4",
  "height": 630
 },
 "id": "overlay_776FA9DA_56DD_6918_41A6_0C121383E56A",
 "enabledInCardboard": true,
 "vfov": 42.4,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/overlay_776FA9DA_56DD_6918_41A6_0C121383E56A_t.jpg",
    "width": 420,
    "height": 630
   }
  ]
 },
 "useHandCursor": false,
 "roll": 1.74,
 "rotationX": 3.22,
 "blending": 0,
 "rotationY": 76.64,
 "yaw": 49.32,
 "chromaSmoothing": 0.4,
 "pitch": 1.83,
 "chromaColor": "#2B97FF",
 "autoplay": true,
 "distance": 50,
 "class": "VideoPanoramaOverlay",
 "data": {
  "label": "Video"
 }
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 11.03,
   "targetYaw": 9.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 21.15,
   "targetPitch": -33.91
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 71.97,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -21.54
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 108.4,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -20.29
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 172.97,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.82
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -97.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -10.49
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -37.81,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.57
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B865EC0_6BC5_5CDC_41D8_0CC21DAF59AC",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 61.96,
   "targetYaw": -3.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 123.49,
   "targetPitch": -18.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -33.1
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -36.36
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 12.88
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A735B7B_6BC5_25AD_41CF_F57EFE0C08EF",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 76.64,
   "targetYaw": -23.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 153,
   "targetPitch": -0.75
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -14.26
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 6.34
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79116CE3_6BC5_5CDD_41C8_01DFAFB626E6",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 16.54,
   "targetYaw": 92.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.23,
   "targetPitch": -1.76
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.57
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.82
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -0.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_6431B9B0_6BC5_24BB_41D9_1A72C162E33A",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 10.4,
   "targetYaw": -5.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 19.89,
   "targetPitch": -0.25
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BB4D8CC_6BC5_64E4_41C2_65CE12A27375",
 "restartMovementDelay": 5000
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_15",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.42",
     "zoomFactor": 1.1,
     "y": "0.52"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_20",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.59",
     "zoomFactor": 1.1,
     "y": "0.49"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_7",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.72",
     "zoomFactor": 1.1,
     "y": "0.61"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_6",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1.1,
     "y": "0.64"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_9",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.56",
     "zoomFactor": 1.1,
     "y": "0.69"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_3",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.61",
     "zoomFactor": 1.1,
     "y": "0.28"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_11",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.27",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_0",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.69",
     "zoomFactor": 1.1,
     "y": "0.46"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_10",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.63",
     "zoomFactor": 1.1,
     "y": "0.45"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_1",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.55",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_2",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.58",
     "zoomFactor": 1.1,
     "y": "0.27"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_16",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.71",
     "zoomFactor": 1.1,
     "y": "0.55"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_17",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.27",
     "zoomFactor": 1.1,
     "y": "0.30"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_19",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.59",
     "zoomFactor": 1.1,
     "y": "0.33"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_13",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.70",
     "zoomFactor": 1.1,
     "y": "0.35"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_4",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.37",
     "zoomFactor": 1.1,
     "y": "0.59"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_21",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.31",
     "zoomFactor": 1.1,
     "y": "0.35"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_18",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.48",
     "zoomFactor": 1.1,
     "y": "0.60"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_5",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.74",
     "zoomFactor": 1.1,
     "y": "0.44"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_8",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.73",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_12",
   "camera": {
    "duration": 5500,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.31",
     "zoomFactor": 1.1,
     "y": "0.42"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_inside"
   }
  }
 ],
 "id": "album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList"
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -82.27,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 13.88
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 10.11
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 135.79,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 5.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 57.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 3.08
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -2.39,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
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
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 9.61
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_770279F1_503A_532F_419F_EC539FDA6F44",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.29,
   "hfov": 6.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.38
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_75F8F044_6142_AA00_41B1_1F3BCC9A8E3D",
   "pitch": 6.38,
   "yaw": 26.29,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5F22236E_4CFD_BB52_41D0_87962539D379",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_64B0D900_6BC5_255B_41C0_CC2BECF25658, this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A); this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_64B0D900_6BC5_255B_41C0_CC2BECF25658); this.mainPlayList.set('selectedIndex', 9)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.58,
   "hfov": 11.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.69
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.31,
   "image": "this.AnimatedImageResource_75F82045_6142_AA00_41C9_294A7BC0A459",
   "pitch": -11.69,
   "yaw": 36.58,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_585CAAAF_4CF2_75D3_418F_E4020A5C57BA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.33,
   "hfov": 10.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_2_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 8.6
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "   Apagar\u000d    Luces"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_2_0.png",
      "width": 288,
      "height": 337
     }
    ]
   },
   "pitch": 8.6,
   "yaw": 26.33,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_58E12D38_4CF7_EF3D_41B8_194A4EED7DFE",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_6447E90F_6BC5_2565_41A0_D87A6E597496, this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A); this.startPanoramaWithCamera(this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A, this.camera_6447E90F_6BC5_2565_41A0_D87A6E597496); this.mainPlayList.set('selectedIndex', 9)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.43,
   "hfov": 10.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_3_0_map.gif",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": -9.94
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Living"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_3_0.png",
      "width": 305,
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
 "id": "overlay_7593DF4E_4DF2_AB55_41C7_FA82D656CEBF",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "yaw": 9.42,
 "bleachingDistance": 0.4,
 "pitch": 60.61,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_72687B9E_4C0E_ABF2_41BB_A08C589A4291"
},
{
 "yaw": 96.85,
 "bleachingDistance": 0.4,
 "pitch": 51.31,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_729624D3_4C0E_BD72_41C0_CD73173E435F"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.1,
   "hfov": 14.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_4_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -34.02
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.06,
   "image": "this.AnimatedImageResource_75FBD045_6142_AA00_41D2_082156A78027",
   "pitch": -34.02,
   "yaw": 0.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4BDB7184_5C93_E2EE_41C6_A55CC2B4DD75",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_644B9920_6BC5_255B_41BF_7C5C4AF2F265); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.82,
   "hfov": 22.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_5_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -10.75
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "     Fondo"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 22.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_5_0.png",
      "width": 642,
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
 "id": "overlay_4B4CD0DD_5C92_E21E_41D6_48F1A336E13E",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_7925B87F_6BC5_23A5_41D3_2E5BD8B50265); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.9,
   "hfov": 18.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.64
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 18.83,
   "image": "this.AnimatedImageResource_75FB3046_6142_AA00_41CE_EF371DD26C76",
   "pitch": -12.64,
   "yaw": -179.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4A27221C_5C97_261E_41C2_2A76CED6B5EA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_64AFF8E3_6BC5_24DC_4198_B664A8BAE877); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.15,
   "hfov": 13.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_7_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -32.21
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "     Frente"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_7_0.png",
      "width": 454,
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
 "id": "overlay_4B892B7C_5C97_E61F_41C2_D49CE49FD165",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_6467D93E_6BC5_25A7_41C0_884E49229BF6); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "hfov": 31.63,
 "videoVisibleOnStop": true,
 "video": {
  "class": "VideoResource",
  "width": 1144,
  "mp4Url": "media/video_6F1B8249_60DF_EE01_41BF_FD4E601538CE.mp4",
  "height": 644
 },
 "id": "overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6",
 "enabledInCardboard": true,
 "vfov": 22.59,
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6_t.jpg",
    "width": 1280,
    "height": 720
   }
  ]
 },
 "useHandCursor": true,
 "roll": 0.15,
 "yaw": -0.05,
 "blending": 0,
 "rotationY": 0.2,
 "rotationX": 5.38,
 "pitch": -5.71,
 "click": "this.overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6.play()",
 "stateChange": "if(this.overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6', [this.overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6]); } else { this.resumeGlobalAudios('overlay_70308552_60C6_AA03_41D7_D4A8FE9361B6'); }",
 "autoplay": false,
 "distance": 50,
 "class": "VideoPanoramaOverlay",
 "data": {
  "label": "Video"
 }
},
{
 "rotate": false,
 "hfov": 21,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -164.17,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 162.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.33,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
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
   "easing": "cubic_in_out",
   "pitchSpeed": 49.5,
   "targetYaw": -5.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 98.46,
   "targetPitch": -0.25
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BDA9341_6BC5_65DD_41BE_DFAC33952D79",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 40.95,
   "targetYaw": -24.62,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 81.27,
   "targetPitch": 27.13
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BC8F9CC_6BC5_24E4_41D2_86E582C941B7",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 61.54,
   "targetYaw": -3.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 122.64,
   "targetPitch": -18.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -33.1
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -36.36
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 12.88
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AB984FF_6BC5_6CA5_41D0_0ACBD3CD09FA",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 25.18,
   "targetYaw": 92.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 49.59,
   "targetPitch": -1.76
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.57
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.82
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -0.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79BF3156_6BC5_65E7_41C0_4564F8E9CB13",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 11.03,
   "targetYaw": 9.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 21.15,
   "targetPitch": -33.91
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 71.97,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -21.54
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 108.4,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -20.29
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 172.97,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.82
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -97.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -10.49
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -37.81,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.57
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BED5EA3_6BC5_5F5D_41BC_312F3D459A83",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 31.52,
   "targetYaw": -20.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 62.33,
   "targetPitch": -3.01
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 9.61
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_791386B9_6BC5_6CAD_41D3_33C6E8340EF4",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 4.65,
   "targetYaw": 4.27,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 8.34,
   "targetPitch": 8.04
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -164.17,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 162.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.33,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AA604DE_6BC5_6CE7_41D4_98B86AA61F75",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
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
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 71.97,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -21.54
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 108.4,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -20.29
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 172.97,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.82
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -97.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -10.49
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -37.81,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
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
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -51.88,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.06
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 3.33
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 142.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 72.48,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.07
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -1.38,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.97
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B8B8A16_6BC5_2767_41CC_64490FCE6250",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 12.43,
   "targetYaw": -38.25,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 23.96,
   "targetPitch": -22.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -16.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 7.85
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79D2BBFC_6BC5_24AB_41CC_F73E3713458D",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 54.36,
   "targetYaw": -24.62,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 108.22,
   "targetPitch": 27.13
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_64369E4A_6BC5_5FEC_41CC_F1E058EA279F",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.39,
   "targetYaw": 68.83,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.93,
   "targetPitch": 13.57
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -19.78
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -29.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -25.81
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -153.37,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -14.51
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 133.78,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 71.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -34.35
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A32EBCE_6BC5_24E4_41BA_0C7AAF6C0AD9",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 61.54,
   "targetYaw": -3.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 122.64,
   "targetPitch": -18.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -33.1
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -36.36
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 12.88
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A5B451D_6BC5_6D65_41B1_C6C7CC885825",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 4.75,
   "targetYaw": -5.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 8.54,
   "targetPitch": -0.25
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BF6E81B_6BC5_636D_41C5_F1BCEEFB60BA",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 16.22,
   "targetYaw": -38.25,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 31.59,
   "targetPitch": -22.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -16.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 7.85
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AC5399B_6BC5_656D_41D5_6EDC1BBE48D9",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 47.32,
   "targetYaw": -38.25,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 94.07,
   "targetPitch": -22.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -16.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 7.85
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79DF70C3_6BC5_64DC_41C8_2F27D3DE6F83",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 24.12,
   "targetYaw": 0.75,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 47.45,
   "targetPitch": 8.04
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.07
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 5.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B051F4F_6BC5_5DE5_41B5_441974A113D1",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 10.4,
   "targetYaw": -5.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 19.89,
   "targetPitch": -0.25
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B4798EF_6BC5_64A5_41D8_0DBEDEE6B2E6",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -58.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -116.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -8.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -143.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 112.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.72
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 1.63,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
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
   "easing": "cubic_in_out",
   "pitchSpeed": 17.39,
   "targetYaw": 68.83,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.93,
   "targetPitch": 13.57
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -19.78
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -29.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -25.81
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -153.37,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -14.51
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 133.78,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 71.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -34.35
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A122BA2_6BC5_255F_416D_A4A602EBF1C6",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.29,
   "hfov": 6.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.38
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_75FA4049_6142_AA00_41D5_115D7FA7CF98",
   "pitch": 6.38,
   "yaw": 26.29,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5F08474E_4CFE_9B55_4162_01D050A59F50",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_7BF8FA07_6BC5_2765_41CB_C1BBEDB4005F, this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A); this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_7BF8FA07_6BC5_2765_41CB_C1BBEDB4005F); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.58,
   "hfov": 11.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.69
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.31,
   "image": "this.AnimatedImageResource_75FD9049_6142_AA00_41C4_64FB6803FBCF",
   "pitch": -11.69,
   "yaw": 36.58,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5829C0DD_4CF2_F576_4170_28F44FE61136",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.42,
   "hfov": 10.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_2_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 8.59
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Encender\u000d   Luces"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_2_0.png",
      "width": 289,
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
 "id": "overlay_58FADE45_4CF5_AD56_41C7_88B8A9887EBB",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_7B8B6A16_6BC5_2767_41D9_3314D352F525, this.panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A); this.startPanoramaWithCamera(this.panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A, this.camera_7B8B6A16_6BC5_2767_41D9_3314D352F525); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.43,
   "hfov": 10.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_3_0_map.gif",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": -9.94
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Living"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_3_0.png",
      "width": 305,
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
 "id": "overlay_752BA8F4_4DF2_F535_4196_A95C1DB42D1C",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "rotate": false,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.1,
   "hfov": 14.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_4_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -34.02
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.06,
   "image": "this.AnimatedImageResource_75FD1049_6142_AA00_41D5_A835AF753E61",
   "pitch": -34.02,
   "yaw": 0.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4EE111E8_5CE6_FBC8_41CC_1138D545E828",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_7B532A5D_6BC5_27E5_41C2_67FDF7D59A07); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.82,
   "hfov": 22.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_5_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -10.75
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "     Fondo"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 22.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_5_0.png",
      "width": 642,
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
 "id": "overlay_4EE6C1E9_5CE6_FBC8_41CD_2E8F28A5780B",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_7B9CAA24_6BC5_275B_41C8_62E2B7C6CCF1); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.9,
   "hfov": 18.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.64
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 18.83,
   "image": "this.AnimatedImageResource_75FD504A_6142_AA00_41AD_E670AD269EA6",
   "pitch": -12.64,
   "yaw": -179.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4EE6E1E9_5CE6_FBC8_41D2_D0DE83F0700C",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8, this.camera_7BB10A41_6BC5_27DD_41C4_90BFECCC7922); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.15,
   "hfov": 13.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_7_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -32.21
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "     Frente"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_7_0.png",
      "width": 454,
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
 "id": "overlay_4EE711E9_5CE6_FBC8_41CC_D9605A12B936",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_7B73DA7A_6BC5_27AF_41D4_3F934CC5F0F5); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "hfov": 31.63,
 "videoVisibleOnStop": true,
 "video": {
  "class": "VideoResource",
  "width": 1144,
  "mp4Url": "media/video_6F1B8249_60DF_EE01_41BF_FD4E601538CE.mp4",
  "height": 644
 },
 "id": "overlay_7005B963_60CE_BA00_419D_74989748E515",
 "enabledInCardboard": true,
 "vfov": 22.59,
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/overlay_7005B963_60CE_BA00_419D_74989748E515_t.jpg",
    "width": 1280,
    "height": 720
   }
  ]
 },
 "useHandCursor": true,
 "roll": 0.15,
 "yaw": -0.05,
 "blending": 0,
 "rotationY": 0.2,
 "rotationX": 5.38,
 "pitch": -5.71,
 "click": "this.overlay_7005B963_60CE_BA00_419D_74989748E515.play()",
 "stateChange": "if(this.overlay_7005B963_60CE_BA00_419D_74989748E515.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_7005B963_60CE_BA00_419D_74989748E515', [this.overlay_7005B963_60CE_BA00_419D_74989748E515]); } else { this.resumeGlobalAudios('overlay_7005B963_60CE_BA00_419D_74989748E515'); }",
 "autoplay": false,
 "distance": 50,
 "class": "VideoPanoramaOverlay",
 "data": {
  "label": "Video"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.53,
   "hfov": 14.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -19.13
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "   Comedor"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_0_0.png",
      "width": 440,
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
 "id": "overlay_4DB28054_5C8D_E26E_41D1_A2A9EFF76692",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_79114CE3_6BC5_5CDD_41D6_8747478C7870); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.51,
   "hfov": 15.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -20.73
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.07,
   "image": "this.AnimatedImageResource_75E0103E_6142_AA03_4189_7F0EEB564FBE",
   "pitch": -20.73,
   "yaw": -155.51,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4DB2A054_5C8D_E26E_41D6_403365217C61",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7933CCFF_6BC5_5CA5_41D2_FDDA9FCF458F); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.88,
   "hfov": 8.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.15
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.78,
   "image": "this.AnimatedImageResource_75E0203E_6142_AA03_4167_23A68A61F274",
   "pitch": -4.15,
   "yaw": -163.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4D083693_5C8F_6EE9_4198_A5E09AE6AE49",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.01,
   "hfov": 11.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_3_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -2.62
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Escritorio"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_3_0.png",
      "width": 325,
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
 "id": "overlay_4D09C693_5C8F_6EE9_41CC_BA80A8AA8CB2",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.04,
   "hfov": 8.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.88
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.38,
   "image": "this.AnimatedImageResource_75E3903E_6142_AA03_41C0_79F4985E1105",
   "pitch": -15.88,
   "yaw": -131.04,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4D993E39_5C8D_1E26_41B6_38A2BB475CF3",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131,
   "hfov": 10.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_5_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.42
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "   Sala"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_5_0.png",
      "width": 302,
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
 "id": "overlay_4EA4D860_5C93_6226_41BE_05F490730C74",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.65,
   "hfov": 7.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.87
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.65,
   "image": "this.AnimatedImageResource_75E3F03F_6142_AA01_4178_11FC6E7B9CCC",
   "pitch": -10.87,
   "yaw": -39.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4EA199DA_5C95_221B_41CA_307C2CFD92FA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.22,
   "hfov": 7.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_7_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.07
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Deck"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_7_0.png",
      "width": 220,
      "height": 232
     }
    ]
   },
   "pitch": -3.07,
   "yaw": -0.22,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4ECCB29C_5C95_E61F_41D2_B76939FDD4C7",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.16,
   "hfov": 6.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.58
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.14,
   "image": "this.AnimatedImageResource_75E3203F_6142_AA01_41D5_EA119E648A57",
   "pitch": -4.58,
   "yaw": -0.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4EFCB093_5C97_62E9_41C4_F24F905896A0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.56,
   "hfov": 13.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_9_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -9.31
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_9_0.png",
      "width": 370,
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
 "id": "overlay_4FD375BB_5C97_2219_41CE_5B46EE142C76",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 54.36,
   "targetYaw": -24.62,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 108.22,
   "targetPitch": 27.13
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_64259E2C_6BC5_5FAB_41D4_0E95A03B1EBD",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 61.96,
   "targetYaw": -3.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 123.49,
   "targetPitch": -18.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -33.1
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -36.36
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 12.88
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A525B4F_6BC5_25E5_41CA_4C776F48E25D",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 15.44,
   "targetYaw": 3.27,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 30.01,
   "targetPitch": 11.81
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.31
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B914EDD_6BC5_5CE5_41C5_420DFE1DEC05",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 25.15,
   "targetYaw": -5.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 49.52,
   "targetPitch": -0.25
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_6471A95A_6BC5_25EF_41B3_A5DFCA25E0C9",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 13.19,
   "targetYaw": -20.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 25.5,
   "targetPitch": -3.01
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 9.61
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A7DC043_6BC5_63DD_41D4_AD990B5524DE",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 48.73,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 96.9,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -58.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -116.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -8.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -143.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 112.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.72
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 1.63,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AF96FBF_6BC5_5CA5_41D1_F759C0DD63BB",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.07
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 5.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
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
   "easing": "cubic_in_out",
   "pitchSpeed": 33.92,
   "targetYaw": 92.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 67.14,
   "targetPitch": -1.76
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.57
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.82
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -0.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B75D42C_6BC5_63A4_41D9_10C4259A4DE8",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 13.68,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 26.47,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 47.79
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7ABB9FF9_6BC5_5CAD_41CE_67EDA5622126",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 31.52,
   "targetYaw": -20.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 62.33,
   "targetPitch": -3.01
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 9.61
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7970269D_6BC5_6F65_41D2_CE226337E7D2",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 83.13,
   "targetYaw": -87.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 166.03,
   "targetPitch": -3.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -30.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -19.78
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B6E7F33_6BC5_5DBD_41A3_5A9DF2563614",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.31
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77AC0DBD_503E_3317_41C0_E0E24E9221CC",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 20.96,
   "targetYaw": -20.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 41.11,
   "targetPitch": -3.01
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -114.43,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 163.17,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 9.61
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 100.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BB8A3F0_6BC5_64BB_41C3_EF388D7EEAE9",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 33.92,
   "targetYaw": 92.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 67.14,
   "targetPitch": -1.76
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.57
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.82
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -0.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B09444B_6BC5_63ED_41B5_953C271C302D",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.88,
   "hfov": 10.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -12.9
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.13,
   "image": "this.AnimatedImageResource_75EC4038_6142_AA0F_41D8_69F657ADF6B7",
   "pitch": -12.9,
   "yaw": -95.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5ED98F6B_4C0D_AB52_41BB_5E21BCD4D8B3",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_78B2574C_6BC5_6DEB_41D1_56745CCF8D25); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.28,
   "hfov": 7.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.15
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_75EF8038_6142_AA0F_41D4_6C2F6502A8D7",
   "pitch": -2.15,
   "yaw": -52.28,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5F9E895F_4C0E_9772_41B3_12204174EBAF",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.58,
   "hfov": 11.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.19
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.14,
   "image": "this.AnimatedImageResource_75EFD038_6142_AA0F_41A9_15391275B1B2",
   "pitch": -4.19,
   "yaw": -5.58,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5B60547E_4C16_FD32_41BE_22924F5C4F05",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7BF6981B_6BC5_636D_41D0_876F07304411); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.95,
   "hfov": 5.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.5
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.71,
   "image": "this.AnimatedImageResource_75EF1039_6142_AA01_41C2_D5FBAD6C9A91",
   "pitch": -2.5,
   "yaw": -70.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_566EE523_4C36_FCD2_41CC_55AFAC6306BF",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_7B9D8892_6BC5_637F_41D1_C81760220ACD); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.95,
   "hfov": 12.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.13,
   "image": "this.AnimatedImageResource_75EF2039_6142_AA01_41D2_C0004C63E88F",
   "pitch": -3,
   "yaw": -179.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_57B6F8D9_4C32_957F_41C9_13FC3BAD255B",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12, this.camera_7BDA37DE_6BC5_6CE4_41CF_8B79529EAFD2); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.79,
   "hfov": 15.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.51
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.43,
   "image": "this.AnimatedImageResource_75EF7039_6142_AA01_41B1_3DDF2D736D8A",
   "pitch": 10.51,
   "yaw": -151.79,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_51280201_4C33_94CF_41D1_7D4AC88DD7AC",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_7B802856_6BC5_63E4_41CA_7C9A1967F8A4); this.mainPlayList.set('selectedIndex', 16)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.41,
   "hfov": 8.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_7_0_map.gif",
      "width": 15,
      "height": 25
     }
    ]
   },
   "pitch": -1.73
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Cocina"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_7_0.png",
      "width": 239,
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
 "id": "overlay_7142457C_4C12_BF36_41C3_965C22106F02",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.66,
   "hfov": 11.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_8_0_map.gif",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": -2.74
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_8_0.png",
      "width": 312,
      "height": 417
     }
    ]
   },
   "pitch": -2.74,
   "yaw": -5.66,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_701A4566_4C1D_9F52_41CB_792274DA2F65",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7BFCA838_6BC5_63AB_41D9_A789EAB64216); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.24,
   "hfov": 26.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_9_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -28.47
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "         Comedor"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 26.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_9_0.png",
      "width": 846,
      "height": 353
     }
    ]
   },
   "pitch": -28.47,
   "yaw": 94.24,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_70E07E84_4C1E_ADD6_41CD_C9C9E90E20AE",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_78F5F712_6BC5_6D7F_41D9_6BD7B93287FA); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.94,
   "hfov": 6.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_10_0_map.gif",
      "width": 16,
      "height": 33
     }
    ]
   },
   "pitch": -2.78
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Sala de\u000d   Cine"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_10_0.png",
      "width": 190,
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
 "id": "overlay_7217DE3F_4C1E_AD33_41C0_6548D05F997F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_7BA1F8AF_6BC5_64A5_41BF_F10ADD9A4A41); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.95,
   "hfov": 13.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_11_0_map.gif",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": -1.54
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "   Calle"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_11_0.png",
      "width": 368,
      "height": 516
     }
    ]
   },
   "pitch": -1.54,
   "yaw": -179.95,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_73DD519A_4C1D_97F2_41D1_2DC7FD988A66",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12, this.camera_7BE377FD_6BC5_6CA5_417E_59F3ECBFE32A); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.57,
   "hfov": 15.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_12_0_map.gif",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": 14.17
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Escalera\u000d Entrepiso"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_12_0.png",
      "width": 446,
      "height": 621
     }
    ]
   },
   "pitch": 14.17,
   "yaw": -151.57,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_72CD0D72_4C13_EF32_41C8_64D446C7AB4C",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475D949B_4C12_9DF3_4192_968EA5FFD756, this.camera_7B960875_6BC5_63A5_41C4_A0DAE0C50B05); this.mainPlayList.set('selectedIndex', 16)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.62,
   "hfov": 11.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_13_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -11.33
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "      Living"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_13_0.png",
      "width": 318,
      "height": 181
     }
    ]
   },
   "pitch": -11.33,
   "yaw": -95.62,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_72C14259_4C15_F57E_41BB_00CEBFD195E8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753, this.camera_7853076B_6BC5_6DAC_41C6_AEE360E5653E); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "yaw": -2.39,
 "bleachingDistance": 0.4,
 "pitch": 59.85,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_7241E1C2_4C32_974D_4185_D8EFCA60DDB0"
},
{
 "yaw": -176.73,
 "bleachingDistance": 0.4,
 "pitch": 79.2,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_724C7981_4C32_97CE_41A2_274C4D75CE46"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.52,
   "hfov": 22.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_14_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -33.27
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 22.51,
   "image": "this.AnimatedImageResource_75EFE03B_6142_AA01_41D5_157EF53FFEFA",
   "pitch": -33.27,
   "yaw": 94.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4BDBC122_56C5_D929_41A6_F195981DDB88",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7895572F_6BC5_6DA5_4192_081C72052D5F); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 48.73,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 96.9,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -58.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -116.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -8.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -143.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 112.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.72
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 1.63,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7A9BAFDC_6BC5_5CEB_41C3_AB233BEF57FE",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 15.44,
   "targetYaw": 3.27,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 30.01,
   "targetPitch": 11.81
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.31
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BB4FEF9_6BC5_5CAD_41B8_4124AB43F214",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 49.5,
   "targetYaw": -5.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 98.46,
   "targetPitch": -0.25
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BEFB35F_6BC5_65E5_41D5_7373DFA73CCB",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 20.07,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 39.32,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -58.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -116.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -8.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -143.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 112.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.72
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 1.63,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78B14242_6BC5_67DF_41D8_596EFCE3B4F0",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 25.18,
   "targetYaw": 92.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 49.59,
   "targetPitch": -1.76
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.57
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.82
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -0.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_795F717A_6BC5_65AF_41B0_68D69D345264",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 46.13,
   "targetYaw": 3.27,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 91.68,
   "targetPitch": 11.81
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.31
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BA003D2_6BC5_64FF_41C9_CC37AB7A96EF",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.57,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -112.42,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 85.54,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -22.3
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 0.38,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
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
   "easing": "cubic_in_out",
   "pitchSpeed": 11.8,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 22.71,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -150.36,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.21
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 115.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 74.24,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.02
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7BF3637B_6BC5_65AD_41D1_33A1171DB677",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 83.13,
   "targetYaw": -87.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 166.03,
   "targetPitch": -3.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -30.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -19.78
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B4B1F15_6BC5_5D65_41CB_4075B8A7C71D",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 16.67,
   "targetYaw": -87.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.48,
   "targetPitch": -3.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -30.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -19.78
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AD9F9B8_6BC5_64AB_41A3_B81E80535E48",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
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
   "easing": "cubic_in_out",
   "pitchSpeed": 46.13,
   "targetYaw": 3.27,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 91.68,
   "targetPitch": 11.81
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.31
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B94F3B4_6BC5_64A4_41B4_BB5813520EFB",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 7.38,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 13.81,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -150.36,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.21
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -178.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 115.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 74.24,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.02
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_64106E10_6BC5_5F7B_41C5_A248F115AB5F",
 "restartMovementDelay": 5000
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_79F917FE_6BC5_2CA7_41C7_A730169485AD, this.albumitem_79FBE7FD_6BC5_2CA5_41D8_5D6CCD38823F); this.loopAlbum(this.playList_79FA57FA_6BC5_2CAF_41D7_F2AB90F619D7, 0)",
 "class": "PhotoAlbumPlayListItem",
 "player": "this.viewer_uid79FB87FB_6BC5_2CAD_41B7_3509F3F3E428PhotoAlbumPlayer",
 "id": "albumitem_79FBE7FD_6BC5_2CA5_41D8_5D6CCD38823F"
},
{
 "media": "this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, this.htmltext_79831802_6BC5_235F_41C1_CFD1AC863DE2, this.albumitem_79826802_6BC5_235F_41B3_F2A3F3507792); this.loopAlbum(this.playList_7985E801_6BC5_235D_41A5_27CD8A7A6E87, 0)",
 "class": "PhotoAlbumPlayListItem",
 "player": "this.viewer_uid79824802_6BC5_235F_41D0_9F0243E741D7PhotoAlbumPlayer",
 "id": "albumitem_79826802_6BC5_235F_41B3_F2A3F3507792"
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 18.82,
   "targetYaw": -87.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.81,
   "targetPitch": -3.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -30.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -19.78
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79510CA2_6BC5_235F_41A4_0C311710FF26",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 18.85,
   "targetYaw": 0,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 36.87,
   "targetPitch": 0
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 47.79
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7991B620_6BC5_6F5B_41C7_EB0B68182172",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 32.17,
   "targetYaw": -24.62,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 63.64,
   "targetPitch": 27.13
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78D3A6F5_6BC5_6CA5_41D1_E13AE7EE59B7",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.71,
   "hfov": 19.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -13.23
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 19.44,
   "image": "this.AnimatedImageResource_75C12064_6142_AA07_41D5_3D1028FAAD80",
   "pitch": -13.23,
   "yaw": -149.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_649BC5B9_4C16_9F3F_41CE_03F1CF8B85B0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_7A3C759A_6BC5_6D6F_41AA_89AE70437100); this.mainPlayList.set('selectedIndex', 18)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.47,
   "hfov": 21.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_1_0_map.gif",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": -13.12
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Habitaci\u00f3n\u000d     Master"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 21.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_1_0.png",
      "width": 618,
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
 "id": "overlay_60A2EB4F_4C35_EB53_41BB_7B4C45E778F5",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_79DE85C6_6BC5_6CE7_41B2_9D9A140D83D9); this.mainPlayList.set('selectedIndex', 18)"
  }
 ]
},
{
 "yaw": 138.05,
 "bleachingDistance": 0.4,
 "pitch": 7.35,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_0DB44A7A_4C0E_953D_41C6_712CBBF32DAF"
},
{
 "yaw": 121.21,
 "bleachingDistance": 0.4,
 "pitch": 6.85,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_0DBC62EA_4C0E_F55D_41CB_80F63DC048E7"
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 31.31,
   "targetYaw": -5.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 61.91,
   "targetPitch": -0.25
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7951E67C_6BC5_6FA4_41D4_B5539EBA3177",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.57,
   "hfov": 10.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.63
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.77,
   "image": "this.AnimatedImageResource_75F50051_6142_AA01_41CB_C86DF89DB571",
   "pitch": -3.63,
   "yaw": 98.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_539238FD_4C72_9536_41C1_9735137A6A8B",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_7932B6D7_6BC5_6CE5_41B1_45D34DF0A7B5); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.72,
   "hfov": 10.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.86
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.77,
   "image": "this.AnimatedImageResource_75F55052_6142_AA03_41C1_E75FF7E2CFB7",
   "pitch": -3.86,
   "yaw": 144.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_539524B3_4C72_9D33_41BF_0168CD1AF8AE",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_79B1A650_6BC5_6FFB_41D7_3D6A0DBDDA1C); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.64,
   "hfov": 16.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -13.33
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.42,
   "image": "this.AnimatedImageResource_75F49052_6142_AA03_41D2_EEBE6D133AAF",
   "pitch": -13.33,
   "yaw": -169.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_52780C30_4C76_6CCE_41C1_B9F2E8174A50",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_7973D69C_6BC5_6F6B_41C0_E8E464FF7FF5); this.mainPlayList.set('selectedIndex', 12)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.71,
   "hfov": 7.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.25
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.35,
   "image": "this.AnimatedImageResource_75F4A052_6142_AA03_41D7_BC78C3834810",
   "pitch": -4.25,
   "yaw": 130.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6F8B9EB2_4C77_ADCD_41D1_02693D57AF37",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_79FEF5F3_6BC5_6CBD_41CC_34B573CCC95A); this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.46,
   "hfov": 11.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_4_0_map.gif",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": -2.08
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "     Deck"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_4_0.png",
      "width": 309,
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
 "id": "overlay_78EBC3AE_4C17_FBD5_41CF_7454C300F3F8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_78D346F5_6BC5_6CA5_414C_0D1B20AC4CBA); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.72,
   "hfov": 8.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_5_0_map.gif",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": -3.17
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Piscinas"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_5_0.png",
      "width": 244,
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
 "id": "overlay_7AA7DA94_4C16_95F6_41C3_C928FF8C5DF3",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC, this.camera_7991A620_6BC5_6F5B_41D2_3900ABF1BDFD); this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.76,
   "hfov": 16.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_6_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": -11.6
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "       Pasillo"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_6_0.png",
      "width": 465,
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
 "id": "overlay_7982F986_4C12_97D2_41AF_EBA9BB403852",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_478D58DC_4C15_9576_41C4_AC665A6486C7, this.camera_7913A6B9_6BC5_6CAD_41C3_EE76B081E6A8); this.mainPlayList.set('selectedIndex', 12)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.51,
   "hfov": 9.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_7_0_map.gif",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": -1.87
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_7_0.png",
      "width": 259,
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
 "id": "overlay_74F737A5_4C13_9BD6_41C7_666E6CB897D9",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_7951967C_6BC5_6FA4_41D1_87383B1FF184); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 31.86,
   "targetYaw": -23.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 63.02,
   "targetPitch": -0.75
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -14.26
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 6.34
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7895B72F_6BC5_6DA5_418F_02068FA0539A",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.74,
   "hfov": 17.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -14.93
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.38,
   "image": "this.AnimatedImageResource_75F28050_6142_AA00_41D6_559AAA255AA9",
   "pitch": -14.93,
   "yaw": -20.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_55BD891B_4C12_F4F2_41BF_BD7A099FA4FB",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_64250994_6BC5_257B_41BD_4CDF73A51EB5); this.mainPlayList.set('selectedIndex', 13)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.62,
   "hfov": 10.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.61
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.74,
   "image": "this.AnimatedImageResource_75F2D050_6142_AA00_41AA_90627B8A1897",
   "pitch": -5.61,
   "yaw": 42.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_569D5C53_4C13_ED72_41C5_56F2E1168FED",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_7BC8D9CC_6BC5_24E4_41D7_5089ADE4D492); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.31,
   "hfov": 10.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.45
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.76,
   "image": "this.AnimatedImageResource_75F2E050_6142_AA00_4191_8B72C048700E",
   "pitch": -4.45,
   "yaw": 88.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_55344675_4C12_7D37_41CA_0C7A84DACAAA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_6471895A_6BC5_25EF_41C9_D73C7B2035C5); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.14,
   "hfov": 9.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_3_0_map.gif",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": -3.08
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Quincho"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_3_0.png",
      "width": 263,
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
 "id": "overlay_79858F87_4C0D_ABD3_41C2_6BD4B90B4286",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A, this.camera_640A8977_6BC5_25A4_41B6_4F02FCA2D9E1); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.84,
   "hfov": 16.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_4_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": -13.12
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "       Parrilla"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_4_0.png",
      "width": 465,
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
 "id": "overlay_7A5E25AC_4C0D_9FD5_41A7_29C3FBE038B8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4, this.camera_643189B0_6BC5_24BB_41CA_060A3A14C146); this.mainPlayList.set('selectedIndex', 13)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.63,
   "hfov": 9.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_5_0_map.gif",
      "width": 16,
      "height": 23
     }
    ]
   },
   "pitch": -3.17
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Deck"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_5_0.png",
      "width": 255,
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
 "id": "overlay_7ABCF3A7_4DF3_FBD3_41D0_D18E2BE7D6F6",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_475DC811_4C15_94CF_41AB_229107954A38, this.camera_7BE0D9EA_6BC5_24AF_41D3_E1CFDD7EDC32); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.58,
   "hfov": 9.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.62
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.98,
   "image": "this.AnimatedImageResource_75C0D063_6142_AA01_41D5_D06358ED5067",
   "pitch": -3.62,
   "yaw": 146.58,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6A5E0209_4C0E_94DF_417D_46B9DFD108C3",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_7950ECA2_6BC5_235F_41C8_B1DE2145A3D0); this.mainPlayList.set('selectedIndex', 17)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.8,
   "hfov": 16.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_1_0_map.gif",
      "width": 16,
      "height": 30
     }
    ]
   },
   "pitch": -3.42
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_1_0.png",
      "width": 451,
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
 "id": "overlay_6261EA3E_4C3F_B535_41D0_801F1A3A3344",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_79703CC1_6BC5_5CDD_41A1_4352C61D5130); this.mainPlayList.set('selectedIndex', 17)"
  }
 ]
},
{
 "yaw": 34.29,
 "bleachingDistance": 0.4,
 "pitch": 30.96,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_7243A9E8_4C0E_775E_41A5_59C64522A4DF"
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.87,
   "hfov": 16.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 17.13
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.85,
   "image": "this.AnimatedImageResource_75CB805A_6142_AA03_41D5_156038638883",
   "pitch": 17.13,
   "yaw": -14.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6E7D7ACC_4C72_9555_41C8_254666DCBD5A",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_7AD9E9B8_6BC5_64AB_41B4_7D3914B11B36); this.mainPlayList.set('selectedIndex', 17)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.9,
   "hfov": 12.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -33.05
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.2,
   "image": "this.AnimatedImageResource_75CBD05A_6142_AA03_41D5_C27C76CC96C7",
   "pitch": -33.05,
   "yaw": -6.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_689FBDC5_4C76_EF56_41D0_FDE427A56FD1",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_7B21797F_6BC5_65A5_41C2_66EE4ADC52EC); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.63,
   "hfov": 6.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -26.36
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.24,
   "image": "this.AnimatedImageResource_75CB105A_6142_AA03_41C2_EDC5AE617CB5",
   "pitch": -26.36,
   "yaw": 6.63,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_68C43EA9_4C76_6DDE_41BC_6917D875D7F0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7B700943_6BC5_65DC_41D6_7B7B3DA5DF42); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.42,
   "hfov": 4.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.78
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 4.51,
   "image": "this.AnimatedImageResource_75CB205B_6142_AA01_41D6_06424871EBA5",
   "pitch": 10.78,
   "yaw": -39.42,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_696D3868_4C76_955E_41D2_B78938E57E51",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383, this.camera_7AB5DA0C_6BC5_6764_41D7_EC4C3079B547); this.mainPlayList.set('selectedIndex', 18)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.88,
   "hfov": 15.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.29
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.44,
   "image": "this.AnimatedImageResource_75CB705B_6142_AA01_41D1_2C89DB2733C2",
   "pitch": -15.29,
   "yaw": 130.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_68EAA62C_4C72_BCD6_41AD_F2767561D35F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.55,
   "hfov": 7.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_5_0_map.gif",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": 11.82
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Habitaci\u00f3n\u000d    Master"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_5_0.png",
      "width": 225,
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
 "id": "overlay_62AE8006_4C3E_94D5_4195_37AB3152888F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.95,
   "hfov": 11.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_6_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -30.96
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "        Sala\u000d      Centro"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_6_0.png",
      "width": 378,
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
 "id": "overlay_63036D8E_4C3D_AFD2_41CC_31017422F0F6",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_7AC4D99B_6BC5_656D_41CF_331B03DB4C85); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.83,
   "hfov": 7.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.14
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.96,
   "image": "this.AnimatedImageResource_75CAC05B_6142_AA01_41B6_299C284993A7",
   "pitch": 16.14,
   "yaw": 15.83,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63CFCEB6_4C32_AD32_41C6_39DBCAE7E4F6",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.16,
   "hfov": 16.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_8_0_map.gif",
      "width": 15,
      "height": 21
     }
    ]
   },
   "pitch": 17.52
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "\u000d Habitaci\u00f3n"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_8_0.png",
      "width": 474,
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
 "id": "overlay_630263E9_4C33_9B5F_41A8_0D731596BBA0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_7AFDA9D5_6BC5_64E5_41C2_7634A143321A); this.mainPlayList.set('selectedIndex', 17)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.82,
   "hfov": 16.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_9_0_map.gif",
      "width": 16,
      "height": 33
     }
    ]
   },
   "pitch": 19.29
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "\u000d     Estar\u000d     Diario"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_9_0.png",
      "width": 473,
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
 "id": "overlay_63881641_4C35_9D4F_41BF_500F021033D3",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80, this.camera_7A9E49F0_6BC5_64BB_41CF_8DDD1B2F82AA); this.mainPlayList.set('selectedIndex', 17)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.53,
   "hfov": 16.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_10_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -13.08
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "      Calle"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_10_0.png",
      "width": 465,
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
 "id": "overlay_63647F43_4C33_AB53_41D1_F19AB5488D5A",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.64,
   "hfov": 8.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_11_0_map.gif",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": -25.06
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Comedor"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_11_0.png",
      "width": 257,
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
 "id": "overlay_638525C6_4C0D_9F52_41D1_E258508E5E91",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E43600B_4C16_74D3_41C9_0835704A9354, this.camera_7B0B0961_6BC5_65DD_41D7_01D3931ECDE4); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "yaw": 151.61,
 "bleachingDistance": 0.4,
 "pitch": 63.12,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_72D70213_4C0F_94F3_41B8_F09D9513D0DA"
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 25.15,
   "targetYaw": -5.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 49.52,
   "targetPitch": -0.25
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.69,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -146.34,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 158.65,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 86.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -17.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 40.32,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 4.84
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_640AB978_6BC5_25AB_41D7_79CE455DEC85",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 52.95,
   "targetYaw": -24.62,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 105.38,
   "targetPitch": 27.13
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_79FF80F6_6BC5_64A7_41D3_934478DFC340",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -72.73,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -49.36,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 47.79
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 134.03,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -173.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.71
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77F1399A_503E_331D_41C0_4C44E9F003DB",
 "restartMovementDelay": 5000
},
{
 "borderRadius": 0,
 "children": [
  "this.viewer_uid79FB87FB_6BC5_2CAD_41B7_3509F3F3E428",
  {
   "borderRadius": 0,
   "children": [
    "this.htmltext_79F917FE_6BC5_2CA7_41C7_A730169485AD"
   ],
   "scrollBarWidth": 7,
   "left": 0,
   "backgroundColorRatios": [],
   "right": 0,
   "horizontalAlign": "left",
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "scrollBarColor": "#FFFFFF",
   "gap": 10,
   "layout": "vertical",
   "minHeight": 20,
   "contentOpaque": true,
   "minWidth": 20,
   "bottom": 0,
   "backgroundColor": [],
   "paddingBottom": 0,
   "class": "Container",
   "scrollBarVisible": "rollOver",
   "height": "30%",
   "backgroundColorDirection": "vertical",
   "scrollBarOpacity": 0.5,
   "propagateClick": false,
   "verticalAlign": "bottom",
   "overflow": "scroll",
   "shadow": false,
   "scrollBarMargin": 2,
   "paddingTop": 0,
   "data": {
    "name": "Container3366"
   },
   "backgroundOpacity": 0.3
  },
  "this.component_798747FF_6BC5_2CA5_4186_40F8F99F6A39",
  "this.component_798777FF_6BC5_2CA5_419F_2A848693F9C4"
 ],
 "scrollBarWidth": 10,
 "id": "container_79F827FD_6BC5_2CA5_41B2_D7095D6F757E",
 "layout": "absolute",
 "width": "100%",
 "backgroundColorRatios": [],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 20,
 "backgroundColor": [],
 "paddingBottom": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Container3365"
 },
 "backgroundOpacity": 0.3
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 45.57,
   "targetYaw": -24.62,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 90.55,
   "targetPitch": 27.13
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 31.53,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 132.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 16.39
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 131.77,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -26.32
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.16,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -12
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -47.1,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -10.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 29.02,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.95
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78F03208_6BC5_676B_41D6_DEA8E91FCE32",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 27.96,
   "targetYaw": -38.25,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 55.17,
   "targetPitch": -22.96
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 35.55,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -16.02
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 67.96,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -7.98
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 177.99,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -4.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -149.85,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 7.85
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -121.47,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.19,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -9.23
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_643D32EA_6BC5_64AF_41DA_D4F7D86F7EF0",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 64.36,
   "targetYaw": -3.52,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 128.31,
   "targetPitch": -18.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -33.1
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -36.36
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 12.88
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 17.9
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B803856_6BC5_63E4_41CD_D4B626657FF3",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 16.54,
   "targetYaw": 92.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.23,
   "targetPitch": -1.76
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.57
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.82
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -0.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_64252994_6BC5_257B_41B1_BECD6D14985B",
 "restartMovementDelay": 5000
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.04,
   "hfov": 11.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.2
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.5,
   "image": "this.AnimatedImageResource_75E56040_6142_AA00_41D0_C20BCF80F44C",
   "pitch": -5.2,
   "yaw": 33.04,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5F9D2CB5_4CF2_6D31_41B7_5BCEF2CFED01",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_7BC0A306_6BC5_6567_41D3_E0249164831B); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.34,
   "hfov": 17.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -14.03
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.15,
   "image": "this.AnimatedImageResource_75E4A040_6142_AA00_41C0_E4C3C607B6A0",
   "pitch": -14.03,
   "yaw": 157.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5AE07B89_4CF2_EBDF_41D0_0E914D04EED6",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_643732CD_6BC5_64E5_41AF_CD294E22359F); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.87,
   "hfov": 13.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.15
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.2,
   "image": "this.AnimatedImageResource_75E4F040_6142_AA00_41D8_5FB116CE22E9",
   "pitch": -5.15,
   "yaw": 89.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_59A6ACB0_4C0E_6DCD_41C1_5C1B9CBD1730",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_78B11242_6BC5_67DF_41D7_9A4834C16D35); this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 115.98,
   "hfov": 9.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.37
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.09,
   "image": "this.AnimatedImageResource_75E40041_6142_AA00_41D7_66A97CB88424",
   "pitch": -4.37,
   "yaw": 115.98,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5207670B_4C12_BCD2_41C7_91CD2C8CFC49",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.9,
   "hfov": 11.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_4_0_map.gif",
      "width": 16,
      "height": 31
     }
    ]
   },
   "pitch": -3.19
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Sala de\u000d    Cine"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_4_0.png",
      "width": 305,
      "height": 594
     }
    ]
   },
   "pitch": -3.19,
   "yaw": 32.9,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_75752B26_4DF5_94D5_41BE_473EFED9DBD7",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6, this.camera_7BD67323_6BC5_655D_41C5_C91E4E97C49C); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.64,
   "hfov": 14.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_5_0_map.gif",
      "width": 16,
      "height": 30
     }
    ]
   },
   "pitch": -4.44
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  \u000d   Cocina"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_5_0.png",
      "width": 396,
      "height": 756
     }
    ]
   },
   "pitch": -4.44,
   "yaw": 89.64,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_721F4000_4DF7_94CE_41C5_C23548018D00",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64, this.camera_6420D2B0_6BC5_64BB_41CA_59439626E27E); this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 115.7,
   "hfov": 10.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_6_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -2.81
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": " Piscinas"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_6_0.png",
      "width": 300,
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
 "id": "overlay_0F886554_4DF6_BF76_41C9_78656514EDB0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.22,
   "hfov": 17.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_7_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": -12.27
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "  Sala - Centro"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_7_0.png",
      "width": 482,
      "height": 243
     }
    ]
   },
   "pitch": -12.27,
   "yaw": 157.22,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_70F91094_4DF5_F5F6_41C2_500E4A3028EC",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223, this.camera_643D22EA_6BC5_64AF_41D5_9198E5049BE3); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "yaw": 4.4,
 "bleachingDistance": 0.4,
 "pitch": 55.58,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_7257A9C3_4C0D_9752_41D2_10B53BCDED80"
},
{
 "yaw": 128.25,
 "bleachingDistance": 0.4,
 "pitch": 55.83,
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "id": "overlay_725DDFD6_4C0D_AB72_41BC_1ECF3EBC4A83"
},
{
 "rotate": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 5.92,
   "targetYaw": 0.75,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 10.89,
   "targetPitch": 8.04
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.07
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 5.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78B2A74C_6BC5_6DEB_41A5_D56CDC7CFE57",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.57
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.82
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -0.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
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
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 39.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -33.1
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -117.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -36.36
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -40.07,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 12.88
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 16.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
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
   "easing": "cubic_in_out",
   "pitchSpeed": 24.56,
   "targetYaw": 0.75,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 48.33,
   "targetPitch": 8.04
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -79.76,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.07
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -113.93,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -11.24
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -160.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 5.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 110.91,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -5.46
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 59.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 2.83
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B275F6B_6BC5_5DAD_41CF_864E7DAE9204",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -30.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -19.78
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_77D188BB_503E_5113_4169_313A25054DA6",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 37.63,
   "targetYaw": 3.27,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 74.6,
   "targetPitch": 11.81
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 56.9,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 140.06,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.31
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -177.49,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.2
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -110.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -41.58,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.06
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7B106A96_6BC5_2764_41C6_770F473238B7",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 76.64,
   "targetYaw": -23.11,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 153,
   "targetPitch": -0.75
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 13.94,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -14.26
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -162.92,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 6.34
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -94.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.22
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7933FCFF_6BC5_5CA5_41B1_652601D4C0B2",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 27.83,
   "targetYaw": 92.45,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 54.92,
   "targetPitch": -1.76
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 7.66,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.95
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -22.23,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 0.57
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -66.95,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": 1.82
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -167.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -0.44
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 145.08,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -1.19
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_78D131EB_6BC5_64AD_41C6_BB187C78E144",
 "restartMovementDelay": 5000
},
{
 "movements": [
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 16.67,
   "targetYaw": -87.68,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 32.48,
   "targetPitch": -3.27
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -65.44,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -30.59
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -61.67,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -3.45
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 53.64,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -6.97
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": 123.22,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -19.78
  },
  {
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetYaw": -151.61,
   "path": "shortest",
   "class": "TargetPanoramaCameraMovement",
   "yawSpeed": 33.25,
   "targetPitch": -2.7
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": true,
 "id": "sequence_7AFD89D5_6BC5_64E5_41D0_B518EDBDFF1D",
 "restartMovementDelay": 5000
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75CF105F_6142_AA01_41BB_88D1493AA187",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75CF4060_6142_AA3F_41C3_09C7491790E9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5FAC4DD2_4C13_AF4D_41A6_7511AFA7D383_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75CE9060_6142_AA3F_41C1_63219C15BFDB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75FA5047_6142_AA00_41A2_2F1A9D5BE271",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_2_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75FD8047_6142_AA00_419F_F28EB873CCBE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50E2EDD0_5C8D_E266_4183_430FF57F8DA6_1_HS_4_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75FB5048_6142_AA00_41B1_958E9DBD2AB1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_0_0.png",
   "width": 1080,
   "height": 350
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75EEB03B_6142_AA01_41D8_61A7D4549873",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75EED03B_6142_AA01_41D3_851460DA5A82",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_2_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75EEE03B_6142_AA01_41D2_6D30AED34620",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_3_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75EE203C_6142_AA07_41AF_F17CF60246BD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E43600B_4C16_74D3_41C9_0835704A9354_1_HS_8_0.png",
   "width": 1080,
   "height": 350
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75E1F03D_6142_AA01_41D3_8683D49AE53F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_0_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F72054_6142_AA07_41D3_2D04632FD2B5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_1_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F76054_6142_AA07_41AF_2AD3A6F958EC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_2_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F68054_6142_AA07_4198_EBF1094E9562",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_3_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F45055_6142_AA01_41CE_DA7E49B2A8A7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_4_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F47055_6142_AA01_41C4_FD95038415F1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475DC811_4C15_94CF_41AB_229107954A38_1_HS_5_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F78055_6142_AA01_41B5_258A50734517",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5A7336F9_5742_43D8_419A_CC9FEECAAA12_3_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75EB8033_6142_AA01_41B5_64842B1ED985",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75FE904B_6142_AA00_41C1_0C272A8678FB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75FEB04B_6142_AA00_41D6_1DF1E420CC62",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E1F0519_4C3D_9CFF_41AE_C0A12D287A64_1_HS_2_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75FEF04B_6142_AA00_41D7_47F8D4A39A4C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C05065_6142_AA01_41AB_473A28C0DBCE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_1_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C06065_6142_AA01_41D6_B62C9EBDA915",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475C9939_4C12_773F_418D_8C3F7D53D2DA_1_HS_2_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C38065_6142_AA01_4176_BF3EBB084396",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75CD205D_6142_AA01_41C1_E79F256A7371",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75CD605D_6142_AA01_41C9_F5F44EE60FD8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_2_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75CC805D_6142_AA01_41D8_5C449BB71A06",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47B761AE_4C13_97D5_41CB_DC747C2DBA80_1_HS_6_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75CC505E_6142_AA03_41C3_F99A574AA2DA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_0_0.png",
   "width": 1080,
   "height": 600
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75E69042_6142_AA00_41D1_BB244C836120",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_2_0.png",
   "width": 1080,
   "height": 600
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75E60043_6142_AA00_41C6_BB0DBCAE43B0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50183A25_5C8D_2629_41D5_8882BBB17BB8_1_HS_4_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75E67043_6142_AA00_41BD_FC55BB90C9E0",
 "frameDuration": 41
},
{
 "playbackBarHeadShadow": true,
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid79824802_6BC5_235F_41D0_9F0243E741D7",
 "toolTipShadowSpread": 0,
 "width": "100%",
 "playbackBarBottom": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingLeft": 6,
 "vrPointerSelectionTime": 2000,
 "progressBorderColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "minWidth": 100,
 "playbackBarHeadWidth": 6,
 "toolTipFontStyle": "normal",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderSize": 0,
 "height": "100%",
 "playbackBarHeadOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "propagateClick": false,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontWeight": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipPaddingTop": 4,
 "shadow": false,
 "transitionDuration": 500,
 "toolTipFontSize": "1.11vmin",
 "progressHeight": 6,
 "playbackBarBorderRadius": 0,
 "progressRight": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundOpacity": 1,
 "progressOpacity": 1,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipOpacity": 1,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarRight": 0,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipPaddingRight": 6,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarProgressBorderSize": 0,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarBackgroundOpacity": 1,
 "progressBarBorderSize": 6,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "data": {
  "name": "ViewerArea3376"
 },
 "toolTipShadowOpacity": 1,
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeight": 10,
 "transitionMode": "blending"
},
{
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "htmltext_79831802_6BC5_235F_41C1_CFD1AC863DE2",
 "backgroundColorRatios": [
  0
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "width": "100%",
 "paddingRight": 10,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minHeight": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 5,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText3379"
 },
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 5,
 "visible": false,
 "html": "",
 "backgroundOpacity": 0.7
},
{
 "borderRadius": 0,
 "id": "component_79822803_6BC5_235D_41BA_814E6AA7F1D6",
 "left": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/album_left.png",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "top": "45%",
 "transparencyActive": true,
 "minWidth": 0,
 "mode": "push",
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "data": {
  "name": "IconButton3380"
 },
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "id": "component_79825803_6BC5_235D_41D1_44FDFF84A1A6",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "right": 10,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/album_right.png",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "top": "45%",
 "transparencyActive": true,
 "minWidth": 0,
 "mode": "push",
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, 1)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "data": {
  "name": "IconButton3381"
 },
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E4E18DB_4C36_B572_41C5_F38F1EA369C6_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75E23040_6142_AA7F_41C4_D38EDE9E45A4",
 "frameDuration": 41
},
{
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "viewerArea": "this.viewer_uid79840800_6BC5_235B_41D2_BD30CF2FA000",
 "id": "viewer_uid79840800_6BC5_235B_41D2_BD30CF2FA000PhotoAlbumPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D"
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75CE4061_6142_AA01_41CA_005D32128FFD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50FC8390_5C8D_E6E6_4196_F4469B769C80_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C1B061_6142_AA01_41D3_FF01B680FEAD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_0_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F64057_6142_AA01_41B4_E5609EE648F3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_1_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C99057_6142_AA01_41D3_2F3D3CD80016",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_2_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C9D058_6142_AA0F_41D1_34333013D054",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_3_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C9F058_6142_AA0F_41C8_5F4615299382",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_478173AF_4C15_9BD2_41AE_B302FEAF4AAC_1_HS_4_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C93058_6142_AA0F_41C4_B289CE8B0738",
 "frameDuration": 41
},
{
 "playbackBarHeadShadow": true,
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid79840800_6BC5_235B_41D2_BD30CF2FA000",
 "toolTipShadowSpread": 0,
 "width": "100%",
 "playbackBarBottom": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingLeft": 6,
 "vrPointerSelectionTime": 2000,
 "progressBorderColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "minWidth": 100,
 "playbackBarHeadWidth": 6,
 "toolTipFontStyle": "normal",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderSize": 0,
 "height": "100%",
 "playbackBarHeadOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "propagateClick": false,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontWeight": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipPaddingTop": 4,
 "shadow": false,
 "transitionDuration": 500,
 "toolTipFontSize": "1.11vmin",
 "progressHeight": 6,
 "playbackBarBorderRadius": 0,
 "progressRight": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundOpacity": 1,
 "progressOpacity": 1,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipOpacity": 1,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarRight": 0,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipPaddingRight": 6,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarProgressBorderSize": 0,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarBackgroundOpacity": 1,
 "progressBarBorderSize": 6,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "data": {
  "name": "ViewerArea3370"
 },
 "toolTipShadowOpacity": 1,
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeight": 10,
 "transitionMode": "blending"
},
{
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "htmltext_7984D801_6BC5_235D_41DA_2512E9DC589D",
 "backgroundColorRatios": [
  0
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "width": "100%",
 "paddingRight": 10,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minHeight": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 5,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText3373"
 },
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 5,
 "visible": false,
 "html": "",
 "backgroundOpacity": 0.7
},
{
 "borderRadius": 0,
 "id": "component_7985A801_6BC5_235D_41D3_5F47899A425C",
 "left": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/album_left.png",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "top": "45%",
 "transparencyActive": true,
 "minWidth": 0,
 "mode": "push",
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "data": {
  "name": "IconButton3374"
 },
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "id": "component_7985D801_6BC5_235D_41C1_3E2AAE214924",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "right": 10,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/album_right.png",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "top": "45%",
 "transparencyActive": true,
 "minWidth": 0,
 "mode": "push",
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, 1)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "data": {
  "name": "IconButton3375"
 },
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_52FC661E_5C8D_2E1A_41B6_337362F0397F_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C13062_6142_AA03_41CE_AEBAC82D6EBB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_0_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C21067_6142_AA01_41D4_B2A09A2FD180",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_478DFE3B_4C12_AD33_41B0_C9D267AB2FC5_1_HS_1_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C22067_6142_AA01_41D4_58803F930106",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_0_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F1304D_6142_AA00_41D2_DEB7CEE79732",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F1504D_6142_AA00_41CA_A3895DCD153E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_2_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F1604D_6142_AA00_41D4_1193F96B91E1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_3_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F0B04D_6142_AA00_419B_5F01C672908F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_4_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F0C04E_6142_AA00_4190_02DDBED58C43",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47A6542A_4C16_7CD2_41C6_8810A290DC4A_1_HS_5_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F0104E_6142_AA00_41BB_FA1822BE9E71",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F8F044_6142_AA00_41B1_1F3BCC9A8E3D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F82045_6142_AA00_41C9_294A7BC0A459",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_4_0.png",
   "width": 1080,
   "height": 600
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75FBD045_6142_AA00_41D2_082156A78027",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_58B8D424_4CF2_9CD5_41C3_FDDD3E76A48A_1_HS_6_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75FB3046_6142_AA00_41CE_EF371DD26C76",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75FA4049_6142_AA00_41D5_115D7FA7CF98",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75FD9049_6142_AA00_41C4_64FB6803FBCF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_4_0.png",
   "width": 1080,
   "height": 600
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75FD1049_6142_AA00_41D5_A835AF753E61",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_47588C8D_4C16_ADD6_41D0_2A06430E7F1A_1_HS_6_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75FD504A_6142_AA00_41AD_E670AD269EA6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_1_0.png",
   "width": 1080,
   "height": 600
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75E0103E_6142_AA03_4189_7F0EEB564FBE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75E0203E_6142_AA03_4167_23A68A61F274",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_4_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75E3903E_6142_AA03_41C0_79F4985E1105",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_6_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75E3F03F_6142_AA01_4178_11FC6E7B9CCC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_50E2570A_5C8D_6FFA_41D0_57AA9C231FCC_1_HS_8_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75E3203F_6142_AA01_41D5_EA119E648A57",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_0_0.png",
   "width": 1080,
   "height": 350
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75EC4038_6142_AA0F_41D8_69F657ADF6B7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75EF8038_6142_AA0F_41D4_6C2F6502A8D7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_2_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75EFD038_6142_AA0F_41A9_15391275B1B2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75EF1039_6142_AA01_41C2_D5FBAD6C9A91",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_4_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75EF2039_6142_AA01_41D2_C0004C63E88F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_5_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75EF7039_6142_AA01_41B1_3DDF2D736D8A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5D061EA3_4C12_EDD2_418E_B1D2CE363223_1_HS_14_0.png",
   "width": 1080,
   "height": 600
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75EFE03B_6142_AA01_41D5_157EF53FFEFA",
 "frameDuration": 41
},
{
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "viewerArea": "this.viewer_uid79FB87FB_6BC5_2CAD_41B7_3509F3F3E428",
 "id": "viewer_uid79FB87FB_6BC5_2CAD_41B7_3509F3F3E428PhotoAlbumPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D"
},
{
 "class": "PhotoAlbumPlayer",
 "buttonPlay": "this.IconButton_6B7BC538_502A_54D0_41D1_62CB96EB7C61",
 "viewerArea": "this.viewer_uid79824802_6BC5_235F_41D0_9F0243E741D7",
 "id": "viewer_uid79824802_6BC5_235F_41D0_9F0243E741D7PhotoAlbumPlayer",
 "buttonPause": "this.IconButton_6F3CFD6E_51EE_3770_41C0_0D68BE05DA9D"
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_478D447F_4C13_9D33_41C3_2607B0A8ED70_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C12064_6142_AA07_41D5_3D1028FAAD80",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_0_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F50051_6142_AA01_41CB_C86DF89DB571",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_1_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F55052_6142_AA03_41C1_E75FF7E2CFB7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_2_0.png",
   "width": 1080,
   "height": 350
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75F49052_6142_AA03_41D2_EEBE6D133AAF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5E9E5DBB_4C32_AF32_41CF_3DD84D2EA3B4_1_HS_3_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F4A052_6142_AA03_41D7_BC78C3834810",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_0_0.png",
   "width": 1080,
   "height": 350
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75F28050_6142_AA00_41D6_559AAA255AA9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_1_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F2D050_6142_AA00_41AA_90627B8A1897",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_478D58DC_4C15_9576_41C4_AC665A6486C7_1_HS_2_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75F2E050_6142_AA00_4191_8B72C048700E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F273F3F_4C13_EB33_41C9_E24BD6D11CE4_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75C0D063_6142_AA01_41D5_D06358ED5067",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_0_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75CB805A_6142_AA03_41D5_156038638883",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_1_0.png",
   "width": 1080,
   "height": 600
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75CBD05A_6142_AA03_41D5_C27C76CC96C7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_2_0.png",
   "width": 1080,
   "height": 600
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75CB105A_6142_AA03_41C2_EDC5AE617CB5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75CB205B_6142_AA01_41D6_06424871EBA5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_4_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75CB705B_6142_AA01_41D1_2C89DB2733C2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_475D949B_4C12_9DF3_4192_968EA5FFD756_1_HS_7_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75CAC05B_6142_AA01_41B6_299C284993A7",
 "frameDuration": 41
},
{
 "playbackBarHeadShadow": true,
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid79FB87FB_6BC5_2CAD_41B7_3509F3F3E428",
 "toolTipShadowSpread": 0,
 "width": "100%",
 "playbackBarBottom": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingLeft": 6,
 "vrPointerSelectionTime": 2000,
 "progressBorderColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "minWidth": 100,
 "playbackBarHeadWidth": 6,
 "toolTipFontStyle": "normal",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderSize": 0,
 "height": "100%",
 "playbackBarHeadOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "propagateClick": false,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontWeight": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipPaddingTop": 4,
 "shadow": false,
 "transitionDuration": 500,
 "toolTipFontSize": "1.11vmin",
 "progressHeight": 6,
 "playbackBarBorderRadius": 0,
 "progressRight": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundOpacity": 1,
 "progressOpacity": 1,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipOpacity": 1,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarRight": 0,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipPaddingRight": 6,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarProgressBorderSize": 0,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarBackgroundOpacity": 1,
 "progressBarBorderSize": 6,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "data": {
  "name": "ViewerArea3364"
 },
 "toolTipShadowOpacity": 1,
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeight": 10,
 "transitionMode": "blending"
},
{
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "htmltext_79F917FE_6BC5_2CA7_41C7_A730169485AD",
 "backgroundColorRatios": [
  0
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "width": "100%",
 "paddingRight": 10,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minHeight": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 5,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText3367"
 },
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 5,
 "visible": false,
 "html": "",
 "backgroundOpacity": 0.7
},
{
 "borderRadius": 0,
 "id": "component_798747FF_6BC5_2CA5_4186_40F8F99F6A39",
 "left": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/album_left.png",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "top": "45%",
 "transparencyActive": true,
 "minWidth": 0,
 "mode": "push",
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, -1)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "data": {
  "name": "IconButton3368"
 },
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "id": "component_798777FF_6BC5_2CA5_419F_2A848693F9C4",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "right": 10,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/album_right.png",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "top": "45%",
 "transparencyActive": true,
 "minWidth": 0,
 "mode": "push",
 "paddingBottom": 0,
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4868474A_5066_7F7D_41AC_28BCE07E31B8_AlbumPlayList, 1)",
 "verticalAlign": "middle",
 "propagateClick": false,
 "data": {
  "name": "IconButton3369"
 },
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75E56040_6142_AA00_41D0_C20BCF80F44C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_1_0.png",
   "width": 1080,
   "height": 350
  }
 ],
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "id": "AnimatedImageResource_75E4A040_6142_AA00_41C0_E4C3C607B6A0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75E4F040_6142_AA00_41D8_5FB116CE22E9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5DE40688_4C36_9DDD_41C0_DB62F1568753_1_HS_3_0.png",
   "width": 400,
   "height": 600
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_75E40041_6142_AA00_41D7_66A97CB88424",
 "frameDuration": 41
}],
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "overflow": "hidden",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "mobileMipmappingEnabled": false,
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
