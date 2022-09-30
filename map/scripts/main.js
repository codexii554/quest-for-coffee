/* This script will check regulary for flags on solve puzzles. If flags are true the corresponding doors will open. */

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { initMapFeatures } from "./init-map";
import { initLayersFunctions } from "./layerfunctions";
import { initRoomUpdates } from "./roomupdates";

WA.onInit().then(() => {
  console.log('WorkAdventure API Extra ready');

  bootstrapExtra().then(() => {
    console.log('Scripting API Extra ready');
  }).catch(e => console.error(e));

  initMapFeatures();
  initRoomUpdates();
  initLayersFunctions();
});