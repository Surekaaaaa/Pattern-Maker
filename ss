[33mcommit 0295e84e806b376cf0640f41fb9c101242440a42[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m)[m
Author: Surekaaaaa <surekaaa18@gmail.com>
Date:   Wed Jul 8 22:59:43 2026 +0530

    Complete frontend and backend integration

 .../__pycache__/isympy.cpython-310.pyc             |   Bin [31m0[m -> [32m9436[m bytes
 .../Lib/site-packages/_distutils_hack/__init__.py  |   179 [32m+[m[31m-[m
 .../__pycache__/__init__.cpython-310.pyc           |   Bin [31m5138[m -> [32m8257[m bytes
 .../__pycache__/override.cpython-310.pyc           |   Bin [31m243[m -> [32m243[m bytes
 backend/.venv/Lib/site-packages/_yaml/__init__.py  |    33 [32m+[m
 .../_yaml/__pycache__/__init__.cpython-310.pyc     |   Bin [31m0[m -> [32m744[m bytes
 .../INSTALLER                                      |     0
 .../accelerate-1.14.0.dist-info/METADATA           |   391 [32m+[m
 .../accelerate-1.14.0.dist-info/RECORD             |   181 [32m+[m
 .../REQUESTED                                      |     0
 .../accelerate-1.14.0.dist-info/WHEEL              |     5 [32m+[m
 .../accelerate-1.14.0.dist-info/entry_points.txt   |     6 [32m+[m
 .../accelerate-1.14.0.dist-info/licenses/LICENSE   |   201 [32m+[m
 .../accelerate-1.14.0.dist-info/top_level.txt      |     1 [32m+[m
 .../.venv/Lib/site-packages/accelerate/__init__.py |    51 [32m+[m
 .../__pycache__/__init__.cpython-310.pyc           |   Bin [31m0[m -> [32m1297[m bytes
 .../__pycache__/accelerator.cpython-310.pyc        |   Bin [31m0[m -> [32m137411[m bytes
 .../__pycache__/big_modeling.cpython-310.pyc       |   Bin [31m0[m -> [32m29420[m bytes
 .../__pycache__/checkpointing.cpython-310.pyc      |   Bin [31m0[m -> [32m10075[m bytes
 .../__pycache__/data_loader.cpython-310.pyc        |   Bin [31m0[m -> [32m43760[m bytes
 .../accelerate/__pycache__/hooks.cpython-310.pyc   |   Bin [31m0[m -> [32m25584[m bytes
 .../__pycache__/inference.cpython-310.pyc          |   Bin [31m0[m -> [32m5952[m bytes
 .../__pycache__/launchers.cpython-310.pyc          |   Bin [31m0[m -> [32m10447[m bytes
 .../__pycache__/local_sgd.cpython-310.pyc          |   Bin [31m0[m -> [32m3725[m bytes
 .../accelerate/__pycache__/logging.cpython-310.pyc |   Bin [31m0[m -> [32m4796[m bytes
 .../__pycache__/memory_utils.cpython-310.pyc       |   Bin [31m0[m -> [32m440[m bytes
 .../__pycache__/optimizer.cpython-310.pyc          |   Bin [31m0[m -> [32m7337[m bytes
 .../__pycache__/parallelism_config.cpython-310.pyc |   Bin [31m0[m -> [32m13733[m bytes
 .../__pycache__/scheduler.cpython-310.pyc          |   Bin [31m0[m -> [32m3356[m bytes
 .../accelerate/__pycache__/state.cpython-310.pyc   |   Bin [31m0[m -> [32m44620[m bytes
 .../__pycache__/tracking.cpython-310.pyc           |   Bin [31m0[m -> [32m47962[m bytes
 .../Lib/site-packages/accelerate/accelerator.py    |  4359 [32m+++[m
 .../Lib/site-packages/accelerate/big_modeling.py   |   799 [32m+[m
 .../Lib/site-packages/accelerate/checkpointing.py  |   340 [32m+[m
 .../site-packages/accelerate/commands/__init__.py  |    13 [32m+[m
 .../commands/__pycache__/__init__.cpython-310.pyc  |   Bin [31m0[m -> [32m196[m bytes
 .../__pycache__/accelerate_cli.cpython-310.pyc     |   Bin [31m0[m -> [32m1410[m bytes
 .../commands/__pycache__/env.cpython-310.pyc       |   Bin [31m0[m -> [32m3373[m bytes
 .../commands/__pycache__/estimate.cpython-310.pyc  |   Bin [31m0[m -> [32m10330[m bytes
 .../commands/__pycache__/launch.cpython-310.pyc    |   Bin [31m0[m -> [32m37786[m bytes
 .../commands/__pycache__/merge.cpython-310.pyc     |   Bin [31m0[m -> [32m1854[m bytes
 .../commands/__pycache__/test.cpython-310.pyc      |   Bin [31m0[m -> [32m1663[m bytes
 .../commands/__pycache__/to_fsdp2.cpython-310.pyc  |   Bin [31m0[m -> [32m4077[m bytes
 .../commands/__pycache__/tpu.cpython-310.pyc       |   Bin [31m0[m -> [32m3859[m bytes
 .../commands/__pycache__/utils.cpython-310.pyc     |   Bin [31m0[m -> [32m3797[m bytes
 .../accelerate/commands/accelerate_cli.py          |    54 [32m+[m
 .../accelerate/commands/config/__init__.py         |    52 [32m+[m
 .../config/__pycache__/__init__.cpython-310.pyc    |   Bin [31m0[m -> [32m1103[m bytes
 .../config/__pycache__/cluster.cpython-310.pyc     |   Bin [31m0[m -> [32m20005[m bytes
 .../config/__pycache__/config.cpython-310.pyc      |   Bin [31m0[m -> [32m2450[m bytes
 .../config/__pycache__/config_args.cpython-310.pyc |   Bin [31m0[m -> [32m7433[m bytes
 .../__pycache__/config_utils.cpython-310.pyc       |   Bin [31m0[m -> [32m3026[m bytes
 .../config/__pycache__/default.cpython-310.pyc     |   Bin [31m0[m -> [32m4383[m bytes
 .../config/__pycache__/sagemaker.cpython-310.pyc   |   Bin [31m0[m -> [32m7002[m bytes
 .../config/__pycache__/update.cpython-310.pyc      |   Bin [31m0[m -> [32m1874[m bytes
 .../accelerate/commands/config/cluster.py          |   939 [32m+[m
 .../accelerate/commands/config/config.py           |    89 [32m+[m
 .../accelerate/commands/config/config_args.py      |   252 [32m+[m
 .../accelerate/commands/config/config_utils.py     |   122 [32m+[m
 .../accelerate/commands/config/default.py          |   172 [32m+[m
 .../accelerate/commands/config/sagemaker.py        |   274 [32m+[m
 .../accelerate/commands/config/update.py           |    63 [32m+[m
 .../Lib/site-packages/accelerate/commands/env.py   |   143 [32m+[m
 .../site-packages/accelerate/commands/estimate.py  |   318 [32m+[m
 .../site-packages/accelerate/commands/launch.py    |  1417 [32m+[m
 .../accelerate/commands/menu/__init__.py           |    14 [32m+[m
 .../menu/__pycache__/__init__.cpython-310.pyc      |   Bin [31m0[m -> [32m250[m bytes
 .../menu/__pycache__/cursor.cpython-310.pyc        |   Bin [31m0[m -> [32m1441[m bytes
 .../menu/__pycache__/helpers.cpython-310.pyc       |   Bin [31m0[m -> [32m1658[m bytes
 .../menu/__pycache__/input.cpython-310.pyc         |   Bin [31m0[m -> [32m2361[m bytes
 .../menu/__pycache__/keymap.cpython-310.pyc        |   Bin [31m0[m -> [32m2406[m bytes
 .../__pycache__/selection_menu.cpython-310.pyc     |   Bin [31m0[m -> [32m4492[m bytes
 .../accelerate/commands/menu/cursor.py             |    65 [32m+[m
 .../accelerate/commands/menu/helpers.py            |    59 [32m+[m
 .../accelerate/commands/menu/input.py              |    84 [32m+[m
 .../accelerate/commands/menu/keymap.py             |   133 [32m+[m
 .../accelerate/commands/menu/selection_menu.py     |   145 [32m+[m
 .../Lib/site-packages/accelerate/commands/merge.py |    69 [32m+[m
 .../Lib/site-packages/accelerate/commands/test.py  |    65 [32m+[m
 .../site-packages/accelerate/commands/to_fsdp2.py  |   174 [32m+[m
 .../Lib/site-packages/accelerate/commands/tpu.py   |   157 [32m+[m
 .../Lib/site-packages/accelerate/commands/utils.py |   123 [32m+[m
 .../Lib/site-packages/accelerate/data_loader.py    |  1469 [32m+[m
 .../.venv/Lib/site-packages/accelerate/hooks.py    |   810 [32m+[m
 .../Lib/site-packages/accelerate/inference.py      |   186 [32m+[m
 .../Lib/site-packages/accelerate/launchers.py      |   322 [32m+[m
 .../Lib/site-packages/accelerate/local_sgd.py      |   107 [32m+[m
 .../.venv/Lib/site-packages/accelerate/logging.py  |   133 [32m+[m
 .../Lib/site-packages/accelerate/memory_utils.py   |    22 [32m+[m
 .../Lib/site-packages/accelerate/optimizer.py      |   213 [32m+[m
 .../site-packages/accelerate/parallelism_config.py |   398 [32m+[m
 .../Lib/site-packages/accelerate/scheduler.py      |    98 [32m+[m
 .../.venv/Lib/site-packages/accelerate/state.py    |  1371 [32m+[m
 .../accelerate/test_utils/__init__.py              |    66 [32m+[m
 .../__pycache__/__init__.cpython-310.pyc           |   Bin [31m0[m -> [32m1679[m bytes
 .../__pycache__/examples.cpython-310.pyc           |   Bin [31m0[m -> [32m5295[m bytes
 .../test_utils/__pycache__/testing.cpython-310.pyc |   Bin [31m0[m -> [32m30474[m bytes
 .../__pycache__/training.cpython-310.pyc           |   Bin [31m0[m -> [32m5313[m bytes
 .../accelerate/test_utils/examples.py              |   148 [32m+[m
 .../accelerate/test_utils/scripts/__init__.py      |    13 [32m+[m
 .../scripts/__pycache__/__init__.cpython-310.pyc   |   Bin [31m0[m -> [32m206[m bytes
 .../scripts/__pycache__/test_cli.cpython-310.pyc   |   Bin [31m0[m -> [32m644[m bytes
 .../__pycache__/test_ddp_comm_hook.cpython-310.pyc |   Bin [31m0[m -> [32m2550[m bytes
 .../test_distributed_data_loop.cpython-310.pyc     |   Bin [31m0[m -> [32m12038[m bytes
 .../__pycache__/test_merge_weights.cpython-310.pyc |   Bin [31m0[m -> [32m4981[m bytes
 .../__pycache__/test_notebook.cpython-310.pyc      |   Bin [31m0[m -> [32m4243[m bytes
 .../scripts/__pycache__/test_ops.cpython-310.pyc   |   Bin [31m0[m -> [32m4828[m bytes
 .../__pycache__/test_script.cpython-310.pyc        |   Bin [31m0[m -> [32m22925[m bytes
 .../scripts/__pycache__/test_sync.cpython-310.pyc  |   Bin [31m0[m -> [32m9266[m bytes
 .../test_utils/scripts/external_deps/__init__.py   |    13 [32m+[m
 .../__pycache__/__init__.cpython-310.pyc           |   Bin [31m0[m -> [32m220[m bytes
 .../__pycache__/test_checkpointing.cpython-310.pyc |   Bin [31m0[m -> [32m6584[m bytes
 .../test_ds_alst_ulysses_sp.cpython-310.pyc        |   Bin [31m0[m -> [32m2904[m bytes
 .../test_ds_multiple_model.cpython-310.pyc         |   Bin [31m0[m -> [32m8178[m bytes
 .../__pycache__/test_metrics.cpython-310.pyc       |   Bin [31m0[m -> [32m9884[m bytes
 .../test_peak_memory_usage.cpython-310.pyc         |   Bin [31m0[m -> [32m7821[m bytes
 .../__pycache__/test_performance.cpython-310.pyc   |   Bin [31m0[m -> [32m7258[m bytes
 .../__pycache__/test_pippy.cpython-310.pyc         |   Bin [31m0[m -> [32m2273[m bytes
 .../test_zero3_integration.cpython-310.pyc         |   Bin [31m0[m -> [32m1249[m bytes
 .../scripts/external_deps/test_checkpointing.py    |   269 [32m+[m
 .../external_deps/test_ds_alst_ulysses_sp.py       |   131 [32m+[m
 .../external_deps/test_ds_multiple_model.py        |   331 [32m+[m
 .../scripts/external_deps/test_metrics.py          |   307 [32m+[m
 .../external_deps/test_peak_memory_usage.py        |   323 [32m+[m
 .../scripts/external_deps/test_performance.py      |   308 [32m+[m
 .../test_utils/scripts/external_deps/test_pippy.py |   117 [32m+[m
 .../external_deps/test_zero3_integration.py        |    59 [32m+[m
 .../accelerate/test_utils/scripts/test_cli.py      |    32 [32m+[m
 .../test_utils/scripts/test_ddp_comm_hook.py       |    85 [32m+[m
 .../scripts/test_distributed_data_loop.py          |   429 [32m+[m
 .../test_utils/scripts/test_merge_weights.py       |   158 [32m+[m
 .../accelerate/test_utils/scripts/test_notebook.py |   150 [32m+[m
 .../accelerate/test_utils/scripts/test_ops.py      |   193 [32m+[m
 .../accelerate/test_utils/scripts/test_script.py   |   909 [32m+[m
 .../accelerate/test_utils/scripts/test_sync.py     |   414 [32m+[m
 .../site-packages/accelerate/test_utils/testing.py |   896 [32m+[m
 .../accelerate/test_utils/training.py              |   150 [32m+[m
 .../.venv/Lib/site-packages/accelerate/tracking.py |  1315 [32m+[m
 .../Lib/site-packages/accelerate/utils/__init__.py |   307 [32m+[m
 .../utils/__pycache__/__init__.cpython-310.pyc     |   Bin [31m0[m -> [32m9128[m bytes
 .../utils/__pycache__/ao.cpython-310.pyc           |   Bin [31m0[m -> [32m4232[m bytes
 .../utils/__pycache__/bnb.cpython-310.pyc          |   Bin [31m0[m -> [32m14028[m bytes
 .../utils/__pycache__/constants.cpython-310.pyc    |   Bin [31m0[m -> [32m2898[m bytes
 .../utils/__pycache__/dataclasses.cpython-310.pyc  |   Bin [31m0[m -> [32m115258[m bytes
 .../utils/__pycache__/deepspeed.cpython-310.pyc    |   Bin [31m0[m -> [32m12421[m bytes
 .../utils/__pycache__/environment.cpython-310.pyc  |   Bin [31m0[m -> [32m17437[m bytes
 .../utils/__pycache__/fsdp_utils.cpython-310.pyc   |   Bin [31m0[m -> [32m25784[m bytes
 .../utils/__pycache__/imports.cpython-310.pyc      |   Bin [31m0[m -> [32m14509[m bytes
 .../utils/__pycache__/launch.cpython-310.pyc       |   Bin [31m0[m -> [32m22961[m bytes
 .../utils/__pycache__/megatron_lm.cpython-310.pyc  |   Bin [31m0[m -> [32m34899[m bytes
 .../utils/__pycache__/memory.cpython-310.pyc       |   Bin [31m0[m -> [32m5561[m bytes
 .../utils/__pycache__/modeling.cpython-310.pyc     |   Bin [31m0[m -> [32m63092[m bytes
 .../utils/__pycache__/offload.cpython-310.pyc      |   Bin [31m0[m -> [32m6966[m bytes
 .../utils/__pycache__/operations.cpython-310.pyc   |   Bin [31m0[m -> [32m32990[m bytes
 .../utils/__pycache__/other.cpython-310.pyc        |   Bin [31m0[m -> [32m18122[m bytes
 .../utils/__pycache__/random.cpython-310.pyc       |   Bin [31m0[m -> [32m4429[m bytes
 .../utils/__pycache__/rich.cpython-310.pyc         |   Bin [31m0[m -> [32m421[m bytes
 .../utils/__pycache__/torch_xla.cpython-310.pyc    |   Bin [31m0[m -> [32m1367[m bytes
 .../utils/__pycache__/tqdm.cpython-310.pyc         |   Bin [31m0[m -> [32m1188[m bytes
 .../__pycache__/transformer_engine.cpython-310.pyc |   Bin [31m0[m -> [32m4816[m bytes
 .../utils/__pycache__/versions.cpython-310.pyc     |   Bin [31m0[m -> [32m1691[m bytes
 .../.venv/Lib/site-packages/accelerate/utils/ao.py |   143 [32m+[m
 .../Lib/site-packages/accelerate/utils/bnb.py      |   473 [32m+[m
 .../site-packages/accelerate/utils/constants.py    |   108 [32m+[m
 .../site-packages/accelerate/utils/dataclasses.py  |  3226 [32m++[m
 .../site-packages/accelerate/utils/deepspeed.py    |   385 [32m+[m
 .../site-packages/accelerate/utils/environment.py  |   512 [32m+[m
 .../site-packages/accelerate/utils/fsdp_utils.py   |   916 [32m+[m
 .../Lib/site-packages/accelerate/utils/imports.py  |   544 [32m+[m
 .../Lib/site-packages/accelerate/utils/launch.py   |   827 [32m+[m
 .../site-packages/accelerate/utils/megatron_lm.py  |  1248 [32m+[m
 .../Lib/site-packages/accelerate/utils/memory.py   |   188 [32m+[m
 .../Lib/site-packages/accelerate/utils/modeling.py |  2204 [32m++[m
 .../Lib/site-packages/accelerate/utils/offload.py  |   213 [32m+[m
 .../site-packages/accelerate/utils/operations.py   |   991 [32m+[m
 .../Lib/site-packages/accelerate/utils/other.py    |   594 [32m+[m
 .../Lib/site-packages/accelerate/utils/random.py   |   165 [32m+[m
 .../Lib/site-packages/accelerate/utils/rich.py     |    24 [32m+[m
 .../site-packages/accelerate/utils/torch_xla.py    |    51 [32m+[m
 .../Lib/site-packages/accelerate/utils/tqdm.py     |    43 [32m+[m
 .../accelerate/utils/transformer_engine.py         |   186 [32m+[m
 .../Lib/site-packages/accelerate/utils/versions.py |    56 [32m+[m
 .../certifi-2026.6.17.dist-info/INSTALLER          |     1 [32m+[m
 .../certifi-2026.6.17.dist-info/METADATA           |    78 [32m+[m
 .../certifi-2026.6.17.dist-info/RECORD             |    14 [32m+[m
 .../certifi-2026.6.17.dist-info/WHEEL              |     5 [32m+[m
 .../certifi-2026.6.17.dist-info/licenses/LICENSE   |    20 [32m+[m
 .../certifi-2026.6.17.dist-info/top_level.txt      |     1 [32m+[m
 .../.venv/Lib/site-packages/certifi/__init__.py    |     4 [32m+[m
 .../.venv/Lib/site-packages/certifi/__main__.py    |    12 [32m+[m
 .../certifi/__pycache__/__init__.cpython-310.pyc   |   Bin [31m0[m -> [32m297[m bytes
 .../certifi/__pycache__/__main__.cpython-310.pyc   |   Bin [31m0[m -> [32m435[m bytes
 .../certifi/__pycache__/core.cpython-310.pyc       |   Bin [31m0[m -> [32m1410[m bytes
 backend/.venv/Lib/site-packages/certifi/cacert.pem |  3863 [32m+++[m
 backend/.venv/Lib/site-packages/certifi/core.py    |    83 [32m+[m
 .../_vendor/__init__.py => certifi/py.typed}       |     0
 .../Lib/site-packages/distutils-precedence.pth     |     2 [32m+[m[31m-[m
 .../filelock-3.29.7.dist-info/INSTALLER            |     1 [32m+[m
 .../filelock-3.29.7.dist-info/METADATA             |    38 [32m+[m
 .../site-packages/filelock-3.29.7.dist-info/RECORD |    34 [32m+[m
 .../site-packages/filelock-3.29.7.dist-info/WHEEL  |     4 [32m+[m
 .../filelock-3.29.7.dist-info/licenses/LICENSE     |    21 [32m+[m
 .../.venv/Lib/site-packages/filelock/__init__.py   |    93 [32m+[m
 .../filelock/__pycache__/__init__.cpython-310.pyc  |   Bin [31m0[m -> [32m1803[m bytes
 .../filelock/__pycache__/_api.cpython-310.pyc      |   Bin [31m0[m -> [32m21417[m bytes
 .../__pycache__/_async_read_write.cpython-310.pyc  |   Bin [31m0[m -> [32m9210[m bytes
 .../filelock/__pycache__/_error.cpython-310.pyc    |   Bin [31m0[m -> [32m1430[m bytes
 .../__pycache__/_read_write.cpython-310.pyc        |   Bin [31m0[m -> [32m13219[m bytes
 .../filelock/__pycache__/_soft.cpython-310.pyc     |   Bin [31m0[m -> [32m7652[m bytes
 .../filelock/__pycache__/_unix.cpython-310.pyc     |   Bin [31m0[m -> [32m3559[m bytes
 .../filelock/__pycache__/_util.cpython-310.pyc     |   Bin [31m0[m -> [32m3917[m bytes
 .../filelock/__pycache__/_windows.cpython-310.pyc  |   Bin [31m0[m -> [32m3426[m bytes
 .../filelock/__pycache__/asyncio.cpython-310.pyc   |   Bin [31m0[m -> [32m14653[m bytes
 .../filelock/__pycache__/version.cpython-310.pyc   |   Bin [31m0[m -> [32m567[m bytes
 backend/.venv/Lib/site-packages/filelock/_api.py   |   645 [32m+[m
 .../site-packages/filelock/_async_read_write.py    |   216 [32m+[m
 backend/.venv/Lib/site-packages/filelock/_error.py |    28 [32m+[m
 .../Lib/site-packages/filelock/_read_write.py      |   385 [32m+[m
 backend/.venv/Lib/site-packages/filelock/_soft.py  |   243 [32m+[m
 .../site-packages/filelock/_soft_rw/__init__.py    |    12 [32m+[m
 .../_soft_rw/__pycache__/__init__.cpython-310.pyc  |   Bin [31m0[m -> [32m539[m bytes
 .../_soft_rw/__pycache__/_async.cpython-310.pyc    |   Bin [31m0[m -> [32m9641[m bytes
 .../_soft_rw/__pycache__/_sync.cpython-310.pyc     |   Bin [31m0[m -> [32m29429[m bytes
 .../Lib/site-packages/filelock/_soft_rw/_async.py  |   213 [32m+[m
 .../Lib/site-packages/filelock/_soft_rw/_sync.py   |   935 [32m+[m
 backend/.venv/Lib/site-packages/filelock/_unix.py  |   114 [32m+[m
 backend/.venv/Lib/site-packages/filelock/_util.py  |    95 [32m+[m
 .../.venv/Lib/site-packages/filelock/_windows.py   |   111 [32m+[m
 .../.venv/Lib/site-packages/filelock/asyncio.py    |   414 [32m+[m
 .../_vendor/__init__.py => filelock/py.typed}      |     0
 .../.venv/Lib/site-packages/filelock/version.py    |    24 [32m+[m
 .../fsspec-2026.6.0.dist-info/INSTALLER            |     1 [32m+[m
 .../fsspec-2026.6.0.dist-info/METADATA             |   257 [32m+[m
 .../site-packages/fsspec-2026.6.0.dist-info/RECORD |   119 [32m+[m
 .../site-packages/fsspec-2026.6.0.dist-info/WHEEL  |     4 [32m+[m
 .../fsspec-2026.6.0.dist-info/licenses/LICENSE     |    29 [32m+[m
 backend/.venv/Lib/site-packages/fsspec/__init__.py |    71 [32m+[m
 .../fsspec/__pycache__/__init__.cpython-310.pyc    |   Bin [31m0[m -> [32m1510[m bytes
 .../fsspec/__pycache__/_version.cpython-310.pyc    |   Bin [31m0[m -> [32m568[m bytes
 .../fsspec/__pycache__/archive.cpython-310.pyc     |   Bin [31m0[m -> [32m2900[m bytes
 .../fsspec/__pycache__/asyn.cpython-310.pyc        |   Bin [31m0[m -> [32m30759[m bytes
 .../fsspec/__pycache__/caching.cpython-310.pyc     |   Bin [31m0[m -> [32m26297[m bytes
 .../fsspec/__pycache__/callbacks.cpython-310.pyc   |   Bin [31m0[m -> [32m10921[m bytes
 .../fsspec/__pycache__/compression.cpython-310.pyc |   Bin [31m0[m -> [32m5287[m bytes
 .../fsspec/__pycache__/config.cpython-310.pyc      |   Bin [31m0[m -> [32m3789[m bytes
 .../fsspec/__pycache__/conftest.cpython-310.pyc    |   Bin [31m0[m -> [32m3764[m bytes
 .../fsspec/__pycache__/core.cpython-310.pyc        |   Bin [31m0[m -> [32m22499[m bytes
 .../fsspec/__pycache__/dircache.cpython-310.pyc    |   Bin [31m0[m -> [32m3425[m bytes
 .../fsspec/__pycache__/exceptions.cpython-310.pyc  |   Bin [31m0[m -> [32m747[m bytes
 .../fsspec/__pycache__/fuse.cpython-310.pyc        |   Bin [31m0[m -> [32m10162[m bytes
 .../fsspec/__pycache__/generic.cpython-310.pyc     |   Bin [31m0[m -> [32m12533[m bytes
 .../fsspec/__pycache__/gui.cpython-310.pyc         |   Bin [31m0[m -> [32m14655[m bytes
 .../fsspec/__pycache__/json.cpython-310.pyc        |   Bin [31m0[m -> [32m4562[m bytes
 .../fsspec/__pycache__/mapping.cpython-310.pyc     |   Bin [31m0[m -> [32m9090[m bytes
 .../fsspec/__pycache__/parquet.cpython-310.pyc     |   Bin [31m0[m -> [32m14381[m bytes
 .../fsspec/__pycache__/registry.cpython-310.pyc    |   Bin [31m0[m -> [32m9701[m bytes
 .../fsspec/__pycache__/spec.cpython-310.pyc        |   Bin [31m0[m -> [32m67871[m bytes
 .../fsspec/__pycache__/transaction.cpython-310.pyc |   Bin [31m0[m -> [32m3214[m bytes
 .../fsspec/__pycache__/utils.cpython-310.pyc       |   Bin [31m0[m -> [32m20947[m bytes
 backend/.venv/Lib/site-packages/fsspec/_version.py |    24 [32m+[m
 backend/.venv/Lib/site-packages/fsspec/archive.py  |    75 [32m+[m
 backend/.venv/Lib/site-packages/fsspec/asyn.py     |  1158 [32m+[m
 backend/.venv/Lib/site-packages/fsspec/caching.py  |  1004 [32m+[m
 .../.venv/Lib/site-packages/fsspec/callbacks.py    |   324 [32m+[m
 .../.venv/Lib/site-packages/fsspec/compression.py  |   185 [32m+[m
 backend/.venv/Lib/site-packages/fsspec/config.py   |   131 [32m+[m
 backend/.venv/Lib/site-packages/fsspec/conftest.py |   125 [32m+[m
 backend/.venv/Lib/site-packages/fsspec/core.py     |   760 [32m+[m
 backend/.venv/Lib/site-packages/fsspec/dircache.py |    98 [32m+[m
 .../.venv/Lib/site-packages/fsspec/exceptions.py   |    18 [32m+[m
 backend/.venv/Lib/site-packages/fsspec/fuse.py     |   324 [32m+[m
 backend/.venv/Lib/site-packages/fsspec/generic.py  |   396 [32m+[m
 backend/.venv/Lib/site-packages/fsspec/gui.py      |   417 [32m+[m
 .../fsspec/implementations/__init__.py             |     0
 .../__pycache__/__init__.cpython-310.pyc           |   Bin [31m0[m -> [32m199[m bytes
 .../__pycache__/arrow.cpython-310.pyc              |   Bin [31m0[m -> [32m9339[m bytes
 .../__pycache__/asyn_wrapper.cpython-310.pyc       |   Bin [31m0[m -> [32m4237[m bytes
 .../__pycache__/cache_mapper.cpython-310.pyc       |   Bin [31m0[m -> [32m3282[m bytes
 .../__pycache__/cache_metadata.cpython-310.pyc     |   Bin [31m0[m -> [32m7239[m bytes
 .../__pycache__/cached.cpython-310.pyc             |   Bin [31m0[m -> [32m31519[m bytes
 .../__pycache__/chained.cpython-310.pyc            |   Bin [31m0[m -> [32m1045[m bytes
 .../__pycache__/dask.cpython-310.pyc               |   Bin [31m0[m -> [32m4769[m bytes
 .../__pycache__/data.cpython-310.pyc               |   Bin [31m0[m -> [32m2792[m bytes
 .../__pycache__/dbfs.cpython-310.pyc               |   Bin [31m0[m -> [32m14433[m bytes
 .../__pycache__/dirfs.cpython-310.pyc              |   Bin [31m0[m -> [32m14622[m bytes
 .../__pycache__/ftp.cpython-310.pyc                |   Bin [31m0[m -> [32m12840[m bytes
 .../__pycache__/gist.cpython-310.pyc               |   Bin [31m0[m -> [32m7136[m bytes
 .../__pycache__/git.cpython-310.pyc                |   Bin [31m0[m -> [32m4191[m bytes
 .../__pycache__/github.cpython-310.pyc             |   Bin [31m0[m -> [32m10123[m bytes
 .../__pycache__/http.cpython-310.pyc               |   Bin [31m0[m -> [32m25234[m bytes
 .../__pycache__/http_sync.cpython-310.pyc          |   Bin [31m0[m -> [32m25641[m bytes
 .../__pycache__/jupyter.cpython-310.pyc            |   Bin [31m0[m -> [32m4456[m bytes
 .../__pycache__/libarchive.cpython-310.pyc         |   Bin [31m0[m -> [32m6081[m bytes
 .../__pycache__/local.cpython-310.pyc              |   Bin [31m0[m -> [32m15544[m bytes
 .../__pycache__/memory.cpython-310.pyc             |   Bin [31m0[m -> [32m8513[m bytes
 .../__pycache__/reference.cpython-310.pyc          |   Bin [31m0[m -> [32m40787[m bytes
 .../__pycache__/sftp.cpython-310.pyc               |   Bin [31m0[m -> [32m6555[m bytes
 .../__pycache__/smb.cpython-310.pyc                |   Bin [31m0[m -> [32m13797[m bytes
 .../__pycache__/tar.cpython-310.pyc                |   Bin [31m0[m -> [32m3484[m bytes
 .../__pycache__/webhdfs.cpython-310.pyc    