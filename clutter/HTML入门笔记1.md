1. HTML是李爵士(Tim Berners-Lee)发明的，同时他也是万维网之父
2. HTML起手应该输入!然后敲下tab，然后语言改成zh-CN,编码保持UTF-8
3. 常用的章节标签有
    * h1~h6表示标题，数字越大标题越小
    * section章节 框起来可以把文章分成几个小节
    * article文章
    * p段落 写内容的地方
    * header 头部 加入广告的地方
    * footer 脚部 声明版权的地方
    * main 主要内容
    * aside 次要内容
    * div 划分 框起来表示这一段是一个整体
4. 全局属性有
    * class 表示一个类
    * contenteditable 使框内代码能被用户编辑
    * hidden 隐藏框内内容
    * 不到万不得已，千万不要用id，因为id标签不会报错，js可以直接获取id，id不能命名为全局属性名，即window.之后的所有单词
    * style 样式标签能直接塞在其他标签里改变样式，优先级从大到小是，用户设置，head设置，其他标签后追加style
    * tabindex 使得此处能被tab键选中，方便没有鼠标的用户 值0表示最后选中 -1为不会选中
    * title 使该标签被鼠标悬停时显示内容
5. 内容标签有
   * ol+li //ordered list + list item 有序列表
   * ul+li //unordered list + list item 无序列表
   * dl+dt+dd //description list+term+data 标题与介绍
   * pre // 使得多个空格能显示
   * * html的特点：多个空格/回车会合并成一个空格/回车
   * code // 里面的字符等宽
   * hr //分割线
   * br //break 换行
   * a //anchor 多用于超链接 
    ```html
     <a href="link">text</a>
     <a href="target="_blank</a>表示在新窗口打开
     ```
   * em //emphasis 语气强调
   * strong // 内容本身的重要性
   * q //quote 引用 没效果
   * blockquote // 换行引用 