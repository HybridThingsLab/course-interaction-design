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

             VORNAME=`echo $RELPATH   | #
                      cut -d '/' -f 3 | #
                      cut -d '_' -f 2`
             NACHNAME=`echo $RELPATH   | #
                       cut -d '/' -f 3 | #
                       cut -d '_' -f 1`

            #TITLETXT=`grep title $RELPATH/index.html`
             TITLE="$VORNAME $NACHNAME: $TITLETXT"
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
