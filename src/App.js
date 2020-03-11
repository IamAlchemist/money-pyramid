import React from 'react'
import { Button, Jumbotron, InputGroup, InputGroupAddon, Input } from 'reactstrap'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import './App.css'
import LarkCloud from '@byted/larkcloud'
import QRCode from 'qrcode.react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import mpImage from './MoneyPyramid.jpg'
import internQRCode from './intern.png'
import publicQR from './public_qr.png'
import customerServiceQR from './wx_qun.jpeg'

const baseURL = 'https://refer.bytedance.com/'

const theLarkCloud = new LarkCloud({
  serviceId: 'tt9rob',
  baseURL: baseURL+'api/'
})

let theUser = null
let theRefereeId = null

const getUrlParam = (paramName) => {
  const url = document.location.toString();
  const arrObj = url.split("?");

  if (arrObj.length > 1) {
    const arrPara = arrObj[1].split("&");
    let arr;

    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split("=");

      if (arr != null && arr[0] === paramName) {
        return arr[1];
      }
    }
  }
  return "";
}

theRefereeId = getUrlParam('refereeId')

const refereeNameFromId = (refereeId) => {
  return new Promise((resolve, reject) => {
    theLarkCloud.run('id2name', { refereeId })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        console.log(error)
      })
  })
}

const sendSMS = (phoneNumber, cb) => {
  theLarkCloud.run('sendSMS', { phoneNumber })
    .then((response) => {
      console.log(response)
      cb(null)
    })
    .catch((error) => {
      cb(error)
    });
}

const loginByPhone = (phoneNumber, code, wxId, cb) => {
  theLarkCloud.run('loginByPhone', { phoneNumber, code, wxId })
    .then((response) => {
      if (response.success) {
        theUser = response.userInfo
      }
      cb(null, response)
    })
    .catch((error) => {
      cb(error)
    })
}

const currentUserInfo = () => {
  return new Promise((resolve, reject) => {
    theLarkCloud.run('currentUserInfo', {})
      .then((response) => {
        if (response.success) {
          resolve(response.user)
        }
        else {
          reject(response)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const loginIfNeededThen = (completion) => {
  if (theUser) {
    completion()
  }
  else {
    theLarkCloud.user.isLogin()
      .then((isLogin) => {
        if (isLogin) {
          currentUserInfo()
            .then((user) => { theUser = user })
            .catch((err) => { console.log(err) })
            .finally(() => {
              completion()
            })
        }
        else {
          completion()
        }
      })
  }
}


class Referee extends React.Component {
  render() {
    return (
      <div id="Referee">
        <p>----<i><ins><strong>{this.props.refereeName}</strong></ins></i>推荐了您</p>
      </div>
    );
  }
}

class JD extends React.Component {
  render() {
    return (
      <div className="AppInfo" id="JD">
        <p>这次推荐的字节跳动岗位是，<ins>录取比例更高</ins>，而且<ins>不需要任何客户端经验</ins>的"客户端实习生"，内推奖金 <strong><ins><i>1,000 RMB</i></ins></strong> 等大家分</p>
        <div id="money-pyramid-container" className="box box-column"></div>
      </div>

    )
  }
}

class HBR extends React.Component {
  render() { return (<div style={{ "height": '10px' }}></div>) }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      verificationNumber: '',
      wxId: '',
      sendingSMS: 0
    };
    this.timerID = null
  }

  phoneNumberDidChange = (event) => {
    this.setState({ phoneNumber: event.target.value });
  }

  verficationCodeDidChange = (event) => {
    this.setState({ verificationNumber: event.target.value });
  }

  wxIdDidChange = (event) => {
    this.setState({ wxId: event.target.value })
  }

  handleSubmit = (event) => {
    loginByPhone(this.state.phoneNumber, this.state.verificationNumber, this.state.wxId, (error, response) => {
      if (error !== null) {
        console.log(error)
      }
      else {
        if (response.success) {
          this.props.onSuccess()
        }
      }
    })
    event.preventDefault();
  }

  tick = () => {
    if (this.state.sendingSMS === 1) {
      this.setState({ sendingSMS: 0 })
      clearInterval(this.timerID)
      this.timerID = null
    }
    else {
      this.setState({ sendingSMS: this.state.sendingSMS - 1 })
    }
  }

  countDown = () => {
    this.setState({
      sendingSMS: 60
    })

    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  sendSMSIfNeeded = () => {
    if (this.state.phoneNumber) {
      this.countDown()
      sendSMS(this.state.phoneNumber, () => { })
    }
  }

  render() {
    const getCodeBtnText = this.state.sendingSMS === 0 ? "获取验证码" : `等待(${this.state.sendingSMS}s)`
    return (
      <div>
        <div>为了可以兑换奖励，请输入微信号和手机号登录</div>
        <HBR />
        <form onSubmit={this.handleSubmit}>
          <Input placeholder="微信号" required onChange={this.wxIdDidChange} />
          <HBR />
          <Input placeholder="手机号码" required onChange={this.phoneNumberDidChange} />
          <HBR />
          <InputGroup>
            <Input placeholder="验证码" required onChange={this.verficationCodeDidChange} />
            <InputGroupAddon addonType="append">
              <Button color="secondary" disabled={this.state.sendingSMS !== 0} onClick={this.sendSMSIfNeeded}>{getCodeBtnText}</Button>
            </InputGroupAddon>
          </InputGroup>
          <HBR />
          <Button color="info" size="lg" block type="submit">登录/注册</Button>
        </form>
      </div>
    );
  }
}

const CopyButtonWithToasts = (props) => {
  const { addToast } = useToasts()

  const copyDidFinish = (text, result) => {
    addToast(props.toast, {
      appearance: result ? 'success' : 'error',
      autoDismiss: true,
      autoDismissTimeout: 1500
    })
  }

  return (
    <CopyToClipboard text={props.copyText} onCopy={copyDidFinish}>
      <Button color={props.color} size="sm" style={props.style ? props.style : {}}>{props.copyText}</Button>
    </CopyToClipboard>
  )
}

class RefereeLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'temp',
      pic: '',
      useImage: false
    }
  }

  componentDidMount() {
    const url = 'https://iamalchemist.github.io/money-pyramid/?refereeId=' + (theUser !== null ? theUser._id : '')
    this.setState({ url })
    setTimeout(() => {
      const canvasImg = document.getElementsByTagName('canvas')[0];
      if (canvasImg) {
        this.setState({ pic: canvasImg.toDataURL("image/png"), useImage: true })
      }
    }, 1000)
  }

  render() {
    return (
      <div className="AppInfo">
        <div><strong>引荐方式一</strong></div>
        <ol>
          <li>
            <div>点击专属链接进行</div>
            <CopyButtonWithToasts copyText={this.state.url} toast="专属链接已经复制" color={'link'} style={{ textAlign: "left", padding: '0px' }} />
          </li>
          <li>
            在微信中发送给朋友
          </li>
        </ol>
        <div><strong>引荐方式二</strong></div>
        <ol>
          <li>
            <div>微信中长按专属二维码</div>
            <HBR />
            {this.state.useImage && <img src={this.state.pic} alt="" style={{ width: '128px', height: '128px', marginBottom: '5px' }} />}
            {!this.state.useImage && <QRCode value={this.state.url} fgColor='#17a2b8' />}
          </li>
          <li>
            在微信中发送给朋友
          </li>
        </ol>
      </div>
    )
  }
}

class Recommend extends React.Component {
  recommend = () => {
    loginIfNeededThen(() => {
      this.props.onActived(this.props.activeTag)
    })
  }

  loginDidSucceed = () => {
    this.forceUpdate()
  }

  render() {
    let content;
    if (this.props.active) {
      if (theUser !== null) {
        content = <RefereeLink />
      }
      else {
        content = (
          <div>
            <LoginForm onSuccess={this.loginDidSucceed} />
            <HBR />
          </div>
        )
      }
    }
    else {
      content = (
        <div>
          <div><strong>知识点</strong></div>
          <ol>
            <li>引荐的朋友越多，越有可能参与平分奖金</li>
            <li>注册后才能生成自己的推荐链接和二维码</li>
            <li>为保证每个推荐奖金不低于100RMB，转发层次（不是次数）不能超过8层</li>
          </ol>
          <Button color="primary" size="lg" disabled={this.props.refereeLevel >= 8} block onClick={this.recommend}>我要推荐</Button>
        </div>)
    }

    return (
      <div>
        <HR />
        <h6>我认识金子</h6>
        {content}
      </div>
    )
  }

}

class Apply extends React.Component {
  apply = () => {
    loginIfNeededThen(() => {
      this.props.onActived(this.props.activeTag)
    })
  }

  loginDidSucceed = () => {
    this.forceUpdate()
  }

  render() {
    let content = null

    if (this.props.active) {
      if (theUser !== null) {
        content = (
          <div className="AppInfo" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <div><strong>投递方式一</strong></div>
            <ol>
              <li>
                <div>
                  <div>点击复制字节跳动校招内推码:</div>
                  <CopyButtonWithToasts copyText='NNQVZ4E' toast='内推码已经复制' color='info' />
                </div>
              </li>
              <li>
                <div>
                  <div>打开岗位链接投递:</div>
                  <a href="https://job.toutiao.com/s/tK371o" rel="noopener noreferrer" target="_blank">https://job.toutiao.com/s/tK371o</a>
                </div>
              </li>
            </ol>
            <div><strong>投递方式二</strong></div>
            <ol>
              <li>
                <div>
                  <div>微信中长按二维码打开投递页面</div>
                  <img src={internQRCode} style={{ width: '150px' }} alt="img" />
                </div>
              </li>
            </ol>
          </div>
        )
      }
      else {
        content = (
          <div>
            <LoginForm />
          </div>
        )
      }
    }
    else {
      content = (
        <div>
          <div><strong>知识点</strong></div>
          <ol>
            <li>2019年实习生通过答辩几乎全部转正</li>
            <li>客户端岗位比其他岗位通过率高</li>
          </ol>
          <div><strong>岗位要求</strong></div>
          <ol>
            <li>2021届获得本科及以上学历，软件工程、计算机等相关专业</li>
            <li>热爱计算机科学和互联网技术，对移动产品有浓厚兴趣，无相关经验亦可</li>
          </ol>
          <Button color="success" size="lg" block onClick={this.apply}>我要投递</Button>
        </div>
      )
    }

    return (
      <div>
        <HR />
        <h6>我就是候选人</h6>
        {content}
      </div>
    )
  }
}

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTag: 0,
      refereeName: "...",
      refereeLevel: 8
    }
  }

  componentDidMount() {
    refereeNameFromId(theRefereeId)
      .then((response) => {
        const { refereeName, refereeLevel } = response
        this.setState({
          refereeName,
          refereeLevel
        })
      })
  }

  onActived = (activeTag) => {
    this.setState({ activeTag })
  }

  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>字节内推金子塔</h1>
          <p>推荐你朋友，你也有内推奖金！</p>
          <Referee refereeName={this.state.refereeName} />
          <HBR />
          <JD />
        </Jumbotron>
        <div id="MainPage" className="container">
          <ToastProvider>
            <Recommend active={this.state.activeTag === 1} activeTag={1} onActived={this.onActived} refereeLevel={this.state.refereeLevel} />
            <Apply active={this.state.activeTag === 2} activeTag={2} onActived={this.onActived} />
          </ToastProvider>
        </div>
        <Manual />
        <PublicService />
        <References />
        <HBR />
      </div>
    )
  }
}

function HR() {
  return (<div><hr /></div>)
}

function Manual() {
  return (
    <div className="container">
      <HR />
      <h6>内推游戏规则</h6>
      <div>
        <div className="AppInfo">一图胜千言，如果黄色的奖杯入职了，那么所有绿色的相关推荐人和黄色的奖杯都可以平均分内推奖金</div>
        <img src={mpImage} alt="img" />
        <h6>知识点</h6>
        <div className="AppInfo">
          <ol>
            <li>黑色的是字节的同学来当“客服”，TA会把大家拉入群中，负责维护好群内关系，回答问题，告诉大家内推进度，包括<span className="text-danger"><ins>指导新人面试</ins></span>等</li>
            <li>一旦"奖杯"入职，“客服”负责联系所有绿色节点，并<span className="text-danger"><ins>通过微信平分</ins></span>内推奖金</li>
            <li>为了保证每个人推荐人可以拿到的奖金不会太少，每个<span className="text-danger"><ins>推荐链的深度不会超过8层</ins></span></li>
            <li>用户可以<span className="text-danger"><ins>关注下方公众号</ins></span>上，如果发现有违反字节范，<span
              className="text-danger"><ins>可以进行投诉</ins></span>，会直接反馈给HR和相关Leader，保证推荐人的利益</li>
            <li>更详细的规则请参考<span className="text-danger"><ins>页面底部的链接</ins></span></li>
          </ol>
        </div>
      </div>
    </div>
  )
}

function PublicService() {
  return (
    <div className="container">
      <HR />
      <h6>公众号</h6>
      <div className="AppInfo">可以在公众号留言进行进度查询，问题反馈，投诉等</div>
      <img src={publicQR} alt="" />
      <HR />
      <h6>内推客服群</h6>
      <div className='AppInfo'>加入字节客服群，了解更多信息</div>
      <img src={customerServiceQR} alt='' style={{ width: '200px' }} />
    </div>
  )
}

function References() {
  return (
    <div className="container">
      <HR />
      <h6>关于</h6>
      <ol>
        <li><a href="https://bytedance.feishu.cn/docs/doccniJHKFfh2kHt1j6J2TV2PIh">字节内推金子塔细则</a></li>
        <li><a href="https://bytedance.feishu.cn/docs/doccnN0CZOycd2340CY3CJESbxh">关于该岗位的一些Q&A</a></li>
      </ol>
    </div>
  )
}

function App() {
  return (
    <MainPage />
  );
}

export default App;
