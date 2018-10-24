<template>
    <div class="login-container">
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginFrom">
            <h3 class="title">飞防管家</h3>
            <el-form-item prop="username">
                <span class="fontcontainer">
                    <span class="iconfont icon-yonghu"></span>
                </span>
                <el-input name="usernane" type="text" v-model="loginForm.username" autoComplete="on" placeholder="用户名" />
            </el-form-item>  
            <el-form-item prop="password">
                <span class="fontcontainer">
                    <span class="iconfont icon-mima"></span>
                </span>
                <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="密码"></el-input>
                <span class="show-pwd iconfont icon-yanjing" @click="showPwd"></span>
            </el-form-item>  
            <el-form-item>
                <el-button type="primary" style="width: 100%;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
            </el-form-item>   
        </el-form>
    </div>
</template>

<script>
import { isvalidUsername } from "@/utils/validate";
export default {
    name: "ligin",
    data() {
        const validateUsername = (rule, value, callback) => {
            if (!isvalidUsername(value)) {
                callback(new Error("请输入正确的用户名"));
            } else {
                callback();
            }
        };
        const validatePass = (rule, value, callback) => {
            if (value.length < 6) {
                callback(new Error("密码不能小于6位"));
            } else {
                callback();
            }
        };
        return {
            loginForm: {
                username: "admin",
                password: "123456"
            },
            loginRules: {
                username: [
                    {
                        required: true,
                        trigger: "blur",
                        validetor: validateUsername
                    }
                ],
                paddword: [
                    {
                        required: true,
                        trigger: "blur",
                        validetor: validatePass
                    }
                ]
            },
            loading: false,
            pwdType: "password"
        };
    },
    methods: {
        showPwd() {
            if (this.pwdType === "password") {
                this.pwdType = "";
            } else {
                this.pwdType = "password"
            }
        },
        handleLogin() {
            this.$res.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.$store
                        .dispatch("Login", this.loginForm)
                        .then(() => {
                            this.loading = false;
                            this.router.push({ path: "/"});
                        })
                        .catch(() => {
                            this.loading = false;
                        });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

.login-container {
    .el-input {
        display: inline-block;
        height: 47px;
        width: 90%;
        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 47px;
            &:-webkit-autofill {
                -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: #fff !important;
            }
        }
    }
    .el-form-item {
        border: 1px solid raba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
    height: 100%;
    width: 100%;
    min-width: 200px;
    background-color: $bg;
    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        top: 40%;
        width: 80%;
        max-width: 520px;
        padding: 35px 35px 15px 35px;
        margin: 0 auto;
        transform: translateY(-50%);
    }
    .el-input {
        width: 80%;
    }
    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;
        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }
    .title {
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }
    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
    .fontcontainer {
        color: #889aa4;
        padding-left: 10px;
    }
}
</style>

