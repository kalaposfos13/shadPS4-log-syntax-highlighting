import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  vscode.workspace.getConfiguration().update(
    'editor.tokenColorCustomizations',
    {
      textMateRules: [
        {
          scope: 'shadlog.fileline',
          settings: { foreground: '#FFA500' }
        },
        {
          scope: 'shadlog.library',
          settings: { foreground: '#00AA00' }
        },
        {
          scope: 'shadlog.level.trace',
          settings: { foreground: '#808080' }
        },
        {
          scope: 'shadlog.level.debug',
          settings: { foreground: '#0000FF' }
        },
        {
          scope: 'shadlog.level.info',
          settings: { foreground: '#FFFFFF' }
        },
        {
          scope: 'shadlog.level.warning',
          settings: { foreground: '#FFFF00' }
        },
        {
          scope: 'shadlog.level.error',
          settings: { foreground: '#FF0000' }
        },
        {
          scope: 'shadlog.level.critical',
          settings: { foreground: '#800080' }
        }
      ]
    },
    vscode.ConfigurationTarget.Global
  );
}
