# run60s
马到成功的egret代码

#================================================
2017/11/13
修改投注页面逻辑

修改进入比赛逻辑

存在的问题：比赛状态多请求几次就变成了投注状态


#================================================

游戏场景逻辑：

Main.ts  ------  主入口
	|
	|
	------  LoadingUI.ts  加载进度条
	|
	|
	------ GameScene.ts  场景主容器
				|
				|
				------ Home.ts  游戏大厅
				|		|
				|		|
				|		------ UserInfo.ts 用户信息
				|		|
				|		|
				|		------ Setting.ts 系统设置
				|		|
				|		|
				|		------ GameScene.ts 金币容器
				|		|
				|		|
				|		------ RichList.ts 富豪榜
				|		|
				|		|
				|		------ ShopingStore.ts 商店
				|		|
				|		|
				|		------ SignDesk.ts 签到
				|		|
				|		|
				|		------ TaskBar.ts 任务
				|
				|
				------ RaceCourse.ts 比赛场景
				|
				|
				------ ReadyRoom.ts 投注页面
						|
						|
						------ BetDetail.ts 投注详情
						|
						|
						------ GameRule.ts 游戏规则
						|
						|
						------ Horses.ts 马的动作