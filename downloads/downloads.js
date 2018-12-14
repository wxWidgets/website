'use strict'

// Show download statistics
$(document).ready(function () {
    // The array wxdl_releases is initialized from the /downloads/index.md
    // it is based on /_data/releases.yml

    // Enumerate all releases
    for (var rel_index = 0; rel_index < wxdl_releases.length; ++rel_index) {
        // Download release info from github
        var info_url =
            "https://api.github.com/repos/wxWidgets/wxWidgets/releases/tags/v" +
            wxdl_releases[rel_index].version;

        $.ajax({
            url: info_url,
            cache: true,
            success: function (data, text_status, xhr) {
                // Try to find a DOM element for each element
                for (var index = 0; index < data.assets.length; ++index) {
                    var asset = data.assets[index];

                    // Create a tooltip for each asset
                    $('.wxdl_' + asset.id).each(function (index, elem) {
                        $(elem).tooltip({
                            title: Math.ceil(asset.size / 1024 / 1024) + " MiB<br>"
                                + asset.download_count.toLocaleString() + " downloads",
                            html: true,
                            placement: "right"
                        });
                    });
                }

            }
        });
    }

});
