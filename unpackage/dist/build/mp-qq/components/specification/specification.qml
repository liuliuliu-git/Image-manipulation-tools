<view data-event-opts="{{[['tap',[['toSizeModify',['$event']]]]]}}" class="content data-v-c87111f2" bindtap="__e"><view class="single-sizeContainer data-v-c87111f2"><block qq:if="{{sizeList.imageName=='点击自定义'}}"><view class="single-title data-v-c87111f2">点击自定义</view></block><block qq:else><view class="single-title data-v-c87111f2">{{''+sizeList.imageName+''}}</view></block><view class="single-decoration data-v-c87111f2"><view class="fontClass data-v-c87111f2"><view class="data-v-c87111f2">像素:</view><block qq:if="{{sizeList.imageName=='点击自定义'}}"><view class="data-v-c87111f2">自定义</view></block><block qq:else><view class="data-v-c87111f2">{{''+sizeList.widthpx+"*"+sizeList.heightpx+' px'}}</view></block></view><view style="background-color:#b7b7b7;width:1px;height:28rpx;margin-left:15rpx;margin-top:5rpx;" class="data-v-c87111f2"></view><view class="fontClass data-v-c87111f2"><view class="data-v-c87111f2">冲印:</view><block qq:if="{{sizeList.imageName=='点击自定义'}}"><view class="data-v-c87111f2">自定义</view></block><block qq:else><view class="data-v-c87111f2">{{''+sizeList.width+"*"+sizeList.height+' mm'}}</view></block></view></view></view></view>