function htmlEncode(value) {
                    return $("<div/>").text(value).html();
                  }
                  
                  $(function () {
                    $("#generate").click(function () {
                      $(".qr-code").attr(
                        "src",
                        "https://chart.googleapis.com/chart?cht=qr&chl=" +
                          htmlEncode($("#content").val()) +
                          "&chs=160x160&chld=L|0"
                      );
                    });
                  });
                  


                //   {
                //     "security.workspace.trust.untrustedFiles": "open",
                //     "liveServer.settings.donotShowInfoMsg": true,
                //     "emmet.includeLanguages": {
                //         "javascript": "javascriptreact"
                //     },
                //     "files.autoSave": "afterDelay",
                //     "files.autoSaveDelay": 500,
                //     "editor.fontLigatures": true,
                //     "editor.fontFamily": "",
                //     "workbench.iconTheme": "material-icon-theme",
                //     "workbench.preferredDarkColorTheme": "Monokai",
                //     "workbench.preferredHighContrastColorTheme": "Visual Studio Dark",
                //     "window.zoomLevel": 1,
                //     "[html]": {
                //         "editor.defaultFormatter": "vscode.html-language-features"
                //     },
                //     "editor.tabSize": 20,
                //     "editor.renderWhitespace": "none",
                //     "editor.accessibilityPageSize": 500
                // }