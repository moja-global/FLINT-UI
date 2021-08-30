//import Vue from 'vue'
import axios from 'axios'

export default {
  state: {
    config: {
      title: '',
      pools_cbm: {
        Pools: {
          AboveGroundFastSoil: 0.0,
          AboveGroundSlowSoil: 0.0,
          AboveGroundVeryFastSoil: 0.0,
          Atmosphere: 0.0,
          BelowGroundFastSoil: 0.0,
          BelowGroundSlowSoil: 0.0,
          BelowGroundVeryFastSoil: 0.0,
          BlackCarbon: 0.0,
          CH4: 0.0,
          CO: 0.0,
          CO2: 0.0,
          DissolvedOrganicCarbon: 0.0,
          HardwoodBranchSnag: 0.0,
          HardwoodCoarseRoots: 0.0,
          HardwoodFineRoots: 0.0,
          HardwoodFoliage: 0.0,
          HardwoodMerch: 0.0,
          HardwoodOther: 0.0,
          HardwoodStemSnag: 0.0,
          MediumSoil: 0.0,
          NO2: 0.0,
          Peat: 0.0,
          Products: 0.0,
          SoftwoodBranchSnag: 0.0,
          SoftwoodCoarseRoots: 0.0,
          SoftwoodFineRoots: 0.0,
          SoftwoodFoliage: 0.0,
          SoftwoodMerch: 0.0,
          SoftwoodOther: 0.0,
          SoftwoodStemSnag: 0.0
        }
      },
      internal_variables: {
        Variables: {
          spatialLocationInfo: {
            flintdata: {
              type: 'SpatialLocationInfo',
              library: 'internal.flint',
              settings: {}
            }
          },
          simulateLandUnit: true,
          is_decaying: true,
          spinup_moss_only: false,
          run_peatland: false,
          peatlandId: -1,
          is_forest: true,
          run_moss: false,
          run_delay: false,
          landUnitBuildSuccess: true,
          regen_delay: 0,
          age: 0,
          tileIndex: 0,
          blockIndex: 0,
          cellIndex: 0,
          LandUnitId: -1,
          landUnitArea: 0,
          classifier_set: {},
          localDomainId: 0,
          LocalDomainId: 1,
          age_class: 0,
          historic_land_class: 'FL',
          current_land_class: 'FL',
          unfccc_land_class: 'UNFCCC_FL_R_FL'
        }
      },
      localdomain: {
        Libraries: {
          'moja.modules.cbm': 'external',
          'moja.modules.gdal': 'external'
        },
        LocalDomain: {
          start_date: '2010/01/01',
          end_date: '2021/01/01',
          landUnitBuildSuccess: 'landUnitBuildSuccess',
          simulateLandUnit: 'simulateLandUnit',
          sequencer_library: 'moja.modules.cbm',
          sequencer: 'CBMSequencer',
          timing: 'annual',
          type: 'spatial_tiled',
          landscape: {
            provider: 'RasterTiled',
            num_threads: 4,
            tiles: [
              {
                x: -106,
                y: 55,
                index: 12674
              }
            ],
            x_pixels: 4000,
            y_pixels: 4000,
            tile_size_x: 1.0,
            tile_size_y: 1.0
          }
        }
      },
      modules_cbm: {
        Modules: {
          CBMBuildLandUnitModule: {
            order: 1,
            library: 'moja.modules.cbm'
          },
          CBMSequencer: {
            order: 2,
            library: 'moja.modules.cbm'
          },
          CBMDisturbanceListener: {
            enabled: true,
            order: 3,
            library: 'moja.modules.cbm',
            settings: {
              vars: [
                'disturbances_2012',
                'disturbances_2011',
                'disturbances_2015',
                'disturbances_2016',
                'disturbances_2018',
                'disturbances_2014',
                'disturbances_2013'
              ]
            }
          },
          CBMDisturbanceEventModule: {
            enabled: true,
            order: 4,
            library: 'moja.modules.cbm'
          },
          CBMTransitionRulesModule: {
            enabled: true,
            order: 5,
            library: 'moja.modules.cbm'
          },
          CBMLandClassTransitionModule: {
            enabled: true,
            order: 6,
            library: 'moja.modules.cbm'
          },
          CBMGrowthModule: {
            enabled: true,
            order: 7,
            library: 'moja.modules.cbm'
          },
          CBMDecayModule: {
            enabled: true,
            order: 8,
            library: 'moja.modules.cbm',
            settings: {
              extra_decay_removals: false
            }
          },
          CBMAgeIndicators: {
            enabled: true,
            order: 9,
            library: 'moja.modules.cbm'
          },
          TransactionManagerAfterSubmitModule: {
            order: 10,
            library: 'internal.flint'
          }
        }
      },
      modules_output: {
        Modules: {
          CBMBuildLandUnitModule: {
            order: 1,
            library: 'moja.modules.cbm'
          },
          CBMSequencer: {
            order: 2,
            library: 'moja.modules.cbm'
          },
          CBMDisturbanceListener: {
            enabled: true,
            order: 3,
            library: 'moja.modules.cbm',
            settings: {
              vars: [
                'disturbances_2012',
                'disturbances_2011',
                'disturbances_2015',
                'disturbances_2016',
                'disturbances_2018',
                'disturbances_2014',
                'disturbances_2013'
              ]
            }
          },
          CBMDisturbanceEventModule: {
            enabled: true,
            order: 4,
            library: 'moja.modules.cbm'
          },
          CBMTransitionRulesModule: {
            enabled: true,
            order: 5,
            library: 'moja.modules.cbm'
          },
          CBMLandClassTransitionModule: {
            enabled: true,
            order: 6,
            library: 'moja.modules.cbm'
          },
          CBMGrowthModule: {
            enabled: true,
            order: 7,
            library: 'moja.modules.cbm'
          },
          CBMDecayModule: {
            enabled: true,
            order: 8,
            library: 'moja.modules.cbm',
            settings: {
              extra_decay_removals: false
            }
          },
          CBMAgeIndicators: {
            enabled: true,
            order: 9,
            library: 'moja.modules.cbm'
          },
          TransactionManagerAfterSubmitModule: {
            order: 10,
            library: 'internal.flint'
          }
        }
      },
      provider_config: {
        Providers: {
          SQLite: {
            path: '../input_database/gcbm_input.db',
            type: 'SQLite'
          },
          RasterTiled: {
            layers: [
              {
                name: 'disturbances_2012',
                layer_path: '../layers/tiled/disturbances_2012_moja.tiff',
                layer_prefix: 'disturbances_2012_moja'
              },
              {
                name: 'disturbances_2011',
                layer_path: '../layers/tiled/disturbances_2011_moja.tiff',
                layer_prefix: 'disturbances_2011_moja'
              },
              {
                name: 'disturbances_2015',
                layer_path: '../layers/tiled/disturbances_2015_moja.tiff',
                layer_prefix: 'disturbances_2015_moja'
              },
              {
                name: 'disturbances_2014',
                layer_path: '../layers/tiled/disturbances_2014_moja.tiff',
                layer_prefix: 'disturbances_2014_moja'
              },
              {
                name: 'disturbances_2018',
                layer_path: '../layers/tiled/disturbances_2018_moja.tiff',
                layer_prefix: 'disturbances_2018_moja'
              },
              {
                name: 'disturbances_2016',
                layer_path: '../layers/tiled/disturbances_2016_moja.tiff',
                layer_prefix: 'disturbances_2016_moja'
              },
              {
                name: 'Classifier2',
                layer_path: '../layers/tiled/Classifier2_moja.tiff',
                layer_prefix: 'Classifier2_moja'
              },
              {
                name: 'initial_age',
                layer_path: '../layers/tiled/initial_age_moja.tiff',
                layer_prefix: 'initial_age_moja'
              },
              {
                name: 'mean_annual_temperature',
                layer_path: '../layers/tiled/mean_annual_temperature_moja.tiff',
                layer_prefix: 'mean_annual_temperature_moja'
              },
              {
                name: 'Classifier1',
                layer_path: '../layers/tiled/Classifier1_moja.tiff',
                layer_prefix: 'Classifier1_moja'
              },
              {
                name: 'disturbances_2013',
                layer_path: '../layers/tiled/disturbances_2013_moja.tiff',
                layer_prefix: 'disturbances_2013_moja'
              }
            ],
            blockLonSize: 0.1,
            tileLatSize: 1.0,
            tileLonSize: 1.0,
            cellLatSize: 0.00025,
            cellLonSize: 0.00025,
            blockLatSize: 0.1,
            type: 'RasterTiledGDAL',
            library: 'moja.modules.gdal'
          }
        }
      },
      spinup: {
        Spinup: {
          enabled: true,
          sequencer_library: 'moja.modules.cbm',
          simulateLandUnit: 'simulateLandUnit',
          landUnitBuildSuccess: 'landUnitBuildSuccess',
          sequencer: 'CBMSpinupSequencer'
        },
        SpinupVariables: {
          delay: 0,
          minimum_rotation: 10,
          run_delay: false
        },
        Variables: {
          spinup_parameters: {
            transform: {
              queryString:
                'SELECT s.return_interval AS return_interval, s.max_rotations AS max_rotations, dt.name AS historic_disturbance_type, dt.name AS last_pass_disturbance_type, s.mean_annual_temperature AS mean_annual_temperature, 0 as delay FROM spinup_parameter s INNER JOIN disturbance_type dt ON s.historic_disturbance_type_id = dt.id INNER JOIN spatial_unit spu ON spu.spinup_parameter_id = s.id INNER JOIN admin_boundary a ON spu.admin_boundary_id = a.id INNER JOIN eco_boundary e ON spu.eco_boundary_id = e.id WHERE a.name = {var:admin_boundary} AND e.name = {var:eco_boundary}',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          }
        },
        SpinupModules: {
          CBMSpinupSequencer: {
            create_new: true,
            library: 'moja.modules.cbm',
            order: 1
          },
          CBMBuildLandUnitModule: {
            create_new: true,
            library: 'moja.modules.cbm',
            order: 2
          },
          CBMGrowthModule: {
            create_new: true,
            library: 'moja.modules.cbm',
            order: 3
          },
          CBMDecayModule: {
            create_new: true,
            library: 'moja.modules.cbm',
            order: 4
          },
          TransactionManagerAfterSubmitModule: {
            create_new: true,
            library: 'internal.flint',
            order: 5
          },
          CBMSpinupDisturbanceModule: {
            create_new: true,
            library: 'moja.modules.cbm',
            order: 6
          }
        }
      },
      variables: {
        Variables: {
          enable_peatland: false,
          enable_moss: false,
          admin_boundary: 'British Columbia',
          eco_boundary: 'Taiga Plains',
          initial_age: {
            transform: {
              library: 'internal.flint',
              type: 'LocationIdxFromFlintDataTransform',
              provider: 'RasterTiled',
              data_id: 'initial_age'
            }
          },
          initial_historic_land_class: 'FL',
          initial_current_land_class: 'FL',
          age_class_range: 20,
          age_maximum: 300,
          slow_ag_to_bg_mixing_rate: 0.006,
          disturbance_matrices: {
            transform: {
              queryString:
                'SELECT dm.id AS disturbance_matrix_id, source_pool.name as source_pool_name, dest_pool.name as dest_pool_name, dv.proportion FROM disturbance_matrix dm INNER JOIN disturbance_matrix_value dv ON dm.id = dv.disturbance_matrix_id INNER JOIN pool source_pool ON dv.source_pool_id = source_pool.id INNER JOIN pool dest_pool ON dv.sink_pool_id = dest_pool.id',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          softwood_yield_table: {
            transform: {
              queryString:
                "SELECT gcv.age AS age, SUM(gcv.merchantable_volume) AS merchantable_volume FROM (SELECT CASE WHEN gc.id IS NOT NULL THEN gc.id ELSE -1 END AS growth_curve_component_id FROM growth_curve_component gc INNER JOIN species s ON s.id = gc.species_id INNER JOIN forest_type ft ON ft.id = s.forest_type_id WHERE gc.growth_curve_id = {var:growth_curve_id} AND LOWER(ft.name) LIKE LOWER('Softwood')) AS gc INNER JOIN growth_curve_component_value gcv ON gc.growth_curve_component_id = gcv.growth_curve_component_id GROUP BY gcv.age",
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          reporting_classifiers: {
            transform: {
              allow_nulls: true,
              type: 'CompositeTransform',
              library: 'internal.flint',
              vars: ['classifier_set']
            }
          },
          land_class_transitions: {
            transform: {
              queryString:
                'SELECT dt.name AS disturbance_type, lc.code AS land_class_transition, lc.is_forest, lc.years_to_permanent FROM disturbance_type dt INNER JOIN land_class lc ON dt.transition_land_class_id = lc.id',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          transition_rules: {
            transform: {
              queryString:
                'SELECT t.id AS id, age, regen_delay, description, tt.name AS reset_type FROM transition t INNER JOIN transition_type tt ON t.transition_type_id = tt.id',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          transition_rule_matches: {
            transform: {
              classifier_set_var: 'classifier_set',
              type: 'TransitionRuleTransform',
              library: 'moja.modules.cbm',
              provider: 'SQLite'
            }
          },
          spatial_unit_id: {
            transform: {
              queryString:
                'SELECT spu.id FROM spatial_unit spu INNER JOIN admin_boundary a ON spu.admin_boundary_id = a.id INNER JOIN eco_boundary e ON spu.eco_boundary_id = e.id WHERE a.name = {var:admin_boundary} AND e.name = {var:eco_boundary}',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          hardwood_yield_table: {
            transform: {
              queryString:
                "SELECT gcv.age AS age, SUM(gcv.merchantable_volume) AS merchantable_volume FROM (SELECT CASE WHEN gc.id IS NOT NULL THEN gc.id ELSE -1 END AS growth_curve_component_id FROM growth_curve_component gc INNER JOIN species s ON s.id = gc.species_id INNER JOIN forest_type ft ON ft.id = s.forest_type_id WHERE gc.growth_curve_id = {var:growth_curve_id} AND LOWER(ft.name) LIKE LOWER('Hardwood')) AS gc INNER JOIN growth_curve_component_value gcv ON gc.growth_curve_component_id = gcv.growth_curve_component_id GROUP BY gcv.age",
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          turnover_rates: {
            transform: {
              queryString:
                "SELECT COALESCE(sw_turnover.foliage, 0) AS sw_foliage_turnover, COALESCE(hw_turnover.foliage, 0) AS hw_foliage_turnover, COALESCE(sw_turnover.stem, 0) AS sw_stem_turnover, COALESCE(hw_turnover.stem, 0) AS hw_stem_turnover, COALESCE(sw_turnover.branch, 0) AS sw_branch_turnover, COALESCE(hw_turnover.branch, 0) AS hw_branch_turnover, COALESCE(sw_turnover.branch_snag_split, 0) AS sw_other_to_branch_snag_split, COALESCE(hw_turnover.branch_snag_split, 0) AS hw_other_to_branch_snag_split, COALESCE(sw_turnover.stem_snag, 0) AS sw_stem_snag_turnover, COALESCE(hw_turnover.stem_snag, 0) AS hw_stem_snag_turnover, COALESCE(sw_turnover.branch_snag, 0) AS sw_branch_snag_turnover, COALESCE(hw_turnover.branch_snag, 0) AS hw_branch_snag_turnover, COALESCE(sw_turnover.coarse_ag_split, 0) AS sw_coarse_root_split, COALESCE(hw_turnover.coarse_ag_split, 0) AS hw_coarse_root_split, COALESCE(sw_turnover.coarse_root, 0) AS sw_coarse_root_turnover, COALESCE(hw_turnover.coarse_root, 0) AS hw_coarse_root_turnover, COALESCE(sw_turnover.fine_ag_split, 0) AS sw_fine_root_ag_split, COALESCE(hw_turnover.fine_ag_split, 0) AS hw_fine_root_ag_split, COALESCE(sw_turnover.fine_root, 0) AS sw_fine_root_turnover, COALESCE(hw_turnover.fine_root, 0) AS hw_fine_root_turnover FROM growth_curve gc LEFT JOIN ( SELECT growth_curve_id, foliage, stem, branch, branch_snag_split, stem_snag, branch_snag, coarse_ag_split, coarse_root, fine_ag_split, fine_root FROM turnover_parameter_association tpa INNER JOIN eco_boundary e ON tpa.eco_boundary_id = e.id INNER JOIN genus g ON tpa.genus_id = g.id INNER JOIN species s ON s.genus_id = g.id INNER JOIN forest_type f ON s.forest_type_id = f.id INNER JOIN growth_curve_component gcc ON gcc.species_id = s.id INNER JOIN turnover_parameter t ON tpa.turnover_parameter_id = t.id WHERE gcc.growth_curve_id = {var:growth_curve_id} AND e.name = {var:eco_boundary} AND f.name = 'Softwood' ORDER BY gcc.id LIMIT 1 ) AS sw_turnover ON gc.id = sw_turnover.growth_curve_id LEFT JOIN ( SELECT growth_curve_id, foliage, stem, branch, branch_snag_split, stem_snag, branch_snag, coarse_ag_split, coarse_root, fine_ag_split, fine_root FROM turnover_parameter_association tpa INNER JOIN eco_boundary e ON tpa.eco_boundary_id = e.id INNER JOIN genus g ON tpa.genus_id = g.id INNER JOIN species s ON s.genus_id = g.id INNER JOIN forest_type f ON s.forest_type_id = f.id INNER JOIN growth_curve_component gcc ON gcc.species_id = s.id INNER JOIN turnover_parameter t ON tpa.turnover_parameter_id = t.id WHERE gcc.growth_curve_id = {var:growth_curve_id} AND e.name = {var:eco_boundary} AND f.name = 'Hardwood' ORDER BY gcc.id LIMIT 1 ) AS hw_turnover ON gc.id = hw_turnover.growth_curve_id WHERE gc.id = {var:growth_curve_id}",
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          disturbance_type_codes: {
            transform: {
              queryString:
                'SELECT dt.name AS disturbance_type, dt.code AS disturbance_type_code FROM disturbance_type dt',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          transition_rule_classifiers: {
            transform: {
              queryString:
                'SELECT t.id, c.name AS classifier_name, cv.value AS classifier_value FROM transition t INNER JOIN transition_classifier_value tcv ON t.id = tcv.transition_id INNER JOIN classifier_value cv ON tcv.classifier_value_id = cv.id INNER JOIN classifier c ON cv.classifier_id = c.id',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          initial_classifier_set: {
            transform: {
              type: 'CompositeTransform',
              library: 'internal.flint',
              vars: ['Classifier2', 'Classifier1']
            }
          },
          disturbance_matrix_associations: {
            transform: {
              queryString:
                'SELECT dt.name AS disturbance_type, dma.spatial_unit_id, dma.disturbance_matrix_id FROM disturbance_matrix_association dma INNER JOIN disturbance_type dt ON dma.disturbance_type_id = dt.id',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          other_to_branch_snag_split: {
            transform: {
              queryString:
                'SELECT t.branch_snag_split AS slow_mixing_rate FROM eco_boundary e INNER JOIN turnover_parameter t ON e.turnover_parameter_id = t.id WHERE e.name LIKE {var:eco_boundary}',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          growth_curve_id: {
            transform: {
              classifier_set_var: 'classifier_set',
              type: 'GrowthCurveTransform',
              library: 'moja.modules.cbm',
              provider: 'SQLite'
            }
          },
          volume_to_biomass_parameters: {
            transform: {
              queryString:
                'SELECT ft.name AS forest_type, f.a as a, f.b as b, f.a_nonmerch as a_non_merch, f.b_nonmerch as b_non_merch, f.k_nonmerch as k_non_merch, f.cap_nonmerch as cap_non_merch, f.a_sap as a_sap, f.b_sap as b_sap, f.k_sap as k_sap, f.cap_sap as cap_sap, f.a1 as a1, f.a2 as a2, f.a3 as a3, f.b1 as b1, f.b2 as b2, f.b3 as b3, f.c1 as c1, f.c2 as c2, f.c3 as c3, f.min_volume as min_volume, f.max_volume as max_volume, f.low_stemwood_prop as low_stemwood_prop, f.high_stemwood_prop as high_stemwood_prop, f.low_stembark_prop as low_stembark_prop, f.high_stembark_prop as high_stembark_prop, f.low_branches_prop AS low_branches_prop, f.high_branches_prop as high_branches_prop, f.low_foliage_prop AS low_foliage_prop, f.high_foliage_prop AS high_foliage_prop, sp.sw_top_proportion AS softwood_top_prop, sp.sw_stump_proportion AS softwood_stump_prop, sp.hw_top_proportion AS hardwood_top_prop, sp.hw_stump_proportion AS hardwood_stump_prop, rp.hw_a AS hw_a, rp.hw_b AS hw_b, rp.sw_a AS sw_a, rp.frp_a AS frp_a, rp.frp_b AS frp_b, rp.frp_c AS frp_c FROM vol_to_bio_factor_association fa INNER JOIN vol_to_bio_factor f ON f.id = fa.vol_to_bio_factor_id INNER JOIN species s ON fa.species_id = s.id INNER JOIN growth_curve_component gcc ON s.id = gcc.species_id INNER JOIN forest_type ft ON s.forest_type_id = ft.id INNER JOIN spatial_unit spu ON fa.spatial_unit_id = spu.id INNER JOIN admin_boundary a ON spu.admin_boundary_id = a.id INNER JOIN stump_parameter sp ON a.stump_parameter_id = sp.id INNER JOIN root_parameter rp ON rp.id = fa.root_parameter_id WHERE gcc.growth_curve_id = {var:growth_curve_id} AND spu.id = {var:spatial_unit_id} ORDER BY gcc.id DESC',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          spu: {
            transform: {
              queryString:
                'select s.id AS spu_id from spatial_unit s inner join admin_boundary a on s.admin_boundary_id = a.id inner join eco_boundary e on s.eco_boundary_id = e.id where a.name like {var:admin_boundary} and e.name like {var:eco_boundary}',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          land_class_data: {
            transform: {
              queryString:
                'SELECT code AS land_class, is_forest, years_to_permanent FROM land_class lc',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          mean_annual_temperature: {
            transform: {
              library: 'internal.flint',
              type: 'LocationIdxFromFlintDataTransform',
              provider: 'RasterTiled',
              data_id: 'mean_annual_temperature'
            }
          },
          decay_parameters: {
            transform: {
              queryString:
                'SELECT p.name AS pool, dp.base_decay_rate AS organic_matter_decay_rate, dp.prop_to_atmosphere AS prop_to_atmosphere, dp.q10 AS q10, dp.reference_temp AS reference_temp, dp.max_rate AS max_decay_rate_soft FROM decay_parameter dp INNER JOIN dom_pool dom ON dp.dom_pool_id = dom.id INNER JOIN pool p ON p.id = dom.pool_id',
              type: 'SQLQueryTransform',
              library: 'internal.flint',
              provider: 'SQLite'
            }
          },
          disturbances_2012: {
            transform: {
              library: 'internal.flint',
              type: 'LocationIdxFromFlintDataTransform',
              provider: 'RasterTiled',
              data_id: 'disturbances_2012'
            }
          },
          disturbances_2011: {
            transform: {
              library: 'internal.flint',
              type: 'LocationIdxFromFlintDataTransform',
              provider: 'RasterTiled',
              data_id: 'disturbances_2011'
            }
          },
          disturbances_2015: {
            transform: {
              library: 'internal.flint',
              type: 'LocationIdxFromFlintDataTransform',
              provider: 'RasterTiled',
              data_id: 'disturbances_2015'
            }
          },
          disturbances_2014: {
            transform: {
              library: 'internal.flint',
              type: 'LocationIdxFromFlintDataTransform',
              provider: 'RasterTiled',
              data_id: 'disturbances_2014'
            }
          },
          disturbances_2018: {
            transform: {
              library: 'internal.flint',
              type: 'LocationIdxFromFlintDataTransform',
              provider: 'RasterTiled',
              data_id: 'disturbances_2018'
            }
          },
          disturbances_2016: {
            transform: {
              library: 'internal.flint',
              type: 'LocationIdxFromFlintDataTransform',
              provider: 'RasterTiled',
              data_id: 'disturbances_2016'
            }
          },
          Classifier2: {
            transform: {
              library: 'internal.flint',
              type: 'LocationIdxFromFlintDataTransform',
              provider: 'RasterTiled',
              data_id: 'Classifier2'
            }
          },
          Classifier1: {
            transform: {
              library: 'internal.flint',
              type: 'LocationIdxFromFlintDataTransform',
              provider: 'RasterTiled',
              data_id: 'Classifier1'
            }
          },
          disturbances_2013: {
            transform: {
              library: 'internal.flint',
              type: 'LocationIdxFromFlintDataTransform',
              provider: 'RasterTiled',
              data_id: 'disturbances_2013'
            }
          }
        }
      }
    },
    DropdownSelectedSim: ''
  },
  mutations: {
    setDropdownSimState(state, newValue) {
      this.state.gcbm.DropdownSelectedSim = newValue
    },
    save_new_gcbm_job_title(state, title) {
      console.log('passed title')
      console.log(title)
      state.config.title = title
      console.log(state.config.title)
    }
  },

  actions: {
    title_setter({ commit }, payload) {
      commit('save_new_gcbm_job_title', payload)
      console.log('from title_setter')
      console.log(this.state.gcbm.config.title)
    },
    send_new_gcbm_job_title() {
      var bodyFormData = new FormData()
      console.log(this.state.gcbm.config.title)
      bodyFormData.append('title', this.state.gcbm.config.title)
      console.log([...bodyFormData])
      axios
        .post('http://127.0.0.1:8081/gcbm/new', bodyFormData)
        .then((response) => {
          this._vm.$toast.success(`${response.data.data}`, { timeout: 5000 })
          console.log(response)
        })
        .catch((error) => {
          this._vm.$toast.error(`${error}`, { timeout: 2000 })
          console.log(error)
        })
    },
    check_gcbm_run_status() {
      axios.get('http://localhost:8081/gcbm/list').then((response) => {
        this._vm.$toast.success(`${response.data.data}`, { timeout: 5000 })
        console.log(response.data)
      })
    }
  }
}
