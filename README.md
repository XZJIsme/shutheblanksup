# Shutheblanksup README

https://marketplace.visualstudio.com/items?itemName=createdforsbu.shutheblanksup

不太喜欢那么多空格的风格，因而写了这个蹩脚的小插件：

Before:
```c
#include <bits/stdc++.h>
using namespace std;
int main()
{
    string s = "Shutheblanksup ~ ";
    auto t = s;
    for (auto i : s)
        cout << i << endl;
    while (true)
        return 0;
}
```
  
After:
```c
#include<bits/stdc++.h>
using namespace std;
int main()
{
    string s="Shutheblanksup ~ ";
    auto t=s;
    for(auto i:s)
        cout<<i<<endl;
    while(true)
        return 0;
}
```

![](https://s2.ax1x.com/2019/07/14/Z5hpcD.gif)

立个Flag，八月回家计划再添加一些功能，例如支持Java风格的花括号，如下所示
```c
int main(){
    return EOF;
}
while(true){
    This is java style, right?
}
```

说不定再添加一个叫“气疯了”的功能，例如写着写着发现有人在代码里下了毒，气疯了，点击“气疯了”即可删除所有的代码并保存（看样子真是气疯了）