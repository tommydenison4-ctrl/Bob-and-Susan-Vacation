# Google Maps and interactive route audit — October 8, 2026

All 15 trip dates were reviewed. Seven dates have notebook walking/transfer maps: November 13, 14, 15, 16, 18, 19 and 25. These contain 13 map sections, 86 daily stop references and 74 section legs (excluding the Barcelona cruise transfer). The other five Oceania excursion overview days retain their attraction checklists but no longer offer tour-wide walking navigation. November 19 retains its independent post-tour Trapani walk. November 12, 22 and 26 have no walking route.

## Changes

- Drawings, section checklists, next-stop links, planned legs and multi-part previews now use the same ordered route objects.
- Checklist progress is shared between each notebook section and the combined checklist; old progress is migrated.
- Preview links have no more than three intermediate points. Adjacent previews share their boundary stop, retaining every stop and return.
- Every planned leg has explicit origin/destination; live next-stop navigation deliberately omits origin. The previous 100-km geolocation heuristic is removed.
- Malta pickup, Mdina and Valletta walks are separate. No Google walking link crosses the van transfer.
- Barcelona cruise-bus transfer is separated from city walking. Civitavecchia port transfer remains taxi-only.
- Google listings were inspected for 66 distinct named locations, plus Echo Point and Mdina Old City Fortress. Full listing addresses were retained where available. Ambiguous Piazza della Vita, Piazza Tasso, Fort St Elmo, Torre di Ligny, Roman Dock and Barcelona Roman city walls use observed Google place identifiers.
- Resolved 67 navigable destination coordinates from 20 actual Google walking routes, and corrected the corresponding diagram coordinates, including Hotel De La Ville, Civitavecchia railway station, Echo Point, Piazza della Vita, Giardini di Cataldo, Piazza Tasso, Mdina Old City Fortress, Fort St Elmo, Torre di Ligny and Barcelona Roman city walls.
- Port references are explicitly approximate; they are not presented as the ship’s real berth or live position. Back-to-ship no longer offers guessed walking directions to an approximate ship coordinate.
- Notebook photographs and stop ordering are unchanged. The diagrams remain schematic and do not reproduce Google’s street geometry.

## Remaining unconfirmed locations

- 2026-11-13 — Promenade: Bob’s exact promenade starting point
- 2026-11-15 — Civitavecchia Cruise Port: the ship’s assigned terminal / berth and taxi drop-off
- 2026-11-18 — Valletta Cruise Port: the ship’s assigned berth and permitted pedestrian exit
- 2026-11-19 — Trapani Port: the ship’s assigned berth and permitted pedestrian exit
- 2026-11-25 — Barcelona cruise terminal: the ship’s assigned terminal
- 2026-11-25 — T3 cruise bus / World Trade Center: the assigned cruise-bus boarding point

Directions touching these unconfirmed points are withheld. Known legs remain available. Tour pickup building/address notes are recorded, but the exact guide meeting sign or entrance still comes from the operator.

## Limits

This verifies ordered destinations and link parameters, not that Google chooses the identical streets printed in an old notebook map. Google calculates pedestrian paths independently and can change them. Street-name waypoints refer to streets rather than a proven exact intersection; confirm signage and pedestrian access locally. No claim of current port access or future berth assignment is made.

## Validation

The route validation script checks all 13 sections, preservation of every stop across mobile-compatible previews, explicit planned origins/destinations, separate live navigation, retained loop finishes, transport boundaries, ambiguous-location suppression and URL length. Browser verification passed for every rendered section, the main Map page, all five excursion-only days, live next-stop targets and shared checklist progress (including undo and reload). Twenty actual Google walking routes were opened and their ordered destinations inspected, covering all 67 navigable destination identities.

Sources: [Google Maps URL documentation](https://developers.google.com/maps/documentation/urls/get-started), [Hotel De La Ville](https://www.hoteldelavillecivitavecchia.it/index_en.php), [Limonoro](https://www.limonorosorrento.com/contact-us/), [Hotel Barcelona Catedral](https://www.barcelonacatedral.com/es/servicios-actividades/restauracion/), and direct Google Maps listing checks.
