var viewport = (window || this).viewport || {};

viewport.wikihome = (function () {
    "use strict";

    var LOGO_SELECTOR = ".icon-logo";
    var SKIP_TO_CONTENT_BUTTON_SELECTOR = "#skip-to-content";

    /**
     * Common parameters.
     */
    var params = {
        baseUrl:         "",
        pageUrl:         "",
        pageId:          "",
        spaceKey:        "",
        spaceName:       "",
        lang:            "",
        isError:         "",
        isAuthenticated: "",
        isMobileDevice:  "",
        remoteUser:      "",
        themeBaseUrl:    ""
    };

    /**
     * Sets common parameters.
     */
    var setParams = function () {
        params = {
            baserUrl:        $('meta[name=base-url]').attr("content"),
            pageUrl:         $('meta[name=page-url]').attr("content"),
            pageId:          $('meta[name=page-id]').attr("content"),
            spaceKey:        $('meta[name=space-key]').attr("content"),
            spaceName:       $('meta[name=space-name]').attr("content"),
            lang:            $('meta[name=lang]').attr("content"),
            isError:         $('meta[name=is-error]').attr("content"),
            isAuthenticated: $('meta[name=is-authenticated]').attr("content"),
            isMobileDevice:  $('meta[name=is-mobile-device]').attr("content"),
            remoteUser:      $('meta[name=remote-user]').attr("content"),
            themeBaseUrl:    $('meta[name=theme-base-url]').attr("content")
        }
    };

    /**
     * Detects high-contrast mode and applies CSS classes for styling.
     */
    var detectHighContrastMode = function () {
        var div = document.createElement("div");
        div.style.cssText = "border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;" + "background-image: url(\"" + params.themeBaseUrl + "/assets/img/hc.png\");";
        document.body.appendChild(div);

        var cssStyle = document.defaultView.getComputedStyle(div, null);
        var img = cssStyle.backgroundImage;

        if (cssStyle.borderTopColor == cssStyle.borderRightColor || img && (img == "none" || img == "url(invalid-url:)" )) {
            $("body").addClass("high-contrast-mode");
        }
    };

    var mobileMenu = (function () {
        var BLANKET = "#mobile-blanket";
        var MENU = "#mobile-menu";
        var MENU_EXPANDER = "#mobile-menu-expander";
        var MENU_CLOSE_BTN = "#menu-close-btn";


        var showMenu = function (menu, blanket) {
            $("body").addClass("mobile-menu-expanded");
        };

        var hideMenu = function (menu, blanket) {
            $("body").removeClass("mobile-menu-expanded");
        };

        var init = function () {
            var menu = $(MENU);
            var blanket = $(BLANKET);

            $(MENU_EXPANDER).click(function (e) {
                e.preventDefault();
                showMenu(menu, blanket);
            });

            menu.find(MENU_CLOSE_BTN).click(function(e){
                e.preventDefault();
                hideMenu(menu, blanket);
            });
        };

        return {
            "init": init
        }

    })();

    /**
     * Initializes and populates the product drop-down.
     */
    var productList = (function () {

        /**
         * REST endpoint for loading a list of products.
         * @type {string}
         */
        var PRODUCT_LIST_RESOURCE = "/rest/ca/wiki-platform/1.0/products/list?";
        var PRODUCT_LIST_SELECTOR = "#product-select";
        var LOADING_ATTR = "data-placeholder-loading";
        var LOADED_ATTR = "data-placeholder-loaded";

        /**
         * Options for the select2 drop-down.
         * @type {{}}
         */
        var productListOptions = {};

        var productSelect = null;

        /**
         * Populates the select with a list products.
         * @param fieldName Property name from a REST JSON response to use for labels in the select.
         */
        /*var populateProductList = function (fieldName) {
            $.get(updateBaseUrl(params.baserUrl) + PRODUCT_LIST_RESOURCE + params.remoteUser, function (response) {
                    productListOptions.placeholder = productSelect.attr(LOADED_ATTR);
                    productListOptions.data = getDataset(response, fieldName);

                    productSelect.select2(productListOptions);
                    productSelect.prop('disabled', false);

                    registerChangeEvent(productSelect);
                }
            );
        };*/

        /**
         * Updates base URL to use the correct protocol.
         * @param baseUrl Base URL.
         * @returns URL as string.
         */
        var updateBaseUrl = function (baseUrl) {
            if (baseUrl.indexOf("https:") != -1 && window.location.protocol === "https:") {
                return baseUrl;
            }
            if (baseUrl.indexOf("http:") != -1 && window.location.protocol === "https:") {
                return baseUrl.replace("http:", window.location.protocol);
            }

            if (baseUrl.indexOf("https:") != -1 && window.location.protocol === "http:") {
                return baseUrl.replace("https:", window.location.protocol);
            }

            return baseUrl;
        };

        /**
         * Register a change event for the select2 component.
         */
        var registerChangeEvent = function () {
            productSelect.change(function () {
                if (productSelect.val().length > 0) {
                    window.location.href = params.baserUrl + '/display/' + productSelect.val();
                }
            });
        };

        /**
         * Creates a data set to bind to the select. It processes JSON data in a custom format and creates an object in
         * standardized format expected by select2. The object is enriched with additional properties.
         *
         * Required properties:
         * id, text
         *
         * Additional properties:
         * description
         *
         * @param data Data to process.
         * @param fieldName Property name from a REST JSON response to use for labels in the select.
         * @returns {Array}
         */
        var getDataset = function (data, fieldName) {
            var dataset = [];
            $.each(data, function () {
                var item = {
                    id:          this.key,
                    text:        this[fieldName],
                    description: this.description
                };

                dataset.push(item);
            });
            return dataset;
        };

        /**
         * Determines whether an item matches the search term. The function implements a custom matcher
         * that operates on a custom description property.
         * @param parameters Parameters.
         * @param item Item to examine.
         * @returns Item.
         */
        var matchData = function (parameters, item) {
            if ($.trim(parameters.term) === '') {
                return item;
            }

            if ($.trim(item.text) === '' && $.trim(item.description) === '') {
                return null;
            }

            if (item.text.toLowerCase().indexOf(parameters.term.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(parameters.term.toLowerCase()) > -1) {
                return item;
            }

            return null;
        };

        /**
         * Formats an item in the drop-down.
         * @param result HTML string.
         */
        var formatResult = function (result) {
            if (result.loading) return result.text;

            var html = '<div class="product-name">' + result.text + '</div>';

            if (result.description.length > 0) {
                html = html + '<div class="product-description">' + result.description + '</div>';
            }

            return html;
        };

        /**
         * Sets select2 options.
         */
        var setOptions = function () {
            productListOptions = {
                placeholder:    productSelect.attr(LOADING_ATTR),
                enable:         true,
                data:           [],
                allowClear:     true,
                templateResult: formatResult,
                matcher:        matchData,
                escapeMarkup:   function (m) {
                    return m;
                },
                theme:          "bootstrap"
            };
        };

        /**
         * Opens the product select and puts the focus in the input field.
         */
        var open = function () {
            productSelect.select2("open");
        };

        /**
         * Initializes the product drop-down.
         */
        var initProductList = function () {
            productSelect = $(PRODUCT_LIST_SELECTOR);
            var productNameField = productSelect.attr('data-product-name-field');

            setOptions();

            productSelect.select2(productListOptions);
            productSelect.prop('disabled', true);

            /*populateProductList(productNameField);*/
        };

        return {
            "load": initProductList,
            "open": open
        }

    })();

    /**
     * Controls an expandable panel.
     */
    var readMore = (function () {
        var READ_MORE_SELECTOR = ".read-more";
        var CONTENT_PANEL_SELECTOR = ".ann-wrapper";

        /**
         * Expands a panel and hides the expand link.
         * @param panel Panel to expand.
         * @param link Link to hide.
         */
        var expandPanel = function (panel, link) {
            panel.animate({
                height:     "100%",
                "overflow": "auto"
            }, 'slow');

            panel.addClass("expanded");
            panel.removeClass("collapsed");

            link.attr("aria-expanded", true);
            link.hide();
        };

        /**
         * Initializes the read link module.
         */
        var init = function () {

            $(READ_MORE_SELECTOR).click(function (e) {
                var link = $(this);
                expandPanel(link.parent().prev(CONTENT_PANEL_SELECTOR), link);
                e.preventDefault();
            });

        };

        return {
            "init": init
        }

    })();

    /**
     * Initializes the module.
     */
    var init = function () {
        setParams();
        detectHighContrastMode();

        $(SKIP_TO_CONTENT_BUTTON_SELECTOR).click(function (e) {
            e.preventDefault();
            productList.open();
        });

        productList.load();
        readMore.init();
        mobileMenu.init();

        $(LOGO_SELECTOR).tooltip();
    };

    return {
        "init":   init,
        "params": params
    }

})();

$(document).ready(function () {
    viewport.wikihome.init();
});

