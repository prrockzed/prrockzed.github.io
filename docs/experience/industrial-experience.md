---
sidebar_position: 1
---

# Industrial Experience

## Cuepilot AI
### Backend Engineer
#### [ Jun'26 - Present ]
- Coming Soon

## Cimba.ai
### Software Engineer
#### [ May'25 - May'26 ]
- Designed a provider-agnostic LLM routing layer (Gemini, Azure OpenAI, Claude) with automatic failover and circuit-breaker semantics — decoupling inference logic from provider-specific SDKs and eliminating single-provider downtime across all users
- Built an LLM-powered RLS validation system with prompt-based evaluation and false-negative detection — flagging RLS violations 85% faster (6s vs 40+ seconds), reducing security misconfigurations and improving user-facing error visibility
- Redesigned the file ingestion pipeline with a streaming architecture — decoupling upload from processing, offloading XLSX/CSV parsing to async workers with DuckDB-backed query optimization — scaling limits from 100MB to 240MB and reducing failures to near-zero
- Built NetSuite provider integration with stateless sync/validate pipelines, dynamic handler routing, and config-driven orchestration
- Led AWS-to-Azure migration (S3→Blob, SQS→Queues, Lambda→Functions) with Kubernetes to manage deployment across services
- Engineered IAM role migration, LDAP sync, RBAC persona-to-group migration, and bulk user APIs with Redis cache invalidation on user updates — enabling zero-downtime onboarding for 1,000+ users across enterprise organizations
- Scaled analytical query capacity 10x (100K → 1M rows) by profiling bottlenecks, applying DuckDB columnar optimizations, and introducing feature-flagged per-tenant limits — validated under load testing to ensure system stability for enterprise workloads
- Developed an automated evaluation and regression framework (askCimbaTest) with WebSocket-based result streaming (replacing polling), scheduled runs, Slack alerting, and OpenAI-to-Azure fallback — enabling continuous accuracy monitoring across LLM upgrades
- Engineered workflow execution resilience with RabbitMQ (local) and AWS SQS (prod) for async/parallel message queuing, stop/cancel mid-execution, parent-child step dependency management, and retry logic — cutting stuck-workflow incidents

## SuperAPI (YC W23)
### Software Developer Intern
#### [ Jan'25 - Mar'25 ]
- Instrumented real-time API observability (response time, SSL handshake, payload size) using Performance API for latency profiling
- Designed paginated GraphQL queries and mutations with multi-endpoint support, reducing over-fetching and improving API efficiency
- Built cache invalidation workflows and responsive SQL testing interfaces, improving data consistency and cross-device compatibility
- Engineered reusable data seeders and schema extensions (reviews, discounts, warehouses) to standardize and streamline test data management

## MPY Technologies
### Software Intern
#### [ Apr’24 - Jun’24 ]
- Managed company’s website content updates using Javascript and ReactJS, ensuring timely deployment of new feature and pricing adjustment
- Built JWT auth with REST APIs and prompt-engineered LLM workflows; integrated Analytics for data-driven marketing optimization
- Developed marketing solutions by integrating Google Analytics and optimized client campaigns through API integrations and event tracking
- Architected multithreaded Node.js server with worker threads — handling 1,000+ concurrent connections with non-blocking I/O
- Implemented browser-side LRU cache with write-invalidation on updates — cutting redundant DB hits and improving response latency

## BB Advisory
### Financial Analyst Intern
#### [ May'24 - Jul'24 ]
- Conducted financial analysis on forex trading technique, including the dynamics of the CFD market.
- Utilized strategies like candlestick pattern and pivot point along with technical indicators(like Fibonacci, RSI,
Bollinger Bands etc) and fundamental analysis to predict the future movements in currency prices.
- Achieved a 12% profit ($120) on a $1000 investment in 2 months using technical and fundamental analysis.
