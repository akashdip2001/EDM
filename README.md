# EDM

Developing a functional **EDM (Electric Discharge Machine)** for cutting thin metal sheets:  

---

### **Step 1: Working Principle of EDM**
- EDM works by generating **electrical sparks** to erode metal surfaces.
- It requires a **power supply**, an **electrode**, a **workpiece**, and a **dielectric fluid**.
- The **electrode (cathode)** and **workpiece (anode)** are submerged in **dielectric fluid**, and a **high-frequency electrical discharge** removes metal from the workpiece.

---

### **Step 2: Required Components & Specifications**
| **Component**        | **Specification** |
|----------------------|------------------|
| **Step-down Transformer** | Converts **230V AC to 50-100V AC** |
| **Bridge Rectifier** | **50A capacity** for AC to DC conversion |
| **Capacitors** | **4.8µF, 450V** |
| **Electrode Material** | **Copper (35-70mm)** |
| **Dielectric Fluid** | **Distilled Water or Kerosene** |
| **Workpiece** | **Thin Steel or Copper Sheet** |
| **Control Circuit** | **Pulse Generator for Spark Regulation** |
| **Frame & Tub** | **60x30 cm size** |
| **Wires & Connectors** | High-voltage insulated wires |
| **Cooling & Flushing System** | Pump to circulate dielectric fluid |

---

### **Step 3: Build the Power Supply**
1. **Use a Step-Down Transformer**  
   - Converts **230V AC to 12-24V AC**.
   - Must have **multiple voltage outputs** for flexibility.
   
2. **Bridge Rectifier**  
   - Converts **AC to DC** for controlled spark generation.
   - Choose a **50A diode bridge** for sufficient power handling.
   
3. **Capacitor (for Smoothing DC Output)**  
   - Use **450V, 4.8µF capacitor** to stabilize voltage and reduce ripples.

---

### **Step 4: Design the Electrode System**
- **Electrode:** Use **copper** due to its excellent conductivity.  
- **Workpiece:** Choose **thin steel or copper sheet** for easier cutting.  
- **Spark Gap:** Maintain **5-10mm** gap between electrode and workpiece.  

---

### **Step 5: Setup Dielectric Fluid System**
- Use **distilled water** or **kerosene** to act as an insulator and coolant.  
- Ensure **continuous circulation** with a **pump** to flush debris and cool the cutting area.  

---

### **Step 6: Assemble the EDM Machine**
1. **Mount the Workpiece & Electrode** inside the **dielectric tub**.  
2. **Connect the Power Supply** (transformer, rectifier, capacitor).  
3. **Ensure Proper Spark Gap** for controlled erosion.  
4. **Install the Pulse Generator Circuit** to regulate spark intensity and frequency.  

---

### **Step 7: Perform Initial Testing & Calibration**
- Test with **low voltage (50V)** and gradually **increase up to 100V**.  
- Observe **spark discharge and material removal rate**.  
- Adjust **gap, pulse frequency, and voltage** for optimal performance.  

---

### **Step 8: Demonstration & Final Adjustments**
- Cut a **thin steel or copper sheet** to show EDM functionality.  
- If sparks are inconsistent, **adjust capacitor values and pulse timing**.  
- Ensure **safety measures** (proper insulation, emergency cutoff).  

---

### **Final Notes**
- The project document provides **detailed calculations** (e.g., spark voltage = 48.42V, power consumed = 2370W).  
- The **machine does not need to be industry-grade**, but it should **demonstrate material removal effectively**.  

---

![IMG_20250217_190007](https://github.com/user-attachments/assets/ddcb6b9c-c33c-4f64-a3bf-0bbf75d68e6c)


## **EDM Circuit Diagram Explanation with Cost**  

---
<img align="right" alt="GitHub Foundations exam logo" width="300" src="https://github.com/user-attachments/assets/b45aef95-84f2-40f7-8d21-2010b3014c4d">

### **Step 1: Step-Down Transformer**  
**Component:** **230V to 24V Step-Down Transformer**  
- **Specification:** 230V AC input → 24V-0-24V AC output, **1.5A current rating**  
- **Function:** Reduces **high-voltage AC (230V) to a lower AC voltage (24V)**, preventing excessive current flow.  
- **Reason for Use:** Protects circuit components from high voltage and provides suitable power for further rectification.  
- **Cost (India):** ₹250 - ₹400  

**Connections:**  
- **Primary winding** connected to **230V AC mains**.  
- **Secondary winding** gives **24V-0-24V AC output**, which will be converted to DC.  

---
<img align="right" alt="GitHub Foundations exam logo" width="300" src="https://github.com/user-attachments/assets/1495df6d-fd6a-4783-b58c-3597f80c015e">

### **Step 2: Bridge Rectifier (AC to DC Conversion)**  
**Component:** **50A Bridge Rectifier Module**  
- **Specification:** **Input: 24V AC**, **Output: 24V DC**, **Diode rating: 50A, 1000V PIV**  
- **Function:** Converts the **AC output of the transformer into pulsating DC**.  
- **Reason for Use:** Needed to supply **stable DC power** for the EDM spark generation circuit.  
- **Cost (India):** ₹150 - ₹300  

**Connections:**  
- **AC input terminals** connected to **24V AC output of the transformer**.  
- **DC output terminals** provide **smooth DC voltage**.  

---

### **Step 3: Capacitor for Smoothing DC Output**  
**Component:** **Electrolytic Capacitor 450V, 4.8µF**  
- **Specification:** **Voltage rating: 450V**, **Capacitance: 4.8µF**  
- **Function:** **Filters out AC ripples** and provides smooth **DC voltage**.  
- **Reason for Use:** Ensures **steady and continuous** spark generation by maintaining constant voltage.  
- **Cost (India):** ₹200 - ₹350  

**Connections:**  
- **Positive terminal** of the capacitor to the **positive DC output** of the rectifier.  
- **Negative terminal** to the **ground (0V)**.  

---
<img align="right" alt="GitHub Foundations exam logo" width="300" src="https://github.com/user-attachments/assets/af5b9919-bcf2-4228-be6f-a380bc1c647e">

### **Step 4: Pulse Generator for Controlled Spark Generation**  
**Component:** **555 Timer IC or PWM Controller**  
- **Specification:** Frequency: **1 kHz – 50 kHz adjustable**, Duty cycle: **10% - 90%**  
- **Function:** Generates **high-frequency pulses** to control the **discharge of sparks** in EDM.  
- **Reason for Use:** Prevents **continuous current flow**, allowing controlled spark discharges for efficient machining.  
- **Cost (India):** ₹100 - ₹250  

**Connections:**  
- **VCC (Power Supply):** Connected to **24V DC** output from the rectifier.  
- **Output Pin:** Controls **MOSFET** for spark discharge.  
- **GND (Ground):** Connected to **circuit ground**.  

<p align="center">
  <img src="https://github.com/user-attachments/assets/2237f902-f3ab-4201-8e57-e4670ee7a983" alt="Image 1" width="45%" style="margin-right: 10px;"/>
  <img src="https://github.com/user-attachments/assets/bdc535e9-8f96-4332-94c1-d742354fe2b9" alt="Image 2" width="45%" style="margin-right: 10px;"/>
</p>

---
<img align="right" alt="GitHub Foundations exam logo" width="300" src="https://github.com/user-attachments/assets/19c66fd7-d57d-4eec-997a-40d5b123238a">

### **Step 5: Power MOSFET for Switching the Spark Circuit**  
**Component:** **IRF540N MOSFET (N-Channel, 100V, 33A)**  
- **Specification:** Voltage: **100V**, Current: **33A**, Rds(on): **44mΩ**  
- **Function:** Acts as a **high-speed electronic switch**, allowing controlled **discharge through the electrode**.  
- **Reason for Use:** Can handle **high currents** and operates efficiently in **switching applications**.  
- **Cost (India):** ₹80 - ₹200  

**Connections:**  
- **Drain:** Connected to **negative terminal of the electrode**.  
- **Source:** Connected to **ground**.  
- **Gate:** Connected to **PWM output from the 555 timer**.  

---

### **Step 6: Electrode (Tool) and Workpiece**  
**Components:**  
- **Electrode:** Copper rod (Ø 3mm – 10mm)  
- **Workpiece:** Thin steel sheet (1mm – 3mm)  

- **Function:** The electrode releases **sparks** that erode the workpiece surface.  
- **Reason for Use:** **Copper has excellent electrical conductivity** and withstands EDM erosion.  
- **Cost (India):**  
  - **Copper Electrode:** ₹300 - ₹600  
  - **Steel Workpiece:** ₹200 - ₹500  

**Connections:**  
- **Electrode connected to the MOSFET drain**.  
- **Workpiece connected to positive terminal of power supply**.  

---

### **Step 7: Dielectric Fluid & Circulation System**  
**Component:** **Distilled Water or Kerosene + Pump**  
- **Function:** Cools the spark zone, removes debris, and maintains insulation.  
- **Cost (India):** ₹250 - ₹600  

**Connections:**  
- **Pump circulates dielectric fluid** around the electrode and workpiece.  

---

### **Step 8: Safety Components**  
- **Fuse (10A, 250V)** – ₹30 - ₹50  
- **Emergency Stop Switch** – ₹100 - ₹250  

---

### **Total Estimated Cost in India**  
| **Component** | **Estimated Cost (₹)** |  
|--------------|-----------------|  
| Step-Down Transformer | ₹250 - ₹400 |  
| Bridge Rectifier (50A) | ₹150 - ₹300 |  
| Capacitor (450V, 4.8µF) | ₹200 - ₹350 |  
| Pulse Generator (555 Timer) | ₹100 - ₹250 |  
| Power MOSFET (IRF540N) | ₹80 - ₹200 |  
| Copper Electrode | ₹300 - ₹600 |  
| Workpiece (Steel Sheet) | ₹200 - ₹500 |  
| Dielectric Fluid & Pump | ₹250 - ₹600 |  
| Safety Components | ₹130 - ₹300 |  
| **Total Estimated Cost** | **₹1,660 - ₹3,500** |  

---

### **Final Circuit Connections**
1. **230V AC** → **Step-Down Transformer (24V AC output)**
2. **Transformer Output** → **Bridge Rectifier (Converts to 24V DC)**
3. **Rectifier Output** → **Capacitor (Removes AC Ripples)**
4. **Smooth DC Power** → **Pulse Generator (Controls Spark Pulses)**
5. **Pulse Generator Output** → **MOSFET (Switching)**
6. **MOSFET Drain** → **Electrode (Cathode)**
7. **Workpiece (Anode)** → **Connected to 24V DC positive**
8. **Electrode & Workpiece submerged in Dielectric Fluid**
9. **Pump continuously circulates the dielectric fluid**

---

https://github.com/user-attachments/assets/d262c55d-2951-4910-b1d7-bc20f60b06b1

https://github.com/user-attachments/assets/815e8d4a-54d7-4cc7-84b8-4445e9e795e2
