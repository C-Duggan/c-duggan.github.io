---
layout: page
title: "Custom 2-Port Turbo Kit Fabrication - Toyota Supra (A90 / B58 Engine)"
project_slug: "supra-b58-turbo-kit"
---

## Overview

I’ve always loved cars, and when I was finally able to purchase my dream car — the fifth-generation **Toyota Supra (A90)** powered by the BMW B58 3.0L turbocharged inline-six — I knew immediately that I wanted to take it apart. Rather than simply driving the car in its stock configuration or purchasing an expensive off-the-shelf aftermarket turbo kit (which typically retail between $7,000 and $10,000+), I chose to treat the platform as an intensive hands-on mechanical engineering challenge.

My objective was to design, fabricate, route, and calibrate a completely custom **top-mount turbocharger system** from scratch. Working with minimal equipment — including an entry-level flux-core arc welder, scrap steel, and low-cost raw materials — I relied on CAD modeling, technical literature research, and iterative trial-and-error prototyping. This report documents the complete engineering journey: architectural decisions, thermal and metallurgical obstacles, sensor reverse-engineering, failure troubleshooting, and fabrication skills honed throughout the build.

---

## Engineering Objectives & System Specifications

* **Two-Port Head Configuration:** Design specifically around the early B58 two-port cylinder head casting (integrated exhaust ports grouping cylinders 1–3 and 4–6).
* **Top-Mount Architecture:** Relocate the turbocharger from the low factory position up into a prominent top-mount orientation for improved thermal packaging, ease of maintenance, and optimal airflow pathing.
* **Performance Headroom:** Support **~600 whp** with a Garrett 3582 turbocharger while preserving high-efficiency spool characteristics.
* **Drivetrain Preservation:** Maintain compatibility with the factory ZF 8-speed automatic transmission (8HP51) without requiring immediate internal upgrades.
* **Hands-On Fabrication:** Develop core mechanical competencies in CAD layout, stainless steel pipe fabrication, thermal distortion management, boost pneumatics, wiring harness adaptation, and ECU sensor management.

| Specification | Details |
| :--- | :--- |
| **Vehicle Platform** | 2020 Toyota GR Supra (A90 Chassis) |
| **Engine** | BMW B58B30 3.0L Turbocharged Inline-6 (2-Port Cylinder Head) |
| **Turbocharger** | Garrett 3582 Turbocharger |
| **Manifold Configuration** | Custom Log-Style Top-Mount Manifold (304 Stainless Steel) |
| **Exhaust Flanges** | Precision CNC-Machined B58 2-Port Head Flanges |
| **Inlet Interface** | Hand-Fabricated T4-to-V-Band Conical Transition Adapter |
| **Downpipe** | 3.0-inch Stainless Steel Downpipe matching factory exhaust diameter |
| **Wastegate** | External Wastegate with Custom 90° Merge Pipe & GFB Boost Controller |
| **Cooling & Lubrication** | Dedicated Oil Feed/Drain; Engineered OEM Turbo Coolant Delete |
| **Charge Piping** | Custom Metal Piping with Bead-Rolled Retention & Multi-Ply Silicone Couplers |
| **Target Power** | ~600 whp on stock drivetrain |

---

## Phase 1: Disassembly & Technical Research

Before cutting metal, I had to thoroughly reverse-engineer the B58 engine bay. Modern European-engineered powertrains feature extremely dense packaging with tightly integrated fluid circuits, complex crankcase ventilation (PCV), and sensitive Bosch electronic monitoring. Relocating the turbocharger required clearing and rerouting major segments of the exhaust, intake, cooling, and electrical systems.

![Reference Kit for Research]({{ site.github.url }}/assets/projects/supra-b58-turbo/reference-turbo-kit.jpg)
*Aftermarket B58 turbo kit architecture analyzed during the initial bill-of-materials and component sequencing research.*

### Technical Documentation & Schematics
Because Toyota does not publish standalone factory service manuals for the GR Supra in the same manner as older platforms, I cross-referenced BMW technical training documents, Supra enthusiast teardowns, and reverse-engineered wiring diagrams. My research focused on:
* **Fluid Flow & Routing:** Tracing OEM coolant circuits, turbocharger oil supply/drain channels, and multi-stage PCV breather paths.
* **Harness & Pinout Mapping:** Documenting every sensor plug, lead length, and voltage characteristic in the turbocharger vicinity.
* **ECU Sensor Thresholds:** Mapping operating parameters for the electronic wastegate actuator, charge-air pressure/temperature sensors, and upstream/downstream wideband oxygen sensors.

![Engine Bay Disassembly]({{ site.github.url }}/assets/projects/supra-b58-turbo/engine-bay-disassembly.jpg)
*A90 Supra engine bay stripped down following the removal of the factory twin-scroll turbocharger, OEM downpipe, heat shields, and coolant lines.*

### Mechanical Teardown & Component Tagging
I methodically disassembled the right side of the engine compartment:
* Factory twin-scroll turbocharger and cast manifold
* Charge pipe, airbox, and pre-compressor inlet duct
* Factory catalytic downpipe and multi-layer stamped heat shields
* Rigid turbo coolant hard lines and mounting brackets

To ensure error-free reassembly, every line and fitting was labeled with its fluid medium, flow direction, and torque specification. On high-compression direct-injection engines, an improper line connection or missing pressure port can quickly cause catastrophic engine failure.

---

## Phase 2: Wiring Harness & Sensor Identification

Electrical integration proved to be one of the most critical aspects of the project. The B58 relies heavily on real-time sensor feedback to govern torque requests, ignition timing, and boost control. Altering sensor locations or disconnecting components without matching ECU logic will instantly trigger drivetrain malfunction errors and limp mode.

![Highlighted Wiring and Sensor Identification]({{ site.github.url }}/assets/projects/supra-b58-turbo/sensor-wiring-identification.jpg)
*Engine bay harness highlighting critical sensor plugs, including wastegate actuators, temperature probes, and O2 connectors requiring rerouting.*

Key sensors identified and analyzed included:
* **Electronic Wastegate Actuator:** Understanding the feedback circuit to transition safely to an external pneumatic wastegate system.
* **Manifold Absolute Pressure (MAP) & Boost Sensors:** Maintaining pressure reading fidelity across the charge air path.
* **Temperature Sensors:** Monitoring charge air temperature, engine coolant, and exhaust gas temperatures (EGT).
* **Wideband Oxygen (O2) Sensors:** Preserving correct upstream air-fuel ratio monitoring without exhaust gas turbulence or excessive thermal shock.
* **PCV Electronic Heating Elements:** Retaining crankcase pressure regulation to prevent seal blowouts under positive pressure.

Because the new top-mount turbo placement shifted the physical geometry of the exhaust, multiple harness leads had to be lengthened, rerouted away from radiant heat zones, and shielded with high-temperature thermal sleeving.

---

## Phase 3: Hot-Side Design & Fabrication

The hot side of the turbo kit is subjected to severe thermal cycles, exhaust gas pulsations, and mechanical loads. It encompasses:
1. Cylinder head exhaust flanges
2. Two-port log manifold
3. Hand-fabricated T4-to-V-band adapter cone
4. External wastegate assembly and 90° merge pipe
5. 3.0-inch stainless steel downpipe

![Primary 2-Port B58 Exhaust Flanges]({{ site.github.url }}/assets/projects/supra-b58-turbo/b58-exhaust-flanges.jpg)
*Precision CNC-machined 2-port B58 exhaust flanges sourced to provide a robust, leak-free seal against the cylinder head.*

### Manifold Architecture
Traditional inline-six exhaust manifolds utilize six individual runners merged into a collector. However, the early B58 engine utilizes an integrated two-port cylinder head where the internal exhaust ports of cylinders 1–3 and 4–6 merge inside the head casting itself. 

To maximize structural reliability and packaging efficiency, I opted for a **log-style manifold** that mirrors the dual-port cylinder head layout while sweeping upward to elevate the turbocharger into a top-mount configuration. I modeled the layout in SolidWorks to verify:
* Minimum pipe inner diameter to avoid exhaust choking
* Clearance relative to the strut tower, hood line, and valve cover

I sourced 304 stainless steel straight tubing along with 45° and 90° mandrel bends from a local supplier. To guarantee an airtight seal at the cylinder head, I sourced pre-machined steel B58 flanges from a specialized machine shop, matching their internal diameter directly to my stainless tubing.

![Machined Flanges and V-Band Hardware]({{ site.github.url }}/assets/projects/supra-b58-turbo/machined-turbo-vband-flanges.jpg)
*T4 turbine inlet flange (left) and stainless steel V-band clamp/flange assembly (right) used for modular exhaust and wastegate connections.*

### Welding Process & Distortion Management
With limited access to industrial TIG equipment, I welded the entire stainless assembly using a flux-core wire welder acquired from Craigslist. I spent a week practicing on scrap stainless and mild steel to dial in voltage settings, wire feed speeds, and torch angles.

Fabricating stainless steel exhaust components with flux-core welding presented significant metallurgical challenges:
* **Thermal Warping & Contraction:** Stainless steel has a high coefficient of thermal expansion combined with lower thermal conductivity than mild steel. Localized heat input caused severe warping and angular deflection across the pipe runs.
* **Dimensional Creep:** Welded joints shrank upon cooling, pulling the exhaust flanges out of true coplanar alignment.
* **Corrective Slicing & Lengthening:** To bring the flanges back into square and restore the modeled clearances, I had to cut relief slots, add pie-cut sections, and re-weld strategic seams in balanced alternating passes.

![Hand-Fabricated Wastegate Merge Pipe]({{ site.github.url }}/assets/projects/supra-b58-turbo/wastegate-merge-pipe.jpg)
*External wastegate tucked beneath the manifold, featuring a hand-fabricated 90° entry merge pipe.*

### Custom Transition Adapters & Wastegate Integration
The Garrett turbocharger featured a rectangular **T4 twin-scroll inlet flange**, while my manifold and downpipe connections utilized circular **V-band clamps**. Because pre-made transition adapters were either unavailable or cost-prohibitive, I fabricated a custom steel transition cone by hand:
1. Scribed the geometric loft from a rectangular T4 port to a circular V-band diameter on sheet steel.
2. Cut the pattern using an angle grinder and rotary tools.
3. Formed the cone over an anvil fixture using repetitive hammer-forming techniques.
4. Welded the seam and ground the interior smooth to promote laminar exhaust gas entry into the turbine scroll.

For the external wastegate, packaging limitations beneath the manifold dictated a 90° entry angle. While an acute merge angle is ideal for gas flow dynamics, the compact engine bay envelope necessitated this practical engineering compromise.

![Completed Wrapped Manifold Assembly]({{ site.github.url }}/assets/projects/supra-b58-turbo/wrapped-manifold-assembly.jpg)
*Completed custom manifold assembly fitted with external wastegate, T4 turbo flange, and high-temperature thermal wrap.*

### Final Fitment & Clearance Verification
When test-fitting the fully assembled and heat-wrapped manifold onto the B58 engine, the clearance between the turbine housing, the shock tower, and the hood frame was down to millimeters. Overcoming the severe weld shrinkage and maintaining exact flange alignment made this one of the most rewarding milestones of the entire project.

![Initial Turbo Mock-Up]({{ site.github.url }}/assets/projects/supra-b58-turbo/turbo-placement-mockup.jpg)
*Test mock-up confirming the top-mount turbocharger placement and tight spatial clearances in the A90 chassis.*

---

## Phase 4: Cold-Side Fabrication & Boost Reliability

With the hot side locked into position, I focused on fabricating the charge-air induction path, solving fluid clearance conflicts, and ensuring boost pressure integrity.

![Cold-Side Charge Pipe Routing]({{ site.github.url }}/assets/projects/supra-b58-turbo/cold-side-charge-pipe.jpg)
*Top view of the engine bay showing the custom cold-side charge piping linking the Garrett compressor outlet to the intake manifold.*

### Charge Pipe Routing
The B58 utilizes an integrated water-to-air charge cooler housed within the intake manifold. Elevating the turbocharger altered the compressor outlet geometry. Fortunately, the lower portion of the factory charge pipe aligned reasonably well with the new location. I cut the factory charge pipe and bridged it to a 90° metal elbow extending directly from the Garrett compressor housing using high-grade silicone couplers.

### Coolant Line Conflict & Strategic Deletion
During test fitting, the rigid OEM turbo coolant hard lines directly obstructed the new manifold and compressor orientation. After analyzing the coolant circuit schematics and consulting professional B58 engine builders and tuners, I opted to **delete the water cooling loop** to the turbocharger:
* The auxiliary coolant loop on modern passenger vehicles primarily prevents oil coking after engine shutdown by setting up a thermal siphon effect.
* In high-performance motorsport and aftermarket builds, journal- and ball-bearing turbochargers can operate reliably purely on oil cooling, provided high-quality synthetic oil is used and a disciplined 2-to-3 minute idle cool-down procedure is observed before shutoff.
* The factory coolant ports on the block were cleanly plugged, simplifying the engine bay packaging and eliminating several failure points.

![Reinforced Couplers and Clamps]({{ site.github.url }}/assets/projects/supra-b58-turbo/reinforced-couplers-clamps.jpg)
*Close-up of the bead-rolled metal pipe and multi-ply reinforced silicone couplers installed to withstand high boost pressures.*

### Troubleshooting Coupler Failure Under Boost
During initial road and boost testing, the setup experienced a sudden loss of pressure under load: the smooth metal-to-rubber joint on the charge pipe blew off.

* **Failure Analysis:** The smooth cut surface of the pipe and standard worm-gear clamps lacked sufficient mechanical retention under elevated boost levels.
* **Engineered Fix:** I replaced the upper plastic segment with a rigid mandrel-bent metal pipe, mechanically formed a **raised bead/lip** on the pipe ends to act as a positive mechanical stop, and upgraded to multi-ply reinforced silicone couplers secured by heavy-duty T-bolt clamps.
* **Validation:** Subsequent pressure testing and road runs proved 100% reliable with zero slippage or boost leaks.

---

## Phase 5: Boost Control & Pneumatic Calibration

To manage boost pressure delivered by the Garrett 3582 turbocharger, I implemented an external pneumatic boost control system:
* **Pressure Reference:** Tapped a dedicated vacuum/boost pressure port on top of the intake manifold downstream of the throttle body to provide clean signal fidelity.
* **GFB Boost Controller:** Plumbed heavy-duty silicone lines from the boost reference tap to a **Go Fast Bits (GFB)** manual/electronic controller.
* **Actuator Routing:** Routed control lines to both ports of the external wastegate actuator, allowing precise spring preload adjustment and boost curve shaping.

This setup prevents boost creep, delivers predictable gate opening thresholds, and provides a stable baseline for final dyno tuning.

---

## Key Lessons Learned & Engineering Takeaways

1. **Weld Metallurgy & Thermal Distortion:** The single largest fabrication hurdle was thermal contraction in 304 stainless steel. Learning to anticipate distortion, stagger weld passes, and implement stress-relief cuts was invaluable hands-on manufacturing experience.
2. **CAD vs. Real-World Tolerances:** While SolidWorks provided a solid geometric baseline, physical engine bay variations (engine mount flex, thermal expansion, wiring harness bulk) required constant iterative fine-tuning.
3. **Pneumatics & Boost Retention:** Smooth pipe-to-coupler interfaces are fundamentally insufficient for high-boost applications. Raised bead rolls and T-bolt clamps are non-negotiable for pneumatic reliability.
4. **Modern Engine Systems Integration:** Modern powertrain engineering is inseparable from electronics. Understanding sensor logic, ECU communication, and thermal shielding is just as vital as clean metal fabrication.
5. **Resourcefulness & Execution:** Proving that high-performance engineering builds can be successfully executed without a five-figure budget or industrial CNC machinery by applying fundamental mechanical design principles, patience, and iterative problem solving.

---

## Complete Photo & Build Gallery

Click any image below to view it full screen with its engineering caption.

<div class="jg-gallery">
  <div class="jg-gallery__item" data-lightbox="{{ site.github.url }}/assets/projects/supra-b58-turbo/turbo-placement-mockup.jpg" data-caption="Initial engine bay mock-up establishing spatial clearances and top-mount turbo placement.">
    <img src="{{ site.github.url }}/assets/projects/supra-b58-turbo/turbo-placement-mockup.jpg" alt="Initial Turbo Mock-Up" loading="lazy">
    <div class="jg-gallery__caption">Top-Mount Turbo Placement Mock-Up</div>
  </div>

  <div class="jg-gallery__item" data-lightbox="{{ site.github.url }}/assets/projects/supra-b58-turbo/engine-bay-disassembly.jpg" data-caption="Supra engine bay after full teardown of OEM turbo assembly, downpipe, and coolant lines.">
    <img src="{{ site.github.url }}/assets/projects/supra-b58-turbo/engine-bay-disassembly.jpg" alt="Engine Bay Disassembly" loading="lazy">
    <div class="jg-gallery__caption">Engine Bay Teardown & Space Prep</div>
  </div>

  <div class="jg-gallery__item" data-lightbox="{{ site.github.url }}/assets/projects/supra-b58-turbo/sensor-wiring-identification.jpg" data-caption="Highlighted engine harness sensors, wastegate electronics, and connectors requiring rerouting.">
    <img src="{{ site.github.url }}/assets/projects/supra-b58-turbo/sensor-wiring-identification.jpg" alt="Sensor Wiring Identification" loading="lazy">
    <div class="jg-gallery__caption">Sensor Wiring & Harness Mapping</div>
  </div>

  <div class="jg-gallery__item" data-lightbox="{{ site.github.url }}/assets/projects/supra-b58-turbo/b58-exhaust-flanges.jpg" data-caption="Precision CNC-machined 2-port B58 exhaust flanges used as the structural base for the custom manifold.">
    <img src="{{ site.github.url }}/assets/projects/supra-b58-turbo/b58-exhaust-flanges.jpg" alt="2-Port B58 Exhaust Flanges" loading="lazy">
    <div class="jg-gallery__caption">CNC B58 2-Port Exhaust Flanges</div>
  </div>

  <div class="jg-gallery__item" data-lightbox="{{ site.github.url }}/assets/projects/supra-b58-turbo/machined-turbo-vband-flanges.jpg" data-caption="Machined T4 turbine inlet flange and stainless steel V-band clamp/flange assembly.">
    <img src="{{ site.github.url }}/assets/projects/supra-b58-turbo/machined-turbo-vband-flanges.jpg" alt="T4 Flange and V-Band Assembly" loading="lazy">
    <div class="jg-gallery__caption">T4 Flange & V-Band Hardware</div>
  </div>

  <div class="jg-gallery__item" data-lightbox="{{ site.github.url }}/assets/projects/supra-b58-turbo/wastegate-merge-pipe.jpg" data-caption="External wastegate positioned underneath the manifold with custom 90° merge pipe.">
    <img src="{{ site.github.url }}/assets/projects/supra-b58-turbo/wastegate-merge-pipe.jpg" alt="Wastegate 90-Degree Merge" loading="lazy">
    <div class="jg-gallery__caption">Wastegate Under-Manifold Merge</div>
  </div>

  <div class="jg-gallery__item" data-lightbox="{{ site.github.url }}/assets/projects/supra-b58-turbo/wrapped-manifold-assembly.jpg" data-caption="Completed downpipe and manifold section wrapped in heat protection with wastegate installed.">
    <img src="{{ site.github.url }}/assets/projects/supra-b58-turbo/wrapped-manifold-assembly.jpg" alt="Wrapped Manifold Assembly" loading="lazy">
    <div class="jg-gallery__caption">Completed Heat-Wrapped Manifold</div>
  </div>

  <div class="jg-gallery__item" data-lightbox="{{ site.github.url }}/assets/projects/supra-b58-turbo/cold-side-charge-pipe.jpg" data-caption="Cold-side charge pipe routing using metal piping and reinforced couplers across the engine bay.">
    <img src="{{ site.github.url }}/assets/projects/supra-b58-turbo/cold-side-charge-pipe.jpg" alt="Cold-Side Charge Pipe" loading="lazy">
    <div class="jg-gallery__caption">Cold-Side Charge Pipe Routing</div>
  </div>

  <div class="jg-gallery__item" data-lightbox="{{ site.github.url }}/assets/projects/supra-b58-turbo/reinforced-couplers-clamps.jpg" data-caption="Close-up of bead-retaining metal pipe and reinforced silicone couplers used after initial coupler failure.">
    <img src="{{ site.github.url }}/assets/projects/supra-b58-turbo/reinforced-couplers-clamps.jpg" alt="Reinforced Couplers and Clamps" loading="lazy">
    <div class="jg-gallery__caption">Bead-Rolled Retention & Couplers</div>
  </div>

  <div class="jg-gallery__item" data-lightbox="{{ site.github.url }}/assets/projects/supra-b58-turbo/reference-turbo-kit.jpg" data-caption="Commercial aftermarket turbo kit studied as an architectural reference during planning.">
    <img src="{{ site.github.url }}/assets/projects/supra-b58-turbo/reference-turbo-kit.jpg" alt="Reference Turbo Kit" loading="lazy">
    <div class="jg-gallery__caption">Reference System Architecture</div>
  </div>
</div>
