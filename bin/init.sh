#!/bin/sh

cat << EOF > .prettierrc.js
module.exports = {
  ...require('@ellreka/configs/.prettierrc.js')
}
EOF

cat << EOF > .eslintrc.js
module.exports = {
  ...require('@ellreka/configs/.eslintrc.js')
}
EOF

cat << EOF > tsconfig.json
{
  "include": ["src"],
  "extends": "@ellreka/configs/tsconfig"
}
EOF

cat << EOF > tailwind.config.js
module.exports = {
  ...require('@ellreka/configs/tailwind.config.js')
}
EOF