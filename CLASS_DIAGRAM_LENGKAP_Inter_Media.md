# 🏗️ CLASS DIAGRAM LENGKAP - Inter Medi-A E-Commerce Platform
## Complete UML Class Diagram dengan Semua Relationships

```mermaid
classDiagram
    %% ========================================
    %% CORE USER MANAGEMENT CLASSES
    %% ========================================
    
    class User {
        -ObjectId _id
        -String name
        -String email
        -String password
        -String phone
        -UserRole role
        -String avatar
        -Boolean isVerified
        -String verificationToken
        -String resetPasswordToken
        -Date resetPasswordExpire
        -Object preferences
        -Date lastLoginAt
        -Date createdAt
        -Date updatedAt
        +register(userData) User
        +login(credentials) AuthToken
        +updateProfile(data) User
        +changePassword(oldPass, newPass) Boolean
        +resetPassword(token, newPass) Boolean
        +verifyEmail(token) Boolean
        +addAddress(addressData) Address
        +getOrders() Order[]
        +getWishlist() Wishlist
        +getCart() Cart
        +becomeseller(sellerInfo) SellerInfo
    }

    class Address {
        -ObjectId _id
        -ObjectId userId
        -AddressType type
        -String label
        -String recipientName
        -String phone
        -String address
        -String city
        -String province
        -String postalCode
        -String country
        -Boolean isDefault
        -Object coordinates
        -String instructions
        -Date createdAt
        -Date updatedAt
        +validate() Boolean
        +setAsDefault() Boolean
        +getFullAddress() String
        +calculateDistance(otherAddress) Number
    }

    class SellerInfo {
        -ObjectId userId
        -String storeName
        -String storeDescription
        -String storeLogo
        -String storeSlug
        -Boolean isVerified
        -Number rating
        -Number totalReviews
        -Number totalSales
        -Number totalRevenue
        -Date joinDate
        -Object businessInfo
        -Object bankInfo
        -String[] socialLinks
        -Object settings
        -Date createdAt
        -Date updatedAt
        +updateStoreInfo(data) SellerInfo
        +getProducts() Product[]
        +getOrders() Order[]
        +calculateRating() Number
        +getAnalytics() Object
        +updateBankInfo(bankData) Boolean
    }

    %% ========================================
    %% PRODUCT CATALOG CLASSES
    %% ========================================

    class Category {
        -ObjectId _id
        -String name
        -String slug
        -String description
        -String image
        -String icon
        -ObjectId parentId
        -Boolean isActive
        -Number sortOrder
        -Object seoMeta
        -Number productCount
        -Date createdAt
        -Date updatedAt
        +getChildren() Category[]
        +getParent() Category
        +getProducts() Product[]
        +updateProductCount() Number
        +generateSlug() String
        +isDescendantOf(category) Boolean
        +getAncestors() Category[]
        +getBreadcrumb() String[]
    }

    class Brand {
        -ObjectId _id
        -String name
        -String slug
        -String description
        -String logo
        -String website
        -Boolean isActive
        -Number productCount
        -Date createdAt
        -Date updatedAt
        +getProducts() Product[]
        +updateProductCount() Number
        +generateSlug() String
        +validate() Boolean
    }

    class Product {
        -ObjectId _id
        -String name
        -String slug
        -String description
        -String shortDescription
        -String sku
        -ObjectId categoryId
        -ObjectId sellerId
        -ObjectId brandId
        -Number price
        -Number comparePrice
        -Number costPrice
        -Number stock
        -Number lowStockThreshold
        -Number weight
        -Object dimensions
        -Boolean isActive
        -Boolean isFeatured
        -Boolean isDigital
        -Number rating
        -Number totalReviews
        -Number totalSold
        -Number viewCount
        -String[] tags
        -ProductCondition condition
        -String warranty
        -String seoTitle
        -String seoDescription
        -String[] seoKeywords
        -Object analytics
        -Date createdAt
        -Date updatedAt
        +updateStock(quantity) Boolean
        +calculateRating() Number
        +addReview(review) Review
        +getReviews() Review[]
        +getVariants() ProductVariant[]
        +getImages() ProductImage[]
        +getSpecifications() ProductSpecification[]
        +checkAvailability(quantity) Boolean
        +generateSKU() String
        +updatePrice(newPrice) Boolean
        +addToFeatured() Boolean
        +trackView(userId) Boolean
        +getRelatedProducts() Product[]
        +calculateShipping(address) Number
    }

    class ProductImage {
        -ObjectId _id
        -ObjectId productId
        -String url
        -String alt
        -Boolean isMain
        -Number sortOrder
        -String size
        -Date createdAt
        +setAsMain() Boolean
        +updateSortOrder(order) Boolean
        +delete() Boolean
        +getOptimizedUrl(size) String
    }

    class ProductVariant {
        -ObjectId _id
        -ObjectId productId
        -String name
        -ProductVariantOption[] options
        -Date createdAt
        +addOption(option) ProductVariantOption
        +removeOption(optionId) Boolean
        +getAvailableOptions() ProductVariantOption[]
    }

    class ProductVariantOption {
        -ObjectId _id
        -ObjectId variantId
        -String value
        -Number price
        -Number stock
        -String sku
        -String image
        -Boolean isActive
        -Date createdAt
        +updateStock(quantity) Boolean
        +checkAvailability() Boolean
        +calculatePrice() Number
    }

    class ProductSpecification {
        -ObjectId _id
        -ObjectId productId
        -String name
        -String value
        -String unit
        -Number sortOrder
        -Date createdAt
        +update(data) ProductSpecification
        +delete() Boolean
    }

    %% ========================================
    %% SHOPPING & CART CLASSES
    %% ========================================

    class Cart {
        -ObjectId _id
        -ObjectId userId
        -Number totalItems
        -Number totalPrice
        -Date expiresAt
        -String sessionId
        -Date createdAt
        -Date updatedAt
        +addItem(productId, quantity, variants) CartItem
        +removeItem(itemId) Boolean
        +updateItemQuantity(itemId, quantity) Boolean
        +clear() Boolean
        +calculateTotal() Number
        +getItems() CartItem[]
        +validateItems() Boolean
        +mergeCarts(otherCart) Boolean
        +applyDiscount(coupon) Number
        +getShippingCost() Number
        +checkout() Order
    }

    class CartItem {
        -ObjectId _id
        -ObjectId cartId
        -ObjectId productId
        -Number quantity
        -Number price
        -Object selectedVariants
        -String notes
        -Date addedAt
        -Date updatedAt
        +updateQuantity(quantity) Boolean
        +calculateSubtotal() Number
        +getProduct() Product
        +validateAvailability() Boolean
        +remove() Boolean
    }

    class Wishlist {
        -ObjectId _id
        -ObjectId userId
        -String name
        -String description
        -Boolean isPublic
        -Boolean isDefault
        -Number itemCount
        -Date createdAt
        -Date updatedAt
        +addItem(productId, notes) WishlistItem
        +removeItem(itemId) Boolean
        +getItems() WishlistItem[]
        +moveToCart(itemId) Boolean
        +share() String
        +makePublic() Boolean
        +makePrivate() Boolean
    }

    class WishlistItem {
        -ObjectId _id
        -ObjectId wishlistId
        -ObjectId productId
        -Number priority
        -String notes
        -Date addedAt
        +updatePriority(priority) Boolean
        +updateNotes(notes) Boolean
        +moveToCart() Boolean
        +getProduct() Product
        +remove() Boolean
    }

    %% ========================================
    %% ORDER MANAGEMENT CLASSES
    %% ========================================

    class Order {
        -ObjectId _id
        -String orderNumber
        -ObjectId userId
        -ObjectId sellerId
        -OrderStatus status
        -Number itemsPrice
        -Number taxPrice
        -Number shippingPrice
        -Number discountAmount
        -Number totalPrice
        -String currency
        -Boolean isPaid
        -Date paidAt
        -Boolean isDelivered
        -Date deliveredAt
        -String trackingNumber
        -String shippingCarrier
        -Object timeline
        -String customerNotes
        -String sellerNotes
        -String adminNotes
        -Date estimatedDelivery
        -Date createdAt
        -Date updatedAt
        +generateOrderNumber() String
        +addItem(productId, quantity, price) OrderItem
        +calculateTotal() Number
        +updateStatus(status, notes) Boolean
        +processPayment(paymentData) Payment
        +ship(trackingNumber, carrier) Boolean
        +deliver() Boolean
        +cancel(reason) Boolean
        +refund(amount, reason) Refund
        +getItems() OrderItem[]
        +getPayments() Payment[]
        +getStatusHistory() OrderStatusHistory[]
        +sendNotification(type) Boolean
        +generateInvoice() Object
        +trackShipment() Object
    }

    class OrderItem {
        -ObjectId _id
        -ObjectId orderId
        -ObjectId productId
        -ObjectId sellerId
        -String name
        -String sku
        -Number price
        -Number quantity
        -String image
        -Object selectedVariants
        -OrderItemStatus status
        -Number weight
        -Date createdAt
        +calculateSubtotal() Number
        +getProduct() Product
        +updateStatus(status) Boolean
        +canReview() Boolean
        +createReview(reviewData) Review
    }

    class OrderAddress {
        -ObjectId _id
        -ObjectId orderId
        -AddressType type
        -String recipientName
        -String phone
        -String address
        -String city
        -String province
        -String postalCode
        -String country
        -String instructions
        -Date createdAt
        +getFullAddress() String
        +validate() Boolean
    }

    class OrderStatusHistory {
        -ObjectId _id
        -ObjectId orderId
        -OrderStatus status
        -String notes
        -ObjectId updatedBy
        -Date timestamp
        +getUpdatedByUser() User
        +getStatusDisplay() String
    }

    %% ========================================
    %% PAYMENT SYSTEM CLASSES
    %% ========================================

    class Payment {
        -ObjectId _id
        -ObjectId orderId
        -ObjectId userId
        -PaymentMethod paymentMethod
        -String provider
        -String transactionId
        -String paymentId
        -Number amount
        -String currency
        -PaymentStatus status
        -Object providerResponse
        -Object metadata
        -Date processedAt
        -Date createdAt
        -Date updatedAt
        +process() Boolean
        +verify() Boolean
        +capture() Boolean
        +refund(amount, reason) Refund
        +getOrder() Order
        +getUser() User
        +updateStatus(status) Boolean
        +sendReceipt() Boolean
    }

    class Refund {
        -ObjectId _id
        -ObjectId orderId
        -ObjectId paymentId
        -ObjectId userId
        -String reason
        -Number amount
        -RefundStatus status
        -String refundId
        -Object providerResponse
        -String notes
        -Date processedAt
        -Date createdAt
        -Date updatedAt
        +process() Boolean
        +approve() Boolean
        +reject(reason) Boolean
        +getPayment() Payment
        +getOrder() Order
        +sendNotification() Boolean
    }

    %% ========================================
    %% COUPON SYSTEM CLASSES
    %% ========================================

    class Coupon {
        -ObjectId _id
        -String code
        -String name
        -String description
        -CouponType type
        -Number value
        -Number minOrderAmount
        -Number maxDiscount
        -Date startDate
        -Date endDate
        -Number usageLimit
        -Number usageLimitPerUser
        -Number usedCount
        -ObjectId[] applicableCategories
        -ObjectId[] applicableProducts
        -ObjectId[] excludedCategories
        -ObjectId[] excludedProducts
        -Boolean isActive
        -Boolean isPublic
        -ObjectId createdBy
        -Date createdAt
        -Date updatedAt
        +validate(userId, orderAmount) Boolean
        +calculateDiscount(orderAmount) Number
        +canUse(userId) Boolean
        +use(userId, orderId) CouponUsage
        +isExpired() Boolean
        +isValidForProducts(productIds) Boolean
        +getRemainingUses() Number
        +getUserUsageCount(userId) Number
    }

    class CouponUsage {
        -ObjectId _id
        -ObjectId couponId
        -ObjectId userId
        -ObjectId orderId
        -Number discountAmount
        -Date usedAt
        +getCoupon() Coupon
        +getUser() User
        +getOrder() Order
    }

    %% ========================================
    %% REVIEW SYSTEM CLASSES
    %% ========================================

    class Review {
        -ObjectId _id
        -ObjectId productId
        -ObjectId customerId
        -ObjectId orderId
        -ObjectId sellerId
        -Number rating
        -String title
        -String comment
        -String[] images
        -String[] videos
        -Boolean isVerifiedPurchase
        -Number helpfulVotes
        -ObjectId[] helpfulUsers
        -Boolean isApproved
        -Object moderationNotes
        -ReviewStatus status
        -Date createdAt
        -Date updatedAt
        +approve() Boolean
        +reject(reason) Boolean
        +addHelpfulVote(userId) Boolean
        +removeHelpfulVote(userId) Boolean
        +getProduct() Product
        +getCustomer() User
        +getOrder() Order
        +getReplies() ReviewReply[]
        +addReply(userId, reply) ReviewReply
        +canEdit() Boolean
        +update(data) Boolean
        +delete() Boolean
    }

    class ReviewReply {
        -ObjectId _id
        -ObjectId reviewId
        -ObjectId userId
        -UserType userType
        -String reply
        -Boolean isApproved
        -Date createdAt
        -Date updatedAt
        +approve() Boolean
        +getReview() Review
        +getUser() User
        +update(reply) Boolean
        +delete() Boolean
    }

    %% ========================================
    %% NOTIFICATION SYSTEM CLASSES
    %% ========================================

    class Notification {
        -ObjectId _id
        -ObjectId userId
        -NotificationType type
        -String title
        -String message
        -Object data
        -Boolean isRead
        -NotificationChannel channel
        -NotificationPriority priority
        -Date readAt
        -Date expiresAt
        -Date createdAt
        -Date updatedAt
        +markAsRead() Boolean
        +markAsUnread() Boolean
        +isExpired() Boolean
        +getUser() User
        +send() Boolean
        +delete() Boolean
    }

    class EmailTemplate {
        -ObjectId _id
        -String name
        -String subject
        -String htmlContent
        -String textContent
        -Object variables
        -Boolean isActive
        -String category
        -Date createdAt
        -Date updatedAt
        +render(data) Object
        +validate() Boolean
        +preview(data) String
        +clone() EmailTemplate
    }

    class EmailLog {
        -ObjectId _id
        -ObjectId userId
        -String templateName
        -String recipient
        -String subject
        -EmailStatus status
        -Object metadata
        -String errorMessage
        -Date sentAt
        -Date deliveredAt
        -Date openedAt
        -Date createdAt
        +markAsDelivered() Boolean
        +markAsOpened() Boolean
        +markAsFailed(error) Boolean
        +getUser() User
        +resend() Boolean
    }

    %% ========================================
    %% ANALYTICS CLASSES
    %% ========================================

    class AnalyticsEvent {
        -ObjectId _id
        -EventType eventType
        -ObjectId userId
        -ObjectId productId
        -ObjectId orderId
        -String sessionId
        -Object eventData
        -String userAgent
        -String ipAddress
        -Object location
        -String referrer
        -String utm_source
        -String utm_medium
        -String utm_campaign
        -Date createdAt
        +getUser() User
        +getProduct() Product
        +getOrder() Order
        +process() Boolean
        +aggregate() Object
    }

    class ProductAnalytics {
        -ObjectId _id
        -ObjectId productId
        -Date date
        -Number views
        -Number addToCarts
        -Number purchases
        -Number revenue
        -Number conversionRate
        -Object hourlyData
        -Date createdAt
        +getProduct() Product
        +calculateConversionRate() Number
        +getHourlyBreakdown() Object
        +compare(otherDate) Object
    }

    class UserAnalytics {
        -ObjectId _id
        -ObjectId userId
        -Date date
        -Number sessions
        -Number pageViews
        -Number timeSpent
        -Number orders
        -Number revenue
        -Object behaviorData
        -Date createdAt
        +getUser() User
        +calculateAverageOrderValue() Number
        +getLifetimeValue() Number
        +getSegment() String
        +compare(otherDate) Object
    }

    %% ========================================
    %% INVENTORY CLASSES
    %% ========================================

    class InventoryLog {
        -ObjectId _id
        -ObjectId productId
        -ObjectId variantId
        -InventoryType type
        -Number quantity
        -Number previousStock
        -Number newStock
        -String reason
        -ObjectId userId
        -ObjectId orderId
        -Object metadata
        -String notes
        -Date createdAt
        +getProduct() Product
        +getVariant() ProductVariantOption
        +getUser() User
        +getOrder() Order
        +validate() Boolean
    }

    class StockAlert {
        -ObjectId _id
        -ObjectId productId
        -ObjectId sellerId
        -AlertType type
        -Number currentStock
        -Number threshold
        -Boolean isResolved
        -Date resolvedAt
        -String notes
        -Date createdAt
        -Date updatedAt
        +resolve(notes) Boolean
        +getProduct() Product
        +getSeller() User
        +sendNotification() Boolean
    }

    %% ========================================
    %% ADMIN SYSTEM CLASSES
    %% ========================================

    class AdminUser {
        -ObjectId _id
        -String username
        -String email
        -String password
        -String firstName
        -String lastName
        -AdminRole role
        -String[] permissions
        -Boolean isActive
        -Date lastLoginAt
        -String lastLoginIp
        -Object preferences
        -Date createdAt
        -Date updatedAt
        +login(credentials) AuthToken
        +hasPermission(permission) Boolean
        +updateProfile(data) AdminUser
        +changePassword(oldPass, newPass) Boolean
        +getAuditLogs() AuditLog[]
        +performAction(action, resource) Boolean
    }

    class AdminPermission {
        -ObjectId _id
        -String name
        -String description
        -String module
        -String action
        -Boolean isActive
        -Date createdAt
        +validate() Boolean
        +getUsers() AdminUser[]
    }

    class AdminRole {
        -ObjectId _id
        -String name
        -String description
        -ObjectId[] permissions
        -Boolean isActive
        -Date createdAt
        -Date updatedAt
        +addPermission(permissionId) Boolean
        +removePermission(permissionId) Boolean
        +getPermissions() AdminPermission[]
        +getUsers() AdminUser[]
        +hasPermission(permission) Boolean
    }

    class SystemConfig {
        -ObjectId _id
        -String key
        -String value
        -ConfigType type
        -String description
        -Boolean isPublic
        -String category
        -Object validation
        -Date updatedAt
        -ObjectId updatedBy
        +getValue() Any
        +setValue(value) Boolean
        +validate(value) Boolean
        +getUpdatedBy() AdminUser
        +reset() Boolean
    }

    class AuditLog {
        -ObjectId _id
        -ObjectId userId
        -UserType userType
        -String action
        -String resource
        -ObjectId resourceId
        -Object oldData
        -Object newData
        -String ipAddress
        -String userAgent
        -Date createdAt
        +getUser() User
        +getResource() Object
        +getDiff() Object
        +export() Object
    }

    %% ========================================
    %% SHIPPING CLASSES
    %% ========================================

    class ShippingMethod {
        -ObjectId _id
        -String name
        -String description
        -String carrier
        -ShippingType type
        -Number baseCost
        -Number weightMultiplier
        -Number freeShippingThreshold
        -Boolean isActive
        -String[] availableRegions
        -Number estimatedDays
        -Date createdAt
        -Date updatedAt
        +calculateCost(weight, region) Number
        +isAvailableForRegion(region) Boolean
        +getRates() ShippingRate[]
        +getEstimatedDelivery(region) Date
    }

    class ShippingRate {
        -ObjectId _id
        -ObjectId shippingMethodId
        -String region
        -Number minWeight
        -Number maxWeight
        -Number cost
        -Date createdAt
        +getShippingMethod() ShippingMethod
        +isApplicable(weight) Boolean
    }

    %% ========================================
    %% ENUMS
    %% ========================================

    class UserRole {
        <<enumeration>>
        CUSTOMER
        SELLER
        ADMIN
    }

    class AddressType {
        <<enumeration>>
        HOME
        OFFICE
        OTHER
    }

    class ProductCondition {
        <<enumeration>>
        NEW
        USED
        REFURBISHED
    }

    class OrderStatus {
        <<enumeration>>
        PENDING
        PROCESSING
        SHIPPED
        DELIVERED
        CANCELLED
        REFUNDED
    }

    class OrderItemStatus {
        <<enumeration>>
        PENDING
        PROCESSING
        SHIPPED
        DELIVERED
        CANCELLED
    }

    class PaymentMethod {
        <<enumeration>>
        CREDIT_CARD
        DEBIT_CARD
        BANK_TRANSFER
        EWALLET
        COD
    }

    class PaymentStatus {
        <<enumeration>>
        PENDING
        PROCESSING
        COMPLETED
        FAILED
        CANCELLED
        REFUNDED
    }

    class RefundStatus {
        <<enumeration>>
        PENDING
        PROCESSING
        COMPLETED
        REJECTED
    }

    class CouponType {
        <<enumeration>>
        PERCENTAGE
        FIXED_AMOUNT
        FREE_SHIPPING
    }

    class ReviewStatus {
        <<enumeration>>
        PENDING
        APPROVED
        REJECTED
    }

    class NotificationType {
        <<enumeration>>
        ORDER
        PAYMENT
        SHIPPING
        PROMOTION
        SYSTEM
    }

    class NotificationChannel {
        <<enumeration>>
        EMAIL
        PUSH
        SMS
        IN_APP
    }

    class NotificationPriority {
        <<enumeration>>
        LOW
        MEDIUM
        HIGH
        URGENT
    }

    class EventType {
        <<enumeration>>
        PAGE_VIEW
        PRODUCT_VIEW
        ADD_TO_CART
        PURCHASE
        SEARCH
    }

    class InventoryType {
        <<enumeration>>
        PURCHASE
        SALE
        ADJUSTMENT
        RETURN
        DAMAGE
        TRANSFER
    }

    class AlertType {
        <<enumeration>>
        LOW_STOCK
        OUT_OF_STOCK
        OVERSTOCK
    }

    class AdminRole {
        <<enumeration>>
        SUPER_ADMIN
        ADMIN
        MODERATOR
        SUPPORT
    }

    class ConfigType {
        <<enumeration>>
        STRING
        NUMBER
        BOOLEAN
        JSON
        ARRAY
    }

    class EmailStatus {
        <<enumeration>>
        SENT
        FAILED
        BOUNCED
        DELIVERED
        OPENED
        CLICKED
    }

    class ShippingType {
        <<enumeration>>
        STANDARD
        EXPRESS
        OVERNIGHT
        PICKUP
    }

    %% ========================================
    %% RELATIONSHIPS
    %% ========================================

    %% User Management Relationships
    User ||--o{ Address : "has"
    User ||--o| SellerInfo : "has"
    User ||--o{ AuditLog : "performs"

    %% Product Catalog Relationships
    Category ||--o{ Category : "parent-child"
    Category ||--o{ Product : "contains"
    Brand ||--o{ Product : "manufactures"
    Product ||--o{ ProductImage : "has"
    Product ||--o{ ProductVariant : "has"
    ProductVariant ||--o{ ProductVariantOption : "has"
    Product ||--o{ ProductSpecification : "has"
    User ||--o{ Product : "sells"

    %% Shopping Relationships
    User ||--o| Cart : "has"
    Cart ||--o{ CartItem : "contains"
    Product ||--o{ CartItem : "added_to"
    User ||--o{ Wishlist : "has"
    Wishlist ||--o{ WishlistItem : "contains"
    Product ||--o{ WishlistItem : "added_to"

    %% Order Relationships
    User ||--o{ Order : "places"
    User ||--o{ Order : "sells"
    Order ||--o{ OrderItem : "contains"
    Product ||--o{ OrderItem : "ordered_as"
    Order ||--o{ OrderAddress : "has"
    Order ||--o{ OrderStatusHistory : "tracks"
    User ||--o{ OrderStatusHistory : "updates"

    %% Payment Relationships
    Order ||--o{ Payment : "paid_by"
    User ||--o{ Payment : "makes"
    Payment ||--o{ Refund : "refunded_by"
    Order ||--o{ Refund : "refunded"
    User ||--o{ Refund : "requests"

    %% Coupon Relationships
    User ||--o{ Coupon : "creates"
    Coupon ||--o{ CouponUsage : "used_in"
    User ||--o{ CouponUsage : "uses"
    Order ||--o{ CouponUsage : "applies"

    %% Review Relationships
    Product ||--o{ Review : "reviewed_by"
    User ||--o{ Review : "writes"
    Order ||--o{ Review : "generates"
    Review ||--o{ ReviewReply : "replied_by"
    User ||--o{ ReviewReply : "writes"

    %% Notification Relationships
    User ||--o{ Notification : "receives"
    EmailTemplate ||--o{ EmailLog : "used_in"
    User ||--o{ EmailLog : "receives"

    %% Analytics Relationships
    User ||--o{ AnalyticsEvent : "generates"
    Product ||--o{ AnalyticsEvent : "tracked_in"
    Order ||--o{ AnalyticsEvent : "tracked_in"
    Product ||--o{ ProductAnalytics : "analyzed_by"
    User ||--o{ UserAnalytics : "analyzed_by"

    %% Inventory Relationships
    Product ||--o{ InventoryLog : "tracked_by"
    ProductVariantOption ||--o{ InventoryLog : "tracked_by"
    User ||--o{ InventoryLog : "created_by"
    Order ||--o{ InventoryLog : "affects"
    Product ||--o{ StockAlert : "alerts_for"
    User ||--o{ StockAlert : "notified_by"

    %% Admin Relationships
    AdminRole ||--o{ AdminUser : "assigned_to"
    AdminPermission ||--o{ AdminRole : "included_in"
    AdminUser ||--o{ SystemConfig : "updates"
    AdminUser ||--o{ AuditLog : "performs"

    %% Shipping Relationships
    ShippingMethod ||--o{ ShippingRate : "has"
    Order ||--o| ShippingMethod : "uses"

    %% Enum Relationships
    User ||--|| UserRole : "has"
    Address ||--|| AddressType : "has"
    Product ||--|| ProductCondition : "has"
    Order ||--|| OrderStatus : "has"
    OrderItem ||--|| OrderItemStatus : "has"
    Payment ||--|| PaymentMethod : "uses"
    Payment ||--|| PaymentStatus : "has"
    Refund ||--|| RefundStatus : "has"
    Coupon ||--|| CouponType : "has"
    Review ||--|| ReviewStatus : "has"
    Notification ||--|| NotificationType : "has"
    Notification ||--|| NotificationChannel : "uses"
    Notification ||--|| NotificationPriority : "has"
    AnalyticsEvent ||--|| EventType : "has"
    InventoryLog ||--|| InventoryType : "has"
    StockAlert ||--|| AlertType : "has"
    AdminUser ||--|| AdminRole : "has"
    SystemConfig ||--|| ConfigType : "has"
    EmailLog ||--|| EmailStatus : "has"
    ShippingMethod ||--|| ShippingType : "has"
```

## 🏗️ Class Diagram Architecture Summary

### 📊 Statistics
- **Total Classes**: 35 main classes + 18 enums = 53 total
- **Relationships**: 89 associations
- **Inheritance**: Enum-based type safety
- **Composition**: Strong object relationships

### 🔧 Design Patterns Used
- **Repository Pattern**: Data access abstraction
- **Factory Pattern**: Object creation (Order, Payment)
- **Observer Pattern**: Notification system
- **Strategy Pattern**: Payment methods, shipping
- **Command Pattern**: Audit logging
- **Singleton Pattern**: System configuration

### 🎯 Key Features
- **Type Safety**: Comprehensive enum usage
- **Data Integrity**: Strong relationships and validation
- **Scalability**: Modular design with clear separation
- **Maintainability**: Single responsibility principle
- **Extensibility**: Easy to add new features

### 🔐 Security Features
- **Authentication**: User/Admin login systems
- **Authorization**: Role-based permissions
- **Audit Trail**: Complete action logging
- **Data Validation**: Input validation methods
- **Encryption**: Password hashing, token management
