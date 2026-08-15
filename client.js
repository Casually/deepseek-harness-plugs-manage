window.__ModuleLoader__.load({
	id: "dsh-plug-manager",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		const React = require("react");
		const h = React.createElement;

		const CSS = [
			".pm-root{display:flex;flex-direction:column;gap:16px;padding:20px;max-width:980px;margin:0 auto;color:var(--dsw-alias-label-primary,#111);font-size:13px;line-height:1.5;}",
			".pm-tabs{display:flex;gap:8px;border-bottom:1px solid var(--dsw-alias-border-l1,#ddd);}",
			".pm-tab{padding:8px 14px;border:1px solid transparent;border-bottom:none;background:transparent;color:var(--dsw-alias-label-secondary,#666);cursor:pointer;border-radius:8px 8px 0 0;font-size:13px;}",
			".pm-tab.active{background:var(--dsw-alias-bg-layer-1,#fff);color:var(--dsw-alias-label-primary,#111);border-color:var(--dsw-alias-border-l1,#ddd);}",
			".pm-toolbar{display:flex;gap:8px;flex-wrap:wrap;}",
			".pm-input{flex:1;min-width:180px;padding:7px 10px;border:1px solid var(--dsw-alias-border-l1,#ddd);border-radius:8px;background:var(--dsw-alias-bg-layer-1,#fff);color:var(--dsw-alias-label-primary,#111);font-size:13px;outline:none;}",
			".pm-input:focus{border-color:var(--dsw-alias-brand-primary,#4a6cf7);}",
			".pm-select{padding:7px 10px;border:1px solid var(--dsw-alias-border-l1,#ddd);border-radius:8px;background:var(--dsw-alias-bg-layer-1,#fff);color:var(--dsw-alias-label-primary,#111);font-size:13px;}",
			".pm-btn{padding:6px 12px;border:1px solid var(--dsw-alias-border-l1,#ddd);border-radius:8px;background:var(--dsw-alias-bg-layer-1,#fff);color:var(--dsw-alias-label-primary,#111);cursor:pointer;font-size:12px;white-space:nowrap;text-decoration:none;display:inline-block;}",
			".pm-btn:hover{border-color:var(--dsw-alias-border-l2,#bbb);}",
			".pm-btn.primary{background:var(--dsw-alias-bg-base,#fff);border-color:var(--dsw-alias-border-l2,#bbb);color:var(--dsw-alias-label-primary,#111);font-weight:600;}",
			".pm-btn.primary:hover{border-color:var(--dsw-alias-label-primary,#111);}",
			".pm-btn.danger{color:var(--dsw-alias-state-error-primary,#d33);}",
			".pm-btn:disabled{opacity:.5;cursor:default;}",
			".pm-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;}",
			".pm-card{border:1px solid var(--dsw-alias-border-l1,#ddd);border-radius:10px;background:var(--dsw-alias-bg-layer-1,#fff);padding:14px;display:flex;flex-direction:column;gap:8px;}",
			".pm-card-head{display:flex;gap:10px;align-items:center;}",
			".pm-avatar{width:28px;height:28px;border-radius:50%;background:var(--dsw-alias-bg-layer-2,#f2f2f2);flex:none;}",
			".pm-name{font-weight:600;color:var(--dsw-alias-brand-primary,#4a6cf7);cursor:pointer;word-break:break-all;}",
			".pm-desc{color:var(--dsw-alias-label-secondary,#666);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:2.9em;}",
			".pm-meta{display:flex;gap:12px;color:var(--dsw-alias-label-secondary,#666);font-size:12px;flex-wrap:wrap;}",
			".pm-actions{display:flex;gap:8px;margin-top:auto;}",
			".pm-note{padding:10px 12px;border:1px solid var(--dsw-alias-border-l1,#ddd);border-radius:8px;background:var(--dsw-alias-bg-layer-2,#f7f7f7);color:var(--dsw-alias-label-secondary,#555);display:flex;flex-direction:column;gap:8px;}",
			".pm-job{border:1px solid var(--dsw-alias-border-l1,#ddd);border-radius:8px;background:var(--dsw-alias-bg-layer-1,#fff);padding:10px 12px;display:flex;flex-direction:column;gap:8px;}",
			".pm-output{margin:0;background:var(--dsw-alias-bg-layer-2,#f7f7f7);border:1px solid var(--dsw-alias-border-l1,#eee);border-radius:8px;padding:10px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;line-height:1.5;max-height:240px;overflow:auto;white-space:pre-wrap;word-break:break-all;}",
			".pm-error{color:var(--dsw-alias-state-error-primary,#d33);}",
			".pm-ok{color:var(--dsw-alias-state-success-primary,#2a9d4a);}",
			".pm-warn{color:var(--dsw-alias-state-warn-primary,#c8860a);}",
			".pm-detail{border:1px solid var(--dsw-alias-border-l1,#ddd);border-radius:10px;background:var(--dsw-alias-bg-layer-1,#fff);padding:16px;display:flex;flex-direction:column;gap:12px;}",
			".pm-facts{display:flex;flex-wrap:wrap;gap:8px;align-items:center;}",
			".pm-badge{padding:2px 8px;border-radius:999px;border:1px solid var(--dsw-alias-border-l1,#ddd);font-size:11px;color:var(--dsw-alias-label-secondary,#666);background:var(--dsw-alias-bg-layer-2,#f7f7f7);}",
			".pm-badge.good{color:var(--dsw-alias-state-success-primary,#2a9d4a);border-color:currentColor;}",
			".pm-badge.bad{color:var(--dsw-alias-state-error-primary,#d33);border-color:currentColor;}",
			".pm-readme{max-height:380px;overflow:auto;background:var(--dsw-alias-bg-layer-2,#f7f7f7);border:1px solid var(--dsw-alias-border-l1,#ddd);border-radius:8px;padding:14px;}",
			".pm-md{line-height:1.65;word-break:break-word;font-size:13px;color:var(--dsw-alias-label-primary,#222);}",
			".pm-md h1{font-size:1.35em;margin:.6em 0 .4em;padding-bottom:.25em;border-bottom:1px solid var(--dsw-alias-border-l1,#e5e5e5);}",
			".pm-md h2{font-size:1.2em;margin:.7em 0 .4em;padding-bottom:.2em;border-bottom:1px solid var(--dsw-alias-border-l1,#e5e5e5);}",
			".pm-md h3{font-size:1.08em;margin:.6em 0 .3em;}",
			".pm-md h4,.pm-md h5,.pm-md h6{font-size:1em;margin:.5em 0 .3em;color:var(--dsw-alias-label-secondary,#555);}",
			".pm-md p{margin:.45em 0;}",
			".pm-md a{color:var(--dsw-alias-brand-primary,#4a6cf7);text-decoration:none;}",
			".pm-md a:hover{text-decoration:underline;}",
			".pm-md code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.92em;background:var(--dsw-alias-bg-layer-1,#fff);border:1px solid var(--dsw-alias-border-l1,#e5e5e5);border-radius:4px;padding:.08em .35em;}",
			".pm-md pre{background:var(--dsw-alias-bg-layer-1,#fff);border:1px solid var(--dsw-alias-border-l1,#e5e5e5);border-radius:8px;padding:10px;overflow:auto;margin:.5em 0;}",
			".pm-md pre code{background:transparent;border:none;padding:0;font-size:11px;white-space:pre;}",
			".pm-md blockquote{margin:.5em 0;padding:.2em .8em;border-left:3px solid var(--dsw-alias-border-l2,#ccc);color:var(--dsw-alias-label-secondary,#666);}",
			".pm-md ul,.pm-md ol{margin:.4em 0;padding-left:1.6em;}",
			".pm-md li{margin:.15em 0;}",
			".pm-md img{max-width:100%;border-radius:6px;margin:.2em 0;}",
			".pm-md hr{border:none;border-top:1px solid var(--dsw-alias-border-l1,#e5e5e5);margin:1em 0;}",
			".pm-md-table{border-collapse:collapse;margin:.6em 0;font-size:12px;display:block;overflow-x:auto;max-width:100%;}",
			".pm-md-table th,.pm-md-table td{border:1px solid var(--dsw-alias-border-l1,#ddd);padding:4px 10px;}",
			".pm-md-table th{background:var(--dsw-alias-bg-layer-1,#fff);}",
			".pm-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}",
			".pm-profile-card{border:1px solid var(--dsw-alias-border-l1,#ddd);border-radius:10px;background:var(--dsw-alias-bg-layer-1,#fff);padding:14px;display:flex;flex-direction:column;gap:10px;}",
			".pm-dep{display:flex;align-items:center;gap:8px;padding:6px 0;border-top:1px solid var(--dsw-alias-border-l1,#eee);flex-wrap:wrap;}",
			".pm-spacer{flex:1;}",
			".pm-muted{color:var(--dsw-alias-label-secondary,#777);font-size:12px;}",
			".pm-code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;background:var(--dsw-alias-bg-layer-2,#f7f7f7);border:1px solid var(--dsw-alias-border-l1,#eee);border-radius:6px;padding:2px 6px;word-break:break-all;}",
		].join("\n");

		function rpc(path, params) {
			const entries = [];
			if (params) {
				for (const key of Object.keys(params)) {
					const value = params[key];
					if (value === undefined || value === null || value === "") continue;
					entries.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(value)));
				}
			}
			const url = "/plug-mgr/" + path + (entries.length > 0 ? "?" + entries.join("&") : "");
			return fetch(url, { headers: { accept: "application/json" } }).then((res) => {
				if (!res.ok) return { ok: false, error: "请求 /plug-mgr/" + path + " 返回 HTTP " + res.status };
				return res.json();
			});
		}

		function errMsg(error) {
			if (error === null || error === undefined) return "未知错误";
			if (typeof error === "string") return error;
			if (typeof error.message === "string") return error.message;
			return String(error);
		}

		// ------------------------------------------------------- Markdown 渲染
		// 迷你 Markdown → React 元素渲染器：不插入任何原始 HTML，文本一律经
		// React 转义，链接只放行 http(s)/锚点，因此 README 中的恶意内容无法
		// 注入脚本。支持：标题、围栏代码块、行内代码、粗/斜/删除线、链接、
		// 图片（相对路径自动改写为 raw.githubusercontent.com）、有序/无序列表
		// （含嵌套）、引用、表格、分隔线。
		const MD_HEADING_RE = /^(#{1,6})\s+(.+?)\s*#*\s*$/;
		const MD_HR_RE = /^ {0,3}(?:-{3,}|\*{3,}|_{3,})\s*$/;
		const MD_FENCE_RE = /^(`{3,}|~{3,})\s*([A-Za-z0-9_+#.-]*)\s*$/;
		const MD_LIST_RE = /^(\s*)([-*+]|\d{1,9}[.)])\s+(.*)$/;
		const MD_QUOTE_RE = /^ {0,3}>\s?(.*)$/;
		const MD_TABLE_SEP_RE = /^\s*\|?\s*:?-{2,}[^\s|]*\s*(\|\s*:?-{2,}[^\s|]*\s*)*\|?\s*$/;

		function mdSafeUrl(url) {
			if (typeof url !== "string") return null;
			const u = url.trim();
			if (/^https?:\/\//i.test(u)) return u;
			if (u.startsWith("#")) return u;
			return null;
		}

		function mdSplitTableRow(line) {
			let t = line.trim();
			if (t.startsWith("|")) t = t.slice(1);
			if (t.endsWith("|")) t = t.slice(0, -1);
			return t.split("|").map((c) => c.trim());
		}

		function mdInline(text, keyBase, resolveImage) {
			const patterns = [
				{ re: /`([^`]+)`/, type: "code" },
				{ re: /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/, type: "img" },
				{ re: /\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/, type: "link" },
				{ re: /\*\*([\s\S]+?)\*\*/, type: "bold" },
				{ re: /__([\s\S]+?)__/, type: "bold" },
				{ re: /~~([\s\S]+?)~~/, type: "strike" },
				{ re: /\*([^*\n]+)\*/, type: "italic" },
				{ re: /(^|[\s(])_([^_\n]+)_(?=[\s).,!?:;]|$)/, type: "italic2" },
			];
			const nodes = [];
			let rest = text;
			let k = 0;
			while (rest.length > 0) {
				let best = null;
				for (const p of patterns) {
					const m = p.re.exec(rest);
					if (m !== null && (best === null || m.index < best.m.index || (m.index === best.m.index && m[0].length > best.m[0].length))) {
						best = { p, m };
					}
				}
				if (best === null) { nodes.push(rest); break; }
				const p = best.p;
				const m = best.m;
				if (m.index > 0) nodes.push(rest.slice(0, m.index));
				const kk = keyBase + "-" + (k++);
				if (p.type === "code") {
					nodes.push(h("code", { key: kk }, m[1]));
				} else if (p.type === "img") {
					const src = resolveImage(m[2]);
					if (src !== null) nodes.push(h("img", { key: kk, src, alt: m[1], loading: "lazy" }));
					else nodes.push(m[1] !== "" ? m[1] : m[0]);
				} else if (p.type === "link") {
					const href = mdSafeUrl(m[2]);
					if (href !== null) nodes.push(h("a", { key: kk, href, target: "_blank", rel: "noreferrer noopener" }, mdInline(m[1], kk, resolveImage)));
					else nodes.push(m[1]);
				} else if (p.type === "bold") {
					nodes.push(h("strong", { key: kk }, mdInline(m[1], kk, resolveImage)));
				} else if (p.type === "strike") {
					nodes.push(h("del", { key: kk }, mdInline(m[1], kk, resolveImage)));
				} else if (p.type === "italic") {
					nodes.push(h("em", { key: kk }, mdInline(m[1], kk, resolveImage)));
				} else {
					nodes.push(m[1]);
					nodes.push(h("em", { key: kk }, mdInline(m[2], kk, resolveImage)));
				}
				rest = rest.slice(m.index + m[0].length);
			}
			return nodes;
		}

		function mdBuildList(items, keyBase, resolveImage) {
			function build(from, indent) {
				const ordered = items[from].ordered;
				const lis = [];
				let idx = from;
				while (idx < items.length) {
					const it = items[idx];
					if (it.indent < indent) break;
					if (it.indent > indent) {
						const sub = build(idx, it.indent);
						if (lis.length === 0) lis.push(h("li", { key: keyBase + "-x" + idx }, sub.el));
						else {
							const last = lis[lis.length - 1];
							const prev = Array.isArray(last.props.children) ? last.props.children : [last.props.children];
							lis[lis.length - 1] = h("li", { key: last.key }, prev.concat(sub.el));
						}
						idx = sub.idx;
						continue;
					}
					lis.push(h("li", { key: keyBase + "-" + idx }, mdInline(it.text, keyBase + "-" + idx, resolveImage)));
					idx++;
				}
				return { el: h(ordered ? "ol" : "ul", { key: keyBase + "-l" + from }, lis), idx };
			}
			return build(0, items[0].indent).el;
		}

		function renderMarkdown(text, resolveImage) {
			const lines = String(text).split(/\r?\n/);
			const blocks = [];
			let i = 0;
			let key = 0;
			while (i < lines.length) {
				const line = lines[i];
				if (line.trim() === "") { i++; continue; }
				const fence = MD_FENCE_RE.exec(line);
				if (fence !== null) {
					const closer = new RegExp("^" + fence[1].slice(0, 3) + "+\\s*$");
					const buf = [];
					i++;
					while (i < lines.length && !closer.test(lines[i])) { buf.push(lines[i]); i++; }
					i++;
					blocks.push(h("pre", { key: "b" + (key++) }, h("code", null, buf.join("\n"))));
					continue;
				}
				const hd = MD_HEADING_RE.exec(line);
				if (hd !== null) {
					blocks.push(h("h" + hd[1].length, { key: "b" + (key++) }, mdInline(hd[2], "hd" + key, resolveImage)));
					i++;
					continue;
				}
				if (MD_HR_RE.test(line)) { blocks.push(h("hr", { key: "b" + (key++) })); i++; continue; }
				if (MD_QUOTE_RE.test(line)) {
					const buf = [];
					while (i < lines.length && lines[i].trim() !== "") {
						const qm = MD_QUOTE_RE.exec(lines[i]);
						if (qm === null) break;
						buf.push(qm[1]);
						i++;
					}
					blocks.push(h("blockquote", { key: "b" + (key++) }, renderMarkdown(buf.join("\n"), resolveImage)));
					continue;
				}
				if (line.indexOf("|") !== -1 && i + 1 < lines.length && lines[i + 1].indexOf("|") !== -1 && lines[i + 1].indexOf("-") !== -1 && MD_TABLE_SEP_RE.test(lines[i + 1])) {
					const header = mdSplitTableRow(line);
					i += 2;
					const rows = [];
					while (i < lines.length && lines[i].indexOf("|") !== -1 && lines[i].trim() !== "") { rows.push(mdSplitTableRow(lines[i])); i++; }
					blocks.push(h("table", { key: "b" + (key++), className: "pm-md-table" },
						h("thead", null, h("tr", null, header.map((c, ci) => h("th", { key: ci }, mdInline(c, "th" + key + "-" + ci, resolveImage))))),
						h("tbody", null, rows.map((r, ri) => h("tr", { key: ri }, r.map((c, ci) => h("td", { key: ci }, mdInline(c, "td" + key + "-" + ri + "-" + ci, resolveImage)))))),
					));
					continue;
				}
				if (MD_LIST_RE.test(line)) {
					const items = [];
					while (i < lines.length) {
						const m2 = MD_LIST_RE.exec(lines[i]);
						if (m2 === null) {
							if (/^\s{2,}\S/.test(lines[i]) && items.length > 0) {
								items[items.length - 1].text += " " + lines[i].trim();
								i++;
								continue;
							}
							break;
						}
						items.push({ indent: m2[1].replace(/\t/g, "  ").length, ordered: /^\d/.test(m2[2]), text: m2[3] });
						i++;
					}
					blocks.push(mdBuildList(items, "ls" + (key++), resolveImage));
					continue;
				}
				const buf = [line];
				i++;
				while (i < lines.length && lines[i].trim() !== "" && !MD_HEADING_RE.test(lines[i]) && !MD_FENCE_RE.test(lines[i]) && !MD_HR_RE.test(lines[i]) && !MD_QUOTE_RE.test(lines[i]) && !MD_LIST_RE.test(lines[i])) {
					buf.push(lines[i]);
					i++;
				}
				blocks.push(h("p", { key: "b" + (key++) }, mdInline(buf.join("\n"), "p" + key, resolveImage)));
			}
			return blocks;
		}

		function jobLabel(job) {
			if (job.op === "install") return "正在安装 " + job.spec + " 到 profile " + job.profile;
			if (job.op === "remove") return "正在从 profile " + job.profile + " 移除 " + job.spec;
			return job.spec !== "" ? "正在更新 " + job.spec + "（profile " + job.profile + "）" : "正在更新 profile " + job.profile + " 的全部插件";
		}

		function JobPanel(props) {
			const [job, setJob] = React.useState(null);
			const settledRef = React.useRef(false);
			React.useEffect(() => {
				let alive = true;
				let timer = null;
				function poll() {
					rpc("job", { id: props.jobId })
						.then((r) => {
							if (!alive) return;
							if (r && r.ok) {
								setJob(r.job);
								if (r.job.status === "running") timer = setTimeout(poll, 2000);
								else if (!settledRef.current) {
									settledRef.current = true;
									if (props.onSettled) props.onSettled(r.job.status === "success");
								}
							}
						})
						.catch(() => {});
				}
				poll();
				return () => { alive = false; if (timer !== null) clearTimeout(timer); };
			}, [props.jobId]);
			if (job === null) return h("div", { className: "pm-muted" }, "正在启动任务…");
			const running = job.status === "running";
			return h("div", { className: "pm-job" },
				h("div", { className: "pm-row" },
					running
						? h("span", { className: "pm-badge" }, "执行中…")
						: (job.status === "success" ? h("span", { className: "pm-badge good" }, "成功") : h("span", { className: "pm-badge bad" }, "失败")),
					h("span", { className: "pm-muted" }, running ? jobLabel(job) : (job.status === "success" ? "完成" : "操作失败（退出码 " + job.exitCode + "）")),
					h("span", { className: "pm-spacer" }),
					running ? h("button", { className: "pm-btn danger", onClick: () => rpc("job", { id: props.jobId, cancel: "1" }).catch(() => {}) }, "取消") : null,
				),
				job.note !== "" ? h("div", { className: "pm-muted" }, job.note) : null,
				h("pre", { className: "pm-output", ref: (el) => { if (el !== null) el.scrollTop = el.scrollHeight; } },
					job.output !== "" ? job.output : "（暂无输出）"),
				job.status === "success" ? h("div", { className: "pm-ok" }, "已完成 — 重启 DSH 后生效。") : null,
				job.status === "error" ? h("div", { className: "pm-error" }, "执行失败 — 请查看上方输出。常见原因：网络/代理、pnpm 与 Node 版本不兼容、包不存在。") : null,
			);
		}

		function InstallBox(props) {
			const names = props.env && Array.isArray(props.env.profiles) && props.env.profiles.length > 0
				? props.env.profiles.map((p) => p.name)
				: ["web"];
			const [profile, setProfile] = React.useState(names.indexOf(props.defaultProfile) >= 0 ? props.defaultProfile : names[0]);
			const [spec, setSpec] = React.useState(props.defaultSpec);
			const [busy, setBusy] = React.useState(false);
			const [jobId, setJobId] = React.useState(null);
			const [message, setMessage] = React.useState(null);
			React.useEffect(() => { setSpec(props.defaultSpec); setMessage(null); setJobId(null); }, [props.defaultSpec]);
			function request() {
				setBusy(true);
				setMessage(null);
				rpc("request", { op: "install", profile, spec })
					.then((r) => {
						if (r && r.ok) setJobId(r.jobId);
						else { setMessage({ ok: false, text: r && r.error ? r.error : "请求失败" }); setBusy(false); }
					})
					.catch((e) => { setMessage({ ok: false, text: errMsg(e) }); setBusy(false); });
			}
			return h("div", { className: "pm-note" },
				h("div", { className: "pm-row" }, h("strong", null, "安装此插件")),
				jobId !== null
					? h(JobPanel, { jobId, onSettled: (ok) => { setBusy(false); if (ok && props.onRequested) props.onRequested(); } })
					: h(React.Fragment, null,
						h("div", { className: "pm-row" },
							h("label", null, "Profile"),
							h("select", { className: "pm-select", value: profile, onChange: (e) => setProfile(e.target.value) },
								names.map((name) => h("option", { key: name, value: name }, name))),
							h("label", null, "安装源"),
							h("input", { className: "pm-input", style: { flex: "1 1 260px" }, value: spec, onChange: (e) => setSpec(e.target.value) }),
							h("button", { className: "pm-btn primary", disabled: busy, onClick: request }, "申请安装"),
						),
						h("div", { className: "pm-muted" },
							"点击后由插件管理器直接执行 dsh plugin 安装并实时显示输出（git 源若已发布到 npm 会自动改用 npm 包）。安装成功后需重启 DSH 才能组合生效。"),
						message !== null ? h("div", { className: message.ok ? "pm-ok" : "pm-error" }, message.text) : null),
			);
		}

		function DetailPanel(props) {
			const [data, setData] = React.useState(null);
			const [error, setError] = React.useState("");
			React.useEffect(() => {
				let alive = true;
				setData(null);
				setError("");
				rpc("repo", { fullName: props.fullName })
					.then((r) => {
						if (!alive) return;
						if (r && r.ok) setData(r);
						else setError(r && r.error ? r.error : "加载仓库失败");
					})
					.catch((e) => { if (alive) setError(errMsg(e)); });
				return () => { alive = false; };
			}, [props.fullName]);

			return h("div", { className: "pm-detail" },
				h("div", { className: "pm-row" },
					h("strong", { style: { fontSize: "15px" } }, props.fullName),
					h("span", { className: "pm-spacer" }),
					h("a", { className: "pm-btn", href: "https://github.com/" + props.fullName, target: "_blank", rel: "noreferrer" }, "GitHub ↗"),
					h("button", { className: "pm-btn", onClick: props.onClose }, "关闭"),
				),
				error !== "" ? h("div", { className: "pm-error" }, error) : null,
				data === null && error === "" ? h("div", { className: "pm-muted" }, "正在加载仓库详情…") : null,
				data !== null ? h(React.Fragment, null,
					h("div", { className: "pm-facts" },
						h("span", { className: "pm-badge" }, "★ " + data.repo.stars),
						h("span", { className: "pm-badge" }, "派生 " + data.repo.forks),
						h("span", { className: "pm-badge" }, "议题 " + data.repo.openIssues),
						data.repo.license !== "" ? h("span", { className: "pm-badge" }, data.repo.license) : null,
						data.repo.archived ? h("span", { className: "pm-badge bad" }, "已归档") : null,
						data.manifest !== null
							? h("span", { className: "pm-badge" }, (data.manifest.name !== "" ? data.manifest.name : "package") + "@" + data.manifest.version) : null,
						data.manifest !== null && data.manifest.hasBundle
							? h("span", { className: "pm-badge good" }, "dsh.bundle ✓")
							: h("span", { className: "pm-badge bad" }, "无 dsh.bundle（普通依赖）"),
						data.manifest !== null && data.manifest.hasPrepare
							? h("span", { className: "pm-badge bad" }, "含 prepare 脚本 — git 安装将从源码构建") : null,
						data.repo.topics.map((topic) => h("span", { key: topic, className: "pm-badge" }, topic)),
					),
					data.repo.homepage !== "" ? h("div", { className: "pm-muted" }, "主页：", data.repo.homepage) : null,
					h(InstallBox, { env: props.env, defaultProfile: props.defaultProfile, defaultSpec: data.installSpec, onRequested: props.onRequested }),
					data.readme.name !== ""
						? h(React.Fragment, null,
							h("div", { className: "pm-muted" }, data.readme.name + (data.readme.truncated ? "（已截断）" : "")),
							h("div", { className: "pm-readme pm-md" }, renderMarkdown(data.readme.text, (src) => {
								if (/^https?:\/\//i.test(src)) return src;
								if (/^(data|javascript|vbscript):/i.test(src)) return null;
								return "https://raw.githubusercontent.com/" + data.repo.fullName + "/" + data.repo.branch + "/" + src.replace(/^\.\//, "");
							})))
						: h("div", { className: "pm-muted" }, "未找到 README。"),
				) : null,
			);
		}

		function RepoCard(props) {
			const repo = props.repo;
			return h("div", { className: "pm-card" },
				h("div", { className: "pm-card-head" },
					repo.owner.avatar !== ""
						? h("img", { className: "pm-avatar", src: repo.owner.avatar, alt: "" })
						: h("div", { className: "pm-avatar" }),
					h("span", { className: "pm-name", title: "查看详情", onClick: () => props.onOpen(repo.fullName) }, repo.fullName),
				),
				h("div", { className: "pm-desc" }, repo.description !== "" ? repo.description : "（无描述）"),
				h("div", { className: "pm-meta" },
					h("span", null, "★ " + repo.stars),
					repo.language !== "" ? h("span", null, repo.language) : null,
					h("span", null, "更新于 " + repo.updatedAt.slice(0, 10)),
					repo.archived ? h("span", { className: "pm-warn" }, "已归档") : null,
				),
				h("div", { className: "pm-actions" },
					h("button", { className: "pm-btn", onClick: () => props.onOpen(repo.fullName) }, "详情 / 安装"),
					h("a", { className: "pm-btn", href: repo.url, target: "_blank", rel: "noreferrer" }, "GitHub ↗"),
				),
			);
		}

		function ProxyBar() {
			const [info, setInfo] = React.useState(null);
			const [value, setValue] = React.useState("");
			const [busy, setBusy] = React.useState(false);
			const [msg, setMsg] = React.useState(null);
			function refresh() { rpc("proxy").then((r) => { if (r && r.ok) setInfo(r); }).catch(() => {}); }
			React.useEffect(() => { refresh(); }, []);
			function applyProxy() {
				if (value.trim() === "") { setMsg({ ok: false, text: "请先输入代理地址（如 http://127.0.0.1:7890），或留空后点「清除」" }); return; }
				setBusy(true);
				rpc("proxy", { set: value.trim() })
					.then((r) => {
						if (r && r.ok) { setInfo(r); setMsg({ ok: true, text: "已保存并生效：" + (r.proxy === "" ? "强制直连" : r.proxy) + "（" + r.source + "）" }); setValue(""); }
						else setMsg({ ok: false, text: r && r.error ? r.error : "应用失败" });
					})
					.catch((e) => setMsg({ ok: false, text: errMsg(e) }))
					.then(() => setBusy(false));
			}
			function clearProxy() {
				rpc("proxy", { clear: "1" })
					.then((r) => {
						if (r && r.ok) { setInfo(r); setMsg({ ok: true, text: "已清除保存的代理设置，当前生效：" + (r.proxy === "" ? "直连" : r.proxy + "（" + r.source + "）") }); }
					})
					.catch((e) => setMsg({ ok: false, text: errMsg(e) }));
			}
			function testProxy() {
				setBusy(true);
				setMsg(null);
				rpc("proxy-test")
					.then((r) => {
						if (r && r.ok) setMsg({ ok: true, text: "连接成功 — HTTP " + r.status + "，" + r.latencyMs + "ms，经由 " + (r.proxy !== "" ? r.proxy : "直连") + (r.text ? "，响应：" + r.text : "") });
						else setMsg({ ok: false, text: r && r.error ? r.error : "测试失败" });
					})
					.catch((e) => setMsg({ ok: false, text: errMsg(e) }))
					.then(() => setBusy(false));
			}
			return h("div", { className: "pm-note" },
				h("div", { className: "pm-row" },
					h("strong", null, "GitHub 代理"),
					h("span", { className: "pm-muted" }, info === null ? "检测中…" : (info.proxy !== "" ? info.proxy + " — " + info.source : "直连 — " + info.source)),
					info !== null && info.curl === false ? h("span", { className: "pm-error" }, "宿主未找到 curl，代理不可用") : null,
				),
				h("div", { className: "pm-row" },
					h("input", {
						className: "pm-input",
						style: { flex: "1 1 260px" },
						placeholder: "http://127.0.0.1:7890（支持 http / https / socks5 / socks5h / socks4）",
						value: value,
						onChange: (e) => setValue(e.target.value),
						onKeyDown: (e) => { if (e.key === "Enter") applyProxy(); },
					}),
					h("button", { className: "pm-btn primary", disabled: busy, onClick: applyProxy }, "应用"),
					h("button", { className: "pm-btn", disabled: busy, onClick: clearProxy }, "清除"),
					h("button", { className: "pm-btn", disabled: busy, onClick: testProxy }, "测试连接"),
				),
				h("div", { className: "pm-muted" }, "设置会保存到 DSH 主目录（plug-manager.json），重启后仍然生效。优先级：持久设置 > 插件配置（patch config.proxy）> 环境变量（HTTPS_PROXY 等）。"),
				msg !== null ? h("div", { className: msg.ok ? "pm-ok" : "pm-error" }, msg.text) : null,
			);
		}

		function DiscoverView(props) {
			const [query, setQuery] = React.useState("");
			const [sort, setSort] = React.useState("");
			const [repos, setRepos] = React.useState([]);
			const [total, setTotal] = React.useState(null);
			const [page, setPage] = React.useState(0);
			const [loading, setLoading] = React.useState(false);
			const [error, setError] = React.useState("");
			const [selected, setSelected] = React.useState(null);

			function runSearch(reset, queryText, sortMode, currentPage, currentRepos) {
				setLoading(true);
				setError("");
				const target = reset ? 1 : currentPage + 1;
				rpc("search", { query: queryText, sort: sortMode, page: target })
					.then((r) => {
						if (r && r.ok) {
							setTotal(r.total);
							setRepos(reset ? r.repos : currentRepos.concat(r.repos));
							setPage(r.page);
						} else setError(r && r.error ? r.error : "搜索失败");
					})
					.catch((e) => setError(errMsg(e)))
					.then(() => setLoading(false));
			}

			React.useEffect(() => { runSearch(true, "", "", 0, []); }, []);

			return h(React.Fragment, null,
				h(ProxyBar, null),
				h("div", { className: "pm-toolbar" },
					h("input", {
						className: "pm-input",
						placeholder: "搜索带 dsh-plugin 标签的仓库…",
						value: query,
						onChange: (e) => setQuery(e.target.value),
						onKeyDown: (e) => { if (e.key === "Enter") runSearch(true, query, sort, 0, []); },
					}),
					h("select", { className: "pm-select", value: sort, onChange: (e) => setSort(e.target.value) },
						h("option", { value: "" }, "最佳匹配"),
						h("option", { value: "stars" }, "最多 Star"),
						h("option", { value: "updated" }, "最近更新"),
					),
					h("button", { className: "pm-btn", disabled: loading, onClick: () => runSearch(true, query, sort, 0, []) }, "搜索"),
				),
				h("div", { className: "pm-muted" },
					total !== null ? total + " 个带 dsh-plugin 标签的仓库（github.com/topics/dsh-plugin）" : "正在浏览 github.com/topics/dsh-plugin…",
					loading ? " — 加载中…" : ""),
				error !== "" ? h("div", { className: "pm-error" }, error) : null,
				selected !== null
					? h(DetailPanel, { fullName: selected, env: props.env, defaultProfile: props.defaultProfile, onClose: () => setSelected(null), onRequested: props.onRequested })
					: null,
				h("div", { className: "pm-cards" }, repos.map((repo) => h(RepoCard, { key: repo.fullName, repo, onOpen: setSelected }))),
				total !== null && repos.length < total
					? h("div", { className: "pm-row" }, h("button", { className: "pm-btn", disabled: loading, onClick: () => runSearch(false, query, sort, page, repos) }, "加载更多"))
					: null,
			);
		}

		function ProfileCard(props) {
			const p = props.profile;
			const [jobId, setJobId] = React.useState(null);
			const [message, setMessage] = React.useState(null);
			function requestOp(op, packageName) {
				setMessage(null);
				const args = { op, profile: p.name, packageName };
				rpc("request", args)
					.then((r) => {
						if (r && r.ok) setJobId(r.jobId);
						else setMessage({ ok: false, text: r && r.error ? r.error : "请求失败" });
					})
					.catch((e) => setMessage({ ok: false, text: errMsg(e) }));
			}
			return h("div", { className: "pm-profile-card" },
				h("div", { className: "pm-row" },
					h("strong", null, "Profile：" + p.name),
					h("span", { className: "pm-spacer" }),
					p.dependencies.length > 0 ? h("button", { className: "pm-btn", onClick: () => requestOp("update", "") }, "全部更新") : null,
				),
				h("div", { className: "pm-muted" }, "Bundle 栈：" + (p.bundles.length > 0 ? p.bundles.join(" → ") : "（空）")),
				jobId !== null ? h(JobPanel, { jobId, onSettled: (ok) => { if (ok && props.onRequested) props.onRequested(); } }) : null,
				p.dependencies.length === 0 ? h("div", { className: "pm-muted" }, "此 profile 尚未安装外部插件。") : null,
				p.dependencies.map((dep) => h("div", { className: "pm-dep", key: dep.name },
					h("span", { className: "pm-code" }, dep.name),
					dep.isBundle ? h("span", { className: "pm-badge good" }, "dsh.bundle") : h("span", { className: "pm-badge" }, "普通依赖"),
					h("span", { className: "pm-muted" }, dep.spec),
					h("span", { className: "pm-spacer" }),
					h("button", { className: "pm-btn", onClick: () => requestOp("update", dep.name) }, "更新"),
					h("button", { className: "pm-btn danger", onClick: () => requestOp("remove", dep.name) }, "移除"),
				)),
				message !== null ? h("div", { className: message.ok ? "pm-ok" : "pm-error" }, message.text) : null,
			);
		}

		function InstalledView(props) {
			const env = props.env;
			if (env === null) return h("div", { className: "pm-muted" }, "正在加载 profile…");
			return h(React.Fragment, null,
				h("div", { className: "pm-note" },
					h("div", null, "DSH 主目录：", h("span", { className: "pm-code" }, env.dshHome)),
					h("div", null, "dsh CLI：", env.cli.kind !== "missing"
						? h("span", { className: "pm-code" }, env.cli.kind === "bin" ? env.cli.value : env.cli.value + "（源码目录）")
						: h("span", { className: "pm-error" }, "未找到 — 安装将会失败")),
					h("div", null, "pnpm：", env.pnpm !== "" ? h("span", { className: "pm-code" }, env.pnpm) : h("span", { className: "pm-error" }, "未找到")),
					h("div", { className: "pm-muted" }, "等效命令：dsh plugin --profile <name> add -w <package>（profile 本身是 pnpm workspace 根目录，必须带 -w）。此处的操作由插件管理器直接执行并实时显示输出。"),
				),
				env.profiles.map((p) => h(ProfileCard, { key: p.name, profile: p, onRequested: props.onRequested })),
			);
		}

		function PlugMarketplace() {
			const [tab, setTab] = React.useState("discover");
			const [env, setEnv] = React.useState(null);
			const [error, setError] = React.useState("");

			function refreshEnv() {
				rpc("profiles")
					.then((r) => {
						if (r && r.ok) { setEnv(r); setError(""); }
						else setError(r && r.error ? r.error : "加载 profile 失败");
					})
					.catch((e) => setError(errMsg(e)));
			}
			React.useEffect(() => { refreshEnv(); }, []);

			const defaultProfile = env !== null && env.profiles.length > 0 ? env.profiles[0].name : "web";

			return h("div", { className: "pm-root" },
				h("div", { className: "pm-tabs" },
					h("button", { className: "pm-tab" + (tab === "discover" ? " active" : ""), onClick: () => setTab("discover") }, "发现"),
					h("button", { className: "pm-tab" + (tab === "installed" ? " active" : ""), onClick: () => setTab("installed") }, "已安装"),
				),
				error !== "" ? h("div", { className: "pm-error" }, error) : null,
				tab === "discover"
					? h(DiscoverView, { env, defaultProfile, onRequested: refreshEnv })
					: h(InstalledView, { env, onRequested: refreshEnv }),
			);
		}

		function apply(ctx) {
			ctx.effect(() => {
				const tag = document.createElement("style");
				tag.dataset.plugin = "dsh-plug-manager";
				tag.dataset.pluginCss = "dsh-plug-manager/marketplace.css";
				tag.textContent = CSS;
				document.head.appendChild(tag);
				return () => { tag.remove(); };
			}, "plug-manager: css");
			const slots = ctx.get("slots");
			if (slots === undefined) return;
			slots.inject("settings.plugins.tab", () => slots.register(
				{ name: "settings.plugins.tab", id: "plug-marketplace", order: 30, label: "插件市场" },
				() => h(PlugMarketplace, null),
			));
		}

		exports.apply = apply;
		return module.exports;
	}
});
