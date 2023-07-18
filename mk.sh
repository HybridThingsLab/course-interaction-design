#!/bin/bash

 TMP=tmp

 echo "var title = new Map([" > ${TMP}.title
 echo "var ffw   = new Map([" > ${TMP}.ffw
 echo "var rew   = new Map([" > ${TMP}.rew

 for TASK in 'Block_I/[ABC]/*/*'            \
             'Block_II/[ABC]/*/miniaturen/*' \
             'Block_II/[ABC]/*/ticktack'
  do
     FIRST=""
     FFW=":FFW:";REW=":REW:"
     for S in `ls $TASK       | #
               grep ':$'      | #
               cut -d ':' -f 1`
      do
         for RELPATH in $S
          do
             if [ "$FIRST" == ""  ]
             then FIRST=$RELPATH
             fi
             FFW="$RELPATH"
             gsed -i "s,:FFW:,$FFW," ${TMP}.ffw
             echo "    ['$RELPATH', ':FFW:']," >> ${TMP}.ffw
             echo "    ['$RELPATH', '$REW'],"  >> ${TMP}.rew
             REW="$RELPATH"

             VN=`echo $RELPATH   | #
                 cut -d '/' -f 3 | #
                 cut -d '_' -f 2`
             NN=`echo $RELPATH   | #
                 cut -d '/' -f 3 | #
                 cut -d '_' -f 1`
             VN="$(tr '[:lower:]' '[:upper:]' <<< ${VN:0:1})${VN:1}"
             NN="$(tr '[:lower:]' '[:upper:]' <<< ${NN:0:1})${NN:1}"

            #TITLETXT=`grep title $RELPATH/index.html`
             TITLE="$VN $NN: $TITLETXT"
             echo "    ['$RELPATH', '$TITLE'],"  >> ${TMP}.title
        done
     done
     gsed -i "s,:FFW:,$FIRST," ${TMP}.ffw
     gsed -i "s,:REW:,$REW," ${TMP}.rew
 done

 echo "]);" >> ${TMP}.title
 echo "]);" >> ${TMP}.ffw
 echo "]);" >> ${TMP}.rew

 cat ${TMP}.title ${TMP}.ffw ${TMP}.rew

 rm ${TMP}.title ${TMP}.ffw ${TMP}.rew

exit 0;
