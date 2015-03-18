/**
 * {license_notice}
 *
 * @copyright   {copyright}
 * @license     {license_link}
 */
/*jshint browser:true jquery:true*/
/*global alert*/
define(
    [
        'jquery',
        'mage/storage',
        'Magento_Checkout/js/model/addresslist',
        './customer/address'
    ],
    function($, storage, addressList, address) {
        var isLoaded = false;
        var isLoggedIn = true;
        return {
            customerData: [],
            load: function () {
                if (!isLoaded && this.isLoggedIn()) {
                    this.customerData = window.customerData;
                    $.each(this.customerData.addresses, function(key, item) {
                        addressList.add(new address(item));
                    });
                    isLoaded = true;
                }
            },
            isLoggedIn: function() {
                return isLoggedIn;
            },
            setIsLoggedIn: function (flag) {
                isLoggedIn = flag;
            },
            getBillingAddressList: function () {
                return this.customerData.addresses;
            },
            getShippingAddressList: function () {
                return addressList.getAddresses();
            }
        }
    }
);
