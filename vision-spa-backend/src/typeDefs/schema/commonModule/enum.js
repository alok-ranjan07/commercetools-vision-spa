const enums = `
enum AnonymousCartSignInMode{
    MergeWithExistingCustomerCart
    UseAsNewActiveCustomerCart
}

enum CartState{
    "The cart can be updated and ordered. It is the default state."
    Active
    "The cart is frozen. The cart is ready for checkout and a few update actions are not allowed."
    Frozen
    "Anonymous cart whose content was merged into a customers cart on signin. No further operations on the cart are allowed."
    Merged
    "The cart was ordered. No further operations on the cart are allowed."
    Ordered
}

enum ShippingMode{
    "Allows multiple shipping methods for the cart with their respective shipping addresses"
    Multiple
    "Allows only one shipping method and shipping address for the cart"
    Single
}

enum BusinessUnitAssociateMode{
    Explicit
    ExplicitAndFromParent
}

enum Permission{
    AcceptMyQuotes
    AcceptOthersQuotes
    AddChildUnits
    CreateApprovalRules
    CreateMyCarts
    CreateMyOrdersFromMyCarts
    CreateMyOrdersFromMyQuotes
    CreateMyQuoteRequestsFromMyCarts
    CreateOrdersFromOthersCarts
    CreateOrdersFromOthersQuotes
    CreateOthersCarts
    CreateQuoteRequestsFromOthersCarts
    DeclineMyQuotes
    DeclineOthersQuotes
    DeleteMyCarts
    DeleteOthersCarts
    ReassignMyQuotes
    ReassignOthersQuotes
    RenegotiateMyQuotes
    RenegotiateOthersQuotes
    UpdateApprovalFlows
    UpdateApprovalRules
    UpdateAssociates
    UpdateBusinessUnitDetails
    UpdateMyCarts
    UpdateMyOrders
    UpdateMyQuoteRequests
    UpdateOthersCarts
    UpdateOthersOrders
    UpdateOthersQuoteRequests
    UpdateParentUnit
    ViewMyCarts
    ViewMyOrders
    ViewMyQuoteRequests
    ViewMyQuotes
    ViewOthersCarts
    ViewOthersOrders
    ViewOthersQuoteRequests
    ViewOthersQuotes   
}

enum AssociateInheritanceMode{
    Disabled
    Enabled
}

enum AuthenticationMode{
    ExternalAuth
    Password
}

enum BusinessUnitStatus{
    Active
    Inactive
}

enum BusinessUnitType{
    Company
    Division
}

enum CartOrigin{
    Customer
    Merchant
    Quote
}

enum TransactionType{
    Authorization
    CancelAuthorization
    Charge
    Chargeback
    Refund
}

enum TransactionState{
    Failure
    Initial
    Pending
    Success
}

enum DiscountCodeState{
    ApplicationStoppedByPreviousDiscount
    DoesNotMatchCart
    MatchesCart
    MaxApplicationReached
    NotActive
    NotValid
}

enum ShippingMethodState{
    DoesNotMatchCart
    MatchesCart
}

enum CustomLineItemPriceMode{
    External
    Standard
}

enum LineItemMode{
    GiftLineItem
    Standard
}

enum InventoryMode{
    None
    ReserveOnOrder
    TrackOnly
}

enum TaxMode{
    Disabled
    External
    ExternalAmount
    Platform
}

enum RoundingMode{
    HalfDown
    HalfEven
    HalfUp
}

enum TaxCalculationMode{
    LineItemLevel
    UnitPriceLevel
}
enum LineItemPriceMode{
    ExternalPrice
    ExternalTotal
    Platform
}

enum StackingMode{
    Stacking
    StopAfterThisDiscount
}

enum AttributionSource{
    Export
    Import
}

enum AuthenticationMode{
    ExternalAuth
    Password
}

enum TextInputHint{
    SingleLine
    MultiLine
}

enum ChannelRole{
    InventorySupply
    ProductDistribution
    OrderImport
    Primary
}

enum ProductSelectionMode{
    Individual
    IndividualExclusion
}

enum AttributeConstraint{
    None
    Unique
    CombinationUnique
    SameForAll
}

enum PriceMode{
    Embedded
    Standalone
}

enum StateType{
    LineItemState
    OrderState
    PaymentState
    ProductState
    QuoteRequestState
    QuoteState
    ReviewState
    StagedQuoteState
}

enum StateRole{
    Return
    ReviewIncludedInStatistics
}
`;
export default enums;
