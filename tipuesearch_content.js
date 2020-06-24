var tipuesearch = {"pages":[{"title":"使用pelican在GitHub搭建个人Jupyter Notebook和Markdown微博","text":"环境：Mac 1、创建文件夹 MyBlog 并进入文件夹 mkdir MyBlog cd MyBlog 2、创建并激活虚拟环境 virtualenv blogs . blogs/bin/activate 3、创建 .gitignore的文件，并添加入 以下内容 。最终将会把文件提交到git, .gitignore将会排除指定类型的文件。 4、使用pip安装 Markdown、pelican、jupyter、ipython、nbconvert、beautifulsoup4、ghp-import、matplotlib。 例如： pip install Markdown 5、执行pelican-quickstart进行互动式安装： ( blogs ) ***** : MyBlog *** $ pelican - quickstart Welcome to pelican - quickstart v3 .7.1 . This script will help you create a new Pelican - based website . Please answer the following questions so this script can generate the files needed by Pelican . > Where do you want to create your new web site ? [ . ] > What will be the title of this web site ? CMCai ' s Blog > Who will be the author of this web site ? CaiChunming > What will be the default language of this web site ? [ zh ] > Do you want to specify a URL prefix ? e . g ., http : // example . com ( Y / n ) n > Do you want to enable article pagination ? ( Y / n ) > How many articles per page do you want ? [ 10 ] > What is your time zone ? [ Europe/Paris ] Asia / Shanghai > Do you want to generate a Fabfile / Makefile to automate generation and publishing ? ( Y / n ) > Do you want an auto - reload & simpleHTTP script to assist with theme and site development ? ( Y / n ) > Do you want to upload your website using FTP ? ( y / N ) > Do you want to upload your website using SSH ? ( y / N ) > Do you want to upload your website using Dropbox ? ( y / N ) > Do you want to upload your website using S3 ? ( y / N ) > Do you want to upload your website using Rackspace Cloud Files ? ( y / N ) > Do you want to upload your website using GitHub Pages ? ( y / N ) y > Is this your personal page ( username . github . io ) ? ( y / N ) y Done . Your new project is available at / Users / iMac / MyBlog 注：上面内容以后可以在pelicanconf.py中修改。 6、安装Jupyter插件：终端切换到 MyBlog git init git clone --recursive https://github.com/getpelican/pelican-plugins #(克隆pelican-plugins是为了后面模版中的一些插件，如果不需要，可以不克隆) git submodule add git://github.com/danielfrg/pelican-ipynb.git pelican-plugins/ipynb 7、设置启动插件： 在pelicanconf.py文件的末尾加上： MARKUP = ('md', 'ipynb') PLUGIN_PATHS = [ './pelican-plugins' ] PLUGINS = ['ipynb.markup'] 8、写一篇测试博客： （1）、通过jupyter notebook写一篇博客， 例如 （2）、把.ipynb 文件放入MyBlog/content 文件夹下 （3）、新建一个同名文件，扩展名为 .nbdata。同时输入下面内容 Title : First Post #文章的题目 Slug : first - post #文章的访问路径 Date : 2016 - 06 - 08 20 : 00 #发布时间 Category : posts #文章所属目录 Tags : python firsts #标签 Author : Vik Paruchuri #作者 Summary : My first post , read it to find out . #文章简单概述 也可以创建一个Markdown文件，写好blog内容。在Markdown文件开头加入文档的头信息（也就是上面 .nbdata 的内容）。把书写完成的Markdown文件复制到content目录下。 9、修改模版，这里选用 pelican-elegant （1）、克隆主题（克隆下来的文件夹很多是空的，最好确认下，没有就手动下载） git clone https://github.com/getpelican/pelican-themes.git （2）、切换到pelican-themes下， 并启用模版 cd pelican-themes pelican-themes -i pelican-elegant （4）、切换回MyBlog，修改 pelicanconf.py ，添加： THEME = './pelican-themes/pelican-elegant' 再添加： PLUGINS = [ 'extract_toc', 'tipue_search'] DIRECT_TEMPLATES = (('index', 'tags', 'categories','archives', 'search', '404')) STATIC_PATHS = ['theme/images', 'images'] #图片放在content/theme/images TAG_SAVE_AS = '' CATEGORY_SAVE_AS = '' AUTHOR_SAVE_AS = '' 也可添加： RECENT_ARTICLES_COUNT (integer) # recent文章数量 COMMENTS_INTRO ('string') #邀请评论的内容 SITE_LICENSE ('string') #网站license SITE_DESCRIPTION ('string') #网站的description EMAIL_SUBSCRIPTION_LABEL ('string') #邮件订阅label EMAIL_FIELD_PLACEHOLDER ('string') #邮件订阅 SUBSCRIBE_BUTTON_TITLE ('string') #邮件订阅 MAILCHIMP_FORM_ACTION ('string') #邮件订阅 SITESUBTITLE ('string') #次标题 LANDING_PAGE_ABOUT ({}) #主页title和details PROJECTS ([{},...]) #projects内容 在 .nbdata 可以添加： subtitle summary disqus_identifier modified keywords 10、生成html （1）、运行pelican content生成HTML （2）、切换到output文件夹 （3）、运行python -m pelican.server （4）、打开浏览器访问localhost:8000进行预览 11、创建GitHub pages （1）、创建一个GitHub仓库，名称为username.github.io, username是GitHub名称。可以输入describe，选择public，其他不用选。 （2）、切换到jupyter-blog目录 （3）、运行 git remote add origin git@github.com:username/username.github.io.git 来为你的本地GitHub仓库添加一个远程仓库。username替换为GitHub用户名。 （4）、修改pelicanconf.py中的SITEURL, 将它设置为 https://username.github.io， username是GitHub用户名。 （5）、运行 pelican content -s publishconf.py。 12、部署到GitHub Pages （1）、需要将博客内容推送到GitHub pages的master分支来使之正常工作。现在，HTML内容已经在output文件夹中，不过我们需要它是仓库的根目录，而不是一个子目录。 （2）、运行 ghp - import output - b master 将output中的所有内容导入到master分支。 （3）、运行 git push origin master 将内容推送到GitHub。任何时候当你的博客内容有所改变时，重新运行上面的 pelican content -s publishconf.py, ghp-import和git push命令，你的GitHub page就会得到更新。 13、尝试访问username.github.io – 你应该看到你的博客了！","tags":"others","url":"https://cmcai0104.github.io/blogstruct","loc":"https://cmcai0104.github.io/blogstruct"},{"title":"First Post","text":"","tags":"yeah","url":"https://cmcai0104.github.io/my-super-post","loc":"https://cmcai0104.github.io/my-super-post"}]};