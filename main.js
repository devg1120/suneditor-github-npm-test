
//import 'suneditor/dist/css/suneditor.min.css'
import 'suneditor/dist/suneditor.css'
import suneditor from 'suneditor'
import plugins from 'suneditor/src/plugins'


let data1 = `
<h1><span style="color: rgb(255, 0, 0)">Hi</span></h1><h3>H3</h3><p><br></p><p><br></p><p>関西システム　　<span style="font-size: 18px;background-color: rgb(209, 178, 255)">機内</span></p><p><span style="font-size: 18px;background-color: rgb(209, 178, 255)"><br></span></p><p><span style="font-size: 18px;background-color: rgb(209, 178, 255)"><br></span></p><p><br></p>
`;

let data2 = `
<div class="se-component se-video-container __se__float-none"><figure style="width: 515px; height: 290px; padding-bottom: 290px;"><iframe src="https://www.youtube.com/embed/OeuxE_frLgw" data-proportion="true" data-size="515px,290px" data-align="none" data-file-name="OeuxE_frLgw" data-file-size="0" data-origin="100%,56.25%" style="width: 515px; height: 290px;"></iframe></figure></div><h1><span style="color: rgb(255, 0, 0)">Hi</span></h1><h3>H3</h3><p><br></p><p><br></p><p>関西システム　　<span style="font-size: 18px;background-color: rgb(209, 178, 255)">機内</span></p><p><span style="font-size: 18px;background-color: rgb(209, 178, 255)"><br></span></p><p><span style="font-size: 18px;background-color: rgb(209, 178, 255)"><br></span></p><p><br></p>
`;

let data3 = `
<div class="se-component se-video-container __se__float-none"><figure style="width: 515px; height: 290px; padding-bottom: 290px;"><iframe src="https://www.youtube.com/embed/OeuxE_frLgw" data-proportion="true" data-size="515px,290px" data-align="none" data-file-name="OeuxE_frLgw" data-file-size="0" data-origin="100%,56.25%" style="width: 515px; height: 290px;"></iframe></figure></div><h1><span style="color: rgb(255, 0, 0)">Hi</span></h1><h3>H3</h3><p><br></p><p><br></p><p>関西システム　　<span style="font-size: 18px;background-color: rgb(209, 178, 255)">機内</span></p><div class="se-component se-image-container __se__float-none"><figure><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1ODJweCIgaGVpZ2h0PSIxMzBweCIgdmlld0JveD0iLTAuNSAtMC41IDU4MiAxMzAiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDtDaHJvbWUmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMC0wMS0wNlQxMzoxOTo0NC4zNjVaJnF1b3Q7IGFnZW50PSZxdW90O01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83OS4wLjM5NDUuODggU2FmYXJpLzUzNy4zNiZxdW90OyBldGFnPSZxdW90O3VHSlAxNm5GZXBHYk9RZkFoR3BQJnF1b3Q7IHZlcnNpb249JnF1b3Q7MTIuNC42JnF1b3Q7IHR5cGU9JnF1b3Q7ZGV2aWNlJnF1b3Q7Jmd0OyZsdDtkaWFncmFtIGlkPSZxdW90O2MzUGk0V0J5OHhZZjJncTZGSUsyJnF1b3Q7IG5hbWU9JnF1b3Q7UGFnZS0xJnF1b3Q7Jmd0OzFWZkJjcHN3RVAwYUg1c3hZQ2c1Sm83VGRxWnVrL3JRNUtpZ0JWUUxsaEZ5Z0g1OUpTTVFESTRuYWFaT2V2Rm9uMWE3Mm4zN05Iam1MYlA2a3lCRnVrWUtmT2JPYVQzenJtYXVHenFlK3RWQTB3SUxkOTRDaVdDMGhSd0xiTmh2TUdEbnRtTVV5cEdqUk9TU0ZXTXd3anlIU0k0d0lnUldZN2NZK1RoclFSS1lBSnVJOENuNmsxR1ptckxjanhiL0RDeEp1OHhPY043dVpLUnpOcFdVS2FGWURTQnZOZk9XQWxHMnE2eGVBdGU5Ni9yU25ydCtZcmUvbUlCY1B1ZkE3VzFlN2NKTldhejVla3ZsOXR2RmZmSEJNWFU4RXI0ekZXOGtFZEpjV1RaZEg0Q3F0aGdUaFV3eHdaendsVVV2QmU1eUNqclpYRm5XNXl0aW9VQkhnYjlBeXNad1RIWVNGWlRLakp0ZHFKbThHNnp2ZGFnejMxaFh0WW04TjVxQmNRT0NaU0JCR0N6R1hKb2tqajdkMXFJTGVMSnpCaXB4SnlJNDFxNkZHVUVpRXBESEhQMmVZYVVNUUhVLzBhaURBamlSN0hGOEUySm1OT245TEkxcVlaaDhDYXVMQ2F2ZkM4Z25wSlpTNExhZmEzZE1oNXJYUXZ0bGRhS1ZmUlp6cktKVXpjYVphblhHY2lKUmRmeXlTcG1FVFVIMmZhdVVwMmFBY2I1RXJ2ZFZHbzhTQ09OSWg5em5HK3dFVVFnUDhRSE85cmE1cU9uU0l3Z0o5WEVLcHczdkRzeU5DczB6ZEc3TXltcTZkMGtIZWc3bS80cWljRUxSS3FmL3Mrd1VFNks1R3hxRFNOcTBvZlpXTTdST3FXSC91Um9PM2xURC9tUkF2aWdGejI4RUpnTEs4cTNFSE1leEd4MFVNdzBlQWo4NGdaaTl4WHNUOC9tRXF4K0FoMTdjRStyWmF2aCtzUE0zZXJZUzdpTzlKejBIejlYejRwVjYzaCs5RUlJMEE0Y0NXUzdMUWVRYkRkaGhEYnp4c0haZnR0ZFArRHYrVVgrMWFHOWdwN1V2NVJVREhFd0dlTW14aERmN1l2QWhwSXREajB6b1BuakJLUjRaUHp6Wkk2Tk0remVncGRUK2wvSldmd0E9Jmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyI+PGRlZnMvPjxnPjxwYXRoIGQ9Ik0gMTAxIDMxIEwgMjM0LjYzIDMxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48cGF0aCBkPSJNIDIzOS44OCAzMSBMIDIzMi44OCAzNC41IEwgMjM0LjYzIDMxIEwgMjMyLjg4IDI3LjUgWiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU0LjUsMjIuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjE2IiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6MTVweDtmb250LWZhbWlseTpIZWx2ZXRpY2E7Y29sb3I6IzAwMDAwMDtsaW5lLWhlaWdodDoxLjI7dmVydGljYWwtYWxpZ246dG9wO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LWFsaWduOmNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7YmFja2dyb3VuZC1jb2xvcjojZmZmZmZmOyI+U3RhcnQ8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTYiIHk9IjE2IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE1cHgiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiPlN0YXJ0PC90ZXh0Pjwvc3dpdGNoPjwvZz48cGF0aCBkPSJNIDMxLjYxIDEgTCA3MC4zOSAxIEMgODcuMjkgMSAxMDEgMTQuNDMgMTAxIDMxIEMgMTAxIDQ3LjU3IDg3LjI5IDYxIDcwLjM5IDYxIEwgMzEuNjEgNjEgQyAxNC43MSA2MSAxIDQ3LjU3IDEgMzEgQyAxIDE0LjQzIDE0LjcxIDEgMzEuNjEgMSBaIiBmaWxsPSIjZGFlOGZjIiBzdHJva2U9IiM2YzhlYmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ibm9uZSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjUsMjIuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjM5IiBoZWlnaHQ9IjE2IiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTVweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDM5cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+T3BlbjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIyMCIgeT0iMTYiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTVweCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC13ZWlnaHQ9ImJvbGQiPk9wZW48L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gMzQxIDMxIEwgNDc0LjYzIDMxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48cGF0aCBkPSJNIDQ3OS44OCAzMSBMIDQ3Mi44OCAzNC41IEwgNDc0LjYzIDMxIEwgNDcyLjg4IDI3LjUgWiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk3LjUsMjIuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjI3IiBoZWlnaHQ9IjE2IiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6MTVweDtmb250LWZhbWlseTpIZWx2ZXRpY2E7Y29sb3I6IzAwMDAwMDtsaW5lLWhlaWdodDoxLjI7dmVydGljYWwtYWxpZ246dG9wO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LWFsaWduOmNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7YmFja2dyb3VuZC1jb2xvcjojZmZmZmZmOyI+RW5kPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjE0IiB5PSIxNiIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxNXB4IiBmb250LWZhbWlseT0iSGVsdmV0aWNhIj5FbmQ8L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gMjcxLjYxIDEgTCAzMTAuMzkgMSBDIDMyNy4yOSAxIDM0MSAxNC40MyAzNDEgMzEgQyAzNDEgNDcuNTcgMzI3LjI5IDYxIDMxMC4zOSA2MSBMIDI3MS42MSA2MSBDIDI1NC43MSA2MSAyNDEgNDcuNTcgMjQxIDMxIEMgMjQxIDE0LjQzIDI1NC43MSAxIDI3MS42MSAxIFoiIGZpbGw9IiNmZmYyY2MiIHN0cm9rZT0iI2Q2YjY1NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQ4LjUsMjIuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjgzIiBoZWlnaHQ9IjE2IiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTVweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDgzcHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+SW4gUHJvZ3Jlc3M8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNDIiIHk9IjE2IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE1cHgiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtd2VpZ2h0PSJib2xkIj5JbiBQcm9ncmVzczwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSA1MzEgNjEgTCA1MzEgMTIxIEwgNTEgMTIxIEwgNTEgNjcuMzciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ibm9uZSIvPjxwYXRoIGQ9Ik0gNTEgNjIuMTIgTCA1NC41IDY5LjEyIEwgNTEgNjcuMzcgTCA0Ny41IDY5LjEyIFoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ibm9uZSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2NC41LDExMi41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iNTMiIGhlaWdodD0iMTYiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtc2l6ZToxNXB4O2ZvbnQtZmFtaWx5OkhlbHZldGljYTtjb2xvcjojMDAwMDAwO2xpbmUtaGVpZ2h0OjEuMjt2ZXJ0aWNhbC1hbGlnbjp0b3A7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtYWxpZ246Y2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7Ij5SZW9wZW48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMjciIHk9IjE2IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE1cHgiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiPlJlb3BlbjwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSA1MTEuNjEgMSBMIDU1MC4zOSAxIEMgNTY3LjI5IDEgNTgxIDE0LjQzIDU4MSAzMSBDIDU4MSA0Ny41NyA1NjcuMjkgNjEgNTUwLjM5IDYxIEwgNTExLjYxIDYxIEMgNDk0LjcxIDYxIDQ4MSA0Ny41NyA0ODEgMzEgQyA0ODEgMTQuNDMgNDk0LjcxIDEgNTExLjYxIDEgWiIgZmlsbD0iI2Q1ZThkNCIgc3Ryb2tlPSIjODJiMzY2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MDkuNSwyMi41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iNDEiIGhlaWdodD0iMTYiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxNXB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogNDFweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyBmb250LXdlaWdodDogYm9sZDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij5DbG9zZTwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIyMSIgeT0iMTYiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTVweCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC13ZWlnaHQ9ImJvbGQiPkNsb3NlPC90ZXh0Pjwvc3dpdGNoPjwvZz48L2c+PC9zdmc+" alt="" data-rotate="" data-proportion="true" data-size="581px,112px" data-align="none" data-file-name="20200106.svg" data-file-size="7536" data-origin="," style="width: 581px; height: 112px;"></figure></div><p><span style="font-size: 18px;background-color: rgb(209, 178, 255)">​<br></span></p><p><span style="font-size: 18px;background-color: rgb(209, 178, 255)"><br></span></p><p><br></p>
`;
let ta = document.querySelector("#textarea")
ta.value = data3;


let editor = suneditor.create('textarea', {
    plugins: plugins,
    buttonList: [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        '/', // Line break
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['table', 'link', 'image', 'video', 'audio' ], // You must add the 'katex' library at options to use the 'math' plugin.
        ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'],
        ['save', 'template'],
    ],
    resizingBar : false,
    showPathLabel: false,
    resizeEnable: true,
})

editor.readOnly(true);
editor.toolbar.hide();


// You can also load what you want
/*
suneditor.create('textarea', {
    plugins: [plugins.font],
    // Plugins can be used directly in the button list
    buttonList: [
        ['font', plugins.image]
    ]
})
*/

document.querySelector("#edit").onclick = () => {
       editor.readOnly(false);
       editor.toolbar.show();

};
document.querySelector("#view").onclick = () => {
       editor.readOnly(true);
       editor.toolbar.hide();
       editor.save();

};

document.querySelector("#save").onclick = () => {
        editor.save();
	let ta = document.querySelector("#textarea")
	console.log(ta.value);
};


