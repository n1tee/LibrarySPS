(function() {
    "use strict";

    function getScriptUrl(re) {
        var scripts = document.getElementsByTagName('script'),
            element,
            src;

        for (var i = 0; i < scripts.length; i++) {
            element = scripts[i];

            src = element.getAttribute ?
                element.getAttribute('src') : el.src;

            if (src && re.test(src)) {
                return src;
            }
        }
        return null;
    }

    function getQueryParameters(query) {

        // Split the query string on &amp;, with fallback to legacy &
        var args = query.search('&amp;') != -1 ? query.split('&amp;') : query.split('&'),
        params = {},
        pair,
        key,
        value;

        function decode(string) {
            return decodeURIComponent(string || "")
                .replace('+', ' ');
        }

        for (var i = 0; i < args.length; i++) {
            pair  = args[i].split('=');
            key   = decode(pair.shift());
            value = pair ? pair[0] : null;

            params[key] = value;
        }
        return params;
    };

    function parseCssColor(color) {
        if (color && color.match(/(^[0-9a-f]{3}$)|(^[0-9a-f]{6}$)/i)) {
            return '%23' + color
        } else {
            return color
        }
    }

    function escape(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function Widget() {
        var url = getScriptUrl(/^((http|https):)?\/\/static.resmio.com\/static\/de\/widget\.js/);
        var params = getQueryParameters(url.replace(/^.*\#/, ''));
        if (!params.id) {
            if(window.console)
              console.log('missing id for resmio widget');
            return;
        }
        var id = params.id;
        var resourceGroup = params.resourceGroup || '';
        var resourceGroupName = params.resourceGroupName ? escape(params.resourceGroupName) : '';
        var backgroundColor = parseCssColor(params.backgroundColor) || "%23fff";
        var color = parseCssColor(params.color) || '';
        var linkBackgroundColor = parseCssColor(params.linkBackgroundColor) || '';
        var newsletterSubscribe = params.newsletterSubscribe || '';
        var newsletterSignup = params.newsletterSignup || '';
        var name = params.name || '';
        var email = params.email || '';
        var phone = params.phone || '';
        var comment = params.comment ? escape(params.comment) : '';

        var host = window.location.hostname;

        var width = params.width || "330px";
        var height = params.height || "460px";
        var nextAvailability = params.nextAvailability || '';

        var fontSize = params.fontSize || '';

        var style = params.style || '';
        var borderRadius = params.borderRadius || '';
        var showLogo = params.showLogo || '';
        var disableBranding = params.disableBranding || '';
        var preview = params.preview || '';
        var date = params.date || '';

        var output_id = 'resmio-' + id;
        var out = '<iframe src="https://app.resmio.com/'
                  + params.id +
                  '/widget?source=' + host
                  + '&amp;resourceGroup=' + resourceGroup
                  + '&amp;resourceGroupName=' + resourceGroupName
                  + '&amp;backgroundColor=' + backgroundColor
                  + '&amp;color=' + color
                  + '&amp;linkBackgroundColor=' + linkBackgroundColor
                  + '&amp;newsletterSubscribe=' + newsletterSubscribe
                  + '&amp;newsletterSignup=' + newsletterSignup
                  + '&amp;name=' + name
                  + '&amp;email=' + email
                  + '&amp;phone=' + phone
                  + '&amp;comment=' + comment
                  + '&amp;nextAvailability=' + nextAvailability
                  + '&amp;style=' + style
                  + '&amp;borderRadius=' + borderRadius
                  + '&amp;showLogo=' + showLogo
                  + '&amp;disableBranding=' + disableBranding
                  + '&amp;preview=' + preview
                  + '&amp;fontSize=' + fontSize
                  + '&amp;date=' + date
                  + '" width="' + width
                  + '" height="' + height
                  + '" style="border-radius:' + borderRadius + 'px'
                  + ';" frameborder="0"><p>Your browser does not support iframes.</p></iframe>'
        document.getElementById(output_id).innerHTML = out;
    }
    new Widget();

})();
