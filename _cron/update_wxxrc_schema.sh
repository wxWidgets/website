#!/bin/sh

# Set WX_SITE_DIR before running this script.

SOURCE="https://raw.githubusercontent.com/wxWidgets/wxWidgets/master/misc/schema"
DESTINATION="$WX_SITE_DIR/schemas/"

mkdir -p "$DESTINATION"
cd "$DESTINATION"
curl -O "$SOURCE/xrc_schema.rnc"
curl -O "$SOURCE/xrc_schema_builtin_only.rnc"

