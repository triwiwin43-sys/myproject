# 🗄️ ERD FULL LENGKAP - Inter Medi-A E-Commerce Platform
## Complete Entity Relationship Diagram dengan Semua Detail

```mermaid
erDiagram
    %% ========================================
    %% CORE USER MANAGEMENT
    %% ========================================
    
    USER {
        ObjectId _id PK "Primary Key"
        String name "Required, max 50 chars"
        String email UK "Unique, lowercase, validated"
        String password "Hashed, min 6 chars, select false"
        String phone "Required, 10-15 digits"
        String role "enum: customer|seller|admin"
        String avatar "Default: default-avatar.png"
        Boolean isVerified "Default: false"
        String verificationToken "Email verification"
        String resetPasswordToken "Password reset"
        Date resetPasswordExpire "Reset token expiry"
        Object preferences "User preferences JSON"
        Date lastLoginAt "Last login timestamp"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    ADDRESS {
        ObjectId _id PK "Primary Key"
        ObjectId userId FK "Reference to User"
        String type "enum: home|office|other"
        String label "Address label/name"
        String recipientName "Recipient full name"
        String phone "Contact phone number"
        String address "Full street address"
        String city "City name"
        String province "Province/state"
        String postalCode "ZIP/postal code"
        String country "Country name"
        Boolean isDefault "Default address flag"
        Object coordinates "lat/lng coordinates"
        String instructions "Delivery instructions"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    SELLER_INFO {
        ObjectId userId FK "Reference to User"
        String storeName "Store display name"
        String storeDescription "Store description"
        String storeLogo "Store logo URL"
        String storeSlug "Unique store URL slug"
        Boolean isVerified "Seller verification status"
        Number rating "Average seller rating 0-5"
        Number totalReviews "Total seller reviews"
        Number totalSales "Total sales count"
        Number totalRevenue "Total revenue amount"
        Date joinDate "Seller registration date"
        Object businessInfo "Business registration details"
        Object bankInfo "Bank account details"
        Array socialLinks "Social media links"
        Object settings "Seller preferences"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    %% ========================================
    %% PRODUCT CATALOG MANAGEMENT
    %% ========================================

    CATEGORY {
        ObjectId _id PK "Primary Key"
        String name UK "Unique category name"
        String slug UK "Unique URL slug"
        String description "Category description"
        String image "Category image URL"
        String icon "Category icon"
        ObjectId parentId FK "Parent category reference"
        Boolean isActive "Active status"
        Number sortOrder "Display order"
        Object seoMeta "SEO metadata"
        Number productCount "Products in category"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    BRAND {
        ObjectId _id PK "Primary Key"
        String name UK "Unique brand name"
        String slug UK "Unique URL slug"
        String description "Brand description"
        String logo "Brand logo URL"
        String website "Brand website"
        Boolean isActive "Active status"
        Number productCount "Products count"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    PRODUCT {
        ObjectId _id PK "Primary Key"
        String name "Product name, max 200 chars"
        String slug UK "Unique URL slug"
        String description "Full product description"
        String shortDescription "Brief description, max 500"
        String sku UK "Unique stock keeping unit"
        ObjectId categoryId FK "Category reference"
        ObjectId sellerId FK "Seller reference"
        ObjectId brandId FK "Brand reference"
        Number price "Current selling price"
        Number comparePrice "Original/compare price"
        Number costPrice "Cost price for seller"
        Number stock "Available quantity"
        Number lowStockThreshold "Low stock alert level"
        Number weight "Product weight in grams"
        Object dimensions "length/width/height in cm"
        Boolean isActive "Product active status"
        Boolean isFeatured "Featured product flag"
        Boolean isDigital "Digital product flag"
        Number rating "Average rating 0-5"
        Number totalReviews "Total review count"
        Number totalSold "Total units sold"
        Number viewCount "Product view count"
        Array tags "Search tags"
        String condition "enum: new|used|refurbished"
        String warranty "Warranty information"
        String seoTitle "SEO page title"
        String seoDescription "SEO meta description"
        Array seoKeywords "SEO keywords"
        Object analytics "Analytics data"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    PRODUCT_IMAGE {
        ObjectId _id PK "Primary Key"
        ObjectId productId FK "Product reference"
        String url "Image URL"
        String alt "Alt text for accessibility"
        Boolean isMain "Main product image flag"
        Number sortOrder "Display order"
        String size "Image size info"
        Date createdAt "Auto timestamp"
    }

    PRODUCT_VARIANT {
        ObjectId _id PK "Primary Key"
        ObjectId productId FK "Product reference"
        String name "Variant name (color, size, etc)"
        Array options "Variant options array"
        Date createdAt "Auto timestamp"
    }

    PRODUCT_VARIANT_OPTION {
        ObjectId _id PK "Primary Key"
        ObjectId variantId FK "Variant reference"
        String value "Option value"
        Number price "Price adjustment"
        Number stock "Stock for this option"
        String sku "Unique SKU for option"
        String image "Option image URL"
        Boolean isActive "Option active status"
        Date createdAt "Auto timestamp"
    }

    PRODUCT_SPECIFICATION {
        ObjectId _id PK "Primary Key"
        ObjectId productId FK "Product reference"
        String name "Specification name"
        String value "Specification value"
        String unit "Unit of measurement"
        Number sortOrder "Display order"
        Date createdAt "Auto timestamp"
    }

    %% ========================================
    %% SHOPPING & CART MANAGEMENT
    %% ========================================

    CART {
        ObjectId _id PK "Primary Key"
        ObjectId userId FK "User reference, unique"
        Number totalItems "Total item count"
        Number totalPrice "Total cart value"
        Date expiresAt "Cart expiration date"
        String sessionId "Guest session ID"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    CART_ITEM {
        ObjectId _id PK "Primary Key"
        ObjectId cartId FK "Cart reference"
        ObjectId productId FK "Product reference"
        Number quantity "Item quantity, min 1"
        Number price "Price at time of adding"
        Object selectedVariants "Selected variant options"
        String notes "Customer notes"
        Date addedAt "Item added timestamp"
        Date updatedAt "Last update timestamp"
    }

    WISHLIST {
        ObjectId _id PK "Primary Key"
        ObjectId userId FK "User reference, unique"
        String name "Wishlist name"
        String description "Wishlist description"
        Boolean isPublic "Public visibility flag"
        Boolean isDefault "Default wishlist flag"
        Number itemCount "Total items count"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    WISHLIST_ITEM {
        ObjectId _id PK "Primary Key"
        ObjectId wishlistId FK "Wishlist reference"
        ObjectId productId FK "Product reference"
        Number priority "Item priority 1-5"
        String notes "Customer notes"
        Date addedAt "Item added timestamp"
    }

    %% ========================================
    %% ORDER MANAGEMENT SYSTEM
    %% ========================================

    ORDER {
        ObjectId _id PK "Primary Key"
        String orderNumber UK "Unique order number"
        ObjectId userId FK "Customer reference"
        ObjectId sellerId FK "Seller reference"
        String status "enum: pending|processing|shipped|delivered|cancelled|refunded"
        Number itemsPrice "Subtotal of items"
        Number taxPrice "Tax amount"
        Number shippingPrice "Shipping cost"
        Number discountAmount "Discount applied"
        Number totalPrice "Final total amount"
        String currency "Currency code"
        Boolean isPaid "Payment status"
        Date paidAt "Payment timestamp"
        Boolean isDelivered "Delivery status"
        Date deliveredAt "Delivery timestamp"
        String trackingNumber "Shipping tracking number"
        String shippingCarrier "Shipping company"
        Object timeline "Order status timeline"
        String customerNotes "Customer notes"
        String sellerNotes "Seller notes"
        String adminNotes "Admin notes"
        Date estimatedDelivery "Estimated delivery date"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    ORDER_ITEM {
        ObjectId _id PK "Primary Key"
        ObjectId orderId FK "Order reference"
        ObjectId productId FK "Product reference"
        ObjectId sellerId FK "Seller reference"
        String name "Product name at order time"
        String sku "Product SKU at order time"
        Number price "Price at order time"
        Number quantity "Ordered quantity"
        String image "Product image URL"
        Object selectedVariants "Selected variants"
        String status "Item status"
        Number weight "Item weight"
        Date createdAt "Auto timestamp"
    }

    ORDER_ADDRESS {
        ObjectId _id PK "Primary Key"
        ObjectId orderId FK "Order reference"
        String type "enum: shipping|billing"
        String recipientName "Recipient name"
        String phone "Contact phone"
        String address "Full address"
        String city "City name"
        String province "Province/state"
        String postalCode "Postal code"
        String country "Country name"
        String instructions "Delivery instructions"
        Date createdAt "Auto timestamp"
    }

    ORDER_STATUS_HISTORY {
        ObjectId _id PK "Primary Key"
        ObjectId orderId FK "Order reference"
        String status "Order status"
        String notes "Status change notes"
        ObjectId updatedBy FK "User who updated"
        Date timestamp "Status change time"
    }

    %% ========================================
    %% PAYMENT SYSTEM
    %% ========================================

    PAYMENT {
        ObjectId _id PK "Primary Key"
        ObjectId orderId FK "Order reference"
        ObjectId userId FK "User reference"
        String paymentMethod "enum: credit_card|debit_card|bank_transfer|ewallet|cod"
        String provider "Payment provider name"
        String transactionId "Provider transaction ID"
        String paymentId "Internal payment ID"
        Number amount "Payment amount"
        String currency "Currency code"
        String status "enum: pending|processing|completed|failed|cancelled|refunded"
        Object providerResponse "Provider response data"
        Object metadata "Additional payment data"
        Date processedAt "Payment processed time"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    REFUND {
        ObjectId _id PK "Primary Key"
        ObjectId orderId FK "Order reference"
        ObjectId paymentId FK "Payment reference"
        ObjectId userId FK "User reference"
        String reason "Refund reason"
        Number amount "Refund amount"
        String status "enum: pending|processing|completed|rejected"
        String refundId "Provider refund ID"
        Object providerResponse "Provider response"
        String notes "Admin notes"
        Date processedAt "Refund processed time"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    %% ========================================
    %% COUPON & DISCOUNT SYSTEM
    %% ========================================

    COUPON {
        ObjectId _id PK "Primary Key"
        String code UK "Unique coupon code"
        String name "Coupon display name"
        String description "Coupon description"
        String type "enum: percentage|fixed_amount|free_shipping"
        Number value "Discount value"
        Number minOrderAmount "Minimum order amount"
        Number maxDiscount "Maximum discount amount"
        Date startDate "Coupon start date"
        Date endDate "Coupon end date"
        Number usageLimit "Total usage limit"
        Number usageLimitPerUser "Per user usage limit"
        Number usedCount "Times used"
        Array applicableCategories "Applicable category IDs"
        Array applicableProducts "Applicable product IDs"
        Array excludedCategories "Excluded category IDs"
        Array excludedProducts "Excluded product IDs"
        Boolean isActive "Coupon active status"
        Boolean isPublic "Public visibility"
        ObjectId createdBy FK "Creator reference"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    COUPON_USAGE {
        ObjectId _id PK "Primary Key"
        ObjectId couponId FK "Coupon reference"
        ObjectId userId FK "User reference"
        ObjectId orderId FK "Order reference"
        Number discountAmount "Applied discount amount"
        Date usedAt "Usage timestamp"
    }

    %% ========================================
    %% REVIEW & RATING SYSTEM
    %% ========================================

    REVIEW {
        ObjectId _id PK "Primary Key"
        ObjectId productId FK "Product reference"
        ObjectId customerId FK "Customer reference"
        ObjectId orderId FK "Order reference"
        ObjectId sellerId FK "Seller reference"
        Number rating "Rating 1-5"
        String title "Review title, max 100 chars"
        String comment "Review comment, max 1000 chars"
        Array images "Review image URLs"
        Array videos "Review video URLs"
        Boolean isVerifiedPurchase "Verified purchase flag"
        Number helpfulVotes "Helpful vote count"
        Array helpfulUsers "Users who voted helpful"
        Boolean isApproved "Review approval status"
        Object moderationNotes "Moderation notes"
        String status "enum: pending|approved|rejected"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    REVIEW_REPLY {
        ObjectId _id PK "Primary Key"
        ObjectId reviewId FK "Review reference"
        ObjectId userId FK "User reference (seller/admin)"
        String userType "enum: seller|admin"
        String reply "Reply content"
        Boolean isApproved "Reply approval status"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    %% ========================================
    %% NOTIFICATION SYSTEM
    %% ========================================

    NOTIFICATION {
        ObjectId _id PK "Primary Key"
        ObjectId userId FK "User reference"
        String type "enum: order|payment|shipping|promotion|system"
        String title "Notification title"
        String message "Notification message"
        Object data "Additional notification data"
        Boolean isRead "Read status"
        String channel "enum: email|push|sms|in_app"
        String priority "enum: low|medium|high|urgent"
        Date readAt "Read timestamp"
        Date expiresAt "Notification expiry"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    EMAIL_TEMPLATE {
        ObjectId _id PK "Primary Key"
        String name UK "Template name"
        String subject "Email subject"
        String htmlContent "HTML email content"
        String textContent "Plain text content"
        Object variables "Template variables"
        Boolean isActive "Template active status"
        String category "Template category"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    EMAIL_LOG {
        ObjectId _id PK "Primary Key"
        ObjectId userId FK "User reference"
        String templateName "Email template used"
        String recipient "Recipient email"
        String subject "Email subject"
        String status "enum: sent|failed|bounced|delivered|opened|clicked"
        Object metadata "Email metadata"
        String errorMessage "Error message if failed"
        Date sentAt "Email sent timestamp"
        Date deliveredAt "Email delivered timestamp"
        Date openedAt "Email opened timestamp"
        Date createdAt "Auto timestamp"
    }

    %% ========================================
    %% ANALYTICS & TRACKING
    %% ========================================

    ANALYTICS_EVENT {
        ObjectId _id PK "Primary Key"
        String eventType "enum: page_view|product_view|add_to_cart|purchase|search"
        ObjectId userId FK "User reference (optional)"
        ObjectId productId FK "Product reference (optional)"
        ObjectId orderId FK "Order reference (optional)"
        String sessionId "Session identifier"
        Object eventData "Event specific data"
        String userAgent "Browser user agent"
        String ipAddress "User IP address"
        Object location "Geolocation data"
        String referrer "Referrer URL"
        String utm_source "UTM source"
        String utm_medium "UTM medium"
        String utm_campaign "UTM campaign"
        Date createdAt "Auto timestamp"
    }

    PRODUCT_ANALYTICS {
        ObjectId _id PK "Primary Key"
        ObjectId productId FK "Product reference"
        Date date "Analytics date"
        Number views "Daily views"
        Number addToCarts "Add to cart count"
        Number purchases "Purchase count"
        Number revenue "Daily revenue"
        Number conversionRate "View to purchase rate"
        Object hourlyData "Hourly breakdown"
        Date createdAt "Auto timestamp"
    }

    USER_ANALYTICS {
        ObjectId _id PK "Primary Key"
        ObjectId userId FK "User reference"
        Date date "Analytics date"
        Number sessions "Session count"
        Number pageViews "Page view count"
        Number timeSpent "Time spent in minutes"
        Number orders "Orders placed"
        Number revenue "Revenue generated"
        Object behaviorData "User behavior data"
        Date createdAt "Auto timestamp"
    }

    %% ========================================
    %% INVENTORY MANAGEMENT
    %% ========================================

    INVENTORY_LOG {
        ObjectId _id PK "Primary Key"
        ObjectId productId FK "Product reference"
        ObjectId variantId FK "Variant reference (optional)"
        String type "enum: purchase|sale|adjustment|return|damage|transfer"
        Number quantity "Quantity change"
        Number previousStock "Stock before change"
        Number newStock "Stock after change"
        String reason "Reason for change"
        ObjectId userId FK "User who made change"
        ObjectId orderId FK "Related order (optional)"
        Object metadata "Additional data"
        String notes "Additional notes"
        Date createdAt "Auto timestamp"
    }

    STOCK_ALERT {
        ObjectId _id PK "Primary Key"
        ObjectId productId FK "Product reference"
        ObjectId sellerId FK "Seller reference"
        String type "enum: low_stock|out_of_stock|overstock"
        Number currentStock "Current stock level"
        Number threshold "Alert threshold"
        Boolean isResolved "Alert resolution status"
        Date resolvedAt "Resolution timestamp"
        String notes "Alert notes"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    %% ========================================
    %% ADMIN & SYSTEM MANAGEMENT
    %% ========================================

    ADMIN_USER {
        ObjectId _id PK "Primary Key"
        String username UK "Unique username"
        String email UK "Unique email"
        String password "Hashed password"
        String firstName "First name"
        String lastName "Last name"
        String role "enum: super_admin|admin|moderator|support"
        Array permissions "Permission array"
        Boolean isActive "Account active status"
        Date lastLoginAt "Last login timestamp"
        String lastLoginIp "Last login IP"
        Object preferences "Admin preferences"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    ADMIN_PERMISSION {
        ObjectId _id PK "Primary Key"
        String name UK "Permission name"
        String description "Permission description"
        String module "Module/section name"
        String action "Action type"
        Boolean isActive "Permission active status"
        Date createdAt "Auto timestamp"
    }

    ADMIN_ROLE {
        ObjectId _id PK "Primary Key"
        String name UK "Role name"
        String description "Role description"
        Array permissions "Permission IDs"
        Boolean isActive "Role active status"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    SYSTEM_CONFIG {
        ObjectId _id PK "Primary Key"
        String key UK "Configuration key"
        String value "Configuration value"
        String type "enum: string|number|boolean|json|array"
        String description "Configuration description"
        Boolean isPublic "Public visibility"
        String category "Configuration category"
        Object validation "Validation rules"
        Date updatedAt "Last update timestamp"
        ObjectId updatedBy FK "User who updated"
    }

    AUDIT_LOG {
        ObjectId _id PK "Primary Key"
        ObjectId userId FK "User reference"
        String userType "enum: customer|seller|admin"
        String action "Action performed"
        String resource "Resource affected"
        ObjectId resourceId "Resource ID"
        Object oldData "Data before change"
        Object newData "Data after change"
        String ipAddress "User IP address"
        String userAgent "Browser user agent"
        Date createdAt "Auto timestamp"
    }

    %% ========================================
    %% SHIPPING & LOGISTICS
    %% ========================================

    SHIPPING_METHOD {
        ObjectId _id PK "Primary Key"
        String name "Shipping method name"
        String description "Method description"
        String carrier "Shipping carrier"
        String type "enum: standard|express|overnight|pickup"
        Number baseCost "Base shipping cost"
        Number weightMultiplier "Cost per weight unit"
        Number freeShippingThreshold "Free shipping minimum"
        Boolean isActive "Method active status"
        Array availableRegions "Available regions"
        Number estimatedDays "Estimated delivery days"
        Date createdAt "Auto timestamp"
        Date updatedAt "Auto timestamp"
    }

    SHIPPING_RATE {
        ObjectId _id PK "Primary Key"
        ObjectId shippingMethodId FK "Shipping method reference"
        String region "Region/zone"
        Number minWeight "Minimum weight"
        Number maxWeight "Maximum weight"
        Number cost "Shipping cost"
        Date createdAt "Auto timestamp"
    }

    %% ========================================
    %% RELATIONSHIPS - COMPREHENSIVE
    %% ========================================

    %% User Management Relationships
    USER ||--o{ ADDRESS : "has_addresses"
    USER ||--o| SELLER_INFO : "has_seller_info"
    USER ||--o{ AUDIT_LOG : "performs_actions"
    
    %% Product Catalog Relationships
    CATEGORY ||--o{ CATEGORY : "parent_child"
    CATEGORY ||--o{ PRODUCT : "contains_products"
    BRAND ||--o{ PRODUCT : "has_products"
    PRODUCT ||--o{ PRODUCT_IMAGE : "has_images"
    PRODUCT ||--o{ PRODUCT_VARIANT : "has_variants"
    PRODUCT_VARIANT ||--o{ PRODUCT_VARIANT_OPTION : "has_options"
    PRODUCT ||--o{ PRODUCT_SPECIFICATION : "has_specifications"
    USER ||--o{ PRODUCT : "sells_products"
    
    %% Shopping & Cart Relationships
    USER ||--o| CART : "has_cart"
    CART ||--o{ CART_ITEM : "contains_items"
    PRODUCT ||--o{ CART_ITEM : "added_to_carts"
    USER ||--o{ WISHLIST : "has_wishlists"
    WISHLIST ||--o{ WISHLIST_ITEM : "contains_items"
    PRODUCT ||--o{ WISHLIST_ITEM : "added_to_wishlists"
    
    %% Order Management Relationships
    USER ||--o{ ORDER : "places_orders"
    USER ||--o{ ORDER : "sells_orders"
    ORDER ||--o{ ORDER_ITEM : "contains_items"
    PRODUCT ||--o{ ORDER_ITEM : "ordered_as_items"
    ORDER ||--o{ ORDER_ADDRESS : "has_addresses"
    ORDER ||--o{ ORDER_STATUS_HISTORY : "has_status_history"
    USER ||--o{ ORDER_STATUS_HISTORY : "updates_status"
    
    %% Payment System Relationships
    ORDER ||--o{ PAYMENT : "has_payments"
    USER ||--o{ PAYMENT : "makes_payments"
    PAYMENT ||--o{ REFUND : "has_refunds"
    ORDER ||--o{ REFUND : "has_refunds"
    USER ||--o{ REFUND : "requests_refunds"
    
    %% Coupon System Relationships
    USER ||--o{ COUPON : "creates_coupons"
    COUPON ||--o{ COUPON_USAGE : "has_usage"
    USER ||--o{ COUPON_USAGE : "uses_coupons"
    ORDER ||--o{ COUPON_USAGE : "applies_coupons"
    CATEGORY ||--o{ COUPON : "applicable_to_coupons"
    PRODUCT ||--o{ COUPON : "applicable_to_coupons"
    
    %% Review System Relationships
    PRODUCT ||--o{ REVIEW : "has_reviews"
    USER ||--o{ REVIEW : "writes_reviews"
    ORDER ||--o{ REVIEW : "generates_reviews"
    USER ||--o{ REVIEW : "sells_reviewed_products"
    REVIEW ||--o{ REVIEW_REPLY : "has_replies"
    USER ||--o{ REVIEW_REPLY : "writes_replies"
    
    %% Notification System Relationships
    USER ||--o{ NOTIFICATION : "receives_notifications"
    EMAIL_TEMPLATE ||--o{ EMAIL_LOG : "used_in_emails"
    USER ||--o{ EMAIL_LOG : "receives_emails"
    
    %% Analytics Relationships
    USER ||--o{ ANALYTICS_EVENT : "generates_events"
    PRODUCT ||--o{ ANALYTICS_EVENT : "tracked_in_events"
    ORDER ||--o{ ANALYTICS_EVENT : "tracked_in_events"
    PRODUCT ||--o{ PRODUCT_ANALYTICS : "has_analytics"
    USER ||--o{ USER_ANALYTICS : "has_analytics"
    
    %% Inventory Relationships
    PRODUCT ||--o{ INVENTORY_LOG : "has_inventory_logs"
    PRODUCT_VARIANT_OPTION ||--o{ INVENTORY_LOG : "has_inventory_logs"
    USER ||--o{ INVENTORY_LOG : "creates_inventory_logs"
    ORDER ||--o{ INVENTORY_LOG : "affects_inventory"
    PRODUCT ||--o{ STOCK_ALERT : "has_stock_alerts"
    USER ||--o{ STOCK_ALERT : "receives_stock_alerts"
    
    %% Admin System Relationships
    ADMIN_ROLE ||--o{ ADMIN_USER : "assigned_to_users"
    ADMIN_PERMISSION ||--o{ ADMIN_ROLE : "included_in_roles"
    ADMIN_USER ||--o{ SYSTEM_CONFIG : "updates_config"
    ADMIN_USER ||--o{ AUDIT_LOG : "performs_admin_actions"
    
    %% Shipping Relationships
    SHIPPING_METHOD ||--o{ SHIPPING_RATE : "has_rates"
    ORDER ||--o| SHIPPING_METHOD : "uses_shipping_method"
```

## 📊 Database Statistics & Constraints

### Primary Keys & Unique Constraints
- **Total Entities**: 35 entities
- **Primary Keys**: All entities have ObjectId _id
- **Unique Constraints**: 47 unique fields across entities
- **Foreign Key Relationships**: 89 relationships

### Index Recommendations
```sql
-- Performance Critical Indexes
CREATE INDEX idx_product_category_active ON products(categoryId, isActive, price);
CREATE INDEX idx_product_seller_active ON products(sellerId, isActive, createdAt);
CREATE INDEX idx_product_search ON products(name, description, tags);
CREATE INDEX idx_order_user_status ON orders(userId, status, createdAt);
CREATE INDEX idx_analytics_event_type ON analytics_events(eventType, createdAt);
CREATE INDEX idx_inventory_product_date ON inventory_logs(productId, createdAt);

-- Unique Constraints
CREATE UNIQUE INDEX idx_user_email ON users(email);
CREATE UNIQUE INDEX idx_product_sku ON products(sku);
CREATE UNIQUE INDEX idx_product_slug ON products(slug);
CREATE UNIQUE INDEX idx_order_number ON orders(orderNumber);
CREATE UNIQUE INDEX idx_coupon_code ON coupons(code);
```

### Data Volume Estimates
- **Users**: 100K+ records
- **Products**: 50K+ records  
- **Orders**: 500K+ records
- **Analytics Events**: 10M+ records
- **Inventory Logs**: 1M+ records
- **Notifications**: 5M+ records

### Storage Considerations
- **Total Collections**: 35 collections
- **Estimated DB Size**: 50-100GB for medium scale
- **Backup Strategy**: Daily full + hourly incremental
- **Sharding**: Consider sharding on userId for large scale
