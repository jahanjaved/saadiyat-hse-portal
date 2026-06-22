ALDAR OSH INSPECTION REPORT GENERATOR - V12 ENGINEER THINKING UPDATE

This update replaces the generic action output with a manual-first engineer thinking engine.

What changed:
1. The manual note is read as the main source of truth.
2. The engine identifies the specific deficiency, hazard and consequence.
3. Observation Description is written like an HSE engineer report.
4. Action to be Taken is now specific to the actual observation only.
5. Generic repeated actions such as "inspect similar locations", "brief workforce" and "submit closeout" are no longer added to every observation.
6. Specific logic added for:
   - Power tools not inspected
   - No lifting permit issued for lifting activities
   - Working on pitched roof without permit
   - Missing toe board at floor edge
   - Unsafe storage of materials
   - Open DB / cable management
   - Scaffold, excavation, access, housekeeping, fire, traffic, plant, PPE, welfare and MSRA issues

How to use:
1. Open start_local_server.bat.
2. Open the local website link shown in the command window.
3. Type your short manual observation.
4. Click Smart expand current description.
5. Review/edit if needed and generate the Word file.
