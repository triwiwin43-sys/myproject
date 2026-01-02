# 🔄 FLOWCHART Inter Medi-A E-Commerce Platform
## Monorepo Architecture Flow

## 🏗️ System Architecture Flow

```mermaid
flowchart TD
    %% User Interfaces
    WEB[🌐 Web App<br/>React + Vite]
    ADMIN[👨‍💼 Admin Dashboard<br/>React Admin]
    MOBILE[📱 Mobile App<br/>React Native]
    
    %% API Gateway
    API[🔧 API Gateway<br/>Express.js]
    
    %% Core Services
    AUTH[🔐 Auth Service]
    PRODUCT[📦 Product Service]
    ORDER[🛒 Order Service]
    PAYMENT[💳 Payment Service]
    NOTIFICATION[🔔 Notification Service]
    ANALYTICS[📊 Analytics Service]
    
    %% Database Layer
    MONGO[(🍃 MongoDB<br/>Primary Database)]
    REDIS[(⚡ Redis<br/>Cache & Sessions)]
    
    %% External Services
    CLOUDINARY[☁️ Cloudinary<br/>Image Storage]
    EMAIL[📧 Email Service<br/>SendGrid/SES]
    PAYMENT_GATEWAY[💰 Payment Gateway<br/>Stripe/PayPal]
    
    %% Shared Packages
    TYPES[📝 @packages/types]
    UTILS[🛠️ @packages/utils]
    UI[🎨 @packages/ui]
    CONFIG[⚙️ @packages/config]
    
    %% Flow Connections
    WEB --> API
    ADMIN --> API
    MOBILE --> API
    
    API --> AUTH
    API --> PRODUCT
    API --> ORDER
    API --> PAYMENT
    API --> NOTIFICATION
    API --> ANALYTICS
    
    AUTH --> MONGO
    PRODUCT --> MONGO
    ORDER --> MONGO
    PAYMENT --> MONGO
    NOTIFICATION --> MONGO
    ANALYTICS --> MONGO
    
    API --> REDIS
    AUTH --> REDIS
    
    PRODUCT --> CLOUDINARY
    NOTIFICATION --> EMAIL
    PAYMENT --> PAYMENT_GATEWAY
    
    WEB -.-> TYPES
    WEB -.-> UTILS
    WEB -.-> UI
    ADMIN -.-> TYPES
    ADMIN -.-> UTILS
    ADMIN -.-> UI
    API -.-> TYPES
    API -.-> UTILS
    API -.-> CONFIG
```

## 🛒 User Journey Flowchart

```mermaid
flowchart TD
    START([👤 User Visits Site])
    
    %% Authentication Flow
    START --> AUTH_CHECK{Authenticated?}
    AUTH_CHECK -->|No| LOGIN[🔐 Login/Register]
    AUTH_CHECK -->|Yes| DASHBOARD[🏠 Dashboard]
    LOGIN --> VERIFY{Email Verified?}
    VERIFY -->|No| SEND_EMAIL[📧 Send Verification]
    VERIFY -->|Yes| DASHBOARD
    SEND_EMAIL --> VERIFY_EMAIL[✅ Verify Email]
    VERIFY_EMAIL --> DASHBOARD
    
    %% Shopping Flow
    DASHBOARD --> BROWSE[🔍 Browse Products]
    BROWSE --> FILTER[🎯 Filter/Search]
    FILTER --> PRODUCT_LIST[📋 Product List]
    PRODUCT_LIST --> PRODUCT_DETAIL[📦 Product Detail]
    
    %% Cart & Wishlist
    PRODUCT_DETAIL --> ADD_CART{Add to Cart?}
    PRODUCT_DETAIL --> ADD_WISHLIST{Add to Wishlist?}
    ADD_CART -->|Yes| CART[🛒 Shopping Cart]
    ADD_WISHLIST -->|Yes| WISHLIST[❤️ Wishlist]
    ADD_CART -->|No| CONTINUE_SHOPPING[🔄 Continue Shopping]
    
    %% Checkout Flow
    CART --> CHECKOUT{Proceed to Checkout?}
    CHECKOUT -->|Yes| ADDRESS[📍 Select Address]
    CHECKOUT -->|No| CONTINUE_SHOPPING
    ADDRESS --> PAYMENT_METHOD[💳 Payment Method]
    PAYMENT_METHOD --> REVIEW_ORDER[📋 Review Order]
    REVIEW_ORDER --> PLACE_ORDER[✅ Place Order]
    
    %% Order Processing
    PLACE_ORDER --> PAYMENT_PROCESS[💰 Process Payment]
    PAYMENT_PROCESS --> PAYMENT_SUCCESS{Payment Success?}
    PAYMENT_SUCCESS -->|Yes| ORDER_CONFIRM[✅ Order Confirmed]
    PAYMENT_SUCCESS -->|No| PAYMENT_FAILED[❌ Payment Failed]
    PAYMENT_FAILED --> PAYMENT_METHOD
    
    %% Post-Order
    ORDER_CONFIRM --> INVENTORY_UPDATE[📦 Update Inventory]
    INVENTORY_UPDATE --> NOTIFICATION[🔔 Send Notifications]
    NOTIFICATION --> ORDER_TRACKING[📍 Order Tracking]
    ORDER_TRACKING --> DELIVERY[🚚 Delivery]
    DELIVERY --> REVIEW_PROMPT[⭐ Review Product]
    
    %% Loops
    CONTINUE_SHOPPING --> BROWSE
    WISHLIST --> BROWSE
    REVIEW_PROMPT --> BROWSE
```

## 🔐 Authentication Flow

```mermaid
flowchart TD
    LOGIN_START([🔐 Login Request])
    
    LOGIN_START --> VALIDATE_INPUT{Valid Input?}
    VALIDATE_INPUT -->|No| INPUT_ERROR[❌ Input Error]
    VALIDATE_INPUT -->|Yes| CHECK_USER{User Exists?}
    
    CHECK_USER -->|No| USER_NOT_FOUND[❌ User Not Found]
    CHECK_USER -->|Yes| CHECK_PASSWORD{Password Match?}
    
    CHECK_PASSWORD -->|No| INVALID_PASSWORD[❌ Invalid Password]
    CHECK_PASSWORD -->|Yes| CHECK_VERIFIED{Email Verified?}
    
    CHECK_VERIFIED -->|No| SEND_VERIFICATION[📧 Send Verification]
    CHECK_VERIFIED -->|Yes| GENERATE_JWT[🎫 Generate JWT]
    
    GENERATE_JWT --> SET_REDIS[⚡ Store Session in Redis]
    SET_REDIS --> LOGIN_SUCCESS[✅ Login Success]
    
    %% Registration Flow
    REGISTER_START([📝 Register Request])
    REGISTER_START --> VALIDATE_REG{Valid Data?}
    VALIDATE_REG -->|No| REG_ERROR[❌ Registration Error]
    VALIDATE_REG -->|Yes| CHECK_EXISTS{User Exists?}
    
    CHECK_EXISTS -->|Yes| USER_EXISTS[❌ User Already Exists]
    CHECK_EXISTS -->|No| HASH_PASSWORD[🔒 Hash Password]
    
    HASH_PASSWORD --> CREATE_USER[👤 Create User]
    CREATE_USER --> SEND_VERIFICATION
    SEND_VERIFICATION --> REG_SUCCESS[✅ Registration Success]
    
    %% Error Handling
    INPUT_ERROR --> LOGIN_START
    USER_NOT_FOUND --> LOGIN_START
    INVALID_PASSWORD --> LOGIN_START
    REG_ERROR --> REGISTER_START
    USER_EXISTS --> REGISTER_START
```

## 📦 Product Management Flow

```mermaid
flowchart TD
    %% Product Creation (Seller/Admin)
    CREATE_START([➕ Create Product])
    CREATE_START --> VALIDATE_PRODUCT{Valid Product Data?}
    VALIDATE_PRODUCT -->|No| PRODUCT_ERROR[❌ Validation Error]
    VALIDATE_PRODUCT -->|Yes| UPLOAD_IMAGES[📸 Upload Images]
    
    UPLOAD_IMAGES --> CLOUDINARY_UPLOAD[☁️ Cloudinary Upload]
    CLOUDINARY_UPLOAD --> GENERATE_SKU[🏷️ Generate SKU]
    GENERATE_SKU --> CREATE_SLUG[🔗 Create Slug]
    CREATE_SLUG --> SAVE_PRODUCT[💾 Save to Database]
    SAVE_PRODUCT --> INDEX_SEARCH[🔍 Index for Search]
    INDEX_SEARCH --> PRODUCT_CREATED[✅ Product Created]
    
    %% Product Display (Customer)
    BROWSE_START([🔍 Browse Products])
    BROWSE_START --> APPLY_FILTERS[🎯 Apply Filters]
    APPLY_FILTERS --> SEARCH_QUERY[🔍 Search Query]
    SEARCH_QUERY --> FETCH_PRODUCTS[📦 Fetch from Database]
    FETCH_PRODUCTS --> SORT_PRODUCTS[📊 Sort Results]
    SORT_PRODUCTS --> DISPLAY_LIST[📋 Display Product List]
    
    DISPLAY_LIST --> SELECT_PRODUCT{Select Product?}
    SELECT_PRODUCT -->|Yes| PRODUCT_DETAIL[📦 Product Detail]
    SELECT_PRODUCT -->|No| CONTINUE_BROWSE[🔄 Continue Browsing]
    
    %% Product Detail Actions
    PRODUCT_DETAIL --> TRACK_VIEW[📊 Track Product View]
    TRACK_VIEW --> SHOW_REVIEWS[⭐ Show Reviews]
    SHOW_REVIEWS --> PRODUCT_ACTIONS{User Action?}
    
    PRODUCT_ACTIONS -->|Add to Cart| ADD_TO_CART[🛒 Add to Cart]
    PRODUCT_ACTIONS -->|Add to Wishlist| ADD_TO_WISHLIST[❤️ Add to Wishlist]
    PRODUCT_ACTIONS -->|Buy Now| QUICK_CHECKOUT[⚡ Quick Checkout]
    
    %% Inventory Management
    INVENTORY_CHECK{Stock Available?}
    ADD_TO_CART --> INVENTORY_CHECK
    INVENTORY_CHECK -->|Yes| CART_SUCCESS[✅ Added to Cart]
    INVENTORY_CHECK -->|No| OUT_OF_STOCK[❌ Out of Stock]
    
    %% Error Loops
    PRODUCT_ERROR --> CREATE_START
    CONTINUE_BROWSE --> APPLY_FILTERS
    OUT_OF_STOCK --> PRODUCT_DETAIL
```

## 🛒 Order Processing Flow

```mermaid
flowchart TD
    CHECKOUT_START([🛒 Checkout Process])
    
    %% Pre-checkout Validation
    CHECKOUT_START --> VALIDATE_CART{Cart Valid?}
    VALIDATE_CART -->|No| CART_ERROR[❌ Cart Error]
    VALIDATE_CART -->|Yes| CHECK_INVENTORY{Stock Available?}
    
    CHECK_INVENTORY -->|No| INVENTORY_ERROR[❌ Insufficient Stock]
    CHECK_INVENTORY -->|Yes| SELECT_ADDRESS[📍 Select Address]
    
    %% Address & Shipping
    SELECT_ADDRESS --> CALCULATE_SHIPPING[🚚 Calculate Shipping]
    CALCULATE_SHIPPING --> APPLY_COUPON{Apply Coupon?}
    APPLY_COUPON -->|Yes| VALIDATE_COUPON[🎫 Validate Coupon]
    APPLY_COUPON -->|No| SELECT_PAYMENT[💳 Select Payment]
    
    VALIDATE_COUPON --> COUPON_VALID{Coupon Valid?}
    COUPON_VALID -->|Yes| APPLY_DISCOUNT[💰 Apply Discount]
    COUPON_VALID -->|No| COUPON_ERROR[❌ Invalid Coupon]
    APPLY_DISCOUNT --> SELECT_PAYMENT
    
    %% Payment Processing
    SELECT_PAYMENT --> PAYMENT_GATEWAY[💳 Payment Gateway]
    PAYMENT_GATEWAY --> PROCESS_PAYMENT[💰 Process Payment]
    PROCESS_PAYMENT --> PAYMENT_RESULT{Payment Success?}
    
    PAYMENT_RESULT -->|No| PAYMENT_FAILED[❌ Payment Failed]
    PAYMENT_RESULT -->|Yes| CREATE_ORDER[📋 Create Order]
    
    %% Order Creation
    CREATE_ORDER --> GENERATE_ORDER_NUMBER[🔢 Generate Order Number]
    GENERATE_ORDER_NUMBER --> RESERVE_INVENTORY[📦 Reserve Inventory]
    RESERVE_INVENTORY --> SAVE_ORDER[💾 Save Order]
    SAVE_ORDER --> CLEAR_CART[🗑️ Clear Cart]
    
    %% Post-Order Processing
    CLEAR_CART --> SEND_CONFIRMATION[📧 Send Confirmation Email]
    SEND_CONFIRMATION --> NOTIFY_SELLER[🔔 Notify Seller]
    NOTIFY_SELLER --> UPDATE_ANALYTICS[📊 Update Analytics]
    UPDATE_ANALYTICS --> ORDER_SUCCESS[✅ Order Placed]
    
    %% Order Fulfillment
    ORDER_SUCCESS --> SELLER_PROCESS[👨‍💼 Seller Processing]
    SELLER_PROCESS --> PACK_ORDER[📦 Pack Order]
    PACK_ORDER --> SHIP_ORDER[🚚 Ship Order]
    SHIP_ORDER --> TRACKING_UPDATE[📍 Update Tracking]
    TRACKING_UPDATE --> DELIVERY[🏠 Delivery]
    DELIVERY --> ORDER_COMPLETE[✅ Order Complete]
    
    %% Error Handling
    CART_ERROR --> CHECKOUT_START
    INVENTORY_ERROR --> CHECKOUT_START
    COUPON_ERROR --> SELECT_PAYMENT
    PAYMENT_FAILED --> SELECT_PAYMENT
```

## 📊 Analytics & Notification Flow

```mermaid
flowchart TD
    %% Analytics Collection
    USER_ACTION([👤 User Action])
    USER_ACTION --> TRACK_EVENT[📊 Track Event]
    TRACK_EVENT --> EVENT_TYPE{Event Type?}
    
    EVENT_TYPE -->|Page View| PAGE_VIEW[👁️ Page View Event]
    EVENT_TYPE -->|Product View| PRODUCT_VIEW[📦 Product View Event]
    EVENT_TYPE -->|Add to Cart| CART_EVENT[🛒 Cart Event]
    EVENT_TYPE -->|Purchase| PURCHASE_EVENT[💰 Purchase Event]
    
    PAGE_VIEW --> STORE_ANALYTICS[💾 Store in Database]
    PRODUCT_VIEW --> STORE_ANALYTICS
    CART_EVENT --> STORE_ANALYTICS
    PURCHASE_EVENT --> STORE_ANALYTICS
    
    STORE_ANALYTICS --> REAL_TIME_DASHBOARD[📈 Real-time Dashboard]
    
    %% Notification System
    TRIGGER_EVENT([🔔 Notification Trigger])
    TRIGGER_EVENT --> NOTIFICATION_TYPE{Notification Type?}
    
    NOTIFICATION_TYPE -->|Order Update| ORDER_NOTIFICATION[📋 Order Notification]
    NOTIFICATION_TYPE -->|Inventory Alert| INVENTORY_NOTIFICATION[📦 Inventory Alert]
    NOTIFICATION_TYPE -->|Marketing| MARKETING_NOTIFICATION[📢 Marketing Notification]
    NOTIFICATION_TYPE -->|System Alert| SYSTEM_NOTIFICATION[⚠️ System Alert]
    
    ORDER_NOTIFICATION --> SELECT_CHANNELS[📱 Select Channels]
    INVENTORY_NOTIFICATION --> SELECT_CHANNELS
    MARKETING_NOTIFICATION --> SELECT_CHANNELS
    SYSTEM_NOTIFICATION --> SELECT_CHANNELS
    
    SELECT_CHANNELS --> EMAIL_CHANNEL{Send Email?}
    SELECT_CHANNELS --> PUSH_CHANNEL{Send Push?}
    SELECT_CHANNELS --> SMS_CHANNEL{Send SMS?}
    
    EMAIL_CHANNEL -->|Yes| SEND_EMAIL[📧 Send Email]
    PUSH_CHANNEL -->|Yes| SEND_PUSH[📱 Send Push Notification]
    SMS_CHANNEL -->|Yes| SEND_SMS[📱 Send SMS]
    
    SEND_EMAIL --> LOG_NOTIFICATION[📝 Log Notification]
    SEND_PUSH --> LOG_NOTIFICATION
    SEND_SMS --> LOG_NOTIFICATION
    
    LOG_NOTIFICATION --> NOTIFICATION_COMPLETE[✅ Notification Sent]
```

## 🔄 Background Jobs Flow

```mermaid
flowchart TD
    %% Job Scheduler
    SCHEDULER([⏰ Job Scheduler])
    SCHEDULER --> JOB_QUEUE[📋 Job Queue]
    
    JOB_QUEUE --> EMAIL_JOBS[📧 Email Jobs]
    JOB_QUEUE --> INVENTORY_JOBS[📦 Inventory Jobs]
    JOB_QUEUE --> ANALYTICS_JOBS[📊 Analytics Jobs]
    JOB_QUEUE --> CLEANUP_JOBS[🗑️ Cleanup Jobs]
    
    %% Email Jobs
    EMAIL_JOBS --> WELCOME_EMAIL[👋 Welcome Email]
    EMAIL_JOBS --> ORDER_CONFIRMATION[📋 Order Confirmation]
    EMAIL_JOBS --> SHIPPING_UPDATE[🚚 Shipping Update]
    EMAIL_JOBS --> MARKETING_EMAIL[📢 Marketing Email]
    
    %% Inventory Jobs
    INVENTORY_JOBS --> LOW_STOCK_ALERT[⚠️ Low Stock Alert]
    INVENTORY_JOBS --> REORDER_REMINDER[🔄 Reorder Reminder]
    INVENTORY_JOBS --> INVENTORY_SYNC[🔄 Inventory Sync]
    
    %% Analytics Jobs
    ANALYTICS_JOBS --> DAILY_REPORT[📊 Daily Report]
    ANALYTICS_JOBS --> USER_BEHAVIOR[👤 User Behavior Analysis]
    ANALYTICS_JOBS --> SALES_REPORT[💰 Sales Report]
    
    %% Cleanup Jobs
    CLEANUP_JOBS --> EXPIRED_CARTS[🛒 Clean Expired Carts]
    CLEANUP_JOBS --> OLD_SESSIONS[🔐 Clean Old Sessions]
    CLEANUP_JOBS --> LOG_CLEANUP[📝 Log Cleanup]
    
    %% Job Processing
    WELCOME_EMAIL --> PROCESS_JOB[⚙️ Process Job]
    ORDER_CONFIRMATION --> PROCESS_JOB
    LOW_STOCK_ALERT --> PROCESS_JOB
    DAILY_REPORT --> PROCESS_JOB
    EXPIRED_CARTS --> PROCESS_JOB
    
    PROCESS_JOB --> JOB_SUCCESS{Job Success?}
    JOB_SUCCESS -->|Yes| JOB_COMPLETE[✅ Job Complete]
    JOB_SUCCESS -->|No| JOB_RETRY[🔄 Retry Job]
    
    JOB_RETRY --> RETRY_COUNT{Max Retries?}
    RETRY_COUNT -->|No| PROCESS_JOB
    RETRY_COUNT -->|Yes| JOB_FAILED[❌ Job Failed]
    
    JOB_COMPLETE --> LOG_SUCCESS[📝 Log Success]
    JOB_FAILED --> LOG_ERROR[📝 Log Error]
```
