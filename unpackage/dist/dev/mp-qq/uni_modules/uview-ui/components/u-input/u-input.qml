<view class="{{['u-input','data-v-113bc24f',inputClass]}}" style="{{$root.s0}}"><view class="u-input__content data-v-113bc24f"><block qq:if="{{prefixIcon||$slots.prefix}}"><view class="u-input__content__prefix-icon data-v-113bc24f"><block qq:if="{{$slots.prefix}}"><slot name="prefix"></slot></block><block qq:else><u-icon vue-id="113bae99-1" name="{{prefixIcon}}" size="18" customStyle="{{prefixIconStyle}}" class="data-v-113bc24f" bind:__l="__l"></u-icon></block></view></block><view data-event-opts="{{[['tap',[['clickHandler',['$event']]]]]}}" class="u-input__content__field-wrapper data-v-113bc24f" bindtap="__e"><input class="u-input__content__field-wrapper__field data-v-113bc24f" style="{{$root.s1}}" type="{{type}}" focus="{{focus}}" cursor="{{cursor}}" auto-blur="{{autoBlur}}" disabled="{{disabled||readonly}}" maxlength="{{maxlength}}" placeholder="{{placeholder}}" placeholder-style="{{placeholderStyle}}" placeholder-class="{{placeholderClass}}" confirm-type="{{confirmType}}" confirm-hold="{{confirmHold}}" hold-keyboard="{{holdKeyboard}}" cursor-spacing="{{cursorSpacing}}" adjust-position="{{adjustPosition}}" selection-end="{{selectionEnd}}" selection-start="{{selectionStart}}" password="{{password||type==='password'||false}}" ignoreCompositionEvent="{{ignoreCompositionEvent}}" data-event-opts="{{[['input',[['onInput',['$event']]]],['blur',[['onBlur',['$event']]]],['focus',[['onFocus',['$event']]]],['confirm',[['onConfirm',['$event']]]],['keyboardheightchange',[['onkeyboardheightchange',['$event']]]]]}}" value="{{innerValue}}" bindinput="__e" bindblur="__e" bindfocus="__e" bindconfirm="__e" bindkeyboardheightchange="__e"/></view><block qq:if="{{isShowClear}}"><view data-event-opts="{{[['tap',[['onClear',['$event']]]]]}}" class="u-input__content__clear data-v-113bc24f" bindtap="__e"><u-icon vue-id="113bae99-2" name="close" size="11" color="#ffffff" customStyle="line-height: 12px" class="data-v-113bc24f" bind:__l="__l"></u-icon></view></block><block qq:if="{{suffixIcon||$slots.suffix}}"><view class="u-input__content__subfix-icon data-v-113bc24f"><block qq:if="{{$slots.suffix}}"><slot name="suffix"></slot></block><block qq:else><u-icon vue-id="113bae99-3" name="{{suffixIcon}}" size="18" customStyle="{{suffixIconStyle}}" class="data-v-113bc24f" bind:__l="__l"></u-icon></block></view></block></view></view>