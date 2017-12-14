# WebGl学习之路 #
----------
### 程序一般流程 ###
1. 获取`<canvas>`元素
2. 获取WebGl绘图上下文
3. 初始化着色器
4. 设置点的坐标信息
5. 设置`<canvas>`背景色
6. 清除`<canvas>`
7. 绘图

### GLSE中的数据类型 ###
-  float 浮点数
-  vec4 四个浮点数组成的矢量，四维向量 vec(1.0,0.0,0.0,1.0) 齐次坐标，最后一位为1时，可当三维左边使用

### 琐碎的小记: ###

- 颜色缓冲区，每次绘制完成后系统将缓冲区中的内容显示在屏幕上，然后颜色缓冲区就会被重置，其中的内容会消失（系统默认操作）
- `gl.drawArrays(mode,first,count)`  count是绘制次数
- WebGl 暂且认为是右手坐标系
- attribute变量是一种`GLSLES`变量，用来向顶点着色器内传输数据，只有顶点着色器能使用 `attribute vec4 a_Positon`（关键字、类型、变量名）
- `a_Position_ex = gl.getAttribLocation(program,a_Position)` 获取 attribute变量 a_Position 的地址，program着色器程序对象
- `gl.vertexAttrib3f(a_Position,0.0,0.0,0.0)` 给attribute变量赋值
- precision qualifier 精度限定词，`precision mediump float` 中等精度限定
- uniform 片元着色器 存储限定符
- `gl.getUniformLocation`
- `gl.uniform4f()` 向变量中写入数据 gl.uniform[1234]f()

### 缓冲区对象 ###
1. 创建缓冲区对象 `//var vertexBuffers = gl.createBuffer();`
2. 绑定缓冲区对象 `//gl.bindBuffer()`
3. 将数据写入缓冲区对象 `//gl.bufferData()`
4. 将缓冲区对象分配给一个`attribute`变量 `//gl.vertexAttribPointer()`
5. 开启`attribute`变量 `//gl.enableVertexAttribArray()`
