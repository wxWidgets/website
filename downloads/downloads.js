'use strict'

// Show download statistics
$(document).ready(function () {
    $.ajax({
        url: "downloads.json",
        cache: true,
        success: function (data, text_status, xhr) {
            // Enumerate all releases
            for (var rel_index = 0; rel_index < data.length; ++rel_index) {
                var rel_data = data[rel_index];

                // Try to find a DOM element for each element
                for (var index = 0; index < rel_data.assets.length; ++index) {
                    var asset = rel_data.assets[index];

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
        }
    });

});
