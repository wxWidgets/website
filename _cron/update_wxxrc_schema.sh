#!/bin/sh

# This script relies on WX_SITE_DIR being set and wxWidgets sources
# being available in its wxWidgets subdirectory.

SOURCE_DIR="$WX_SITE_DIR/wxWidgets/misc/schema"
DESTINATION="$WX_SITE_DIR/schemas/"

mkdir -p "$DESTINATION"
cp "$SOURCE_DIR/xrc_schema.rnc" "$SOURCE_DIR/xrc_schema_builtin_only.rnc" "$DESTINATION"
cp "$SOURCE_DIR/xrc_schema.rnc" "$WX_SITE_DIR/wxxrc"
cp "$SOURCE_DIR/xrc_schema_builtin_only.rnc" "$WX_SITE_DIR/wxxrc_std"
