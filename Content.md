
#### 1) Solar Power modelling pipeline:

Redefining the existing solar pipeline to make it accurate, scalable and efficient.

* **Old pipeline:**
* GHI bias correction, dependent on GHI measurement.
* Power conversion.
* Tuning with time shift.
* **Problems:** Time taking, Inaccurate power modelling at times, complicated, manual, process involves high level of subjective evaluation and NO UI.


* **New pipeline:**
* Direct NWP to power mapping, no dependency of GHI measurement data.
* Easy tuning with UI.
* Simple code base.


* **Impact:**
* Accurate power modelling.
* Scalable to even 100 sites with minimal supervision.
* Primarily Objective process.



#### 2) Solar Fog Model Development

An innovative, data-centric project.

* **Problem:** Predicting fog events is nearly impossible using either NWP or persistence forecasts.
* **Curious Experiment:** We hypothesized that NWP models or measurement data might contain predictive skill—not directly through cloud cover or GHI, but distributed across multiple divergent variables.
* *Approach:* Because manual feature engineering was impossible given the variables and horizon, we initially considered Deep Learning (DL), but the dataset was too small.
* *Execution:* We used UMAP for dimensionality reduction, which successfully yielded a clear signal separating "fog" from "no fog." A simple Logistic Regression (LR) model was then applied to the dataset.


* **Results:** Achieved an average precision of ~0.75 and a recall of ~0.60.

#### 3) Wind Power Forecasting Dashboards

* **The Interesting Insight:** During early discussions regarding wind performance, we observed that the generally "best" model does not always provide the most accurate forecast at any given time; other models sometimes outperform it by a huge margin.
* **Problem:** High penalties were occurring regularly, highlighting the need for an objective framework to decide which forecast model to use.
* **The Tool:**
* **The Dashboard:** Provides an objective and subjective assessment facility. It evaluates real-time penalties for a selected timeframe and compares the distribution of forecast vs. actual generation. This equips the forecaster with live evaluation capabilities.


* **Impact:**
* Significant reduction in penalties.
* Established a defined, objective framework for forecast selection, leading to effective decision-making.
* Provided a facility to verify decisions and output revised, more accurate forecasts.



#### 4) Jua Model Development

* **Problem:** The need to add more NWP sources to our existing system. Jua is likely the first and most popular AI-native commercial weather forecast model, utilizing a proprietary algorithm (BPT: Earth Physics Transformer).
* It provides early model revisions.
* It offers high spatial resolution.


* **Project:**
* Integrated the Jua NWP pipeline from scratch.
* Built a wind power modeling pipeline over it.
* Integrated the model into the forecasting dashboard.


* **Impact:**
* Significant performance improvement over existing physics-based models like ECMWF, NCEP, etc.
* Early dispatch of model revisions ensures the latest forecasts are always available.



#### 5) Jua Turbine Model Development

* **Interesting Insight:** During a site visit to Jaisalmer, it was observed that turbines are located quite far from each other, with each turbine or cluster potentially experiencing different local climatologies.
* **Problem:** The current modeling pipeline extracts NWP forecasts based on a single point location (center) for the entire plant. Intuitively, this seems incorrect for large wind plants, though the NWP resolution of 25km² previously justified the decision.
* **Solution:**
* Jua offers high spatial resolution, presenting an opportunity to experiment.
* Built around 97 individual turbine models using a simple UI-based tool that effectively handles the task alongside data cleaning.


* **Impact:**
* Significant performance improvement during periods of varying local conditions.
* Developed a wind power modeling tool with effective data cleaning and an intuitive UI.



#### 6) Jua Dynamic Model Development

* **Interesting Observations:** During knowledge transfer sessions regarding wind power modeling with the company Overspeed, an interesting observation was made: the power curve (NWP to Power) pattern changes over time.
* This indicates that a static power curve could fail during these shifts, leading to high penalties—a phenomenon observed in reality.


* **Project:**
* Developed a dynamic wind power model that automatically updates every day using the previous 32 days of back-tested data.


* **Impact:**
* During periods of varying behavior (due to wind plant conditions or NWP model intervals), the dynamic model demonstrated clearly superior performance over stable models.



#### 7) Solar Intraday Forecasting Dashboard & Pipeline Development

* **Problem:** During the monsoon season, there is a strong need for hindsight analysis and quick, objective decision-making support.
* Although advanced model forecasts (like Solcast) were available, there was no centralized platform for easy fetching, viewing, and analysis.
* Integrating temporary forecast service providers (like Solargis, Calibsun, etc.) was difficult.


* **Project:**
* Developed a simple yet effective dashboard that provides the following features:
* Real-time revised forecasts from all available models.
* Real-time performance overview.
* Simple and highly effective hindcast analysis.
* Forecast download capabilities.


* *Note: All necessary data pipelines for the dashboard were also built from scratch.*


* **Impact:**
* Highly effective decision-making during the monsoon season for providing forecast revisions.
* Created an objective framework for decision-making.



#### 8) Solar Day-Ahead Forecasting Dashboard

* **Need:** Since 80% of our portfolio is in STOA (Short Term Open Access), with the majority being solar, it is absolutely necessary to monitor the performance of all external weather forecast models. This ensures that if a better-performing model is observed, it can be integrated immediately.
* **Project:**
* Developed a Streamlit dashboard that tracks the forecast performance of all available open-source weather models (GHI) by comparing them against satellite-derived GHI.
* The dashboard recommends the best forecast model based on current performance.
* Power forecasts are generated using this recommended model (as per the plant's custom configuration) and made available for immediate download.


* **Impact:**
* An effective yet simple tool to monitor external forecasting models.
* Action-centric features facilitate immediate decision-making.



---

### Ongoing Projects

#### 9) Solar Intraday Forecasting Algorithm

* A measurement-based forecast revision algorithm has already been developed (inspired by, and improving upon, the overspeed algorithm).
* A satellite imagery-based correction algorithm is currently planned for development.

#### 10) Wind Intraday Forecasting Algorithm

* Data cleaning and time-series construction have been completed.
* Ideation and core development are currently in progress.

#### 11) Agency Forecasting performance comparison dashboard with AI intelligence.
* Integration in Adani network in process
#### 12) Long term budget forecast vs actuals  comparison dashboard with AI intelligence.

* In planning


---

### 11) Personal Development Requirements

*(To lead and grow beyond a typical career trajectory)*

**1. Core Human Skills:**

* **Training Needs:** People communication, engagement, management, trust-building, and project management.
* **Practice Grounds:** Active involvement in digital projects and taking on business-facing roles to refine people skills.

**2. Technical Skills:**

* **Training Needs:** * Traditional AI: Deep Learning.
* Generative AI: Building GenAI applications (RAG, code execution, tool connection) and working with Agentic AI development frameworks.


* **Practice Grounds:** Opportunities to develop MVPs for technical AI projects and engaging technically with core vendor teams.

