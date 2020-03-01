#!/bin/sh

if [ $# -ne 2 ]
then
  echo "You must pass the initial and final names, in that order"
  exit 1
fi

CURRENT_NAME=$1
FINAL_NAME=$2

for file in `find . -type f`
do
  grep $CURRENT_NAME $file > /dev/null
  if [ $? -eq 0 ]
  then
    sed -i "s/$CURRENT_NAME/$FINAL_NAME/g" $file
  fi
done
