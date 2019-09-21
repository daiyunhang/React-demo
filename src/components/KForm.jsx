import React, { Component } from 'react';
import { Input, Button } from 'antd'


// 创建一个高阶组件: 扩展现有表单,事件处理-收集数据-校验
function KFormCreate(Comp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.option = {};
            this.state = {};
        }

        handleChange = (e) => {
            const { name, value } = e.target;
            this.setState({ [name]: value });
            console.log(name,value,'++++++++++++++++++');
        }


        // 创建input包装器
        getFieldDec = (field, option) => {
            // 保存当前输入的配置
            this.option[field] = option;
            return InputComp => (
                <div>
                    {React.cloneElement(InputComp, {
                        name: field,
                        value: this.state[field] || "",
                        onChange: this.handleChange
                    })}
                </div>
            )
        }
        render() {
            return <Comp getFieldDec={this.getFieldDec} />
        }
    }
}


class KForm extends Component {
    render() {
        const { getFieldDec } = this.props;
        return(
            <div>
                {getFieldDec("uname", {
                    rules: [{ required: true, message: "用户名必填" }]
                })(<Input />)}
                <Button>登录</Button>
            </div>
        )
    }
}



export default KFormCreate(KForm);