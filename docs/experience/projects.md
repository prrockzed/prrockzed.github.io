---
sidebar_position: 2
---

# Projects

## Personal Projects

### AgentScope
- Built a local-first observability and debugging platform for AI agents, making every LLM decision, tool call, retry, and failure visible through a real-time trace viewer — designed as Chrome DevTools + Datadog for LangGraph agents
- Engineered a microservices architecture with Next.js frontend, Spring Boot REST backend, and FastAPI/LangGraph Python runtime, connected via WebSockets for live step-by-step trace streaming into PostgreSQL
- Implemented multi-agent orchestration supporting 10 built-in agent types and 20+ LLM models across Ollama, OpenAI, Groq, Anthropic, and Gemini, with per-run model selection, side-by-side run comparison, replay, and cancellation
- Developed an autonomous improvement pipeline including AI-powered accuracy evaluation, regression scoring, failure reason tagging (15+ reason codes), optimization advisor, and agent instruction patching; integrated Prometheus and Grafana for production monitoring with 8 live dashboard panels

### FinancialPortfolioAggregator
- Built a full-stack investment portfolio aggregator that ingests financial data from three independent sources (Orders, MF Central, Account Aggregator) with intelligent deduplication of overlapping records across sources
- Engineered a FastAPI (Python 3.11) backend with layered service architecture for data parsing, aggregation, and analytics computation, exposing Swagger-documented REST endpoints with Pydantic response models
- Developed a React 18 (Vite) frontend with reusable components, Axios-based API layer, React Context for global state management, and a comprehensive investment dashboard with portfolio analytics and visualizations
- Containerized both services with Docker and Docker Compose for single-command reproducible deployment, supporting both local development and production environments

### Triveo
- Architected a multi-tenant SaaS backend in Go (Gin) with 4-layer design, 30+ REST API endpoints, JWT-based RBAC, and PostgreSQL
- Integrated Google Gemini 2.5 Flash as an AI menu chatbot with dynamic context injection and session state, using Claude Code
- Engineered a 3-tier subscription billing system in Go with Dodo Payments checkout sessions, webhook handling, and plan-based resource limits
- Dockerized Go backend with multi-stage Alpine build, deployed to Railway via GitHub CI/CD with Cloudflare R2 for file storage
- Built a Next.js 14 (TypeScript) menu UI with 3D food visualization, AR mode (iOS/Android), QR deep-linking, deployed on Vercel

### Chessed Platform
- Successfully developed a four-player chess platform using React and TypeScript, allowing simultaneous gameplay on a single board
- Utilized TypeScript interfaces to identify potential errors and React hooks for dynamic component state management and updates
- Implemented game features including move suggestions, turn validation, piece movement, castling, pawn promotion, and check detection
- Enabled endgame scenarios with capturing, checkmate detection, ensuring valid moves, game termination when a player is checkmated

### GarudaNvim
- Developed GarudaNvim, a customizable Neovim distribution written in Lua, improving developer productivity through tailored configurations
- Designed features like one-command installation using Bash scripts, plugin version locking, and dynamic UI enhancements with theme support
- Enhanced user experience with 100+ custom keymaps, 35+ plugin integrations, and robust error handling for streamlined development workflows
- Shipped a documentation website using MkDocs, including installation guides, feature overviews, release history, and onboarding resources

### Deribit Trading System
- Built a high-performance trading system in C++ with multi-threaded WebSocket server for real-time market data streaming and order execution
- Integrated Deribit Testnet API with OAuth2 authentication, enabling seamless placement, cancellation, and modification of spot, futures, and options orders
- Implemented performance monitoring tools to capture WebSocket propagation, order processing, and API latency metrics for system optimization
- Designed a command-line interface supporting live order book visualization, position tracking, and instrument management for efficient trading operations

### LinkedinOS
- Engineered a full-stack Python automation platform using Selenium and BeautifulSoup4 to systematically scrape founder data from Y Combinator and send personalized LinkedIn connection requests.
- Implemented secure OAuth 2.0 integration with the Google Sheets API to automatically structure and store scraped company and founder data for centralized intelligence.
- Developed advanced state management to intelligently handle connection request responses (Pending, Already Connected, Email Required) and log outcomes to a JSON file for analytics.
- Designed a robust, menu-driven CLI architecture with modular components for batch selection, scraping, and connection management, ensuring scalability and ease of use.

### SummarizeWebPageAI
- Engineered a scalable microservices architecture with React, Spring Boot, Scala, and PostgreSQL, ensuring efficient data pipelines and persistent storage for summaries
- Integrated an AI-driven summarization engine using Python FastAPI and Google Gemini LLM, enabling automated extraction of key insights from unstructured website content
- Deployed containerized services with Docker and Helm, implementing orchestration strategies aligned with enterprise-grade cloud-native infrastructure standards
- Delivered user-facing features for real-time summarization, historical search, and data retrieval, supporting intelligent information management and decision-making workflows

### Docker Log Streamer
- Designed and implemented a full-stack web application for real-time streaming, searching, and filtering of Docker container logs using WebSocket and REST APIs
- Engineered a scalable backend with Node.js, Express.js, and MongoDB Atlas, ensuring persistent log storage and efficient query performance
- Developed a React.js frontend with dedicated components for live logs, search functionality, and timestamp-based filtering, enhancing user experience
- Deployed the system on Render and Vercel, integrating containerized log generation with remote streaming for robust and seamless operation

### Haunted House
- Built an immersive 3D haunted environment using Three.js, enabling interactive navigation with realistic lighting, fog effects, and atmospheric rendering
- Designed detailed models including textured walls, doors, graves, and animated ghost characters, enhancing the overall spooky environment and user engagement
- Implemented dynamic lighting effects with point lights, spotlights, and animated ghost lights to create eerie and responsive visual experiences
- Optimized performance through texture mapping, geometry reuse, and efficient rendering techniques, ensuring smooth frame rates across devices

### sportscli
- Built and published `sportscli` as a pip-installable Python CLI tool that streams live sports data — scores, standings, fixtures, and player stats — directly into the terminal without leaving the development workflow
- Integrated three free public APIs (Lichess for Chess, cricketdata.org for Cricket, football-data.org for Football) covering 8 leagues including the UCL and FIFA World Cup, with automatic first-run API key prompting and secure config storage in `~/.config/sportscli/config.json`
- Architected a modular plugin pattern where each sport is a fully self-contained module (client, display, app), enabling new sports to be added with no changes to any existing code
- Implemented an interactive configuration wizard (`sports config setup`) with partial-key masking for display and per-sport key management; released on PyPI with a clean build and upload pipeline via `python-build` and `twine`

## Projects Supervised by a Professor

### Cloud-Based Fire Detection and Air Quality System with AI (Under Prof Bhaktha)
- Designed an IoT-enabled system integrating fire and air quality sensors (MQ2, MQ135) with microcontrollers, enabling accurate hazard detection within 5–10 ft range
- Developed a cloud architecture using MQTT and MongoDB Atlas for secure, real-time data ingestion, scalable storage, and centralized monitoring across multiple nodes
- Built a MERN stack dashboard with live logs, data visualization, and downloadable reports, ensuring < 1s latency updates and user-friendly access to historical data
- Incorporated AI-based anomaly detection with Gemini models and WebSocket-driven alerts, reducing false positives and enhancing overall system reliability

### Ayurvedic Consultation Platform (Under Prof Mrigank Sharad)
- Architected multi-role backend (doctors, patients, admins, retailers) with JWT auth, RBAC, and session management in Node.js/Express
- Integrated Firebase authentication for secure user access and intelligent categorization based on user type: patient, doctor, or retailer
- Integrated machine learning algorithms to automatically match patients with doctors based on prakriti determination form inputs
- Designed MongoDB schema across 5+ domains; built RESTful APIs for appointments, products and payments with centralized error handling
- Developed a comprehensive payment interface using Razorpay, including API routes for consultation and medicine transactions
- Engineered concurrent slot-booking engine with locking to prevent race conditions, with real-time availability tracking and notifications
- Deployed full-stack to Railway (backend), MongoDB Atlas, and Vercel (frontend) with Hostinger domain and env-based config management

### Fire and Smoke Detection System (Under Prof Sudip Mishra)
- Developed an IoT-based fire detection system using ESP8266, MQTT, and MQ2 gas sensors, enhancing smoke detection accuracy
- Integrated real-time data transmission via MQTT and Mosquitto Broker, ensuring prompt fire alerts through email notifications
- Utilized machine learning algorithms to reduce false alarms, improving fire identification precision and overall system reliability
- Addressed market gaps with a dual-layered detection approach, ensuring timely and accurate hazard alerts for enhanced fire safety
