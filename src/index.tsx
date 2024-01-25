import { cloneDeep } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Sortable from "ti-sortable-react"

const App = () => {
  const sortableRef = useRef();
  const [fileList, setFileList] = useState<any>([
    {
      name: 'a.png',
      fileType: 'img', // 文件类型，可取值img, zip, word, pdf, ppt, excel, other
      uploadState: 'success', // 上传状态，可取值success, error
    },
    {
      name: 'b.png',
      fileType: 'img',
      uploadState: 'error',
    },
  ])
  const onDoubleClick = (e) => {
    console.log(e);
    // message.open({
    //   title: `双击：${e.name}`,
    //   type: "success",
    // })
  };
  const onClick = (e) => {
    console.log(e);
    // message.open({
    //   title: `单击：${e.name}`,
    //   type: "success",
    // })
  };
  const onChangeDate = (e) => {
    console.log(e);
    // message.open({
    //   title: e ? e.length : 'onChangeDateEvent',
    //   type: "success",
    // })
  };
  const addCel = () => {
    let _sortableRef:any = sortableRef.current;
    let _getCel = _sortableRef.getCel();
    _sortableRef.addCel(_getCel);
  };
  const childrenItem = function (childItem:any, childIndex:any, parentIndex:any, className?:any ) {
    return (
      <div className={className} style={{}}>
        <button onClick={() => alert(`childItemName${childItem.name}, childIndex:${childIndex}, parentIndex:${parentIndex}`)}>!</button>
      </div>
    )
  }
  const headerItem = function (item:any, index:any ) {
    return (
      <div style={{position: 'absolute', right: 0}}>
        <button onClick={() => alert(`childItemName${item.name}, index:${index}`)}>!</button>
      </div>
    )
  }
  const _childrenData = {
    name: "Click-Modify",
    code: "",
  };
  const __dataListChildren = {
    name: "Click-Modify（Header）",
    code: "",
    list: [],
  };
  const _dataList = [
    {
      name: "Click-Modify 1（Header）",
      code: "",
      list: [
        {
          name: "Click-Modify 1-1",
          code: "",
        },
        {
          name: "Click-Modify 1-2",
          code: "",
        }
      ],
    },
    {
      name: "Click-Modify 2（Header）",
      code: "",
      list: [
        {
          name: "Click-Modify 2-1",
          code: "",
        },
        {
          name: "Click-Modify 2-2",
          code: "",
          disabled: true
        }
      ],
    },
  ];
  const updateListAll = (_data) => {
    debugger;
    let _sortableRef:any = sortableRef.current;
      _sortableRef.updateListAll(_data);
  };
  const [dataList, setDataList] = useState(cloneDeep(_dataList))
  useEffect( () => {
    // setInterval( () => {
    //   let _data = cloneDeep(_dataList)
    //   _data[0].name = Math.random().toString();
    //   updateListAll(_data)
    // },3000)
  }, [])
  
  return(
    <div>
      <h1>Hello, world!</h1>
      <div style={{width: '100%', overflow: 'auto'}}>
        <label style={{opacity: 0.5}}>Tui_Sortable 组件 v3.1</label><label>（npm i ti-sortable-react）</label>
        <Sortable config={{
          defaultProps: {
            children: 'list',
            label: 'name',
            emptyText: '可填入区域'
          },
          header:{
            style: {color: 'white'},
            child: {
              style: {
                // color: 'white',
                // backgroundColor: '#237ffa'
              }
            },
            removeVisible: true,
            removeTitle: 'Are you sure Delete this frame?'
          },
          body: {
            removeVisible: true,
            removeTitle: 'Are you sure Delete this Point?'
          }
        }}
        listItemTemplate = {__dataListChildren}
        childrenItemTemplate = {_childrenData}
        parameter = {dataList}
        // headerItemRender = {headerItem}
        childrenItemRender = {childrenItem}
        onChangeDate={(e) => onChangeDate(e)}
        onDoubleClickChildren={(e) => onDoubleClick(e)}
        onClickChildren={(e) => onClick(e)}
        onRef={sortableRef}></Sortable>
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
