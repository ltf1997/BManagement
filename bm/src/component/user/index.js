import React,{Component} from 'react'
import { Table,Card,Button,Popconfirm } from 'antd';
import qs from 'qs'
import '../userUpdate'
import StoreTable from 'antd/lib/table/Table';

let columns =[]
class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      nowPage:1,
      list:[]
    }
    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        render (gender){
          let arr = ['未知','男','女']
          return (
            <span>{arr[gender]}</span>
          )
    
        }
      },
      {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
      },
      {
        title: 'Tele',
        dataIndex: 'tele',
        key: 'tele'
      },
      {
        title: 'Config',
        dataIndex: '_id',
        key: 'config',
        render:(data)=>{
          return (
            <div>
              <Button size='small' type='primary' >修改</Button>
              <Popconfirm 
                title='确定删除？'
                onConfirm={()=>{
                  console.log('删除',data,this)
                  this.del(data)
                }}
              >
                <Button size='small' type='danger' >删除</Button>
              </Popconfirm>
              
            </div>
          )
        }
      }
    ]
    
  }
  del=(id)=>{
    console.log('删除'+id)
    let sendId = qs.stringify({_id: id})
    console.log(sendId)
    this.$axios.post('/yapi/admin/user/userdel',sendId,{
      headers: {
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
    .then((data)=>{
      if(data.err == 0){
        console.log('删除成功')
        this.refresh(this.state.nowPage)
      }
    })
    .catch((err)=>{
      console.log('删除失败')
    })
  }
  refresh(){
    let {nowPage} = this.state
    let url = `/yapi/admin/user/userlist?page=${nowPage}`
    this.$axios.get(url)
    .then((data)=>{
      let list = data.data
      console.log(list)
      this.setState({list:list})
    })
  }
  componentDidMount(){
    this.refresh()
  }
  render(){
    let {list} = this.state
    return(
      <Card>
        <Table columns={this.columns} dataSource={list} />
      </Card>
    )
  }
}
export default User